

//Cipher bellow

let isActiveUncipher = false;

let isActive = false;

let button = document.getElementById("btn");
let outPut = document.getElementById("output");

button.addEventListener("click", function () {

 isActive = true;

  let inputValue = document.getElementById("input").value;

  let inputValueArray = inputValue.split("");

  for (let i = 0; i < inputValueArray.length; i++) {
    if (inputValueArray[i] === "a") {
        outPut.textContent += "å"; 
        console.log("å")
    } else if (inputValueArray[i] === "b") {
        outPut.textContent += "ö";
    }else if (inputValueArray[i] === "c") {
        outPut.textContent += "ä";
    }else if (inputValueArray[i] === "d") {
        outPut.textContent += "z";
    }else if (inputValueArray[i] === "e") {
        outPut.textContent += "y";
    }else if (inputValueArray[i] === "f") {
        outPut.textContent += "x";
    }else if (inputValueArray[i] === "g") {
        outPut.textContent += "w";
    }else if (inputValueArray[i] === "h") {
        outPut.textContent += "v";
    }else if (inputValueArray[i] === "i") {
        outPut.textContent += "u";
    }else if (inputValueArray[i] === "j") {
        outPut.textContent += "t";
    }else if (inputValueArray[i] === "k") {
        outPut.textContent += "s";
    }else if (inputValueArray[i] === "l") {
        outPut.textContent += "r";
    }else if (inputValueArray[i] === "m") {
        outPut.textContent += "q";
    }else if (inputValueArray[i] === "n") {
        outPut.textContent += "p";
    }else if (inputValueArray[i] === "o") {
        outPut.textContent += "o";
    }else if (inputValueArray[i] === "p") {
        outPut.textContent += "n";
    }else if (inputValueArray[i] === "q") {
        outPut.textContent += "m";
    }else if (inputValueArray[i] === "r") {
        outPut.textContent += "l";
    }else if (inputValueArray[i] === "s") {
        outPut.textContent += "k";
    }else if (inputValueArray[i] === "t") {
        outPut.textContent += "j";
    }else if (inputValueArray[i] === "u") {
        outPut.textContent += "i";
    }else if (inputValueArray[i] === "v") {
        outPut.textContent += "h";
    }else if (inputValueArray[i] === "w") {
        outPut.textContent += "g";
    }else if (inputValueArray[i] === "x") {
        outPut.textContent += "f";
    }else if (inputValueArray[i] === "y") {
        outPut.textContent += "e";
    }else if (inputValueArray[i] === "z") {
        outPut.textContent += "d";
    }else if (inputValueArray[i] === "ä") {
        outPut.textContent += "c";
    }else if (inputValueArray[i] === "ö") {
        outPut.textContent += "b";
    }else if (inputValueArray[i] === "å") {
        outPut.textContent += "a";
    } else if (inputValueArray[i] == "nbsp" ) {
      outPut.textContent += " ";
  } else {
    outPut.textContent += inputValueArray[i];

  }
  }
});


let input = document.getElementById("input");

input.addEventListener("click", function(){
if (isActive ){
    outPut.innerHTML = "-";
    isActive = false;
}


});








