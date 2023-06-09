const buttons = document.querySelectorAll(".resolution");

for (const buttonss of buttons) {
  buttonss.addEventListener("click", delta);
}
function delta() {
  //Retrieve the value of an input
  let valueOfA = document.getElementById("valueOfA").value;
  let valueOfB = document.getElementById("valueOfB").value;
  let valueOfC = document.getElementById("valueOfC").value;

  // formula for calculating quadratic equation
  let delta = (valueOfB * valueOfB) - 4 * valueOfA * valueOfC;
  if (
    !isNaN(valueOfA) &&
    valueOfA != "" &&
    !isNaN(valueOfB) &&
    valueOfB != "" &&
    !isNaN(valueOfC) &&
    valueOfC != ""
  ) {
    if (delta < 0) {
      document.formulaire.resultat.value = "Pas de solution";
    } else if (delta > 0) {
      document.formulaire.resultat.value =
        "X1= " +
        (-valueOfB - delta) / (2 * valueOfA) +
        " et " +
        " X2= " +
        (-valueOfB + delta) / (2 * valueOfA);
    } else {
      document.formulaire.resultat.value =
        "X1=X2= " + -valueOfB / (2 * valueOfA);
    }
  } else {
    messageerreur.style.color = "#FF0000";
    messageerreur.innerText = "Veillez saisir les valeurs numeriques";
  }
}
