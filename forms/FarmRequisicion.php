
<div id="vcontent" class="container container-fluid" style="margin-top: 50px">
    <div id="InsumoEnt" class="card">
        <div class="modal-header text-center white-text green-grad">
            <h3 class="modal-title w-100 font-weight-bold">REQUISICIÓN</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="$('#InsumoEnt').fadeOut();">
                    <span aria-hidden="true" class="text-white">&times;</span>
                </button>
    </div>
    
    <div class="card-body">
            <div class="row">


                <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputCorrelativoRequi">Correlativo CGC</label>
                    </div>
                        <input type="text" class="form-control" id="inputCorrelativoRequi">
                </div>


                <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputServicio">Servicio</label>
                    </div>
                        <input type="text" class="form-control" id="inputServicio">
                </div>


                <div class="input-group input-group-sm mb-sm-3 col-sm-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputCodigo">Código</label>
                    </div>
                        <input type="text" class="form-control" id="inputCodigo" onchange="buscarInsumoGeneral()">
                </div>

                <div class="input-group input-group-sm mb-sm-3 col-sm-5">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputFarmDescrip">Descripcion</label>
                    </div>
                    <input type="text" class="form-control" id="inputFarmDescrip" disabled>
                </div>

                <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputPresentacón">Presentación</label>
                    </div>
                    
                    <select class="form-control" id="SelCodUnico" onchange="buscarInsumoEspecifico(this.value)">
                        <option value="0">Seleccione presentacion</option>
                    </select>
                    </div>

                <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="">Kardex</label>
                    </div>
                    <input type="text" class="form-control" id="inputKardex" disabled>
                </div>

                <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputCantSolicitada">Cantidad Solicitada</label>
                    </div>
                    <input type="text" class="form-control" id="inputCantSolicitada">
                </div>

                <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputCantDespachada">Cantida Despachada</label>
                    </div>
                    <input type="text" class="form-control" id="inputCantDespachada">
                </div>
               
               <div class="card-body">

                    <div class="row">


                   <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputSolicitada">Lote y Vencimiento</label>
                    </div>
                    <select class="form-control" id="selLoteVencimiento" onchange="cargarFormsVencimiento(this.value)" disabled>
                        <option value="0">Seleccione lote o fecha de vencimiento</option>
                    </select>
                </div>

                
                <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="">Fecha De Vencimiento</label>
                    </div>
                    <input type="text" class="form-control" id="inputDateVenci" disabled="">
                </div>

                

                <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="">No. Lote</label>
                    </div>
                    <input type="text" class="form-control" id="inputNoLote" disabled="">
                </div>

                <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="">Precio Unitario</label>
                    </div>
                    <input type="text" class="form-control" id="inputPrecUnit" disabled="">
                </div>


                <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputCantActual">Cantidad Actual</label>
                    </div>
                    <input type="text" class="form-control" id="inputCantActual" disabled="">
                </div>

                    </div>
                </div>

            </div>

            <div class="modal-footer">
                <button class="btn btn-success btn-sm"  id="btnGuardarRequi" onclick="añadirTabla()"> Agegar
                    <i class="fas fa-plus-circle"></i>
                </button>

                <button type="button" id= "buscarDatos"class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-xl">Buscar</button>

            </div>

                    <table align="center" border="1" style="width:auto; height:20px;" class="table table-condensed table-bordered table-hover" bgcolor="#D3D3D3" id="tblFarmRequi">
                        <thead class="stylish-color-dark text-white">
                            <tr align="center" class="active">
                            <td width="100">Código</td>
                            <td width="380">Descripcion del Producto</td>
                            <td width="280">Cantidad Solicitada</td>
                            <td width="280">Cantidad Despachada</td>
                            <th width="280" ="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="tbodyRequi">                
                        </tbody>
                        <tfoot>
                        </tfoot>
            </table>

            <div class="row">
                <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputEntrega">Nombre Entrega</label>
                    </div>
                    <input type="text" class="form-control" id="inputEntrega" ="">
                </div>
                <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputCargoEntrega">Cargo Entrega</label>
                    </div>
                    <input type="text" class="form-control" id="inputCargoEntrega" ="">
                </div>

                <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputRecibe">Nombre Recibe</label>
                    </div>
                    <input type="text" class="form-control" id="inputRecibe">
                </div>
                <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputCargoRecibe">Cargo Recibe</label>
                    </div>
                    <input type="text" class="form-control" id="inputCargoRecibe">
                </div>

                <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputJefe">Nombre Jefe</label>
                    </div>
                    <input type="text" class="form-control" id="inputJefe" disabled="">
                </div>

                <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputCargoJefe">Cargo Jefe</label>
                    </div>
                    <input type="text" class="form-control" id="inputCargoJefe" disabled="">
                </div>


                <div class="input-group input-group-sm mb-sm-3 col-sm-12">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputObservaciones">Observaciones</label>
                    </div>
                    <input type="text" class="form-control" id="inputObservaciones">
                </div>

            </div>
            <div class="row">
                
                <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputLugar">Lugar</label>
                    </div>
                    <input type="text" class="form-control" id="inputLugar" disabled="">
                </div>

                <div class="input-group input-group-sm mb-sm-3 col-sm-6">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputFecha">Fecha</label>
                    </div>
                    <input type="date" class="form-control" id="inputFecha">
                </div>

            </div>

                <button class="btn btn-success btn-sm"  id="btnGuardarEncabezado" onclick="guardarRequi()"> Guardar
                        <i class="fas fa-plus-circle"></i>
                    </button>

                    <button class="btn btn-success btn-sm" onclick="ejecutarRep()"> Impresion 
                        <i class="fas fa-plus-circle"></i>
                    </button>
                    
                    
                    <!--<button class="btn btn-primary" onclick="ejecutarRep()"> ejecutar-->      
        </div>
    </div>

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




<scrip src = "http://code.jquery.com/jquery-1.12.0.min"></scrip>
<scrip src="js/boostrap.min.js"></scrip>
<scrip src="js/jquery.datatimepicker.full.min.js"></scrip>
<script type="text/javascript" src="./js/js_FarmaciaRequsicion.js"></script>
<script type="text/javascript" src="./js/js_TableToExcel.js"></script>
<scrip src="js/app.js"></scrip>

