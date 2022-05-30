let string = 'hello world!'
let search = 'o'

for (let i = 0 ; i < string.length - 1 ; i++){
    if(string[i] === search){
        console.log(string[i], i)
    }
}
//string.length