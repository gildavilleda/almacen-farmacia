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
                                <input type="text" class="form-control" id="inputFecReaj">
                            </div>

                            <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputTipoReajuste">Tipo Reajuste</label>
                                </div>
                                <select id="inputTipoReajuste" class="form-control">
                                    <option> SELECCIONE</option>
                                    <option>DONATIVO</option>
                                    <option>CAMBIO</option>
                                    <option>PRESTAMO</option>
                                    <option>DEVOLUCION</option>
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
                         
                               <div class="modal-footer" style="text-align: right">

                            <button class="btn btn-success btn-sm"  id="btnGuardarReajuste" onclick="añadirTabla()"> Crear
                                    <i class="fas fa-plus-circle"></i>
                            </button>

                             </div>
                            
                            <div class="row">
                            <div class="input-group input-group-sm mb-sm-3 col-sm-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputCodInsumoR">Codigo Insumo</label>
                                </div>
                                <input type="text" class="form-control" id="inputCodInsumoR">
                            </div>

                            <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputNombreInsumoReaj">Nombre del Insumo</label>
                                </div>
                                <input type="text" class="form-control" id="inputNombreInsumoReaj">
                            </div>

                            <div class="input-group input-group-sm mb-sm-3 col-sm-5">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputCaractInsumoReaj">Caracterisctica del Insumo</label>
                                </div>
                                <input type="text" class="form-control" id="inputCaractInsumoReaj">
                            </div>

                                <div class="input-group input-group-sm mb-sm-3 col-sm-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputCantUnidReaj">Presentación</label>
                                </div>
                                <input type="text" class="form-control" id="inputCantUnidReaj">
                            </div>
                            <div class="input-group input-group-sm mb-sm-3 col-sm-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputPresentacón">Cantidad y unidad</label>
                                </div>
                    
                        <select class="form-control" id="SelCodUnico" onchange="buscarInsumoEspecifico(this.value)">
                        <option value="0">Seleccione Unidad</option>

                         </select>
                         </div>

                            

                            <div class="input-group input-group-sm mb-sm-3 col-sm-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputRenglonReaj">Renglón</label>
                                </div>
                                <input type="text" class="form-control" id="inputRenglonReaj">
                            </div>
                            <div class="input-group input-group-sm mb-sm-3 col-sm-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputRenglonReaj">Kardex</label>
                                </div>
                                <input type="text" class="form-control" id="inputRenglonReaj">
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
                                <input type="text" class="form-control" id="inputCantEntregadaR">
                            </div>

                            <div class="input-group input-group-sm mb-sm-3 col-sm-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputPrecioUnit">Precio Unitario</label>
                                </div>
                                <input type="text" class="form-control" id="inputPrecioUnit">
                            </div>

                            <div class="input-group input-group-sm mb-sm-3 col-sm-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputNodeLote">No. de Lote</label>
                                </div>
                                <input type="text" class="form-control" id="inputNodeLote">
                            </div>

                            <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputFecVencimientoReaj">Fecha de Vencimiento</label>
                                </div>
                                <input type="text" class="form-control" id="inputFecVencimientoReaj">
                            </div>

                              </div>
                                </div>
                                </div>

                            <div class="modal-footer" style="text-align: right">

                            <button class="btn btn-success btn-sm"  id="btnGuardarReajuste" onclick="añadirTabla()"> Añadir
                                    <i class="fas fa-plus-circle"></i>
                            </button>

                             </div>
                     

                     <table class="table table-striped  table-responsive table-dark" class="table table-condensed table-bordered table-hover" bgcolor="#D3D3D3">
                        <thead>
                     <tr>
                        <thead class="stylish-color-dark text-white">
                      <tr align="center" class="active">
                        <td width="350">Insumo</td>
                        <td width="480">Presentacion</td>
                        <td width="350">Cantidad Solicitada</td>
                        <td width="50">Cantidad Entregada</td>
                        <th width="300">Eliminar</th>

                      </tr>
                </thead>
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
                    <input type="text" class="form-control" id="inputObservaciones">
                </div>
                </div>

             <div class="modal-footer" style="text-align: right">

                <button class="btn btn-success btn-sm"  id="btnGuardarReajuste" onclick="añadirTabla()">Guardar Reajuste
                                    <i class="fas fa-share-square"></i>
                </button>

             </div>


            </div>

        </div>

    </div>
</div>
