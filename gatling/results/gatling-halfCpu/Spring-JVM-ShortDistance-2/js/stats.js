var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "11665",
        "ok": "11537",
        "ko": "128"
    },
    "minResponseTime": {
        "total": "540",
        "ok": "540",
        "ko": "9530"
    },
    "maxResponseTime": {
        "total": "60016",
        "ok": "35445",
        "ko": "60016"
    },
    "meanResponseTime": {
        "total": "10026",
        "ok": "9688",
        "ko": "40456"
    },
    "standardDeviation": {
        "total": "9812",
        "ok": "9017",
        "ko": "22561"
    },
    "percentiles1": {
        "total": "6199",
        "ok": "6012",
        "ko": "60003"
    },
    "percentiles2": {
        "total": "15433",
        "ok": "15395",
        "ko": "60008"
    },
    "percentiles3": {
        "total": "32393",
        "ok": "32352",
        "ko": "60014"
    },
    "percentiles4": {
        "total": "32766",
        "ok": "32614",
        "ko": "60015"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 20,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 118,
    "percentage": 1
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 11399,
    "percentage": 98
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 128,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "179.462",
        "ok": "177.492",
        "ko": "1.969"
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
        "total": "11665",
        "ok": "11537",
        "ko": "128"
    },
    "minResponseTime": {
        "total": "540",
        "ok": "540",
        "ko": "9530"
    },
    "maxResponseTime": {
        "total": "60016",
        "ok": "35445",
        "ko": "60016"
    },
    "meanResponseTime": {
        "total": "10026",
        "ok": "9688",
        "ko": "40456"
    },
    "standardDeviation": {
        "total": "9812",
        "ok": "9017",
        "ko": "22561"
    },
    "percentiles1": {
        "total": "6199",
        "ok": "6012",
        "ko": "60003"
    },
    "percentiles2": {
        "total": "15433",
        "ok": "15395",
        "ko": "60008"
    },
    "percentiles3": {
        "total": "32393",
        "ok": "32352",
        "ko": "60014"
    },
    "percentiles4": {
        "total": "32766",
        "ok": "32614",
        "ko": "60015"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 20,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 118,
    "percentage": 1
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 11399,
    "percentage": 98
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 128,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "179.462",
        "ok": "177.492",
        "ko": "1.969"
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
