/*
Exercice 4 
Créer une fonction qui prend en parametre un tableau
qui verifie s'il existe un nombre pair dans le tableau ou non,
retourner true ou false.
*/
// nous utiliserons SOME() + FONCTION FLECHEE
function fnVerifierNbrPair(tablo){    
    let nbrPair = element => element % 2 === 0;
    console.log(tablo.some(nbrPair));
}
fnVerifierNbrPair([1, 2, 3, 4, 5]);


