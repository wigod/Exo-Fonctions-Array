/*1
let array = [1,5,4,6];
for(let i=0; i<array.length; i++){
    console.log(array[i]);
}


// .map()

array.map(function(elt){
    console.log(elt);
});
*/

/*2
*/// AFFICHER LES NOMBRES PAIRS
//let array = [1,5,4,6];
/*
function filterArray(array){
    let result = [];
    for(let x = 0; x < array.length; x++){
        if(array[x] % 2 == 0){
           result.push(array[x]);
        }
        return (result);
    }
} 
console.log(filterArray([1,5,4,6]));
*/
/*
//filter()
function filterArrayWithFilter(arr){
    return arr.filter(function(elt){
        return elt % 2 == 0;
    })
}
console.log(filterArrayWithFilter([1,5,4,6]));

*/
/********************************************************** */
//forEach() et map()
/*
let tabPersonnage = [
    {"nom ":"Koffi", "Age ":"30", "Gain":2500},
    {"nom ":"Akiss", "Age ":"50", "Gain":5000},
    {"nom ":"Guei", "Age ":"38", "Gain":2500},
    {"nom ":"Kamara", "Age ":"40", "Gain":2500}
];

tabPersonnage.map(function(elt){
    console.log(elt);
});

tabPersonnage.forEach(element => {
    console.log(element.Gain);
})
*/
/************************************************************* */
//TRIER NOMBRE PAIRS & IMPAIRS
function tabloPairImpair(arr){
    let pair = [];
    let impair = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 == 0){
            pair.push(arr[i]);
        }
    }
    return(pair);
}
console.log(tabloPairImpair([2,8,1,25,33,62]));

// AVEC FILTER()

function fnFilterTablo(arr){    
    return arr.filter(function(elt){
        return elt % 2 == 0;
        })   
    }
    console.log(fnFilterTablo([2,8,1,25,33,62]));