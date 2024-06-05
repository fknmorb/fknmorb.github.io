function getIP(json) {
    document.getElementById("ip").innerHTML = "ip_leaked:" + json.ip;
}

(function() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://api.ipify.org?format=jsonp&callback=getIP';
    document.head.appendChild(script);
})();
