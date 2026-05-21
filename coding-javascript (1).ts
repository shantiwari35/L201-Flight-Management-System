let data = [1,"neha","meena",6,2,"saurav",3]

function sortmixed(data){
  const string = data.filter(v=> typeof v === 'string').sort();
  const numberData = data.filter(value => typeof value ==='number').sort((a,b)=>a-b)
  return [...string , ...numberData];
  
  
}

console.log(sortmixed(data)) 
Output:

[ 'meena', 'neha', 'saurav', 1, 2, 3, 6 ]
____________________________________________________________________________________________________________________________________________

console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
  setTimeout(() => {
    console.log('Timeout 2');
  }, 0);
  return Promise.resolve();
}).then(() => {
  console.log('Promise 2');
});

console.log('End');
output :
Start
End
Promise 1
Promise 2
Timeout 1
Timeout 2


_______________________________________________________________________________________________________________________
const subject = new Subject<number>();

// First subscription
subject.subscribe(value => console.log('Subscriber 1:', value));

subject.next(1); // goes to Subscriber 1
subject.next(2); // goes to Subscriber 1

// Second subscription
subject.subscribe(value => console.log('Subscriber 2:', value));

subject.next(3); // goes to Subscriber 1 and Subscriber 2
Output:
yaml
Copy code
Subscriber 1: 1
Subscriber 1: 2
Subscriber 1: 3
Subscriber 2: 3
________________________________________________________________________________________________________
function countChar(str, ch) {
  let count = 0;
  for (let chr of str) {
    if (chr === ch) count++;
  }
  return count;
}


console.log(countChar("Meera","e"))
Output:

2
function countChar(str, ch) {
  let count = 0;
  for (let chr of str) {
    if (chr === ch) {
      count++;
    }
  }
  return count;
}

console.log(countChar(
  [1,5,7,7,8],7))
_______________________________________________________________________________________________________________________________________________

from([1,2,3]) with switchMap, *10 and setTimeout

Example:

from([1, 2, 3]).pipe(
  switchMap(val =>
    new Observable(observer => {
      setTimeout(() => {
        observer.next(val * 10);
        observer.complete();
      }, 1000);
    })
  )
).subscribe(console.log);


Output:

30
___________________________________________________________________


function findLargest(arr) {
    //Suppose first element is the largest
    let largest = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            // Update the largest if a bigger element is found
            largest = arr[i]; 
        }
    }
    return largest;
}

console.log(findLargest([99, 5, 3, 100, 1]));
function Fins2ndLargest(arr){
  
  let largest = arr[0];
  let secondLargest = -Infinity
  
  
  for(let i = 1; i<arr.length; i++){
    if(arr[i]> largest){
      
     secondLargest=largest;
      largest = arr[i]
    }
    else if (arr[i] > secondLargest && arr[i] < largest ){
      secondLargest = arr[i]
    }
      
  }
return secondLargest;
  
}
console.log(Fins2ndLargest([1,3,4,5,6,789,56]));

function findLargest(arr) {
    // Math.max() is used to find the largest number
    return Math.max(...arr); 
}

console.log(findLargest([99, 5, 3, 100, 1]));

// Define the array
let stringData = ["Neha", "meena", "pooran", "Papa", "mother"];

const stringdatalower= stringData.map(v => v.toLowerCase());
stringdatalower.sort();
console.log(stringdatalower);
_________________________________________________________________________________________
const arr = [1,2,3,4];
 const obj= arr.reduce((acc,value,index)=>{
   acc[index] = value
   return acc;
 },{})

console.log(obj);
________________________________________________________________________________________

let arr = [2,4,6,5,7,29,58,21,40,1];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {   // compare
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log(arr);

__________________________________________________________________________________________________________________________________
let obj= [
 {id:1, name:'A'},
 {id:4, name:'A'},
 {id:2, name:'B'},
  {id:2, name:'c'},
  {id:2, name:'B'},
]
const unique =[];
const uniqueData = obj.filter(value => {
  if(!unique.includes(value.name) && !unique.includes(value.id) ){
    unique.push(value.name);
    return true
  }
  
  return false
})

console.log(uniqueData);

_________________________________________________________________________________________________________________

const string = "meenameena i m neha a";

let stringArr = string.split(" ");
const data = [];

const repeatedfirstWord = stringArr.find(item => {
  if (data.includes(item)) {
    return true; // first repeated word found
  }
  data.push(item);
  return false;
});

console.log(repeatedfirstWord ? repeatedfirstWord : "No repeated word found" );
__________________________________________________________________________________________________________
const string = "meenameena i m neha meena meena";

let stringArr = string.split(" ");
const data = [];

const repeatedWord = stringArr.filter(item => {
  if (data.includes(item)) {
    return true; // first repeated word found
  }
  data.push(item);
  return false;
});

console.log(repeatedWord.length>0 ?  repeatedWord : "No repeated word found");
___________________________________________________________________________________________________________-

export const selectData =(state:any):userSata=>state.user

export const selectuser=createSelector(
    selectData
    (state:userSate)=> StaticRange.user
)

userData$=this.store.select(selectuser)
 ocurrence of 7 
const arr = [1, 7, 3, 7, 5, 7, 2];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 7) {
        count++;
    }
}

console.log(count); // Output: 3

const arr = [1,3,4,6,7,7,8,9,3]

const ocurrence = arr.reduce((acc,item)=>{
  if (acc[item] === 7){
  acc[item]=(acc[item] || 0) + 1
  return acc
  
  }
  
},{})

const arr = [1,3,4,6,7,7,8,9,3]

const duplicate = arr.filter((item,index)=> arr.indexOf(item) !== index)
  


console.log(duplicate);

const obj =[
  {name: "neha", age:56},
  {name:"meena", age:45}
  
]

const newObj = obj.map(item => ({ 
  name: `${item.name} test`,
  age : item.age*100
  
})

)

console.log(newObj);

const obj= [{name:"neha", age:30}]

function increamentAge(obj,num){
  const arr=[]
  for(let i=0;i<num;i++){
  obj.map(item=> arr.push({
    
    name:item.name,
    age:item.age++
    
  }))
 
  
  
}
return arr
}


console.log(modify(obj,4));


const string='javascript'
let str=string.split("")
console.log(str)
let reversed=''
for(let i=str.length-1;i>0;i--){
  
  reversed+=str[i]
}
console.log(reversed)


const string='madam'
function palidrom(string){
let str=string.split("")
console.log(str)
let reversed=''
for(let i=str.length-1;i>=0;i--){
  
  reversed+=str[i]
}
return reversed
}
console.log(palidrom('madam'))
==================================================================================
const obj = [{name:"neha", age: 24}]

function increamenAge(obj,num){
let arr = [];
for (let i=0;i<num;i++){
obj.map(item=> arr.push({
name: `${item.name}  meena`,
age: item.age++
}))
}


return arr
}

console.log(increamenAge(obj,4))

let data = [1,"neha","meena", 6 , 2 ,"saurav",3," ", " "];

function sortmixed(data){
  const numberData = data
    .filter(v => typeof v === "number")
    .sort((a, b) => a - b);

  const stringData = data
    .filter(v => typeof v === "string" )
    .sort((a,b)=> {
      if(a===" ")
      {
        return 1
        
      }
      if(b ===" "){
      return -1
      }
    });

  return [...numberData, ...stringData];
}

console.log(sortmixed(data));

const str = "my name is neha";

const result = str
  .split(" ")
  .map(word => word.split("").reverse().join(""))
  .join(" ");

console.log(result);

const data = [1,2,3,5]
let sum=0
for(let item of data ){
  
 sum += item
}
console.log(sum)

const str = "my name neha"
let word = str.split(" ") 
const result = word.map(item => 
{ let reversed= ""
for(let i = item.length-1; i>=0;i-- ) { 
  reversed+=item[i] 
  
}

return reversed
} )
console.log(result.join(" "))


const obj = {
  name: "Neha",
  age: 25,
  fun: function(a){
    console.log(a)
  }
};

const arr = Object.entries(obj).map(([key, value]) => {
  return { [key]: value };
});

console.log(arr);

const person = {
  name: 'Alice',
  greetRegular: function() {
    return "Hello, my name is " + this.name;
  },
  greetArrow: () => {
    return "Hello, my name is " + this.name;
  }
};

console.log(person.greetRegular());
console.log(person.greetArrow());

Hello, my name is Alice
Hello, my name is undefined

console.log(this); // will log the window object. output {}
// Function Declaration or Function Statment.
function z() {
  console.log(this);
}

z();

// Function Expression

let y = function () {
  console.log(this);
};

y();

// Named Function Expression

let x = function a() {
  console.log(this);
};

x();
All of the above functions will log the window object.

const str= "hi how are you"  // output Ih Woh Era Uoy

const word = str.split(" ")
const result= word.map(item => item.split("").reverse().join("").charAt(0).toUpperCase() + item.slice(1))
.join(" ")
console.log(result)

const str = "hi how are you";

const words = str.split(" ");

const result = words.map(word => {
  let reversed = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }

  return reversed.charAt(0).toUpperCase() + reversed.slice(1);
});

console.log(result.join(" "));
const x = [
  { id: "11", name: "Neha", invitedBy: "99" },
  { id: "12", name: "meena", invitedBy: "99" },
  { id: "33", name: "saurav", invitedBy: "97" },
  { id: "99", name: "goyal", invitedBy: "system" }
];

for (let obj of x) {
  if (obj.invitedBy === "system") {
    console.log(obj.name + " "+  "invited by system");
  } else {
    let inviter = x.filter(item => item.id === obj.invitedBy);
    let invitedName = inviter.length ? inviter[0].name : obj.invitedBy;

    console.log(invitedName);
  }
}

const x = [
  { id: "11", name: "Neha", invitedBy: "99" },
  { id: "12", name: "meena", invitedBy: "99" },
  { id: "33", name: "saurav", invitedBy: "97" },
  { id: "99", name: "goyal", invitedBy: "system" }
];

for (let obj of x) {
  if (obj.invitedBy === "system") {
    console.log(obj.name + " "+  "invited by system");
  } else {
    

    console.log(obj.name);
  }
}

const x = [
  { id: "11", name: "Neha", invitedBy: "99" },
  { id: "12", name: "Meena", invitedBy: "99" },
  { id: "33", name: "Saurav", invitedBy: "97" },
  { id: "99", name: "Goyal", invitedBy: "system" },
  { id: "99", name: "Ravi", invitedBy: "system" },
  { id: "98", name: "Ankit", invitedBy: "97" } // multiple invited by 97
]; 
for (let obj of x) {
  if (obj.invitedBy === "system") {
    console.log(`${obj.name} invited by system`);
  } else {
    let inviters = x.filter(item => item.id === obj.invitedBy);
    
    if (inviters.length) {
      // map all matched names and join with comma
      let names = inviters.map(inv => inv.name).join(', ');
      console.log(names);
    } else {
      console.log(obj.name);
    }
  }
}


let str = "javascript"

let str2 = str.split("")
const data = str2.filter(item => str2.indexOf(item) !== str2.lastIndexOf(item))
const unique= [...new Set(data)]
console.log(unique)


function findMissingNumber(arr) {
  const n = arr.length + 1;

  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}
======================================================================
console.log(findMissingNumber([1,2,3,5])); // 4

function findMissingNumber(arr) {
  const n = arr.length + 1;

  for (let i = 1; i <= n; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
}

console.log(findMissingNumber([1,2,3,5])); // 4
