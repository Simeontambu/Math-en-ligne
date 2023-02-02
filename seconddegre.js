let a=1,
    b=4,
    c=1,
    delta= ((b*b) -(4*a*c));

if (delta < 0){
    alert("Pas de solution");
}else if (delta > 0){
    alert((-b-delta)/(2*a));
    alert((-b+delta)/(2*a));
}else{
    alert(-b/(2*a));
}
