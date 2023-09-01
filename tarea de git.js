const A = [76,82,35,95,56,7,190,999,333,167,111];
let arrMen = 0;
for (let i=0; i<A.length; i++) {
if (A[i]<A[arrMen]){
    arrMen = i;
}
}
console.log("El indice del elemento menor es: " + arrMen);