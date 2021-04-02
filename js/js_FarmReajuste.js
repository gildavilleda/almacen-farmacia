$(document).ready(function () {
    var f = new Date();

    if(f.getMonth() +1 <=9){
        let fecha = (f.getFullYear() + "-0" + (f.getMonth() +1) + "-" + f.getDate());
        $('#inputFecReaj').val(fecha);
        console.log(fecha);
    }else {
        let fecha = (f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate());
        $('#inputFecReaj').val(fecha);
        console.log(fecha);
    }

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

function buscarInsumoGeneral(){
    let codInsumo = $('#inputCodInsumoR').val();
    $('#SelCodUnico').empty();
    $('#SelCodUnico').append("<option>Seleccione Unidad</option>");
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
                $('#inputcantidadUnidad').val(FarmStrPresentInusmo + ' ' + FarmStrUniInsumo);


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

                $('#inputNombreInsumoReaj').val(AlmacStrNomInsumo+', '+FarmStrPresentInusmo+', '+FarmStrUniInsumo);
                $('#inputCaractInsumoReaj').val(AlmacStrCaractInsu);
                $('#inputPresentacion').val(FarmStrPresentInusmo);
                $('#inputRenglonReaj').val(AlmacNumRenglon);
                $('#inputNombreInsumo').val(AlmacStrNomInsumo);


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
            console.log(json+ 'Kardex');
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

                $('#inputKardexR').val(FarmNumIdKardexFarm);
                $('#inputPrecioUnitSal').val(FarmNumPreUnExist);
                $('#inputCantExis').val(FarmNumCantExist);
            });

        },
        error: function (data) {
            alert("No se lograron cargar los datos(InforAgenda)" + data.responseText);
        }
    });

    $.when(esperarKFamrmacia).done(function () {
        //buscarKardexFarmacia(VencimientocodigoUnico);
    });

}

function cargarLoteVencimiento(codInsumo) {
    $('#selLoteVencimiento').empty();
    $('#selLoteVencimiento').append("<option>Seleccione lote o fecha de vencimiento</option>");

    let esperaVencimiento = $.ajax({
        url: './api/v1/Insumo.php?codImsumoFarm=' + codInsumo +'&VencimientoFarm=true', //
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",

        success: function (data) {
            var json = data.data;
            console.log(json);
            $(json).each(function (index, item) {
                AlmacNumCodInsumo= json[index].AlmacNumCodInsumo;
                AlmacNumCodPresentInsu= json[index].AlmacNumCodPresentInsu;
                FarmStrNoLote= json[index].FarmStrNoLote;
                FarmDateVencimi= json[index].FarmDateVencimi;

                $('#selLoteVencimiento').append('<option value="'+FarmStrNoLote+'.'+ FarmDateVencimi+'">'+'Lote: '+FarmStrNoLote +' - F.Vencimiento '+FarmDateVencimi+ '</option>')
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
    let partida = valores.split('.');
    let vencimiento = partida[1];
    let lote = partida[0];
    $('#inputFecVencimientoReajSal').val(vencimiento);
    $('#inputNodeLoteSal').val(lote);

}

function AñadirReajuste() {
    let inputNomInsumo = $('#inputNombreInsumoReaj').val();
    let inputPresenReaj = $('#inputPresentacion').val();
    let inputCaracteriticas = $('#inputNombreInsumoReaj').val();
    /*let SelCodUnico = $('#SelCodUnico').val();*/
    let inputCantSolicitada = $('#inputCantSoliR').val();
    let inputCantEntregada = $('#inputCantEntregadaR').val();


    console.log('Esta es la presentaciòn' + inputPresenReaj)


    if(inputNomInsumo == '' ||inputNomInsumo == null ||inputNomInsumo == undefined){
        swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Ingresar nombre insumo',
            text: 'Debe ingresar código para obtener el nombre automáticamente',
        });

        return false;
    }
    if(inputCantSolicitada == '' ||inputCantSolicitada == null ||inputCantSolicitada == undefined){
        swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Ingresar cantidad solicitada',
            showConfirmButton: false,
            width: 400,
        });
        return false;
    }
    if(inputCantEntregada == '' ||inputCantEntregada == null ||inputCantEntregada == undefined){
        swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Ingresar cantidad entregada',
            showConfirmButton: false,
            width: 400,
        });
        return false;
    }

    $('#tbodyReajuste').append('<tr>' +
        '<td scope="row">'+inputNomInsumo+'</td>' +
        '<td>'+inputPresenReaj+'</td>' +
        '<td>'+inputCantSolicitada+'</td>' +
        '<td>'+inputCantEntregada+'</td>' +
        '</tr>');


    $('#inputNomInsumo').val('');
    $('#inputPresentacionReaj').val('');
    $('#inputCantSolicitada').val('');
    $('#inputCantEntregada').val('');


    $('#inputCorrelativoCGCReaj').prop('disabled', true);
    $('#inputFecReaj').prop('disabled', true);
    $('#SelReajuste').prop('disabled', true);
    $('#inputUnidadSolReajuste').prop('disabled', true);
    $('#inputUnidadEntregReaj').prop('disabled', true);

}


function valorTotal1() {
    let cantidad = $('#inputCantEntregadaR').val();
    let precioUnidad = $('#inputPrecioUnitSal').val();
    let suma = parseInt(cantidad) * parseFloat(precioUnidad);
    $('#inputValorTotal').val(suma);

}

function valorTotal2() {
    let cantidad = $('#inputCantEntregadaR').val();
    let precioUnidad = $('#inputPrecioUnitEntr').val();
    let suma = parseInt(cantidad) * parseFloat(precioUnidad);
    $('#inputValorTotalEnt').val(suma);
}


function guardarReajuste() {
    var correlativoCGC = $('#inputCorrelativoCGCReaj').val();
    let fechaReaj = $('#inputFecReaj').val();
    let selTipoReajuste = $('#SelReajuste').val();
    let unidadSol = $('#inputUnidadSolReajuste').val();
    let unidadEnt = $('#inputUnidadEntregReaj').val();

    let inputSolicitante = $('#inputNomSolicitante').val();
    let inputCargoSol = $('#inputCargoSolitane').val();
    let inputGerFin = $('#inputNomGerenteFinan').val();
    let inputGerFinEntrega = $('#inputNombAdminiFin').val();
    let inputKardexR = $('#inputKardexR').val();

    let codigoInsumo = $('#inputCodInsumoR').val();
    let cantyUn = $('#SelCodUnico').val();
    let inputPresent = $('#inputPresentacion').val();
    let inputPrecio = $('#inputPrecioUnitSal').val();
    let inputLote = $('#inputNodeLoteSal').val();
    let inputFechaVen = $('#inputFecVencimientoReajSal').val();

    let inputPreEnt = $('#inputPrecioUnitEntr').val();
    let inputLoteEnt = $('#inputNodeLoteEntr').val();
    let inputFechaVenEnt = $('#inputFecVencimientoReajentr').val();


    var nombreEntrega = $('#inputNomEntrega').val();
    var cargEntrega = $('#inputCargoEntrega').val();
    var dirEntrega = $('#inputNomDirEjeEntrega').val();

    let nomDirSol = $('#inputNomDirEjec').val();
    let inpObservaciones = $('#inputObservaciones').val();
    let inputCantidadUnidad = $('#inputcantidadUnidad').val();
    let inputNomInsumo = $('#inputNombreInsumo').val();

    let valorTotSal =  $('#inputValorTotal').val();
    let valorTotEnt =  $('#inputValorTotalEnt').val();

    console.log(inputSolicitante);


    //let splitFecha = fechaReaj.split("-");
    //let nuevaFecha = splitFecha[1] + '-' + splitFecha[2] + '-' + splitFecha[0] ;

    console.log(correlativoCGC);

    var validar = false;

    let datos = {
        FarmNumIdReajuste: correlativoCGC,
        FarmDatFecha: fechaReaj,
        FarmStrTipReajuste: selTipoReajuste,
        FarmStrUnidSolicitante: unidadSol,
        FarmStrUnidEntrega: unidadEnt,
        FarmStrNomSolic: inputSolicitante,
        FarmStrCargoSolic: inputCargoSol,
        FarmStrNomEntrega: nombreEntrega,
        FarmStrCargoEntrega: cargEntrega,
        FarmStrNomGerFinancSol:inputGerFin ,
        FarmStrNomGerAdmFinEnt: inputGerFinEntrega,
        FarmStrNomSubDiSol: nomDirSol,
        FarmStrNomDiEjecEnt: dirEntrega,
        FarmStrObserv:inpObservaciones ,

    };

    console.log(datos);

    let espera = $.ajax({
        url: './api/v1/FarmReajuste.php',
        type: 'POST',
        data: datos,
        beforeSend: function () {
            $("#btnGuardarReaj").text('Guardando...').prop('disabled', true);
        },
        success: function (response) {
            swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Encabezado guardado',
                timer: 1500,
                content: response.state.strstate,
                type: swichSuccessWarning(response.state.codstate),
                pause_on_hover: true,
                delay: 5000
            });
            $("#btnGuardarReaj").text('Guardado').prop('disabled', true);

            if (swichSuccessWarning(response.state.codstate)=='success'){
                validar = true;
                console.log(validar);
            }
        },
        error: function (request, status, error) {
            console.log(request);
            swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Ups!',
                subtitle: '1 segundo',
                content: ' ' + request.responseText,
                type: 'error',
                pause_on_hover: true,
                delay: 5000
            });
            $("#btnGuardarReaj").text('Guardar').prop('disabled', false);
        }
    });

    $.when(espera).done(function(){
        console.log("entreaa?");

        var tblInfo = Array.prototype.map.call(document.querySelectorAll('#tbodyReajuste tr'), function(tr){
            return Array.prototype.map.call(tr.querySelectorAll('td'), function(td){
                return td.innerHTML;
            });
        });

        if (validar == true) {
            console.log(tblInfo);

            for (let j = 0; j<tblInfo.length ; j++){
                console.log("solo nombre: " + tblInfo[j][1]);

                console.log("solo tipoReajuste: " + selTipoReajuste);

                if(selTipoReajuste == 'DONENT' || selTipoReajuste == 'CAMENT' || selTipoReajuste == 'PREENT' || selTipoReajuste == 'DEVENT'){

                    console.log('Despues del if ' + selTipoReajuste);

                    let datosDetalle = {
                        FarmNumIdReajuste:          correlativoCGC,
                        AlmacNumCodPresentInsu:     cantyUn,
                        FarmStrInsumo:              inputNomInsumo,
                        FarmStrCantUnid:            inputCantidadUnidad,
                        FarmStrPresentacion:        inputPresent,
                        FarmNumCantSolicit:         tblInfo[j][2],
                        FarmNumCantEntregad:        tblInfo[j][3],
                        FarmNumPrecUni:             inputPreEnt,
                        FarmStrNoLote:              inputLoteEnt,
                        FarmDatFechaVenc:           inputFechaVenEnt,
                        FarmNumIdKardexFarm:        inputKardexR,
                        FarmNumValorTotal:          valorTotEnt,
                    };
                    console.log(datosDetalle);

                    $.ajax({
                        url: './api/v1/FarmDetReajuste.php',
                        type: 'POST',
                        data: datosDetalle,
                        beforeSend: function () {
                            $("#btnGuardarReaj").text('GUARDANDO...').prop('disabled', true);
                        },
                        success: function (response) {
                            swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Detalle guardado',
                                timer: 1500,
                                content: response.state.strstate,
                                type: swichSuccessWarning(response.state.codstate),
                                pause_on_hover: true,
                                delay: 5000
                            });
                            $("#btnGuardarReaj").text('Guardado').prop('disabled', true);

                        },
                        error: function (request, status, error) {
                            console.log(request);
                            swal.fire({
                                position: 'top-end',
                                icon: 'error',
                                title: 'Ups!',
                                subtitle: '1 segundo',
                                content: ' ' + request.responseText,
                                type: 'error',
                                pause_on_hover: true,
                                delay: 5000
                            });
                            $("#btnGuardarReaj").text('Guardar').prop('disabled', false);
                        }
                    });
                }

                else if(selTipoReajuste == 'DONSAL' || selTipoReajuste == 'CAMSAL' || selTipoReajuste == 'PRESAL' || selTipoReajuste == 'DEVSAL'){
                    console.log('Entra o no entra a este if '+selTipoReajuste);

                    let datosDetalle = {
                        FarmNumIdReajuste:          correlativoCGC,
                        AlmacNumCodPresentInsu:     cantyUn,
                        FarmStrInsumo:              inputNomInsumo,
                        FarmStrCantUnid:            inputCantidadUnidad,
                        FarmStrPresentacion:        inputPresent,
                        FarmNumCantSolicit:         tblInfo[j][2],
                        FarmNumCantEntregad:        tblInfo[j][3],
                        FarmNumPrecUni:             inputPrecio,
                        FarmStrNoLote:              inputLote,
                        FarmDatFechaVenc:           inputFechaVen,
                        FarmNumIdKardexFarm:        inputKardexR,
                        FarmNumValorTotal:          valorTotSal,
                    };

                    console.log(datosDetalle)

                    $.ajax({
                        url: './api/v1/FarmDetReajuste.php',
                        type: 'POST',
                        data: datosDetalle,
                        beforeSend: function () {
                            $("#btnGuardarReaj").text('GUARDANDO...').prop('disabled', true);
                        },
                        success: function (response) {
                            swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Detalle guardado',
                                timer: 1500,
                                content: response.state.strstate,
                                type: swichSuccessWarning(response.state.codstate),
                                pause_on_hover: true,
                                delay: 5000
                            });
                            $("#btnGuardarReaj").text('Guardado').prop('disabled', true);

                        },
                        error: function (request, status, error) {
                            console.log(request);
                            swal.fire({
                                position: 'top-end',
                                icon: 'error',
                                title: 'Ups!',
                                subtitle: '1 segundo',
                                content: ' ' + request.responseText,
                                type: 'error',
                                pause_on_hover: true,
                                delay: 5000
                            });
                            $("#btnGuardarReaj").text('Guardar').prop('disabled', false);
                        }
                    });
                }else{
                    swal.fire({
                        position: 'top-end',
                        icon: 'warning',
                        title: 'Debe ingresar un tipo de reajuste',
                        showConfirmButton: false,
                        width: 400,
                    });
                }

                $.ajax({
                    url: './api/v1/FarmDetReajuste.php',
                    type: 'POST',
                    data: datosDetalle,
                    beforeSend: function () {
                        $("#btnGuardarReaj").text('GUARDANDO...').prop('disabled', true);
                    },
                    success: function (response) {
                        swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Detalle guardado',
                            timer: 1500,
                            content: response.state.strstate,
                            type: swichSuccessWarning(response.state.codstate),
                            pause_on_hover: true,
                            delay: 5000
                        });
                        $("#btnGuardarReaj").text('Guardado').prop('disabled', true);

                    },
                    error: function (request, status, error) {
                        console.log(request);
                        swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: 'Ups!',
                            subtitle: '1 segundo',
                            content: ' ' + request.responseText,
                            type: 'error',
                            pause_on_hover: true,
                            delay: 5000
                        });
                        $("#btnGuardarReaj").text('Guardar').prop('disabled', false);
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

    $('#inputCodInsumoR').val('');
    $('#inputNombreInsumoReaj').val('');
    $('#inputCaractInsumoReaj').val('');
    $('#inputPresentaciónReaj').val('');
    $('#inputCantUnidad').val('');
    $('#inputRenglonReaj').val('');
    $('#inputKardexReaju').val('');
    $('#inputCantSoliR').val('');
    $('#inputCantEntregadaR').val('');
    $('#inputPrecioUnit').val('');
    $('#inputNodeLote').val('');
    $('#inputFecVencimientoReaj').val('');
}




function MostrarDatosReajuste(){
    let TipoReajuste = $('#SelReajuste').val();

    if(TipoReajuste == 'DONENT' || TipoReajuste == 'CAMENT' || TipoReajuste == 'PREENT' || TipoReajuste == 'DEVENT'){
        $('#PrecUniSal').prop('hidden', true);
        $('#inputPrecioUnitSal').prop('hidden', true);
        $('#LotVenc').prop('hidden', true);
        $('#selLoteVencimiento').prop('hidden', true);
        $('#LoteSal').prop('hidden', true);
        $('#inputNodeLoteSal').prop('hidden', true);
        $('#VencimientoSal').prop('hidden', true);
        $('#inputFecVencimientoReajSal').prop('hidden', true);
        $('#PrecUniEntr').prop('hidden', false);
        $('#inputPrecioUnitEntr').prop('hidden', false);
        $('#LoteEntr').prop('hidden', false);
        $('#inputNodeLoteEntr').prop('hidden', false);
        $('#VencimientoEntr').prop('hidden', false);
        $('#inputFecVencimientoReajentr').prop('hidden', false);
        $('#inputValorTotal').prop('hidden', true);
        $('#ValorTotal').prop('hidden', true);
        $('#inputValorTotalEnt').prop('hidden', false);
        $('#ValorTotalEnt').prop('hidden', false);
    }
    else{
        $('#PrecUniSal').prop('hidden', false);
        $('#inputPrecioUnitSal').prop('hidden', false);
        $('#LotVenc').prop('hidden', false);
        $('#selLoteVencimiento').prop('hidden', false);
        $('#LoteSal').prop('hidden', false);
        $('#inputNodeLoteSal').prop('hidden', false);
        $('#VencimientoSal').prop('hidden', false);
        $('#inputFecVencimientoReajSal').prop('hidden', false);
        $('#PrecUniEntr').prop('hidden', true);
        $('#inputPrecioUnitEntr').prop('hidden', true);
        $('#LoteEntr').prop('hidden', true);
        $('#inputNodeLoteEntr').prop('hidden', true);
        $('#VencimientoEntr').prop('hidden', true);
        $('#inputFecVencimientoReajentr').prop('hidden', true);
        $('#inputValorTotal').prop('hidden', false);
        $('#ValorTotal').prop('hidden', false);
        $('#inputValorTotalEnt').prop('hidden', true);
        $('#ValorTotalEnt').prop('hidden', true);
    }
}


function imprimirReajuste(){
    let idReajuste = $('#inputCorrelativoCGCReaj').val()
    window.open('http://localhost:8080/Almacenes/runreports/RepFarmReajuste.php?FarmNumIdReajuste=' + idReajuste);

}