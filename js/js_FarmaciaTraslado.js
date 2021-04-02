$(document).ready(function () {
    var f = new Date();

    if(f.getMonth() +1 <=9){
        let fecha = (f.getFullYear() + "-0" + (f.getMonth() +1) + "-" + f.getDate());
        $('#inputFech').val(fecha);
        console.log(fecha);
    }else {
        let fecha = (f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate());
        $('#inputFech').val(fecha);
        console.log(fecha);
    }






    //$('#inputEntregaTras').val('Yanileth R. Jaimes');
    //$('#inputCargoTrasl').val('Auxiliar De Farmacia');
    $('#inputJefeDepartamento').val('Ana María Ríos Galindo');
    $('#inputCargoJefe').val('Jefe De Farmacia');
    $('#inputLug').val('Villa Nueva');
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

    $.ajax({
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
                FarmStrPresentInusmo = json[index].FarmStrPresentInusmo;
                FarmStrUniInsumo = json[index].FarmStrUniInsumo;

                $('#inputDescrip').val(AlmacStrNomInsumo+', '+FarmStrPresentInusmo+','+FarmStrUniInsumo);

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
                FarmNumPreUnExist= json[index].FarmNumPreUnExist;
                FarmNumPreTotExist= json[index].FarmNumPreTotExist;

                $('#inputKardexFar').val(FarmNumIdKardexFarm);
                //$('#inputPreciUnit').val(FarmNumPreUnExist);
                //$('#inputCantExistente').val(FarmNumCantExist);
                


            });

        },
        error: function (data) {
            alert("No se lograron cargar los datos(InforAgenda)" + data.responseText);
        }
    });

}



function añadirTabla() {
    let inputCodigo = $('#inputCodigo').val();
    let inputDescrip = $('#inputDescrip').val();
    let inputCantiSolicit = $('#inputCantiSolicit').val();
    let inputCantiDespachada = $('#inputCantiDespachada').val();
    let inputMotivTraslado = $('#inputMotivTraslado').val();
    let inputKardexFar = $('#inputKardexFar').val();
    let SelCodUnico = $('#SelCodUnico').val();
    let inputNoLote = $('#inputNoLote').val();
    let inputVechaVenci = $('#inputVechaVenci').val();
    let inputCantExistente = $('#inputCantExistente').val();
    
    

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

    if(inputCantiSolicit == '' ||inputCantiSolicit == null ||inputCantiSolicit == undefined){
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


    if(inputCantiDespachada == '' ||inputCantiDespachada == null ||inputCantiDespachada == undefined){
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

    //if(parseInt (inputCantiDespachada) > parseInt (inputCantExistente)){
    //    $.toast({
    //        title: 'Ups!',
    //        subtitle: '1 segundo',
    //        content: 'No hay cantidad suficiente',
    //        type: 'error',
    //        pause_on_hover: true,
    //        delay: 5000
    //    });
//
    //    return false;
    //}


    $('#tblbodyTraslado').append('<tr>' +
        '<td scope="row">'+inputCodigo+'</td>' +
        '<td>'+inputDescrip+'</td>' +
        '<td>'+inputCantiSolicit+'</td>' +
        '<td>'+inputCantiDespachada+'</td>' +
        '<td hidden>'+inputMotivTraslado+'</td>' +
        '<td hidden>'+inputKardexFar+'</td>' +
        '<td hidden>'+SelCodUnico+'</td>' +
        '<td hidden>'+inputNoLote+'</td>' +
        '<td hidden>'+inputVechaVenci+'</td>' +
        '<td><button class="btn btn-danger borrar"><i class="far fa-trash-alt"></i></button></td>'
        +'</tr>');

    $('#inputCodigo').val('');
    $('#inputDescrip').val('');
    $('#inputCantiSolicit').val('');
    $('#inputCantiDespachada').val('');
    $('#inputMotivTraslado').val('');
    $('#inputKardexFar').val('');
    $('#inputNoLote').val('');
    $('#inputVechaVenci').val('');
    $('#selLoteVencimiento').val('');
    $('#inputPreciUnit').val('');
    $('#inputCantExistente').val('');
    
}

/*funcion para eliminar fila*/
$(document).on('click', '.borrar', function (event) {
    event.preventDefault();
    $(this).closest('tr').remove();
});


function guardarTraslado() {
    var inputCorrelativoCGC = $('#inputCorrelativoCGC').val();
    let inputSolicita = $('#inputSolicita').val();
    let inputEntrega = $('#inputEntrega').val();
    let inputEntregaTras = $('#inputEntregaTras').val();
    let inputCargoTrasl = $('#inputCargoTrasl').val();
    let inputJefeDepartamento = $('#inputJefeDepartamento').val();
    let inputCargoJefe = $('#inputCargoJefe').val();
    let inputObservaciones = $('#inputObservaciones').val();
    let inputLug = $('#inputLug').val();
    let inputFech = $('#inputFech').val();
    let inputRecibeTras = $('#inputRecibeTras').val();
    let inputCargoTras = $('#inputCargoTras').val();
    var validar = false;



    let datos = {
        FarmNumIdTraslado: inputCorrelativoCGC,
        FarmStrUnidSolicita: inputSolicita,
        FarmStrUnidEntrega: inputEntrega,
        FarmStrNomEntrega: inputEntregaTras,
        FarmStrCargEntrega: inputCargoTrasl,
        FarmStrNomJefe: inputJefeDepartamento,
        FarmStrCargJefe: inputCargoJefe,
        FarmStrObservacion: inputObservaciones,
        FarmStrLugar: inputLug,
        FarmDateTras: inputFech,
        FarmStrNomRecibe: inputRecibeTras,
        FarmStrCargRecibe: inputCargoTras
    };

    console.log(datos);
    var insertEncabezado = $.ajax({
        url: './api/v1/FarmTraslado.php',
        type: 'POST',
        data: datos,
        beforeSend: function () {
            $("#btnGuardarTraslado").text('GUARDANDO...').prop('disabled', true);
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
            $("#btnGuardarTraslado").text('GUARDAR').attr('disabled', false);

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
            $("#btnGuardarTraslado").text('GUARDAR').attr('disabled', false);
        }
    });

    $.when(insertEncabezado).done(function(){
      console.log("entreaa?");

      var tableInfo = Array.prototype.map.call(document.querySelectorAll('#tblbodyTraslado tr'), function(tr){
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
            FarmNumIdTraslado:inputCorrelativoCGC,
            FarmNumCodiInsu: tableInfo[j][0],
            FarmStrDescrip: tableInfo[j][1],
            FarmNumCantSoli: tableInfo[j][2],
            FarmNumCantDesp: tableInfo[j][3],
            FarmStrMotivo: tableInfo[j][4],
            FarmNumIdKardexFarm: tableInfo[j][5],
            AlmacNumCodPresentInsu: tableInfo[j][6],
            FarmStrlote: tableInfo[j][7],
            FarmDateVencimiento: tableInfo[j][8],
        };
        //console.log("cada datosDetalle enviado");
        //console.log(datosDetalle);
        $.ajax({
            url: './api/v1/FarmDetalleTraslado.php',
            type: 'POST',
            data: datosDetalle,
            beforeSend: function () {
                $("#btnGuardarTraslado").text('GUARDANDO...').prop('disabled', true);
            },
           success: function (response) {
//            console.log(response);
            
                $.toast({
                    title: 'Informativo',
                    subtitle: '1 segundo',
                    content: response.state.strstate,
                    type: swichSuccessWarning(response.state.codstate),
                    pause_on_hover: true,
                    delay: 5000
            });
                $("#btnGuardarTraslado").text('GUARDAR').attr('disabled', false);
                $('#tblbodyTraslado').empty();
                
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
                $("#btnGuardarTraslado").text('GUARDAR').attr('disabled', false);
            }
        });
    }  
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


    //$('#inputCorrelativoCGC').val('');
    $('#inputSolicita').val('');
    $('#inputEntrega').val('');
    $('#inputEntregaTras').val('');
    $('#inputCargoTrasl').val('');
    $('#inputJefeDepartamento').val('');
    $('#inputCargoJefe').val('');
    $('#inputObservaciones').val('');
    $('#inputLug').val('');
    $('#inputFech').val('');
    $('#inputRecibeTras').val('');
    $('#inputCargoTras').val('');
    
    

    
}

function cargarLoteVencimiento(codigoUnico) {
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
    $('#inputVechaVenci').val(vencimiento);
    $('#inputPreciUnit').val(preunit);
    $('#inputCantExistente').val(cantidad);
    
}

function CantidadActual() {
    let CantidadExistente = $('#inputCantExistente').val();
    let cantidadDespachada = $('#inputCantiDespachada').val();
    let resta = parseInt(CantidadExistente) - parseInt(cantidadDespachada);
    $('#inputCantActual').val(resta);

}

$('#tbBuscar').DataTable( {
   

    "oSearch": {"bSmart": false,
        "bRegex": true,
        "sSearch": ""  },//busca un dato exacto
    dom: 'Blfrtip',
    buttons: [
        'print', 'pdf'
    ],
    "ajax": "./api/v1/FarmTraslado.php",
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
    let numtrasl = $('#inputCorrelativoCGC').val();
   window.open('http://' + window.location.hostname + '/Almacen/runreports/RepTrasladoFarm.php?FarmNumIdTraslado=' + numtrasl);
    $('#inputCorrelativoCGC').val('');
    }