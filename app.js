//1) Var let const

//var ke keyword se bna hua variable ko hum Reassignment aur Redeclaration krskte hen//
//example

var a = "Asad"
var a = "Umer"



//let ke keyword se bna hua variable ko hum Reassignmrnt to krskte hen but Redaclaration nhi krskte aur ye blockscope hota he
//exampple

// let b = "Asad"
// // let b = "adnan" // error dega



//const ke keyword se bna hua variable ko hum Reassignmrnt nhi krskte aur Redaclaration bhi nhi krskte aur ye bhi blockscoped hota he
//example

// const c = "Asad"
// c = "rajab" //TypeError ayega



//2)Hoisting
//hoisting javascript ka default behaviour he jo ke script chlne se pehle read hojata he. function ke keyword se bna hua function aur avr se bna hua variable hoist hota he
// example

abc()
function abc(){
    console.log("hoisting");
}



//3)Template Literals
//Template Literals ko hum backticks`` se denote krte hen aur ye multi line strings ko bhi allow krta he aur aur easier hota he lengthy strings likhne ke liye
// example

// let b = "Asad Ahmed"
// console.log(`My name is ${b}`);





// 4)ternary  operator
// ternary operator short tarika he if else ki conition likhne ke liya agr condition one line ki he

// let moduleEnd = "true"
// let result = moduleEnd ? "next module me jao" : "pehle module end karo"
// console.log(result);




// 5)Circuits
// circuits aik chain ki tarah km krta he agr left se value usko true milti jaegi to aage jata jayega jha false hogi wahi break hojayega

// let condition = 5
// let condition2 = "true"
// let ans = condition && condition2 && "20"
// console.log(ans);



// 6)Spread Operator
// ...spread operator ko denote krta he isse hum arrays ki values ko dosre array me save kra skte hen

// let c = [1,2,3,4]
// let d = [5,6,7,8]
// let merge = [...c, ...d]
// console.log(merge)




// 6) Rest Operator:
// rest operator ko hum function ke parameter me receive krte hen ...se ye argument ke sari value ko get krleta he
// example

// function rest(...a){
// console.log(a);
// }
// rest(2,34,4,5,7,9,3)




// 7)Destructuring of array and Object
// Array pr destructuring se hum array ke andar ki value nikal skte hen take bar bar hame array ko call na krna pare 

// let array = ["Asad","Raza","Khan"]
// let [name] = array
// console.log(name);




// Object ki properties get krne ke liye good practice he ke uspr destructuring krlen take bar bar obj.krke properties na nikalna pare
// let obj = {
//     name: "Asad",
//     batch: 11,
//     trainer: "Basit Ahmed"
// }
// let properties = {name, batch, trainer} = obj




// 8)Pass By value Pass By Reference
// pass by reference agr hum array ya Object pr karenge to wo apna reference share karega mtlb uska update ya remove ka access dono ke pass hoga

let ref = ["A","B","C"]
let ref2 = ref
ref2.push("k")
console.log(ref);



// pass by value agr hum array ya Object pr karenge to wo apna reference share nhi krta blke values nikal kr liata he isse original wale ki health pr koi faraq nhi prta 

// let arr = ["Asad","Ahmed"]
// let arr1 = [...arr]
// arr1.push("ji")
// console.log(arr);




// 9)Object Methds
// keys se hum object ke andar ki sari keys find krskte hen
// example

// let obj ={firstName:"Muhmmad",lastName:"asad"}
// let find = Object.keys(obj)
// console.log(find);



// values se hum object ke andar ki sari values find krskte hen
// example
// let obj ={firstName:"Muhmmad",lastName:"asad"}
// let find = Object.values(obj)
// console.log(find);



// Freeze se hum object ko freeze krskte hen mtlb freeze krne ke bd koichanges nhi krskte usme
// example
// let obj ={firstName:"Muhmmad",lastName:"asad"}
// let find = Object.freeze(obj)
// obj.profession = "developer"




// entries se hum object ke andar ki sari keys aur uski values find krskte hen
// example
// let obj ={firstName:"Muhmmad",lastName:"asad"}
// let find = Object.entries(obj)
// console.log(find);




// Functions
// 1)Higher Order and Call back Function
// jis function ke argument me koi function pass kia jaye wo function higher Order function hota he aur jo function pass hua he wo call back function hota he

// function foo(a){
//     console.log("parent>>", a);
// }
// function childFoo(b){
//    return console.log("child>>",b);
// }
// /*Foo Higher Order*/foo(childFoo(90))//childFoo callback




// Arrow Functions:
// arrow function shorter syntax he agr one line code he to without curly braces likh skte hen wo default me value return krta he aur agr one argument he to parenthesis bhi hata skte hen aur ye space bhi km leta he memory me
// example
// const sayHello = name => `hello ${name}`
// console.log(sayHello("Asad"));





// default parameter

// default parameter me hum parameter me hum default value rakh sakte hen ke agar argumnent se value na mili to 

function default(a,b){
    console.log(a,b);
}

















