function getBudget(array){
const sum=array.reduce(function(acc,item){
    return acc+item.budget
},0)
return sum
}
console.log(getBudget([{ name: "John", age: 21, budget: 23000 },
{ name: "Steve", age: 32, budget: 40000 },
{ name: "Martin", age: 16, budget:2700 }]))