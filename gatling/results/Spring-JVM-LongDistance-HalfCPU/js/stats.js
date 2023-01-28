var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "11454",
        "ok": "11406",
        "ko": "48"
    },
    "minResponseTime": {
        "total": "943",
        "ok": "943",
        "ko": "13162"
    },
    "maxResponseTime": {
        "total": "60014",
        "ok": "32718",
        "ko": "60014"
    },
    "meanResponseTime": {
        "total": "9430",
        "ok": "9369",
        "ko": "24007"
    },
    "standardDeviation": {
        "total": "7169",
        "ok": "7040",
        "ko": "16541"
    },
    "percentiles1": {
        "total": "7535",
        "ok": "7521",
        "ko": "16570"
    },
    "percentiles2": {
        "total": "12701",
        "ok": "12497",
        "ko": "19675"
    },
    "percentiles3": {
        "total": "31956",
        "ok": "31944",
        "ko": "60013"
    },
    "percentiles4": {
        "total": "32495",
        "ok": "32480",
        "ko": "60014"
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
    "count": 11,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 11395,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 48,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "176.215",
        "ok": "175.477",
        "ko": "0.738"
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
        "total": "11454",
        "ok": "11406",
        "ko": "48"
    },
    "minResponseTime": {
        "total": "943",
        "ok": "943",
        "ko": "13162"
    },
    "maxResponseTime": {
        "total": "60014",
        "ok": "32718",
        "ko": "60014"
    },
    "meanResponseTime": {
        "total": "9430",
        "ok": "9369",
        "ko": "24007"
    },
    "standardDeviation": {
        "total": "7169",
        "ok": "7040",
        "ko": "16541"
    },
    "percentiles1": {
        "total": "7535",
        "ok": "7521",
        "ko": "16570"
    },
    "percentiles2": {
        "total": "12701",
        "ok": "12497",
        "ko": "19675"
    },
    "percentiles3": {
        "total": "31956",
        "ok": "31944",
        "ko": "60013"
    },
    "percentiles4": {
        "total": "32495",
        "ok": "32480",
        "ko": "60014"
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
    "count": 11,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 11395,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 48,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "176.215",
        "ok": "175.477",
        "ko": "0.738"
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
