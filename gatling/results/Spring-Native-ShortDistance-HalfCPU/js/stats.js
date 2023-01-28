var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "27121",
        "ok": "27089",
        "ko": "32"
    },
    "minResponseTime": {
        "total": "15",
        "ok": "15",
        "ko": "14162"
    },
    "maxResponseTime": {
        "total": "42448",
        "ok": "42448",
        "ko": "20519"
    },
    "meanResponseTime": {
        "total": "3682",
        "ok": "3667",
        "ko": "16771"
    },
    "standardDeviation": {
        "total": "6770",
        "ok": "6759",
        "ko": "2460"
    },
    "percentiles1": {
        "total": "499",
        "ok": "499",
        "ko": "16279"
    },
    "percentiles2": {
        "total": "3428",
        "ok": "3418",
        "ko": "20330"
    },
    "percentiles3": {
        "total": "16263",
        "ok": "16115",
        "ko": "20518"
    },
    "percentiles4": {
        "total": "32369",
        "ok": "32369",
        "ko": "20519"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 14251,
    "percentage": 53
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 444,
    "percentage": 2
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 12394,
    "percentage": 46
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 32,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "531.784",
        "ok": "531.157",
        "ko": "0.627"
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
        "total": "27121",
        "ok": "27089",
        "ko": "32"
    },
    "minResponseTime": {
        "total": "15",
        "ok": "15",
        "ko": "14162"
    },
    "maxResponseTime": {
        "total": "42448",
        "ok": "42448",
        "ko": "20519"
    },
    "meanResponseTime": {
        "total": "3682",
        "ok": "3667",
        "ko": "16771"
    },
    "standardDeviation": {
        "total": "6770",
        "ok": "6759",
        "ko": "2460"
    },
    "percentiles1": {
        "total": "499",
        "ok": "499",
        "ko": "16279"
    },
    "percentiles2": {
        "total": "3432",
        "ok": "3420",
        "ko": "20330"
    },
    "percentiles3": {
        "total": "16263",
        "ok": "16109",
        "ko": "20518"
    },
    "percentiles4": {
        "total": "32369",
        "ok": "32369",
        "ko": "20519"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 14251,
    "percentage": 53
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 444,
    "percentage": 2
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 12394,
    "percentage": 46
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 32,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "531.784",
        "ok": "531.157",
        "ko": "0.627"
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
