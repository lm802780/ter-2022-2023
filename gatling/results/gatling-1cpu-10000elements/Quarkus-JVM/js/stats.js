var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "3892",
        "ok": "1235",
        "ko": "2657"
    },
    "minResponseTime": {
        "total": "1102",
        "ok": "1102",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60030",
        "ok": "59887",
        "ko": "60030"
    },
    "meanResponseTime": {
        "total": "51662",
        "ok": "33707",
        "ko": "60008"
    },
    "standardDeviation": {
        "total": "15143",
        "ok": "15823",
        "ko": "5"
    },
    "percentiles1": {
        "total": "60006",
        "ok": "33550",
        "ko": "60008"
    },
    "percentiles2": {
        "total": "60009",
        "ok": "47838",
        "ko": "60011"
    },
    "percentiles3": {
        "total": "60015",
        "ok": "57502",
        "ko": "60015"
    },
    "percentiles4": {
        "total": "60021",
        "ok": "59491",
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
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 1234,
    "percentage": 32
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2657,
    "percentage": 68
},
    "meanNumberOfRequestsPerSecond": {
        "total": "32.433",
        "ok": "10.292",
        "ko": "22.142"
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
        "total": "3892",
        "ok": "1235",
        "ko": "2657"
    },
    "minResponseTime": {
        "total": "1102",
        "ok": "1102",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60030",
        "ok": "59887",
        "ko": "60030"
    },
    "meanResponseTime": {
        "total": "51662",
        "ok": "33707",
        "ko": "60008"
    },
    "standardDeviation": {
        "total": "15143",
        "ok": "15823",
        "ko": "5"
    },
    "percentiles1": {
        "total": "60006",
        "ok": "33550",
        "ko": "60008"
    },
    "percentiles2": {
        "total": "60009",
        "ok": "47838",
        "ko": "60011"
    },
    "percentiles3": {
        "total": "60015",
        "ok": "57502",
        "ko": "60015"
    },
    "percentiles4": {
        "total": "60021",
        "ok": "59491",
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
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 1234,
    "percentage": 32
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2657,
    "percentage": 68
},
    "meanNumberOfRequestsPerSecond": {
        "total": "32.433",
        "ok": "10.292",
        "ko": "22.142"
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
