function setCountdownNumbers (endDate) {
    var now = Date.now();
    var t = endDate - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("day").innerHTML = days.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("day").innerHTML = '0';
        document.getElementById("hour").innerHTML = '0';
        document.getElementById("minute").innerHTML = '0';
        document.getElementById("second").innerHTML = '0';
    }
}

//COUNTDOWN BAR
function progress(timeleft, timetotal, $element) {
    var progressBarWidth = (timeleft / timetotal) * 100;
    //console.log(progressBarWidth);

    $element.width(`${progressBarWidth}%`);

    if (timeleft > 0) {
        setTimeout(function () {
            progress(timeleft - 1, timetotal, $element);
        }, 1000);
    }
}