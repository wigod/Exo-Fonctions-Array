 /*
 Exercice 1

Créer une fonction qui prend en parametre un tableau de nombre
et qui affiche ces differents nombres un à un.
*/
//nous utiliserons forEach()
function fnAfficher1a1(array){
    array.forEach(element => {
        console.log(element);
    });
}
fnAfficher1a1([2,5,45,9]);