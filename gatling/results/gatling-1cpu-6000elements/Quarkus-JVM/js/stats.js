var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "4917",
        "ok": "3960",
        "ko": "957"
    },
    "minResponseTime": {
        "total": "1044",
        "ok": "1044",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60031",
        "ok": "59985",
        "ko": "60031"
    },
    "meanResponseTime": {
        "total": "39744",
        "ok": "34846",
        "ko": "60008"
    },
    "standardDeviation": {
        "total": "17103",
        "ok": "15491",
        "ko": "5"
    },
    "percentiles1": {
        "total": "41735",
        "ok": "36189",
        "ko": "60008"
    },
    "percentiles2": {
        "total": "56903",
        "ok": "47988",
        "ko": "60012"
    },
    "percentiles3": {
        "total": "60012",
        "ok": "57798",
        "ko": "60017"
    },
    "percentiles4": {
        "total": "60017",
        "ok": "59563",
        "ko": "60023"
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
    "count": 3959,
    "percentage": 81
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 957,
    "percentage": 19
},
    "meanNumberOfRequestsPerSecond": {
        "total": "40.975",
        "ok": "33",
        "ko": "7.975"
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
        "total": "4917",
        "ok": "3960",
        "ko": "957"
    },
    "minResponseTime": {
        "total": "1044",
        "ok": "1044",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60031",
        "ok": "59985",
        "ko": "60031"
    },
    "meanResponseTime": {
        "total": "39744",
        "ok": "34846",
        "ko": "60008"
    },
    "standardDeviation": {
        "total": "17103",
        "ok": "15491",
        "ko": "5"
    },
    "percentiles1": {
        "total": "41728",
        "ok": "36197",
        "ko": "60008"
    },
    "percentiles2": {
        "total": "56903",
        "ok": "47990",
        "ko": "60012"
    },
    "percentiles3": {
        "total": "60012",
        "ok": "57798",
        "ko": "60017"
    },
    "percentiles4": {
        "total": "60017",
        "ok": "59563",
        "ko": "60023"
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
    "count": 3959,
    "percentage": 81
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 957,
    "percentage": 19
},
    "meanNumberOfRequestsPerSecond": {
        "total": "40.975",
        "ok": "33",
        "ko": "7.975"
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
