function handleKeyPress(event) {
    
    if (event.keyCode === 13) {
        passcheck(); 
    }
}

document.getElementById("password").addEventListener("keypress", handleKeyPress);


function passcheck() {
    var password = document.getElementById("password").value;
    
    if (password === "xxx") {
      
        window.location.href = "index2.html";
    } else {
        alert("Contraseña incorrecta");
    }
}