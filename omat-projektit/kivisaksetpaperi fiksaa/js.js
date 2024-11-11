function kiviSaksetPaperi() {
  // User input
  let käyttäväValinta1 = document.getElementById("kivi");
  let käyttäväValinta2 = document.getElementById("sakset");
  let käyttäväValinta3 = document.getElementById("paperi");
  let käyttäväValinta =
    käyttäväValinta1 || käyttäväValinta2 || käyttäväValinta3;

  // Get Computer Awnser
  const random = Math.ceil(Math.random() * 3);
  // 1 = Kivi, 2 = Sakset, 3 = Paperi

  // Check what user inputs
  if (käyttäväValinta == "Kivi") {
    käyttäväValinta = käyttäväValinta[1];
  } else if (käyttäväValinta == "Sakset") {
    käyttäväValinta = käyttäväValinta[2];
  } else if (käyttäväValinta == "Paperi") {
    käyttäväValinta = käyttäväValinta[3];
  }

  // Defining Winner
  if (käyttäväValinta === random) {
    document.getElementById("output").innerText + "Tasa Peli";
  } else if (käyttäväValinta !== random) {
    if (käyttäväValinta == 1 && random == 2) {
      document.getElementById("output").innerText + "Kivi Voittaa Sakset";
    } else if (käyttäväValinta == 1 && random == 3) {
      document.getElementById("output").innerText + "Kivi ei voita Paperia";
    } else if (käyttäväValinta == 2 && random == 3) {
      document.getElementById("output").innerText + "Sakset Voittaa Paperin";
    } else if (käyttäväValinta == 2 && random == 1) {
      document.getElementById("output").innerText + "Sakset ei voita Kiveä";
    } else if (käyttäväValinta == 3 && random == 1) {
      document.getElementById("output").innerText + "Paperi Voittaa Kiven";
    } else if (käyttäväValinta == 3 && random == 2) {
      document.getElementById("output").innerText + "Paperi ei voita Saksia";
    }
  }
}

console.log(käyttäväValinta("Kivi"));
