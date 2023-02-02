let valeurdea = document.getElementById("putA").value;
let valeurdeb = document.getElementById("putB").value;
let valeurdec = document.getElementById("putC").value;
function delta(a,b,c,d)
{
    d= ((b*b)-4*a*c);
    if (d < 0){
        alert("Pas de solution");
    }else if (d > 0){
        alert((-b-d)/(2*a));
        alert((-b+d)/(2*a));
    }else{
        alert(-b/(2*a));
    }
}
delta(valeurdea,valeurdeb,valeurdec);
