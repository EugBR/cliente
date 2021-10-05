
var palabras = [true,5,false,"hola","adios",2];


if(palabras[3]>palabras[4]){
    document.writeln("El tercer componente es más grande<br>");
}else{
    document.writeln("El cuarto componente es más gramde<br>");
}

if(palabras[0] == true || palabras[2] == true){
    document.writeln("El primer o tercer componente 'true'<br>");
}else{
    document.writeln("Ni el primer ni el tercer componente son 'true'<br>")
}

if(palabras[0] < true && palabras[2] < true){
    document.writeln("El primer y tercer componente son 'true'<br>");
}else{
    document.writeln("El primer, tercer o ningun componente es 'true'<br>");
}

var suma = palabras[1] + palabras[5];
var resta = palabras[1] - palabras[5];
var multiplicar = palabras[1] * palabras[5];
var dividir = palabras[1] / palabras[5];

document.writeln("El resultado de la suma es: " + suma);
document.writeln("<br>El resultado de la resta es: " + resta);
document.writeln("<br>El resultado de la multiplicacion es: " + multiplicar);
document.writeln("<br>El resultado de la division es: " + dividir);









