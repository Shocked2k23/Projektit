function lomaketarkistus(form) {
  let name = document.getElementById("nimisyotto").value;
  let email = document.getElementById("emailsyotto").value;
  let age = document.getElementById("ikasyotot").value;
  let radio = document.querySelectorAll('input[name="radio"]');
  let select = document.getElementById("pudotus").value;

  if (name < 3) {
    alert("Nimi on liian lyhyt");
    document.getElementById("nimisyotto").focus();
  }
}
