function init() {
    console.log("page initiated");
}

<script>
document.onreadystatechange = function() {
    console.log("State: " + document.readyState)
    if(document.readyState !== "complete")
    {
        document.querySelector("body").style.visibility = "hidden";
    } else {
        document.querySelector("body").style.visibility = "visible";
    }
}
</script>