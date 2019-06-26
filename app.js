let libras= 160;
let kg= (libras/2.2046);

// console.log(Math.round(kg));
console.log(kg.toFixed(0)+ " kg");
// pasa de kilometros a millas
let kilometros= 20;
let millas= (kilometros*0.62);
console.log(millas + " millas");

// halla el area de un triangulo

let base =10;
let altura=5;
let area = ((base*altura)/2);
console.log(area+" area tr") 

// cual es el numero mayor?

let numeros = [1, 6, 8, 4,2 ,7 ,10, 3, 5];
let x=0
for(i=0; i<=10; i++){
if(numeros[i]>x){
    x=numeros[i];

}
}
console.log(x+" es el numero mayor");

//que numero es par y cual impar

let numero= [1, 6, 8, 4,2 ,7 ,10, 3, 5];
let y=0
for(i=0; i<=10; i++){
if(numeros[i]%2==0){
    console.log(numeros[i]+" es numero par");
}
else {
console.log(numeros[i]+" es numero impar");

}
}

// tablas de multiplicar


for(let i=1; i<=5; i++){
    let renglon = "";
   
    for(let j=1; j<=5; j++){
        renglon += `${j*i}  `;
    }

    console.log(renglon);
}

// funcion para numero mayor

function max(a,b,c){
let mayor;
if(a>b && a>c){ mayor=a;}
if(b>a && b>c){ mayor=b;}
if(c>a && c>b){ mayor=c;}


return mayor

}
let mayor= max(51,289,67);

console.log("el numero mayor es " +mayor);




// calcula el nombre mas largo de un arreglo de caracteres
function masLargo(arr){
    let nombreLargo='';     

    for(let i=0; i< arr.length; i++){
      let nombre = arr[i];
      if(nombre.length > nombreLargo.length){
          nombreLargo = nombre;
      }

    }
    return nombreLargo;
}

let heroes=['deadpool','ciclope','magneto','profesor charles'];
let heroeLargo= masLargo(heroes);
console.log(heroeLargo);













