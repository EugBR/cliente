var dni = window.prompt("Introduce tu DNI sin letra");
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var num = 0;
if(dni.length==8){

    num = dni%23;
    document.writeln("La letra de tu dni es " + letras[num]);
    

    
}else{
    document.writeln("ERROR");
}