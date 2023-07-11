//let metai = 1981;
//let menuo = 02;
//let diena = 19;
//
//m = metai%10 + menuo%10 +diena%10;
//
//console.log(m);
//
//let r = 15;
//let pi = 3.14;
//let ilgis = 2 * pi * r;
//
//console.log("Apskritimo ilgis:", ilgis);
//
//let plotas = pi * (r ** 2);
//
//console.log("Apskritimo plotas:", plotas);
//
//let bėgikoVardas = "Jonas"; // Bėgiko vardas iš anksto nustatytas
//let pozicija = 4; // Pozicija, kurią užėmė bėgikas iš anksto nustatyta
//let medalis; // Kintamasis, kuriame bus saugomas medalis
//
//if (pozicija == 1) {
//  medalis = "aukso";
//} else if (pozicija == 2) {
//  medalis = "sidabrinį";
//} else if (pozicija == 3) {
//  medalis = "bronzinį";
//}
//if( medalis !== undefined){
//console.log(bėgikoVardas + " gavo " + medalis + " medalį.");
//}
//
////let a = true;
////let b = a === true ? true : false;
////
////for (let i = 0; i <= 16; i += 4) {
////  console.log(i);
////}
//
//let a = 2 + 2;
//
//switch (a) {
//  case 4:
//    console.log("a yra lygus 4");
//    break;
//  case 3:
//    console.log("a yra lygus 3");
//    break;
//  case 5:
//    console.log("a yra lygus 5");
//    break;
//  default:
//    console.log("Nėra atitikmens");
//}
//
//let f = 2 + 2;
//
//switch (f) {
//  case 4:
//    console.log("f yra lygus 4");
//  case 3:
//    console.log("f yra mažiau už 4");
//  case 5:
//    console.log("f yra daugiau už 4");
//  default:
//    console.log("Nėra atitikmens");


//
//let fruits = ["Apple", "Orange", "Plum"];
//
//console.log( fruits[0] ); // Apple
//console.log( fruits[1] ); // Orange
//console.log( fruits[2] ); // Plum
//
//fruits[3] = "Banana";
//
//console.log(fruits);
//console.log(fruits.length);

////
//let user = ["Jonas", "Ona", "Petras"];
//
//for (let i = 0; i < user.length; i++) {
//  console.log(user[i]);
//}



//let user = ["Jonas", "Ona", "Petras"];
//
//for (let vardas of user) {
//  console.log(vardas);
//}


//function greet(name) {
//  console.log("Labas, " + name + "!");
//}
//greet("Donata");
//
//
//function skaiciaus_kvadratas(num) {
//  let kvadratu = num * num;
//  return kvadratu;
//}
//let skaicius = 4;
//let result = skaiciaus_kvadratas(skaicius);
//console.log(result);

//
//
//
//// Studentas
//let studentas1 = {
//  vardas: "Vardulis",
//  pavarde: "Pavardulis",
//  kursas: 4,
//  pazymiai: [8, 6, 6]
//};
//
//// masyvas
//let studentai = [
//  { vardas: "Andrius", pavarde: "Grazulis", kursas: 1, pazymiai: [6, 8, 6] },
//  { vardas: "Rusne", pavarde: "Barboryte", kursas: 2, pazymiai: [6, 5, 4, 8] },
//  { vardas: "Giedre", pavarde: "Gui", kursas: 1, pazymiai: [6, 7, 7] },
//  { vardas: "Darius", pavarde: "Bertulis", kursas: 3, pazymiai: [9, 8, 7] },
//  { vardas: "Mantas", pavarde: "Stundža", kursas: 4, pazymiai: [9, 5, 9] },
//  { vardas: "Giedre", pavarde: "Gui", kursas: 1, pazymiai: [6, 7, 7] }
//];
//console.log("Penkto objekto duomenys: ", studentai[4]);
//console.log(studentai[4].vardas, studentai[4].pavarde,"mokosi KTU", studentai[4].kursas, "kurse, jo pazymiai:", studentai[4].pazymiai.join(" , "));
//console.log(studentai[4]["vardas"], studentai[4]["pavarde"], "mokosi KTU", studentai[4]["kursas"], "kurse, jo pažymiai:", studentai[4]["pazymiai"].join(","));
//
//let studentas = studentai[1];
//console.log("Studento", studentas.vardas, studentas.pavarde, "pažymiai:");
//for (let j = 0; j < studentas.pazymiai.length; j++) {
//  console.log(studentas.pazymiai[j]);
//}
//
//function pakeltiPazymius(studentas, indeksai) {
//  for (let i = 0; i < indeksai.length; i++) {
//    let pazymys = studentas.pazymiai[indeksai[i]];
//    if (pazymys < 10) {
//      studentas.pazymiai[indeksai[i]] = pazymys + 1;
//    }
//  }
//}
//let pasirinktasStudentas = studentai[0];
//let pasirinktiIndeksai = [0, 1, 2];
//pakeltiPazymius(pasirinktasStudentas, pasirinktiIndeksai);
//console.log(pasirinktasStudentas.pazymiai);


// Generuojamas atsitiktinis skaicius nuo 0 iki 1 neimtinai
let atsitiktinisSkaicius = Math.random();

// atsitiktinis skaicius dauginamas iš 10
atsitiktinisSkaicius *= 10;

// Suapvalinsiu atsitiktini skaiciu iki sveiko skaiciaus
atsitiktinisSkaicius = Math.floor(atsitiktinisSkaicius);

// Apvalinimas į didesnę vertę
atsitiktinisSkaicius = Math.ceil(atsitiktinisSkaicius);

atsitiktinisSkaicius = Math.round(atsitiktinisSkaicius);
atsitiktinisSkaicius += 1;
if (atsitiktinisSkaicius < 1) {atsitiktinisSkaicius = 1}
if (atsitiktinisSkaicius > 10) {atsitiktinisSkaicius = 10}


console.log(atsitiktinisSkaicius);
