var count = 1;
var count1 = 1;
var count2 = 1;
var countElement = document.querySelector("#count");
var count1Element = document.querySelector("#count1");
var count2Element = document.querySelector("#count2");


function like() {
    count++;
    countElement.innerText = count + " like(s)" ;
    
}

function like1() {
    count1++;
    count1Element.innerText = count1 + " like(s)" ;
    
}

function like2() {
    count2++;
    count2Element.innerText = count2 + " like(s)" ;
    
}