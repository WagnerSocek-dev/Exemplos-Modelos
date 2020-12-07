arr_nu = [1,2,3,4,5,6,7,8]
arr_st = ["cafe","abacate","jaca","limao","batata","aasda"]

function removerNumero(arr,num){
  return arr.filter(el => el != num)
}

console.log(removerNumero(arr_nu, 5));


function removerString(arr,st){
  return arr.filter(el => el != st)
}

console.log(arr_st)
console.log(removerString(arr_st, "limao"));

