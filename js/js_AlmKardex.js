function EntradaSalidaTb(){

    var codigoInsumo = $('#SelCodUnico').val();
    console.log(codigoInsumo);

    $('#TbEntradaSalida').removeAttr('hidden');
    $('#tbodyKardex').empty(); //limpia la tabla

$.ajax({
    url: './api/v1/Kardex.php?AlmacNumCodInsumo=' + codigoInsumo ,
    type: "GET",
    dataType: "json",
    contentType: "application/json; charset=utf-8",

    success: function (data) {
        var json = data.data;
        $(json).each(function (index, item) {
                AlmacNumIdDeltKard= json[index].AlmacNumIdDeltKard;
                AlmacDateFecha= json[index].AlmacDateFecha;
                AlmacStrNoReferen= json[index].AlmacStrNoReferen;
                AlmacStrDescripci= json[index].AlmacStrDescripci;
                AlmacStrUnidMedida= json[index].AlmacStrUnidMedida;
                AlmacNumEntrCantid= json[index].AlmacNumEntrCantid;
                AlmacNumEntrPUnit= json[index].AlmacNumEntrPUnit;
                AlmacNumEntrVaTotal= json[index].AlmacNumEntrVaTotal;
                AlmacNumReajCanti= json[index].AlmacNumReajCanti;
                AlmacNumReajPUnit= json[index].AlmacNumReajPUnit;
                AlmacNumReajVTotal= json[index].AlmacNumReajVTotal;
                AlmacNumReqCantid= json[index].AlmacNumReqCantid;
                AlmacNumReqPUnit= json[index].AlmacNumReqPUnit;
                AlmacNumReqVaTotal= json[index].AlmacNumReqVaTotal;
                AlmacNumExisCantid= json[index].AlmacNumExisCantid;
                AlmacNumExisPUnit= json[index].AlmacNumExisPUnit;
                AlmacNumExisVaTotal= json[index].AlmacNumExisVaTotal;
                AlmacStrNoLote= json[index].AlmacStrNoLote;
                AlmacDateVencimi= json[index].AlmacDateVencimi;
                AlmacNumIdKardex= json[index].AlmacNumIdKardex;
                AlmacNumCodPresentInsu= json[index].AlmacNumCodPresentInsu;
                AlmacNumRenglon= json[index].AlmacNumRenglon;

            console.log(AlmacDateFecha)
            console.log(AlmacStrNoReferen)

            $('#tblKardex').append('<tr></tr><td scope="col">'+AlmacDateFecha+'</td>' +
                '<td scope="col">'+AlmacStrNoReferen+'</td>' +
                '<td scope="col">'+AlmacStrDescripci+'</td>' +
                '<td scope="col">'+AlmacStrUnidMedida+'</td>' +
                '<td scope="col table-active">'+AlmacNumEntrCantid+'</td>' +
                '<td scope="col table-active">'+AlmacNumEntrPUnit+'</td>' +
                '<td scope="col table-active">'+AlmacNumEntrVaTotal+'</td>' +
                '<td scope="col">'+AlmacNumReajCanti+'</td>' +
                '<td scope="col">'+AlmacNumReajPUnit+'</td>' +
                '<td scope="col">'+AlmacNumReajVTotal+'</td>' +
                '<td scope="col table-active">'+AlmacNumReqCantid+'</td>' +
                '<td scope="col table-active">'+AlmacNumReqPUnit+'</td>' +
                '<td scope="col table-active">'+AlmacNumReqVaTotal+'</td>' +
                '<td scope="col">'+AlmacNumExisCantid+'</td>' +
                '<td scope="col">'+AlmacNumExisPUnit+'</td>' +
                '<td scope="col">'+AlmacNumExisVaTotal+'</td>' +
                '<td scope="col table-active">'+AlmacStrNoLote+'</td>' +
                '<td scope="col table-active">'+AlmacDateVencimi+'</td>' +
                '<td scope="col table-active"><button class="btn btn-circle btn-success" onclick="abrirModCerrar('+AlmacNumIdDeltKard+')"><i class="far fa-times-circle"></i></button></td></tr>');
        });
    },
    error: function (data) {
        alert("No se lograron cargar los datos(EntradaKardex)" + data.responseText);
    }
});

}//fin function TbEntradaSalida

function buscarInsumoGeneral(){
    let codInsumo = $('#inputCodProducto').val();
    $('#SelCodUnico').empty();
    $('#SelCodUnico').append("<option>Seleccione Unidad</option>");
    let esperaInsumo = $.ajax({
        url: './api/v1/Insumo.php?AlmacNumCodInsumo1h=' + codInsumo, //
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

                $('#inputNomProducto').val(AlmacStrNomInsumo);
                //$('#inputCaracteristicasInsumo').val(AlmacStrCaractInsu);
                $('#inputPresen').val(AlmacStrPresentInsu);
                $('#inputRenPresupuestario').val(AlmacNumRenglon);
            });
        },
        error: function (data) {
            alert("No se lograron cargar los datos(InforAgenda)" + data.responseText);
        }
    });

    bucarKardexAlmacen(codigoUnico);
}

function bucarKardexAlmacen(codigoUnico) {
    var IdKardexAlmacen;
    let esperarKAlmacen =  $.ajax({
        url: './api/v1/Kardex.php?AlmacNumCodPresentInsu=' + codigoUnico,
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",

        success: function (data) {
            var json = data.data;
            console.log(json);
            $(json).each(function (index, item) {

                IdKardexAlmacen=  AlmacNumIdKardex = json[index].AlmacNumIdKardex;

                $('#inputKardexFarm').val(AlmacNumIdKardex);

            });
        },
        error: function (data) {
            alert("No se lograron cargar los datos(InforAgenda)" + data.responseText);
        }
    });
}


function abrirModCerrar(idDetalle) {
    $('#contenidoFila').fadeIn();

    let kardexNum = $('#inputKardexFarm').val();
    $('#inputKarCer').val(kardexNum);
    $('#inputDetKard').val(idDetalle);

    let numeroKardex =   $('#inputKarCer').val();
    let detalleKardex =    $('#inputDetKard').val();

    console.log(numeroKardex + 'numero kardex');
    console.log(detalleKardex + 'numero detalle');

    let infoCerrKardex =  $.ajax({
        url: './api/v1/Kardex.php?AlmacDetCerrarKardex=true&detKardAlmac=' + detalleKardex + '&numKardex=' + numeroKardex,
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var json = data.data;
            console.log(json);
            $(json).each(function (index, item) {
                AlmacNumIdKardex = json[index].AlmacNumIdKardex;
                AlmacNumNivelMinimo= json[index].AlmacNumNivelMinimo;
                AlmacNumNivelMaximo= json[index].AlmacNumNivelMaximo;
                AlmacNumCodPresentInsu= json[index].AlmacNumCodPresentInsu;
                AlmacBinEstado= json[index].AlmacBinEstado;
                AlmacNumCantExist= json[index].AlmacNumCantExist;
                AlmacNumPreUnExist= json[index].AlmacNumPreUnExist;
                AlmacNumPreTotExist= json[index].AlmacNumPreTotExist;
                AlmacNumIdDeltKard= json[index].AlmacNumIdDeltKard;
                AlmacDateFecha = json[index].AlmacDateFecha;
                AlmacStrNoReferen = json[index].AlmacStrNoReferen;
                AlmacStrDescripci = json[index].AlmacStrDescripci;
                AlmacStrUnidMedida = json[index].AlmacStrUnidMedida;
                AlmacNumEntrCantid = json[index].AlmacNumEntrCantid;
                AlmacNumEntrPUnit = json[index].AlmacNumEntrPUnit;
                AlmacNumEntrVaTotal = json[index].AlmacNumEntrVaTotal;
                AlmacNumReajCanti = json[index].AlmacNumEntrCantid;
                AlmacNumReajPUnit = json[index].AlmacNumReajPUnit;
                AlmacNumReajVTotal = json[index].AlmacNumReajVTotal;
                AlmacNumReqCantid = json[index].AlmacNumReqCantid;
                AlmacNumReqPUnit = json[index].AlmacNumReqPUnit;
                AlmacNumReqVaTotal = json[index].AlmacNumReqVaTotal;
                AlmacNumExisCantid = json[index].AlmacNumExisCantid;
                AlmacNumExisPUnit = json[index].AlmacNumExisPUnit;
                AlmacNumExisVaTotal = json[index].AlmacNumExisVaTotal;
                AlmacStrNoLote = json[index].AlmacStrNoLote;
                AlmacDateVenci = json[index].AlmacDateVenci;
                AlmacDateVencimi = json[index].AlmacDateVencimi;
                AlmacNumIdKardex = json[index].AlmacNumIdKardex;

                $('#tbodyCerrarKardex').append('<tr></tr><td scope="col">'+AlmacNumIdDeltKard+'</td>' +
                    '<td scope="col">'+AlmacStrNoReferen+'</td>' +
                    '<td scope="col">'+AlmacStrDescripci+'</td>' +
                    '<td scope="col">'+AlmacStrUnidMedida+'</td>' +
                    '<td scope="col table-active">'+AlmacNumEntrCantid+'</td>' +
                    '<td scope="col table-active">'+AlmacNumEntrPUnit+'</td>' +
                    '<td scope="col table-active">'+AlmacNumEntrVaTotal+'</td>' +
                    '<td scope="col">'+AlmacNumReajCanti+'</td>' +
                    '<td scope="col">'+AlmacNumReajPUnit+'</td>' +
                    '<td scope="col">'+AlmacNumReajVTotal+'</td>' +
                    '<td scope="col table-active">'+AlmacNumReqCantid+'</td>' +
                    '<td scope="col table-active">'+AlmacNumReqPUnit+'</td>' +
                    '<td scope="col table-active">'+AlmacNumReqVaTotal+'</td>' +
                    '<td scope="col">'+AlmacNumExisCantid+'</td>' +
                    '<td scope="col">'+AlmacNumExisPUnit+'</td>' +
                    '<td scope="col">'+AlmacNumExisVaTotal+'</td>' +
                    '<td scope="col table-active">'+AlmacStrNoLote+'</td>' +
                    '<td scope="col table-active">'+AlmacDateVencimi+'</td>' +
                    '</tr>');
            });
        },
        error: function (data) {
            alert("No se lograron cargar los datos(InforAgenda)" + data.responseText);
        }
    });

}