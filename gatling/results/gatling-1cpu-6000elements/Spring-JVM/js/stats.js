var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "4627",
        "ok": "3007",
        "ko": "1620"
    },
    "minResponseTime": {
        "total": "2704",
        "ok": "2704",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60029",
        "ok": "59996",
        "ko": "60029"
    },
    "meanResponseTime": {
        "total": "43616",
        "ok": "34784",
        "ko": "60010"
    },
    "standardDeviation": {
        "total": "17347",
        "ok": "15499",
        "ko": "6"
    },
    "percentiles1": {
        "total": "49471",
        "ok": "35379",
        "ko": "60012"
    },
    "percentiles2": {
        "total": "60007",
        "ok": "48545",
        "ko": "60014"
    },
    "percentiles3": {
        "total": "60016",
        "ok": "57797",
        "ko": "60020"
    },
    "percentiles4": {
        "total": "60020",
        "ok": "59581",
        "ko": "60022"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 3007,
    "percentage": 65
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1620,
    "percentage": 35
},
    "meanNumberOfRequestsPerSecond": {
        "total": "38.558",
        "ok": "25.058",
        "ko": "13.5"
    }
},
contents: {
"req_hellocontroller-f3175": {
        type: "REQUEST",
        name: "HelloController",
path: "HelloController",
pathFormatted: "req_hellocontroller-f3175",
stats: {
    "name": "HelloController",
    "numberOfRequests": {
        "total": "4627",
        "ok": "3007",
        "ko": "1620"
    },
    "minResponseTime": {
        "total": "2704",
        "ok": "2704",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60029",
        "ok": "59996",
        "ko": "60029"
    },
    "meanResponseTime": {
        "total": "43616",
        "ok": "34784",
        "ko": "60010"
    },
    "standardDeviation": {
        "total": "17347",
        "ok": "15499",
        "ko": "6"
    },
    "percentiles1": {
        "total": "49469",
        "ok": "35387",
        "ko": "60012"
    },
    "percentiles2": {
        "total": "60007",
        "ok": "48529",
        "ko": "60014"
    },
    "percentiles3": {
        "total": "60016",
        "ok": "57797",
        "ko": "60020"
    },
    "percentiles4": {
        "total": "60020",
        "ok": "59581",
        "ko": "60022"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 3007,
    "percentage": 65
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1620,
    "percentage": 35
},
    "meanNumberOfRequestsPerSecond": {
        "total": "38.558",
        "ok": "25.058",
        "ko": "13.5"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
