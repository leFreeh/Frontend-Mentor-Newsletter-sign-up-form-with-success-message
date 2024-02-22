function valida_envia(){

    var correo = document.forms["bot"]["correo"].value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo == "" || !regex.test(correo)){
      document.querySelector(".ver").style.display = "block";
      document.querySelector(".ml").style.border = "1px solid hsl(4, 100%, 67%)";
      document.querySelector(".ml").style.background = "hsl(4, 100%, 90%)";
      document.querySelector(".ml").style.color = "hsl(4, 100%, 67%)";
    }
    
    else{
      document.querySelector(".success").style.display = "grid"
      document.querySelector(".sign-up").style.display = "none"
    };
}

function restore(){

    document.querySelector(".ver").style.display = "";
    document.querySelector(".ml").style.border = "";
    document.querySelector(".ml").style.background = "";
    document.querySelector(".ml").style.color = "";
}

function sign_up_form(){

    document.querySelector(".success").style.display = ""
    document.querySelector(".sign-up").style.display = ""
    document.forms["bot"]["correo"].value = ""
}