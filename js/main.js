document.getElementById("converter").onclick = function(){
    var celsius = document.getElementById("temp_celsius").value;
    var form = (9 * celsius / 5) + 32;
    document.getElementById("temp_fahr").innerHTML = form.toFixed(2) + " °F";
}
