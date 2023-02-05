var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "3771",
        "ok": "1024",
        "ko": "2747"
    },
    "minResponseTime": {
        "total": "32",
        "ok": "32",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60031",
        "ok": "59998",
        "ko": "60031"
    },
    "meanResponseTime": {
        "total": "52828",
        "ok": "33561",
        "ko": "60010"
    },
    "standardDeviation": {
        "total": "14322",
        "ok": "15679",
        "ko": "6"
    },
    "percentiles1": {
        "total": "60005",
        "ok": "34053",
        "ko": "60012"
    },
    "percentiles2": {
        "total": "60014",
        "ok": "47702",
        "ko": "60014"
    },
    "percentiles3": {
        "total": "60017",
        "ok": "57564",
        "ko": "60018"
    },
    "percentiles4": {
        "total": "60021",
        "ok": "59469",
        "ko": "60022"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 4,
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
    "count": 1020,
    "percentage": 27
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2747,
    "percentage": 73
},
    "meanNumberOfRequestsPerSecond": {
        "total": "31.165",
        "ok": "8.463",
        "ko": "22.702"
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
        "total": "3771",
        "ok": "1024",
        "ko": "2747"
    },
    "minResponseTime": {
        "total": "32",
        "ok": "32",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60031",
        "ok": "59998",
        "ko": "60031"
    },
    "meanResponseTime": {
        "total": "52828",
        "ok": "33561",
        "ko": "60010"
    },
    "standardDeviation": {
        "total": "14322",
        "ok": "15679",
        "ko": "6"
    },
    "percentiles1": {
        "total": "60005",
        "ok": "34053",
        "ko": "60012"
    },
    "percentiles2": {
        "total": "60014",
        "ok": "47702",
        "ko": "60014"
    },
    "percentiles3": {
        "total": "60017",
        "ok": "57564",
        "ko": "60018"
    },
    "percentiles4": {
        "total": "60021",
        "ok": "59469",
        "ko": "60022"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 4,
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
    "count": 1020,
    "percentage": 27
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2747,
    "percentage": 73
},
    "meanNumberOfRequestsPerSecond": {
        "total": "31.165",
        "ok": "8.463",
        "ko": "22.702"
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
