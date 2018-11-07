window.onload = function () {
    var tenths = 0;
    var seconds = 0;
    var minutes = 0;
    var placeTenths = document.getElementById("tenths")
    var placeSeconds = document.getElementById("seconds")
    var placeMinutes = document.getElementById("minutes")
    var btnStart = document.getElementById('btnStart');
    var btnStop = document.getElementById('btnStop');
    var btnRes = document.getElementById('btnReset');
    var count = 0;

    
    function startWatch() {
        tenths += 1;

        if (tenths < 9) {
            placeTenths.innerHTML = "0" + tenths;
        };

        if (tenths > 9) {
            placeTenths.innerHTML = tenths;

        };

        if (tenths > 99) {
            seconds += 1;
            placeSeconds.innerHTML = "0" + seconds;
            tenths = 0;
            placeTenths.innerHTML = "0" + 0;
        };

        if (seconds > 9) {
            placeSeconds.innerHTML = seconds;
        };
        if (seconds > 59) {
            minutes += 1;
            placeMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            placeSeconds.innerHTML = "0" + 0;
        };
    };


    btnStart.onclick = function () {
        clearInterval(count);           // чтобы не было ускорений при нажатии много раз start
        count = setInterval(startWatch, 10); // по 1/10 от секунды 
    };


    btnStop.onclick = function () {
        clearInterval(count);
    };


    btnRes.onclick = function () {
        clearInterval(count);
        minutes = 0;
        seconds = 0;
        tenths = 0;
        placeTenths.innerHTML = "00";
        placeSeconds.innerHTML = "00";
        placeMinutes.innerHTML = "00";
    };  
};
