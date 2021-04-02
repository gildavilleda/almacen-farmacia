$('#tbInventarioMostrar').DataTable({
    detroy: true,
    "oSearch": {"bSmart": false,
        "bRegex": true,
        "sSerach": ""
    },
    dom: 'Blfrtip',
    buttons: ['excel', 'pdf'
    ],
    "ajax":{
        "method": "GET",
        "url": "./api/v1/controlDeInventario.php"
    },
    columnDefs: [
        {className: "dt-center", targets: [0, 1, 3, 4, 5, 6, 7, 8, 9, 10]}
    ],
    'columns': [
        { "data": "AlmacNumCodInsumo"},
        { "data": "AlmacStrNomInsumo"},
        { "data": "AlmacStrCaractInsu" },
        { "data": "AlmacStrPresentInsu"},
        { "data": "AlmacStrCantYUnidInsu" },
        { "data": "AlmacNumRenglon" },
        { "data": "AlmacNumIdKardex" },
        { "data": "AlmacStrLote" },
        { "data": "AlmacDateVenci" },
        { "data": "AlmacNumPreUnExist" },
        { "data": "AlmacNumCantidad" },
    ]
})