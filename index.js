const charVal = document.getElementById("textarea");
let totalCount= document.getElementById("total-counter");
let remainingCount= document.getElementById("remaining-counter");

let char= 0;
const updateCounter =() => {
    userChar= charVal.value.length;
    totalCount.innerText=userChar;
    remainingCount.innerText = 150 - userChar;
   
};

charVal.addEventListener("keyup", () => updateCounter());

//copy the text area

const copyText =() =>
{
    charVal.select();
    charVal.setSelectionRange(0, 9999); //mobile
    navigator.clipboard.writeText(charVal.value); //important
    
}