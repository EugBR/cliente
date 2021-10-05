

var num1 = 5, num2 = 6;


if(num1>num2){
    document.writeln("El primer numero es mayor que el segundo<br>");
}else{
    document.writeln("El segundo numero es mayor que el primero<br>");
}

if(num2 > 0){
    document.writeln("El segundo numero es positivo<br>");
}else{
    document.writeln("El segundo numero es negativo<br>");
}

if(num1<0){
    document.writeln("El primer número es negativo y distinto de 0<br>");
}else if(num1!=0){
    document.writeln("El primer númeor es distinto de 0<br>");
}

if((num1+1 == num2)){
    document.writeln("Al sumar uno al primer número, consigue el mismo valor que el segundo<br>");
}else if((num1+1 > num2)){
    document.writeln("Al sumar uno al primer número, este es mayor que el segundo");
}
