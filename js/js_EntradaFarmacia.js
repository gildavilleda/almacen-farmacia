$(document).ready(function () {
    var f = new Date();
    let fecha = (f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());
    $('#inputFechaIngreso').val(fecha);
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

/*
function buscarInsumoGenerals(){
    let codInsumo = $('#inputCodProducto').val();

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
    $.ajax({
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

                $('#inputNomInsumo').val(AlmacStrNomInsumo);
                $('#inputDespInsumo').val(AlmacStrCaractInsu);
            });

        },
        error: function (data) {
            alert("No se lograron cargar los datos(InforAgenda)" + data.responseText);
        }
    });

    bucarKardexFarmacia(codigoUnico)
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

                $('#inputKarFarmacia').val(FarmNumIdKardexFarm);

            });

        },
        error: function (data) {
            alert("No se lograron cargar los datos(InforAgenda)" + data.responseText);
        }
    });

   $.when(esperarKFamrmacia).done(function () {
       buscarKardexAlamacen(codigoUnico);
   });

}

function buscarKardexAlamacen(codigoUnico) {
    $.ajax({
        url: './api/v1/1-hDetalle.php?codigoUnico=' + codigoUnico,
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",

        success: function (data) {
            var json = data.data;
            console.log(json);
            $(json).each(function (index, item) {
                    //AlmacNumIdDetalleForm1H= json[index].AlmacNumIdDetalleForm1H;
                    //AlmacNumIdForm1H= json[index].AlmacNumIdForm1H;
                    //AlmacNumCantidad= json[index].AlmacNumCantidad;
                    //AlmacNumFolioLibAlmac= json[index].AlmacNumFolioLibAlmac;
                    AlmacNumPrecUnidad= json[index].AlmacNumPrecUnidad;
                    //AlmacNumPrecValTotal= json[index].AlmacNumPrecValTotal;
                    //AlmacNumFolioLibInven= json[index].AlmacNumFolioLibInven;
                    //AlmacNumIdNomen= json[index].AlmacNumIdNomen;
                    //AlmacNumCodPresentInsu= json[index].AlmacNumCodPresentInsu;
                    //AlmacNumTotal= json[index].AlmacNumTotal;
                    //AlmacStrObservacionesDetall= json[index].AlmacStrObservacionesDetall;
                    //AlmacStrNoFacturaDetall= json[index].AlmacStrNoFacturaDetall;
                    AlmacStrNoLote= json[index].AlmacStrNoLote;
                    AlmacDateFechaVenci1H= json[index].AlmacDateFechaVenci1H;

                $('#inputFecVencimiento').val(AlmacDateFechaVenci1H);
                $('#inputLote').val(AlmacStrNoLote);
                $('#inputPrecUnitario').val(AlmacNumPrecUnidad);

            });

        },
        error: function (data) {
            alert("No se lograron cargar los datos(InforAgenda)" + data.responseText);
        }
    });
}
*/
function buscarrequi(codigreq) {

    $.ajax({
        url: './api/v1/EntradaFarmacia.php?FarmNumIdRequiEntrada=' + codigreq,
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

                $('#inputNomInsumo').val(AlmacStrNomInsumo);
                $('#inputDespInsumo').val(AlmacStrCaractInsu);


            });

        },
        error: function (data) {
            alert("No se lograron cargar los datos(InforAgenda)" + data.responseText);
        }
    });

    bucarKardexFarmacia(codigreq)
}


function llenarTablaDetalle() {

    let fecha = $('#inputFechaIngreso').val();
    let codigoRequi = $('#inputDocRespaldo').val() + $('#TipAlmac').val();
    $('#tbodyDetalleEntrada').empty();
    $('#tbodyaggkardexentrada').empty();
    $.ajax({
        url: './api/v1/EntradaFarmacia.php?vistaEntrada=true' + '&codigoRequi=' + codigoRequi,
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",

        success: function (data) {
            var json = data.data;
            console.log("Insumos que si tienen kardex");
            console.log(json);
            $(json).each(function (index, item) {
                AlmacNumIdRequi = json[index].AlmacNumIdRequi;
                RequiFarm = json[index].RequiFarm;
                DocRespaldo = json[index].DocRespaldo;
                AlmacStrPresentInsu = json[index].AlmacStrPresentInsu;
                AlmacStrCantYUnidInsu = json[index].AlmacStrCantYUnidInsu;
                AlmacNumCantDespachada = json[index].AlmacNumCantDespachada;
                AlmacNumPreUnExist = json[index].AlmacNumPreUnExist;
                FarmNumPrecTotal = json[index].FarmNumPrecTotal;
                AlmacStrNoLote = json[index].AlmacStrNoLote;
                AlmacDateFechaVenciReq = json[index].AlmacDateFechaVenciReq;
                FarmNumIdKardexFarm = json[index].FarmNumIdKardexFarm;
                AlmacStrNomInsumo = json[index].AlmacStrNomInsumo;
                FarmStrPresentInusmo = json[index].FarmStrPresentInusmo;
                FarmStrUniInsumo = json[index].FarmStrUniInsumo;

                $('#tbodyDetalleEntrada').append('<tr class="text-center">' +
                    '<td>' + fecha + '</td>' +
                    '<td>' + RequiFarm + '</td>' +
                    '<td>' + DocRespaldo + '</td>' +
                    '<td>' + AlmacStrPresentInsu + '</td>' +
                    '<td>' + AlmacStrCantYUnidInsu + '</td>' +
                    '<td id="CA-' + index + '">' + AlmacNumCantDespachada + '</td>' +
                    '<td id="PU-' + index + '">' + AlmacNumPreUnExist + '</td>' +
                    '<td>' + FarmNumPrecTotal + '</td>' +
                    '<td>' + AlmacStrNoLote + '</td>' +
                    '<td>' + AlmacDateFechaVenciReq + '</td>' +
                    '<td hidden>' + FarmNumIdKardexFarm + '</td>' +
                    '<td> <input type="text" class="form-control" id="Uni-' + index + '" onchange="sumaNC(this.id)"></td>' +
                    '<td id="NC-' + index + '"> </td>' +
                    '<td id="NPU-' + index + '"> </td>' +
                    '<td>' + AlmacStrNomInsumo + '</td>' +
                    '<td>' + FarmStrPresentInusmo + '</td>' +
                    '<td>' + FarmStrUniInsumo + '</td>' +
                    '</tr>')
            });

        },
        error: function (data) {
            alert("No se lograron cargar los datos(InforAgenda)" + data.responseText);
        }
    });

    $.ajax({
        url: './api/v1/EntradaFarmacia.php?datosfaltantes=true' + '&codigoRequi=' + codigoRequi,
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",

        success: function (data) {
            var json = data.data;
            console.log("Insumos que no tienen kardex");
            console.log(json);
            $(json).each(function (index, item) {
                AlmacNumRenglon= json[index].AlmacNumRenglon;
                AlmacNumCodInsumo= json[index].AlmacNumCodInsumo;
                AlmacStrNomInsumo= json[index].AlmacStrNomInsumo;
                AlmacStrCaractInsu= json[index].AlmacStrCaractInsu;
                AlmacStrPresentInsu= json[index].AlmacStrPresentInsu;
                AlmacStrCantYUnidInsu= json[index].AlmacStrCantYUnidInsu;
                AlmacNumCodPresentInsu= json[index].AlmacNumCodPresentInsu;
                AlmacNumIdRequi= json[index].AlmacNumIdRequi;
                FarmNumIdKardexFarm= json[index].FarmNumIdKardexFarm;
                AlmacStrNoLote= json[index].AlmacStrNoLote;
                AlmacDateFechaVenciReq= json[index].AlmacDateFechaVenciReq;
                AlmacNumCantDespachada= json[index].AlmacNumCantDespachada;
                AlmacNumPreUnExist= json[index].AlmacNumPreUnExist;
                Total= json[index].Total;
                DocRespaldo= json[index].DocRespaldo;

                let IdREqui = AlmacNumIdRequi= json[index].AlmacNumIdRequi;
                let IdRequiSplit = IdREqui.split("-");

                $('#tbodyaggkardexentrada').append('<tr class="text-center" id="tr-'+AlmacNumCodPresentInsu+'">' +
                    '<td>' + AlmacNumRenglon + '</td>' +
                    '<td>' + AlmacNumCodInsumo + '</td>' +
                    '<td>' + AlmacStrNomInsumo + '</td>' +
                    '<td>' + DocRespaldo + '</td>' +
                    '<td>' + AlmacStrPresentInsu + '</td>' +
                    '<td>' + AlmacStrCantYUnidInsu + '</td>' +
                    '<td>' + IdRequiSplit[0] + '</td>' +
                    '<td>' + AlmacStrNoLote + '</td>' +
                    '<td>' + AlmacDateFechaVenciReq + '</td>' +
                    '<td>' + AlmacNumCodPresentInsu + '</td>' +
                    '<td>' + AlmacNumCantDespachada + '</td>' +
                    '<td>' + AlmacNumPreUnExist + '</td>' +
                    '<td>' + Total + '</td>' +
                    '<td>' + AlmacNumIdRequi + '</td>' +
                    '<td><button class="btn btn-info editar" id=' + AlmacNumCodPresentInsu + '><i class="fas fa-edit"></i></button></td>' +
                    '<td><button class="btn btn-info unirKardex" id=' + AlmacNumCodPresentInsu + '><i class="fas fa-sync"></i></button></td>' +
                    '<td><button class="btn btn-danger borrar"><i class="far fa-trash-alt"></i></button></td>' +
                    '</tr>')
            });

            if (json.length == 0) {
                console.log("Todos los insumos tienen kardex asignados")
                $('#btnGuardarEntrada').prop('disabled', false);
            } else {
                console.log("Falta Asignar kardex a insumos")
                $('#btnGuardarEntrada').prop('disabled', true);
            }
        },

        error: function (data) {
            alert("No se lograron cargar los datos(InforAgenda)" + data.responseText);
        }
    });
}

/*funcion para editar fila*/
$(document).on('click', '.editar', function (event) {
    event.preventDefault();
    //$(this).closest('tr').remove();
    $('#asignarkardex').fadeIn();
    //$('#inputCodInsumo)
});

//<a className="dropdown-item" onClick="fnOpenForm(event, 'FarmEntradaFarmacia')">Entrada Farmacia</a>


/*funcion para eliminar fila*/
$(document).on('click', '.borrar', function (event) {
    event.preventDefault();
    $(this).closest('tr').remove();
});


function InsetEntrada(){
    var tableInfo = Array.prototype.map.call(document.querySelectorAll('#tbodyDetalleEntrada tr'), function (tr) {
        return Array.prototype.map.call(tr.querySelectorAll('td'), function (td) {
            return td.innerHTML;
        });
    });

    console.log(tableInfo);

    for (let j = 0; j < tableInfo.length; j++) {


        let datosDetalle = {
            FarmDateFechaIngreso: tableInfo[j][0],
            FarmNumIdRequiEntrada: AlmacNumIdRequi,
            FarmStrDescrip: tableInfo[j][2],
            FarmNumPreTotal: tableInfo[j][6],
            FarmStrNolote: tableInfo[j][8],
            FarmDateVenci: tableInfo[j][9],
            FarmNumIdKardexFarm: tableInfo[j][10],
            FarmNumCant: tableInfo[j][12],
            FarmNumPreUnit: tableInfo[j][13]

        };
        console.log("cada datosDetalle enviado");
        console.log(datosDetalle);
        $.ajax({
            url: './api/v1/EntradaFarmacia.php',
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
    $('#btnGuardarEntrada').prop('disabled', true);
}


function sumaNC(id) {

    let soloNum = id.split("-");
    let Unidad = $('#Uni-' + soloNum[1]).val();
    let CantidadAntigua = $('#CA-' + soloNum[1]).text();
    let precioUnitario = $('#PU-' + soloNum[1]).text();
    console.log(Unidad + ' ' + CantidadAntigua);
    var multiplicacion = 0;
    multiplicacion = parseInt(Unidad) * parseInt(CantidadAntigua);

    $('#NC-' + soloNum[1]).text(multiplicacion);

    let division = 0;

    division = parseFloat(precioUnitario) / parseInt(Unidad);

    $('#NPU-' + soloNum[1]).text(division);
}

var objDatosAbajo = {};

$(document).on('click', '.unirKardex', function (event) {
    $('#tbodySelAgKardex').empty();
    event.preventDefault();
    let data = $(this).closest('tr');
    let renglon = (data.find("td:eq(0)").text());
    let codigo = (data.find("td:eq(1)").text());
    let nombre = (data.find("td:eq(2)").text());
    let caracteristicas = (data.find("td:eq(3)").text());
    let strPresentacion = (data.find("td:eq(4)").text());
    let strUnidad = (data.find("td:eq(5)").text());
    let docRespaldo = (data.find("td:eq(6)").text());
    let lote = (data.find("td:eq(7)").text());
    let fechaVencimiento = (data.find("td:eq(8)").text());
    let codPresentacionAux = (data.find("td:eq(9)").text());
    let AlmacNumCantDespachada = (data.find("td:eq(10)").text());
    let AlmacNumPreUnExist = (data.find("td:eq(11)").text());
    let Total = (data.find("td:eq(12)").text());
    let codigoRequi = (data.find("td:eq(13)").text());

    objDatosAbajo = {
        renglon:renglon,
        codigo:codigo,
        nombre:nombre,
        caracteristicas:caracteristicas,
        strPresentacion:strPresentacion,
        strUnidad:strUnidad,
        docRespaldo:docRespaldo,
        lote:lote,
        fechaVencimient:fechaVencimiento,
        codPresentacionAu:codPresentacionAux,
        AlmacNumCantDespachada:AlmacNumCantDespachada,
        AlmacNumPreUnExist:AlmacNumPreUnExist,
        Total:Total,
        codigoRequi:codigoRequi,
        data:data,
        kardex: null,
        presFarm: null,
        uniFarm: null
        };

    console.log("---------------");
    console.log(objDatosAbajo);
    console.log("---------------");

    $('#tbBuscarK').DataTable( {
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
        ], destroy: true
    } );

    /*Llena tabla auxiliar para seleccionar kardex a unir*/
    /*
    $.ajax({
        url: './api/v1/EntradaFarmacia.php?vistaEntrada=true' + '&codigoRequi=' + codigoRequi,
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var json = data.data;
            console.log("Insumos que si tienen kardex");
            console.log(json);
            $(json).each(function (index, item) {
                RequiFarm = json[index].RequiFarm;
                DocRespaldo = json[index].DocRespaldo;
                AlmacStrPresentInsu = json[index].AlmacStrPresentInsu;
                AlmacStrCantYUnidInsu = json[index].AlmacStrCantYUnidInsu;
                AlmacNumCantDespachada = json[index].AlmacNumCantDespachada;
                AlmacNumPreUnExist = json[index].AlmacNumPreUnExist;
                FarmNumPrecTotal = json[index].FarmNumPrecTotal;
                AlmacStrNoLote = json[index].AlmacStrNoLote;
                AlmacDateFechaVenciReq = json[index].AlmacDateFechaVenciReq;
                FarmNumIdKardexFarm = json[index].FarmNumIdKardexFarm;
                AlmacStrNomInsumo = json[index].AlmacStrNomInsumo;
                FarmStrPresentInusmo = json[index].FarmStrPresentInusmo;
                FarmStrUniInsumo = json[index].FarmStrUniInsumo;

                $('#tbodySelAgKardex').append('<tr class="text-center">' +
                    '<td>' + DocRespaldo + '</td>' +
                    '<td>' + AlmacStrPresentInsu + '</td>' +
                    '<td>' + AlmacStrCantYUnidInsu + '</td>' +
                    '<td id="CA-' + index + '">' + AlmacNumCantDespachada + '</td>' +
                    '<td id="PU-' + index + '">' + AlmacNumPreUnExist + '</td>' +
                    '<td>' + FarmNumPrecTotal + '</td>' +
                    '<td>' + AlmacStrNoLote + '</td>' +
                    '<td>' + AlmacDateFechaVenciReq + '</td>' +
                    '<td>' + FarmNumIdKardexFarm + '</td>' +
                    '<td>' + AlmacStrNomInsumo + '</td>' +
                    '<td>' + FarmStrPresentInusmo + '</td>' +
                    '<td>' + FarmStrUniInsumo + '</td>' +
                    '</tr>')
            });
        },
        error: function (data) {
            alert("No se lograron cargar los datos(InforAgenda)" + data.responseText);
        }
    });*/


    $('#unirKardex').fadeIn();
});

$('#tbBuscarK tbody').on('dblclick', 'td', function () {
    console.log("esto");
    let data = $(this).closest('tr');
    let kardex = (data.find("td:eq(4)").text());
    let presFarm = (data.find("td:eq(6)").text());
    let uniFarm = (data.find("td:eq(7)").text());
    console.log(presFarm);
    console.log(uniFarm);
    objDatosAbajo.kardex = kardex; //asigna kardex a objeto
    objDatosAbajo.presFarm = presFarm;
    objDatosAbajo.uniFarm = uniFarm;
    $('#inputKardexSelec').val(kardex).prop('disabled', true); //Llenar input de los datos de la tabla

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'KARDEX No. '+kardex+' seleccionado correctamente',
        showConfirmButton: false,
        timer: 2500
    });

    console.log(objDatosAbajo);
});



$('#btnUnirKardex').click(function (){
    $('#tbodyDetalleEntrada').append('<tr class="text-center">' +
        '<td>'+$('#inputFechaIngreso').val()+'</td>' +
        '<td>' + objDatosAbajo.docRespaldo + '</td>' +
        '<td>' + objDatosAbajo.caracteristicas + '</td>' +
        '<td>' + objDatosAbajo.strPresentacion + '</td>' +
        '<td>' + objDatosAbajo.strUnidad + '</td>' +
        '<td id="CA-' + objDatosAbajo.kardex + '">' + objDatosAbajo.AlmacNumCantDespachada + '</td>' +
        '<td id="PU-' + objDatosAbajo.kardex + '">' + objDatosAbajo.AlmacNumPreUnExist + '</td>' +
        '<td>' + objDatosAbajo.Total + '</td>' +
        '<td>' + objDatosAbajo.lote + '</td>' +
        '<td>' + objDatosAbajo.fechaVencimient + '</td>' +
        '<td hidden>' + objDatosAbajo.kardex + '</td>' +
        '<td> <input type="text" class="form-control" id="Uni-' + objDatosAbajo.kardex + '" onchange="sumaNC(this.id)"></td>' +
        '<td id="NC-' + objDatosAbajo.kardex + '"> </td>' +
        '<td id="NPU-' + objDatosAbajo.kardex + '"> </td>' +
        '<td>' + objDatosAbajo.nombre + '</td>' +
        '<td>' + objDatosAbajo.presFarm+ '</td>' +
        '<td>' + objDatosAbajo.uniFarm + '</td>' +
        '</tr>');

    objDatosAbajo.data.remove();
    $('#unirKardex').fadeOut();
    validarTblVacia();
});

function validarTblVacia(){
    var tableVal= Array.prototype.map.call(document.querySelectorAll('#tbodyaggkardexentrada tr'), function (tr) {
        return Array.prototype.map.call(tr.querySelectorAll('td'), function (td) {
            return td.innerHTML;
        });
    });

    if(tableVal.length == 0){
        $('#btnGuardarEntrada').prop('disabled', false);
    }
}

