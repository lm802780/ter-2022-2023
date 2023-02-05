var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "3447",
        "ok": "528",
        "ko": "2919"
    },
    "minResponseTime": {
        "total": "985",
        "ok": "985",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60029",
        "ok": "59998",
        "ko": "60029"
    },
    "meanResponseTime": {
        "total": "56349",
        "ok": "36115",
        "ko": "60009"
    },
    "standardDeviation": {
        "total": "10258",
        "ok": "14266",
        "ko": "4"
    },
    "percentiles1": {
        "total": "60008",
        "ok": "36100",
        "ko": "60010"
    },
    "percentiles2": {
        "total": "60012",
        "ok": "48496",
        "ko": "60012"
    },
    "percentiles3": {
        "total": "60016",
        "ok": "57474",
        "ko": "60016"
    },
    "percentiles4": {
        "total": "60020",
        "ok": "59552",
        "ko": "60021"
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
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 527,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2919,
    "percentage": 85
},
    "meanNumberOfRequestsPerSecond": {
        "total": "28.725",
        "ok": "4.4",
        "ko": "24.325"
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
        "total": "3447",
        "ok": "528",
        "ko": "2919"
    },
    "minResponseTime": {
        "total": "985",
        "ok": "985",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60029",
        "ok": "59998",
        "ko": "60029"
    },
    "meanResponseTime": {
        "total": "56349",
        "ok": "36115",
        "ko": "60009"
    },
    "standardDeviation": {
        "total": "10258",
        "ok": "14266",
        "ko": "4"
    },
    "percentiles1": {
        "total": "60008",
        "ok": "36100",
        "ko": "60010"
    },
    "percentiles2": {
        "total": "60012",
        "ok": "48496",
        "ko": "60012"
    },
    "percentiles3": {
        "total": "60016",
        "ok": "57474",
        "ko": "60016"
    },
    "percentiles4": {
        "total": "60020",
        "ok": "59552",
        "ko": "60021"
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
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 527,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2919,
    "percentage": 85
},
    "meanNumberOfRequestsPerSecond": {
        "total": "28.725",
        "ok": "4.4",
        "ko": "24.325"
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
