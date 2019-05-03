// Code goes here

const fn=function (interval) {
        interval = interval || 40;
        var j = 0;
        setInterval(function () {
            var els = document.querySelectorAll(".planet2d");
            j--;
            for (var i = 0; i < els.length; i++) {
                els[i].style.backgroundPosition = j + "px 0px";
            }
        }, interval);
    };

fn();