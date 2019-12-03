var oContent;
var oList;

function ready(fn) {
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', function () {
            document.removeEventListener('DOMContentLoaded', arguments.callee, false);
            fn();
        }, false);
    } else if (document.attachEvent) {
        document.attachEvent('onreadystatechange', function () {
            if (document.readyState == 'complete') {
                document.detachEvent('onreadystatechange', arguments.callee);
                fn();
            }
        });
    }
};

function liClick(obj) {
    var countDone = 0;
    var lis = document.getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
        var li = lis[i];
        if (li.className != "done") {
            if (li.className == "sel") {
                if (li == obj) {
                    li.className = "done";
                    countDone++;
                } else {
                    li.className = "";
                }
            } else {
                if (li == obj) {
                    li.className = "sel";
                } else {
                    li.className = "";
                }
            }
        } else {
            countDone++;
        }
    }
    var eFooter = document.getElementById("info");
    eFooter.innerHTML = "已完成" + countDone + "/" + lis.length;
}

function resetLi() {
    var lis = document.getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
        lis[i].className = "";
    }
    var eFooter = document.getElementById("info");
    eFooter.innerHTML = "已完成0/" + lis.length;
}

function regClickEvents() {
    for (i = 0; i < oList.length; i++) {
        oList[i].onclick = function (e) {
            liClick(this);
            stopDefault(e);
        }
    };
}

ready(function () {
    oContent = document.getElementById("content");
    oList = oContent.getElementsByTagName("li");
    regClickEvents();
    resetLi();
})