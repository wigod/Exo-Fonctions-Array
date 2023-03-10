/*
function fnSom(tablo){
    let som = 0;
    for(let h = 0; h < tablo.length; h++){
        som += tablo[h];
    }
    return som;
}
console.log(fnSom([104,5,58,12]));
*/


// AVEC REDUCE()
function fnSom(tablo){
    return tablo.reduce(function(acc, elt){
        return acc + elt;
    });
}
console.log(fnSom([104,5,58,12]));