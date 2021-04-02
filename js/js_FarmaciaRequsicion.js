$(document).ready(function () {

    var f = new Date();

    if(f.getMonth() +1 <=9){
        let fecha = (f.getFullYear() + "-0" + (f.getMonth() +1) + "-" + f.getDate());
        $('#inputFecha').val(fecha);
        console.log(fecha);
    }else {
        let fecha = (f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate());
        $('#inputFecha').val(fecha);
        console.log(fecha);
    }




    //$('#inputEntrega').val('Yanileth R. Jaimes');
    //$('#inputCargoEntrega').val('Auxiliar De Farmacia');
    $('#inputJefe').val('Ana María Ríos Galindo');
    $('#inputCargoJefe').val('Jefe De Farmacia');
    $('#inputLugar').val('Villa Nueva');
});


//alertar toast
function swichSuccessWarning(codstate) {
    /*
    Esta Funcion se utiliza para indicarle al Toast
    que Tipo de Alerta debe mostrar, si Satisfactorio o error
    */
    if (codstate === '0' || codstate === 0) {
        return 'error'
    } else {
        return 'success'
    }
}

function buscarInsumoGeneral(){
    let codInsumo = $('#inputCodigo').val();
    $('#SelCodUnico').empty();
    $('#SelCodUnico').append("<option>Seleccione presentacion</option>");
    let esperaInsumo = $.ajax({
        url: './api/v1/Insumo.php?AlmacNumCodInsumop=' + codInsumo, //
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",

        success: function (data) {
            var json = data.data;
            console.log(json);
            $(json).each(function (index, item) {
                AlmacNumCodInsumo = json[index].AlmacNumCodInsumo;
                AlmacNumRenglon = json[index].AlmacNumRenglon;
                AlmacStrNomInsumo = json[index].AlmacStrNomInsumo;
                AlmacStrCaractInsu = json[index].AlmacStrCaractInsu;
                AlmacStrPresentInsu = json[index].AlmacStrPresentInsu;
                AlmacStrCantYUnidInsu = json[index].AlmacStrCantYUnidInsu;
                AlmacNumCodPresentInsu = json[index].AlmacNumCodPresentInsu;
                FarmStrPresentInusmo = json[index].FarmStrPresentInusmo;
                FarmStrUniInsumo = json[index].FarmStrUniInsumo;

                $('#SelCodUnico').append('<option value="'+AlmacNumCodPresentInsu+'">'+FarmStrPresentInusmo+' '+ FarmStrUniInsumo+'</option>')

            });

        },
        error: function (data) {
            alert("No se lograron cargar los datos(InforAgenda)" + data.responseText);
        }
    });

    $.when(esperaInsumo).done(function () {
        $('#SelCodUnico').prop('disabled', false);
    });
}


function buscarInsumoEspecifico(codigoUnico){

    let esperarinsumo = $.ajax({
        url: './api/v1/Insumo.php?AlmacNumCodPresentInsup=' + codigoUnico,
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",

        success: function (data) {
            var json = data.data;
            console.log(json);
            $(json).each(function (index, item) {
                AlmacNumCodInsumo = json[index].AlmacNumCodInsumo;
                AlmacNumRenglon = json[index].AlmacNumRenglon;
                AlmacStrNomInsumo = json[index].AlmacStrNomInsumo;
                AlmacStrCaractInsu = json[index].AlmacStrCaractInsu;
                AlmacStrPresentInsu = json[index].AlmacStrPresentInsu;
                AlmacStrCantYUnidInsu = json[index].AlmacStrCantYUnidInsu;
                AlmacNumCodPresentInsu = json[index].AlmacNumCodPresentInsu;
                FarmStrPresentInusmo = json[index].FarmStrPresentInusmo;
                FarmStrUniInsumo = json[index].FarmStrUniInsumo;

                //$('#inputNomInsumo').val(AlmacStrNomInsumo);
                $('#inputFarmDescrip').val(AlmacStrNomInsumo+', '+FarmStrPresentInusmo+','+FarmStrUniInsumo);


            });

        },
        error: function (data) {
            alert("No se lograron cargar los datos(InforAgenda)" + data.responseText);
        }
    });
    console.log(codigoUnico + "pruebacodigounico")
    bucarKardexFarmacia(codigoUnico);
    cargarLoteVencimiento(codigoUnico);
}

function bucarKardexFarmacia(codigoUnico) {
    var IdKardexFarmacia;
    let esperarKFamrmacia =  $.ajax({
        url: './api/v1/FarmKardex.php?AlmacNumCodPresentInsu=' + codigoUnico,
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",

        success: function (data) {
            var json = data.data;
            console.log(json);
            $(json).each(function (index, item) {

                IdKardexFarmacia=  FarmNumIdKardexFarm= json[index].FarmNumIdKardexFarm;
                FarmNumNivelMinimo= json[index].FarmNumNivelMinimo;
                FarmNumNivelMaximo= json[index].FarmNumNivelMaximo;
                AlmacNumCodPresentInsu= json[index].AlmacNumCodPresentInsu;
                FarmNumTipBodeg= json[index].FarmNumTipBodeg;
                FarmBinEstado= json[index].FarmBinEstado;
                //FarmNumCantExist= json[index].FarmNumCantExist;
                //FarmNumPreUnExist= json[index].FarmNumPreUnExist;
                //FarmNumPreTotExist= json[index].FarmNumPreTotExist;

                $('#inputKardex').val(FarmNumIdKardexFarm);

                

            });

        },
        error: function (data) {
            alert("No se lograron cargar los datos(InforAgenda)" + data.responseText);
        }
    });

}

function añadirTabla() {
    let inputCodigo = $('#inputCodigo').val();
    let inputFarmDescrip = $('#inputFarmDescrip').val();
    let SelCodUnico = $('#SelCodUnico').val();
    let inputCantSolicitada = $('#inputCantSolicitada').val();
    let inputCantDespachada = $('#inputCantDespachada').val();
    let inputKardex = $('#inputKardex').val();
    let inputDateVenci = $('#inputDateVenci').val();
    let inputNoLote = $('#inputNoLote').val();
    let inputCantActual = $('#inputCantActual').val();    

    if(inputCodigo == '' ||inputCodigo == null ||inputCodigo == undefined){
        $.toast({
            title: 'Ups!',
            subtitle: '1 segundo',
            content: ' codigo no puede ir vacio',
            type: 'error',
            pause_on_hover: true,
            delay: 5000
        });

        return false;
    }

    if(inputCantSolicitada == '' ||inputCantSolicitada == null ||inputCantSolicitada == undefined){
        $.toast({
            title: 'Ups!',
            subtitle: '1 segundo',
            content: ' Cantidad Solicitada no puede ir vacio',
            type: 'error',
            pause_on_hover: true,
            delay: 5000
        });

        return false;
    }


    if(inputCantDespachada == '' ||inputCantDespachada == null ||inputCantDespachada == undefined){
        $.toast({
            title: 'Ups!',
            subtitle: '1 segundo',
            content: ' Cantidad Despachada no puede ir vacio',
            type: 'error',
            pause_on_hover: true,
            delay: 5000
        });

        return false;

    }

  //console.log (inputCantDespachada + inputCantActual)
  //if(parseInt (inputCantDespachada) > parseInt (inputCantActual)){
  //     $.toast({
  //         title: 'Ups!',
  //         subtitle: '1 segundo',
  //         content: 'No hay cantidad suficiente',
  //         type: 'error',
  //         pause_on_hover: true,
  //         delay: 5000
  //     });

  //     return false;
  // }





    $('#tbodyRequi').append('<tr>' +
        '<td scope="row">'+inputCodigo+'</td>' +
        '<td>'+inputFarmDescrip+'</td>' +
        '<td>'+inputCantSolicitada+'</td>' +
        '<td>'+inputCantDespachada+'</td>' +
        '<td hidden>'+inputKardex+'</td>' +
        '<td hidden>'+SelCodUnico+'</td>' +
        '<td hidden>'+inputDateVenci+'</td>' +
        '<td hidden>'+inputNoLote+'</td>' +
        '<td><button class="btn btn-danger borrar"><i class="far fa-trash-alt"></i></button></td>'
        +'</tr>');

    $('#inputCodigo').val('');
    $('#inputFarmDescrip').val('');
    $('#SelCodUnico').val('');
    $('#inputCantSolicitada').val('');
    $('#inputCantDespachada').val('');
    $('#inputKardex').val('');
    $('#inputDateVenci').val('');
    $('#inputNoLote').val('');
    $('#selLoteVencimiento').val('');
    $('#inputPrecUnit').val('');
    $('#inputCantActual').val('');  
}

/*funcion para eliminar fila*/
$(document).on('click', '.borrar', function (event) {
    event.preventDefault();
    $(this).closest('tr').remove();
});

function guardarRequi() {
    var inputCorrelativoRequi = $('#inputCorrelativoRequi').val();
    let inputServicio = $('#inputServicio').val();
    let inputEntrega = $('#inputEntrega').val();
    let inputCargoEntrega = $('#inputCargoEntrega').val();
    let inputRecibe = $('#inputRecibe').val();
    let inputCargoRecibe = $('#inputCargoRecibe').val();
    let inputJefe = $('#inputJefe').val();
    let inputCargoJefe = $('#inputCargoJefe').val();
    let inputObservaciones = $('#inputObservaciones').val();
    let inputLugar = $('#inputLugar').val();
    let inputFecha = $('#inputFecha').val();
    var validar = false;


    let datos = {
        FarmNumIdRequi: inputCorrelativoRequi,
        FarmStrServicio: inputServicio,
        FarmStrNomEntreg: inputEntrega,
        FarmStrCargoEntrega: inputCargoEntrega,
        FarmStrNomRecibe: inputRecibe,
        FarmStrCargoRecibe: inputCargoRecibe,
        FarmStrNomJefe: inputJefe,
        FarmStrCargoJefe: inputCargoJefe,
        FarmStrObservaciones: inputObservaciones,
        FarmStrLugar: inputLugar,
        FarmDateFechaReq: inputFecha,
        };

    console.log(datos);
    var insertEncabezado = $.ajax({
        url: './api/v1/FarmRequisicion.php',
        type: 'POST',
        data: datos,
        beforeSend: function () {
            $("#btnGuardarRequisicion").text('GUARDANDO...').prop('disabled', true);
        },
        success: function (response) {
            $.toast({
                title: 'Informativo',
                subtitle: '1 segundo',
                content: response.state.strstate,
                type: swichSuccessWarning(response.state.codstate),
                pause_on_hover: true,
                delay: 5000
            });
            $("#btnGuardarRequisicion").text('GUARDAR').attr('disabled', false);
            
            if (swichSuccessWarning(response.state.codstate)=='success'){

                validar = true;
            }

        },
        error: function (request, status, error) {
            console.log(request);
            $.toast({
                title: 'Ups!',
                subtitle: '1 segundo',
                content: ' ' + request.responseText,
                type: 'error',
                pause_on_hover: true,
                delay: 5000
            });
            $("#btnGuardarRequisicion").text('GUARDAR').attr('disabled', false);
        }
    });

    $.when(insertEncabezado).done(function(){
      console.log("entreaa?");

      var tableInfo = Array.prototype.map.call(document.querySelectorAll('#tbodyRequi tr'), function(tr){
        return Array.prototype.map.call(tr.querySelectorAll('td'), function(td){
            return td.innerHTML;
        });
    });
      console.log (validar);
    if (validar == true) {
      console.log(tableInfo);

      for (let j = 0; j<tableInfo.length ; j++){
        console.log("solo nombre: " + tableInfo[j][1]);

        let datosDetalle = {
            FarmNumIdRequi:inputCorrelativoRequi,
            FarmStrDescripcion: tableInfo[j][1],
            FarmNumCantSolicit: tableInfo[j][2],
            FarmNumCantDespac: tableInfo[j][3],
            FarmNumIdKardexFarm: tableInfo[j][4],
            AlmacNumCodPresentInsu: tableInfo[j][5],
            FarmDateVencimiento: tableInfo[j][6],
            FarmStrNolote: tableInfo[j][7]
        };
        console.log("cada datosDetalle enviado");
        console.log(datosDetalle);
        $.ajax({
            url: './api/v1/FarmaciaRequiDetalle.php',
            type: 'POST',
            data: datosDetalle,
            beforeSend: function () {
                $("#btnGuardarRequisicion").text('GUARDANDO...').prop('disabled', true);
            },
            success: function (response) {
                $.toast({
                    title: 'Informativo',
                    subtitle: '1 segundo',
                    content: response.state.strstate,
                    type: swichSuccessWarning(response.state.codstate),
                    pause_on_hover: true,
                    delay: 5000
                });
                $("#btnGuardarRequisicion").text('GUARDAR').attr('disabled', false);
            },
            error: function (request, status, error) {
                console.log(request);
                $.toast({
                    title: 'Ups!',
                    subtitle: '1 segundo',
                    content: ' ' + request.responseText,
                    type: 'error',
                    pause_on_hover: true,
                    delay: 5000
                });
                $("#btnGuardarRequisicion").text('GUARDAR').attr('disabled', false);
            }
        });
        } 
    } else {
        $.toast({
                    title: 'Ups!',
                    subtitle: '1 segundo',
                    content: ' Requisición ya existe ',
                    type: 'error',
                    pause_on_hover: true,
                    delay: 5000
                });
    }
});

    $('#inputServicio').val('');
    $('#inputEntrega').val('');
    $('#inputCargoEntrega').val('');
    $('#inputRecibe').val('');
    $('#inputCargoRecibe').val('');
    $('#inputJefe').val('');
    $('#inputCargoJefe').val('');
    $('#inputObservaciones').val('');
    $('#inputLugar').val('');
    //'#inputFecha').val(''); 
}

function cargarLoteVencimiento(codigoUnico) {
    console.log(codigoUnico + "cargarlotevencimiento")
    $('#selLoteVencimiento').empty();
    $('#selLoteVencimiento').append("<option>Seleccione lote o fecha de vencimiento</option>");
    
    let esperaVencimiento = $.ajax({
        url: './api/v1/Insumo.php?codImsumoFarm=' + codigoUnico +'&VencimientoFarm=true', //
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",

        success: function (data) {
            var json = data.data;
            console.log(json);
            $(json).each(function (index, item) {
                    //AlmacNumCodInsumo= json[index].AlmacNumCodInsumo;
                    AlmacNumCodPresentInsu= json[index].AlmacNumCodPresentInsu;
                FarmStrLote= json[index].FarmStrLote;
                FarmDateVencimiento= json[index].FarmDateVencimiento;
                FarmNumPreUnExist= json[index].FarmNumPreUnExist;
                FarmNumCantidad= json[index].FarmNumCantidad;

                    $('#selLoteVencimiento').append('<option value="'+FarmStrLote+'*'+ FarmDateVencimiento+'*'+FarmNumPreUnExist+'*'+FarmNumCantidad+'">'+'Lote: '+FarmStrLote +' - F.Vencimiento '+FarmDateVencimiento+'</option>')
            });

        },
        error: function (data) {
            alert("No se lograron cargar los datos(InforAgenda)" + data.responseText);
        }
    });
    $.when(esperaVencimiento).done(function () {
        $('#selLoteVencimiento').prop('disabled', false);
    })
}

function cargarFormsVencimiento(valores) {
    console.log("esto trae valores "+ valores);
    let partida = valores.split('*');
    let lote = partida[0];
    let vencimiento = partida[1];
    let preunit = partida[2]
    let cantidad = partida[3];
    $('#inputNoLote').val(lote);
    $('#inputDateVenci').val(vencimiento);
    $('#inputPrecUnit').val(preunit);
    $('#inputCantActual').val(cantidad);
    
}

//boton para general excel
//$('#generarExcel').on('click',requestgenerarExcel);
    
//function requestgenerarExcel() {
    //tableToExcel('tblFarmRequi', 'Requisicion Medicamentos y Productos Afines');


//}

$('#tbBuscar').DataTable( {
   

    "oSearch": {"bSmart": false,
        "bRegex": true,
        "sSearch": ""  },//busca un dato exacto
    dom: 'Blfrtip',
    buttons: [
        'print', 'pdf'
    ],
    "ajax": "./api/v1/FarmRequisicion.php",
    "columns": [

        { "data": "AlmacNumCodInsumo" },
        { "data": "AlmacStrNomInsumo" },
        { "data": "AlmacStrCaractInsu" },
        { "data": "AlmacNumRenglon" },
        { "data": "FarmNumIdKardexFarm" },
        { "data": "FarmNumCantExist" },
        { "data": "FarmStrPresentInusmo" },
        { "data": "FarmStrUniInsumo" }
 
    ]

} );


function ejecutarRep(){
    let numrequi = $('#inputCorrelativoRequi').val();
window.open('http://' + window.location.hostname + '/almacen-farmacia/runreports/RepRequiFarm.php?FarmNumIdRequi=' + numrequi);


$('#inputCorrelativoRequi').val('');
$('#selLoteVencimiento').val('');
$('#inputNoLote').val('');
$('#inputPrecUnit').val('');
$('#inputCantActual').val('');
$('#tbodyRequi').empty();
}