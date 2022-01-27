
var total;

document.getElementById('file').onchange = function(){

    var file = this.files[0];
  
    var reader = new FileReader();
    reader.onload = function(){
      
      var lines = this.result.split(" ");
      for(var i = 0; i < lines.length; i++){
        total=i;
      }
    
    const app = document.querySelector("#mio");   
    app.insertAdjacentElement("beforebegin", app);
    app.innerHTML="";
    app.insertAdjacentHTML("afterbegin", " words.");
    app.insertAdjacentHTML("afterbegin", total);
    app.insertAdjacentHTML("afterbegin", "Your document contains: " );

    const cost = document.querySelector("#cost"); 
    cost.insertAdjacentElement("beforebegin", cost);
    cost.innerHTML="";
    cost.insertAdjacentHTML("afterbegin", " dolars.");
    cost.insertAdjacentHTML("afterbegin", total/20 );
    cost.insertAdjacentHTML("afterbegin", "It costs: " );

    const time = document.querySelector("#time"); 
    time.insertAdjacentElement("beforebegin", time);
    time.innerHTML="";
    time.insertAdjacentHTML("afterbegin", " hours more or less.");
    time.insertAdjacentHTML("afterbegin", total/100);
    time.insertAdjacentHTML("afterbegin", "It will be ready in: " );



}

reader.readAsText(file)
};

document.getElementById('but').onclick = function se(){


  document.location.reload();
}