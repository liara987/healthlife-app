function init(){
  $.getJSON('http://localhost/JSON/traer.php', function(data){  
    console.log(data[1].data)   ;
    // var data = new Date();
    
    // // Guarda cada pedaço em uma variável
    // var dia     = data.getDate();           // 1-31        
    // var mes     = data.getMonth();          // 0-11 (zero=janeiro)        
    // var ano4    = data.getFullYear();       // 4 dígitos
    // var dataFinal;
    // if(dia <= 9)
    //   dataFinal= '0-' + dia +  mes+ '-' + ano4;        
    // else
    //   dataFinal= dia + '-' + mes + '-' + ano4;

    // if(mes <= 9)
    //   dataFinal= dia + '-0' + mes+ '-' + ano4;        
    // else
    //   dataFinal= dia + '-' + mes + '-' + ano4;

    // console.log("data final: "+dataFinal);       
    // var globalVariable = "teste";

    // // localStorage.setItem("vOneLocalStorage", globalVariable);  
    
    for(var i=0;i<data.length;i++){              
      $('#card').append(
      "<div class='col s12'>" +
        "<div  class='card blue darken-1'>"+
          "<div class='card-content white-text'>"+
            "<span class='card-title'>"+ data[i].nome_vacina +"</span>"+
          "</div>"+
          "<div  class='card-action white-text'>"+
            "<ul>Data vacinação: " + data[i].data + "</ul>"+
            "<ul>Aplicador: " + data[i].aplicador + "</ul>"+
            "<ul>Lote: " + data[i].lote_vacina + "</ul>"+
            "<ul>Posto: " + data[i].nome_posto + "</ul>"+                                                            
          "</div>"+
        "</div>"+
      "</div>");                 
    }
  });
}