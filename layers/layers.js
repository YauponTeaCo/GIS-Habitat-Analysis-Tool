var wms_layers = [];

var lyr_Layers_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://basemap.nationalmap.gov/arcgis/services/USGSImageryTopo/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Layers",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Layers_0, 0]);
var format_CastleHaynePlotPoint_1 = new ol.format.GeoJSON();
var features_CastleHaynePlotPoint_1 = format_CastleHaynePlotPoint_1.readFeatures(json_CastleHaynePlotPoint_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CastleHaynePlotPoint_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CastleHaynePlotPoint_1.addFeatures(features_CastleHaynePlotPoint_1);
var lyr_CastleHaynePlotPoint_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CastleHaynePlotPoint_1, 
                style: style_CastleHaynePlotPoint_1,
                interactive: true,
                title: '<img src="styles/legend/CastleHaynePlotPoint_1.png" /> Castle Hayne Plot (Point)'
            });
var format_CastleHaynePlot_2 = new ol.format.GeoJSON();
var features_CastleHaynePlot_2 = format_CastleHaynePlot_2.readFeatures(json_CastleHaynePlot_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CastleHaynePlot_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CastleHaynePlot_2.addFeatures(features_CastleHaynePlot_2);
var lyr_CastleHaynePlot_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CastleHaynePlot_2, 
                style: style_CastleHaynePlot_2,
                interactive: true,
                title: '<img src="styles/legend/CastleHaynePlot_2.png" /> Castle Hayne Plot'
            });

lyr_Layers_0.setVisible(true);lyr_CastleHaynePlotPoint_1.setVisible(true);lyr_CastleHaynePlot_2.setVisible(true);
var layersList = [lyr_Layers_0,lyr_CastleHaynePlotPoint_1,lyr_CastleHaynePlot_2];
lyr_CastleHaynePlotPoint_1.set('fieldAliases', {'castle': 'castle', });
lyr_CastleHaynePlot_2.set('fieldAliases', {'id': 'id', 'AREA': 'AREA', 'LAND': 'LAND', 'WETLAND': 'WETLAND', 'LCLU': 'LCLU', 'CANOPY': 'CANOPY', 'Parcel': 'Parcel', });
lyr_CastleHaynePlotPoint_1.set('fieldImages', {'castle': 'TextEdit', });
lyr_CastleHaynePlot_2.set('fieldImages', {'id': '', 'AREA': '', 'LAND': '', 'WETLAND': '', 'LCLU': '', 'CANOPY': '', 'Parcel': '', });
lyr_CastleHaynePlotPoint_1.set('fieldLabels', {'castle': 'no label', });
lyr_CastleHaynePlot_2.set('fieldLabels', {'id': 'no label', 'AREA': 'no label', 'LAND': 'no label', 'WETLAND': 'no label', 'LCLU': 'no label', 'CANOPY': 'no label', 'Parcel': 'no label', });
lyr_CastleHaynePlot_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});