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
//  { vardas: "Andrius", pavarde: "Grazulis", kursas: 1, pazymiai: [6, 8, 6, 8, 9] },
//  { vardas: "Rusne", pavarde: "Barboryte", kursas: 2, pazymiai: [6, 5, 4, 8, 10] },
//  { vardas: "Giedre", pavarde: "Gui", kursas: 1, pazymiai: [6, 7, 7, 5, 6] },
//  { vardas: "Darius", pavarde: "Bertulis", kursas: 3, pazymiai: [9, 8, 7, 2, 5, 6] },
//  { vardas: "Mantas", pavarde: "Stundža", kursas: 4, pazymiai: [9, 5, 9, 5, 8, 9, 7] },
//  { vardas: "Giedre", pavarde: "Masytė", kursas: 1, pazymiai: [6, 7, 7, 6, 8, 9, 10] }
//];
//console.log("Penkto objekto duomenys: ", studentai[4]);
//console.log(studentai[4].vardas, studentai[4].pavarde,"mokosi KTU", studentai[4].kursas, "kurse, jo pazymiai:", studentai[4].pazymiai.join(" , "));
//console.log(studentai[4]["vardas"], studentai[4]["pavarde"], "mokosi KTU", studentai[4]["kursas"], "kurse, jo pažymiai:", studentai[4]["pazymiai"].join(","));
//
//// 5.Išveskite visus studento pažymius, esančius objekte. Naudojant for ciklą.
//let studentas = studentai[1];
//console.log("Studento", studentas.vardas, studentas.pavarde, "pažymiai:");
//for (let j = 0; j < studentas.pazymiai.length; j++) {
//  console.log(studentas.pazymiai[j]);
//}
//
////6. Pakelkite tris pasirinktus pažymius per vieną skaičių. Tačiau atkreipkite dėmesį ar keliamas pažymys gali
////būti pakeltas (jei dar ne max), jei jis jau ir taip yra 10, tuomet palikite tokį koks yra.
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
//
////7. Suskaičiuokite ir išveskite trijų pasirinktų pažymių sumą.
//function skaiciuotiSuma(pazymiai) {
//  let suma = 0;
//  for (let x = 0; x < pazymiai.length; x++) {
//    suma += pazymiai[x];
//  }
//  return suma;
//}
//let pasirinktuPazymiuSuma = skaiciuotiSuma(pasirinktasStudentas.pazymiai.filter((_, index) => pasirinktiIndeksai.includes(index)));
//console.log("Pasirinktų pažymių suma:", pasirinktuPazymiuSuma);
//
//
////8. Suskaičiuokite ir išveskite dviejų pasirinktų pažymių sandaugą.
//function skaiciuotiSandauga(pazymiai) {
//  let sandauga = 1;
//  for (let i = 0; i < pazymiai.length; i++) {
//    sandauga *= pazymiai[i];
//  }
//  return sandauga;
//}
//let pasirinktiIndeksaiSandaugai = [0, 2];
//let pasirinktasStudentasSandaugai = studentai[2];
//let pasirinktuPazymiuSandauga = skaiciuotiSandauga(pasirinktasStudentasSandaugai.pazymiai.filter((_, index) => pasirinktiIndeksaiSandaugai.includes(index)));
//console.log("Pasirinktų pažymių sandauga:", pasirinktuPazymiuSandauga);
//
////9. Patikrinkite ar kursas yra numeral tipo.
//function arNumeral(kursas) {
//  return typeof kursas === "number";
//}
//let pasirinktasStudentasKursas = studentai[4];
//let kursasYraNumeral = arNumeral(pasirinktasStudentasKursas.kursas);
//console.log("Kursas yra numeral tipo:", kursasYraNumeral);
//
////10. Patikrinkite ar studentas mokosi ketvirtame kurse ir ar ši reikšmė yra kaip numeral (===).
//function arMokosiKetvirtameKurse(studentai) {
//  return studentai.kursas === 4;
//}
//function arReiksmeNumeral(studentai) {
//  return typeof studentai.kursas === "number";
//}
//let pasirinktasStudentasKetvirtas = studentai[5];
//let arMokosiKetvirtameKurseRezultatas = arMokosiKetvirtameKurse(pasirinktasStudentasKetvirtas);
//let arReiksmeNumeralRezultatas = arReiksmeNumeral(pasirinktasStudentasKetvirtas);
//console.log("Ar studentas mokosi ketvirtame kurse:", arMokosiKetvirtameKurseRezultatas, "Ar reikšmė numeral tipo:", arReiksmeNumeralRezultatas);
//
////11. Patikrinkite visus studentus ar jie mokosi ketvirtame kurse. Jeigu studentas mokosi ketvirtame kurse,
////išveskite tekstą "studentas <Vardas Pavardė> yra abiturientas", kitu atveju
////"Studentui <Vardas Pavardė> dar toli iki mokslų baigimo".
//for (let i = 0; i < studentai.length; i++) {
//  patikrintiKursa(studentai[i]);
//}
//function patikrintiKursa(studentai) {
//  if (studentai.kursas === 4) {
//    console.log("Studentas ", studentai.vardas, studentai.pavarde, "yra abiturientas");
//  } else {
//    console.log("Studentui ", studentai.vardas, studentai.pavarde, "dar toli iki mokslų baigimo");
//  }
//}
//
////12. Sukurkite funkciją vardu "suma", kuri priima du skaičius kaip argumentus ir grąžintų jų sumą.
//let suma = (a, b) => {
//    return a + b
//};
//let rezultatas = suma(5, 9);
//console.log(rezultatas);
//
////13. Naudodami šią funkciją, parašykite kodą, kuris atspausdina visų skaičių nuo 1 iki 100 sumą.
//let sum = 0;
//for (let i = 1; i <= 100; i++) {
//  sum = suma(sum, i);
//}
//console.log("Visų skaičių nuo 1 iki 100 suma:", sum);
//
////14. Sukurti funkcija/metoda kuris sudetu lyginius arba nelyginius pateikto masyvo elementus
//let masyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//function sumaLyginiuNelyginiu(masyvas, lyginiai) {
//  let suma = 0;
//  for (let i = 0; i < masyvas.length; i++) {
//    if (masyvas[i] % 2 === (lyginiai ? 0 : 1)) {
//      suma += masyvas[i];
//    }
//  }
//  return suma;
//}
//let sumaLyginiu = sumaLyginiuNelyginiu(masyvas, true);
//let sumaNelyginiu = sumaLyginiuNelyginiu(masyvas, false);
//console.log("Lyginių elementų suma:", sumaLyginiu);
//console.log("Nelyginių elementų suma:", sumaNelyginiu);
//
////15. Sukurti funkcija/metoda kuris sudetu lyginiu arba nelyginių indeksų reikšmes .
//function sumaIndeksu(masyvas, lyginiai) {
//  let suma = 0;
//  for (let i = 0; i < masyvas.length; i++) {
//    if (i % 2 === (lyginiai ? 0 : 1)) {
//      suma += masyvas[i];
//    }
//  }
//  return suma;
//}
//let sumaLyginiuIndeksu = sumaIndeksu(masyvas, true);
//let sumaNelyginiuIndeksu = sumaIndeksu(masyvas, false);
//console.log("Lyginių indeksų reikšmių suma:", sumaLyginiuIndeksu);
//console.log("Nelyginių indeksų reikšmių suma:", sumaNelyginiuIndeksu);



// Generuojamas atsitiktinis skaicius nuo 0 iki 1 neimtinai
let atsitiktinisSkaicius = Math.random();

// atsitiktinis skaicius dauginamas iš 10
atsitiktinisSkaicius *= 10;

// Suapvalinsiu atsitiktini skaiciu iki sveiko skaiciaus
atsitiktinisSkaicius = Math.floor(atsitiktinisSkaicius);

// Apvalinimas į didesnę vertę
atsitiktinisSkaicius = Math.ceil(atsitiktinisSkaicius);



atsitiktinisSkaicius = atsitiktinisSkaicius.toFixed(2);


console.log(atsitiktinisSkaicius);