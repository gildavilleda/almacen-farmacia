$(document).ready(function () {

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
        url: './api/v1/Insumo.php?AlmacNumCodInsumo=' + codInsumo, //
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


                $('#SelCodUnico').append('<option value="'+AlmacNumCodPresentInsu+'">'+AlmacStrPresentInsu+' '+ AlmacStrCantYUnidInsu+'</option>')


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
        url: './api/v1/Insumo.php?AlmacNumCodPresentInsu=' + codigoUnico,
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

                $('#inputNombreInsumoReaj').val(AlmacStrNomInsumo);
                $('#inputCaractInsumoReaj').val(AlmacStrCaractInsu);
                $('#inputPresentaciónReaj').val(AlmacStrPresentInsu);
                $('#inputRenglonReaj').val(AlmacNumRenglon);


            });

        },
        error: function (data) {
            alert("No se lograron cargar los datos(InforAgenda)" + data.responseText);
        }
    });
}

function añadirTabla() {
    let inputNomInsumo = $('#inputNombreInsumoReaj').val();
    let inputPresentacionReaj = $('#inputPresentaciónReaj').val();
    /*let SelCodUnico = $('#SelCodUnico').val();*/
    let inputCantSolicitada = $('#inputCantSoliR').val();
    let inputCantEntregada = $('#inputCantEntregadaR').val();
 
    

    if(inputNomInsumo == '' ||inputNomInsumo == null ||inputNomInsumo == undefined){
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


    if(inputCantEntregada == '' ||inputCantEntregada == null ||inputCantEntregada == undefined){
        $.toast({
            title: 'Ups!',
            subtitle: '1 segundo',
            content: ' Cantidad Entregada no puede ir vacio',
            type: 'error',
            pause_on_hover: true,
            delay: 5000
        });

        return false;
    }




    $('#tbodyRequi').append('<tr>' +
        '<td scope="row">'+inputNomInsumo+'</td>' +
        '<td>'+inputPresentacionReaj+'</td>' +
        '<td>'+inputCantSolicitada+'</td>' +
        '<td>'+inputCantEntregada+'</td>' +
        '<td><button class="btn btn-danger borrar"><i class="far fa-trash-alt"></i></button></td>'
        +'</tr>');

    $('#inputNomInsumo').val('');
    $('#inputPresentacionReaj').val('');
    $('#inputCantSolicitada').val('');
    $('#inputCantEntregada').val('');
     
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






if (validar == true) {
      console.log(tableInfo);

      for (let j = 0; j<tableInfo.length ; j++){
        console.log("solo nombre: " + tableInfo[j][1]);

        let datosDetalle = {
            AlmcNumIDDetaRea:inputCorrelativoRequi,
            AlmacNumIdReajust: tableInfo[j][5],
            AlmacNumCodInsumo: tableInfo[j][1],
            AlmacStrInsumo: tableInfo[j][4],
            AlmcStrCantUnid: tableInfo[j][2],
            AlmacStrPresentacion: tableInfo[j][3],
            AlmacNumCantSolicit: tableInfo[j][6],
            AlmacNumCantEntregad :tableInfo[j][7],
            AlmacNumPrecUni: tableInfo[j][7],
            AlmacStrNoLote: tableInfo[j][7],
            AlmacDatFechaVenc: tableInfo[j][7],
       

        };
        console.log("cada datosDetalle enviado");
        console.log(datosDetalle);
        $.ajax({
            url: './api/v1/AlmacDetReajust.php',
            type: 'POST',
            data: datosDetalle,
            beforeSend: function () {
                $("#btnGuardarReajuste").text('GUARDANDO...').prop('disabled', true);
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
                $("#btnGuardarReajuste").text('GUARDAR').attr('disabled', false);
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
                $("#btnGuardarReajuste").text('GUARDAR').attr('disabled', false);
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