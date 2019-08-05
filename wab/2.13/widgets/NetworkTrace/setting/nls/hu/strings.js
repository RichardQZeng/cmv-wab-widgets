define({
  "taskUrl": "Feladat URL-címe",
  "setTask": "Beállítás",
  "setTaskPopupTitle": "Feladat beállítása",
  "validate": "Beállítás",
  "inValidGPService": "Adjon meg érvényes téradat-feldolgozási szolgáltatást.",
  "GPFeatureRecordSetLayerERR": "Olyan téradat-feldolgozási szolgáltatást adjon meg, amely kizárólag 'GPFeatureRecordSetLayer' típusú bevitelt tesz lehetővé.",
  "invalidInputParameters": "Abemeneti paraméterek száma 1-nél kevesebb vagy 3-nál több. Adjon meg egy érvényes téradat-feldolgozási szolgáltatást.",
  "projectSetting": {
    "title": "Projektbeállítások",
    "note": "Megjegyzés: A Projektbeállítások választhatók; beállításukat követően a felhasználó a kívánt webtérképrétegekben tárolhatja a projektet a hálózati kimaradás által érintett területtel és a bemeneti paraméterekkel. A felhasználó a „Kimenet” csoportból származó többi kimeneti paramétert a „Kimenet/Bemenet” lapon tárolhatja.",
    "projectPolygonLayer": "Projekt polygonrétege",
    "outputParameterName": "Kimeneti paraméter neve",
    "projectPointLayer": "Projekt pontrétege",
    "selectLabel": "Kiválasztás",
    "polygonLayerHelp": "<p>A következő feltételeknek megfelelő pontrétegek jelennek meg: <br/><ul><li>A rétegnek támogatnia kell a következő szerkesztési műveleteket: „Létrehozás”, „Törlés” és „Frissítés”.</li><li>A rétegnek két, pontos névvel és adattípussal rendelkező mezőt kell tartalmaznia:</li><ul><li>név (karakterlánc típusú mező)</li><li>globális azonosító (globális azonosító típusú mező)</li></ul></ul><p/>",
    "outputParameterHelp": "<p>A feladat-URL-ből származó kimeenti polygonrétegek jelennek meg<p/>",
    "pointLayerHelp": "<p>A következő feltételeknek megfelelő pontrétegek jelennek meg: <br/><ul><li>A rétegnek támogatnia kell a következő szerkesztési műveleteket: „Létrehozás”, „Törlés” és „Frissítés”.</li><li>A rétegnek két, pontos névvel és adattípussal rendelkező mezőt kell tartalmaznia:</li><ul><li>bemenet típusa (karakterlánc típusú mező)</li><li>projektazonosító (globális azonosító típusú mező)</li></ul></ul><p/>"
  },
  "inputOutputTab": {
    "title": "Bemenet/kimenet",
    "inputSettingsLabel": "Bemeneti beállítások",
    "outputSettingsLabel": "Kimeneti beállítások",
    "inputLabel": "Felirat",
    "inputTooltip": "Eszköztipp",
    "symbol": "Szimbólum",
    "typeText": "Típus",
    "outputParametersText": "Kimeneti paraméterek",
    "saveToLayerText": "Mentés rétegbe (Opcionális)",
    "skipText": "Kihagyható",
    "visibilityText": "Látható",
    "exportToCsvText": "Exportálás CSV-fájlba",
    "exportToCsvDisplayText": "CSV",
    "settitngstext": "Beállítások",
    "addFieldTitle": "Mező hozzáadása",
    "enterDisplayText": "Megjelenített szöveg megadása",
    "setScale": "Méretarány beállítása",
    "outputDisplay": "Megjelenített szöveg",
    "saveToLayerHelp": "<p>A következő feltételeknek megfelelő pontrétegek jelennek meg:<br/><ul><li>A rétegnek támogatnia kell a következő szerkesztési műveleteket: „Létrehozás”, „Törlés” és „Frissítés”.</li><li>A rétegnek két, pontos névvel és adattípussal rendelkező mezőt kell tartalmaznia:</li><ul><li>paraméternév (karakterlánc típusú mező)</li><li>projectid (globális azonosító típusú mező)</li></ul></ul><p/>"
  },
  "summaryTab": {
    "title": "Általános beállítások",
    "summaryFieldsetText": "Összefoglalás beállításai",
    "inputOutput": "Kimenetek/bemenetek",
    "field": "Mezők",
    "operator": "Operátorok",
    "inputOperatorCountOption": "Darabszám",
    "outputOperatorCountOption": "Darabszám",
    "outputOperatorSkipCountOption": "Számlálás kihagyása",
    "fieldOperatorSumOption": "Összeg",
    "fieldOperatorMinOption": "Min.",
    "fieldOperatorMaxOption": "Max.",
    "fieldOperatorMeanOption": "Átlag",
    "expressionAddButtonText": "Hozzáadás",
    "expressionVerifyButtonText": "Hitelesítés",
    "summaryEditorText": "Összefoglalás szövege",
    "autoZoomAfterTrace": "További opciók",
    "zoomText": "Automatikus nagyítás/kicsinyítés nyomvonala",
    "summarSettingTooltipText": "Bemeneti/kimeneti szám hozzáadása"
  },
  "validationErrorMessage": {
    "webMapError": "Nincsenek elérhető rétegek a webtérképen. Válasszon érvényes webtérképet.",
    "inputTypeFlagGreaterThanError": "A típusjelölőnek legfeljebb egy bemenete lehet.",
    "inputTypeFlagLessThanError": "A típusjelölőhöz legalább egy bemenet szükséges.",
    "inputTypeBarrierErr": "A típusakadálynak legfeljebb egy bemenete lehet.",
    "inputTypeSkipErr": "A típuskihagyásnak legfeljebb egy bemenete lehet.",
    "displayTextForButtonError": "A „Futtatás” gomb megjelenített szövege nem lehet üres.",
    "UnableToLoadGeoprocessError": "Nem sikerült a téradat-feldolgozás szolgáltatás betöltése.",
    "invalidSummaryExpression": "Érvénytelen kifejezés.",
    "validSummaryExpression": "Sikerült!",
    "invalidProjectSettings": "Érvénytelen projektbeállítások.<br/> Válasszon érvényes értéket itt: „${projectSetting}”."
  },
  "hintText": {
    "labelTextHint": "Tipp: Adjon megjelenített feliratot a a kimeneti paraméter eredménypaneljéhez.",
    "displayTextHint": "Tipp: Ez a kimeneti paraméter Részletek paneljében jelenik meg.",
    "inputTextHint": "Tipp: Hozza létre kifejezését fent a bemenetet, kimenetet és a mezőneveket kiválasztva.",
    "expressionHint": "Tipp: Válassza ki a kívánt elemeket, majd kattintson a Hozzáadás elemre a kifejezés létrehozásához."
  }
});