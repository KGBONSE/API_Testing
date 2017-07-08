$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("vehicleRegDataDriven.feature");
formatter.feature({
  "line": 1,
  "name": "Verifying vehicle registration details",
  "description": "As a user\nI want to be able to navigate to the vehicle regisstration page\nSo I can use the vehicle registration to verify the make and colour of a vehicle",
  "id": "verifying-vehicle-registration-details",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5650054786,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I have vehicle registrations in a file of type \"CSV\" with filename \"vr.csv\" including corresponding expected make and colour",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "CSV",
      "offset": 48
    },
    {
      "val": "vr.csv",
      "offset": 68
    }
  ],
  "location": "vehicleRegTest.i_have_vehicle_registrations_in_a_file_of_type_with_filename_including_corresponding_expected_make_and_colour(String,String)"
});
formatter.result({
  "duration": 158689761,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Should verify vehicle registrations  make and colour",
  "description": "",
  "id": "verifying-vehicle-registration-details;should-verify-vehicle-registrations--make-and-colour",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I choose to verify the registrations with the dlva",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "there should be no errors",
  "keyword": "Then "
});
formatter.match({
  "location": "vehicleRegTest.i_choose_to_verify_the_registrations_with_the_dlva()"
});
formatter.result({
  "duration": 4438309204,
  "status": "passed"
});
formatter.match({
  "location": "vehicleRegTest.there_should_be_no_errors()"
});
formatter.result({
  "duration": 65231,
  "status": "passed"
});
formatter.uri("vehicleRegDetails.feature");
formatter.feature({
  "line": 1,
  "name": "Verifying vehicle registration details",
  "description": "As a user\nI want to be able to navigate to the vehicle regisstration page\nSo I can use the vehicle registration to verify the make and colour of a vehicle",
  "id": "verifying-vehicle-registration-details",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Should verify make and colour of vehicles",
  "description": "",
  "id": "verifying-vehicle-registration-details;should-verify-make-and-colour-of-vehicles",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the vehicle registration home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter my registration details as \"\u003cvehicleReg\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "The colour is \"\u003ccolour\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The make is \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "verifying-vehicle-registration-details;should-verify-make-and-colour-of-vehicles;",
  "rows": [
    {
      "cells": [
        "vehicleReg",
        "colour",
        "make"
      ],
      "line": 13,
      "id": "verifying-vehicle-registration-details;should-verify-make-and-colour-of-vehicles;;1"
    },
    {
      "cells": [
        "LS05FXG",
        "Black",
        "Volkswagen"
      ],
      "line": 14,
      "id": "verifying-vehicle-registration-details;should-verify-make-and-colour-of-vehicles;;2"
    },
    {
      "cells": [
        "GY06FLE",
        "Blue",
        "Mercedes"
      ],
      "line": 15,
      "id": "verifying-vehicle-registration-details;should-verify-make-and-colour-of-vehicles;;3"
    },
    {
      "cells": [
        "HY08VGJ",
        "Black",
        "Ford"
      ],
      "line": 16,
      "id": "verifying-vehicle-registration-details;should-verify-make-and-colour-of-vehicles;;4"
    },
    {
      "cells": [
        "LT09UEL",
        "Silver",
        "Ford"
      ],
      "line": 17,
      "id": "verifying-vehicle-registration-details;should-verify-make-and-colour-of-vehicles;;5"
    },
    {
      "cells": [
        "VE10TKY",
        "Grey",
        "Volkswagen"
      ],
      "line": 18,
      "id": "verifying-vehicle-registration-details;should-verify-make-and-colour-of-vehicles;;6"
    },
    {
      "cells": [
        "LS06FXH",
        "Silver",
        "Toyota"
      ],
      "line": 19,
      "id": "verifying-vehicle-registration-details;should-verify-make-and-colour-of-vehicles;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2033760294,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Should verify make and colour of vehicles",
  "description": "",
  "id": "verifying-vehicle-registration-details;should-verify-make-and-colour-of-vehicles;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the vehicle registration home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter my registration details as \"LS05FXG\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "The colour is \"Black\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The make is \"Volkswagen\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "vehicleRegTest.i_am_on_the_vehicle_registration_home_page()"
});
formatter.result({
  "duration": 4675733931,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LS05FXG",
      "offset": 36
    }
  ],
  "location": "vehicleRegTest.i_enter_my_registration_details_as(String)"
});
formatter.result({
  "duration": 911755490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Black",
      "offset": 15
    }
  ],
  "location": "vehicleRegTest.the_colour_is(String)"
});
formatter.result({
  "duration": 124374243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volkswagen",
      "offset": 13
    }
  ],
  "location": "vehicleRegTest.the_make_is(String)"
});
formatter.result({
  "duration": 43803579,
  "status": "passed"
});
formatter.before({
  "duration": 2079250319,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Should verify make and colour of vehicles",
  "description": "",
  "id": "verifying-vehicle-registration-details;should-verify-make-and-colour-of-vehicles;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the vehicle registration home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter my registration details as \"GY06FLE\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "The colour is \"Blue\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The make is \"Mercedes\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "vehicleRegTest.i_am_on_the_vehicle_registration_home_page()"
});
formatter.result({
  "duration": 2599651695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GY06FLE",
      "offset": 36
    }
  ],
  "location": "vehicleRegTest.i_enter_my_registration_details_as(String)"
});
formatter.result({
  "duration": 901997221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 15
    }
  ],
  "location": "vehicleRegTest.the_colour_is(String)"
});
formatter.result({
  "duration": 172460533,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mercedes",
      "offset": 13
    }
  ],
  "location": "vehicleRegTest.the_make_is(String)"
});
formatter.result({
  "duration": 84602060,
  "status": "passed"
});
formatter.before({
  "duration": 1701759212,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Should verify make and colour of vehicles",
  "description": "",
  "id": "verifying-vehicle-registration-details;should-verify-make-and-colour-of-vehicles;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the vehicle registration home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter my registration details as \"HY08VGJ\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "The colour is \"Black\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The make is \"Ford\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "vehicleRegTest.i_am_on_the_vehicle_registration_home_page()"
});
formatter.result({
  "duration": 2971920537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HY08VGJ",
      "offset": 36
    }
  ],
  "location": "vehicleRegTest.i_enter_my_registration_details_as(String)"
});
formatter.result({
  "duration": 1054783026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Black",
      "offset": 15
    }
  ],
  "location": "vehicleRegTest.the_colour_is(String)"
});
formatter.result({
  "duration": 95131729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 13
    }
  ],
  "location": "vehicleRegTest.the_make_is(String)"
});
formatter.result({
  "duration": 36883578,
  "status": "passed"
});
formatter.before({
  "duration": 2175520523,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Should verify make and colour of vehicles",
  "description": "",
  "id": "verifying-vehicle-registration-details;should-verify-make-and-colour-of-vehicles;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the vehicle registration home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter my registration details as \"LT09UEL\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "The colour is \"Silver\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The make is \"Ford\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "vehicleRegTest.i_am_on_the_vehicle_registration_home_page()"
});
formatter.result({
  "duration": 7712984186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LT09UEL",
      "offset": 36
    }
  ],
  "location": "vehicleRegTest.i_enter_my_registration_details_as(String)"
});
formatter.result({
  "duration": 684978331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Silver",
      "offset": 15
    }
  ],
  "location": "vehicleRegTest.the_colour_is(String)"
});
formatter.result({
  "duration": 146570860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 13
    }
  ],
  "location": "vehicleRegTest.the_make_is(String)"
});
formatter.result({
  "duration": 67981635,
  "status": "passed"
});
formatter.before({
  "duration": 1352251706,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Should verify make and colour of vehicles",
  "description": "",
  "id": "verifying-vehicle-registration-details;should-verify-make-and-colour-of-vehicles;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the vehicle registration home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter my registration details as \"VE10TKY\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "The colour is \"Grey\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The make is \"Volkswagen\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "vehicleRegTest.i_am_on_the_vehicle_registration_home_page()"
});
formatter.result({
  "duration": 2911340514,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VE10TKY",
      "offset": 36
    }
  ],
  "location": "vehicleRegTest.i_enter_my_registration_details_as(String)"
});
formatter.result({
  "duration": 810764503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Grey",
      "offset": 15
    }
  ],
  "location": "vehicleRegTest.the_colour_is(String)"
});
formatter.result({
  "duration": 262668824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volkswagen",
      "offset": 13
    }
  ],
  "location": "vehicleRegTest.the_make_is(String)"
});
formatter.result({
  "duration": 122850299,
  "status": "passed"
});
formatter.before({
  "duration": 1915314545,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Should verify make and colour of vehicles",
  "description": "",
  "id": "verifying-vehicle-registration-details;should-verify-make-and-colour-of-vehicles;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the vehicle registration home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter my registration details as \"LS06FXH\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "The colour is \"Silver\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The make is \"Toyota\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "vehicleRegTest.i_am_on_the_vehicle_registration_home_page()"
});
formatter.result({
  "duration": 5300260193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LS06FXH",
      "offset": 36
    }
  ],
  "location": "vehicleRegTest.i_enter_my_registration_details_as(String)"
});
formatter.result({
  "duration": 3449574878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Silver",
      "offset": 15
    }
  ],
  "location": "vehicleRegTest.the_colour_is(String)"
});
formatter.result({
  "duration": 292489568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Toyota",
      "offset": 13
    }
  ],
  "location": "vehicleRegTest.the_make_is(String)"
});
formatter.result({
  "duration": 147568404,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Entering a wrong vehicle registration details",
  "description": "",
  "id": "verifying-vehicle-registration-details;entering-a-wrong-vehicle-registration-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on the vehicle registration home page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I enter my registration details as \"\u003cvehicleReg\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I should get an error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "verifying-vehicle-registration-details;entering-a-wrong-vehicle-registration-details;",
  "rows": [
    {
      "cells": [
        "vehicleReg",
        "errorMessage"
      ],
      "line": 27,
      "id": "verifying-vehicle-registration-details;entering-a-wrong-vehicle-registration-details;;1"
    },
    {
      "cells": [
        "CU57ABC",
        "Vehicle details could not be found"
      ],
      "line": 28,
      "id": "verifying-vehicle-registration-details;entering-a-wrong-vehicle-registration-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4123171684,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Entering a wrong vehicle registration details",
  "description": "",
  "id": "verifying-vehicle-registration-details;entering-a-wrong-vehicle-registration-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on the vehicle registration home page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I enter my registration details as \"CU57ABC\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I should get an error message \"Vehicle details could not be found\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "vehicleRegTest.i_am_on_the_vehicle_registration_home_page()"
});
formatter.result({
  "duration": 3306610055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CU57ABC",
      "offset": 36
    }
  ],
  "location": "vehicleRegTest.i_enter_my_registration_details_as(String)"
});
formatter.result({
  "duration": 1197582712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vehicle details could not be found",
      "offset": 31
    }
  ],
  "location": "vehicleRegTest.i_should_get_an_error_message(String)"
});
formatter.result({
  "duration": 142166580,
  "status": "passed"
});
});