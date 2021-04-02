<div id="vcontent" class="container container-fluid" style="margin-top: 50px">
    <div id="InsumoEnt" class="card">
        <div class="modal-header text-center white-text green-grad">
            <h3 class="modal-title w-100 font-weight-bold">TRASLADO DE MEDICAMENTOS Y PRODUCTOS AFINES</h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                    onclick="$('#InsumoEnt').fadeOut();">
                <span aria-hidden="true" class="text-white">&times;</span>
            </button>
        </div>


        <div class="card-body">
            <div class="row">

                <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputCorrelativoCGC">Correlativo CGC</label>
                    </div>
                    <input type="text" class="form-control" id="inputCorrelativoCGC">
                </div>



                <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputPrograma">SOLICITA</label>
                    </div>
                    <select id="inputSolicita" class="form-control">
                        <option> SELECCIONE</option>
                        <option>AREA DE PRODUCCION</option>
                        <option>AREA DE UNIDOSIS</option>
                        <option>FARMACIA SÁTELITE EMERGENCIA</option>
                        <option>FARMACIA INTERNA</option>
                    </select>
                </div>



                <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputPrograma">ENTREGA</label>
                    </div>
                    <select id="inputEntrega" class="form-control">
                        <option> SELECCIONE</option>
                        <option>BODEGA FARMACIA DE MEDICAMENTOS</option>
                        <option> BODEGA FARMACIA MMQM Y AFINES</option>
                        <option>FARMACIA SÁTELITE EMERGENCIA</option>
                    </select>
                </div>





                    <!--<button class="btn btn-success btn-sm"  id="btnGuardarEntrada"> Generar
                        <i class="fas fa-plus-circle"></i>
                    </button>-->

                    <div class="card-body">
                        <div class="row">
                            <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputCodigo">Código</label>
                                </div>
                                <input type="text" class="form-control" id="inputCodigo" onchange="buscarInsumoGeneral()">
                            </div>


                            <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputDescripción">Descripcion</label>
                                </div>
                                <input type="text" class="form-control" id="inputDescrip" disabled="">
                            </div>


                            <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputCantiSolicitada">Presentación</label>
                                </div>
                                <select class="form-control" id="SelCodUnico" onchange="buscarInsumoEspecifico(this.value)">
                        <option value="0">Seleccione presentacion</option>

                    </select>
                            </div>

                            <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputCantiDespachada">Kardex</label>
                                </div>
                                <input type="text" class="form-control" id="inputKardexFar" disabled>
                            </div>


                            <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputCantiDespachada">Cantidad Solicitada</label>
                                </div>
                                <input type="text" class="form-control" id="inputCantiSolicit">
                            </div>


                             <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputCantiDespachada">Cantidad Despachada</label>
                                </div>
                                <input type="text" class="form-control" id="inputCantiDespachada">
                            </div>


                            <div class="input-group input-group-sm mb-sm-3 col-sm-12">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputMotivTraslado">Motivo De Traslado</label>
                                </div>
                                <input type="text" class="form-control" id="inputMotivTraslado">
                            </div>

                <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                    <div class="input-group-prepend">
                        
                        <label class="input-group-text" for="selLoteVencimiento">Lote y Vencimiento</label>
                    </div>

                    <select class="form-control" id="selLoteVencimiento" onchange="cargarFormsVencimiento(this.value)" >
                        <option value="0">Seleccione lote o fecha de vencimiento</option>
                    </select>
                </div>

                             <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputVechaVenci">Fecha De Vencimiento</label>
                                </div>
                                <input type="text" class="form-control" id="inputVechaVenci" disabled>
                            </div>

                             <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputCantExistente">Cantidad Existente</label>
                                </div>
                                <input type="text" class="form-control" id="inputCantExistente" disabled>
                            </div>


                            <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputNoLote">No. Lote</label>
                                </div>
                                <input type="text" class="form-control" id="inputNoLote"disabled>
                            </div>


                             <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputPreciUnit">Precio Unitario</label>
                                </div>
                                <input type="text" class="form-control" id="inputPreciUnit"disabled>
                            </div>

                               <!--<div class="input-group input-group-sm mb-sm-3 col-sm-4">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputCantActual">Cantidad Actual</label>
                                </div>
                                <input type="text" class="form-control" id="inputCantActual" onchange="CantidadActual()" disabled>
                            </div>-->

                            <button class="btn btn-success btn-sm"  id="btnAñadirDetalleTrasl" onclick="añadirTabla()""> Añadir
                                <i class="fas fa-plus-circle"></i>
                            </button>
                         </div>
            <table align="center" border="1" style="width:auto; height:20px;" class="table table-condensed table-bordered table-hover" bgcolor="#D3D3D3" id="tblFarmTraslado">
                        <thead class="stylish-color-dark text-white">
                      <tr align="center" class="active">
                        <td width="100">Código</td>
                        <td width="380">Descripcion del Producto</td>
                        <td width="150">Cantidad Solicitada</td>
                        <td width="150">Cantidad Despachada</td>
                         <td width="150">Acciones</td>
                    
                      </tr>
                </thead>
                <tbody id="tblbodyTraslado">
                </tbody>
            </table>

            <div class="row">
                <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputEntregaTras">Entrega</label>
                    </div>
                    <input type="text" class="form-control" id="inputEntregaTras">
                </div>
                <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputCargoTrasl">Cargo</label>
                    </div>
                    <input type="text" class="form-control" id="inputCargoTrasl">
                </div>

                <!--<div class="input-group input-group-sm mb-sm-3 col-sm-4">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputFirmaEntrega">Firma</label>
                    </div>
                    <input type="text" class="form-control" id="inputFirma">
                </div>-->
                <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputRecibeTras">Recibe</label>
                    </div>
                    <input type="text" class="form-control" id="inputRecibeTras">
                </div>

                <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputCargoTras">Cargo</label>
                    </div>
                    <input type="text" class="form-control" id="inputCargoTras">
                </div>

                <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputJefeDepartamento">Jefe de Farmacia Interna</label>
                    </div>
                    <input type="text" class="form-control" id="inputJefeDepartamento" disabled="">
                </div>

                <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputCargoJefe">Cargo</label>
                    </div>
                    <input type="text" class="form-control" id="inputCargoJefe" disabled="">
                </div>

                <!--<div class="input-group input-group-sm mb-sm-3 col-sm-4">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputFirmaTras">Firma</label>
                    </div>
                    <input type="text" class="form-control" id="inputFirmaTras">
                </div>-->

                <!--<div class="input-group input-group-sm mb-sm-3 col-sm-4">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputFirmaJefe">Firma</label>
                    </div>
                    <input type="text" class="form-control" id="inputFirmaJefe">
                </div>-->

                     <div class="input-group input-group-sm mb-sm-3 col-sm-12">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputObservaciones">Obervaciones</label>
                    </div>
                    <input type="text" class="form-control" id="inputObservaciones">
                </div>

                <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputLugyFec">Lugar </label>
                    </div>
                    <input type="text" class="form-control" id="inputLug" disabled="">
                </div>

                <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputFech">Fecha</label>
                    </div>
                    <input type="date" class="form-control" id="inputFech">
                </div>


                <button class="btn btn-success btn-sm"  id="btnGuardarTraslado" onclick="guardarTraslado()">Guardar Traslado
                    <i class="fas fa-share-square"></i>
                </button>

                <button class="btn btn-success btn-sm" onclick="ejecutarRep()"> Formato Traslado 
                        <i class="fas fa-plus-circle"></i>
                    </button>

                    <button type="button" id= "buscarDatos"class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-xl">Buscar</button>

                    <!--Modal buscar-->

                 <div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl" role="document">
                 <div class="modal-header text-center text-white green-grad">
                <h3 class="modal-title w-100 font-weight-bold">Buscar Insumo</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                    onclick="$('#ModalBuscar').fadeOut();">
                <span aria-hidden="true" class="text-white">&times;</span>
                </button>
                 </div>

                    <div class="modal-content">
                     <div class="row">
                    <div class="col-sm">
                    <form class="form-inline active-cyan-3 active-cyan-4">
                     
                        <table id="tbBuscar" class="table table-sm table-hover w3-border" width="99%">
               
                    <thead class="primary-color text-white">
		            <tr>
                    <th class="">Código de Insumo</th>
                    <th class="">Nombre</th>
                    <th class="">Caracteristicas</th>
                    <th class="">Renglon</th>
                    <th class="">Kardex</th>
                    <th class="">Cantidad Existente</th>
                    <th class="">Presentación</th>
                    <th class="">Unidad</th>
                     </tr>
             
                </thead>

                    </form>

                    </div>
                </div>
            </div>
        </div>
    </div>

     <!--fin Modal buscar-->









            </div>


            </div>

        </div>
    </div>
</div>


<script type="text/javascript" src="./js/js_FarmaciaTraslado.js"></script>