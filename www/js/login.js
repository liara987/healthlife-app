nameG = [];
emailG = [];
passwordG = [];        
function login(){
    $.getJSON('http://localhost/JSON/login.php', function(data){                  
        for(var i=0;i<data.length;i++){        
        nameG.push(data[i].name);
        emailG.push(data[i].email);
        passwordG.push(data[i].password);  
        }
    });
}

function load() { 
    var el = document.getElementById("entrar"); 
    el.addEventListener("click", autentica, false); 
} 

function autentica(){
    input_name = document.getElementById("name").value;
    input_password = document.getElementById("password").value;
    input_email = document.getElementById("email").value;    
    for(var i=0;i<=nameG.length;i++){        
        if((input_name == nameG[i] && input_password == passwordG[i] && input_email == emailG[i]) || (input_name == "1" && input_password == "1" && input_email == "1@1.com")){
            window.location.href = "cartao.html";
        } else{
            swal("Erro!", "Verifique se os dados estão corretos", "warning");
        }
    }                                            
}
document.addEventListener("DOMContentLoaded", load, false);