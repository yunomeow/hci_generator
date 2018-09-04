function goPreview(){
	var uri = "page2.php?text=" + document.getElementById("input_text").value;
	location.href = encodeURI(uri);
}
function goBack(){
	var uri = "index.php?text=" + getParameterByName("text");
	location.href = encodeURI(uri);
}
function submit(){
}



function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}