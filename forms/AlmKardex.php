<div id="vcontent" class="container-fluid" style="margin-top: 50px">
    <div id="InsumoEnt" class="card">
        <div class="modal-header text-center white-text green-grad">
            <h3 class="modal-title w-100 font-weight-bold">KARDEX</h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                    onclick="$('#InsumoEnt').fadeOut();">
                <span aria-hidden="true" class="text-white">&times;</span>
            </button>
        </div>


        <div class="card-body">
            <div class="row">
                <div class="input-group input-group-sm mb-sm-3 col-sm-2">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputCodProducto">Codigo de Producto</label>
                    </div>
                    <input type="text" class="form-control" id="inputCodProducto" onchange="buscarInsumoGeneral()">
                </div>

                <div class="input-group input-group-sm mb-sm-3 col-sm-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="SelCodUnico">Cantidad Y Unidad</label>
                    </div>
                    <select class="form-control" id="SelCodUnico" onchange="buscarInsumoEspecifico(this.value)">

                    </select>
                </div>

                <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputNomProducto">Nombre del Producto</label>
                    </div>
                    <input type="text" class="form-control" id="inputNomProducto" disabled>
                </div>

                <div class="input-group input-group-sm mb-sm-3 col-sm-2">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputPresen">Presentacion</label>
                    </div>
                    <input type="text" class="form-control" id="inputPresen" disabled>
                </div>

                <div class="input-group input-group-sm mb-sm-3 col-sm-2">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputRenPresupuestario">Reglón Presupuestario</label>
                    </div>
                    <input type="text" class="form-control" id="inputRenPresupuestario" disabled>
                </div>

                <!--<div class="input-group input-group-sm mb-sm-3 col-sm-2">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputMinima">Mínimo</label>
                    </div>
                    <input type="text" class="form-control" id="inputMinima" disabled>
                </div>

                <div class="input-group input-group-sm mb-sm-3 col-sm-2">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputMaximo">Máximo</label>
                    </div>
                    <input type="text" class="form-control" id="inputMaximo" disabled>
                </div>-->

                <div class="input-group input-group-sm mb-sm-3 col-sm-2">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputKardexFarm">No. Kardex</label>
                    </div>
                    <input type="text" class="form-control" id="inputKardexFarm" disabled>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-8">

                </div>
                <div class="col-sm-4 text-right">
                    <button class="btn btn-success btn-sm"  id="btnGuardarEntrada" onclick="EntradaSalidaTb();">Mostar
                        <i class="fas fa-plus-circle"></i>
                    </button>
                </div>
            </div>

            <table class="table table-responsive" id="tblKardex">
                <thead class="table-striped stylish-color white-text">
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th colspan="3" style="text-align: center">Entrada</th>
                    <th colspan="3" style="text-align: center">Reajuste</th>
                    <th colspan="3" style="text-align: center">Salida</th>
                    <th colspan="3" style="text-align: center">Existencias</th>
                    <th colspan="2" style="text-align: center">Infor. Producto</th>
                    <th colspan="2" style="text-align: center"></th>
                </tr>
                <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col">Documento de Respaldo</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Unidad de Medida</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio Unitario Q</th>
                    <th scope="col">Valor Q</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio Unitario Q</th>
                    <th scope="col">Valor Q</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio Unitario Q</th>
                    <th scope="col">Valor Q</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio Unitario Q</th>
                    <th scope="col">Valor Q</th>
                    <th scope="col">Lote</th>
                    <th scope="col">Vencimiento</th>
                    <th scope="col" class="text-center">Cierre kardex</th>
                </tr>
                </thead>
                <tbody id="tbodyKardex"></tbody>

            </table>
        </div>
    </div>
</div>

<!-- ModalSeg -->
<div id="contenidoFila" class="modal" style="margin-top: 100px; overflow: auto" >
    <div id="cardCerrarKardex" class="card">
        <div class="modal-header text-center white-text green-grad">
            <h3 class="modal-title w-100 font-weight-bold">Cerrar Kárdex</h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                    onclick="$('#contenidoFila').fadeOut();">
                <span aria-hidden="true" class="text-white">&times;</span>
            </button>
        </div>
        <div class="card-body">
            <div class="row">
                <input type="text" class="form-control" id="inputDetKard" name="inputDetKard" hidden>
                <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Kardex a cerrar</span>
                    </div>
                    <input type="text" class="form-control" id="inputKarCer" name="inputKarCer">
                </div>
                <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Kardex nuevo</span>
                    </div>
                    <input type="text" class="form-control" id="inputKardNuev" name="inputKardNuev">
                </div>
                <div class="input-group input-group-sm mb-sm-3 col-sm-4">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="TipoKardex">Tipo Kardex</label>
                    </div>
                    <select class="form-control" id="TipoKardex">
                        <option>Seleccione Tipo Kardex</option>
                        <option value="MMQ">ALLMACÉN DE MATERIAL MÉDICO QUIRÚRGICO Y PRODUCTOS A FINES </option>
                        <option value="MA">ALMACÉN DE MEDICAMENTOS Y PRODUCTOS A FINES</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-auto">
                    <table class="table table-responsive" id="tblCerrarKardex">
                        <thead class="table-striped stylish-color white-text">
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th colspan="3" style="text-align: center">Entrada</th>
                            <th colspan="3" style="text-align: center">Reajuste</th>
                            <th colspan="3" style="text-align: center">Salida</th>
                            <th colspan="3" style="text-align: center">Existencias</th>
                            <th colspan="2" style="text-align: center">Infor. Producto</th>
                        </tr>
                        <tr>
                            <th scope="col">Fecha</th>
                            <th scope="col">Documento de Respaldo</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Unidad de Medida</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio Unitario Q</th>
                            <th scope="col">Valor Q</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio Unitario Q</th>
                            <th scope="col">Valor Q</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio Unitario Q</th>
                            <th scope="col">Valor Q</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio Unitario Q</th>
                            <th scope="col">Valor Q</th>
                            <th scope="col">Lote</th>
                            <th scope="col">Vencimiento</th>
                        </tr>
                        </thead>
                        <tbody id="tbodyCerrarKardex"></tbody>

                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Fin ModalSeg-->


<script src="./js/js_AlmKardex.js"></script>
