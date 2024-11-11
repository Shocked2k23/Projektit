// Tuli tehtyä yksin kun ei oikeen onnistunu tiimi työ ilman gittiä.
// Tai onnistuu, mutta turhan hankalaa.

function tarkasta(form) {
  let etunimi = form.enimi.value;
  let sukunimi = form.snimi.value;
  let email = form.email.value;
  let radio = form.mainos;
  let checkbox = form.boksi;

  // First name & Last name validation

  if (etunimi == "") {
    alert("Etunimi ei voi olla tyhjä!");
    form.enimi.focus();
    return false;
  }

  if (sukunimi == "") {
    alert("Sukunimi ei voi olla tyhjä!");
    form.snimi.focus();
    return false;
  }

  // Email RegEx
  const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  // email validation after RegEx with isValidEmail()

  if (email === "") {
    alert("Sähköposti ei voi olla tyhjä!");
    form.email.focus();
    return false;
  } else if (!isValidEmail(email)) {
    alert("Anna kelvollinen sähköposti");
    form.email.focus();
    return false;
  }

  // Spam choice validation

  let radioValue = false;
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked == true) {
      radioValue = true;
    }
  }
  if (radioValue == false) {
    alert("Valitse haluatko mainoksia vai et!");
    return false;
  }

  // Favorite Thing about school validation.

  let checkboxValue = false;
  for (let j = 0; j < checkbox.length; j++) {
    if (checkbox[j].checked == true) {
      checkboxValue = true;
    }
  }
  if (checkboxValue == false) box;
  {
    alert("Et valinnut, mikä on kivaa");
    return false;
  }
}
