//get element by id
document.getElementById('demo').innerText='Javascript'

//get element by tag name
let ele=document.getElementsByTagName('p')
document.getElementById('demo').innerHTML=ele[0].innerHTML;

//get elements by class name
let ele2=document.getElementsByClassName('para')
document.getElementById('demo').innerHTML=ele2[0].innerHTML;

//writing into html
document.write("Hello Namaste !");

//number checking

function check(){
    let num=document.getElementById('demo').value;
    if(isNaN(num)){
        alert("wrong entry");
    }
    else{
        alert("correct entry");
    }
}