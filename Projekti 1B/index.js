function lomaketarkistus(form) {
  let name = form.nimisyotto.value;
  let email = form.emailsyotto.value;
  let age = form.ikasyotot.value;
  let radio = form.radio.value;
  let select = form.select.value;

  if (name < 3) {
    alert("Nimi on liian lyhyt");
    form.nimisyotto.focus();
  }
}
