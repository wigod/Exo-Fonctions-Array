/*
function tabloPairImpair(arr){
    let pair = [];  
    let impair = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            pair.push(arr[i]);
        }else{
            impair.push(arr[i]);
        }
    }
    return ( 'tableau de Nombre Paire ' + pair + 'tableau de Nombre imPaire ' + impair);
}
*/
// AVEC FILTER()

function fnFilterTablo(arr){    
return arr.filter(function(elt){
    return elt % 2 == 0;
    })   
}
console.log(fnFilterTablo([1,5,8,12]));