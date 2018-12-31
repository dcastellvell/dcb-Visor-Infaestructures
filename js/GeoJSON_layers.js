Tronc_AP7_VilaS = new L.GeoJSON.AJAX('datos/Tronc_AP7_Vila-Seca.geojson', {
    // maxZoom: 19,
    // minZoom: 5,
    fillColor: "#FFFF00",
    color: "#FF0000",
    weight: 1.5,
    opacity: 1,
    fillOpacity: 0.6,

    onEachFeature: function (feature, layer) {
        popupContent = "Municipio: " + feature.properties.Muni + "<br><b>"+ "Proyecto: " + feature.properties.Proyecto + "<br>" + "Expediente: " + feature.properties.Exped_exp + "<br> " + "Titular: " + feature.properties.Titular + "</b><br>" + "Codigo finca: " + feature.properties.Codi_finca + "<br>" + "Poligono Catastral: " + feature.properties.Pol + "<br>" + "Parcela Catastral: " + feature.properties.Parce + "<br>" + "Superficie expropiación finca: " + feature.properties.Sup_exp +" "+ "m2" + "<br> " + "JustiPrecio: " + feature.properties.Justiprecio + " "+"€" + "<br> " + "Finca registral de origen: " + feature.properties.Finca_reg_orig + "<br> " + "Registro de origen: " + feature.properties.Reg_orig + "<br> " + "Registro de destino: " + feature.properties.Reg_act + "<br><b> " + "Finca registral actual: " + feature.properties.Finca_reg_act + "</b><br> " + "Superficie registral: " + feature.properties.Sup_reg + "<br> " + "Consultar expediente: "+"<a href=" + feature.properties.Consulta_exped + ">" + feature.properties.Consulta_exped + "</a>";
        layer.bindPopup(popupContent);
    },
});

Tronc_AP7_Vilablareix = new L.GeoJSON.AJAX('datos/Tronc_AP7_Vilablareix.geojson', {
    // maxZoom: 19,
    // minZoom: 5,
    fillColor: "#FFFF00",
    color: "#FF0000",
    weight: 1.5,
    opacity: 1,
    fillOpacity: 0.6,

    onEachFeature: function (feature, layer) {
        popupContent = "Municipio: " + feature.properties.Muni + "<br><b>"+ "Proyecto: " + feature.properties.Proyecto + "<br>" + "Expediente: " + feature.properties.Exped_exp + "<br> " + "Titular: " + feature.properties.Titular + "</b><br>" + "Codigo finca: " + feature.properties.Codi_finca + "<br>" + "Poligono Catastral: " + feature.properties.Pol + "<br>" + "Parcela Catastral: " + feature.properties.Parce + "<br>" + "Superficie expropiación finca: " + feature.properties.Sup_exp +" "+ "m2" + "<br> " + "JustiPrecio: " + feature.properties.Justiprecio + " "+"€" + "<br> " + "Finca registral de origen: " + feature.properties.Finca_reg_orig + "<br> " + "Registro de origen: " + feature.properties.Reg_orig + "<br> " + "Registro de destino: " + feature.properties.Reg_act + "<br><b> " + "Finca registral actual: " + feature.properties.Finca_reg_act + "</b><br> " + "Superficie registral: " + feature.properties.Sup_reg + "<br> " + "Consultar expediente: "+"<a href=" + feature.properties.Consulta_exped + ">" + feature.properties.Consulta_exped + "</a>";
        layer.bindPopup(popupContent);
    },
});

Remod_EnllaçVS = new L.GeoJSON.AJAX('datos/98-T-9913.geojson', {
    // maxZoom: 19,
    // minZoom: 5,
    fillColor: "#FFFF00",
    color: "#FF0000",
    weight: 1.5,
    opacity: 1,
    fillOpacity: 0.6,

    onEachFeature: function (feature, layer) {
        popupContent = "Municipio: " + feature.properties.Muni + "<br><b>"+ "Proyecto: " + feature.properties.Proyecto + "<br>" + "Expediente: " + feature.properties.Exped_exp + "<br> " + "Titular: " + feature.properties.Titular + "</b><br>" + "Codigo finca: " + feature.properties.Codi_finca + "<br>" + "Poligono Catastral: " + feature.properties.Pol + "<br>" + "Parcela Catastral: " + feature.properties.Parce + "<br>" + "Superficie expropiación finca: " + feature.properties.Sup_exp +" "+ "m2" + "<br> " + "JustiPrecio: " + feature.properties.Justiprecio + " "+"€" + "<br> " + "Finca registral de origen: " + feature.properties.Finca_reg_orig + "<br> " + "Registro de origen: " + feature.properties.Reg_orig + "<br> " + "Registro de destino: " + feature.properties.Reg_act + "<br><b> " + "Finca registral actual: " + feature.properties.Finca_reg_act + "</b><br> " + "Superficie registral: " + feature.properties.Sup_reg + "<br> " + "Consultar expediente: "+"<a href=" + feature.properties.Consulta_exped + ">" + feature.properties.Consulta_exped + "</a>";
        layer.bindPopup(popupContent);
    },
});

GI9903 = new L.GeoJSON.AJAX('datos/98-GI-9903.geojson', {
    // maxZoom: 19,
    // minZoom: 5,
    fillColor: "#FFFF00",
    color: "#FF0000",
    weight: 1.5,
    opacity: 1,
    fillOpacity: 0.6,

    onEachFeature: function (feature, layer) {
        popupContent = "Municipio: " + feature.properties.Muni + "<br><b>"+ "Proyecto: " + feature.properties.Proyecto + "<br>" + "Expediente: " + feature.properties.Exped_exp + "<br> " + "Titular: " + feature.properties.Titular + "</b><br>" + "Codigo finca: " + feature.properties.Codi_finca + "<br>" + "Poligono Catastral: " + feature.properties.Pol + "<br>" + "Parcela Catastral: " + feature.properties.Parce + "<br>" + "Superficie expropiación finca: " + feature.properties.Sup_exp +" "+ "m2" + "<br> " + "JustiPrecio: " + feature.properties.Justiprecio + " "+"€" + "<br> " + "Finca registral de origen: " + feature.properties.Finca_reg_orig + "<br> " + "Registro de origen: " + feature.properties.Reg_orig + "<br> " + "Registro de destino: " + feature.properties.Reg_act + "<br><b> " + "Finca registral actual: " + feature.properties.Finca_reg_act + "</b><br> " + "Superficie registral: " + feature.properties.Sup_reg + "<br> " + "Consultar expediente: "+"<a href=" + feature.properties.Consulta_exped + ">" + feature.properties.Consulta_exped + "</a>";
        layer.bindPopup(popupContent);
    },
});

Remod_EnllaçVF = new L.GeoJSON.AJAX('datos/EnllaçosVilaF.geojson', {
    // maxZoom: 19,
    // minZoom: 5,
    fillColor: "#FFFF00",
    color: "#FF0000",
    weight: 1.5,
    opacity: 1,
    fillOpacity: 0.6,

    onEachFeature: function (feature, layer) {
        popupContent = "Municipio: " + feature.properties.Muni + "<br><b>"+ "Proyecto: " + feature.properties.Proyecto + "<br>" + "Expediente: " + feature.properties.Exped_exp + "<br> " + "Titular: " + feature.properties.Titular + "</b><br>" + "Codigo finca: " + feature.properties.Codi_finca + "<br>" + "Poligono Catastral: " + feature.properties.Pol + "<br>" + "Parcela Catastral: " + feature.properties.Parce + "<br>" + "Superficie expropiación finca: " + feature.properties.Sup_exp +" "+ "m2" + "<br> " + "JustiPrecio: " + feature.properties.Justiprecio + " "+"€" + "<br> " + "Finca registral de origen: " + feature.properties.Finca_reg_orig + "<br> " + "Registro de origen: " + feature.properties.Reg_orig + "<br> " + "Registro de destino: " + feature.properties.Reg_act + "<br><b> " + "Finca registral actual: " + feature.properties.Finca_reg_act + "</b><br> " + "Superficie registral: " + feature.properties.Sup_reg + "<br> " + "Consultar expediente: "+"<a href=" + feature.properties.Consulta_exped + ">" + feature.properties.Consulta_exped + "</a>";
        layer.bindPopup(popupContent);
    },
});
Remod_EnllaçSSad = new L.GeoJSON.AJAX('datos/98-B-9003.geojson', {
    // maxZoom: 19,
    // minZoom: 5,
    fillColor: "#FFFF00",
    color: "#FF0000",
    weight: 1.5,
    opacity: 1,
    fillOpacity: 0.6,

    onEachFeature: function (feature, layer) {
        popupContent = "Municipio: " + feature.properties.Muni + "<br><b>"+ "Proyecto: " + feature.properties.Proyecto + "<br>" + "Expediente: " + feature.properties.Exped_exp + "<br> " + "Titular: " + feature.properties.Titular + "</b><br>" + "Codigo finca: " + feature.properties.Codi_finca + "<br>" + "Poligono Catastral: " + feature.properties.Pol + "<br>" + "Parcela Catastral: " + feature.properties.Parce + "<br>" + "Superficie expropiación finca: " + feature.properties.Sup_exp +" "+ "m2" + "<br> " + "JustiPrecio: " + feature.properties.Justiprecio + " "+"€" + "<br> " + "Finca registral de origen: " + feature.properties.Finca_reg_orig + "<br> " + "Registro de origen: " + feature.properties.Reg_orig + "<br> " + "Registro de destino: " + feature.properties.Reg_act + "<br><b> " + "Finca registral actual: " + feature.properties.Finca_reg_act + "</b><br> " + "Superficie registral: " + feature.properties.Sup_reg + "<br> " + "Consultar expediente: "+"<a href=" + feature.properties.Consulta_exped + ">" + feature.properties.Consulta_exped + "</a>";
        layer.bindPopup(popupContent);
    },
});
Remod_EnllaçGelida = new L.GeoJSON.AJAX('datos/98-B-9002.geojson', {
    // maxZoom: 19,
    // minZoom: 5,
    fillColor: "#FFFF00",
    color: "#FF0000",
    weight: 1.5,
    opacity: 1,
    fillOpacity: 0.6,

    onEachFeature: function (feature, layer) {
        popupContent = "Municipio: " + feature.properties.Muni + "<br><b>"+ "Proyecto: " + feature.properties.Proyecto + "<br>" + "Expediente: " + feature.properties.Exped_exp + "<br> " + "Titular: " + feature.properties.Titular + "</b><br>" + "Codigo finca: " + feature.properties.Codi_finca + "<br>" + "Poligono Catastral: " + feature.properties.Pol + "<br>" + "Parcela Catastral: " + feature.properties.Parce + "<br>" + "Superficie expropiación finca: " + feature.properties.Sup_exp +" "+ "m2" + "<br> " + "JustiPrecio: " + feature.properties.Justiprecio + " "+"€" + "<br> " + "Finca registral de origen: " + feature.properties.Finca_reg_orig + "<br> " + "Registro de origen: " + feature.properties.Reg_orig + "<br> " + "Registro de destino: " + feature.properties.Reg_act + "<br><b> " + "Finca registral actual: " + feature.properties.Finca_reg_act + "</b><br> " + "Superficie registral: " + feature.properties.Sup_reg + "<br> " + "Consultar expediente: "+"<a href=" + feature.properties.Consulta_exped + ">" + feature.properties.Consulta_exped + "</a>";
        layer.bindPopup(popupContent);
    },
});
Remod_EnllaçMartorell = new L.GeoJSON.AJAX('datos/98-B-9001.geojson', {
    // maxZoom: 19,
    // minZoom: 5,
    fillColor: "#FFFF00",
    color: "#FF0000",
    weight: 1.5,
    opacity: 1,
    fillOpacity: 0.6,

    onEachFeature: function (feature, layer) {
        popupContent = "Municipio: " + feature.properties.Muni + "<br><b>"+ "Proyecto: " + feature.properties.Proyecto + "<br>" + "Expediente: " + feature.properties.Exped_exp + "<br> " + "Titular: " + feature.properties.Titular + "</b><br>" + "Codigo finca: " + feature.properties.Codi_finca + "<br>" + "Poligono Catastral: " + feature.properties.Pol + "<br>" + "Parcela Catastral: " + feature.properties.Parce + "<br>" + "Superficie expropiación finca: " + feature.properties.Sup_exp +" "+ "m2" + "<br> " + "JustiPrecio: " + feature.properties.Justiprecio + " "+"€" + "<br> " + "Finca registral de origen: " + feature.properties.Finca_reg_orig + "<br> " + "Registro de origen: " + feature.properties.Reg_orig + "<br> " + "Registro de destino: " + feature.properties.Reg_act + "<br><b> " + "Finca registral actual: " + feature.properties.Finca_reg_act + "</b><br> " + "Superficie registral: " + feature.properties.Sup_reg + "<br> " + "Consultar expediente: "+"<a href=" + feature.properties.Consulta_exped + ">" + feature.properties.Consulta_exped + "</a>";
        layer.bindPopup(popupContent);
    },
});