void function() {
    function prepareWarning() {
        const name = "visited";
        const str = '; '+ document.cookie +';';
        const index = str.indexOf('; '+ escape(name) +'=');

        var warning = document.getElementById("cookie-warning");

        function hideWarning() {
            warning.classList.add("is-invisible")
        };

        if (!(index === -1 && navigator.cookieEnabled)) {
            hideWarning();
        }

        var expire = new Date();
        expire.setTime((new Date()).getTime() + 3600000*24*365);
        document.cookie = name + "=1;expires=" + expire;

        warning.onclick = hideWarning;
    }

    window.addEventListener("DOMContentLoaded", prepareWarning, false);
}.call(this);
