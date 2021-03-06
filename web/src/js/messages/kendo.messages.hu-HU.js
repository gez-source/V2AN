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
  "apply": "Alkalmaz",
  "cancel": "M??gse",
  "noColor": "nincs sz??n",
  "clearColor": "Tiszta sz??n"
});
}

/* ColorPicker messages */

if (kendo.ui.ColorPicker) {
kendo.ui.ColorPicker.prototype.options.messages =
$.extend(true, kendo.ui.ColorPicker.prototype.options.messages,{
  "apply": "Alkalmaz",
  "cancel": "M??gse",
  "noColor": "nincs sz??n",
  "clearColor": "Tiszta sz??n"
});
}

/* ColumnMenu messages */

if (kendo.ui.ColumnMenu) {
kendo.ui.ColumnMenu.prototype.options.messages =
$.extend(true, kendo.ui.ColumnMenu.prototype.options.messages,{
  "sortAscending": "Rendez??s n??vekv??",
  "sortDescending": "Rendez??s cs??kken??",
  "filter": "Sz??r??s",
  "columns": "Oszlopok",
  "done": "K??sz",
  "settings": "Oszlopbe??ll??t??sok",
  "lock": "R??gz??t",
  "unlock": "Felold"
});
}

/* Editor messages */

if (kendo.ui.Editor) {
kendo.ui.Editor.prototype.options.messages =
$.extend(true, kendo.ui.Editor.prototype.options.messages,{
  "bold": "F??lk??v??r",
  "italic": "D??lt",
  "underline": "Al??h??zott",
  "strikethrough": "??th??zott",
  "superscript": "Fels?? index",
  "subscript": "Als?? index",
  "justifyCenter": "K??z??pre igaz??t??s",
  "justifyLeft": "Balra igaz??t??s",
  "justifyRight": "Jobbra igaz??t??s",
  "justifyFull": "Sorkiz??r??s",
  "insertUnorderedList": "Sz??mozatlan lista besz??r??sa",
  "insertOrderedList": "Sz??mozott lista besz??r??sa",
  "indent": "Beh??z??s n??vel??se",
  "outdent": "Beh??z??s cs??kkent??se",
  "createLink": "Hivatkoz??s besz??r??sa",
  "unlink": "Hivatkoz??s elt??vol??t??sa",
  "insertImage": "K??p besz??r??sa",
  "insertFile": "F??jl besz??r??sa",
  "insertHtml": "HTML besz??r??sa",
  "viewHtml": "HTML megtekint??se",
  "fontName": "Bet??t??pus v??laszt??s",
  "fontNameInherit": "(??r??k??lt bet??t??pus)",
  "fontSize": "Bet??m??ret v??laszt??s",
  "fontSizeInherit": "(??r??k??lt m??ret)",
  "formatBlock": "Form??tum",
  "formatting": "Form??z??s",
  "foreColor": "Tintasz??n",
  "backColor": "H??tt??rsz??n",
  "style": "St??lusok",
  "emptyFolder": "??res mappa",
  "uploadFile": "Felt??lt??s",
  "overflowAnchor": "Tov??bbi eszk??z??k",
  "orderBy": "Rendez??s:",
  "orderBySize": "M??ret",
  "orderByName": "N??v",
  "invalidFileType": "A f??jl \"{0}\" nem megfelel?? t??pus??. T??mogatott f??jlt??pusok: {1}.",
  "deleteFile": "Biztos, hogy t??rli a f??jlt: \"{0}\"?",
  "overwriteFile": "A mapp??ban m??r l??tezik \"{0}\" nev?? f??jl. K??v??nja fel??l??rni?",
  "directoryNotFound": "Nincs ilyen nev?? k??nyvt??r.",
  "imageWebAddress": "Webc??m",
  "imageAltText": "Alternat??v sz??veg",
  "imageWidth": "Sz??less??g (px)",
  "imageHeight": "Magass??g (px)",
  "fileWebAddress": "Webc??m",
  "fileTitle": "C??m",
  "linkWebAddress": "Webc??m",
  "linkText": "Sz??veg",
  "linkToolTip": "Helyi s??g??",
  "linkOpenInNewWindow": "Megnyit??s ??j ablakban",
  "dialogUpdate": "Friss??t??s",
  "dialogInsert": "Besz??r??s",
  "dialogButtonSeparator": "vagy",
  "dialogCancel": "M??gse",
  "cleanFormatting": "Form??z??s t??rl??se",
  "createTable": "T??bl??zat l??trehoz??sa",
  "addColumnLeft": "Oszlop besz??r??sa balra",
  "addColumnRight": "Oszlop besz??r??sa jobbra",
  "addRowAbove": "Sor besz??r??sa f??l??",
  "addRowBelow": "Sor besz??r??sa al??",
  "deleteRow": "Sor t??rl??se",
  "deleteColumn": "Oszlop t??rl??se",
  "dialogOk": "OK",
  "tableWizard": "T??bla var??zsl??",
  "tableTab": "T??bla",
  "cellTab": "Cella",
  "accessibilityTab": "Hozz??f??rhet??s??g",
  "caption": "Sz??veg",
  "summary": "??sszegz??s",
  "width": "Sz??less??g",
  "height": "Magass??g",
  "units": "M??rt??kegys??gek",
  "cellSpacing": "Cella t??rk??z",
  "cellPadding": "Cella p??rn??z??s",
  "cellMargin": "Cella marg??",
  "alignment": "Igaz??t??s",
  "background": "H??tt??r",
  "cssClass": "CSS oszt??ly",
  "id": "ID",
  "border": "Szeg??ly",
  "borderStyle": "Szeg??ly st??lusa",
  "collapseBorders": "Keretek ??sszeomlaszt??sa",
  "wrapText": "Sz??vegt??r??s",
  "associateCellsWithHeaders": "Cell??k t??rs??t??sa a fejl??cekkel",
  "alignLeft": "Balra igaz??t??s",
  "alignCenter": "K??z??pre igaz??t??s",
  "alignRight": "Jobbra igaz??t??s",
  "alignLeftTop": "Igaz??t??s balra ??s fel??lre",
  "alignCenterTop": "Igaz??t??s v??zszintesen k??z??pre ??s fel??lre",
  "alignRightTop": "Igaz??t??s jobbra ??s fel??lre",
  "alignLeftMiddle": "Igaz??t??s balra ??s f??gg??legesen k??z??pre",
  "alignCenterMiddle": "Igaz??t??s v??zszintesen ??s f??gg??legesen k??z??pre",
  "alignRightMiddle": "Igaz??t??s jobbra ??s f??gg??legesen k??z??pre",
  "alignLeftBottom": "Igaz??t??s balra ??s alulra",
  "alignCenterBottom": "Igaz??t??s v??zszintesen k??z??pre ??s alulra",
  "alignRightBottom": "Igaz??t??s jobbra ??s alulra",
  "alignRemove": "Igaz??t??s t??rl??se",
  "columns": "Oszlopok",
  "rows": "Sorok",
  "selectAllCells": "??sszes cella kiv??laszt??sa"
});
}

/* FileBrowser messages */

if (kendo.ui.FileBrowser) {
kendo.ui.FileBrowser.prototype.options.messages =
$.extend(true, kendo.ui.FileBrowser.prototype.options.messages,{
  "uploadFile": "Felt??lt??s",
  "orderBy": "Rendez??s",
  "orderByName": "N??v",
  "orderBySize": "M??ret",
  "directoryNotFound": "Nincs ilyen nev?? k??nyvt??r.",
  "emptyFolder": "??res k??nyvt??r",
  "deleteFile": "Biztos, hogy t??rli a f??jlt: \"{0}\"?",
  "invalidFileType": "A f??jl \"{0}\" nem megfelel?? t??pus??. T??mogatott f??jlt??pusok: {1}.",
  "overwriteFile": "A mapp??ban m??r l??tezik \"{0}\" nev?? f??jl. K??v??nja fel??l??rni?",
  "dropFilesHere": "H??zza ide a felt??ltend?? f??jlokat",
  "search": "Keres??s"
});
}

/* FilterCell messages */

if (kendo.ui.FilterCell) {
kendo.ui.FilterCell.prototype.options.messages =
$.extend(true, kendo.ui.FilterCell.prototype.options.messages,{
  "isTrue": "igaz",
  "isFalse": "hamis",
  "filter": "Sz??r??s",
  "clear": "T??rl??s",
  "operator": "M??velet"
});
}

/* FilterCell operators */

if (kendo.ui.FilterCell) {
kendo.ui.FilterCell.prototype.options.operators =
$.extend(true, kendo.ui.FilterCell.prototype.options.operators,{
  "string": {
    "eq": "egyenl??",
    "neq": "nem egyenl??",
    "startswith": "kezd??dik",
    "contains": "tartalmazza",
    "doesnotcontain": "nem tartalmazza",
    "endswith": "v??gz??dik",
    "isnull": "null",
    "isnotnull": "nem null",
    "isempty": "??res",
    "isnotempty": "nem ??res",
    "isnullorempty": "nincs ??rt??ke",
    "isnotnullorempty": "van ??rt??ke"
  },
  "number": {
    "eq": "egyenl??",
    "neq": "nem egyenl??",
    "gte": "nagyobb vagy egyenl??",
    "gt": "nagyobb",
    "lte": "kisebb vagy egyenl??",
    "lt": "kisebb",
    "isnull": "null",
    "isnotnull": "nem null"
  },
  "date": {
    "eq": "egyenl??",
    "neq": "nem egyenl??",
    "gte": "ut??na vagy ekkor",
    "gt": "ut??na",
    "lte": "el??tte vagy ekkor",
    "lt": "el??tte",
    "isnull": "null",
    "isnotnull": "nem null"
  },
  "enums": {
    "eq": "egyenl??",
    "neq": "nem egyenl??",
    "isnull": "null",
    "isnotnull": "nem null"
  }
});
}

/* FilterMenu messages */

if (kendo.ui.FilterMenu) {
kendo.ui.FilterMenu.prototype.options.messages =
$.extend(true, kendo.ui.FilterMenu.prototype.options.messages,{
  "info": "Megjelen??tend?? elemek ??rt??ke:",
  "title": "Megjelen??tend?? elemek ??rt??ke",
  "isTrue": "igaz",
  "isFalse": "hamis",
  "filter": "Sz??r??s",
  "clear": "T??rl??s",
  "and": "??s",
  "or": "vagy",
  "selectValue": "-V??lasszon-",
  "operator": "M??velet",
  "value": "??rt??k",
  "cancel": "M??gse"
});
}

/* FilterMenu operator messages */

if (kendo.ui.FilterMenu) {
kendo.ui.FilterMenu.prototype.options.operators =
$.extend(true, kendo.ui.FilterMenu.prototype.options.operators,{
  "string": {
    "eq": "egyenl??",
    "neq": "nem egyenl??",
    "startswith": "kezd??dik",
    "contains": "tartalmazza",
    "doesnotcontain": "nem tartalmazza",
    "endswith": "v??gz??dik",
    "isnull": "null",
    "isnotnull": "nem null",
    "isempty": "??res",
    "isnotempty": "nem ??res",
    "isnullorempty": "nincs ??rt??ke",
    "isnotnullorempty": "van ??rt??ke"
  },
  "number": {
    "eq": "egyenl??",
    "neq": "nem egyenl??",
    "gte": "nagyobb vagy egyenl??",
    "gt": "nagyobb",
    "lte": "kisebb vagy egyenl??",
    "lt": "kisebb",
    "isnull": "null",
    "isnotnull": "nem null"
  },
  "date": {
    "eq": "egyenl??",
    "neq": "nem egyenl??",
    "gte": "ut??na vagy ekkor",
    "gt": "ut??na",
    "lte": "el??tte vagy ekkor",
    "lt": "el??tte",
    "isnull": "null",
    "isnotnull": "nem null"
  },
  "enums": {
    "eq": "egyenl??",
    "neq": "nem egyenl??",
    "isnull": "null",
    "isnotnull": "nem null"
  }
});
}

/* FilterMultiCheck messages */

if (kendo.ui.FilterMultiCheck) {
kendo.ui.FilterMultiCheck.prototype.options.messages =
$.extend(true, kendo.ui.FilterMultiCheck.prototype.options.messages,{
  "checkAll": "??sszes kijel??l??se",
  "clear": "T??rl??s",
  "filter": "Sz??r??s",
  "search": "Keres??s"
});
}

/* Gantt messages */

if (kendo.ui.Gantt) {
kendo.ui.Gantt.prototype.options.messages =
$.extend(true, kendo.ui.Gantt.prototype.options.messages,{
  "actions": {
    "addChild": "Gyermekelem hozz??ad??sa",
    "append": "Feladat hozz??ad??sa",
    "insertAfter": "Hozz??ad??s al??",
    "insertBefore": "Hozz??ad??s f??l??",
    "pdf": "Export??l??s PDF-be"
  },
  "cancel": "M??gse",
  "deleteDependencyWindowTitle": "F??gg??s??g t??rl??se",
  "deleteTaskWindowTitle": "Feladat t??rl??se",
  "destroy": "T??rl??s",
  "editor": {
    "assingButton": "Hozz??rendel??s",
    "editorTitle": "Feladat",
    "end": "V??ge",
    "percentComplete": "Befejez??s",
    "resources": "Er??forr??sok",
    "resourcesEditorTitle": "Er??forr??sok",
    "resourcesHeader": "Er??forr??sok",
    "start": "Ind??t??s",
    "title": "C??m",
    "unitsHeader": "M??rt??kegys??gek"
  },
  "save": "Ment??s",
  "views": {
    "day": "nap",
    "end": "v??ge",
    "month": "h??nap",
    "start": "eleje",
    "week": "h??t",
    "year": "??v"
  }
});
}

/* Grid messages */

if (kendo.ui.Grid) {
kendo.ui.Grid.prototype.options.messages =
$.extend(true, kendo.ui.Grid.prototype.options.messages,{
  "commands": {
    "cancel": "M??dos??t??sok elvet??se",
    "canceledit": "M??gse",
    "create": "??j elem",
    "destroy": "T??rl??s",
    "edit": "Szerkeszt??s",
    "excel": "Export??l??s Excel-be",
    "pdf": "Export??l??s PDF-be",
    "save": "M??dos??t??sok ment??se",
    "select": "V??laszt??s",
    "update": "Friss??t??s"
  },
  "editable": {
    "cancelDelete": "M??gse",
    "confirmation": "Biztos, hogy t??rli az elemet?",
    "confirmDelete": "T??rl??s"
  },
  "noRecords": "Nincsenek el??rhet?? elemek.",
  "expandCollapseColumnHeader": ""
});
}

/* TreeList messages */

if (kendo.ui.TreeList) {
kendo.ui.TreeList.prototype.options.messages =
$.extend(true, kendo.ui.TreeList.prototype.options.messages,{
    "noRows": "Nincsenek megjelen??thet?? elemek",
    "loading": "Bet??lt??s...",
    "requestFailed": "A k??r??s sikertelen.",
    "retry": "??jra",
    "commands": {
        "edit": "Szerkeszt??s",
        "update": "Friss??t??s",
        "canceledit": "M??gse",
        "create": "??j elem",
        "createchild": "Gyermekelem hozz??ad??sa",
        "destroy": "T??rl??s",
        "excel": "Export??l??s Excel-be",
        "pdf": "Export??l??s PDF-be"
    }
});
}

/* Groupable messages */

if (kendo.ui.Groupable) {
kendo.ui.Groupable.prototype.options.messages =
$.extend(true, kendo.ui.Groupable.prototype.options.messages,{
  "empty": "H??zza ide az oszlopfejl??cet a csoportos??t??shoz"
});
}

/* NumericTextBox messages */

if (kendo.ui.NumericTextBox) {
kendo.ui.NumericTextBox.prototype.options =
$.extend(true, kendo.ui.NumericTextBox.prototype.options,{
  "upArrowText": "??rt??k n??vel??se",
  "downArrowText": "??rt??k cs??kkent??se"
});
}

/* MediaPlayer messages */

if (kendo.ui.MediaPlayer) {
kendo.ui.MediaPlayer.prototype.options.messages =
$.extend(true, kendo.ui.MediaPlayer.prototype.options.messages,{
  "pause": "Sz??net",
  "play": "Lej??tsz??s",
  "mute": "N??m??t??s",
  "unmute": "N??m??t??s felold??sa",
  "quality": "Min??s??g",
  "fullscreen": "Teljes k??perny??"
});
}

/* Pager messages */

if (kendo.ui.Pager) {
kendo.ui.Pager.prototype.options.messages =
$.extend(true, kendo.ui.Pager.prototype.options.messages,{
  "allPages": "??sszes",
  "display": "{0}-{1} a(z) {2} elemb??l",
  "empty": "Nincsenek megjelen??thet?? elemek",
  "page": "Oldal",
  "of": "a(z) {0}",
  "itemsPerPage": "elem / oldal",
  "first": "Ugr??s az els?? oldalra",
  "previous": "Ugr??s az el??z?? oldalra",
  "next": "Ugr??s a k??vetkez?? oldalra",
  "last": "Ugr??s az utols?? oldalra",
  "refresh": "Friss??t??s",
  "morePages": "Tov??bbi oldalak"
});
}

/* TreeListPager messages */

if (kendo.ui.TreeListPager) {
kendo.ui.TreeListPager.prototype.options.messages =
$.extend(true, kendo.ui.TreeListPager.prototype.options.messages,{
  "allPages": "??sszes",
  "display": "{0}-{1} a(z) {2} elemb??l",
  "empty": "Nincsenek megjelen??thet?? elemek",
  "page": "Oldal",
  "of": "a(z) {0}",
  "itemsPerPage": "elem / oldal",
  "first": "Ugr??s az els?? oldalra",
  "previous": "Ugr??s az el??z?? oldalra",
  "next": "Ugr??s a k??vetkez?? oldalra",
  "last": "Ugr??s az utols?? oldalra",
  "refresh": "Friss??t??s",
  "morePages": "Tov??bbi oldalak"
});
}

/* PivotGrid messages */

if (kendo.ui.PivotGrid) {
kendo.ui.PivotGrid.prototype.options.messages =
$.extend(true, kendo.ui.PivotGrid.prototype.options.messages,{
  "measureFields": "H??zza az adatelemeket ide",
  "columnFields": "H??zza az oszlopelemeket ide",
  "rowFields": "H??zza a sorelemeket ide"
});
}

/* PivotFieldMenu messages */

if (kendo.ui.PivotFieldMenu) {
kendo.ui.PivotFieldMenu.prototype.options.messages =
$.extend(true, kendo.ui.PivotFieldMenu.prototype.options.messages,{
  "info": "Megjelen??tend?? elemek ??rt??ke:",
  "filterFields": "Mez??sz??r??",
  "filter": "Sz??r??s",
  "include": "Mez??k befoglal??sa...",
  "title": "Befoglaland?? mez??k",
  "clear": "T??rl??s",
  "ok": "OK",
  "cancel": "M??gse",
  "operators": {
    "contains": "tartalmazza",
    "doesnotcontain": "nem tartalmazza",
    "startswith": "kezd??dik",
    "endswith": "v??gz??dik",
    "eq": "egyenl??",
    "neq": "nem egyenl??"
  }
});
}

/* RecurrenceEditor messages */

if (kendo.ui.RecurrenceEditor) {
kendo.ui.RecurrenceEditor.prototype.options.messages =
$.extend(true, kendo.ui.RecurrenceEditor.prototype.options.messages,{
  "frequencies": {
    "never": "Soha",
    "hourly": "??r??nk??nt",
    "daily": "Naponta",
    "weekly": "Hetente",
    "monthly": "Havonta",
    "yearly": "??vente"
  },
  "hourly": {
    "repeatEvery": "Ism??telje minden: ",
    "interval": " ??ra(k)"
  },
  "daily": {
    "repeatEvery": "Ism??telje minden: ",
    "interval": " nap(ok)"
  },
  "weekly": {
    "interval": " h??t(ek)",
    "repeatEvery": "Ism??telje minden: ",
    "repeatOn": "Ism??telje: "
  },
  "monthly": {
    "repeatEvery": "Ism??telje minden: ",
    "repeatOn": "Ism??telje: ",
    "interval": " h??nap(ok)",
    "day": "nap "
  },
  "yearly": {
    "repeatEvery": "Ism??telje minden: ",
    "repeatOn": "Ism??telje: ",
    "interval": " ??v(ek)",
    "of": " a(z) "
  },
  "end": {
    "label": "V??ge:",
    "mobileLabel": "V??gz??dik",
    "never": "Soha",
    "after": "Ut??n ",
    "occurrence": " el??fordul??s(ok)",
    "on": "Ekkor: "
  },
  "offsetPositions": {
    "first": "els??",
    "second": "m??sodik",
    "third": "harmadik",
    "fourth": "negyedik",
    "last": "utols??"
  },
  "weekdays": {
    "day": "nap",
    "weekday": "munkanap",
    "weekend": "pihen??nap"
  }
});
}

/* Scheduler messages */

if (kendo.ui.Scheduler) {
kendo.ui.Scheduler.prototype.options.messages =
$.extend(true, kendo.ui.Scheduler.prototype.options.messages,{
  "allDay": "eg??sz nap",
  "date": "D??tum",
  "event": "Esem??ny",
  "time": "Id??",
  "showFullDay": "Teljes nap mutat??sa",
  "showWorkDay": "Munka??r??k mutat??sa",
  "today": "Ma",
  "save": "Ment??s",
  "cancel": "M??gse",
  "destroy": "T??rl??s",
  "deleteWindowTitle": "Esem??ny t??rl??se",
  "ariaSlotLabel": "Kiv??lasztva {0:t}-t??l {1:t}-ig",
  "ariaEventLabel": "{0} {1:D} {2:t}",
  "editable": {
    "confirmation": "Biztos, hogy t??r??lni akarja az esem??nyt?"
  },
  "views": {
    "day": "nap",
    "week": "H??t",
    "workWeek": "Munkah??t",
    "agenda": "Napt??r",
    "month": "H??nap"
  },
  "recurrenceMessages": {
    "deleteWindowTitle": "Ism??tl??d?? elem t??rl??se",
    "deleteWindowOccurrence": "Alkalom t??rl??se",
    "deleteWindowSeries": "??sszes ism??tl??d??s t??rl??se",
    "deleteRecurringConfirmation": "Biztos, hogy t??r??lni akarja ezt az alakalmat?",
    "deleteSeriesConfirmation": "Biztos, hogy t??r??lni akarja az ??sszes ism??tl??d??st?",
    "editWindowTitle": "Ism??tl??d?? elem szerkeszt??se",
    "editWindowOccurrence": "Alkalom szerkeszt??se",
    "editWindowSeries": "??sszes ism??tl??d??s szerkeszt??se",
    "deleteRecurring": "Csak ezt az alkalmat szeretn?? t??r??lni, vagy az ??sszes ism??tl??d??st?",
    "editRecurring": "Csak ezt az alkalmat szeretn?? szerkeszteni, vagy az ??sszes ism??tl??d??st?"
  },
  "editor": {
    "title": "C??m",
    "start": "Kezd??s",
    "end": "Befejez??s",
    "allDayEvent": "Eg??sz napos esem??ny",
    "description": "Le??r??s",
    "repeat": "Ism??tl??d??s",
    "timezone": " ",
    "startTimezone": "Kezd??s id??z??n??ja",
    "endTimezone": "Befejez??s id??z??n??ja",
    "separateTimezones": "A kezd??s ??s a befejez??s id??z??n??ja elt??r??",
    "timezoneEditorTitle": "Id??z??n??k",
    "timezoneEditorButton": "Id??z??na",
    "timezoneTitle": "Id??z??n??k",
    "noTimezone": "Nincs id??z??na",
    "editorTitle": "Esem??ny"
  }
});
}

/* Spreadsheet messages */

if (kendo.spreadsheet && kendo.spreadsheet.messages.borderPalette) {
kendo.spreadsheet.messages.borderPalette =
$.extend(true, kendo.spreadsheet.messages.borderPalette,{
  "allBorders": "Minden szeg??ly",
  "insideBorders": "Bels?? szeg??lyek",
  "insideHorizontalBorders": "Bels?? v??zszintes szeg??lyek",
  "insideVerticalBorders": "Bels?? f??gg??leges szeg??lyek",
  "outsideBorders": "K??ls?? szeg??lyek",
  "leftBorder": "Bal szeg??ly",
  "topBorder": "Fels?? szeg??ly",
  "rightBorder": "Jobb szeg??ly",
  "bottomBorder": "Als?? szeg??ly",
  "noBorders": "Nincs szeg??ly",
  "reset": "Alap??rtelmezett sz??n",
  "customColor": "Egy??ni sz??n...",
  "apply": "Alkalmaz",
  "cancel": "M??gse"
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.dialogs) {
kendo.spreadsheet.messages.dialogs =
$.extend(true, kendo.spreadsheet.messages.dialogs,{
  "apply": "Alkalmaz",
  "save": "Ment??s",
  "cancel": "M??gse",
  "remove": "Elt??vol??t??s",
  "retry": "??jra",
  "revert": "Vissza??ll??t??s",
  "okText": "OK",
  "formatCellsDialog": {
    "title": "Form??z??s",
    "categories": {
      "number": "Sz??m",
      "currency": "P??nznem",
      "date": "D??tum"
      }
  },
  "fontFamilyDialog": {
    "title": "Bet??t??pus"
  },
  "fontSizeDialog": {
    "title": "Bet??m??ret"
  },
  "bordersDialog": {
    "title": "Szeg??lyek"
  },
  "alignmentDialog": {
    "title": "Igaz??t??s",
    "buttons": {
     "justtifyLeft": "Balra igaz??t??s",
     "justifyCenter": "K??z??pre igaz??t??s",
     "justifyRight": "Jobbra igaz??t??s",
     "justifyFull": "Sorkiz??r??s",
     "alignTop": "F??gg??leges igaz??t??s fel??lre",
     "alignMiddle": "F??gg??leges igaz??t??s k??z??pre",
     "alignBottom": "F??gg??leges igaz??t??s alulra"
    }
  },
  "mergeDialog": {
    "title": "Cellaegyes??t??s",
    "buttons": {
      "mergeCells": "??sszes egyes??t??se",
      "mergeHorizontally": "Egyes??t??s v??zszintesen",
      "mergeVertically": "Egyes??t??s f??gg??legesen",
      "unmerge": "Sz??tv??laszt??s"
    }
  },
  "freezeDialog": {
    "title": "Ablakt??bla r??gz??t??se",
    "buttons": {
      "freezePanes": "Ablakt??bla r??gz??t??se",
      "freezeRows": "Sorok r??gz??t??se",
      "freezeColumns": "Oszlopok r??gz??t??se",
      "unfreeze": "R??gz??t??s felold??sa"
    }
  },
  "confirmationDialog": {
    "text": "Biztos, hogy t??rli ezt a munkalapot?",
    "title": "Munkalap t??rl??se"
  },
  "validationDialog": {
    "title": "Adatellen??rz??s",
    "hintMessage": "K??rem, ??rjon be egy ??rv??nyes {0} ??rt??ket {1}.",
    "hintTitle": "Ellen??rz??s {0}",
    "criteria": {
      "any": "B??rmely ??rt??k",
      "number": "Sz??m",
      "text": "Sz??veg",
      "date": "D??tum",
      "custom": "Egy??ni szab??ly",
      "list": "Lista"
    },
    "comparers": {
      "greaterThan": "nagyobb, mint",
      "lessThan": "kisebb, mint",
      "between": "a k??vetkez??k k??z?? esik",
      "notBetween": "nem esik a k??vetkez??k k??z??",
      "equalTo": "egyenl??",
      "notEqualTo": "nem egyenl??",
      "greaterThanOrEqualTo": "nagyobb vagy egyenl??",
      "lessThanOrEqualTo": "kisebb vagy egyenl??"
    },
    "comparerMessages": {
      "greaterThan": "nagyobb, mint {0}",
      "lessThan": "kisebb, mint {0}",
      "between": "{0} ??s {1} k??z?? esik",
      "notBetween": "nem esik {0} ??s {1} k??z??",
      "equalTo": "egyenl?? {0}",
      "notEqualTo": "nem egyenl?? {0}",
      "greaterThanOrEqualTo": "nagyobb vagy egyenl?? {0}",
      "lessThanOrEqualTo": "kisebb vagy egyenl?? {0}",
      "custom": "megfelel a k??pletnek: {0}"
    },
    "labels": {
      "criteria": "Felt??tel",
      "comparer": "??sszehasonl??t??",
      "min": "Minimum",
      "max": "Maximum",
      "value": "??rt??k",
      "start": "Kezd??s",
      "end": "Befejez??s",
      "onInvalidData": "??rv??nytelen adat be??r??sakor",
      "rejectInput": "Bevitel visszautas??t??sa",
      "showWarning": "Figyelmeztet??s megjelen??t??se",
      "showHint": "Javaslat megjelen??t??se",
      "hintTitle": "Javaslat c??me",
      "hintMessage": "Javaslat sz??vege",
      "ignoreBlank": "??res cell??k mell??z??se"
    },
    "placeholders": {
      "typeTitle": "T??pus c??m",
      "typeMessage": "T??pus ??zenet"
    }
  },
  "exportAsDialog": {
    "title": "Export??l??s...",
    "labels": {
      "fileName": "F??jln??v",
      "saveAsType": "F??jl t??pusa",
      "exportArea": "Export??l??s",
      "paperSize": "Pap??rm??ret",
      "margins": "Marg??k",
      "orientation": "T??jol??s",
      "print": "Nyomtat??s",
      "guidelines": "Seg??dvonalak",
      "center": "K??z??pre",
      "horizontally": "V??zszintesen",
      "vertically": "F??gg??legesen"
    }
  },
  "modifyMergedDialog": {
    "errorMessage": "Nem lehet m??dos??tani az egyes??tett cella egy r??sz??t."
  },
  "useKeyboardDialog": {
    "title": "M??sol??s ??s beilleszt??s",
    "errorMessage": "Ezek a m??veletek nem ??rhet??k el a men??b??l. K??rem, haszn??lja a k??vetkez?? billenty??kombin??ci??kat:",
    "labels": {
      "forCopy": "m??sol??shoz",
      "forCut": "kiv??g??shoz",
      "forPaste": "beilleszt??shez"
    }
  },
  "unsupportedSelectionDialog": {
    "errorMessage": "A m??velet nem hajthat?? v??gre t??bbes kijel??l??sen."
  }
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.filterMenu) {
kendo.spreadsheet.messages.filterMenu =
$.extend(true, kendo.spreadsheet.messages.filterMenu,{
  "sortAscending": "Tartom??ny rendez??se A-Z",
  "sortDescending": "Tartom??ny rendez??se Z-A",
  "filterByValue": "Sz??r??s ??rt??k szerint",
  "filterByCondition": "Sz??r??s felt??tel alapj??n",
  "apply": "Alkalmaz",
  "search": "Keres??s",
  "addToCurrent": "Hozz??ad??s az aktu??lis kijel??l??shez",
  "clear": "T??rl??s",
  "blanks": "(??resek)",
  "operatorNone": "Egyik sem",
  "and": "??s",
  "or": "vagy",
  "operators": {
    "string": {
      "contains": "A sz??veg tartalmazza",
      "doesnotcontain": "A sz??veg nem tartalmazza",
      "startswith": "A sz??veg eleje",
      "endswith": "A sz??veg v??ge"
    },
    "date": {
      "eq":  "A d??tum",
      "neq": "A d??tum nem",
      "lt":  "Ezen d??tum el??tt",
      "gt":  "Ezen d??tum ut??n"
    },
    "number": {
      "eq": "egyenl??",
      "neq": "nem egyenl??",
      "gte": "nagyobb vagy egyenl??",
      "gt": "nagyobb",
      "lte": "kisebb vagy egyenl??",
      "lt": "kisebb"
    }
  }
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.colorPicker) {
kendo.spreadsheet.messages.colorPicker =
$.extend(true, kendo.spreadsheet.messages.colorPicker,{
  "reset": "Alap??rtelmezett sz??n",
  "customColor": "Egy??ni sz??n...",
  "apply": "Alkalmaz",
  "cancel": "M??gse"
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.toolbar) {
kendo.spreadsheet.messages.toolbar =
$.extend(true, kendo.spreadsheet.messages.toolbar,{
  "addColumnLeft": "Oszlop hozz??ad??sa balra",
  "addColumnRight": "Oszlop hozz??ad??sa jobbra",
  "addRowAbove": "Sor hozz??ad??sa f??l??",
  "addRowBelow": "Sor hozz??ad??sa al??",
  "alignment": "Igaz??t??s",
  "alignmentButtons": {
    "justtifyLeft": "Balra igaz??t??s",
    "justifyCenter": "K??z??pre igaz??t??s",
    "justifyRight": "Jobbra igaz??t??s",
    "justifyFull": "Sorkiz??r??s",
    "alignTop": "F??gg??leges igaz??t??s fel??lre",
    "alignMiddle": "F??gg??leges igaz??t??s k??z??pre",
    "alignBottom": "F??gg??leges igaz??t??s alulra"
  },
  "backgroundColor": "Kit??lt??sz??n",
  "bold": "F??lk??v??r",
  "borders": "Szeg??lyek",
  "colorPicker": {
    "reset": "Alap??rtelmezett sz??n",
    "customColor": "Egy??ni sz??n..."
  },
  "copy": "M??sol??s",
  "cut": "Kiv??g??s",
  "deleteColumn": "Oszlop t??rl??se",
  "deleteRow": "Sor t??rl??se",
  "excelImport": "Import??l??s Excel-b??l...",
  "filter": "Sz??r??s",
  "fontFamily": "Bet??t??pus",
  "fontSize": "Bet??m??ret",
  "format": "Egy??ni form??tum...",
  "formatTypes": {
    "automatic": "Automatikus",
    "number": "Sz??m",
    "percent": "Sz??zal??k",
    "financial": "K??nyvel??si",
    "currency": "P??nznem",
    "date": "D??tum",
    "time": "Id??",
    "dateTime": "D??tum-id??",
    "duration": "Id??tartam",
    "moreFormats": "Egy??b form??tum..."
  },
  "formatDecreaseDecimal": "Tizedeshelyek cs??kkent??se",
  "formatIncreaseDecimal": "Tizedeshelyek n??vel??se",
  "freeze": "Ablakt??bla r??gz??t??se",
  "freezeButtons": {
    "freezePanes": "Ablakt??bla r??gz??t??se",
    "freezeRows": "Sorok r??gz??t??se",
    "freezeColumns": "Oszlopok r??gz??t??se",
    "unfreeze": "R??gz??t??s felold??sa"
  },
  "italic": "D??lt",
  "merge": "Cellaegyes??t??s",
  "mergeButtons": {
    "mergeCells": "??sszes egyes??t??se",
    "mergeHorizontally": "Egyes??t??s v??zszintesen",
    "mergeVertically": "Egyes??t??s f??gg??legesen",
    "unmerge": "Sz??tv??laszt??s"
  },
  "open": "Megnyit??s...",
  "paste": "Beilleszt??s",
  "quickAccess": {
    "redo": "M??gis",
    "undo": "Visszavon??s"
  },
  "saveAs": "Ment??s m??sk??nt...",
  "sortAsc": "Rendez??s n??vekv??",
  "sortDesc": "Rendez??s cs??kken??",
  "sortButtons": {
    "sortSheetAsc": "Munkalap rendez??se A-Z",
    "sortSheetDesc": "Munkalap rendez??se Z-A",
    "sortRangeAsc": "Tartom??ny rendez??se A-Z",
    "sortRangeDesc": "Tartom??ny rendez??se Z-A"
  },
  "textColor": "Tintasz??n",
  "textWrap": "Sz??veg t??r??se t??bb sorba",
  "underline": "Al??h??zott",
  "validation": "Adatellen??rz??s..."
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.view) {
kendo.spreadsheet.messages.view =
$.extend(true, kendo.spreadsheet.messages.view,{
  "errors": {
    "shiftingNonblankCells": "Adatveszt??s n??lk??l nem lehet a cell??kat besz??rni. V??lasszon m??sik besz??r??si poz??ci??t, vagy t??r??lje az adatokat a munkalap v??g??r??l.",
    "filterRangeContainingMerges": "Nem lehet sz??r??t k??sz??teni ??sszevon??sokat tartalmaz?? tartom??nyon bel??l",
    "validationError": "A be??rt ??rt??k megs??rti a cell??ra be??ll??tott adatellen??rz??si szab??lyokat."
  },
  "tabs": {
    "home": "Elej??re",
    "insert": "Besz??r??s",
    "data": "Adat"
  }
});
}

/* Slider messages */

if (kendo.ui.Slider) {
kendo.ui.Slider.prototype.options =
$.extend(true, kendo.ui.Slider.prototype.options,{
  "increaseButtonTitle": "N??vel??s",
  "decreaseButtonTitle": "Cs??kkent??s"
});
}

/* ListBox messaages */

if (kendo.ui.ListBox) {
kendo.ui.ListBox.prototype.options.messages =
$.extend(true, kendo.ui.ListBox.prototype.options.messages,{
  "tools": {
    "remove": "T??rl??s",
    "moveUp": "Mozgat??s felfel??",
    "moveDown": "Mozgat??s lefel??",
    "transferTo": "Felv??tel",
    "transferFrom": "Elt??vol??t??s",
    "transferAllTo": "??sszes felv??tele",
    "transferAllFrom": "??sszes elt??vol??t??sa"
  }
});
}

/* TreeList messages */

if (kendo.ui.TreeList) {
kendo.ui.TreeList.prototype.options.messages =
$.extend(true, kendo.ui.TreeList.prototype.options.messages,{
  "noRows": "Nincsenek megjelen??thet?? elemek",
  "loading": "Bet??lt??s...",
  "requestFailed": "A k??r??s sikertelen",
  "retry": "??jra",
  "commands": {
      "edit": "Szerkeszt??s",
      "update": "Friss??t??s",
      "canceledit": "M??gse",
      "create": "??j elem",
      "createchild": "Gyermekelem hozz??ad??sa",
      "destroy": "T??rl??s",
      "excel": "Export??l??s Excel-be",
      "pdf": "Export??l??s PDF-be"
  }
});
}

/* TreeView messages */

if (kendo.ui.TreeView) {
kendo.ui.TreeView.prototype.options.messages =
$.extend(true, kendo.ui.TreeView.prototype.options.messages,{
  "loading": "Bet??lt??s...",
  "requestFailed": "A k??r??s sikertelen",
  "retry": "??jra"
});
}

/* Upload messages */

if (kendo.ui.Upload) {
kendo.ui.Upload.prototype.options.localization=
$.extend(true, kendo.ui.Upload.prototype.options.localization,{
  "select": "V??laszt??s...",
  "cancel": "M??gse",
  "retry": "??jra",
  "remove": "Elt??vol??t??s",
  "clearSelectedFiles": "T??rl??s",
  "uploadSelectedFiles": "F??jlok felt??lt??se",
  "dropFilesHere": "H??zza ide a felt??ltend?? f??jlokat",
  "statusUploading": "felt??lt??s",
  "statusUploaded": "felt??ltve",
  "statusWarning": "figyelem",
  "statusFailed": "sikertelen",
  "headerStatusUploading": "Felt??lt??s...",
  "headerStatusUploaded": "K??sz",
  "invalidMaxFileSize": "A f??jl t??l nagy.",
  "invalidMinFileSize": "A f??jl t??l kicsi.",
  "invalidFileExtension": "A f??jlt??pus nem enged??lyezett."
});
}

/* Validator messages */

if (kendo.ui.Validator) {
kendo.ui.Validator.prototype.options.messages =
$.extend(true, kendo.ui.Validator.prototype.options.messages,{
  "required": "{0} sz??ks??ges",
  "pattern": "{0} ??rv??nytelen",
  "min": "{0} nagyobb vagy egyenl?? kell hogy legyen, mint {1}",
  "max": "{0} kisebb vagy egyenl?? kell hogy legyen, mint {1}",
  "step": "{0} ??rv??nytelen",
  "email": "{0} ??rv??nytelen email",
  "url": "{0} ??rv??nytelen URL",
  "date": "{0} ??rv??nytelen d??tum",
  "dateCompare": "A v??gd??tum nagyobb vagy egyenl?? kell hogy legyen, mint a kezd??d??tum"
});
}

/* kendo.ui.progress method */
if (kendo.ui.progress) {
kendo.ui.progress.messages =
$.extend(true, kendo.ui.progress.messages, {
    loading: "Bet??lt??s..."
});
}

/* Dialog */

if (kendo.ui.Dialog) {
kendo.ui.Dialog.prototype.options.messages =
$.extend(true, kendo.ui.Dialog.prototype.options.localization, {
  "close": "Bez??r??s"
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
$.extend(true, kendo.ui.Alert.prototype.options.localization, {
  "okText": "OK"
});
}

/* Confirm */

if (kendo.ui.Confirm) {
kendo.ui.Confirm.prototype.options.messages =
$.extend(true, kendo.ui.Confirm.prototype.options.localization, {
  "okText": "OK",
  "cancel": "M??gse"
});
}

/* Prompt */
if (kendo.ui.Prompt) {
kendo.ui.Prompt.prototype.options.messages =
$.extend(true, kendo.ui.Prompt.prototype.options.localization, {
  "okText": "OK",
  "cancel": "M??gse"
});
}

/* DateInput */
if (kendo.ui.DateInput) {
  kendo.ui.DateInput.prototype.options.messages =
    $.extend(true, kendo.ui.DateInput.prototype.options.messages, {
      "year": "??v",
      "month": "h??nap",
      "day": "nap",
      "weekday": "a h??t napja",
      "hour": "??r??k",
      "minute": "prcek",
      "second": "m??sodpercek",
      "dayperiod": "DE/DU"
    });
}

})(window.kendo.jQuery);
}));