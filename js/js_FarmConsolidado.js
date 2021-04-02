$(document).ready(function () {
    var f = new Date();

    if(f.getMonth() +1 <=9){
        let fecha = (f.getFullYear() + "-0" + (f.getMonth() +1) + "-" + f.getDate());
        $('#InputFechaC').val(fecha);
        console.log(fecha + "est");
    }else {
        let fecha = (f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate());
        $('#InputFechaC').val(fecha);
        console.log(fecha + "NOS");
    }

    hacerCuadros();
    //$('#InputEntregaConsol').val('Yanileth R. Jaimes');
});

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

function hacerCuadros() {

    for(let j=1; j<=33; j++){
        $('#contCuadros').append('<div class="col-md-1">' +
            '<div class="input-group mb-2">' +
            '        <div class="input-group-prepend">' +
            '            <span class="input-group-text" id="CantidadInsumo">'+j+'' +
            '            </span>' +
            '        </div>' +
            '        <input type="text" class="form-control" id="'+j+'" aria-describedby="cantidadInsumo" value="0">' +
            '    </div>' +
            '</div>'
        );
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
                
                $('#inputNomInsumo').val(AlmacStrNomInsumo);
                $('#inputFarmDescrip').val(AlmacStrCaractInsu);

                //$('#SelCodUnico').append('<option value="'+AlmacNumCodPresentInsu+'">'+AlmacStrPresentInsu+' '+ AlmacStrCantYUnidInsu+'</option>')
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
            console.log("holaaaaaaaaa")
            console.log(json);
            $(json).each(function (index, item) {
                AlmacNumCodInsumo = json[index].AlmacNumCodInsumo;
                AlmacNumRenglon = json[index].AlmacNumRenglon;
                AlmacStrNomInsumo = json[index].AlmacStrNomInsumo;
                AlmacStrCaractInsu = json[index].AlmacStrCaractInsu;
                AlmacStrPresentInsu = json[index].AlmacStrPresentInsu;
                AlmacStrCantYUnidInsu = json[index].AlmacStrCantYUnidInsu;
                AlmacNumCodPresentInsu = json[index].AlmacNumCodPresentInsu;

                $('#inputNomInsumo').val(AlmacStrNomInsumo);
                $('#inputFarmDescrip').val(AlmacStrCaractInsu);

            });

        },
        error: function (data) {
            alert("No se lograron cargar los datos(InforAgenda)" + data.responseText);
        }
    });

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
                FarmNumCantExist= json[index].FarmNumCantExist;

                $('#inputKardex').val(FarmNumIdKardexFarm);


            });

        },
        error: function (data) {
            alert("No se lograron cargar los datos(InforAgenda)" + data.responseText);
        }
    });

}

function cargarLoteVencimiento(codigoUnico) {
    console.log("Entra en lote")
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
    $('#inputFechaVencimiento').val(vencimiento);
    $('#InputPrecioUnitario').val(preunit);
    $('#InputCantidadExistente').val(cantidad);
}

function AgregarFila() {
    let inputNomInsumo = $('#inputNomInsumo').val();
    let inputFarmDescrip = $('#inputFarmDescrip').val();
    let inputCodigo = $('#inputCodigo').val();
    let SelCodUnico= $('#SelCodUnico').val();
    let selLoteVencimiento = $('#selLoteVencimiento').val();
    let inputKardex = $('#inputKardex').val();
    let inputFechaVencimiento = $('#inputFechaVencimiento').val();
    let inputNoLote = $('#inputNoLote').val();
    let InputCantidadExistente = $('#InputCantidadExistente').val();

    let c1 = $('#1').val();
    let c2 = $('#2').val();
    let c3 = $('#3').val();
    let c4 = $('#4').val();
    let c5 = $('#5').val();
    let c6 = $('#6').val();
    let c7 = $('#7').val();
    let c8 = $('#8').val();
    let c9 = $('#9').val();
    let c10 = $('#10').val();
    let c11 = $('#11').val();
    let c12 = $('#12').val();
    let c13 = $('#13').val();
    let c14 = $('#14').val();
    let c15 = $('#15').val();
    let c16 = $('#16').val();
    let c17 = $('#17').val();
    let c18 = $('#18').val();
    let c19 = $('#19').val();
    let c20 = $('#20').val();
    let c21 = $('#21').val();
    let c22 = $('#22').val();
    let c23 = $('#23').val();
    let c24 = $('#24').val();
    let c25 = $('#25').val();
    let c26 = $('#26').val();
    let c27 = $('#27').val();
    let c28 = $('#28').val();
    let c29 = $('#29').val();
    let c30 = $('#30').val();
    let c31 = $('#31').val();
    let c32 = $('#32').val();
    let c33 = $('#33').val();
    let SubTotal = 0;
    let devolucion =$('#InputDevInsumo').val();
    let Total = 0;

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

    SubTotal = parseInt(c1) + parseInt(c2)+parseInt(c3)+ parseInt(c4)+ parseInt(c5)+ parseInt(c6)+ parseInt(c7)+ parseInt(c8)+ parseInt(c9)+
    parseInt(c10)+ parseInt(c11) + parseInt(c12)+ parseInt(c13)+ parseInt(c14)+ parseInt(c15)+ parseInt(c16)+ parseInt(c17)+ parseInt(c18)+
    parseInt(c19)+ parseInt(c20)+ parseInt(c21)+ parseInt(c22)+ parseInt(c23)+ parseInt(c24)+ parseInt(c25)+ parseInt(c26)+ parseInt(c27)+
    parseInt(c28)+ parseInt(c29)+ parseInt(c30)+ parseInt(c31)+ parseInt(c32)+ parseInt(c33);
    console.log(("prue: " + SubTotal));

    Total= SubTotal - parseInt(devolucion);

    $('#tbodyConsolidadoFarm').append
    ('<tr>' +
//'<td width="27%" >'+AlmacNumCodInsumo+'</td>' +
'<td width="27%" >'+inputNomInsumo+', '+FarmStrPresentInusmo+', '+FarmStrUniInsumo+'</td>' +
'<td >'+c1 +'</td>' +
'<td>'+c2 +'</td>' +
'<td>'+c3 +'</td>' +
'<td>'+c4 +'</td>' +
'<td>'+c5 +'</td>' +
'<td>'+c6 +'</td>' +
'<td>'+c7 +'</td>' +
'<td>'+c8 +'</td>' +
'<td>'+c9 +'</td>' +
'<td>'+c10+'</td>' +
'<td>'+c11+'</td>' +
'<td>'+c12+'</td>' +
'<td>'+c13+'</td>' +
'<td>'+c14+'</td>' +
'<td>'+c15+'</td>' +
'<td>'+c16+'</td>' +
'<td>'+c17+'</td>' +
'<td>'+c18+'</td>' +
'<td>'+c19+'</td>' +
'<td>'+c20+'</td>' +
'<td>'+c21+'</td>' +
'<td>'+c22+'</td>' +
'<td>'+c23+'</td>' +
'<td>'+c24+'</td>' +
'<td>'+c25+'</td>' +
'<td>'+c26+'</td>' +
'<td>'+c27+'</td>' +
'<td>'+c28+'</td>' +
'<td>'+c29+'</td>' +
'<td>'+c30+'</td>' +
'<td>'+c31+'</td>' +
'<td>'+c32+'</td>' +
'<td>'+c33+'</td>' +
'<td>'+SubTotal+'</td>' +
'<td>'+devolucion+'</td>' +
'<td widt="5%">'+Total+'</td>' +
'<td></td>'+
'<td hidden>'+inputKardex+'</td>'+
'<td hidden>'+inputFechaVencimiento+'</td>'+
'<td hidden>'+inputNoLote+'</td>'+
'<td hidden>'+SelCodUnico+'</td>'+
'<td hidden> '+$('#InputServicio').val()+'</td>'+
'<td><button class="btn btn-danger borrar"><i class="far fa-trash-alt"></i></button></td>'
        +'</tr>');

    //$('#inputCodigo').val('');
    $('#inputNomInsumo').val('');
    $('#inputFarmDescrip').val('');
    $('#SelCodUnico').val('');
    $('#selLoteVencimiento').val('');
    $('#inputKardex').val('');
    $('#inputFechaVencimiento').val('');
    $('#inputNoLote').val('');
    $('#InputCantidadExistente').val('');
    $('#1').val('0');
    $('#2').val('0');
    $('#3').val('0');
    $('#4').val('0');
    $('#5').val('0');
    $('#6').val('0');
    $('#7').val('0');
    $('#8').val('0');
    $('#9').val('0');
    $('#10').val('0');
    $('#11').val('0');
    $('#12').val('0');
    $('#13').val('0');
    $('#14').val('0');
    $('#15').val('0');
    $('#16').val('0');
    $('#17').val('0');
    $('#18').val('0');
    $('#19').val('0');
    $('#20').val('0');
    $('#21').val('0');
    $('#22').val('0');
    $('#23').val('0');
    $('#24').val('0');
    $('#25').val('0');
    $('#26').val('0');
    $('#27').val('0');
    $('#28').val('0');
    $('#29').val('0');
    $('#30').val('0');
    $('#31').val('0');
    $('#32').val('0');
    $('#33').val('0');
}


/*funcion para eliminar fila*/
$(document).on('click', '.borrar', function (event) {
    event.preventDefault();
    $(this).closest('tr').remove();
});


function GuardarConsolidado() {
    let codInsumo = $('#inputCodigo').val();
    var InputCorrelativo = $('#InputCorrelativo').val();
    var InputServicio = $('#InputServicio').val();
    let InputFechaC = $('#InputFechaC').val();
    let InputRecibeConsol = $('#InputRecibeConsol').val();
    let InputEntregaConsol = $('#InputEntregaConsol').val();
    var validar = false;


    let datos = {

        FarmNumIdConsoli: InputCorrelativo,
        FarmStrServicio: InputServicio,
        FarmDateFechaConsol: InputFechaC,
        FarmStrRecibe: InputRecibeConsol,
        FarmStrEntrega: InputEntregaConsol,
    };
    console.log(datos);
    var insertarEncabezado = $.ajax({
        url: './api/v1/FarmConsolidado.php',
        type: 'POST',
        data: datos,
        beforeSend: function () {
            $("#btnGuardarConsolidado").text('GUARDANDO...').prop('disabled', true);
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
            $("#btnGuardarConsolidado").text('GUARDAR').attr('disabled', false);

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
            $("#btnGuardarConsolidado").text('GUARDAR').attr('disabled', false);
        }
    });debugger;
$.when(insertarEncabezado).done(function(){
    console.log("entreaa?");

    var tableInfo = Array.prototype.map.call(document.querySelectorAll('#tbodyConsolidadoFarm tr'), function(tr){
        return Array.prototype.map.call(tr.querySelectorAll('td'), function(td){
            return td.innerHTML;
        });
    });debugger;
    console.log (validar);
    if (validar == true) {
        console.log(tableInfo);
        for (let j = 0; j<tableInfo.length ; j++){
            console.log("solo nombre: " + tableInfo[j][1]);

            let datosDetalle = {
                FarmNumIdConsoli:InputCorrelativo,
                FarmStrDescripcion: tableInfo[j][0],
                FarmNumIdKardexFarm: tableInfo[j][38],
                FarmNumSubtotal: tableInfo[j][34],
                FarmNumDevoluciones: tableInfo[j][35],
                FarmNumTotalEntregado: tableInfo[j][36],
                FarmDateVencimiento: tableInfo[j][39],
                FarmStrNoLote: tableInfo[j][40],
            };debugger;
            console.log("cada datosDetalle enviado");
            console.log(datosDetalle);
        var complemento =  $.ajax({
                url: './api/v1/FarmDetalleCosolidado.php',
                type: 'POST',
                data: datosDetalle,
                beforeSend: function () {
                    $("#btnGuardarConsolidado").text('GUARDANDO...').prop('disabled', true);
                },
                success: function (response) {
                    $.toast({
                        title: 'Informativo',
                        subtitle: '1 segundo',
                        content: response.state.strstate,
                        type: swichSuccessWarning(response.state.codstate),
                        pause_on_hover: true,
                        delay: 5000
                    });debugger;
                    $("#btnGuardarConsolidado").text('GUARDAR').attr('disabled', false);

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
                    $("#btnGuardarConsolidado").text('GUARDAR').attr('disabled', false);
                }
            });


        }    // termina for 1
        var tableInfo = Array.prototype.map.call(document.querySelectorAll('#tbodyConsolidadoFarm tr'), function(tr){
            return Array.prototype.map.call(tr.querySelectorAll('td'), function(td){
                return td.innerHTML;
            });
        });
        $.when(complemento).done(function(){

        
            for (let j = 0; j<tableInfo.length ; j++){
                console.log("solo detalles del consolodado: " + tableInfo[j][1]);
    
                let datosDescripcion = {
                    FarmNumIdConsoli:InputCorrelativo,
                    FarmNumCodigo:codInsumo,
                    FarmStrNomInsumo: tableInfo[j][0],
                    FarmNumUno:tableInfo[j][1],
                    FarmNumDos:tableInfo[j][2],
                    FarmNumtres:tableInfo[j][3],
                    FarmNumCuatro:tableInfo[j][4],
                    FarmNumCinco:tableInfo[j][5],
                    FarmNumSeis:tableInfo[j][6],
                    FarmNumSiete:tableInfo[j][7],
                    FarmNumOcho:tableInfo[j][8],
                    FarmNumNueve:tableInfo[j][9],
                    FarmNumDiez:tableInfo[j][10],
                    FarmNumOnce:tableInfo[j][11],
                    FarmNumDoce:tableInfo[j][12],
                    FarmNumTrece:tableInfo[j][13],
                    FarmNumCatorce:tableInfo[j][14],
                    FarmNumQuince:tableInfo[j][15],
                    FarmNumDieciseis:tableInfo[j][16],
                    FarmNumDiecisiete:tableInfo[j][17],
                    FarmNumDieciocho:tableInfo[j][18],
                    FarmNumDicinueve:tableInfo[j][19],
                    FarmNumVeinte:tableInfo[j][20],
                    FarmNumVeintiuno:tableInfo[j][21],
                    FarmNumVeintidos:tableInfo[j][22],
                    FarmNumVeintitres:tableInfo[j][23],
                    FarmNumVeinticuatro:tableInfo[j][24],
                    FarmNumVeinticinco:tableInfo[j][25],
                    FarmNumVeintiseis:tableInfo[j][26],
                    FarmNumVeintisiete:tableInfo[j][27],
                    FarmNumVeintiocho:tableInfo[j][28],
                    FarmNumVeintinueve:tableInfo[j][29],
                    FarmNumTreinta:tableInfo[j][30],
                    FarmNumTreintayUno:tableInfo[j][31],
                    FarmNumTreintayDos:tableInfo[j][32],
                    FarmNumTreintayTres:tableInfo[j][33],
                    FarmNumCant:tableInfo[j][34],
                    FarmNumDevCons: tableInfo[j][35],
                    FarmNumTotalCons: tableInfo[j][36],
                    FarmNumCodPrese: tableInfo[j][41],
                    FarmStrConsolNom: InputServicio,
                };
                console.log("cada datosDescripcion enviado");
                console.log(datosDescripcion);
                $.ajax({
                    url: './api/v1/DescripcionConsFam.php',
                    type: 'POST',
                    data: datosDescripcion,
                    beforeSend: function () {
                        $("#btnGuardarConsolidado").text('GUARDANDO...').prop('disabled', true);
                    },
                    success: function (response) {
                        $.toast({
                            title: 'Informativo',
                            subtitle: '1 segundo',
                            content: response.state.strstate,
                            type: swichSuccessWarning(1),
                            pause_on_hover: true,
                            delay: 5000
                        });
                        $("#btnGuardarConsolidado").text('GUARDAR').attr('disabled', false);
    
                    },
                    error: function (request, status, error) {
                        console.log(request);
                        $.toast({
                            title: 'Ups!',
                            subtitle: '1 segundo',
                            content: 'Ocurrio un error',  /*request.responseText*/
                            type: 'error',
                            pause_on_hover: true,
                            delay: 5000
                        });
                        $("#btnGuardarConsolidado").text('GUARDAR').attr('disabled', false);
                    }

               
               
            });
        
            }

        });//

        //}

    } 
    else {
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

   // $('#InputCorrelativo').val('');
    $('#InputServicio').val('');
    $('#InputFechaC').val('');
    $('#InputEntregaConsol').val('');
    $('#InputRecibeConsol').val('');
    $('#inputCodigo').val('');
}


$('#tbBuscar').DataTable( {
   

    "oSearch": {"bSmart": false,
        "bRegex": true,
        "sSearch": ""  },//busca un dato exacto
    dom: 'Blfrtip',
    buttons: [
        'print', 'pdf'
    ],
    "ajax": "./api/v1/FarmConsolidado.php",
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
    let numconsol =  $('#InputCorrelativo').val()
    window.open('http://' + window.location.hostname + '/Almacen/runreports/RepConsolidado.php?FarmNumIdConsoli=' + numconsol);
    $('#InputCorrelativo').val('');
    }
