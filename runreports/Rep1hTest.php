<?php
session_start();
require_once '../functions/Database.php';
require_once '../functions/InfoTest1h.php';
require_once './../vendor/autoload.php';

use Spipu\Html2Pdf\Exception\ExceptionFormatter;
use Spipu\Html2Pdf\Exception\Html2PdfException;
use Spipu\Html2Pdf\Html2Pdf;

$Db = new Database();
$ObjectJson = new JsonObject();
$html2pdf = new Html2Pdf('P', 'A4', 'fr');
$rep = new InfoTest1h();

if (!$Db->Connect($_SESSION{'dbUser'}, $_SESSION['dbPass'])) {
    echo $ObjectJson->Json(0, 'Fallo de Conexion en la Base de Datos');
    exit(0);
}


$AlmacNumIdForm1H = $_REQUEST['AlmacNumIdForm1H'];
//$AlmacNumIdPrograma = $_REQUEST['AlmacNumIdPrograma'];
//$No = $_REQUEST['No'];


$data = $Db->GetData("SELECT AF.*, AP.*,
CASE AF.AlmacNumIdTipo WHEN 1 THEN 'Encargada de Almacén de Suministros'
						WHEN 2 THEN 'Encargado de Almacén de Medicamentos'
						WHEN 3 THEN 'Encargado de Almacén de Médico Quirúrgico'
						ELSE 'El Usuario no tiene asignado un Almacén'
						end AS EncAlmacen
FROM Almac.Form1H AF
INNER JOIN Almac.Programa AP ON AF.AlmacNumIdPrograma = AP.AlmacNumIdPrograma
where AF.AlmacNumIdForm1H = $AlmacNumIdForm1H", $_SESSION['dbUser'], $_SESSION['dbPass']);








$data[0]['ArrayDetalle'] = $Db->GetData("				 SELECT        rf.AlmacNumIdForm1H, rf.AlmacStrDependencia, rf.AlmacStrNitProveedor, CONVERT(varchar, rf.AlmacDateFecha, 103) AS AlmacDateFecha, rf.AlmacStrUnidEjec, rf.AlmacStrOrdCYPNo, rf.AlmacStrDatosFactura, 
                         rf.AlmacStrNomProveedor, rf.AlmacStrObservacionesForm1H, rf.AlmacNumIdTipo, rf.AlmacNumIdPrograma, dr.AlmacNumIdDetalleForm1H, dr.AlmacNumIdForm1H AS Expr1, dr.AlmacNumCantidad, dr.AlmacNumFolioLibAlmac, 
                         dr.AlmacNumPrecUnidad, dr.AlmacNumPrecValTotal, dr.AlmacNumFolioLibInven, dr.AlmacNumIdNomen, dr.AlmacNumCodPresentInsu AS Expr3, dr.AlmacNumTotal, dr.AlmacStrObservacionesDetall, dr.AlmacStrNoFacturaDetall, 
                         dr.AlmacStrNoLote, dr.AlmacDateFechaVenci1H, Almac.Insumos.AlmacNumRenglon, Almac.Insumos.AlmacNumCodInsumo, Almac.Insumos.AlmacStrNomInsumo, Almac.Insumos.AlmacStrCaractInsu, 
                         Almac.Insumos.AlmacStrPresentInsu, Almac.Insumos.AlmacStrCantYUnidInsu, Almac.Insumos.AlmacNumCodPresentInsu, Almac.Programa.AlmacNumIdPrograma AS Expr2, Almac.Programa.AlmacStrDescripcion, 
                         Almac.Nomenclatura.AlmacNumNomen, rf.AlmacStrTotalLetras, t.AlmacNumIdTest,  t.AlmacStrTestado
FROM            Almac.Nomenclatura INNER JOIN
                         Almac.Insumos INNER JOIN
                         Almac.DetalleForm1H AS dr ON Almac.Insumos.AlmacNumCodPresentInsu = dr.AlmacNumCodPresentInsu ON Almac.Nomenclatura.AlmacNumIdNomen = dr.AlmacNumIdNomen RIGHT OUTER JOIN
                         Almac.Programa INNER JOIN
                         Almac.Form1H AS rf ON Almac.Programa.AlmacNumIdPrograma = rf.AlmacNumIdPrograma ON dr.AlmacNumIdForm1H = rf.AlmacNumIdForm1H  
						 INNER JOIN Almac.Testado t on rf.AlmacNumIdForm1H = t.AlmacNumIdForm1H  = $AlmacNumIdForm1H", $_SESSION['dbUser'], $_SESSION['dbPass']);

//$data[0]['Arrayprograma'] = $Db->GetData("SELECT * from Almac.Programa where AlmacNumIdPrograma  = $AlmacNumIdPrograma", $_SESSION ['dbUser'], $_SESSION['dbPass']);

//$data[0]['NoAdmision'] = $No;

$rep->FnInfoTest1h($data);
try {
    //ob_start();
    $rep->RenderFnInfoTest1h();
    //$content = ob_get_clean();
    //$html2pdf->writeHTML($content);
} catch (Html2PdfException $e) {
    $html2pdf->clean();
    $formatter = new ExceptionFormatter($e);
    echo $formatter->getHtmlMessage();
}

