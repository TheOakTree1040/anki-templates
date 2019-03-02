if ("{{Definition 2}}" === "<br>無") {
    document.getElementById("def2").remove();
} else {
    var def2 = document.getElementById("def2");
    var inner = def2.innerHTML;
    inner = inner.substring(4); // removing the line break <br> requires the string to be cut before the 5th char (index 4)
    def2.innerHTML = inner;
}
if ("{{Memorization}}" == "無") {
    document.getElementById("mem").remove();
}
if ("{{Memorization 2}}" == "無") {
    document.getElementById("mem2").remove();
}