function showMessage() {
    if(document.getElementById("name").value !="" && document.getElementById("email").value !="" && document.getElementById("comments").value !="" ){
        alert("Message Sent");
    }
    else{
        alert("Please Enter Details");
    }
}
