ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25830").setExtent([194467.197618, 4457718.939546, 210175.903122, 4466640.328984]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Caceres_1 = new ol.format.GeoJSON();
var features_Caceres_1 = format_Caceres_1.readFeatures(json_Caceres_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Caceres_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caceres_1.addFeatures(features_Caceres_1);
var lyr_Caceres_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Caceres_1, 
                style: style_Caceres_1,
                interactive: true,
                'opacity': 0.85,
    title: 'Equipos<br />\
    <img src="styles/legend/Caceres_1_0.png" /> Teleférico<br />\
    <img src="styles/legend/Caceres_1_1.png" /> Skidder<br />\
    <img src="styles/legend/Caceres_1_2.png" /> Autocargador<br />\
    <img src="styles/legend/Caceres_1_3.png" /> Tractor Agrícola<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Caceres_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Caceres_1];
lyr_Caceres_1.set('fieldAliases', {'Estrato': 'Estrato', 'Pies_ha': 'Pies/ha', 't_ha': 't(atro)/ha', 'Equipo': 'Equipo', 'Especie': 'Especie', });
lyr_Caceres_1.set('fieldImages', {'Estrato': 'TextEdit', 'Pies_ha': 'TextEdit', 't_ha': 'TextEdit', 'Equipo': 'TextEdit', 'Especie': 'TextEdit', });
lyr_Caceres_1.set('fieldLabels', {'Estrato': 'inline label', 'Pies_ha': 'inline label', 't_ha': 'inline label', 'Equipo': 'inline label', 'Especie': 'inline label', });
lyr_Caceres_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
