const buttons= document.querySelectorAll(".resolution");

for (const buttonss of buttons) {
  buttonss.addEventListener("click", delta);
}
function delta(){

    //Recuperer la valeur d'un input
    let a = document.getElementById("putA").value;
    let b = document.getElementById("putB").value;
    let c = document.getElementById("putC").value;

    let delta= ((b*b) -(4*a*c));
    if ((!isNaN(a) && a !="") && (!isNaN(b) && b !="") && (!isNaN(c) && c !=""))
    {
        if (delta < 0){
            document.formulaire.resultat.value = "Pas de solution";
        }else if (delta > 0){
            document.formulaire.resultat.value ="X1= "+ (-b-delta)/(2*a) +" et "+ " X2= " + (-b+delta)/(2*a);
        }else{
            document.formulaire.resultat.value ="X1=X2= " + (-b/(2*a));
        }
    }else{
        messageerreur.style.color="#FF0000"
        messageerreur.innerText = "Veillez saisir les valeurs numeriques";
    }
    
}