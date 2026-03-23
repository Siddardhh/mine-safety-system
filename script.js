function login(){

    function showAlert(){

    alert("⚠ Danger Detected in Mine");

}

setInterval(function(){

    var r = Math.random();

    if(r > 0.7)
    {
        alert("Gas Level High!");
    }

},5000);
    var u = document.getElementById("user").value;
    var p = document.getElementById("pass").value;
    var r = document.getElementById("role").value;

    if(u=="manager" && p=="1234" && r=="Manager")
    {
        window.location="dashboard.html";
    }
    else
    {
        document.getElementById("msg").innerHTML="Invalid Login";
    }

}