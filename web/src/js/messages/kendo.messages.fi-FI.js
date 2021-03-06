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
  "apply": "K??yt??",
  "cancel": "Peruuta"
});
}

/* ColorPicker messages */

if (kendo.ui.ColorPicker) {
kendo.ui.ColorPicker.prototype.options.messages =
$.extend(true, kendo.ui.ColorPicker.prototype.options.messages,{
  "apply": "K??yt??",
  "cancel": "Peruuta"
});
}

/* ColumnMenu messages */

if (kendo.ui.ColumnMenu) {
kendo.ui.ColumnMenu.prototype.options.messages =
$.extend(true, kendo.ui.ColumnMenu.prototype.options.messages,{
  "sortAscending": "Nouseva j??rjestys",
  "sortDescending": "Laskeva j??rjestys",
  "filter": "Suodata",
  "columns": "Sarakkeet",
  "done": "Valmis",
  "settings": "Sarakeasetukset",
  "lock": "Lukitse",
  "unlock": "Poista lukinta"
});
}

/* Editor messages */

if (kendo.ui.Editor) {
kendo.ui.Editor.prototype.options.messages =
$.extend(true, kendo.ui.Editor.prototype.options.messages,{
  "bold": "Lihavoitu",
  "italic": "Kursivoitu",
  "underline": "Alleviivattu",
  "strikethrough": "Yliviivaus",
  "superscript": "Yl??indeksi",
  "subscript": "Alaindeksi",
  "justifyCenter": "Keskit??",
  "justifyLeft": "Tasaa vasemmalle",
  "justifyRight": "Tasaa oikealle",
  "justifyFull": "Tasaa molemmat reunat",
  "insertUnorderedList": "Lis???? lista",
  "insertOrderedList": "Lis???? j??rjestetty lista",
  "indent": "Suurenna sisennyst??",
  "outdent": "Pienenn?? sisennyst??",
  "createLink": "Lis???? hyperlinkki",
  "unlink": "Poista hyperlinkki",
  "insertImage": "Lis???? kuva",
  "insertFile": "Lis???? tiedosto",
  "insertHtml": "Lis???? HTML",
  "viewHtml": "N??yt?? HTML",
  "fontName": "Valitse fontti",
  "fontNameInherit": "(peritty fontti)",
  "fontSize": "Valitse fontin koko",
  "fontSizeInherit": "(peritty koko)",
  "formatBlock": "Muotoilu",
  "formatting": "Muotoilu",
  "foreColor": "V??ri",
  "backColor": "Taustav??ri",
  "style": "Tyylit",
  "emptyFolder": "Tyhj?? kansio",
  "uploadFile": "Lataa palvelimeen",
  "orderBy": "J??rjestelyperuste:",
  "orderBySize": "Koko",
  "orderByName": "Nimi",
  "invalidFileType": "Tiedosto \"{0}\" ei kelpaa. Tuettuja tiedostomuotoja ovat {1}.",
  "deleteFile": "Haluatko varmasti poistaa tiedoston \"{0}\"?",
  "overwriteFile": "Tiedosto \"{0}\" on jo olemassa nykyisess?? hakemistossa. Haluatko ylikirjoittaa tiedoston?",
  "directoryNotFound": "Halutun nimist?? hakemistoa ei l??ytynyt.",
  "imageWebAddress": "WWW-osoite",
  "imageAltText": "Vaihtoehtokuvaus",
  "imageWidth": "Leveys (px)",
  "imageHeight": "Korkeus (px)",
  "fileWebAddress": "WWW-osoite",
  "fileTitle": "Otsikko",
  "linkWebAddress": "WWW-osoite",
  "linkText": "Teksti",
  "linkToolTip": "Vihjeteksti",
  "linkOpenInNewWindow": "Avaa linkki uudessa ikkunassa",
  "dialogUpdate": "P??ivit??",
  "dialogInsert": "Lis????",
  "dialogButtonSeparator": "tai",
  "dialogCancel": "Peruuta",
  "createTable": "Lis???? taulukko",
  "addColumnLeft": "Lis???? sarake vasemmalle",
  "addColumnRight": "Lis???? sarake oikealle",
  "addRowAbove": "Lis???? rivi yl??puolelle",
  "addRowBelow": "Lis???? rivi alapuolelle",
  "deleteRow": "Poista rivi",
  "deleteColumn": "Poista sarake"
});
}

/* FileBrowser messages */

if (kendo.ui.FileBrowser) {
kendo.ui.FileBrowser.prototype.options.messages =
$.extend(true, kendo.ui.FileBrowser.prototype.options.messages,{
  "uploadFile": "Lataa palvelimeen",
  "orderBy": "J??rjestelyperuste",
  "orderByName": "Nimi",
  "orderBySize": "Koko",
  "directoryNotFound": "Halutun nimist?? hakemistoa ei l??ytynyt.",
  "emptyFolder": "Tyhj?? kansio",
  "deleteFile": "Haluatko varmasti poistaa tiedoston \"{0}\"?",
  "invalidFileType": "Tiedosto \"{0}\" ei kelpaa. Tuettuja tiedostomuotoja ovat {1}.",
  "overwriteFile": "Tiedosto \"{0}\" on jo olemassa nykyisess?? hakemistossa. Haluatko ylikirjoittaa tiedoston?",
  "dropFilesHere": "pudota tiedosto t??h??n ladataksesi palvelimeen",
  "search": "Hae"
});
}

/* FilterCell messages */

if (kendo.ui.FilterCell) {
kendo.ui.FilterCell.prototype.options.messages =
$.extend(true, kendo.ui.FilterCell.prototype.options.messages,{
  "isTrue": "on",
  "isFalse": "ei ole",
  "filter": "Suodata",
  "clear": "Tyhjenn??",
  "operator": "Operaattori"
});
}

/* FilterCell operators */

if (kendo.ui.FilterCell) {
kendo.ui.FilterCell.prototype.options.operators =
$.extend(true, kendo.ui.FilterCell.prototype.options.operators,{
  "string": {
    "eq": "On",
    "neq": "Ei ole",
    "startswith": "Alkaa",
    "contains": "Sis??lt????",
    "doesnotcontain": "Ei sis??ll??",
    "endswith": "Loppuu"
  },
  "number": {
    "eq": "On",
    "neq": "Ei ole",
    "gte": "On tasan tai suurempi kuin",
    "gt": "On suurempi kuin",
    "lte": "On tasan tai pienempi kuin",
    "lt": "On pienempi kuin"
  },
  "date": {
    "eq": "On",
    "neq": "Ei ole",
    "gte": "On tasan tai my??hempi kuin",
    "gt": "On my??hempi kuin",
    "lte": "On tasan tai aikaisempi kuin",
    "lt": "On aikaisempi kuin"
  },
  "enums": {
    "eq": "On",
    "neq": "Ei ole"
  }
});
}

/* FilterMenu messages */

if (kendo.ui.FilterMenu) {
kendo.ui.FilterMenu.prototype.options.messages =
$.extend(true, kendo.ui.FilterMenu.prototype.options.messages,{
  "info": "N??yt?? tulokset, joiden arvo:",
  "title": "N??yt?? tulokset, joiden arvo",
  "isTrue": "on",
  "isFalse": "ei ole",
  "filter": "Suodata",
  "clear": "Tyhjenn??",
  "and": "Ja",
  "or": "Tai",
  "selectValue": "-Valitse arvo-",
  "operator": "Operaattori",
  "value": "Arvo",
  "cancel": "Peruuta"
});
}

/* FilterMenu operator messages */

if (kendo.ui.FilterMenu) {
kendo.ui.FilterMenu.prototype.options.operators =
$.extend(true, kendo.ui.FilterMenu.prototype.options.operators,{
  "string": {
    "eq": "On",
    "neq": "Ei ole",
    "startswith": "Alkaa",
    "contains": "Sis??lt????",
    "doesnotcontain": "Ei sis??ll??",
    "endswith": "Loppuu"
  },
  "number": {
    "eq": "On",
    "neq": "Ei ole",
    "gte": "On tasan tai suurempi kuin",
    "gt": "On suurempi kuin",
    "lte": "On tasan tai pienempi kuin",
    "lt": "On pienempi kuin"
  },
  "date": {
    "eq": "On",
    "neq": "Ei ole",
    "gte": "On tasan tai my??hempi kuin",
    "gt": "On my??hempi kuin",
    "lte": "On tasan tai aikaisempi kuin",
    "lt": "On aikaisempi kuin"
  },
  "enums": {
    "eq": "On",
    "neq": "Ei ole"
  }
});
}

/* FilterMultiCheck messages */

if (kendo.ui.FilterMultiCheck) {
kendo.ui.FilterMultiCheck.prototype.options.messages =
$.extend(true, kendo.ui.FilterMultiCheck.prototype.options.messages,{
  "checkAll": "Valitse kaikki",
  "clear": "Tyhjenn??",
  "filter": "Suodatus",
  "search": "Hae"
});
}

/* Gantt messages */

if (kendo.ui.Gantt) {
kendo.ui.Gantt.prototype.options.messages =
$.extend(true, kendo.ui.Gantt.prototype.options.messages,{
  "actions": {
    "addChild": "Lis???? lapsi",
    "append": "Lis???? teht??v??",
    "insertAfter": "Lis???? alapuolelle",
    "insertBefore": "Lis???? yl??puolelle",
    "pdf": "Vie PDF"
  },
  "cancel": "Peruuta",
  "deleteDependencyWindowTitle": "Poista riippuvuus",
  "deleteTaskWindowTitle": "Poista teht??v??",
  "destroy": "Poista",
  "editor": {
    "assingButton": "Vastuuta",
    "editorTitle": "Teht??v??",
    "end": "Loppu",
    "percentComplete": "Valmis",
    "resources": "Resurssit",
    "resourcesEditorTitle": "Resurssit",
    "resourcesHeader": "Resurssit",
    "start": "Alku",
    "title": "Otsikko",
    "unitsHeader": "Yksik??t"
  },
  "save": "Tallenna",
  "views": {
    "day": "P??iv??",
    "end": "Loppu",
    "month": "Kuukausi",
    "start": "Alku",
    "week": "Viikko",
    "year": "Vuosi"
  }
});
}

/* Grid messages */

if (kendo.ui.Grid) {
kendo.ui.Grid.prototype.options.messages =
$.extend(true, kendo.ui.Grid.prototype.options.messages,{
  "commands": {
    "cancel": "Peruuta muutokset",
    "canceledit": "Peruuta",
    "create": "Lis???? uusi tietue",
    "destroy": "Poista",
    "edit": "Muokkaa",
    "excel": "Vie Exceliin",
    "pdf": "Vie PDF",
    "save": "Tallenna muutokset",
    "select": "Valitse",
    "update": "P??ivit??"
  },
  "editable": {
    "cancelDelete": "Peruuta",
    "confirmation": "Haluatko varmasti poistaa tietueen?",
    "confirmDelete": "Poista"
  },
  "noRecords": "Ei tietueita."
});
}

/* Groupable messages */

if (kendo.ui.Groupable) {
kendo.ui.Groupable.prototype.options.messages =
$.extend(true, kendo.ui.Groupable.prototype.options.messages,{
  "empty": "Ved?? sarakeotsikko t??h??n ryhmitell??ksesi sarakkeen perusteella"
});
}

/* NumericTextBox messages */

if (kendo.ui.NumericTextBox) {
kendo.ui.NumericTextBox.prototype.options =
$.extend(true, kendo.ui.NumericTextBox.prototype.options,{
  "upArrowText": "Kasvata arvoa",
  "downArrowText": "V??henn?? arvoa"
});
}

/* Pager messages */

if (kendo.ui.Pager) {
kendo.ui.Pager.prototype.options.messages =
$.extend(true, kendo.ui.Pager.prototype.options.messages,{
  "allPages": "Kaikki",
  "display": "{0} - {1} yht. {2} tuloksesta",
  "empty": "Ei tuloksia",
  "page": "Sivu",
  "of": "/ {0}",
  "itemsPerPage": "tulosta sivulla",
  "first": "Ensimm??inen sivu",
  "previous": "Edellinen sivu",
  "next": "Seuraava sivu",
  "last": "Viimeinen sivu",
  "refresh": "P??ivit??",
  "morePages": "Lis???? sivuja"
});
}

/* TreeListPager messages */

if (kendo.ui.TreeListPager) {
kendo.ui.TreeListPager.prototype.options.messages =
$.extend(true, kendo.ui.TreeListPager.prototype.options.messages,{
  "allPages": "Kaikki",
  "display": "{0} - {1} yht. {2} tuloksesta",
  "empty": "Ei tuloksia",
  "page": "Sivu",
  "of": "/ {0}",
  "itemsPerPage": "tulosta sivulla",
  "first": "Ensimm??inen sivu",
  "previous": "Edellinen sivu",
  "next": "Seuraava sivu",
  "last": "Viimeinen sivu",
  "refresh": "P??ivit??",
  "morePages": "Lis???? sivuja"
});
}

/* PivotGrid messages */

if (kendo.ui.PivotGrid) {
kendo.ui.PivotGrid.prototype.options.messages =
$.extend(true, kendo.ui.PivotGrid.prototype.options.messages,{
  "measureFields": "Pudota datakent??t t??h??n",
  "columnFields": "Pudota sarakkeet t??h??n",
  "rowFields": "Pudota rivit t??h??n"
});
}

/* PivotFieldMenu messages */

if (kendo.ui.PivotFieldMenu) {
kendo.ui.PivotFieldMenu.prototype.options.messages =
$.extend(true, kendo.ui.PivotFieldMenu.prototype.options.messages,{
  "info": "N??yt?? tulokset, joiden arvo:",
  "filterFields": "Kenttien suodatus",
  "filter": "Suodata",
  "include": "Sis??llyt?? kent??t...",
  "title": "Sis??llytett??v??t kent??t",
  "clear": "Tyhjenn??",
  "ok": "Ok",
  "cancel": "Peruuta",
  "operators": {
    "contains": "Sis??lt????",
    "doesnotcontain": "Ei sis??ll??",
    "startswith": "Alkaa",
    "endswith": "Loppuu",
    "eq": "On",
    "neq": "Ei ole"
  }
});
}

/* RecurrenceEditor messages */

if (kendo.ui.RecurrenceEditor) {
kendo.ui.RecurrenceEditor.prototype.options.messages =
$.extend(true, kendo.ui.RecurrenceEditor.prototype.options.messages,{
  "frequencies": {
    "never": "Ei koskaan",
    "hourly": "Joka tunti",
    "daily": "P??ivitt??in",
    "weekly": "Viikoittain",
    "monthly": "Joka kuukausi",
    "yearly": "Joka vuosi"
  },
  "hourly": {
    "repeatEvery": "Toista joka: ",
    "interval": " tunti"
  },
  "daily": {
    "repeatEvery": "Toista joka: ",
    "interval": " p??iv??"
  },
  "weekly": {
    "interval": " viikko",
    "repeatEvery": "Toista joka: ",
    "repeatOn": "Toista t??ll??in: "
  },
  "monthly": {
    "repeatEvery": "Toista joka: ",
    "repeatOn": "Toista t??ll??in: ",
    "interval": " kuukausi",
    "day": "P??iv?? "
  },
  "yearly": {
    "repeatEvery": "Toista joka: ",
    "repeatOn": "Toista t??ll??in: ",
    "interval": " vuosi",
    "of": " kk: "
  },
  "end": {
    "label": "Loppu:",
    "mobileLabel": "Loppuu",
    "never": "Ei koskaan",
    "after": "Kun toistettu ",
    "occurrence": " kertaa",
    "on": "Tarkka pvm "
  },
  "offsetPositions": {
    "first": "ensimm??inen",
    "second": "toinen",
    "third": "kolmas",
    "fourth": "nelj??s",
    "last": "viimeinen"
  },
  "weekdays": {
    "day": "p??iv??",
    "weekday": "arkip??iv??",
    "weekend": "viikonloppu"
  }
});
}

/* Scheduler messages */

if (kendo.ui.Scheduler) {
kendo.ui.Scheduler.prototype.options.messages =
$.extend(true, kendo.ui.Scheduler.prototype.options.messages,{
  "allDay": "koko p??iv??",
  "date": "P??iv??m????r??",
  "event": "Tapahtuma",
  "time": "Kellonaika",
  "showFullDay": "N??yt?? koko p??iv??",
  "showWorkDay": "N??yt?? virka-aika",
  "today": "T??n????n",
  "save": "Tallenna",
  "cancel": "Peruuta",
  "destroy": "Poista",
  "deleteWindowTitle": "Poista tapahtuma",
  "ariaSlotLabel": "Valittuna {0:t} - {1:t}",
  "ariaEventLabel": "{0} {1:D} klo {2:t}",
  "editable": {
    "confirmation": "Haluatko varmasti poistaa tapahtuman?"
  },
  "views": {
    "day": "P??iv??",
    "week": "Viikko",
    "workWeek": "Ty??viikko",
    "agenda": "Agenda",
    "month": "Kuukausi"
  },
  "recurrenceMessages": {
    "deleteWindowTitle": "Poista toistuva tapahtuma",
    "deleteWindowOccurrence": "Poista vain t??m?? tapahtuma",
    "deleteWindowSeries": "Poista kaikki tapahtumat",
    "editWindowTitle": "Muokkaa toistuvaa tapahtumaa",
    "editWindowOccurrence": "Muokkaa vain t??t?? tapahtumaa",
    "editWindowSeries": "Muokkaa kaikkia tapahtumia",
    "deleteRecurring": "Haluatko poistaa vain t??m??n tapahtuman, vai koko sarjan?",
    "editRecurring": "Haluatko muokata vain t??t?? tapahtumaa, vai koko sarjaa?"
  },
  "editor": {
    "title": "Otsikko",
    "start": "Alku",
    "end": "Loppu",
    "allDayEvent": "Koko p??iv??n tapahtuma",
    "description": "Kuvaus",
    "repeat": "Toistuminen",
    "timezone": " ",
    "startTimezone": "Alkamisen aikavy??hyke",
    "endTimezone": "Loppumisen aikavy??hyke",
    "separateTimezones": "Eri aikavy??hykkeet alkamiselle ja loppumiselle",
    "timezoneEditorTitle": "Aikavy??hykkeet",
    "timezoneEditorButton": "Aikavy??hyke",
    "timezoneTitle": "Aikavy??hykkeet",
    "noTimezone": "Ei aikavy??hykett??",
    "editorTitle": "Tapahtuma"
  }
});
}

/* Spreadsheet messages */

if (kendo.spreadsheet && kendo.spreadsheet.messages.borderPalette) {
kendo.spreadsheet.messages.borderPalette =
$.extend(true, kendo.spreadsheet.messages.borderPalette,{
  "allBorders": "Kaikki reunat",
  "insideBorders": "Sis??reunat",
  "insideHorizontalBorders": "Vaakasuora sis??reuna",
  "insideVerticalBorders": "Pystysuora sis??reuna",
  "outsideBorders": "Ulkoreunat",
  "leftBorder": "Vasen reuna",
  "topBorder": "Yl??reuna",
  "rightBorder": "Oikea reuna",
  "bottomBorder": "Alareuna",
  "noBorders": "Ei reunaviivaa"
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.dialogs) {
kendo.spreadsheet.messages.dialogs =
$.extend(true, kendo.spreadsheet.messages.dialogs,{
  "apply": "K??yt??",
  "save": "Tallenna",
  "cancel": "Peruuta",
  "remove": "Poista",
  "okText": "OK",
  "formatCellsDialog": {
    "title": "Muotoilu",
    "categories": {
      "number": "Numero",
      "currency": "Valuutta",
      "date": "P??iv??m????r??"
      }
  },
  "fontFamilyDialog": {
    "title": "Fontti"
  },
  "fontSizeDialog": {
    "title": "Fonttikoko"
  },
  "bordersDialog": {
    "title": "Reunaviivat"
  },
  "alignmentDialog": {
    "title": "Asemointi",
    "buttons": {
     "justtifyLeft": "Tasaa vasemmalle",
     "justifyCenter": "Keskit??",
     "justifyRight": "Tasaa oikealle",
     "justifyFull": "Tasaa molemmat reunat",
     "alignTop": "Tasaa yl??s",
     "alignMiddle": "Tasaa keskelle",
     "alignBottom": "Tasaa alas"
    }
  },
  "mergeDialog": {
    "title": "Yhdist?? solut",
    "buttons": {
      "mergeCells": "Yhdist?? kaikki",
      "mergeHorizontally": "Yhdist?? vaakasolut",
      "mergeVertically": "Yhdist?? pystysolut",
      "unmerge": "Poista solujen yhdist??minen"
    }
  },
  "freezeDialog": {
    "title": "Kiinnit?? ruudut",
    "buttons": {
      "freezePanes": "Kiinnit?? ruudut",
      "freezeRows": "Kiinnit?? rivit",
      "freezeColumns": "Kiinnit?? sarakkeet",
      "unfreeze": "Vapauta ruudut"
    }
  },
  "validationDialog": {
    "title": "Datan validointi",
    "hintMessage": "Anna kelvollinen arvo tyyppi?? \"{0}\" kohtaan {1}.",
    "hintTitle": "Validointi {0}",
    "criteria": {
      "any": "Mik?? tahansa",
      "number": "Numero",
      "text": "Teksti",
      "date": "P??iv??m????r??",
      "custom": "Mukautettu ehto"
    },
    "comparers": {
      "greaterThan": "suurempi kuin",
      "lessThan": "pienempi kuin",
      "between": "v??lilt??",
      "notBetween": "ei v??lilt??",
      "equalTo": "tasan",
      "notEqualTo": "eri kuin",
      "greaterThanOrEqualTo": "tasan tai suurempi kuin",
      "lessThanOrEqualTo": "tasan tai pienempi kuin"
    },
    "comparerMessages": {
      "greaterThan": "suurempi kuin {0}",
      "lessThan": "pienempi kuin {0}",
      "between": "v??lilt?? {0} ja {1}",
      "notBetween": "ei v??lilt?? {0} ja {1}",
      "equalTo": "tasan {0}",
      "notEqualTo": "eri kuin {0}",
      "greaterThanOrEqualTo": "tasan tai suurempi kuin {0}",
      "lessThanOrEqualTo": "tasan tai pienempi kuin {0}",
      "custom": "joka t??ytt???? ehdon: {0}"
    },
    "labels": {
      "criteria": "Kriteeri",
      "comparer": "Vertailu",
      "min": "Min",
      "max": "Max",
      "value": "Arvo",
      "start": "Alku",
      "end": "Loppu",
      "onInvalidData": "Ep??kelvot arvot",
      "rejectInput": "Hylk???? arvo",
      "showWarning": "N??yt?? varoitus",
      "showHint": "N??yt?? vihje",
      "hintTitle": "Vihjeen otsikko",
      "hintMessage": "Vihjeteksti"
    },
    "placeholders": {
      "typeTitle": "Tyypin otsikko",
      "typeMessage": "Tyypin viesti"
    }
  },
  "exportAsDialog": {
    "title": "Tallenna nimell??...",
    "labels": {
      "fileName": "Tiedostonimi",
      "saveAsType": "Tiedoston tyyppi"
    }
  },
  "modifyMergedDialog": {
    "errorMessage": "Yhdistetyn solun osaa ei voi muuttaa."
  },
  "useKeyboardDialog": {
    "title": "Kopiointi ja liitt??minen",
    "errorMessage": "N??it?? toimintoja ei voi k??ytt???? valikosta. K??yt?? n??pp??inoikoteit??:",
    "labels": {
      "forCopy": "kopioidaksesi",
      "forCut": "leikataksesi",
      "forPaste": "liitt????ksesi"
    }
  },
  "unsupportedSelectionDialog": {
    "errorMessage": "Toimintoa ei voi suorittaa useille kohteille."
  }
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.filterMenu) {
kendo.spreadsheet.messages.filterMenu =
$.extend(true, kendo.spreadsheet.messages.filterMenu,{
  "sortAscending": "Lajittele A - ??",
  "sortDescending": "Lajittele ?? - A",
  "filterByValue": "Suodata arvon perusteella",
  "filterByCondition": "Suodata ehdon perusteella",
  "apply": "K??yt??",
  "search": "Hae",
  "clear": "Tyhjenn??",
  "blanks": "(Tyhj??t)",
  "operatorNone": "Ei mit????n",
  "and": "JA",
  "or": "TAI",
  "operators": {
    "string": {
      "contains": "Teksti sis??lt????",
      "doesnotcontain": "Teksti ei sis??ll??",
      "startswith": "Teksti alkaa",
      "endswith": "Teksti loppuu"
    },
    "date": {
      "eq":  "P??iv??m????r?? on",
      "neq": "P??iv??m????r?? ei ole",
      "lt":  "P??iv??m????r?? on aiemmin kuin",
      "gt":  "P??iv??m????r?? on my??hemmin kuin"
    },
    "number": {
      "eq": "On",
      "neq": "Ei ole",
      "gte": "On tasan tai suurempi kuin",
      "gt": "On suurempi kuin",
      "lte": "On tasan tai pienempi kuin",
      "lt": "On pienempi kuin"
    }
  }
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.toolbar) {
kendo.spreadsheet.messages.toolbar =
$.extend(true, kendo.spreadsheet.messages.toolbar,{
  "addColumnLeft": "Lis???? sarake vasemmalle",
  "addColumnRight": "Lis???? sarake vasemmalle",
  "addRowAbove": "Lis???? rivi yl??puolelle",
  "addRowBelow": "Lis???? rivi alapuolelle",
  "alignment": "Alignment",
  "alignmentButtons": {
    "justtifyLeft": "Tasaa vasemmalle",
    "justifyCenter": "Keskit??",
    "justifyRight": "Tasaa oikealle",
    "justifyFull": "Tasaa molemmat reunat",
    "alignTop": "Tasaa yl??s",
    "alignMiddle": "Tasaa keskelle",
    "alignBottom": "Tasaa alas"
  },
  "backgroundColor": "Taustav??ri",
  "bold": "Lihavoitu",
  "borders": "Reunaviivat",
  "copy": "Kopioi",
  "cut": "Leikkaa",
  "deleteColumn": "Poista sarake",
  "deleteRow": "Poista rivi",
  "excelExport": "Vie Exceliin...",
  "filter": "Suodata",
  "fontFamily": "Fontti",
  "fontSize": "Fonttikoko",
  "format": "Mukautettu muotoilu...",
  "formatTypes": {
    "automatic": "Automaattinen",
    "number": "Numero",
    "percent": "Prosenttimuoto",
    "financial": "Kirjanpidon lukumuoto",
    "currency": "Valuutta",
    "date": "P??iv??m????r??",
    "time": "Kellonaika",
    "dateTime": "Pvm ja klo",
    "duration": "Kesto",
    "moreFormats": "Lis???? muotoiluja..."
  },
  "formatDecreaseDecimal": "V??henn?? desimaaleja",
  "formatIncreaseDecimal": "Lis???? desimaaleja",
  "freeze": "Kiinnit?? ruudut",
  "freezeButtons": {
    "freezePanes": "Kiinnit?? ruudut",
    "freezeRows": "Kiinnit?? rivit",
    "freezeColumns": "Kiinnit?? sarakkeet",
    "unfreeze": "Vapauta ruudut"
  },
  "italic": "Kursivoitu",
  "merge": "Yhdist?? solut",
  "mergeButtons": {
    "mergeCells": "Yhdist?? kaikki",
    "mergeHorizontally": "Yhdist?? vaakasolu",
    "mergeVertically": "Yhdist?? pystysolut",
    "unmerge": "Poista solujen yhdist??minen"
  },
  "open": "Avaa...",
  "paste": "Liit??",
  "quickAccess": {
    "redo": "Tee uudelleen",
    "undo": "Kumoa"
  },
  "saveAs": "Tallenna nimell??...",
  "sortAsc": "Nouseva j??rjestys",
  "sortDesc": "Laskeva j??rjestys",
  "sortButtons": {
    "sortSheetAsc": "J??rjest?? ty??kirja A - ??",
    "sortSheetDesc": "J??rjest?? ty??kirja ?? - A",
    "sortRangeAsc": "J??rjest?? valinta A - ??",
    "sortRangeDesc": "J??rjest?? valinta ?? - A"
  },
  "textColor": "Tekstin v??ri",
  "textWrap": "Tekstin rivitys",
  "underline": "Alleviivattu",
  "validation": "Datan validointi..."
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.view) {
kendo.spreadsheet.messages.view =
$.extend(true, kendo.spreadsheet.messages.view,{
  "errors": {
    "shiftingNonblankCells": "Soluja ei voi lis??t?? datah??vikin vuoksi. Valitse toinen lis??yskohta tai poista tietoja ty??kirjan lopusta.",
    "filterRangeContainingMerges": "Suodatinta ei voi asettaa yhdistettyyn sis??lt????n."
  },
  "tabs": {
    "home": "Aloitus",
    "insert": "Lis????",
    "data": "Data"
  }
});
}

/* Slider messages */

if (kendo.ui.Slider) {
kendo.ui.Slider.prototype.options =
$.extend(true, kendo.ui.Slider.prototype.options,{
  "increaseButtonTitle": "Lis????",
  "decreaseButtonTitle": "V??henn??"
});
}

/* TreeList messages */

if (kendo.ui.TreeList) {
kendo.ui.TreeList.prototype.options.messages =
$.extend(true, kendo.ui.TreeList.prototype.options.messages,{
  "noRows": "Ei tuloksia",
  "loading": "Ladataan...",
  "requestFailed": "Sivupyynt?? ep??onnistui.",
  "retry": "Yrit?? uudelleen",
  "commands": {
      "edit": "Muokkaa",
      "update": "P??ivit??",
      "canceledit": "Peruuta",
      "create": "Lis???? uusi tietue",
      "createchild": "Lis???? lapsitietue",
      "destroy": "Poista",
      "excel": "Vie Exceliin",
      "pdf": "Vie PDF"
  }
});
}

/* TreeView messages */

if (kendo.ui.TreeView) {
kendo.ui.TreeView.prototype.options.messages =
$.extend(true, kendo.ui.TreeView.prototype.options.messages,{
  "loading": "Ladataan...",
  "requestFailed": "Sivupyynt?? ep??onnistui.",
  "retry": "Yrit?? uudelleen"
});
}

/* Upload messages */

if (kendo.ui.Upload) {
kendo.ui.Upload.prototype.options.localization=
$.extend(true, kendo.ui.Upload.prototype.options.localization,{
  "select": "Valitse tiedostoja...",
  "cancel": "Peruuta",
  "retry": "Yrit?? uudelleen",
  "remove": "Poista",
  "uploadSelectedFiles": "Lataa tiedostot palvelimeen",
  "dropFilesHere": "pudota tiedostot t??h??n ladataksesi palvelimeen",
  "statusUploading": "ladataan",
  "statusUploaded": "ladattu",
  "statusWarning": "varoitus",
  "statusFailed": "ep??onnistui",
  "headerStatusUploading": "Ladataan...",
  "headerStatusUploaded": "Valmis"
});
}

/* Validator messages */

if (kendo.ui.Validator) {
kendo.ui.Validator.prototype.options.messages =
$.extend(true, kendo.ui.Validator.prototype.options.messages,{
  "required": "{0} vaaditaan",
  "pattern": "{0} ei kelpaa",
  "min": "{0} on oltava tasan tai suurempi kuin {1}",
  "max": "{0} on oltava tasan tai pienempi kuin {1}",
  "step": "{0} ei kelpaa",
  "email": "{0} ei ole kelvollinen s??hk??postiosoite",
  "url": "{0} ei ole kelvollinen URL",
  "date": "{0} ei ole kelvollinen p??iv??m????r??",
  "dateCompare": "Loppup??iv??m????r??n on oltava sama tai my??h??isempi kuin alkup??iv??m????r??"
});
}

/* Dialog */

if (kendo.ui.Dialog) {
kendo.ui.Dialog.prototype.options.messages =
$.extend(true, kendo.ui.Dialog.prototype.options.localization, {
  "close": "Sulkea"
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
  "cancel": "Peruuta"
});
}

/* Prompt */
if (kendo.ui.Prompt) {
kendo.ui.Prompt.prototype.options.messages =
$.extend(true, kendo.ui.Prompt.prototype.options.localization, {
  "okText": "OK",
  "cancel": "Peruuta"
});
}

})(window.kendo.jQuery);
}));