function most_expensive(jewelry) {
    let value = Object.values(jewelry)
    let maximum = Math.max(...value)
    
        for (let key in jewelry)
        if(jewelry[key]===maximum)
        {
            var result= `The most expensive one is the ${key}`
        }
        return result
}
console.log(most_expensive({"Diamond Earrings": 980,
"Gold Watch": 250,
"Pearl Necklace": 4650}))