var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "4086",
        "ok": "1599",
        "ko": "2487"
    },
    "minResponseTime": {
        "total": "1887",
        "ok": "1887",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60029",
        "ok": "59913",
        "ko": "60029"
    },
    "meanResponseTime": {
        "total": "49872",
        "ok": "34105",
        "ko": "60009"
    },
    "standardDeviation": {
        "total": "15808",
        "ok": "15172",
        "ko": "5"
    },
    "percentiles1": {
        "total": "60003",
        "ok": "34020",
        "ko": "60008"
    },
    "percentiles2": {
        "total": "60010",
        "ok": "47260",
        "ko": "60013"
    },
    "percentiles3": {
        "total": "60016",
        "ok": "57722",
        "ko": "60019"
    },
    "percentiles4": {
        "total": "60022",
        "ok": "59531",
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
    "count": 1599,
    "percentage": 39
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2487,
    "percentage": 61
},
    "meanNumberOfRequestsPerSecond": {
        "total": "34.05",
        "ok": "13.325",
        "ko": "20.725"
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
        "total": "4086",
        "ok": "1599",
        "ko": "2487"
    },
    "minResponseTime": {
        "total": "1887",
        "ok": "1887",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60029",
        "ok": "59913",
        "ko": "60029"
    },
    "meanResponseTime": {
        "total": "49872",
        "ok": "34105",
        "ko": "60009"
    },
    "standardDeviation": {
        "total": "15808",
        "ok": "15172",
        "ko": "5"
    },
    "percentiles1": {
        "total": "60003",
        "ok": "34020",
        "ko": "60008"
    },
    "percentiles2": {
        "total": "60010",
        "ok": "47260",
        "ko": "60013"
    },
    "percentiles3": {
        "total": "60016",
        "ok": "57722",
        "ko": "60019"
    },
    "percentiles4": {
        "total": "60022",
        "ok": "59531",
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
    "count": 1599,
    "percentage": 39
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2487,
    "percentage": 61
},
    "meanNumberOfRequestsPerSecond": {
        "total": "34.05",
        "ok": "13.325",
        "ko": "20.725"
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
