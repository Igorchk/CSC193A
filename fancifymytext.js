const bigBtn = document.getElementById("button");
const inputText = document.getElementById("inputText");
const mooBtn = document.getElementById("Moo");

bigBtn.addEventListener("click", biggerText);
mooBtn.addEventListener("click", mooText);

function biggerText() { 
    inputText.style.fontSize = "24pt";
}
function mooText() {  
    var parts = inputText.value.split(".");
    str = parts.join("-Moo.");

    inputText.value = str;
        
    inputText.value = inputText.value.toUpperCase();
}


function radioChanged() { 
    const fancy = document.getElementById("fancy");
    const boring = document.getElementById("boring");
    
    if (fancy.checked) { 
        inputText.style.fontWeight = "bold";
        inputText.style.color = "blue";
        inputText.style.textDecoration = "underline";
    }
    if (boring.checked) { 
        inputText.style.fontWeight = "normal";
        inputText.style.color = "black";
        inputText.style.textDecoration = "none";
    }
}