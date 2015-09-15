// alert("It works");
if(document.getElementsByName("userpwd_text")[0] !== undefined){
document.getElementsByName("userpwd_text")[0].id = "userpwd_text";
}

window.onload  = function (){

var t = 110;
var aa = window.top.document.getElementsByName("leftFrame")[0].contentDocument;
if (aa !== undefined){
for (var i = 0; i < 21; i++) {
   var tmp = aa.getElementById('MFX' + i);
   if (tmp){
    tmp.style["visibility"]= 'visible';
    tmp.style["top"] = t + 'px';
    t = t + 12;
   }
}
}
}