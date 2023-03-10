/*créer une fonction qui prend en paramètres un tableau de nombre et qui retourne la somme de ces nombres.*/

/************ EN ES5 *********************** */
function fnSom(tablo){
    let som =0;
    for(let i = 0; i < tablo.length; i++){
        som = som + tablo[i];        
    }
    return som;
}
console.log('En utilisant ES5, la SOMME est :' + fnSom([5, 10, 15, 20, 25]));

/************************* EN ES6 ************************ */

function fnSom(tablo){
    let result = tablo.reduce((total, currentValue) => total + currentValue);
    return(result);
}

console.log('En utilisant ES6 - Array function: reduce, la SOMME est :' + fnSom([5, 10, 15, 20, 25]));

