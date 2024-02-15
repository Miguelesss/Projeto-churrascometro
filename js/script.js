var nA;
var nC;
var nD;
var cerv;
var beb;
var carne;
function numbA(a){
    nA = a;
    return nA;
}
function numbC(c){
    nC = c;
    return nC;
}
function numbD(d){
    nD = d;
    return nD;
}
function calc(){
    document.getElementById("enviar").style.backgroundColor = "white"
    
    if (nD == null || nD == 0){
        cerv = 0;
        beb = 0;
        carne = 0;
        nD = 0;
    } else {
        cerv = (nA * 2); 
        beb = (nC * 0.5);
        carne = (nA * 0.5) + (nC * 0.25);
    }
    
    document.getElementById("cerveja").innerText = (cerv * nD + " litros de cerveja;")
    document.getElementById("bebida").innerText = (beb * nD + " litros de bebida para as crianças;")
    document.getElementById("carne").innerText = (carne * nD + "kg de carne.")
    document.getElementById("enviar").style.backgroundColor = "rgb(237, 234, 234)"
}


