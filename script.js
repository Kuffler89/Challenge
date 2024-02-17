    //let tx2 = 
let tx2 = tx1

function Encriptador(){
    let mensaje1 = document.getElementById("texto").value;
alert(mensaje1);
        let tx1 = mensaje1.replaceAll("e","enter")
            .replaceAll("i","imes")
            .replaceAll("a","ai")
            .replaceAll("o","ober")
            .replaceAll("u","ufat")
            console.log(tx1);

            document.getElementById('munieco').setAttribute("hidden","");
            document.getElementById('boton3').removeAttribute("hidden");
            document.getElementById('textorectangulo').setAttribute("hidden","");
            document.getElementById('textorectangulo1').setAttribute("hidden","");



    

    //document.getElementById("rectangletext").value = mensaje2
}

function Copiar(){
    alert(tx2);
}