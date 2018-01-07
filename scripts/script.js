var appsVisible = false;
var yetVisible = false;
var settingsVisible = false;

var clickOnYetApps = false;
var clickOnApps = false;
var clickOnSettings = false;

var e;
window.addEventListener("keypress", search(e));

function login() {
    location.href = "https://accounts.google.com/ServiceLogin?hl=ru&passive=true&continue=https://www.google.by/";
}

function luck() {
    location.href = "https://www.google.com/doodles";
}

function apps() {
    clickOnApps = true;
    appsVisible = !appsVisible;
    let elemApps = document.getElementById('div-apps');
    if (appsVisible) {
        elemApps.style.display = 'block';
    }
    else {
        elemApps.scrollTop = 0;
        elemApps.style.display = 'none';
        elemApps.style.overflow = 'hidden';
        yetApps();
    }
}

function yetApps() {
    clickOnYetApps = true;
    yetVisible = !yetVisible;
    let btnYet = document.getElementById('apps-yet');
    let divApps = document.getElementById('div-apps');
    let elemApps = document.getElementById('div-yet-apps');
    let otherApps = document.getElementById('apps-others');
    if (yetVisible) {
        btnYet.style.display = 'none';
        elemApps.style.display = 'block';
        otherApps.style.display = 'block';
        divApps.style.overflowX = 'hidden';
        divApps.style.overflowY = 'scroll';
        divApps.scrollTop = divApps.scrollHeight;
    }
    else {
        btnYet.style.display = 'block';
        elemApps.style.display = 'none';
    }
}

function bodyClick() {
    if (appsVisible && !clickOnApps && !clickOnYetApps) {
        apps();
    }
    else {
        clickOnYetApps = false;
        clickOnApps = false;
    }
    if (settingsVisible && !clickOnSettings) {
        settings();
    }
    else {
        clickOnSettings = false;
    }
}

function search(e) {
    let input = document.getElementById('text-field');
    if (input != null && input.value.trim() != "") {
        if (!e || e.keyCode == 13) {
            location.href = 'https://www.google.ru/search?hl=ru&q=' + input.value + '&gws_rd=ssl';
        }
    }
}

function settings() {
    clickOnSettings = true;
    settingsVisible = !settingsVisible;
    let elemSettings = document.getElementById('settings');
    if (settingsVisible) {
        console.log(elemSettings);
        elemSettings.style.display = 'block';
    }
    else {
        elemSettings.style.display = 'none';
    }
}
