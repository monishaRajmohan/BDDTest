$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "We are going to validate NTL Taxi Home Page.",
  "description": "",
  "id": "we-are-going-to-validate-ntl-taxi-home-page.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HomePage"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validate Home Page with valid data.",
  "description": "",
  "id": "we-are-going-to-validate-ntl-taxi-home-page.;validate-home-page-with-valid-data.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open Browser as \u003cBROWSER\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter URL as \u003cURL\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter UserName as \u003cNAME\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter MobileNO as \u003cMOBILE\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter PickupAdd as \u003cPICADD\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter DropAdd as \u003cDROPADD\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select the Vehicle Type as \u003cVTYPE\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Click the BookLater CheckBox",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Don\u0027t click Bookbutton",
  "keyword": "But "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "we-are-going-to-validate-ntl-taxi-home-page.;validate-home-page-with-valid-data.;",
  "rows": [
    {
      "cells": [
        "BROWSER",
        "URL",
        "NAME",
        "MOBILE",
        "PICADD",
        "DROPADD",
        "VTYPE"
      ],
      "line": 16,
      "id": "we-are-going-to-validate-ntl-taxi-home-page.;validate-home-page-with-valid-data.;;1"
    },
    {
      "cells": [
        "Firefox",
        "http://www.ntltaxi.com/",
        "vmetrya",
        "98798798",
        "ADYAR",
        "ADYAR",
        "Sedan"
      ],
      "line": 17,
      "id": "we-are-going-to-validate-ntl-taxi-home-page.;validate-home-page-with-valid-data.;;2"
    },
    {
      "cells": [
        "Firefox",
        "http://www.ntltaxi.com/",
        "vmetryb",
        "98798798",
        "ADYAR",
        "ADYAR",
        "Sedan"
      ],
      "line": 18,
      "id": "we-are-going-to-validate-ntl-taxi-home-page.;validate-home-page-with-valid-data.;;3"
    },
    {
      "cells": [
        "Firefox",
        "http://www.ntltaxi.com/",
        "vmetryc",
        "98798798",
        "ADYAR",
        "ADYAR",
        "Sedan"
      ],
      "line": 19,
      "id": "we-are-going-to-validate-ntl-taxi-home-page.;validate-home-page-with-valid-data.;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Validate Home Page with valid data.",
  "description": "",
  "id": "we-are-going-to-validate-ntl-taxi-home-page.;validate-home-page-with-valid-data.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@HomePage"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open Browser as Firefox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter URL as http://www.ntltaxi.com/",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter UserName as vmetrya",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter MobileNO as 98798798",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter PickupAdd as ADYAR",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter DropAdd as ADYAR",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select the Vehicle Type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Click the BookLater CheckBox",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Don\u0027t click Bookbutton",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.openBrowser(String)"
});
formatter.result({
  "duration": 6859477648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.enterURL(String)"
});
