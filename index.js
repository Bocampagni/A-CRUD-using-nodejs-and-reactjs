height = 1.76;
weight = 105;


imc = weight / (height * height);


if(imc < 10){
    console.log("Desnutrição")
}
else if(imc == 10 || imc < 18.5){
    console.log("Normal");
}
else if( imc == 18.5 || imc < 30){
    console.log("Obesidade");
}

else{
    console.log("Super gordão");
}
