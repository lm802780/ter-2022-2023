var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "18041",
        "ok": "18041",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "174",
        "ok": "174",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7809",
        "ok": "7809",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5190",
        "ok": "5190",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1433",
        "ok": "1433",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5490",
        "ok": "5488",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6387",
        "ok": "6387",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7091",
        "ok": "7091",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7397",
        "ok": "7397",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 78,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 88,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 17875,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "487.595",
        "ok": "487.595",
        "ko": "-"
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
        "total": "18041",
        "ok": "18041",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "174",
        "ok": "174",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7809",
        "ok": "7809",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5190",
        "ok": "5190",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1433",
        "ok": "1433",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5490",
        "ok": "5492",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6387",
        "ok": "6388",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7091",
        "ok": "7091",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7397",
        "ok": "7397",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 78,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 88,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 17875,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "487.595",
        "ok": "487.595",
        "ko": "-"
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
