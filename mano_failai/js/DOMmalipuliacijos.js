// document.querySelector("#paragrafas").textContent = "Pakeistas tekstas";
// document.querySelector("main").textContent = "Naujas main lorem 200"
//
//
//const sarasoElementai = document.querySelectorAll("#elementas li");
//
//for (let i = 0; i < sarasoElementai.length; i++) {
//    let elementas = sarasoElementai[i];
//    let naujasTekstas = "Naujas tekstas " + i;
//    elementas.innerHTML = naujasTekstas;
//}

// 1 uzduotis
const imgTagai = document.getElementsByTagName('img');
const imgTaguSkaicius = imgTagai.length;

console.log("HTML faile yra " + imgTaguSkaicius + " <img> tagai.");

// 2 uzduotis

const elementas = document.getElementById('uuid');
const atsakymas = `siame puslapyje yra ${imgTaguSkaicius} paveiksleliai`
elementas.innerHTML = atsakymas;


//3 uzduotis
const mygtukas = document.querySelector('button');

mygtukas.addEventListener('click', function() {

  window.alert("Paveikslėlių kiekis: " + imgTaguSkaicius);
});

//4 uzduotis

//
//for (let i = 0; i < imgTaguSkaicius; i+=2) {
//  let paveikslelis = imgTagai[i]
////    paveiksleliai[i].setAttribute('alt', 'testas');
//    paveikslelis.alt = 'Testas'
//
//}



////5 uzduotis

elementas.style.fontSize = '24px';
elementas.style.backgroundColor = 'green';
elementas.style.width = '200px';
elementas.style.height = '200px';