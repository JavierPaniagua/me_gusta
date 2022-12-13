var count = 1;
var count1 = 1;
var count2 = 1;
var countElement = document.querySelector("#count");
var countElement = document.querySelector(".count1");
var countElement = document.querySelector(".count2");


function like() {
    count++;
    countElement.innerText = count + " like(s)" ;
    
}

function like1() {
    count1++;
    countElement.innerText = count1 + " like(s)" ;
    
}

function like2() {
    count2++;
    countElement.innerText = count2 + " like(s)" ;
    
}