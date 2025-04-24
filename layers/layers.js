var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Admin_Kecamatan_TNG_1 = new ol.format.GeoJSON();
var features_Admin_Kecamatan_TNG_1 = format_Admin_Kecamatan_TNG_1.readFeatures(json_Admin_Kecamatan_TNG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Admin_Kecamatan_TNG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Admin_Kecamatan_TNG_1.addFeatures(features_Admin_Kecamatan_TNG_1);
var lyr_Admin_Kecamatan_TNG_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Admin_Kecamatan_TNG_1, 
                style: style_Admin_Kecamatan_TNG_1,
                popuplayertitle: 'Admin_Kecamatan_TNG',
                interactive: true,
                title: '<img src="styles/legend/Admin_Kecamatan_TNG_1.png" /> Admin_Kecamatan_TNG'
            });
var format_Admin_Kelurahan_TNG_2 = new ol.format.GeoJSON();
var features_Admin_Kelurahan_TNG_2 = format_Admin_Kelurahan_TNG_2.readFeatures(json_Admin_Kelurahan_TNG_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Admin_Kelurahan_TNG_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Admin_Kelurahan_TNG_2.addFeatures(features_Admin_Kelurahan_TNG_2);
var lyr_Admin_Kelurahan_TNG_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Admin_Kelurahan_TNG_2, 
                style: style_Admin_Kelurahan_TNG_2,
                popuplayertitle: 'Admin_Kelurahan_TNG',
                interactive: true,
    title: 'Admin_Kelurahan_TNG<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_0.png" /> Batuceper<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_1.png" /> Benda<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_2.png" /> Cibodas<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_3.png" /> Ciledug<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_4.png" /> Cipondoh<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_5.png" /> Jatiuwung<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_6.png" /> Karang Tengah<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_7.png" /> Karawaci<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_8.png" /> Larangan<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_9.png" /> Periuk<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_10.png" /> Pinang<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_11.png" /> Tangerang<br />\
    <img src="styles/legend/Admin_Kelurahan_TNG_2_12.png" /> <br />' });
var format_Jalan_TNG_3 = new ol.format.GeoJSON();
var features_Jalan_TNG_3 = format_Jalan_TNG_3.readFeatures(json_Jalan_TNG_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_TNG_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_TNG_3.addFeatures(features_Jalan_TNG_3);
var lyr_Jalan_TNG_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_TNG_3, 
                style: style_Jalan_TNG_3,
                popuplayertitle: 'Jalan_TNG',
                interactive: true,
                title: '<img src="styles/legend/Jalan_TNG_3.png" /> Jalan_TNG'
            });
var format_Puskesmas_TNG_4 = new ol.format.GeoJSON();
var features_Puskesmas_TNG_4 = format_Puskesmas_TNG_4.readFeatures(json_Puskesmas_TNG_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puskesmas_TNG_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puskesmas_TNG_4.addFeatures(features_Puskesmas_TNG_4);
var lyr_Puskesmas_TNG_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puskesmas_TNG_4, 
                style: style_Puskesmas_TNG_4,
                popuplayertitle: 'Puskesmas_TNG',
                interactive: true,
                title: '<img src="styles/legend/Puskesmas_TNG_4.png" /> Puskesmas_TNG'
            });
var format_Rumah_Sakit_TNG_5 = new ol.format.GeoJSON();
var features_Rumah_Sakit_TNG_5 = format_Rumah_Sakit_TNG_5.readFeatures(json_Rumah_Sakit_TNG_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_Sakit_TNG_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_Sakit_TNG_5.addFeatures(features_Rumah_Sakit_TNG_5);
var lyr_Rumah_Sakit_TNG_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_Sakit_TNG_5, 
                style: style_Rumah_Sakit_TNG_5,
                popuplayertitle: 'Rumah_Sakit_TNG',
                interactive: true,
                title: '<img src="styles/legend/Rumah_Sakit_TNG_5.png" /> Rumah_Sakit_TNG'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_Admin_Kecamatan_TNG_1.setVisible(true);lyr_Admin_Kelurahan_TNG_2.setVisible(true);lyr_Jalan_TNG_3.setVisible(true);lyr_Puskesmas_TNG_4.setVisible(true);lyr_Rumah_Sakit_TNG_5.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_Admin_Kecamatan_TNG_1,lyr_Admin_Kelurahan_TNG_2,lyr_Jalan_TNG_3,lyr_Puskesmas_TNG_4,lyr_Rumah_Sakit_TNG_5];
lyr_Admin_Kecamatan_TNG_1.set('fieldAliases', {'WADMKC': 'WADMKC', });
lyr_Admin_Kelurahan_TNG_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Jalan_TNG_3.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_Puskesmas_TNG_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'JPLPKM': 'JPLPKM', 'KMPPKM': 'KMPPKM', 'PKMKAT': 'PKMKAT', 'PKMKODE': 'PKMKODE', 'PKMLMT': 'PKMLMT', 'KWKPKM': 'KWKPKM', });
lyr_Rumah_Sakit_TNG_5.set('fieldAliases', {'namobj': 'namobj', 'rsalamat': 'rsalamat', 'jplyrs': 'jplyrs', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', });
lyr_Admin_Kecamatan_TNG_1.set('fieldImages', {'WADMKC': 'TextEdit', });
lyr_Admin_Kelurahan_TNG_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Jalan_TNG_3.set('fieldImages', {'REMARK': '', });
lyr_Puskesmas_TNG_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'METADATA': 'TextEdit', 'JPLPKM': 'TextEdit', 'KMPPKM': 'TextEdit', 'PKMKAT': 'TextEdit', 'PKMKODE': 'TextEdit', 'PKMLMT': 'TextEdit', 'KWKPKM': 'TextEdit', });
lyr_Rumah_Sakit_TNG_5.set('fieldImages', {'namobj': 'TextEdit', 'rsalamat': 'TextEdit', 'jplyrs': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'TextEdit', });
lyr_Admin_Kecamatan_TNG_1.set('fieldLabels', {'WADMKC': 'inline label - visible with data', });
lyr_Admin_Kelurahan_TNG_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Jalan_TNG_3.set('fieldLabels', {'REMARK': 'inline label - always visible', });
lyr_Puskesmas_TNG_4.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'METADATA': 'no label', 'JPLPKM': 'no label', 'KMPPKM': 'no label', 'PKMKAT': 'no label', 'PKMKODE': 'no label', 'PKMLMT': 'no label', 'KWKPKM': 'no label', });
lyr_Rumah_Sakit_TNG_5.set('fieldLabels', {'namobj': 'inline label - visible with data', 'rsalamat': 'no label', 'jplyrs': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', });
lyr_Rumah_Sakit_TNG_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});