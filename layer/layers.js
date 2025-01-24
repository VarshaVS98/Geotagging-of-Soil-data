var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ERNAKULAM_1 = new ol.format.GeoJSON();
var features_ERNAKULAM_1 = format_ERNAKULAM_1.readFeatures(json_ERNAKULAM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ERNAKULAM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ERNAKULAM_1.addFeatures(features_ERNAKULAM_1);
var lyr_ERNAKULAM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ERNAKULAM_1, 
                style: style_ERNAKULAM_1,
                popuplayertitle: "ERNAKULAM",
                interactive: true,
                title: '<img src="styles/legend/ERNAKULAM_1.png" /> ERNAKULAM'
            });
var format_KOLLAM_2 = new ol.format.GeoJSON();
var features_KOLLAM_2 = format_KOLLAM_2.readFeatures(json_KOLLAM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KOLLAM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KOLLAM_2.addFeatures(features_KOLLAM_2);
var lyr_KOLLAM_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KOLLAM_2, 
                style: style_KOLLAM_2,
                popuplayertitle: "KOLLAM",
                interactive: true,
                title: '<img src="styles/legend/KOLLAM_2.png" /> KOLLAM'
            });
var format_KOTTAYAM_3 = new ol.format.GeoJSON();
var features_KOTTAYAM_3 = format_KOTTAYAM_3.readFeatures(json_KOTTAYAM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KOTTAYAM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KOTTAYAM_3.addFeatures(features_KOTTAYAM_3);
var lyr_KOTTAYAM_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KOTTAYAM_3, 
                style: style_KOTTAYAM_3,
                popuplayertitle: "KOTTAYAM",
                interactive: true,
                title: '<img src="styles/legend/KOTTAYAM_3.png" /> KOTTAYAM'
            });
var format_PALAKKAD_4 = new ol.format.GeoJSON();
var features_PALAKKAD_4 = format_PALAKKAD_4.readFeatures(json_PALAKKAD_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PALAKKAD_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PALAKKAD_4.addFeatures(features_PALAKKAD_4);
var lyr_PALAKKAD_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PALAKKAD_4, 
                style: style_PALAKKAD_4,
                popuplayertitle: "PALAKKAD",
                interactive: true,
                title: '<img src="styles/legend/PALAKKAD_4.png" /> PALAKKAD'
            });
var format_ALAPPUZHA_5 = new ol.format.GeoJSON();
var features_ALAPPUZHA_5 = format_ALAPPUZHA_5.readFeatures(json_ALAPPUZHA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ALAPPUZHA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALAPPUZHA_5.addFeatures(features_ALAPPUZHA_5);
var lyr_ALAPPUZHA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALAPPUZHA_5, 
                style: style_ALAPPUZHA_5,
                popuplayertitle: "ALAPPUZHA",
                interactive: true,
                title: '<img src="styles/legend/ALAPPUZHA_5.png" /> ALAPPUZHA'
            });
var format_THIRUVANANTHAPURAM_6 = new ol.format.GeoJSON();
var features_THIRUVANANTHAPURAM_6 = format_THIRUVANANTHAPURAM_6.readFeatures(json_THIRUVANANTHAPURAM_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_THIRUVANANTHAPURAM_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_THIRUVANANTHAPURAM_6.addFeatures(features_THIRUVANANTHAPURAM_6);
var lyr_THIRUVANANTHAPURAM_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_THIRUVANANTHAPURAM_6, 
                style: style_THIRUVANANTHAPURAM_6,
                popuplayertitle: "THIRUVANANTHAPURAM",
                interactive: true,
                title: '<img src="styles/legend/THIRUVANANTHAPURAM_6.png" /> THIRUVANANTHAPURAM'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ERNAKULAM_1.setVisible(true);lyr_KOLLAM_2.setVisible(true);lyr_KOTTAYAM_3.setVisible(true);lyr_PALAKKAD_4.setVisible(true);lyr_ALAPPUZHA_5.setVisible(true);lyr_THIRUVANANTHAPURAM_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ERNAKULAM_1,lyr_KOLLAM_2,lyr_KOTTAYAM_3,lyr_PALAKKAD_4,lyr_ALAPPUZHA_5,lyr_THIRUVANANTHAPURAM_6];
lyr_ERNAKULAM_1.set('fieldAliases', {'Name': 'Name', 'Sample ID': 'Sample ID', 'District': 'District', 'Bore Date': 'Bore Date', 'SOTR': 'SOTR', 'Borelog': 'Borelog', });
lyr_KOLLAM_2.set('fieldAliases', {'Name': 'Name', 'Sample ID': 'Sample ID', 'District': 'District', 'Bore Date': 'Bore Date', 'SOTR': 'SOTR', 'Borelog': 'Borelog', });
lyr_KOTTAYAM_3.set('fieldAliases', {'Name': 'Name', 'Sample ID': 'Sample ID', 'District': 'District', 'Bore Date': 'Bore Date', 'SOTR': 'SOTR', 'Borelog': 'Borelog', });
lyr_PALAKKAD_4.set('fieldAliases', {'Name': 'Name', 'Sample ID': 'Sample ID', 'District': 'District', 'Bore Date': 'Bore Date', 'SOTR': 'SOTR', 'Borelog': 'Borelog', });
lyr_ALAPPUZHA_5.set('fieldAliases', {'Name': 'Name', 'Sample ID': 'Sample ID', 'District': 'District', 'Bore Date': 'Bore Date', 'SOTR': 'SOTR', 'Borelog': 'Borelog', });
lyr_THIRUVANANTHAPURAM_6.set('fieldAliases', {'Name': 'Name', 'Sample ID': 'Sample ID', 'District': 'District', 'Bore Date': 'Bore Date', 'SOTR': 'SOTR', 'Borelog': 'Borelog', });
lyr_ERNAKULAM_1.set('fieldImages', {'Name': 'TextEdit', 'Sample ID': 'TextEdit', 'District': 'TextEdit', 'Bore Date': 'TextEdit', 'SOTR': 'TextEdit', 'Borelog': 'TextEdit', });
lyr_KOLLAM_2.set('fieldImages', {'Name': 'TextEdit', 'Sample ID': 'TextEdit', 'District': 'TextEdit', 'Bore Date': 'TextEdit', 'SOTR': 'TextEdit', 'Borelog': 'TextEdit', });
lyr_KOTTAYAM_3.set('fieldImages', {'Name': 'TextEdit', 'Sample ID': 'TextEdit', 'District': 'TextEdit', 'Bore Date': 'TextEdit', 'SOTR': 'TextEdit', 'Borelog': 'TextEdit', });
lyr_PALAKKAD_4.set('fieldImages', {'Name': 'TextEdit', 'Sample ID': 'TextEdit', 'District': 'TextEdit', 'Bore Date': 'TextEdit', 'SOTR': 'TextEdit', 'Borelog': 'TextEdit', });
lyr_ALAPPUZHA_5.set('fieldImages', {'Name': '', 'Sample ID': '', 'District': '', 'Bore Date': '', 'SOTR': '', 'Borelog': '', });
lyr_THIRUVANANTHAPURAM_6.set('fieldImages', {'Name': '', 'Sample ID': '', 'District': '', 'Bore Date': '', 'SOTR': '', 'Borelog': '', });
lyr_ERNAKULAM_1.set('fieldLabels', {'Name': 'inline label - visible with data', 'Sample ID': 'inline label - visible with data', 'District': 'inline label - visible with data', 'Bore Date': 'inline label - visible with data', 'SOTR': 'inline label - visible with data', 'Borelog': 'inline label - visible with data', });
lyr_KOLLAM_2.set('fieldLabels', {'Name': 'inline label - visible with data', 'Sample ID': 'inline label - visible with data', 'District': 'inline label - visible with data', 'Bore Date': 'inline label - visible with data', 'SOTR': 'inline label - visible with data', 'Borelog': 'inline label - visible with data', });
lyr_KOTTAYAM_3.set('fieldLabels', {'Name': 'inline label - visible with data', 'Sample ID': 'inline label - visible with data', 'District': 'inline label - visible with data', 'Bore Date': 'inline label - visible with data', 'SOTR': 'inline label - visible with data', 'Borelog': 'inline label - visible with data', });
lyr_PALAKKAD_4.set('fieldLabels', {'Name': 'inline label - visible with data', 'Sample ID': 'inline label - visible with data', 'District': 'inline label - visible with data', 'Bore Date': 'inline label - visible with data', 'SOTR': 'inline label - visible with data', 'Borelog': 'inline label - visible with data', });
lyr_ALAPPUZHA_5.set('fieldLabels', {'Name': 'inline label - visible with data', 'Sample ID': 'inline label - visible with data', 'District': 'inline label - visible with data', 'Bore Date': 'inline label - visible with data', 'SOTR': 'inline label - visible with data', 'Borelog': 'inline label - visible with data', });
lyr_THIRUVANANTHAPURAM_6.set('fieldLabels', {'Name': 'inline label - visible with data', 'Sample ID': 'inline label - visible with data', 'District': 'inline label - visible with data', 'Bore Date': 'inline label - visible with data', 'SOTR': 'inline label - visible with data', 'Borelog': 'inline label - visible with data', });
lyr_THIRUVANANTHAPURAM_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});