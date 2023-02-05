var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "11078",
        "ok": "10935",
        "ko": "143"
    },
    "minResponseTime": {
        "total": "200",
        "ok": "200",
        "ko": "14604"
    },
    "maxResponseTime": {
        "total": "60015",
        "ok": "34325",
        "ko": "60015"
    },
    "meanResponseTime": {
        "total": "10802",
        "ok": "10285",
        "ko": "50371"
    },
    "standardDeviation": {
        "total": "9991",
        "ok": "8744",
        "ko": "17308"
    },
    "percentiles1": {
        "total": "7097",
        "ok": "7003",
        "ko": "60004"
    },
    "percentiles2": {
        "total": "15560",
        "ok": "15493",
        "ko": "60008"
    },
    "percentiles3": {
        "total": "32426",
        "ok": "32393",
        "ko": "60009"
    },
    "percentiles4": {
        "total": "34228",
        "ok": "32687",
        "ko": "60013"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 13,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 32,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 10890,
    "percentage": 98
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 143,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "173.094",
        "ok": "170.859",
        "ko": "2.234"
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
        "total": "11078",
        "ok": "10935",
        "ko": "143"
    },
    "minResponseTime": {
        "total": "200",
        "ok": "200",
        "ko": "14604"
    },
    "maxResponseTime": {
        "total": "60015",
        "ok": "34325",
        "ko": "60015"
    },
    "meanResponseTime": {
        "total": "10802",
        "ok": "10285",
        "ko": "50371"
    },
    "standardDeviation": {
        "total": "9991",
        "ok": "8744",
        "ko": "17308"
    },
    "percentiles1": {
        "total": "7097",
        "ok": "7003",
        "ko": "60004"
    },
    "percentiles2": {
        "total": "15560",
        "ok": "15493",
        "ko": "60008"
    },
    "percentiles3": {
        "total": "32426",
        "ok": "32393",
        "ko": "60009"
    },
    "percentiles4": {
        "total": "34228",
        "ok": "32687",
        "ko": "60013"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 13,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 32,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 10890,
    "percentage": 98
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 143,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "173.094",
        "ok": "170.859",
        "ko": "2.234"
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
