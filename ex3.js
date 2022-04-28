function CreatObject(array){
    let object={}
   array.forEach(function(item) {
       object[item]=item.toUpperCase()
       
   });
    object=JSON.stringify(object)  
    return object
}
console.log(CreatObject(['p','a']))