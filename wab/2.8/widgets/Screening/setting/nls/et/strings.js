///////////////////////////////////////////////////////////////////////////
// Copyright © 2016 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define({
  "units": {
    "feetUnit": "Jalad / ruutjalad",
    "milesUnit": "Miilid / aakrid",
    "metersUnit": "Meetrid / ruutmeetrid",
    "kilometersUnit": "Kilomeetrid / ruutkilomeetrid",
    "hectaresUnit": "Kilomeetrid / hektarid"
  },
  "analysisTab": {
    "analysisTabLabel": "Analüüs",
    "selectAnalysisLayerLabel": "Vali analüüsi kihid",
    "addLayerLabel": "Lisa kihid",
    "noValidLayersForAnalysis": "Valitud veebikaardilt ei leitud kehtivaid kihte.",
    "noValidFieldsForAnalysis": "Valitud veebikaardilt ei leitud kehtivaid välju. Eemaldage valitud kiht.",
    "addLayersHintText": "Vihje: aruandes analüüsimiseks ja kuvamiseks valitud kihid ja väljad",
    "addLayerNameTitle": "Kihi nimi",
    "addFieldsLabel": "Lisa väli",
    "addFieldsPopupTitle": "Vali väljad",
    "addFieldsNameTitle": "Väljanimed",
    "aoiToolsLegendLabel": "AOI töövahendid",
    "aoiToolsDescriptionLabel": "Lubab töövahendid huvipakkuvate alade loomiseks ja nende märgiste määramiseks",
    "placenameLabel": "Koha nimi",
    "drawToolsLabel": "Joonistamise töövahendid",
    "uploadShapeFileLabel": "Shape-faili üleslaadimine",
    "coordinatesLabel": "Koordinaadid",
    "coordinatesDrpDwnHintText": "Vihje: valige ühik sisestatud läbimiste kuvamiseks",
    "coordinatesBearingDrpDwnHintText": "Vihje: valige kurss sisestatud läbimiste kuvamiseks",
    "allowShapefilesUploadLabel": "Luba Shape-failide üleslaadimine analüüsiks",
    "allowShapefilesUploadLabelHintText": "Vihje: kuvab vahekaardil Aruanne sätet „Lae Shape-fail üles analüüsiks”",
    "allowVisibleLayerAnalysisLabel": "Ära analüüsi ega raporteeri mittenähtavaid kihte",
    "allowVisibleLayerAnalysisHintText": "Vihje: välja lülitatud või mõõtkava nähtavuse seadete tõttu mittenähtavaid kihte ei analüüsita ega kaasata prinditud või allalaaditud tulemitesse.",
    "areaUnitsLabel": "Kuva analüüsi tulemid",
    "maxFeatureForAnalysisLabel": "Max objektid analüüsiks",
    "maxFeatureForAnalysisHintText": "Vihje: määrake maksimaalne objektide arv analüüsiks",
    "searchToleranceLabelText": "Otsingutolerants",
    "searchToleranceHint": "Vihje: otsingu tolerantsi kasutatakse ainult punktide ja joonte sisendi analüüsimiseks",
    "placenameButtonText": "Koha nimi",
    "drawToolsButtonText": "Joonista",
    "shapefileButtonText": "Shape fail",
    "coordinatesButtonText": "Koordinaadid",
    "invalidLayerErrorMsg": "Konfigureerige väljad:"
  },
  "downloadTab": {
    "downloadLegend": "Allalaadimissätted",
    "reportLegend": "Aruande sätted",
    "downloadTabLabel": "Allalaadimine",
    "syncEnableOptionLabel": "Objektikihid",
    "syncEnableOptionHint": "Vihje: kasutatakse huvialaga lõikuvate objektide info allalaadimiseks märgitud vormingutes.",
    "syncEnableOptionNote": "Märkus: suvandid Faili geoandmebaas ja Shape-fail nõuavad lubatud sünkroonimisega objektiteenuseid. Shape-faili vorming on toetatud ainult ArcGIS Online’i hostitud objektikihtidega.",
    "extractDataTaskOptionLabel": "Andmete väljavõtte toiminguga geotöötlusteenus",
    "extractDataTaskOptionHint": "Vihje: kasutage avaldatud andmete väljavõtte toiminguga geotöötlusteenust huvialaga lõikuvate objektide allalaadimiseks Faili geoandmebaasi või Shape-faili vormingus.",
    "cannotDownloadOptionLabel": "Keela allalaadimine",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Kihi nimi",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "Faili geoandmebaas",
      "ShapefileFormatLabel": "Shape fail",
      "allowDownloadLabel": "Luba allalaadimine"
    },
    "setButtonLabel": "Määra",
    "GPTaskLabel": "Määrake geotöötlusteenuse URL",
    "printGPServiceLabel": "Printimise teenuse URL",
    "setGPTaskTitle": "Määrake nõutud geotöötlusteenuse URL",
    "logoLabel": "Logo",
    "logoChooserHint": "Vihje: klõpsake pildi muutmiseks pildi ikooni",
    "footnoteLabel": "Joonealune märkus",
    "columnTitleColorPickerLabel": "Tulpade pealkirjade värv",
    "reportTitleLabel": "Aruande pealkiri",
    "errorMessages": {
      "invalidGPTaskURL": "Vale geotöötlusteenus. Valige geotöötlusteenus, mis sisaldab andmete väljavõtte toimingut.",
      "noExtractDataTaskURL": "Valige mõni geotöötlusteenus, mis sisaldab andmete väljavõtte toimingut.",
      "duplicateCustomOption": "Kirje ${duplicateValueSizeName} jaoks on olemas duplikaat.",
      "invalidLayoutWidth": "Sisestatud laius ei sobi: ${customLayoutOptionValue}.",
      "invalidLayoutHeight": "Sisestatud kõrgus ei sobi: ${customLayoutOptionValue}.",
      "invalidLayoutPageUnits": "Valitud on sobimatu leheühik: ${customLayoutOptionValue}.",
      "failtofetchbuddyTaskDimension": "Kaastoimingu dimensiooniteabe toomisel ilmnes tõrge. Proovige uuesti.",
      "failtofetchbuddyTaskName": "Kaastoimingu nime toomisel ilmnes tõrge. Proovige uuesti.",
      "failtofetchChoiceList": "Prinditeenusest valikuloendi toomisel ilmnes tõrge. Proovige uuesti.",
      "invalidWidth": "Laius ei sobi.",
      "invalidHeight": "Kõrgus ei sobi."
    },
    "addCustomLayoutTitle": "Lisa kohandatud paigutus",
    "customLayoutOptionHint": "Vihje: kohandatud paigutuse saate oma prinditeenusest prindisuvandite hulka lisada.",
    "reportDefaultOptionLabel": "Vaikimisi paigutus",
    "pageSizeUnits": {
      "millimeters": "Millimeetrid",
      "points": "Punktid"
    }
  },
  "generalTab": {
    "generalTabLabel": "Üldine",
    "tabLabelsLegend": "Paneeli märgised",
    "tabLabelsHint": "Vihje: määrake märgised",
    "AOITabLabel": "Huviala paneel",
    "ReportTabLabel": "Aruande paneel",
    "bufferSettingsLegend": "Puhvri seaded",
    "defaultBufferDistanceLabel": "Puhvri vaikeulatus",
    "defaultBufferUnitsLabel": "Puhvri ühikud",
    "generalBufferSymbologyHint": "Vihje: määrake sümboloogia puhvrite kuvamiseks määratletud huvialade ümber",
    "aoiGraphicsSymbologyLegend": "AOI graafika sümboloogia",
    "aoiGraphicsSymbologyHint": "Vihje: määrake sümboloogia punkt-, joon- ja polügoonhuvialade määratlemiseks",
    "pointSymbologyLabel": "Punkt",
    "previewLabel": "Eelvaade",
    "lineSymbologyLabel": "Joon",
    "polygonSymbologyLabel": "Polügoon",
    "aoiBufferSymbologyLabel": "Puhvri sümboloogia",
    "pointSymbolChooserPopupTitle": "Aadressi või asukoha sümbol",
    "polygonSymbolChooserPopupTitle": "Vali polügooni esiletõstmiseks sümbol",
    "lineSymbolChooserPopupTitle": "Vali joone esiletõstmiseks sümbol",
    "aoiSymbolChooserPopupTitle": "Määra puhvri sümbol",
    "aoiTabText": "AOI",
    "reportTabText": "Aruanne",
    "invalidSymbolValue": "Sobimatu sümboli väärtus."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Otsinguallika seaded",
    "searchSourceSettingTitle": "Otsinguallika seaded",
    "searchSourceSettingTitleHintText": "Lisa ja seadista geokodeerimise teenuseid või objektikihte otsinguallikatena. Need allikad määravad, mis info on leitav otsingukasti kaudu",
    "addSearchSourceLabel": "Lisa otsinguallikas",
    "featureLayerLabel": "Objektikiht",
    "geocoderLabel": "Geokodeerija",
    "generalSettingLabel": "Üldseade",
    "allPlaceholderLabel": "Kohatäite tekst kõigi otsimiseks:",
    "allPlaceholderHintText": "Vihje: kõigi kihtide ja geokodeerija otsimiseks sisestage tekst kohatäitena kuvatavana",
    "generalSettingCheckboxLabel": "Kuva leitud objekti või asukoha hüpikaken",
    "countryCode": "Riigi või piirkonna kood(id)",
    "countryCodeEg": "nt ",
    "countryCodeHint": "Kui jätate selle välja tühjaks, teostatakse otsing kõikides riikides ja piirkondades",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Otsi ainult praegusest kaardiulatusest",
    "zoomScale": "Suumiskaala",
    "locatorUrl": "Geokodeerija URL",
    "locatorName": "Geokodeerija nimi",
    "locatorExample": "Näide",
    "locatorWarning": "Seda geokodeerimisteenuse versiooni ei toetata. Vidin toetab geokodeerimisteenust alates versioonist 10.0 ja uuemates versioonides.",
    "locatorTips": "Soovitused pole saadaval, sest geokodeerimisteenus ei toeta soovituste võimalust.",
    "layerSource": "Kihi allikas",
    "setLayerSource": "Määra kihi allikas",
    "setGeocoderURL": "Määra geokodeerija URL",
    "searchLayerTips": "Soovitused pole saadaval, sest objektiteenus ei toeta leheküljelise jaotuse võimalust.",
    "placeholder": "Kohatäitja tekst",
    "searchFields": "Otsinguväljad",
    "displayField": "Kuvamise väli",
    "exactMatch": "Täpne vaste",
    "maxSuggestions": "Maksimaalsed soovitused",
    "maxResults": "Maksimaalsed tulemused",
    "enableLocalSearch": "Luba kohalik otsing",
    "minScale": "Min mõõtkava",
    "minScaleHint": "Kui kaardi mõõkava on sellest mõõtkavast suurem, rakendatakse kohalik otsing",
    "radius": "Raadius",
    "radiusHint": "Määrab praeguse kaardi keskpunkti ümber asuva ala raadiuse, mida kasutatakse geokodeerimise kandidaatide järjestuse võimendamiseks nii, et asukohale lähimad kandidaadid tagastatakse esimesena",
    "setSearchFields": "Määra otsinguväljad",
    "set": "Määra",
    "invalidUrlTip": "URL ${URL} ei sobi või pole kättesaadav.",
    "invalidSearchSources": "Otsinguallika sobimatud seaded"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Täitke nõutavad väljad",
    "bufferDistanceFieldsErrorMsg": "Sisestage kehtivad väärtused",
    "invalidSearchToleranceErrorMsg": "Sisestage otsingu tolerantsi jaoks kehtiv väärtus",
    "atLeastOneCheckboxCheckedErrorMsg": "Sobimatu konfiguratsioon: vajalik on vähemalt üks AOI tööriist.",
    "noLayerAvailableErrorMsg": "Ühtegi kihti pole saadaval",
    "layerNotSupportedErrorMsg": "Ei ole toetatud ",
    "noFieldSelected": "Kasutage analüüsiks väljade valimiseks muutmise toimingut.",
    "duplicateFieldsLabels": "Duplikaatmärgis \"${labelText}\" lisatud : \"${itemNames}\"",
    "noLayerSelected": "Valige analüüsiks vähemalt üks kiht",
    "errorInSelectingLayer": "Kihi valimise toimingut ei saa lõpule viia. Proovige uuesti.",
    "errorInMaxFeatureCount": "Sisestage analüüsiks kehtiv max objektide arv."
  }
});