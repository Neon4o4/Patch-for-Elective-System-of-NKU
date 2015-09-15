// alert("It works");
if(document.getElementsByName("userpwd_text")[0] !== undefined){
    document.getElementsByName("userpwd_text")[0].id = "userpwd_text";
}

// slidebar on the left
var contnt = window.top.document.getElementsByName("leftFrame")[0].contentDocument;
if (contnt !== undefined){
    var topLine = contnt.getElementById("MFX0").style["top"];
    var attrHeight = 12
    topLine = parseInt(topLine);
    for (var i = 0; i < 21; i++) {
        var MFX = contnt.getElementById("MFX" + i);
        if (MFX){
            var attrTop = topLine + i * attrHeight;
            MFX.style["visibility"]= "visible";
            MFX.style["top"] = attrTop.toString() + "px";
        }
    }
}
