/*
Exercice 2 
Créer une fonction qui prend en parametre un tableau de nombre et 
qui retourne un tableau qui ne contient que les nombres impairs
*/
// on utilisera FILTER()
/*
function tabloNbreImpair(tablo){
    return tablo.filter(function(element){
        return element % 2 !== 0;
    })
}
*/
// FILTER + FONCTION FLECHEE
function tabloNbreImpair(tablo){
    return tablo.filter(element => {
        return element % 2 !== 0;
    })
}
console.log(tabloNbreImpair([2,5,45,9]))