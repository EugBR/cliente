var cadena = window.prompt("Introduce una cadena de texto");
contador1 = 0; //minusculas
contador2 = 0; //mayusculas
for (i=0; i<cadena.length; i++){
    var character = cadena.charAt(i);
    if (character == character.toUpperCase()) {
        contador2++;
    }else if(character == character.toLowerCase()){
        contador1++;
    }

}

if((contador1 == 0) && (contador2 > 0)){
    document.writeln("La cadena esta escrita en mayusculas");
}else if((contador2 == 0) && contador1 > 0){
    document.writeln("La cadena esta escrita en minusculas");
}else{
    document.writeln("La cadena tiene mayusculas y minusculas");
}