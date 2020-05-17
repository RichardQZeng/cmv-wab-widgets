define({
  "taskUrl": "Adres URL zadania",
  "setTask": "Zestaw",
  "setTaskPopupTitle": "Skonfiguruj zadanie",
  "validate": "Zestaw",
  "inValidGPService": "Wprowadź prawidłową usługę geoprzetwarzania.",
  "GPFeatureRecordSetLayerERR": "Wprowadź usługę geoprzetwarzania z danymi wejściowymi tylko typu 'GPFeatureRecordSetLayer'.",
  "invalidInputParameters": "Liczba parametrów wejściowych jest mniejsza niż 1 lub większa niż 3. Wprowadź prawidłową usługę geoprzetwarzania.",
  "projectSetting": {
    "title": "Ustawienia projektu",
    "note": "Uwaga: Ustawienia projektu są opcjonalne, po ich skonfigurowaniu użytkownik może zapisać projekt na żądanych warstwach mapy internetowej z obszarem awarii sieci i parametrami wejściowymi. Użytkownik może zapisać pozostałe parametry wejściowe z grupy “Wynik” na karcie “Dane wejściowe/Dane wynikowe”.",
    "projectPolygonLayer": "Warstwa poligonowa projektu",
    "outputParameterName": "Nazwa parametru wynikowego",
    "projectPointLayer": "Warstwa punktowa projektu",
    "selectLabel": "Zaznacz",
    "polygonLayerHelp": "<p>Zostaną wyświetlone warstwy poligonowe spełniające następujące warunki:<br/><ul><li>Warstwa musi mieć funkcje edycji: „Tworzenie”, „Usuwanie” i „Aktualizacja”</li><li>Warstwa musi mieć 2 pola z dokładną nazwą i dokładnym typem danych:</li><ul><li>nazwa (pole typu znakowego)</li><li>globalid (pole typu GlobalID)</li></ul></ul><p/>",
    "outputParameterHelp": "<p>Zostaną wyświetlone wynikowe warstwy poligonowe z adresu URL zadania<p/>",
    "pointLayerHelp": "<p>Zostaną wyświetlone warstwy punktowe spełniające następujące warunki:<br/><ul><li>Warstwa musi mieć funkcje edycji: „Tworzenie”, „Usuwanie” i „Aktualizacja”</li><li>Warstwa musi mieć 2 pola z dokładną nazwą i dokładnym typem danych:</li><ul><li>inputtype (pole typu znakowego)</li><li>projectid (pole typu GUID)</li></ul></ul><p/>"
  },
  "inputOutputTab": {
    "title": "Dane wejściowe/Dane wynikowe",
    "inputSettingsLabel": "Ustawienia wejściowe",
    "outputSettingsLabel": "Ustawienia wynikowe",
    "inputLabel": "Etykieta",
    "inputTooltip": "Etykieta narzędzia",
    "symbol": "Symbol",
    "typeText": "Typ",
    "outputParametersText": "Parametry wynikowe",
    "saveToLayerText": "Zapisz do warstwy (opcjonalne)",
    "skipText": "Z możliwością pominięcia",
    "visibilityText": "Widoczne",
    "exportToCsvText": "Export to CSV",
    "exportToCsvDisplayText": "CSV",
    "settitngstext": "Ustawienia",
    "addFieldTitle": "Dodaj pole",
    "enterDisplayText": "Wprowadź tekst wyświetlany",
    "setScale": "Ustaw skalę",
    "outputDisplay": "Tekst wyświetlany",
    "saveToLayerHelp": "<p>Zostaną wyświetlone warstwy spełniające następujące warunki:<br/><ul><li>Warstwa musi mieć funkcje edycji: „Tworzenie”, „Usuwanie” i „Aktualizacja”</li><li>Warstwa musi mieć dwa pola z nazwą i typem danych:</li><ul><li>parametername (pole typu znakowego)</li><li>projectid (pole typu Guid)</li></ul></ul><p/>"
  },
  "summaryTab": {
    "title": "Ustawienia ogólne",
    "summaryFieldsetText": "Ustawienia podsumowania",
    "inputOutput": "Dane wejściowe/Dane wynikowe",
    "field": "Pola",
    "operator": "Operatory",
    "inputOperatorCountOption": "Liczba",
    "outputOperatorCountOption": "Liczba",
    "outputOperatorSkipCountOption": "SkipCount",
    "fieldOperatorSumOption": "Suma",
    "fieldOperatorMinOption": "Min",
    "fieldOperatorMaxOption": "Maks",
    "fieldOperatorMeanOption": "Średnia",
    "expressionAddButtonText": "Dodaj",
    "expressionVerifyButtonText": "Sprawdź",
    "summaryEditorText": "Tekst podsumowania",
    "autoZoomAfterTrace": "Opcje dodatkowe",
    "zoomText": "Automatycznie powiększaj po wykonaniu trasowania",
    "summarSettingTooltipText": "Dodaj liczbę elementów wejściowych/wynikowych"
  },
  "validationErrorMessage": {
    "webMapError": "Brak dostępnych warstw na mapie internetowej. Wybierz prawidłową mapę internetową.",
    "inputTypeFlagGreaterThanError": "Danych wejściowych typu flaga nie może być więcej niż jedna.",
    "inputTypeFlagLessThanError": "Wymagana jest przynajmniej jedna dana wejściowa typu flaga.",
    "inputTypeBarrierErr": "Danych wejściowych typu bariera nie może być więcej niż jedna.",
    "inputTypeSkipErr": "Danych wejściowych typu pomiń nie może być więcej niż jedna.",
    "displayTextForButtonError": "Tekst wyświetlany dla przycisku 'Uruchom' nie może być pusty.",
    "UnableToLoadGeoprocessError": "Nie można wczytać usługi geoprzetwarzania.",
    "invalidSummaryExpression": "Nieprawidłowe wyrażenie.",
    "validSummaryExpression": "Sukces!",
    "invalidProjectSettings": "Nieprawidłowe ustawienia projektu.<br/>Wybierz prawidłową wartość w polu '${projectSetting}'."
  },
  "hintText": {
    "labelTextHint": "Wskazówka: Udostępnia wyświetlaną etykietę dla panelu wyników parametrów wynikowych.",
    "displayTextHint": "Wskazówka: Będzie ona wyświetla na panelu szczegółów dla tego parametru wynikowego.",
    "inputTextHint": "Wskazówka: Zbuduj swoje powyższe wyrażenie, wybierając dane wejściowe, dane wynikowe i nazwy pól.",
    "expressionHint": "Wskazówka: Wybierz elementy i kliknij przycisk dodawania, aby zbudować wyrażenie."
  }
});