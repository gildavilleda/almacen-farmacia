<div id="Inventario" class="card" style="margin-top: 50px">
    <div class="modal-header text-center text-white green-grad">
        <h3 class="modal-title w-100 font-weight-bold">Inventario</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="$('#Inventario').fadeOut();"></button>
        <span aria-hidden="true" class="text-white">&times;</span>
    </div>

    <!--<form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="Buscar" placeholder="Buscar" aria-label="Buscar" id="buscarcodigoInsumo">
        <button class="btn btn-success my-2 my-sm-0" type="button" onclick="controlInventario();">Buscar prueba</button>
    </form>-->

    <div class="row">
        <div class="col-sm-12">
            <table id="tbInventarioMostrar" class="table table-sm table-hover w3-border" >
                <thead class="primary-color text-white text-center" >
                    <tr>
                        <th class="" >Código de Insumo</th>
                        <th class="" >Nombre</th>
                        <th class="">Caracteristicas</th>
                        <th class="" >Presentación</th>
                        <th class="">Unidad</th>
                        <th class="">Renglon</th>
                        <th class="">Kardex</th>
                        <th class="">No.de lote</th>
                        <th class="">Fecha de Vencimiento</th>
                        <th class="">Precio</th>
                        <th class="">Cantidad Existente</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</div>

<script src="./js/js_AlmInventario.js"></script>