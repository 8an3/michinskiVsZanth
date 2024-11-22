/*HCaptcha Functions*/

function prepCpt(id_) {
    disableBtn(id_);
    try {
        if (location.hostname !== "localhost") {            
            hcaptcha.execute();            
        }
        else {
            sendForm('You are on localhost so hcaptcha cannot run');
        }
    }
    catch (err) {
        hcError(err);
        sendForm(err);
    }
}

function sendForm(error = "") {
    let form = document.getElementById('mainForm');
    let errMsgInput = document.getElementById('mainForm').getElementsByClassName("errorMessage")[0];

    if (error !== "") {
        errMsgInput.value = error;
    } else {
        errMsgInput.value = "";
    }

    setIsMobileField();
    setWindowWidthField();
    setWindowHeightField();
    setScreenWidthField();
    setScreenHeightField();
    setUserAgent();

    form.submit();
}

function hcError(err) {
    console.error(err);
}

function disableBtn(id_param) {
    document.getElementById(id_param).disabled = true;
}


/*Telemetry Functions*/

function setIsMobileField() {
    document.getElementById("is-mobile").value = findIsMobile();
}

function setWindowWidthField() {
    document.getElementById("window-width").value = findWindowWidth();
}

function setWindowHeightField() {
    document.getElementById("window-height").value = findWindowHeight();
}

function setScreenWidthField() {
    document.getElementById("screen-width").value = findScreenWidth();
}

function setScreenHeightField() {
    document.getElementById("screen-height").value = findScreenHeight();
}

function setUserAgent() {
    document.getElementById("user-agent").value = navigator.userAgent;
}


function findIsMobile() {
    try {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    } catch (err) {
        return 0;
    }
}

function findWindowWidth() {
    try {
        return Math.round(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
    } catch (err) {
        return -1;
    }
}

function findWindowHeight() {
    try {
        return Math.round(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
    } catch (err) {
        return -1;
    }
}

function findScreenWidth() {
    try {
        return Math.round(screen.width);
    } catch (err) {
        return -1;
    }
}

function findScreenHeight() {
    try {
        return Math.round(screen.height);
    } catch (err) {
        return -1;
    }
}