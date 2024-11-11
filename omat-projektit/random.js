function findBigger(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

//console.log(findBigger(2, 2));

function suurinKolmesta(a, b, c) {
  if (a > b && a > c) {
    return "Suurin luku on " + a;
  } else if (b > c) {
    return "Suurin luku on " + b;
  } else {
    return "Suurin luku on " + c;
  }
}

//console.log(suurinKolmesta(7, 5, 2));

function isNegative(a) {
  if (a <= 0) {
    return a + " on negatiivinen luku";
  } else {
    return a + " On positiivinen luku";
  }
}

//console.log(isNegative(0));

function jaettava(a) {
  if (a % 5 == 0 && a % 11 == 0) {
    return a + " On 5 ja 11 jaollinen";
  } else if (a % 11 == 0) {
    return a + " On yhdellätoista jaettava";
  } else if (a % 5 == 0) {
    return a + " On viidellä jaettava";
  } else {
    return a + " Ei ole 5:llä tai 11:ta jaettava";
  }
}

//console.log(jaettava(110));

function karkausVuosi(a) {
  if (a % 4 == 0 && a % 100 != 0) {
    return a + " Vuosi on karkausvuosi";
  } else if (a % 400 == 0) {
    return a + " Vuosi on karkausvuosi";
  } else {
    return a + " Vuosi ei ole karkausvuosi";
  }
}

//console.log(karkausVuosi(2000));

function parillinenPariton(a) {
  if (a % 2 == 0) {
    return a + " Luku on parillinen";
  } else {
    return a + " Luku on pariton";
  }
}

//console.log(parillinenPariton(10));

function onkoSama(a, b) {
  if (a === b) {
    return a + " ja " + b + " On sama numero";
  } else {
    return a + " ja " + b + " Ovat eri numeroita";
  }
}

//console.log(onkoSama(5, 1));

function ikäTarkistus(a) {
  if (a <= 17) {
    return "Et voi äänestää " + a + " vuotiaana";
  } else {
    return "Voit äänestää " + a + " vuotiaana";
  }
}

//console.log(ikäTarkistus(17));
