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
/* FlatColorPicker messages */

if (kendo.ui.FlatColorPicker) {
kendo.ui.FlatColorPicker.prototype.options.messages =
$.extend(true, kendo.ui.FlatColorPicker.prototype.options.messages,{
  "apply": "Potvrdit",
  "cancel": "Zru??it",
  "noColor": "bez barvy",
  "clearColor": "Smazat barvu"
});
}

/* ColorPicker messages */

if (kendo.ui.ColorPicker) {
kendo.ui.ColorPicker.prototype.options.messages =
$.extend(true, kendo.ui.ColorPicker.prototype.options.messages,{
  "apply": "Potvrdit",
  "cancel": "Zru??it",
  "noColor": "bez barvy",
  "clearColor": "Smazat barvu"
});
}

/* ColumnMenu messages */

if (kendo.ui.ColumnMenu) {
kendo.ui.ColumnMenu.prototype.options.messages =
$.extend(true, kendo.ui.ColumnMenu.prototype.options.messages,{
  "sortAscending": "T????dit vzestupn??",
  "sortDescending": "T????dit sestupn??",
  "filter": "Filtr",
  "columns": "Sloupce",
  "done": "Hotovo",
  "settings": "Nastaven?? sloupc??",
  "lock": "Zamknout",
  "unlock": "Odemknout"
});
}

/* Editor messages */

if (kendo.ui.Editor) {
kendo.ui.Editor.prototype.options.messages =
$.extend(true, kendo.ui.Editor.prototype.options.messages,{
  "bold": "Tu??n??",
  "italic": "Kurz??va",
  "underline": "Podtr??en??",
  "strikethrough": "P??e??krtnut??",
  "superscript": "Horn?? index",
  "subscript": "Doln?? index",
  "justifyCenter": "Zarovnat na st??ed",
  "justifyLeft": "Zarovnat vlevo",
  "justifyRight": "Zarovnat vpravo",
  "justifyFull": "Zarovnat do bloku",
  "insertUnorderedList": "Vlo??it odr????kov?? seznam",
  "insertOrderedList": "Vlo??it ????slovan?? seznam",
  "indent": "Zv??t??it odsazen??",
  "outdent": "Zmen??it odsazen??",
  "createLink": "Vlo??it odkaz",
  "unlink": "Zru??it odkaz",
  "insertImage": "Vlo??it obr??zek",
  "insertFile": "Vlo??it soubor",
  "insertHtml": "Vlo??it HTML",
  "viewHtml": "Zobrazit HTML",
  "fontName": "Vyberte p??smo",
  "fontNameInherit": "(v??choz?? p??smo)",
  "fontSize": "Vyberte velikost p??sma",
  "fontSizeInherit": "(v??choz?? velikost)",
  "formatBlock": "Form??t",
  "formatting": "Form??tov??n??",
  "foreColor": "Barva",
  "backColor": "Barva pozad??",
  "style": "Styly",
  "emptyFolder": "Pr??zn?? adres????",
  "uploadFile": "Nahr??t",
  "overflowAnchor": "Dal???? n??stroje",
  "orderBy": "Se??adit dle:",
  "orderBySize": "Velikosti",
  "orderByName": "Jm??na",
  "invalidFileType": "Vybran?? soubor s p????ponou \"{0}\" nen?? podporovan??. Podporovan?? soubory jsou {1}.",
  "deleteFile": "Opravdu chcete smazat \"{0}\"?",
  "overwriteFile": "'Soubor s n??zvem \"{0}\" ji?? ve vybran??m adres????i existuje. P??ejete si jej p??epsat?",
  "directoryNotFound": "Adres???? zadan??ho n??zvu nebyl nalezen.",
  "imageWebAddress": "Odkaz",
  "imageAltText": "Alternativn?? text",
  "imageWidth": "??????ka (px)",
  "imageHeight": "V????ka (px)",
  "fileWebAddress": "Web adresa",
  "fileTitle": "N??zev",
  "linkWebAddress": "Odkaz",
  "linkText": "Text",
  "linkToolTip": "Text po najet??",
  "linkOpenInNewWindow": "Otev????t odkaz v nov??m okn??",
  "dialogUpdate": "Aktualizovat",
  "dialogInsert": "Vlo??it",
  "dialogButtonSeparator": "nebo",
  "dialogCancel": "Zru??it",
  "cleanFormatting": "Vymazat form??tov??n??",
  "createTable": "Vlo??it tabulku",
  "addColumnLeft": "P??idat sloupec vlevo",
  "addColumnRight": "P??idat sloupec vpravo",
  "addRowAbove": "P??idat ????dek nad",
  "addRowBelow": "P??idat ????dek pod",
  "deleteRow": "Smazat ????dek",
  "deleteColumn": "Smazat soupec",
  "dialogOk": "Ok",
  "tableWizard": "Pr??vodce tabulkou",
  "tableTab": "Tabulka",
  "cellTab": "Bu??ka",
  "accessibilityTab": "Usnadn??n??",
  "caption": "Titulek",
  "summary": "Souhrn",
  "width": "??????ka",
  "height": "V????ka",
  "units": "Jednotky",
  "cellSpacing": "Mezery mezi bu??kami",
  "cellPadding": "Odsazen?? obsahu bun??k",
  "cellMargin": "Okraje bu??ky",
  "alignment": "Zarovn??n??",
  "background": "Pozad??",
  "cssClass": "CSS t????da",
  "id": "ID",
  "border": "Ohrani??en??",
  "borderStyle": "Styl ohrani??en??",
  "collapseBorders": "Sbalit ohrani??en??",
  "wrapText": "Zalamovat text",
  "associateCellsWithHeaders": "P??idru??it bunky k z??hlav??",
  "alignLeft": "Zarovnat doleva",
  "alignCenter": "Zarovnat na st??ed",
  "alignRight": "Zarovnat doprava",
  "alignLeftTop": "Zarovnat doleva nahoru",
  "alignCenterTop": "Zarovnat nahoru na st??ed",
  "alignRightTop": "Zarovnat nahoru doprava",
  "alignLeftMiddle": "Zarovnat doleva na st??ed",
  "alignCenterMiddle": "Zarovnat na st??ed",
  "alignRightMiddle": "Zarovnat doprava na st??ed",
  "alignLeftBottom": "Zarovnat doleva dol??",
  "alignCenterBottom": "Zarovnat dol?? na st??ed",
  "alignRightBottom": "Zarovnat dol?? doprava",
  "alignRemove": "Odstranit zarovn??n??",
  "columns": "Sloupce",
  "rows": "????dky",
  "selectAllCells": "Vybrat v??echny bu??ky"
});
}

/* FileBrowser messages */

if (kendo.ui.FileBrowser) {
kendo.ui.FileBrowser.prototype.options.messages =
$.extend(true, kendo.ui.FileBrowser.prototype.options.messages,{
  "uploadFile": "Nahr??t",
  "orderBy": "Se??adit podle",
  "orderByName": "N??zev",
  "orderBySize": "Velikost",
  "directoryNotFound": "Adres???? s t??mto n??zvem nebyl nalezen.",
  "emptyFolder": "Pr??zdn?? slo??ka",
  "deleteFile": 'Jste si jist??, ??e chcete smazat "{0}"?',
  "invalidFileType": "Soubor \"{0}\" nen?? platn??. Pou??iteln?? typy soubor?? {1}.",
  "overwriteFile": "Soubor \"{0}\" ji?? v aktu??ln??m adres????i existuje. P??ejete si jej p??epsat?",
  "dropFilesHere": "p??et??hn??te soubory pro nahr??n??",
  "search": "Hledat"
});
}

/* FilterCell messages */

if (kendo.ui.FilterCell) {
kendo.ui.FilterCell.prototype.options.messages =
$.extend(true, kendo.ui.FilterCell.prototype.options.messages,{
  "isTrue": "je pravda",
  "isFalse": "nen?? pravda",
  "filter": "Filtrovat",
  "clear": "Zru??it",
  "operator": "Oper??tor"
});
}

/* FilterCell operators */

if (kendo.ui.FilterCell) {
kendo.ui.FilterCell.prototype.options.operators =
$.extend(true, kendo.ui.FilterCell.prototype.options.operators,{
  "string": {
    "eq": "Je shodn?? s",
    "neq": "Je r??zn?? od",
    "startswith": "Za????n?? na",
    "contains": "Obsahuje",
    "doesnotcontain": "Neobsahuje",
    "endswith": "Kon???? na",
    "isnull": "Je null",
    "isnotnull": "Nen?? null",
    "isempty": "Je pr??zdn??",
    "isnotempty": "Nen?? pr??zdn??",
    "isnullorempty": "Nem?? hodnotu",
    "isnotnullorempty": "M?? hodnotu"
  },
  "number": {
    "eq": "Je rovno",
    "neq": "Je r??zn?? od",
    "gte": "Je v??t???? nebo rovno",
    "gt": "Je v??t???? ne??",
    "lte": "Je men???? nebo rovno",
    "lt": "Je men???? ne??",
    "isnull": "Je null",
    "isnotnull": "Nen?? null"
  },
  "date": {
    "eq": "Je rovno",
    "neq": "Je r??zn?? od",
    "gte": "Za????n?? od",
    "gt": "Za????n?? po",
    "lte": "Kon???? do",
    "lt": "Kon???? po",
    "isnull": "Je null",
    "isnotnull": "Nen?? null"
  },
  "enums": {
    "eq": "Je rovno",
    "neq": "Je r??zn?? od",
    "isnull": "Je null",
    "isnotnull": "Nen?? null"
  }
});
}

/* FilterMenu messages */

if (kendo.ui.FilterMenu) {
kendo.ui.FilterMenu.prototype.options.messages =
$.extend(true, kendo.ui.FilterMenu.prototype.options.messages,{
  "info": "Zobrazit polo??ky s hodnotou, kter??:",
  "title": "Zobrazit polo??ky s hodnotou, kter??",
  "isTrue": "je pravda",
  "isFalse": "nen?? pravda",
  "filter": "Filtrovat",
  "clear": "Zru??it",
  "and": "A z??rove??",
  "or": "Nebo",
  "selectValue": "-Vyberte hodnotu-",
  "operator": "Oper??tor",
  "value": "Hodnota",
  "cancel": "Zru??it"
});
}

/* FilterMenu operator messages */

if (kendo.ui.FilterMenu) {
kendo.ui.FilterMenu.prototype.options.operators =
$.extend(true, kendo.ui.FilterMenu.prototype.options.operators,{
  "string": {
    "eq": "Je shodn?? s",
    "neq": "Je r??zn?? od",
    "startswith": "Za????n?? na",
    "contains": "Obsahuje",
    "doesnotcontain": "Neobsahuje",
    "endswith": "Kon???? na",
    "isnull": "Je null",
    "isnotnull": "Nen?? null",
    "isempty": "Je pr??zdn??",
    "isnotempty": "Nen?? pr??zdn??",
    "isnullorempty": "Nem?? hodnotu",
    "isnotnullorempty": "M?? hodnotu"
  },
  "number": {
    "eq": "Je rovno",
    "neq": "Je r??zn?? od",
    "gte": "Je v??t???? nebo rovno",
    "gt": "Je v??t???? ne??",
    "lte": "Je men???? nebo rovno",
    "lt": "Je men???? ne??",
    "isnull": "Je null",
    "isnotnull": "Nen?? null"
  },
  "date": {
    "eq": "Je rovno",
    "neq": "Je r??zn?? od",
    "gte": "Za????n?? od",
    "gt": "Za????n?? po",
    "lte": "Kon???? do",
    "lt": "Kon???? po",
    "isnull": "Je null",
    "isnotnull": "Nen?? null"
  },
  "enums": {
    "eq": "Je rovno",
    "neq": "Je r??zn?? od",
    "isnull": "Je null",
    "isnotnull": "Nen?? null"
  }
});
}

/* FilterMultiCheck messages */

if (kendo.ui.FilterMultiCheck) {
kendo.ui.FilterMultiCheck.prototype.options.messages =
$.extend(true, kendo.ui.FilterMultiCheck.prototype.options.messages,{
  "checkAll": "Zvolit v??e",
  "clear": "Vymazat",
  "filter": "Filtr",
  "search": "Hledat"
});
}

/* Gantt messages */

if (kendo.ui.Gantt) {
kendo.ui.Gantt.prototype.options.messages =
$.extend(true, kendo.ui.Gantt.prototype.options.messages,{
  "actions": {
    "addChild": "P??idat potomka",
    "append": "P??idat ??kol",
    "insertAfter": "P??idat pod",
    "insertBefore": "P??idat nad",
    "pdf": "Export do PDF"
  },
  "cancel": "Zru??it",
  "deleteDependencyWindowTitle": "Smazat z??vislost",
  "deleteTaskWindowTitle": "Smazat ??kol",
  "destroy": "Smazat",
  "editor": {
    "assingButton": "P??i??adit",
    "editorTitle": "??kol",
    "end": "Konec",
    "percentComplete": "Hotovo",
    "resources": "Zdroje",
    "resourcesEditorTitle": "Zdroje",
    "resourcesHeader": "Zdroje",
    "start": "Za????tek",
    "title": "N??zev",
    "unitsHeader": "Jednotky"
  },
  "save": "Ulo??it",
  "views": {
    "day": "Den",
    "end": "Konec",
    "month": "M??s??c",
    "start": "Za????tek",
    "week": "T??den",
    "year": "Rok"
  }
});
}

/* Grid messages */

if (kendo.ui.Grid) {
kendo.ui.Grid.prototype.options.messages =
$.extend(true, kendo.ui.Grid.prototype.options.messages,{
  "commands": {
    "cancel": "Zru??it",
    "canceledit": "Zru??it",
    "create": "P??idat nov?? z??znam",
    "destroy": "Smazat",
    "edit": "Upravit",
    "excel": "Excel export",
    "pdf": "PDF export",
    "save": "Ulo??it zm??ny",
    "select": "Vybrat",
    "update": "Ulo??it"
  },
  "editable": {
    "cancelDelete": "Zru??it",
    "confirmation": "Opravdu chcete smazat tento z??znam?",
    "confirmDelete": "Smazat"
  },
  "noRecords": "????dn?? z??znam nenalezen.",
  "expandCollapseColumnHeader": ""
});
}

/* TreeList messages */

if (kendo.ui.TreeList) {
kendo.ui.TreeList.prototype.options.messages =
$.extend(true, kendo.ui.TreeList.prototype.options.messages,{
    "noRows": "????dn?? z??znamy k zobrazen??",
    "loading": "Na????t??m...",
    "requestFailed": "Po??adavek selhal.",
    "retry": "Zkusit znovu",
    "commands": {
        "edit": "Upravit",
        "update": "Aktualizovat",
        "canceledit": "Zru??it",
        "create": "P??idat nov?? z??znam",
        "createchild": "P??idat nov?? z??znam",
        "destroy": "Smazat",
        "excel": "Excel export",
        "pdf": "PDF export"
    }
});
}

/* Groupable messages */

if (kendo.ui.Groupable) {
kendo.ui.Groupable.prototype.options.messages =
$.extend(true, kendo.ui.Groupable.prototype.options.messages,{
  "empty": "P??et??hn??te sem z??hlav?? sloupce pro seskupen?? dle vybran??ho sloupce."
});
}

/* NumericTextBox messages */

if (kendo.ui.NumericTextBox) {
kendo.ui.NumericTextBox.prototype.options =
$.extend(true, kendo.ui.NumericTextBox.prototype.options,{
  "upArrowText": "Zv??t??it",
  "downArrowText": "Zmen??it"
});
}

/* MediaPlayer messages */

if (kendo.ui.MediaPlayer) {
kendo.ui.MediaPlayer.prototype.options.messages =
$.extend(true, kendo.ui.MediaPlayer.prototype.options.messages,{
  "pause": "Pauza",
  "play": "P??ehr??t",
  "mute": "Ztlumit",
  "unmute": "Zru??it ztlumen??",
  "quality": "Kvalita",
  "fullscreen": "Na celou obrazovku"
});
}

/* Pager messages */

if (kendo.ui.Pager) {
kendo.ui.Pager.prototype.options.messages =
$.extend(true, kendo.ui.Pager.prototype.options.messages,{
  "allPages": "All",
  "display": "{0} - {1} z {2} celkem",
  "empty": "????dn?? z??znam nenalezen",
  "page": "Strana",
  "of": "z {0}",
  "itemsPerPage": "z??znam?? na str??nku",
  "first": "Na prvn?? str??nku",
  "previous": "Na p??edchoz?? str??nku",
  "next": "Na dal???? str??nku",
  "last": "Na posledn?? str??nku",
  "refresh": "Obnovit",
  "morePages": "Dal???? str??nky"
});
}

/* TreeListPager messages */

if (kendo.ui.TreeListPager) {
    kendo.ui.TreeListPager.prototype.options.messages =
    $.extend(true, kendo.ui.TreeListPager.prototype.options.messages,{
      "allPages": "All",
      "display": "{0} - {1} z {2} celkem",
      "empty": "????dn?? z??znam nenalezen",
      "page": "Strana",
      "of": "z {0}",
      "itemsPerPage": "z??znam?? na str??nku",
      "first": "Na prvn?? str??nku",
      "previous": "Na p??edchoz?? str??nku",
      "next": "Na dal???? str??nku",
      "last": "Na posledn?? str??nku",
      "refresh": "Obnovit",
      "morePages": "Dal???? str??nky"
    });
    }

/* PivotGrid messages */

if (kendo.ui.PivotGrid) {
kendo.ui.PivotGrid.prototype.options.messages =
$.extend(true, kendo.ui.PivotGrid.prototype.options.messages,{
  "measureFields": "Sem p??et??hn??te pole",
  "columnFields": "Sem p??et??hn??te sloupce",
  "rowFields": "Sem p??et??hn??te ????dky"
});
}

/* PivotFieldMenu messages */

if (kendo.ui.PivotFieldMenu) {
kendo.ui.PivotFieldMenu.prototype.options.messages =
$.extend(true, kendo.ui.PivotFieldMenu.prototype.options.messages,{
  "info": "Zobrazit polo??ky s hodnotou:",
  "filterFields": "Filtr",
  "filter": "Filtr",
  "include": "Zahrnout pole...",
  "title": "Pole k zahrnut??",
  "clear": "Vy??istit",
  "ok": "Ok",
  "cancel": "Zru??it",
  "operators": {
    "contains": "Obsahuje",
    "doesnotcontain": "Neobsahuje",
    "startswith": "Za????na na",
    "endswith": "Kon???? na",
    "eq": "Je rovno",
    "neq": "Nen?? rovno"
  }
});
}

/* RecurrenceEditor messages */

if (kendo.ui.RecurrenceEditor) {
kendo.ui.RecurrenceEditor.prototype.options.messages =
$.extend(true, kendo.ui.RecurrenceEditor.prototype.options.messages,{
  "frequencies": {
    "never": "Nikdy",
    "hourly": "Ka??dou hodinu",
    "daily": "Denn??",
    "weekly": "T??dn??",
    "monthly": "M??s????n??",
    "yearly": "Ro??n??"
  },
  "hourly": {
    "repeatEvery": "Opakovat ka??d??ch: ",
    "interval": " hodin"
  },
  "daily": {
    "repeatEvery": "Opakovat ka??d??:",
    "interval": "dn??"
  },
  "weekly": {
    "interval": "t??den(ny)",
    "repeatEvery": "Opakovat ka??d??:",
    "repeatOn": "Opakovat v:"
  },
  "monthly": {
    "repeatEvery": "Opakovat ka??d??:",
    "repeatOn": "Opakovat v:",
    "interval": "m??s??c(e)",
    "day": "Den"
  },
  "yearly": {
    "repeatEvery": "Opakovat ka??d??:",
    "repeatOn": "Opakovat v:",
    "interval": "rok(y)",
    "of": " z "
  },
  "end": {
    "label": "Konec:",
    "mobileLabel": "Kon????",
    "never": "Nikdy",
    "after": "Konec po",
    "occurrence": "opakov??n??",
    "on": "Dne"
  },
  "offsetPositions": {
    "first": "prvn??",
    "second": "druh??",
    "third": "t??et??",
    "fourth": "??tvrt??",
    "last": "posledn??"
  },

  "weekdays": {
    "day": "den",
    "weekday": "pracovn?? den",
    "weekend": "v??kend"
  }
});
}

/* Scheduler messages */

if (kendo.ui.Scheduler) {
kendo.ui.Scheduler.prototype.options.messages =
$.extend(true, kendo.ui.Scheduler.prototype.options.messages,{
  "allDay": "cel?? den",
  "date": "Datum",
  "event": "Ud??lost",
  "time": "??as",
  "showFullDay": "Zobrazit cel?? den",
  "showWorkDay": "Zobrazit pracovn?? dobu",
  "today": "Dnes",
  "save": "Ulo??it",
  "cancel": "Zru??it",
  "destroy": "Smazat",
  "deleteWindowTitle": "Smazat ud??lost",
  "ariaSlotLabel": "Zvoleno od {0:t} do {1:t}",
  "ariaEventLabel": "{0} dne {1:D} v {2:t}",
  "editable": {
    "confirmation": "Opravdu chcete smazat tuto ud??lost?"
  },
  "views": {
    "day": "Den",
    "week": "T??den",
    "workWeek": "Pracovn?? t??den",
    "agenda": "Agenda",
    "month": "M??s??c"
  },
  "recurrenceMessages": {
    "deleteWindowTitle": "Smazat opakovanou ud??lost",
    "deleteWindowOccurrence": "Smazat vybranou ud??lost",
    "deleteWindowSeries": "Smazat v??e",
    "editWindowTitle": "Upravit opakuj??c?? se ud??lost",
    "editWindowOccurrence": "Upravit jen vybranou ud??lost",
    "editWindowSeries": "Upravit v??e",
    "deleteRecurring": "Chcete smazat jen vybranou ud??lost, nebo i v??echna opakov??n???",
    "editRecurring": "Chcete upravit jen vybranou ud??lost, nebo i v??echna opakov??n???"
  },
  "editor": {
    "title": "Nadpis",
    "start": "Za????tek",
    "end": "Konec",
    "allDayEvent": "Celodenn??",
    "description": "Popis",
    "repeat": "Opakov??n??",
    "timezone": " ",
    "startTimezone": "??asov?? p??smo za????tku",
    "endTimezone": "??asov?? p??smo konce",
    "separateTimezones": "R??zn?? ??asov?? p??sma pro za????tek a konec",
    "timezoneEditorTitle": "??asov?? p??sma",
    "timezoneEditorButton": "??asov?? p??smo",
    "timezoneTitle": "??asov?? p??sma",
    "noTimezone": "????dn?? ??asov?? p??smo",
    "editorTitle": "Ud??lost"
  }
});
}

/* Spreadsheet messages */

if (kendo.spreadsheet && kendo.spreadsheet.messages.borderPalette) {
kendo.spreadsheet.messages.borderPalette =
$.extend(true, kendo.spreadsheet.messages.borderPalette,{
  "allBorders": "V??echno ohrani??en??",
  "insideBorders": "Vnit??n?? ohrani??en??",
  "insideHorizontalBorders": "Vnit??n?? vodorovn?? ohrani??en??",
  "insideVerticalBorders": "Vnit??n?? svisl?? ohrani??en??",
  "outsideBorders": "Vn??j???? ohrani??en??",
  "leftBorder": "Lev?? ohrani??en??",
  "topBorder": "Horn?? ohrani??en??",
  "rightBorder": "Prav?? ohrani??en??",
  "bottomBorder": "Doln?? ohrani??en??",
  "noBorders": "Bez ohrani??en??",
  "reset": "Obnovit barvu",
  "customColor": "Vlastn?? barva...",
  "apply": "Potvrdit",
  "cancel": "Zru??it"
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.dialogs) {
kendo.spreadsheet.messages.dialogs =
$.extend(true, kendo.spreadsheet.messages.dialogs,{
  "apply": "Potvrdit",
  "save": "Ulo??it",
  "cancel": "Zru??it",
  "remove": "Odstranit",
  "retry": "Opakovat",
  "revert": "P??vodn??",
  "okText": "OK",
  "formatCellsDialog": {
    "title": "Form??t",
    "categories": {
      "number": "????slo",
      "currency": "M??na",
      "date": "Datum"
      }
  },
  "fontFamilyDialog": {
    "title": "P??smo"
  },
  "fontSizeDialog": {
    "title": "Velikost p??sma"
  },
  "bordersDialog": {
    "title": "Ohrani??en??"
  },
  "alignmentDialog": {
    "title": "Zarovn??n??",
    "buttons": {
     "justtifyLeft": "Zarovnat doleva",
     "justifyCenter": "Zarovnat na st??ed",
     "justifyRight": "Zarovnat doprava",
     "justifyFull": "Do bloku",
     "alignTop": "Zarovnat nahoru",
     "alignMiddle": "Zarovnat doprost??ed",
     "alignBottom": "Zarovnat dol??"
    }
  },
  "mergeDialog": {
    "title": "Slou??it bu??ky",
    "buttons": {
      "mergeCells": "Slou??it v??e",
      "mergeHorizontally": "Slou??it vodorovn??",
      "mergeVertically": "Slou??it svisle",
      "unmerge": "Odd??lit"
    }
  },
  "freezeDialog": {
    "title": "Ukotvit p??????ky",
    "buttons": {
      "freezePanes": "Ukotvit p??????ky",
      "freezeRows": "Ukotvit ????dky",
      "freezeColumns": "Ukotvit sloupce",
      "unfreeze": "Uvolnit p??????ky"
    }
  },
  "confirmationDialog": {
    "text": "Opravdu chcete odstranit tento list?",
    "title": "Odstranit list"
  },
  "validationDialog": {
    "title": "Validace dat",
    "hintMessage": "Pros??m vlo??te platnou {0} hodnotu {1}.",
    "hintTitle": "Validace {0}",
    "criteria": {
      "any": "Jak??koliv hodnota",
      "number": "????slo",
      "text": "Text",
      "date": "Datum",
      "custom": "Vlastn?? podm??nka",
      "list": "List"
    },
    "comparers": {
      "greaterThan": "v??t???? ne??",
      "lessThan": "men???? ne??",
      "between": "mezi",
      "notBetween": "nen?? mezi",
      "equalTo": "je shodn?? s",
      "notEqualTo": "nen?? shodn?? s",
      "greaterThanOrEqualTo": "v??t???? ne?? nebo rovno",
      "lessThanOrEqualTo": "men???? ne?? nebo rovno"
    },
    "comparerMessages": {
      "greaterThan": "v??t???? ne?? {0}",
      "lessThan": "men???? ne?? {0}",
      "between": "mezi {0} a {1}",
      "notBetween": "nen?? mezi {0} a {1}",
      "equalTo": "rovno {0}",
      "notEqualTo": "nen?? rovno {0}",
      "greaterThanOrEqualTo": "vet???? ne?? nebo rovno {0}",
      "lessThanOrEqualTo": "men???? ne?? nebo rovno {0}",
      "custom": "vyhovuje podm??nce: {0}"
    },
    "labels": {
      "criteria": "Podm??nky",
      "comparer": "Typ porovn??n??",
      "min": "Min",
      "max": "Max",
      "value": "Hodnota",
      "start": "Za????tek",
      "end": "Konec",
      "onInvalidData": "Neplatn?? data",
      "rejectInput": "Zam??tnout vstup",
      "showWarning": "Zobrazit varov??n??",
      "showHint": "Zobrazit n??pov??du",
      "hintTitle": "Titulek n??pov??dy",
      "hintMessage": "Zpr??va n??pov??dy",
      "ignoreBlank": "Ignorovat pr??zdn?? hodnoty"
    },
    "placeholders": {
      "typeTitle": "Vlo??te titulek",
      "typeMessage": "Vlo??te zpr??vu"
    }
  },
  "saveAsDialog": {
    "title": "Ulo??it jako...",
    "labels": {
      "fileName": "Jm??no souboru",
      "saveAsType": "Ulo??it jako typ"
    }
  },
  "exportAsDialog": {
    "title": "Export...",
    "labels": {
      "fileName": "Jm??no souboru",
      "saveAsType": "Ulo??it jako typ",
      "exportArea": "Export",
      "paperSize": "Velikost pap??ru",
      "margins": "Okraje",
      "orientation": "Orientace",
      "print": "Tisk",
      "guidelines": "Vod??tka",
      "center": "Na st??ed",
      "horizontally": "Vodorovn??",
      "vertically": "Svisle"
    }
  },
  "modifyMergedDialog": {
    "errorMessage": "Nelze zm??nit ????st slou??en?? bu??ky."
  },
  "useKeyboardDialog": {
    "title": "Kop??rov??n?? a vkl??d??n??",
    "errorMessage": "Tyto akce nelze vyvolat z menu. Pros??m, pou??ijte kl??vesovou zkratku:",
    "labels": {
      "forCopy": "pro zkop??rov??n??",
      "forCut": "pro vyjmut??",
      "forPaste": "pro vlo??en??"
    }
  },
  "unsupportedSelectionDialog": {
    "errorMessage": "Tuto akci nelze pou????t na v??cen??sobn?? v??b??r."
  }
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.filterMenu) {
kendo.spreadsheet.messages.filterMenu =
$.extend(true, kendo.spreadsheet.messages.filterMenu,{
  "sortAscending": "Se??adit rozsah od A k Z",
  "sortDescending": "Se??adit rozsah od Z k A",
  "filterByValue": "Filtrovat dle hodnoty",
  "filterByCondition": "Filtrovat dle podm??nky",
  "apply": "Pou????t",
  "search": "Hledat",
  "addToCurrent": "P??idat k sou??asn??mu v??b??ru",
  "clear": "Smazat",
  "blanks": "(Pr??zdn??)",
  "operatorNone": "Nen??",
  "and": "AND",
  "or": "OR",
  "operators": {
    "string": {
      "contains": "Text obsahuje",
      "doesnotcontain": "Text neobsahuje",
      "startswith": "Text za????n?? na",
      "endswith": "Text kon???? na"
    },
    "date": {
      "eq":  "Datum je",
      "neq": "Datum nen??",
      "lt":  "Datum je p??ed",
      "gt":  "Datum je po"
    },
    "number": {
      "eq": "Je rovno",
      "neq": "Nen?? rovno",
      "gte": "Je v??t???? ne?? nebo rovno",
      "gt": "Je v??t???? ne??",
      "lte": "Je men???? ne?? nebo rovno",
      "lt": "Je men???? ne??"
    }
  }
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.toolbar) {
kendo.spreadsheet.messages.toolbar =
$.extend(true, kendo.spreadsheet.messages.toolbar,{
  "addColumnLeft": "Vlo??it sloupec vlevo",
  "addColumnRight": "Vlo??it sloupec vpravo",
  "addRowAbove": "Vlo??it ????dek nad",
  "addRowBelow": "Vlo??it ????dek pod",
  "alignment": "Zarovn??n??",
  "alignmentButtons": {
    "justtifyLeft": "Zarovnat doleva",
    "justifyCenter": "Zarovnat na st??ed",
    "justifyRight": "Zarovnat doprava",
    "justifyFull": "Zarovnat do bloku",
    "alignTop": "Zarovnat nahoru",
    "alignMiddle": "Zarovnat doprost??ed",
    "alignBottom": "Zarovnat dol??"
  },
  "backgroundColor": "Pozad??",
  "bold": "Tu??n??",
  "borders": "Ohrani??en??",
  "colorPicker": {
    "reset": "Obnovit barvu",
    "customColor": "Vlastn?? barva..."
  },
  "copy": "Kop??rovat",
  "cut": "Vyjmout",
  "deleteColumn": "Smazat sloupec",
  "deleteRow": "Smazat ????dek",
  "excelImport": "Na????st z Excelu...",
  "filter": "Filtrovat",
  "fontFamily": "P??smo",
  "fontSize": "Velikost p??sma",
  "format": "Vlastn?? form??t...",
  "formatTypes": {
    "automatic": "Automaticky",
    "number": "????slo",
    "percent": "procenta",
    "financial": "????etnick??",
    "currency": "M??na",
    "date": "Datum",
    "time": "??as",
    "dateTime": "Datum a ??as",
    "duration": "Doba trv??n??",
    "moreFormats": "Dal???? form??ty..."
  },
  "formatDecreaseDecimal": "Odebrat desetinn?? m??sto",
  "formatIncreaseDecimal": "P??idat desetinn?? m??sto",
  "freeze": "Ukotvit p??????ky",
  "freezeButtons": {
    "freezePanes": "Ukotvit p??????ky",
    "freezeRows": "Ukotvit ????dky",
    "freezeColumns": "Ukotvit sloupce",
    "unfreeze": "Uvolnit p??????ky"
  },
  "italic": "Italic",
  "merge": "Slou??it bu??ky",
  "mergeButtons": {
    "mergeCells": "Slou??it v??e",
    "mergeHorizontally": "Slou??it vodorovn??",
    "mergeVertically": "Slou??it svisle",
    "unmerge": "Odd??lit"
  },
  "open": "Otev????t...",
  "paste": "Vlo??it",
  "quickAccess": {
    "redo": "Znovu",
    "undo": "Zp??t"
  },
  "saveAs": "Ulo??it jako...",
  "sortAsc": "Se??adit vzestupn??",
  "sortDesc": "Se??adit sestupn??",
  "sortButtons": {
    "sortSheetAsc": "Se??adit list od A k Z",
    "sortSheetDesc": "Se??adit list od Z k A",
    "sortRangeAsc": "Se??adit rozsah od A k Z",
    "sortRangeDesc": "Se??adit rozsah od Z k A"
  },
  "textColor": "Barva textu",
  "textWrap": "Zalomit text",
  "underline": "Podtr??en??",
  "validation": "Validace dat..."
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.view) {
kendo.spreadsheet.messages.view =
$.extend(true, kendo.spreadsheet.messages.view,{
  "errors": {
    "shiftingNonblankCells": "Nelze vlo??it bu??ky z d??vodu mo??n?? ztr??ty dat. Zvolte jin?? m??sto pro vlo??en?? nebo odstra??te data z konce listu.",
    "filterRangeContainingMerges": "Nelze vytvo??it filtr v rozsahu slou??en??ch bun??k",
    "validationError": "Vlo??en?? hodnota nevyhovuje valida??n??m pravidl??m nastaven??m pro tuto bu??ku."
  },
  "tabs": {
    "home": "Home",
    "insert": "Insert",
    "data": "Data"
  }
});
}

/* Slider messages */

if (kendo.ui.Slider) {
kendo.ui.Slider.prototype.options =
$.extend(true, kendo.ui.Slider.prototype.options,{
  "increaseButtonTitle": "Zv????it",
  "decreaseButtonTitle": "Sn????it"
});
}

/* ListBox messaages */

if (kendo.ui.ListBox) {
kendo.ui.ListBox.prototype.options.messages =
$.extend(true, kendo.ui.ListBox.prototype.options.messages,{
  "tools": {
    "remove": "Smazat",
    "moveUp": "Posunout nahoru",
    "moveDown": "Posunout dol??",
    "transferTo": "P??esunout do",
    "transferFrom": "P??esunout z",
    "transferAllTo": "P??esunout v??e do",
    "transferAllFrom": "P??esunout v??e z"
  }
});
}

/* TreeList messages */

if (kendo.ui.TreeList) {
kendo.ui.TreeList.prototype.options.messages =
$.extend(true, kendo.ui.TreeList.prototype.options.messages,{
  "noRows": "????dn?? z??znamy k zobrazen??",
  "loading": "Na????t??m...",
  "requestFailed": "Po??adavek selhal.",
  "retry": "Zkusit znovu",
  "commands": {
      "edit": "Upravit",
      "update": "Aktualizovat",
      "canceledit": "Zru??it",
      "create": "P??idat nov?? z??znam",
      "createchild": "P??idat nov?? z??znam",
      "destroy": "Smazat",
      "excel": "Excel export",
      "pdf": "PDF export"
  }
});
}

/* TreeView messages */

if (kendo.ui.TreeView) {
kendo.ui.TreeView.prototype.options.messages =
$.extend(true, kendo.ui.TreeView.prototype.options.messages,{
  "loading": "Na????t??m...",
  "requestFailed": "Po??adavek selhal.",
  "retry": "Zkusit znovu"
});
}

/* Upload messages */

if (kendo.ui.Upload) {
kendo.ui.Upload.prototype.options.localization =
$.extend(true, kendo.ui.Upload.prototype.options.localization,{
  "select": "Vyberte...",
  "cancel": "Zru??it",
  "retry": "Zkusit znova",
  "remove": "Smazat",
  "clearSelectedFiles": "Smazat",
  "uploadSelectedFiles": "Nahr??t soubory",
  "dropFilesHere": "Pro nahr??n?? p??et??hn??te soubory sem",
  "invalidFiles": "Neplatn?? soubory. Zkontrolujte po??adavky na nahr??n?? soubor??.",
  "statusUploading": "nahr??v??m",
  "statusUploaded": "nahr??no",
  "statusWarning": "varov??n??",
  "statusFailed": "chyba",
  "headerStatusUploading": "Nahr??v??m...",
  "headerStatusUploaded": "Hotovo",
  "invalidMaxFileSize": "Soubor je p????li?? velk??.",
  "invalidMinFileSize": "Soubor je p????li?? mal??.",
  "invalidFileExtension": "Tento typ souboru nen?? povolen."
});
}

/* Validator messages */

if (kendo.ui.Validator) {
kendo.ui.Validator.prototype.options.messages =
$.extend(true, kendo.ui.Validator.prototype.options.messages,{
  "required": "{0} je povinn??",
  "pattern": "{0} nen?? platn??",
  "min": "{0} mus?? b??t v??t???? ne?? rovno {1}",
  "max": "{0} mus?? b??t men???? nebo rovno {1}",
  "step": "{0} nen?? platn??",
  "email": "{0} nen?? platn?? e-mailov?? adresa",
  "url": "{0} nen?? platn?? webov?? adresa",
  "date": "{0} nen?? platn?? datum",
  "dateCompare": "Datum konce mus?? b??t vy?????? ne?? nebo rovno datumu za????tku"
});
}

/* kendo.ui.progress method */
if (kendo.ui.progress) {
kendo.ui.progress.messages =
$.extend(true, kendo.ui.progress.messages, {
    loading: "Na????t?? se..."
});
}

/* Dialog */

if (kendo.ui.Dialog) {
kendo.ui.Dialog.prototype.options.messages =
$.extend(true, kendo.ui.Dialog.prototype.options.localization,{
  "close": "Zav????t"
});
}

/* Calendar */
if (kendo.ui.Calendar) {
kendo.ui.Calendar.prototype.options.messages =
$.extend(true, kendo.ui.Calendar.prototype.options.messages, {
  "weekColumnHeader": ""
});
}

/* Alert */

if (kendo.ui.Alert) {
kendo.ui.Alert.prototype.options.messages =
$.extend(true, kendo.ui.Alert.prototype.options.localization,{
  "okText": "OK"
});
}

/* Confirm */

if (kendo.ui.Confirm) {
kendo.ui.Confirm.prototype.options.messages =
$.extend(true, kendo.ui.Confirm.prototype.options.localization,{
  "okText": "OK",
  "cancel": "Zru??it"
});
}

/* Prompt */
if (kendo.ui.Prompt) {
kendo.ui.Prompt.prototype.options.messages =
$.extend(true, kendo.ui.Prompt.prototype.options.localization,{
  "okText": "OK",
  "cancel": "Zru??it"
});
}

/* DateInput */
if (kendo.ui.DateInput) {
  kendo.ui.DateInput.prototype.options.messages =
    $.extend(true, kendo.ui.DateInput.prototype.options.messages, {
      "year": "rok",
      "month": "m??s??c",
      "day": "den",
      "weekday": "den v t??dnu",
      "hour": "hodiny",
      "minute": "minuty",
      "second": "sekundy",
      "dayperiod": "dop./odp."
    });
}

})(window.kendo.jQuery);
}));