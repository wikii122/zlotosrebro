void function() {
    function prepareWarning() {
        const warning = document.getElementById("cookie-warning");

        if (!navigator.cookieEnabled) {
            warning.classList.add("is-invisible");
        }

        const name = "visited";
        const str = '; '+ document.cookie +';';
        const index = str.indexOf('; '+ escape(name) +'=');

        function hideWarning() {
            const expire = new Date();
            expire.setTime((new Date()).getTime() + 3600000*24*365);
            document.cookie = name + "=1;expires=" + expire;
            warning.classList.add("is-invisible");
        };

        if (!(index === -1 && navigator.cookieEnabled)) {
            hideWarning();
        }

        warning.onclick = hideWarning;
    }

    window.addEventListener("DOMContentLoaded", prepareWarning, false);
}.call(this);
