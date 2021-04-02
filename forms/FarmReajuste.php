<div id="vcontent" class="container container-fluid" style="margin-top: 50px">
    <div id="InsumoEnt" class="card">
        <div class="modal-header text-center white-text green-grad">
            <h3 class="modal-title w-100 font-weight-bold">FORMULARIO PARA DONATIVO, CAMBIO, PRESTAMO Y DEVOLUCION  DE MEDICAMENTO Y PRODUCTOS AFINES</h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                    onclick="$('#InsumoEnt').fadeOut();">
                <span aria-hidden="true" class="text-white">&times;</span>
            </button>
        </div>


        <div class="card-body">
            <div class="row">
                <div class="card-body">
                    <div class="row">

                    <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                        <div class="input-group-prepend">
                                <label class="input-group-text" for="inputCorrelativoCGCReaj">Correlativo CGC</label>
                              </div>
                              <input type="text" class="form-control" id="inputCorrelativoCGCReaj">
                        </div>


                            <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputFecReaj">Fecha</label>
                                </div>
                                <input type="date" class="form-control" id="inputFecReaj">
                            </div>


        <div class="input-group input-group-sm mb-sm-3 col-sm-4">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputTipoReajuste">Tipo Reajuste</label>
            </div>
                <select class="form-control" id="SelReajuste" onchange="MostrarDatosReajuste()">
                    <option > SELECCIONE</option>
                    <option value="DONENT">DONATIVO ENTRADA</option>
                    <option value="DONSAL">DONATIVO SALIDA</option>
                    <option value="CAMENT">CAMBIO ENTRADA</option>
                    <option value="CAMSAL">CAMBIO SALIDA</option>
                    <option value="PREENT">PRESTAMO ENTRADA</option>
                    <option value="PRESAL">PRESTAMO SALIDA</option>
                    <option value="DEVENT">DEVOLUCIÓN ENTRADA</option>
                    <option value="DEVSAL">DEVOLUCIÓN SALIDA</option>
                </select>
        </div>

                      <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                          <div class="input-group-prepend">
                              <label class="input-group-text" for="inputUnidadSolReajuste">Unidad Solicitante</label>
                          </div>
                          <input type="text" class="form-control" id="inputUnidadSolReajuste">
                      </div>

                            <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputUnidadEntregReaj">Unidad Quien Entrega</label>
                                </div>
                                <input type="text" class="form-control" id="inputUnidadEntregReaj">
                            </div>
                            </div>

                            <div class="modal-footer" style="text-align: right; margin-top: 15px"></div>

                    <div class="row">
                        <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputCodInsumoR">Codigo Insumo</label>
                            </div>
                                <input type="text" class="form-control" id="inputCodInsumoR" onchange="buscarInsumoGeneral()">
                        </div>

                        <div class="input-group input-group-sm mb-sm-3 col-sm-8">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputNombreInsumoReaj">Características</label>
                            </div>
                            <input type="text" class="form-control" id="inputNombreInsumoReaj" disabled>
                        </div>

                        <div class="input-group input-group-sm mb-sm-3 col-sm-5">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="SelCodUnico">Cantidad y unidad</label>
                            </div>

                            <select class="form-control" id="SelCodUnico" onchange="buscarInsumoEspecifico(this.value)">
                                <option value="0">Seleccione Unidad</option>
                            </select>
                        </div>



                            <!--<div class="input-group input-group-sm mb-sm-3 col-sm-5">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputCaractInsumoReaj">Caracterisctica del Insumo</label>
                                </div>
                                <input type="text" class="form-control" id="inputCaractInsumoReaj">
                            </div>-->

        <div class="input-group input-group-sm mb-sm-3 col-sm-4">
            <div class="input-group-prepend">
                        <label class="input-group-text" for="inputPresentacion">Presentación</label>
            </div>
                    <input type="text" class="form-control" id="inputPresentacion">
        </div>

        <div class="input-group input-group-sm mb-sm-3 col-sm-3">
            <div class="input-group-prepend">
                    <label class="input-group-text" for="inputRenglonReaj">Renglón</label>
            </div>
                    <input type="text" class="form-control" id="inputRenglonReaj">
        </div>

        <div class="input-group input-group-sm mb-sm-3 col-sm-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputKardexR">Kardex</label>
            </div>
        <input type="text" class="form-control" id="inputKardexR">
        </div>

        <div class="input-group input-group-sm mb-sm-3 col-sm-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputCantExis">Cantidad Existente</label>
            </div>
            <input type="text" class="form-control" id="inputCantExis" disabled>
        </div>

        <div class="input-group input-group-sm mb-sm-3 col-sm-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputCantSoliR">Cantidad Solicitada</label>
        </div>
            <input type="text" class="form-control" id="inputCantSoliR">
        </div>

        <div class="input-group input-group-sm mb-sm-3 col-sm-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputCantEntregadaR">Cantidad Entregada</label>
        </div>
                <input type="text" class="form-control" id="inputCantEntregadaR" onchange="valorTotal1(); valorTotal2();">
        </div>

        <div class="input-group input-group-sm mb-sm-3 col-sm-5">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputSolicitada" id="LotVenc">Lote y Vencimiento</label>
            </div>
                <select class="form-control" id="selLoteVencimiento" onchange="cargarFormsVencimiento(this.value)" disabled>
                    <option value="0">Seleccione lote o fecha de vencimiento</option>
                </select>
        </div>

        <div class="input-group input-group-sm mb-sm-3 col-sm-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputNodeLote" id="LoteSal">No. de Lote</label>
            </div>
                <input type="text" class="form-control" id="inputNodeLoteSal" disabled>
        </div>

        <div class="input-group input-group-sm mb-sm-3 col-sm-4">
            <div class="input-group-prepend">
                <label class="input-group-text" id="VencimientoSal" for="inputFecVencimientoReaj">Fecha de Vencimiento</label>
            </div>
        <input type="date" class="form-control" id="inputFecVencimientoReajSal" disabled>
        </div>

        <div class="input-group input-group-sm mb-sm-3 col-sm-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputPrecioUnitSal" id="PrecUniSal">Precio Unitario</label>
            </div>
            <input type="text" class="form-control" id="inputPrecioUnitSal" disabled>
        </div>

        <div class="input-group input-group-sm mb-sm-3 col-sm-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputValorTotal" id="ValorTotal">Valor total</label>
            </div>
            <input type="text" class="form-control" id="inputValorTotal" disabled>
        </div>

    </div>
    <div class="row" >
        <div class="input-group input-group-sm mb-sm-3 col-sm-4">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputPrecioUnitEntr" id="PrecUniEntr">Precio Unitario</label>
            </div>
            <input type="text" class="form-control" id="inputPrecioUnitEntr" onchange="valorTotal2();">
        </div>
        <div class="input-group input-group-sm mb-sm-3 col-sm-4">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputNodeLoteEntr" id="LoteEntr">No. Lote</label>
            </div>
            <input type="text" class="form-control" id="inputNodeLoteEntr">
        </div>
        <div class="input-group input-group-sm mb-sm-3 col-sm-4">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputFecVencimientoReajSal" id="VencimientoEntr">Fecha de vencimiento</label>
            </div>
            <input type="date" class="form-control" id="inputFecVencimientoReajentr">
        </div>
        <div class="input-group input-group-sm mb-sm-3 col-sm-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputValorTotalEnt" id="ValorTotalEnt">Valor total</label>
            </div>
            <input type="text" class="form-control" id="inputValorTotalEnt" disabled>
        </div>
    </div>
</div>
</div>

            <input type="text" class="form-control" id="inputcantidadUnidad" hidden>
            <input type="text" class="form-control" id="inputNombreInsumo" hidden>

<div class="modal-footer" style="text-align: right">

    <button class="btn btn-success btn-sm"  id="btnGuardarReajuste" onclick="AñadirReajuste()"> Añadir
        <i class="fas fa-plus-circle" style="margin-left: 10px"></i>
    </button>


 </div>


<table class="table table-striped  table-responsive table-dark" class="table table-condensed table-bordered table-hover" bgcolor="#D3D3D3" id="tblFarmReajuste">
        <thead class="stylish-color-dark text-white">
            <tr align="center" class="active">
                <td width="480">Insumo</td>
                <td width="350">Presentacion</td>
                <td width="100">Cantidad Solicitada</td>
                <td width="100">Cantidad Entregada</td>
            </tr>
        </thead>
        <tbody id="tbodyReajuste">
        </tbody>
        <tfoot>
        </tfoot>
</table>


            <div class="modal-footer" style="text-align: right">

            </div>

            <div class="row">
                <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputNomSolicitante">Nombre Solicitante</label>
                    </div>
                    <input type="text" class="form-control" id="inputNomSolicitante">
                </div>

                <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputCargoSolitante">Cargo Solicitante</label>
                    </div>
                    <input type="text" class="form-control" id="inputCargoSolitane">
                </div>
                <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputNomEntrega">Nombre Entrega</label>
                    </div>
                    <input type="text" class="form-control" id="inputNomEntrega">
                </div>
                <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputCargoEntrega">Cargo Entrega</label>
                    </div>
                    <input type="text" class="form-control" id="inputCargoEntrega">
                </div>
                <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputNomGerenteFinan">Nombre Gerente Financiero</label>
                    </div>
                    <input type="text" class="form-control" id="inputNomGerenteFinan">
                </div>

                <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputNombAdminiFin">Nombre Gerente Administrativo Financiero</label>
                    </div>
                    <input type="text" class="form-control" id="inputNombAdminiFin">
                </div>

                <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputNomDirEjecSol">Nombre Direccion Ejecutiva Solicitante</label>
                    </div>
                    <input type="text" class="form-control" id="inputNomDirEjec">
                </div>

                <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputNomDirEjeEntrega">Nombre Direccion Ejecutiva Entrega</label>
                    </div>
                    <input type="text" class="form-control" id="inputNomDirEjeEntrega">
                </div>

                	 <div class="input-group input-group-sm mb-sm-3 col-sm-12">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputObservaciones">Obervaciones</label>
                    </div>
                    <input type="text" class="form-control" id="inputObservaciones" >
                </div>
                </div>

             <div class="modal-footer" style="text-align: right">

                <button class="btn btn-success btn-sm"  id="btnGuardarReaj" onclick="guardarReajuste();">Guardar Reajuste
                        <i class="fas fa-share-square"></i>
                </button>

                 <button class="btn btn-primary btn-sm"  id="btnImprimirReajuste" onclick="imprimirReajuste()"> Impresión
                     <i class="fas fa-print" style="margin-left: 10px"></i>
                 </button>

             </div>


            </div>

        </div>

    </div>
</div>


<script type="text/javascript" src="./js/js_FarmReajuste.js"></script>