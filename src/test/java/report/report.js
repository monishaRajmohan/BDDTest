$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("stepDefinition/Home.feature");
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
  "line": 3,
  "name": "Validate Home Page with valid data.",
  "description": "",
  "id": "we-are-going-to-validate-ntl-taxi-home-page.;validate-home-page-with-valid-data.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Browser as \u003cBROWSER\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as \u003cURL\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter UserName as \u003cNAME\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter MobileNO as \u003cNUMBER\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter PickupAdd as \u003cPICKUPADD\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter DropAdd as \u003cDROPADD\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select the Vehicle Type as \u003cVTYPE\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click the BookLater CheckBox",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Don\u0027t click Bookbutton",
  "keyword": "But "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "we-are-going-to-validate-ntl-taxi-home-page.;validate-home-page-with-valid-data.;",
  "rows": [
    {
      "cells": [
        "BROWSER",
        "URL",
        "NAME",
        "NUMBER",
        "PICKUPADD",
        "DROPADD",
        "VTYPE"
      ],
      "line": 14,
      "id": "we-are-going-to-validate-ntl-taxi-home-page.;validate-home-page-with-valid-data.;;1"
    },
    {
      "cells": [
        "Firefox",
        "URL1",
        "Name1",
        "Number1",
        "pickupadd1",
        "dropadd1",
        "vtype1"
      ],
      "line": 15,
      "id": "we-are-going-to-validate-ntl-taxi-home-page.;validate-home-page-with-valid-data.;;2"
    },
    {
      "cells": [
        "Chrome",
        "URL2",
        "Name2",
        "Number2",
        "pickupadd2",
        "dropadd2",
        "vtype2"
      ],
      "line": 16,
      "id": "we-are-going-to-validate-ntl-taxi-home-page.;validate-home-page-with-valid-data.;;3"
    },
    {
      "cells": [
        "Safari",
        "URL3",
        "Name3",
        "Number3",
        "pickupadd3",
        "dropadd3",
        "vtype3"
      ],
      "line": 17,
      "id": "we-are-going-to-validate-ntl-taxi-home-page.;validate-home-page-with-valid-data.;;4"
    },
    {
      "cells": [
        "IE",
        "URL4",
        "Name4",
        "Number4",
        "pickupadd4",
        "dropadd4",
        "vtype4"
      ],
      "line": 18,
      "id": "we-are-going-to-validate-ntl-taxi-home-page.;validate-home-page-with-valid-data.;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
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
  "line": 4,
  "name": "Open Browser as Firefox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as URL1",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter UserName as Name1",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter MobileNO as Number1",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter PickupAdd as pickupadd1",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter DropAdd as dropadd1",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select the Vehicle Type as vtype1",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click the BookLater CheckBox",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
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
  "duration": 118054851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "URL1",
      "offset": 13
    }
  ],
  "location": "HomePageTest.enterURL(String)"
});
formatter.result({
  "duration": 103451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name1",
      "offset": 18
    }
  ],
  "location": "HomePageTest.enterUserName(String)"
});
formatter.result({
  "duration": 125620,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number1",
      "offset": 18
    }
  ],
  "location": "HomePageTest.enterMobileNo(String)"
});
formatter.result({
  "duration": 147788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pickupadd1",
      "offset": 19
    }
  ],
  "location": "HomePageTest.enterPickupAdd(String)"
});
formatter.result({
  "duration": 123978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " dropadd1",
      "offset": 16
    }
  ],
  "location": "HomePageTest.enterDropAdd(String)"
});
formatter.result({
  "duration": 132598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " vtype1",
      "offset": 26
    }
  ],
  "location": "HomePageTest.selectVehicleType(String)"
});
formatter.result({
  "duration": 119051,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.ClickBookLater()"
});
formatter.result({
  "duration": 73893,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.DontclickBookbutton()"
});
formatter.result({
  "duration": 77178,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Validate Home Page with valid data.",
  "description": "",
  "id": "we-are-going-to-validate-ntl-taxi-home-page.;validate-home-page-with-valid-data.;;3",
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
  "line": 4,
  "name": "Open Browser as Chrome",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as URL2",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter UserName as Name2",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter MobileNO as Number2",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter PickupAdd as pickupadd2",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter DropAdd as dropadd2",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select the Vehicle Type as vtype2",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click the BookLater CheckBox",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Don\u0027t click Bookbutton",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 16
    }
  ],
  "location": "HomePageTest.openBrowser(String)"
});
formatter.result({
  "duration": 153125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "URL2",
      "offset": 13
    }
  ],
  "location": "HomePageTest.enterURL(String)"
});
formatter.result({
  "duration": 77178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name2",
      "offset": 18
    }
  ],
  "location": "HomePageTest.enterUserName(String)"
});
formatter.result({
  "duration": 80463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number2",
      "offset": 18
    }
  ],
  "location": "HomePageTest.enterMobileNo(String)"
});
formatter.result({
  "duration": 71841,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pickupadd2",
      "offset": 19
    }
  ],
  "location": "HomePageTest.enterPickupAdd(String)"
});
formatter.result({
  "duration": 92367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " dropadd2",
      "offset": 16
    }
  ],
  "location": "HomePageTest.enterDropAdd(String)"
});
formatter.result({
  "duration": 59936,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " vtype2",
      "offset": 26
    }
  ],
  "location": "HomePageTest.selectVehicleType(String)"
});
formatter.result({
  "duration": 64041,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.ClickBookLater()"
});
formatter.result({
  "duration": 35305,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.DontclickBookbutton()"
});
formatter.result({
  "duration": 39410,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Validate Home Page with valid data.",
  "description": "",
  "id": "we-are-going-to-validate-ntl-taxi-home-page.;validate-home-page-with-valid-data.;;4",
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
  "line": 4,
  "name": "Open Browser as Safari",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as URL3",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter UserName as Name3",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter MobileNO as Number3",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter PickupAdd as pickupadd3",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter DropAdd as dropadd3",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select the Vehicle Type as vtype3",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click the BookLater CheckBox",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Don\u0027t click Bookbutton",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Safari",
      "offset": 16
    }
  ],
  "location": "HomePageTest.openBrowser(String)"
});
formatter.result({
  "duration": 139577,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "URL3",
      "offset": 13
    }
  ],
  "location": "HomePageTest.enterURL(String)"
});
formatter.result({
  "duration": 82104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name3",
      "offset": 18
    }
  ],
  "location": "HomePageTest.enterUserName(String)"
});
formatter.result({
  "duration": 65683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number3",
      "offset": 18
    }
  ],
  "location": "HomePageTest.enterMobileNo(String)"
});
formatter.result({
  "duration": 66094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pickupadd3",
      "offset": 19
    }
  ],
  "location": "HomePageTest.enterPickupAdd(String)"
});
formatter.result({
  "duration": 64041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " dropadd3",
      "offset": 16
    }
  ],
  "location": "HomePageTest.enterDropAdd(String)"
});
formatter.result({
  "duration": 63220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " vtype3",
      "offset": 26
    }
  ],
  "location": "HomePageTest.selectVehicleType(String)"
});
formatter.result({
  "duration": 68147,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.ClickBookLater()"
});
formatter.result({
  "duration": 40641,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.DontclickBookbutton()"
});
formatter.result({
  "duration": 41052,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Validate Home Page with valid data.",
  "description": "",
  "id": "we-are-going-to-validate-ntl-taxi-home-page.;validate-home-page-with-valid-data.;;5",
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
  "line": 4,
  "name": "Open Browser as IE",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as URL4",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter UserName as Name4",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter MobileNO as Number4",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter PickupAdd as pickupadd4",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter DropAdd as dropadd4",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select the Vehicle Type as vtype4",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click the BookLater CheckBox",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Don\u0027t click Bookbutton",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "IE",
      "offset": 16
    }
  ],
  "location": "HomePageTest.openBrowser(String)"
});
formatter.result({
  "duration": 98525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "URL4",
      "offset": 13
    }
  ],
  "location": "HomePageTest.enterURL(String)"
});
formatter.result({
  "duration": 72663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name4",
      "offset": 18
    }
  ],
  "location": "HomePageTest.enterUserName(String)"
});
formatter.result({
  "duration": 71430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number4",
      "offset": 18
    }
  ],
  "location": "HomePageTest.enterMobileNo(String)"
});
formatter.result({
  "duration": 57883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pickupadd4",
      "offset": 19
    }
  ],
  "location": "HomePageTest.enterPickupAdd(String)"
});
formatter.result({
  "duration": 57883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " dropadd4",
      "offset": 16
    }
  ],
  "location": "HomePageTest.enterDropAdd(String)"
});
formatter.result({
  "duration": 57063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " vtype4",
      "offset": 26
    }
  ],
  "location": "HomePageTest.selectVehicleType(String)"
});
formatter.result({
  "duration": 58704,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.ClickBookLater()"
});
formatter.result({
  "duration": 33252,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.DontclickBookbutton()"
});
formatter.result({
  "duration": 40231,
  "status": "passed"
});
});