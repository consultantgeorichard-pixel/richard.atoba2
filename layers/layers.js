var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Territoires_1 = new ol.format.GeoJSON();
var features_Territoires_1 = format_Territoires_1.readFeatures(json_Territoires_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Territoires_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Territoires_1.addFeatures(features_Territoires_1);
var lyr_Territoires_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Territoires_1, 
                style: style_Territoires_1,
                popuplayertitle: 'Territoires',
                interactive: true,
    title: 'Territoires<br />\
    <img src="styles/legend/Territoires_1_0.png" /> Basankusu<br />\
    <img src="styles/legend/Territoires_1_1.png" /> Bikoro<br />\
    <img src="styles/legend/Territoires_1_2.png" /> Bolomba<br />\
    <img src="styles/legend/Territoires_1_3.png" /> Bomongo<br />\
    <img src="styles/legend/Territoires_1_4.png" /> Ingende<br />\
    <img src="styles/legend/Territoires_1_5.png" /> Lukolela<br />\
    <img src="styles/legend/Territoires_1_6.png" /> Makanza<br />\
    <img src="styles/legend/Territoires_1_7.png" /> Mbandaka<br />' });
var format_Secteurs_2 = new ol.format.GeoJSON();
var features_Secteurs_2 = format_Secteurs_2.readFeatures(json_Secteurs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_2.addFeatures(features_Secteurs_2);
var lyr_Secteurs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_2, 
                style: style_Secteurs_2,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_2_0.png" /> Agriculture<br />\
    <img src="styles/legend/Secteurs_2_1.png" /> (exploitation)<br />\
    <img src="styles/legend/Secteurs_2_2.png" /> (pêche)<br />' });

lyr_GoogleMaps_0.setVisible(true);lyr_Territoires_1.setVisible(true);lyr_Secteurs_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Territoires_1,lyr_Secteurs_2];
lyr_Territoires_1.set('fieldAliases', {'NOM': 'NOM', 'TYPE': 'TYPE', 'CODE_INS': 'CODE_INS', 'SCE_SEM': 'SCE_SEM', 'SCE_GEO': 'SCE_GEO', 'MODIF': 'MODIF', 'SURFACE': 'SURFACE', 'ORIGINE': 'ORIGINE', });
lyr_Secteurs_2.set('fieldAliases', {'NOM': 'NOM', 'SURFACE': 'SURFACE', 'Secteur': 'Secteur d\'activités', });
lyr_Territoires_1.set('fieldImages', {'NOM': 'TextEdit', 'TYPE': '', 'CODE_INS': 'Range', 'SCE_SEM': '', 'SCE_GEO': '', 'MODIF': '', 'SURFACE': 'TextEdit', 'ORIGINE': '', });
lyr_Secteurs_2.set('fieldImages', {'NOM': 'TextEdit', 'SURFACE': 'TextEdit', 'Secteur': 'ValueMap', });
lyr_Territoires_1.set('fieldLabels', {'NOM': 'inline label - always visible', 'TYPE': 'inline label - always visible', 'CODE_INS': 'hidden field', 'SCE_SEM': 'hidden field', 'SCE_GEO': 'hidden field', 'MODIF': 'hidden field', 'SURFACE': 'inline label - always visible', 'ORIGINE': 'hidden field', });
lyr_Secteurs_2.set('fieldLabels', {'NOM': 'inline label - always visible', 'SURFACE': 'inline label - always visible', 'Secteur': 'inline label - always visible', });
lyr_Secteurs_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});