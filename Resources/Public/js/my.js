/* my own CSS. (C) 2017 Der Oekumenische Arbeitskreis Tiergarten */
/* Opt-Out Google analytics */

var gaProperty = 'UA-96623703-1';
var disableStr = 'ga-disable-' + gaProperty;
if (document.cookie.indexOf(disableStr + '=true') > -1) {
window[disableStr] = true;
}
function gaOptout() {
document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
window[disableStr] = true;
}







