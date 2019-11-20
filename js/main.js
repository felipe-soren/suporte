function sendTicket(){
    var cliente = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var mensagem = document.getElementById("Message").value;


    var data = JSON.stringify({
        "name": `Chamado aberto por ${cliente}`,
        "desc": `${email} \n ${mensagem}`,
        "pos": "top",
        "idList": "5dabc52a643b7c45418e783a",
        "due": "11-27-2019"
      });
      
      var xhr = new XMLHttpRequest();
      
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log(this.responseText);
        }
      });
      
      xhr.open("POST", "https://cors-anywhere.herokuapp.com/https://api.trello.com/1/cards?key=3e91a5612515339a1cd7919258b91a62&token=cd62b83796e0c2df0758f347ca11fde03edff8c0848678c60c6efc912a388a89");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("cache-control", "no-cache");
      
      xhr.send(data);
      document.getElementById("Name").value = ""
      document.getElementById("Email").value = ""
      document.getElementById("Message").value = ""
}