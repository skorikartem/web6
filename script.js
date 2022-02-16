//Завдання 1
function unique(arr) {
    return Array.from(new Set(arr))
}

//Завдання 2

function aclean(arr) {
    let obj = {}
  
    for (let i = 0; i < arr.length; i++) {
        let sorted = arr[i].toLowerCase().split("").sort().join("")
        obj[sorted] = arr[i]
    }
  
    return Object.values(obj)
}
  
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]
  
console.log(aclean(arr))