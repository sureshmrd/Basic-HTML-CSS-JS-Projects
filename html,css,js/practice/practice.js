//1.VARIABLES - fname,age,enroll
let fname="suresh";//string
let age=20;//number
let enroll=true;//Boolean

//ARITHMETIC EXPRESSION - +,-,*,/,%
console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2/3);
console.log(2%3);

//USER INPUT - prompt or html dom
// let username=prompt("enter ur name: ");//using prompt
// console.log(username);

document.getElementById('submit').onclick=function(){
    let username=document.getElementById('name').value;//using DOM
    console.log(username);
}

//TYPE CONVERSION - NUMBER(),STRING(),BOOLEAN()
let x1=Number("33.123");//string->Number - 33.123
let x2=Number("hello");//string->Number  -NaN
let y=String(3.123);//Number->string    -"3.123"
let z1=Boolean("");//String->Boolean     -false(empty)
let z2=Boolean("hello");//String->Boolean -true
console.log(typeof x1 , typeof x2,typeof y,typeof z1,typeof z2);

//MATH FUNCTIONS - round,floor,ceil,max,min,sqrt,pow,abs
console.log(Math.round(3.123));//3
console.log(Math.floor(3.1234));//3
console.log(Math.ceil(3.1234));//4
console.log(Math.pow(3,2));//9
console.log(Math.sqrt(99));//9.9498743710662
console.log(Math.abs(-3.1234));//3.1234
console.log(Math.max(99,88,123));//123
console.log(Math.min(1,2,3));//1

//SIMPLE COUNTER PROGRAMM - increment,decrement,reset
let counter=0;
document.getElementById('dec').onclick=function(){
    counter-=1;
    document.getElementById('num').innerHTML=counter;
}
document.getElementById('inc').onclick=function(){
    counter+=1;
    document.getElementById('num').innerHTML=counter;
}
document.getElementById('res').onclick=function(){
    counter=0;
    document.getElementById('num').innerHTML=counter;
}

//MATH.RANDOM() - to generate random numbers
console.log(Math.random());//numbers from 0 to 1
console.log(Math.random()*10);//numbers from 0 to 10 in decimals including 0.000
console.log(Math.floor(Math.random()*10));//numbers from 0 to 10(integers) including 0
console.log(Math.floor(Math.random()*10+1));//without 0

//STRING PROPERTIES & METHODS - length,charAt,indexof,lastindexof,trim,replace....
let name1=" Sureshhh ram";
console.log(name1.length);//8
console.log(name1.charAt(0));//S
console.log(name1.indexOf('S'));//0
console.log(name1.lastIndexOf('h'));//7
console.log(name1.toUpperCase());//SURESHHH
console.log(name1.toLocaleLowerCase());//sureshhh
console.log(name1.replace("h","$"));//Sures$hh
console.log(name1.replaceAll("h","#"));//Sures###
console.log(name1.trim());//Suresh ram

//SLICE() - modifies string without changing original string
let fullName="Ram Suresh";
let firstName=fullName.slice(0,fullName.indexOf(" "));
let lastName=fullName.slice(fullName.indexOf(" ")+1);
console.log("fname:" + firstName + "lname:" + lastName);

//if STATEMENT
let online=true;
if(online)console.log("online!");
else console.log("Offline!");

//CHECKED property - returns true if checked otherwise false
window.onload=function(){
document.getElementById('btn').onclick=function(){
    const tick=document.getElementById('checkbox');
if(tick.checked){
    document.getElementById('para').innerText="You are Subscribed!";
}
else{
    document.getElementById('para').innerText="You are NOT Subscribed!"; 
}
}       //here onload function is used coz:the problem is iam executing the script before the DOM is loaded , this script is added in practice.js file which is added before the DOM is created,so execute script after DOM is ready.
}

//LOGICAL OPERATORS &&,||,!
let rain=true;
let temp=30;
if(!rain){             //NOT operator - reverse the value
    console.log("you can play!");
}
else{
    console.log("cant play outside!");
}
if(temp<=35 && !rain){  //AND && operator 
    console.log("You can play Outside!");
}
else{
    console.log("You cant play outside!");
}

//WHILE AND DO-WHILE LOOPS
// let username="";
// let username2;
// while(username=="" || username==null){
//     //username=prompt("enter name");
// }
// do{
//     //username2=prompt("enter name:");
// }while(username2==""||username2==null);

//TEMPLATE LITERALS
let city="eluru";
let pincode=534007;
console.log(`You are from ${city} city with pincode ${pincode} `);

//NUMBER GUESSING TASK 
let randNum=Math.floor(Math.random()*10+1)
let guesses=0;
window.onload=function(){
document.getElementById('subbtn').onclick=function(){
    let numGuess=Number(document.getElementById('guess').value);
    if(randNum==numGuess){
        guesses++;
        document.getElementById('textarea').innerHTML=`you Guessed it correct ! Number is ${randNum} and you took ${guesses} guesses`
    }
    else if(randNum>numGuess){
       alert("your number is too small!"); 
    }
    else if(randNum<numGuess){
        alert("your number is too big!");
    }
    else{
        alert("invalid number!");
    }
}
}

//FORMAT CURRENCY -> toLocalestring(locale,{options})
let myNum=123456.789;
console.log(myNum.toLocaleString("en-US"));//123,456.789    ->us system
console.log(myNum.toLocaleString("hi-IN"));//1,23,456.789   ->indian system
console.log(myNum.toLocaleString("de-DE"));//123.456,789   ->standard German system
console.log(myNum.toLocaleString("en-US",{style:"currency",currency:"USD"}));//$123,456.79
console.log(myNum.toLocaleString("hi-IN",{style:"currency",currency:"INR"}));// ₹1,23,456.79
console.log(myNum.toLocaleString("de-DE",{style:"currency",currency:"EUR"}));//123.456,79 €
console.log(myNum.toLocaleString(undefined,{style:"percent"}));//12,345,679%
console.log(myNum.toLocaleString(undefined,{style:"unit",unit:"celsius"}));//123,456.789°C

//TEMPERATURE CONVERSION TASK!
//temperature ->celsius and temperature ->fahrenhiet
window.onload=function(){
    document.getElementById('click').onclick=function(){
        let temp=Number(document.getElementById('temperature').value);
        if(document.getElementById('celsius').checked){
            celsiusTemp=(temp-32)*(5/9);
            document.getElementById('paragraph').innerHTML=`In Celsius => ${celsiusTemp}`;
        }
        else if(document.getElementById('fahrenheit').checked){
            fahrenheitTemp=temp * 9/5 + 32;
            document.getElementById('paragraph').innerHTML=`In Fahrenheit => ${fahrenheitTemp}`;
        }
        else{
            alert("please select the option!");
        }
    }
}

//ARRAYS 
const names=["ram","syam","rahim"];//array literal
const numbers=new Array(1,2,3);//array using new keyword
console.log(typeof names);//object
console.log(names.length);//3
console.log(Array.isArray(names));//checking of array type 1 ->true
console.log(names instanceof Array);//checking of array type 2 -> true
//Array Methods
console.log(names.toString());//comma seperated values of elements of array->ram,syam..
console.log(names.join("&"));//ram&syam&rahim
let ele3=names.pop();
console.log(ele3);//gives the popped element
let newEle3=names.push("raj");
console.log(newEle3);//returns new array length
let ele1=names.shift();
console.log(ele1);//returns first element
let newEle1=names.unshift("suresh");
console.log(newEle1);//returns new array length
console.log(names);
names[0]="ram";//changing array element
console.log(names);
const newArray=names.concat(numbers);//merging arrays->2 or more can be concatenated!
console.log(newArray);
const arr=names.concat("peter");
console.log(arr);

const nums=[91,86,92,66,71,99];
nums.splice(2,0,75,87);
console.log(nums);
nums.splice(2,2);
console.log(nums);
const newNums=nums.slice(2);
console.log(newNums);
console.log(nums);
console.log(names.sort());
console.log(nums.reverse());
const points=[40,100,25,1000,5];
console.log(points.sort());//100,1000,25,40,5 -> sort() by default sorts as strings
//solution:
points.sort(function(a,b){return a-b});// a-b ascending & b-a descending
console.log(points);
console.log(Math.max.apply(null,points));
console.log(Math.min.apply(null,points));
//Array Iteration
const elements=[1,2,3,4,5,6];
elements.forEach(function(value,index,array){
    console.log(`index:${index} : value:${value}`);
})
let sample=elements.every(function(value){
    return value>1;
})
console.log(sample);
let sample1=elements.some(function(value){
    return value>1;
})
console.log(sample1);
const arr1=Array.from("ABCDE");//creates array object from any iterable object ->from
console.log(arr1);
console.log(arr1.includes("C"));//checks if element present in array or not
//spread operator
const mons1=["jan","feb","mar"];
const sam=[...mons1];
console.log(sam);
//------------------------
// const Nums=[1,2,3,4,5,6];
// const Nums2=[];
// Nums.forEach(function(value){
//     if(value%2==0){
//         Nums2.push(value);
//     }
// })
// console.log(Nums2);

//MAP,REDUCE,FILTER
const anythings=[1,2,3,4,5];
const arr3=anythings.map(function(value){
    return value*2;
})
console.log(arr3);
let sum=anythings.reduce(function(total,value){
    total+=value;
    return total;
});
console.log(sum);
const Nums=[1,2,3,4,5,6,3,3,6,5];// filter creates new array of elements satisfying the condition,whereas every() and some() returns Boolean values.
const evens=Nums.filter(function(value){
    return value%2==0;
})
//console.log(`evens are ${evens}`);
console.log(Nums.indexOf(4));
console.log(Nums.lastIndexOf(3));

//MAP FUNCTION
const brands=new Map([
    ["puma",70],
    ["random",80],
    ["random2",60]
]);

console.log(brands.get("puma"));
brands.set("rolex",70);
brands.delete("random2");
brands.forEach((value,key)=>console.log(`${value}:${key}`));
console.log(brands.has("random2"));//false
console.log(brands.size);

//OBJECTS
const stud={
    "suresh":91,
    "ajay":'h9',
    "balaji":86,
    func:function(){
        console.log(`Function invoked!`);
    }
};
console.log(stud.suresh);
console.log(stud.func());

//this -> refers to the immediate context 
const car1={
    "model":"SUV",
    "year":2018,
    func:function(){
        console.log(`${this.model} model car of ${this.year} version`);
        console.log(`${car1.model} model car of ${car1.year} version`);//both are same
        //this refers to its immediate context i.e, car1 object;in global it refers to window object 
    }
};
console.log(car1.func());

//CLASSES 
class first{//class
    constructor(name,id){
        this.name=name;
        this.id=id;
    }
    fullName(marks){
        console.log(`name is ${this.name} and id is ${this.id} marks is ${marks}`);
    }
}
const obj1=new first("suresh",591);//object
const obj2=new first("ram",555);
obj1.fullName(91);

//inheritance of classes
class Animal{
    eat(){
        console.log(`${this.name} is eating`);
    }
}
class lion extends Animal{
    name="Lion";
   runSpeed(s){
    console.log(`${s} is ${this.name} speed`);
   }
}
class crow extends Animal{
    name="crow";
   flySpeed(s){
    console.log(`${s} is ${this.name} speed`);
   }
}
const obj=new lion();
obj.eat();
obj.runSpeed(200);
const objj=new crow();
objj.eat();
objj.flySpeed(250);
//static variable is belongs to class not to any objects.
//super keyword is used to call the parent class constructor.
//constructor() is invoked when object is created , if we do not declare the constructor() js automatically keeps the empty constructor.
class car{
    constructor(brand){
        this.brand=brand;
    }
    present(){
        return `I have a ${this.brand}`;
    }
}
//super()
class Model extends car{
    constructor(brand,model){
        super(brand);         // super() calls the parent class constructor with brand as argument.
        this.model=model;       
    }
    show(){
        console.log(`${this.present()} it is ${this.model} model.`)
    }
}
let myCar=new Model("Ford","mustang");
myCar.show();
//static
class Cars{
    static numOfCars=0;
    constructor(model){
        this.model=model;
        Cars.numOfCars +=1;
    }
}
const object1=new Cars("Ford");
const object2=new Cars("Benz");
const object3=new Cars("fereria");
console.log(object1.numOfCars);// returns undefined coz objects cannot access static variables 
console.log(Cars.numOfCars);//Cars is a class , so it can access static variables.

//example of data-* attribute in DOM
window.onload=function(){
let bar = document.querySelector('#main');
console.log(bar.dataset.show);
}
