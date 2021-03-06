/** 
 * Copyright 2021 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
 *                                                                                                                                                                                                      
 * Licensed under the Apache License, Version 2.0 (the "License");                                                                                                                                      
 * you may not use this file except in compliance with the License.                                                                                                                                     
 * You may obtain a copy of the License at                                                                                                                                                              
 *                                                                                                                                                                                                      
 *     http://www.apache.org/licenses/LICENSE-2.0                                                                                                                                                       
 *                                                                                                                                                                                                      
 * Unless required by applicable law or agreed to in writing, software                                                                                                                                  
 * distributed under the License is distributed on an "AS IS" BASIS,                                                                                                                                    
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                                                                                                             
 * See the License for the specific language governing permissions and                                                                                                                                  
 * limitations under the License.                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/

(function(f){
    if (typeof define === 'function' && define.amd) {
        define(["kendo.core"], f);
    } else {
        f();
    }
}(function(){
(function ($, undefined) {
/* Filter cell operator messages */

if (kendo.ui.FilterCell) {
kendo.ui.FilterCell.prototype.options.operators =
$.extend(true, kendo.ui.FilterCell.prototype.options.operators,{
  "date": {
    "eq": "s?? r??wne",
    "gte": "s?? p????niejsze lub r??wne",
    "gt": "s?? p????niejsze ni??",
    "lte": "s?? wcze??niejsze lub r??wne",
    "lt": "s?? wcze??niejsze ni??",
    "neq": "s?? inne ni??",
    "isnull": "brak daty",
    "isnotnull": "maj?? dat??"
  },
  "number": {
    "eq": "s?? r??wne",
    "gte": "s?? wi??ksze lub r??wne",
    "gt": "s?? wi??ksze ni??",
    "lte": "s?? mniejsze lub r??wne",
    "lt": "s?? mniejsze ni??",
    "neq": "s?? inne ni??",
    "isnull": "pusta warto????",
    "isnotnull": "niepusta warto????"
  },
  "string": {
    "endswith": "ko??cz?? si?? na",
    "eq": "s?? r??wne",
    "neq": "s?? inne ni??",
    "startswith": "zaczynaj?? si?? od",
    "contains": "zawieraj??",
    "doesnotcontain": "nie zawieraj??",
    "isnull": "jest null",
    "isnotnull": "nie jest null",
    "isempty": "jest puste",
    "isnotempty": "nie jest puste",
    "isnullorempty": "nie ma warto??ci",
    "isnotnullorempty": "ma warto??c"
  },
  "enums": {
    "eq": "s?? r??wne",
    "neq": "s?? inne ni??"
  }
});
}

/* Filter menu operator messages */

if (kendo.ui.FilterMenu) {
kendo.ui.FilterMenu.prototype.options.operators =
$.extend(true, kendo.ui.FilterMenu.prototype.options.operators,{
  "date": {
    "eq": "s?? r??wne",
    "gte": "s?? p????niejsze lub r??wne",
    "gt": "s?? p????niejsze ni??",
    "lte": "s?? wcze??niejsze lub r??wne",
    "lt": "s?? wcze??niejsze ni??",
    "neq": "s?? inne ni??"
  },
  "number": {
    "eq": "s?? r??wne",
    "gte": "s?? wi??ksze lub r??wne",
    "gt": "s?? wi??ksze ni??",
    "lte": "s?? mniejsze lub r??wne",
    "lt": "s?? mniejsze ni??",
    "neq": "s?? inne ni??"
  },
  "string": {
    "endswith": "ko??cz?? si?? na",
    "eq": "s?? r??wne",
    "neq": "s?? inne ni??",
    "startswith": "zaczynaj?? si?? od",
    "contains": "zawieraj??",
    "doesnotcontain": "nie zawieraj??"
  },
  "enums": {
    "eq": "s?? r??wne",
    "neq": "s?? inne ni??"
  }
});
}

/* ColumnMenu messages */

if (kendo.ui.ColumnMenu) {
kendo.ui.ColumnMenu.prototype.options.messages =
$.extend(true, kendo.ui.ColumnMenu.prototype.options.messages,{
  "filter": "Filtr",
  "columns": "Kolumny",
  "sortAscending": "Sortuj Rosn??co",
  "sortDescending": "Sortuj malej??co",
  "settings": "Ustawienia kolumn",
  "done": "Sporz??dzono",
  "lock": "Zablokowa??",
  "unlock": "Odblokowa??"
});
}

/* RecurrenceEditor messages */

if (kendo.ui.RecurrenceEditor) {
kendo.ui.RecurrenceEditor.prototype.options.messages =
$.extend(true, kendo.ui.RecurrenceEditor.prototype.options.messages,{
  "daily": {
    "interval": "days(s)",
    "repeatEvery": "Repeat every:"
  },
  "end": {
    "after": "After",
    "occurrence": "occurrence(s)",
    "label": "End:",
    "never": "Never",
    "on": "On",
    "mobileLabel": "Ends"
  },
  "frequencies": {
    "daily": "Daily",
    "monthly": "Monthly",
    "never": "Never",
    "weekly": "Weekly",
    "yearly": "Yearly"
  },
  "monthly": {
    "day": "Day",
    "interval": "month(s)",
    "repeatEvery": "Repeat every:",
    "repeatOn": "Repeat on:"
  },
  "offsetPositions": {
    "first": "first",
    "fourth": "fourth",
    "last": "last",
    "second": "second",
    "third": "third"
  },
  "weekly": {
    "repeatEvery": "Repeat every:",
    "repeatOn": "Repeat on:",
    "interval": "week(s)"
  },
  "yearly": {
    "of": "of",
    "repeatEvery": "Repeat every:",
    "repeatOn": "Repeat on:",
    "interval": "year(s)"
  },
  "weekdays": {
    "day": "day",
    "weekday": "weekday",
    "weekend": "weekend day"
  }
});
}

/* Grid messages */

if (kendo.ui.Grid) {
kendo.ui.Grid.prototype.options.messages =
$.extend(true, kendo.ui.Grid.prototype.options.messages,{
  "commands": {
    "create": "Wstaw",
    "destroy": "Usu??",
    "canceledit": "Anuluj",
    "update": "Aktualizuj",
    "edit": "Edycja",
    "excel": "Export to Excel",
    "pdf": "Export to PDF",
    "select": "Zaznacz",
    "cancel": "Anuluj zmiany",
    "save": "Zapisz zmiany"
  },
  "editable": {
    "confirmation": "Czy na pewno chcesz usun???? ten rekord?",
    "cancelDelete": "Anuluj",
    "confirmDelete": "Usu??"
  },
  "noRecords": "Brak danych"
});
}

/* TreeList messages */

if (kendo.ui.TreeList) {
kendo.ui.TreeList.prototype.options.messages =
$.extend(true, kendo.ui.TreeList.prototype.options.messages,{
    "noRows": "Brak danych",
    "loading": "??adowanie...",
    "requestFailed": "Niepowodzenie.",
    "retry": "Pon??w",
    "commands": {
        "edit": "Edycja",
        "update": "Aktualizuj",
        "canceledit": "Anuluj",
        "create": "Wstaw",
        "createchild": "Wstaw dziecko",
        "destroy": "Usu??",
        "excel": "Eksportuj do Excel",
        "pdf": "Eksportuj to PDF"
    }
});
}  
  
/* Pager messages */

if (kendo.ui.Pager) {
kendo.ui.Pager.prototype.options.messages =
$.extend(true, kendo.ui.Pager.prototype.options.messages,{
  "allPages": "Wszystkie",
  "page": "Strona",
  "display": "Wy??wietlanie element??w {0} - {1} z {2}",
  "of": "z {0}",
  "empty": "Brak danych",
  "refresh": "Od??wie??",
  "first": "Id?? do pierwszej strony",
  "itemsPerPage": "na stron??",
  "last": "Przejd?? do ostatniej strony",
  "next": "Przejd?? do nast??pnej strony",
  "previous": "Przejd?? do poprzedniej strony",
  "morePages": "Wi??cej stron"
});
}

/* TreeListPager messages */

if (kendo.ui.TreeListPager) {
kendo.ui.TreeListPager.prototype.options.messages =
$.extend(true, kendo.ui.TreeListPager.prototype.options.messages,{
  "allPages": "Wszystkie",
  "page": "Strona",
  "display": "Wy??wietlanie element??w {0} - {1} z {2}",
  "of": "z {0}",
  "empty": "Brak danych",
  "refresh": "Od??wie??",
  "first": "Id?? do pierwszej strony",
  "itemsPerPage": "na stron??",
  "last": "Przejd?? do ostatniej strony",
  "next": "Przejd?? do nast??pnej strony",
  "previous": "Przejd?? do poprzedniej strony",
  "morePages": "Wi??cej stron"
});
}

/* FilterCell messages */

if (kendo.ui.FilterCell) {
kendo.ui.FilterCell.prototype.options.messages =
$.extend(true, kendo.ui.FilterCell.prototype.options.messages,{
  "filter": "Filtr",
  "clear": "Wyczy???? filtr",
  "isFalse": "fa??sz",
  "isTrue": "prawda",
  "operator": "Operator"
});
}

/* FilterMenu messages */

if (kendo.ui.FilterMenu) {
kendo.ui.FilterMenu.prototype.options.messages =
$.extend(true, kendo.ui.FilterMenu.prototype.options.messages,{
  "filter": "Filtr",
  "and": "Oraz",
  "clear": "Wyczy???? filtr",
  "info": "Poka?? wiersze o warto??ciach kt??re",
  "title": "Poka?? wiersze o warto??ciach kt??re",
  "selectValue": "-Wybierz warto????-",
  "isFalse": "fa??sz",
  "isTrue": "prawda",
  "or": "lub",
  "cancel": "Anuluj",
  "operator": "Operator",
  "value": "Warto????"
});
}

/* FilterMultiCheck messages */

if (kendo.ui.FilterMultiCheck) {
kendo.ui.FilterMultiCheck.prototype.options.messages =
$.extend(true, kendo.ui.FilterMultiCheck.prototype.options.messages,{
  "search": "Szukaj",
  "filter": "Filtr",
  "clear": "Wyczy???? filtr",
  "checkAll": "Zaznacz wszystko",
  "clearAll": "Odznacz wszystko",
  "selectedItemsFormat":"Wybrano {0} elementy"
});
}

/* Groupable messages */

if (kendo.ui.Groupable) {
kendo.ui.Groupable.prototype.options.messages =
$.extend(true, kendo.ui.Groupable.prototype.options.messages,{
  "empty": "Przeci??gnij nag????wek kolumny i upu???? go tutaj aby pogrupowa?? wed??ug tej kolumny"
});
}

/* Editor messages */

if (kendo.ui.Editor) {
kendo.ui.Editor.prototype.options.messages =
$.extend(true, kendo.ui.Editor.prototype.options.messages,{
  "bold": "Wyt??uszczenie",
  "createLink": "Wstaw link",
  "fontName": "Wybierz czcionk??",
  "fontNameInherit": "(czcionka odziedziczona)",
  "fontSize": "Wybierz rozmiar czcionki",
  "fontSizeInherit": "(rozmiar odziedziczony)",
  "formatBlock": "Wybierz rozmiar bloku",
  "indent": "Wci??cie",
  "insertHtml": "Wstaw HTML",
  "insertImage": "Wstaw obraz",
  "insertOrderedList": "Wstaw list?? numerowan??",
  "insertUnorderedList": "Wstaw list?? wypunktowan??",
  "italic": "Kursywa",
  "justifyCenter": "Centruj tekst",
  "justifyFull": "Wyr??wnaj tekst",
  "justifyLeft": "Wyr??wnaj tekst do lewej",
  "justifyRight": "Wyr??wnaj tekst do prawej",
  "outdent": "Zmniejsz wci??cie",
  "strikethrough": "Przekre??lenie",
  "styles": "Styl",
  "subscript": "Subscript",
  "superscript": "Superscript",
  "underline": "Podkre??lenie",
  "unlink": "Usu?? link",
  "deleteFile": "Czy na pewno chcesz usun???? \"{0}\"?",
  "directoryNotFound": "Folder o tej nazwie nie zosta?? znaleziony.",
  "emptyFolder": "Opr????nij folder",
  "invalidFileType": "Wybrany plik \"{0}\" nie jest prawid??owy. Obs??ugiwane typy plik??w to: {1}.",
  "orderBy": "Uporz??dkuj wg:",
  "orderByName": "Nazwa",
  "orderBySize": "Rozmiar",
  "overwriteFile": "Plik o nazwie \"{0}\" istnieje ju?? w bie????cym folderze. Czy chcesz go zast??pi???",
  "uploadFile": "Za??aduj",
  "backColor": "Kolor t??a",
  "foreColor": "Kolor",
  "dialogButtonSeparator": "or",
  "dialogCancel": "Anuluj",
  "dialogInsert": "Wstaw",
  "imageAltText": "Opis",
  "imageWebAddress": "URL",
  "imageWidth": "Szeroko???? (px)",
  "imageHeight": "Wysoko???? (px)",
  "linkWebAddress": "URL",
  "linkText": "Tekst",
  "linkToolTip": "Podpowied??",
  "linkOpenInNewWindow": "Otw??rz w nowym oknie",
  "search": "Search",
  "createTable": "Tworzenie tabeli",
  "createTableHint": "Utw??rz tabel?? {0} x {1}",
  "addColumnLeft": "Dodaj kolumn?? z lewej",
  "addColumnRight": "Dodaj kolumn?? z prawej",
  "addRowAbove": "Dodaj wiersz powy??ej",
  "addRowBelow": "Dodaj wiersz poni??ej",
  "deleteRow": "Usu?? wiersz",
  "deleteColumn": "Usu?? kolumn??",
  "tableWizard": "Szczeg????y tabeli",
  "tableTab": "Tabela",
  "cellTab": "Kom??rka",
  "accessibilityTab": "Dost??pno????",
  "caption": "Nag????wek",
  "summary": "Streszczenie",
  "width": "Szeroko????",
  "height": "Wysoko????",
  "units": "Jednostki",
  "cellSpacing": "Odst??py mi??dzy kom??rkami",
  "cellPadding": "Wewn??trzny odst??p kom??rek",
  "cellMargin": "Margines kom??rek",
  "alignment": "Wyr??wnanie",
  "background": "T??o",
  "cssClass": "Klasa CSS",
  "id": "ID",
  "border": "Brzegi",
  "borderStyle": "Styl CSS brzeg??w",
  "collapseBorders": "Sklejaj brzegi",
  "wrapText": "Zawijanie wierszy",
  "associateCellsWithHeaders": "Powi???? nag????wkami",
  "alignLeft": "Wyr??wnaj w lewo",
  "alignCenter": "Centruj",
  "alignRight": "Wyr??wnaj w prawo",
  "alignLeftTop": "Wyr??wnaj w prawo do g??ry",
  "alignCenterTop": "Wyr??wnaj do ??rodka do g??ry",
  "alignRightTop": "Wyr??wnaj w prawo do g??ry",
  "alignLeftMiddle": "Wyr??wnaj w lewo do ??rodka",
  "alignCenterMiddle": "Wyr??wnaj do ??rodka",
  "alignRightMiddle": "Wyr??wnaj w prawo do ??rodka",
  "alignLeftBottom": "Wyr??wnaj w lewo do do??u",
  "alignCenterBottom": "Wyr??wnaj do ??rodka do do??u",
  "alignRightBottom": "Wyr??wnaj w prawo do do??u",
  "alignRemove": "Usu?? wyr??wnanie",
  "columns": "Kolumny",
  "rows": "Wiersze",
  "selectAllCells": "Zaznacz wszystkie kom??rki",
  "cleanFormatting": "Usu?? formatowanie",
  "dropFilesHere": "przeci??gnij pliki tutaj, aby je wys??a??",
  "formatting": "Formatowanie",
  "viewHtml": "Widok HTML",
  "dialogUpdate": "Aktualizuj",
  "insertFile": "Wstaw plik"
});
}
 
/* FormattingTool messages */
  
if (kendo.ui.editor) {
kendo.ui.editor.FormattingTool.prototype.options.items = [
    {
        text: 'Paragraf',
        value: 'p'
    },
    {
        text: 'Cytat',
        value: 'blockquote'
    },
    {
        text: 'Nag????wek 1',
        value: 'h1'
    },
    {
        text: 'Nag????wek 2',
        value: 'h2'
    },
    {
        text: 'Nag????wek 3',
        value: 'h3'
    },
    {
        text: 'Nag????wek 4',
        value: 'h4'
    },
    {
        text: 'Nag????wek 5',
        value: 'h5'
    },
    {
        text: 'Nag????wek 6',
        value: 'h6'
    }
];
}

/* FileBrowser and ImageBrowser messages */

var browserMessages = {
  "uploadFile" : "Wy??lij",
  "orderBy" : "Sortuj wg",
  "orderByName" : "Nazwy",
  "orderBySize" : "Rozmiaru",
  "directoryNotFound" : "Folder o podanej nazwie nie zosta?? odnaleziony.",
  "emptyFolder" : "Pusty folder",
  "invalidFileType" : "Wybrany plik \"{0}\" jest nieprawid??owy. Obs??ugiwane pliki {1}.",
  "deleteFile" : 'Czy napewno chcesz usun???? plik "{0}"?',
  "overwriteFile" : 'Plik o nazwie "{0}" ju?? istnieje w bie????cym folderze. Czy zast??pi???',
  "dropFilesHere" : "umie???? pliki tutaj, aby je wys??a??",
  "search" : "Szukaj"
};

if (kendo.ui.FileBrowser) {
kendo.ui.FileBrowser.prototype.options.messages =
$.extend(true, kendo.ui.FileBrowser.prototype.options.messages, browserMessages);
}

if (kendo.ui.ImageBrowser) {
kendo.ui.ImageBrowser.prototype.options.messages =
$.extend(true, kendo.ui.ImageBrowser.prototype.options.messages, browserMessages);
}

/* FileManager messages */ 
  
if (kendo.ui.FileManager) {
    kendo.ui.FileManager.prototype.options.messages = $.extend(true, kendo.ui.FileManager.prototype.options.messages, {
        toolbar: {
            createFolder: 'Nowy folder',
            upload: 'Prze??lij',
            sortDirection: 'Sort Direction',
            sortDirectionAsc: 'Sortuj rosn??co',
            sortDirectionDesc: 'Sortuj malej??co',
            sortField: 'Sortuj wed??ug',
            nameField: 'Nazwa',
            sizeField: 'Rozmiar',
            typeField: 'Typ',
            dateModifiedField: 'Data modyfikacji',
            dateCreatedField: 'Data utworzenia',
            listView: 'Ikony',
            gridView: 'Szczeg????y',
            search: 'Szukaj',
            details: 'Szczeg????y',
            detailsChecked: 'tak',
            detailsUnchecked: 'nie',
            'Delete': 'Usu??',
            Rename: 'Zmie?? nazw??'
        },
        views: {
            nameField: 'Nazwa',
            sizeField: 'Rozmiar',
            typeField: 'Typ',
            dateModifiedField: 'Data modyfikacji',
            dateCreatedField: 'Data utworzenia',
            items: 'element??w'
        },
        dialogs: {
            upload: {
                title: 'Prze??lij pliki',
                clear: 'Wyczy???? list??',
                done: 'OK'
            },
            moveConfirm: {
                title: ' ',
                content: '<p style=\'text-align: center;\'>Czy chcesz przenie???? zaznaczone pliki, czy skopiowa???</p>',
                okText: 'Kopiuj',
                cancel: 'Przenie??',
                close: 'Zamknij'
            },
            deleteConfirm: {
                title: 'Potwierd?? usuni??cie',
                content: '<p style=\'text-align: center;\'>Czy na pewno chcesz usun???? zaznaczone pliki?</br>Nie ma mo??liwo??ci cofni??cia tej operacji.</p>',
                okText: 'Usu??',
                cancel: 'Anuluj',
                close: 'Zamknij'
            },
            renamePrompt: {
                title: 'Zmie?? nazw??',
                content: '<p style=\'text-align: center;\'>Wprowad?? now?? nazw?? pliku</p>',
                okText: 'Zastosuj',
                cancel: 'Anuluj',
                close: 'Zamknij'
            }
        },
        previewPane: {
            noFileSelected: 'Nie zaznaczono pliku',
            extension: 'Typ',
            size: 'Rozmiar',
            created: 'Data utworzenia',
            createdUtc: 'Data utworzenia UTC',
            modified: 'Data modyfikacji',
            modifiedUtc: 'Data modyfikacji UTC',
            items: 'element??w'
        }
    });
}
  
/* Upload messages */

if (kendo.ui.Upload) {
kendo.ui.Upload.prototype.options.localization =
$.extend(true, kendo.ui.Upload.prototype.options.localization,{
  "cancel": "Anuluj",
  "dropFilesHere": "przeci??gnij tu pliki aby je za??adowa??",
  "remove": "Usu??",
  "retry": "Pon??w",
  "select": "Wybierz...",
  "statusFailed": "niepowodzenie",
  "statusUploaded": "za??adowane",
  "statusUploading": "trwa ??adowanie",
  "uploadSelectedFiles": "Za??aduj pliki",
  "headerStatusUploaded": "OK",
  "headerStatusUploading": "Uploading..."
});
}

/* Scheduler messages */

if (kendo.ui.Scheduler) {
kendo.ui.Scheduler.prototype.options.messages =
$.extend(true, kendo.ui.Scheduler.prototype.options.messages,{
  "allDay": "ca??y dzie??",
  "cancel": "Anuluj",
  "editable": {
    "confirmation": "Czy na pewno chcesz usun???? to wydarzenie?"
  },
  "date": "Data",
  "destroy": "Usu??",
  "editor": {
    "allDayEvent": "Wydarzenie ca??odniowe",
    "description": "Opis",
    "editorTitle": "Wydarzenie",
    "end": "Koniec",
    "endTimezone": "Strefa czasowa ko??ca",
    "repeat": "Cykl",
    "separateTimezones": "Osobne strefy czasowe dla pocz??tku i ko??ca",
    "start": "Pocz??tek",
    "startTimezone": "Strefa czasowa pocz??tku",
    "timezone": "Strefa czasowa",
    "timezoneEditorButton": "Strefa czasowa",
    "timezoneEditorTitle": "Strefy czasowe",
    "title": "Tytu??",
    "noTimezone": "Brak strefy czasowej"
  },
  "event": "Wydarzenie",
  "recurrenceMessages": {
    "deleteRecurring": "Czy chcesz usun???? pojedy??cze wydarzenie, czy ca??y cykl?",
    "deleteWindowOccurrence": "Usu?? bie????ce wydarzenie",
    "deleteWindowSeries": "Usu?? cykl",
    "deleteWindowTitle": "Usu?? wydarzenie cykliczne",
    "editRecurring": "Czy chcesz edytowa?? pojedy??cze wydarzenie, czy ca??y cykl?",
    "editWindowOccurrence": "Edytuj bie????ce wydarzenie",
    "editWindowSeries": "Edytuj cykl",
    "editWindowTitle": "Edytuj wydarzenie cykliczne"
  },
  "save": "Zapisz",
  "time": "Czas",
  "today": "Dzi??",
  "views": {
    "agenda": "Agenda",
    "day": "Dzie??",
    "month": "Miesi??c",
    "week": "Tydzie??",
    "workWeek": "Tydzie?? roboczy"
  },
  "deleteWindowTitle": "Usu?? wydarzenie",
  "showFullDay": "Poka?? ca??y dzie??",
  "showWorkDay": "Poka?? godziny pracy"
});
}

/* Spreadsheet messages */

if (kendo.spreadsheet && kendo.spreadsheet.messages.borderPalette) {
kendo.spreadsheet.messages.borderPalette =
$.extend(true, kendo.spreadsheet.messages.borderPalette,{
  "allBorders": "Wszystkie brzegi",
  "insideBorders": "Brzegi wewn??trzne",
  "insideHorizontalBorders": "Poziome brzegi wewn??trzne",
  "insideVerticalBorders": "Pionowe brzegi wewn??trzne",
  "outsideBorders": "Brzegi zewn??trzne",
  "leftBorder": "Lewy brzeg",
  "topBorder": "G??rny brzeg",
  "rightBorder": "Prawy brzeg",
  "bottomBorder": "Dolny brzeg",
  "noBorders": "Bez brzegu",
  "reset": "Resetuj kolor",
  "customColor": "Inny kolor...",
  "apply": "Zastosuj",
  "cancel": "Anuluj"
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.dialogs) {
kendo.spreadsheet.messages.dialogs =
$.extend(true, kendo.spreadsheet.messages.dialogs,{
  "apply": "Zastosuj",
  "save": "Zapisz",
  "cancel": "Anuluj",
  "remove": "Usu??",
  "retry": "Pon??w",
  "revert": "Przywr????",
  "okText": "OK",
  "formatCellsDialog": {
    "title": "Format",
    "categories": {
      "number": "Liczba",
      "currency": "Waluta",
      "date": "Data"
      }
  },
  "fontFamilyDialog": {
    "title": "Czcionka"
  },
  "fontSizeDialog": {
    "title": "Rozmiar"
  },
  "bordersDialog": {
    "title": "Brzegi"
  },
  "alignmentDialog": {
    "title": "Wyr??wnanie",
    "buttons": {
      "justtifyLeft": "Wyr??wnaj w lewo",
      "justifyCenter": "Centruj",
      "justifyRight": "Wyr??wnaj w prawo",
      "justifyFull": "Dostosuj",
      "alignTop": "Wyr??wnaj do g??ry",
      "alignMiddle": "Wyr??wnaj do ??rodka",
      "alignBottom": "Wyr??wnaj do do??u"
    }
  },
  "mergeDialog": {
    "title": "Scal kom??rki",
    "buttons": {
      "mergeCells": "Scal wszystkie",
      "mergeHorizontally": "Scal w poziomie",
      "mergeVertically": "Scal w pionie",
      "unmerge": "Rozdziel"
    }
  },
  "freezeDialog": {
    "title": "Zablokuj okienka",
    "buttons": {
    "freezePanes": "Zablokuj okienka",
    "freezeRows": "Zablokuj wiersze",
    "freezeColumns": "Zablokuj kolumny",
    "unfreeze": "Odblokuj okienka"
    }
  }, 
  "confirmationDialog": {
    "text": "Czy na pewno chcesz usun???? ten arkusz?",
    "title": "Usu?? arkusz"
  },
  "validationDialog": {
    "title": "Walidacja danych",
    "hintMessage": "Wprowad?? prawid??ow?? warto???? {0} {1}.",
    "hintTitle": "Walidacja {0}",
    "criteria": {
      "any": "Dowolna",
      "number": "Liczba",
      "text": "Tekst",
      "date": "Data",
      "custom": "Niestandardowe",
      "list": "Lista"
    },
    "comparers": {
      "greaterThan": "wi??ksza ni??",
      "lessThan": "mniejsza ni??",
      "between": "mi??dzy",
      "notBetween": "nie mi??dzy",
      "equalTo": "r??wna",
      "notEqualTo": "nier??wna",
      "greaterThanOrEqualTo": "wi??ksza lub r??wna",
      "lessThanOrEqualTo": "mniejsza lub r??wna"
    },
    "comparerMessages": {
      "greaterThan": "wi??ksza ni?? {0}",
      "lessThan": "mniejsza ni?? {0}",
      "between": "mi??dzy {0} i {1}",
      "notBetween": "nie mi??dzy {0} i {1}",
      "equalTo": "r??wna {0}",
      "notEqualTo": "nier??wna {0}",
      "greaterThanOrEqualTo": "wi??ksza lub r??wna {0}",
      "lessThanOrEqualTo": "mniejsza lub r??wna {0}",
      "custom": "spe??nia warunek: {0}"
    },
    "labels": {
      "criteria": "Kryteria",
      "comparer": "Por??wnanie",
      "min": "Min",
      "max": "Max",
      "value": "Warto????",
      "start": "Start",
      "end": "Koniec",
      "onInvalidData": "W razie nieprawid??owych danych",
      "rejectInput": "Odrzu??",
      "showWarning": "Poka?? ostrze??enie",
      "showHint": "Poka?? podpowied??",
      "hintTitle": "Tytu?? podpowiedzi",
      "hintMessage": "Tre???? podpowiedzi",
      "ignoreBlank": "Ignoruj blanki"
    },
    "placeholders": {
      "typeTitle": "Wprowad?? tytu??",
      "typeMessage": "Wprowad?? wiadomo????"
    }
  },
  "exportAsDialog": {
    "title": "Eksport...",
    "labels": {
      "fileName": "Nazwa pliku",
      "saveAsType": "Zapisz jako plik typu",
      "exportArea": "Eksport",
      "paperSize": "Rozmiar papieru",
      "margins": "Marginesy",
      "orientation": "Orientacja",
      "print": "Drukuj",
      "guidelines": "Wskaz??wki",
      "center": "Wy??rodkuj",
      "horizontally": "Poziomo",
      "vertically": "Pionowo"
    }
  },
  "modifyMergedDialog": {
    "errorMessage": "Nie mo??na zmieni?? cz????ci scalonej kom??rki."
  },
  "useKeyboardDialog": {
    "title": "Kopiowanie i wklejanie",
    "errorMessage": "Te dzia??ania nie mog?? zosta?? wywo??ane przez menu. U??yj nast??puj??cych skr??t??w klawiszowych:",
    "labels": {
      "forCopy": "kopiuj",
      "forCut": "wytnij",
      "forPaste": "wklej"
    }
  },
  "unsupportedSelectionDialog": {
    "errorMessage": "To dzia??anie nie mo??e zosta?? wykonane na wielokrotnym zaznaczeniu."
  },
  "insertCommentDialog": {
    "title": "Wstaw komentarz",
    "labels": {
      "comment": "Komentarz",
      "removeComment": "Usu?? komentarz"
    }
  },
  "insertImageDialog": {
    "title": "Wstaw obraz",
    "info": "Przeci??gnij tu obrazek, lub klikjnij by wybra??",
    "typeError": "Wybierz plik JPEG, PNG lub GIF"
  }
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.filterMenu) {
kendo.spreadsheet.messages.filterMenu =
$.extend(true, kendo.spreadsheet.messages.filterMenu,{
  "sortAscending": "Sortuj przedzia?? A do Z",
  "sortDescending": "Sortuj przedzia?? Z do A",
  "filterByValue": "Filtruj po warto??ci",
  "filterByCondition": "Filtruj po warunku",
  "apply": "Zastosuj",
  "search": "Szukaj",
  "addToCurrent": "Dodaj do zaznaczenia",
  "clear": "Wyczy???? ",
  "blanks": "(Blanki)",
  "operatorNone": "??aden",
  "and": "I",
  "or": "LUB",
  "operators": {
    "string": {
      "contains": "Tekst zawiera",
      "doesnotcontain": "Tekst does nie zawiera",
      "startswith": "Tekst zaczyna si?? od",
      "endswith": "Tekst ko??czy si?? na"
    },
    "date": {
      "eq":  "Data jest r??wna",
      "neq": "Data nie jest r??wna",
      "lt":  "Data jest przed",
      "gt":  "Data jest po"
    },
    "number": {
      "eq": "Jest r??wna",
      "neq": "Nie jest r??wna",
      "gte": "Jest wi??ksza lub r??wna",
      "gt": "Jest wi??ksza",
      "lte": "Jest mniejsza lub r??wna",
      "lt": "Jest mniejsza"
    }
  }
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.colorPicker) {
kendo.spreadsheet.messages.colorPicker =
$.extend(true, kendo.spreadsheet.messages.colorPicker,{
  "reset": "Resetuj kolor",
  "customColor": "Inny kolor...",
  "apply": "Zastosuj",
  "cancel": "Anuluj"
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.toolbar) {
kendo.spreadsheet.messages.toolbar =
$.extend(true, kendo.spreadsheet.messages.toolbar,{
  "addColumnLeft": "Dodaj kolumn?? z lewej",
  "addColumnRight": "Dodaj kolumn?? z prawej",
  "addRowAbove": "Dodaj wiersz powy??ej",
  "addRowBelow": "Dodaj wiersz poni??ej",
  "alignment": "Wyr??wnanie",
  "alignmentButtons": {
    "justtifyLeft": "Wyr??wnaj w lewo",
    "justifyCenter": "Centruj",
    "justifyRight": "Wyr??wnaj w prawo",
    "justifyFull": "Dostosuj",
    "alignTop": "Wyr??wnaj do g??ry",
    "alignMiddle": "Wyr??wnaj do ??rodka",
    "alignBottom": "Wyr??wnaj do do??u"
  },
  "backgroundColor": "Kolor t??a",
  "bold": "Wyt??uszczenie",
  "borders": "Brzegi",
  "colorPicker": {
    "reset": "Resetuj kolor",
    "customColor": "Inny kolor..."
  },
  "copy": "Kopiuj",
  "cut": "Wklej",
  "deleteColumn": "Usu?? kolumn??",
  "deleteRow": "Usu?? wiersz",
  "excelImport": "Importuj z Excel...",
  "filter": "Filtruj",
  "fontFamily": "Czcionka",
  "fontSize": "Rozmiar",
  "format": "Inne formatowanie...",
  "formatTypes": {
    "automatic": "Auto",
    "number": "Liczba",
    "percent": "Procenty",
    "financial": "Waluta",
    "currency": "Waluta",
    "date": "Data",
    "time": "Czas",
    "dateTime": "Data i czas",
    "duration": "Czas trwania",
    "moreFormats": "Wi??cej format??w..."
  },
  "formatDecreaseDecimal": "Zwi??ksz",
  "formatIncreaseDecimal": "Zmniejsz",
  "freeze": "Zablokuj okienka",
  "freezeButtons": {
    "freezePanes": "Zablokuj okienka",
    "freezeRows": "Zablokuj wiersze",
    "freezeColumns": "Zablokuj kolumny",
    "unfreeze": "Odblokuj okienka"
  },
  "insertComment": "Wstaw komentarz",
  "insertImage": "Wstaw obrazek",
  "italic": "Kursywa",
  "merge": "Scal kom??rki",
  "mergeButtons": {
    "mergeCells": "Scal wszystkie",
    "mergeHorizontally": "Scal w poziomie",
    "mergeVertically": "Scal w pionie",
    "unmerge": "Rozdziel"
  },
  "open": "Otw??rz...",
  "paste": "Wklej",
  "quickAccess": {
    "redo": "Pon??w",
    "undo": "Cofnij"
  },
  "saveAs": "Zapisz jako...",
  "sortAsc": "Sortuj rosn??co",
  "sortDesc": "Sortuj malej??co",
  "sortButtons": {
    "sortSheetAsc": "Sortuj arkusz A do Z",
    "sortSheetDesc": "Sortuj arkusz Z do A",
    "sortRangeAsc": "Sortuj przedzia?? A do Z",
    "sortRangeDesc": "Sortuj przedzia?? Z do A"
  },
  "textColor": "Kolor tekstu",
  "textWrap": "Zawijanie",
  "underline": "Podkre??lenie",
  "validation": "Walidacja danych..."
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.view) {
kendo.spreadsheet.messages.view =
$.extend(true, kendo.spreadsheet.messages.view,{
  "errors": {
    "shiftingNonblankCells": "Nie mo??na wstawi?? kom??rek ze wzgl??du na mo??liw?? utrat?? danych. Wybierz inne miejsce docelowe lub usu?? dane z ko??ca arkusza.",
    "filterRangeContainingMerges": "Nie mo??na utworzy?? filtra w przedziale zawieraj??cym scalenia.",
    "validationError": "Wprowadzona warto???? ??amie regu??y walidacji dla tej kom??rki."
  },
  "tabs": {
    "home": "Narz??dzia g????wne",
    "insert": "Wstaw",
    "data": "Dane"
  }
});
}

/* Dialog */

if (kendo.ui.Dialog) {
kendo.ui.Dialog.prototype.options.messages =
$.extend(true, kendo.ui.Dialog.prototype.options.localization, {
  "close": "Zamkn????"
});
}

/* Alert */

if (kendo.ui.Alert) {
kendo.ui.Alert.prototype.options.messages =
$.extend(true, kendo.ui.Alert.prototype.options.localization, {
  "okText": "OK"
});
}

/* Confirm */

if (kendo.ui.Confirm) {
kendo.ui.Confirm.prototype.options.messages =
$.extend(true, kendo.ui.Confirm.prototype.options.localization, {
  "okText": "OK",
  "cancel": "Anuluj"
});
}

/* Prompt */
if (kendo.ui.Prompt) {
kendo.ui.Prompt.prototype.options.messages =
$.extend(true, kendo.ui.Prompt.prototype.options.localization, {
  "okText": "OK",
  "cancel": "Anuluj"
});
}

/* List messages */

if (kendo.ui.List) {
    kendo.ui.List.prototype.options.messages =
    $.extend(true, kendo.ui.List.prototype.options.messages,{
      "clear": "Wyczy????",
      "noData": "Brak danych."
    });
}

/* DropDownList messages */

if (kendo.ui.DropDownList) {
    kendo.ui.DropDownList.prototype.options.messages =
    $.extend(true, kendo.ui.DropDownList.prototype.options.messages, kendo.ui.List.prototype.options.messages);
}

/* ComboBox messages */

if (kendo.ui.ComboBox) {
    kendo.ui.ComboBox.prototype.options.messages =
    $.extend(true, kendo.ui.ComboBox.prototype.options.messages, kendo.ui.List.prototype.options.messages);
}

/* AutoComplete messages */

if (kendo.ui.AutoComplete) {
    kendo.ui.AutoComplete.prototype.options.messages =
    $.extend(true, kendo.ui.AutoComplete.prototype.options.messages, kendo.ui.List.prototype.options.messages);
}

/* MultiColumnComboBox messages */

if (kendo.ui.MultiColumnComboBox) {
    kendo.ui.MultiColumnComboBox.prototype.options.messages =
    $.extend(true, kendo.ui.MultiColumnComboBox.prototype.options.messages, kendo.ui.List.prototype.options.messages);
}

/* Validator */
if (kendo.ui.Validator) {
kendo.ui.Validator.prototype.options.messages =
$.extend(true, kendo.ui.Validator.prototype.options.messages, {
	required: 'Warto???? {0} jest wymagana',
	pattern: 'Warto???? {0} jest nieprawid??owa',
	min: '{0} musi by?? nie mniejsze ni?? {1}',
	max: '{0} musi by?? nie wi??ksze ni?? {1}',
	step: 'Warto???? {0} jest nieprawid??owa',
	email: 'Nieprawid??owy email: {0}',
	url: 'Nieprawid??owy URL: {0}',
	date: 'Nieprawid??owa data: {0}',
	dateCompare: 'Data pocz??tkowa nie mo??e by?? p????niejsza ni?? ko??cowa.'
});
}
 
})(window.kendo.jQuery);
}));