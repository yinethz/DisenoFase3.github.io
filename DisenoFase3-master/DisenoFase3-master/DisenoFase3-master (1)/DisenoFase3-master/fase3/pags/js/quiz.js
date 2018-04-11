// JavaScript Document

var res= new Array;
var no= new Array;
var tures= new Array;
var explicares=new Array;
var calif=0;
res[1]="c";
res[2]="d";
res[3]="a";
res[4]="a";
res[5]="b";
res[6]="d";
res[7]="d";
res[8]="c";
res[9]="a";
res[10]="b";

explicares[1]="mal, la respuesta no es la correcta";
explicares[2]="mal, la respuesta no es la correcta";
explicares[3]="mal, la respuesta no es la correcta";
explicares[4]="mal, la respuesta no es la correcta";
explicares[5]="mal, la respuesta no es la correcta";
explicares[6]="mal, la respuesta no es la correcta";
explicares[7]="mal, la respuesta no es la correcta";
explicares[8]="mal, la respuesta no es la correcta";
explicares[9]="mal, la respuesta no es la correcta";
explicares[10]="mal, la respuesta no es la correcta";

function Engine(question, answer){
tures[question]=answer;
}
function Score(){
var answertext="RESULTADOS\n";
calif=0;
 
for(i=1;i<=10;i++){
answertext=answertext+"\nPregunta"+i+":";
if(res[i]!=tures[i]){
answertext=answertext+explicares[i]+"\n";
}
else {
answertext=answertext+"bien\n";
calif++;
}}
answertext=answertext+"\nCalificacion:"+calif;
answertext=answertext+"\nDiagnostico:";
if(calif<=0){
answertext=answertext+"malo";
}
if(calif>=1 && calif<=5){
answertext=answertext+"regular";
}
if(calif>=6 && calif<=9){
answertext=answertext+"Bueno";
} 
 
if(calif>=10){
answertext=answertext+"Excelente";
}
alert(answertext);
 }
