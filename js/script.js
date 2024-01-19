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
    cerv = (nA * 2); 
    beb = (nC * 0.5);
    carne = (nA * 0.5) + (nC * 0.25);
    console.log((cerv * nD) + " " + (beb * nD) + " " + (carne * nD))
    
}


