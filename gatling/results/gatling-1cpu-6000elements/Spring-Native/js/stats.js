var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "3734",
        "ok": "937",
        "ko": "2797"
    },
    "minResponseTime": {
        "total": "283",
        "ok": "283",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60017",
        "ok": "59994",
        "ko": "60017"
    },
    "meanResponseTime": {
        "total": "53311",
        "ok": "33319",
        "ko": "60009"
    },
    "standardDeviation": {
        "total": "13957",
        "ok": "15580",
        "ko": "4"
    },
    "percentiles1": {
        "total": "60007",
        "ok": "33135",
        "ko": "60009"
    },
    "percentiles2": {
        "total": "60011",
        "ok": "46654",
        "ko": "60012"
    },
    "percentiles3": {
        "total": "60014",
        "ok": "57376",
        "ko": "60014"
    },
    "percentiles4": {
        "total": "60015",
        "ok": "59426",
        "ko": "60016"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 933,
    "percentage": 25
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2797,
    "percentage": 75
},
    "meanNumberOfRequestsPerSecond": {
        "total": "31.117",
        "ok": "7.808",
        "ko": "23.308"
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
        "total": "3734",
        "ok": "937",
        "ko": "2797"
    },
    "minResponseTime": {
        "total": "283",
        "ok": "283",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60017",
        "ok": "59994",
        "ko": "60017"
    },
    "meanResponseTime": {
        "total": "53311",
        "ok": "33319",
        "ko": "60009"
    },
    "standardDeviation": {
        "total": "13957",
        "ok": "15580",
        "ko": "4"
    },
    "percentiles1": {
        "total": "60007",
        "ok": "33135",
        "ko": "60009"
    },
    "percentiles2": {
        "total": "60011",
        "ok": "46654",
        "ko": "60012"
    },
    "percentiles3": {
        "total": "60014",
        "ok": "57376",
        "ko": "60014"
    },
    "percentiles4": {
        "total": "60015",
        "ok": "59426",
        "ko": "60016"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 933,
    "percentage": 25
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2797,
    "percentage": 75
},
    "meanNumberOfRequestsPerSecond": {
        "total": "31.117",
        "ok": "7.808",
        "ko": "23.308"
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
