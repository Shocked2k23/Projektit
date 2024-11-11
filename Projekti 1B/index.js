function lomaketarkistus(form) {
  let name = document.getElementById("nimisyotto").value;
  let email = document.getElementById("emailsyotto").value;
  let age = document.getElementById("ikasyotot").value;
  let radio = document.querySelectorAll('input[name="radio"]');
  let select = document.getElementById("pudotus").value;

  if (name < 3) {
    alert("Nimi on liian lyhyt");
    document.getElementById("nimisyotto").focus();
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

  if (age < 18) {
    alert("Lomake on vain 18 vuotta täyttäneille");
    form.ikasyotot.focus();
    return false;
  }

  if (age > 100) {
    alert("Oletko varmasti yli 100 vuotias?");
    form.ikasyotot.focus();
    return false;
  }

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

  let selectValue = false;

  for (let k = 0; k < select.length; i++) {
    if (select[i].checked == true) {
      selectValue = true;
    }
  }

  if (selectValue == false) {
    alert("Valitse Maa");
    return false;
  }
}
