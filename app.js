let body = document.querySelector("body"),
    inputNumber = document.querySelector("input"),
    buttonsDiv = document.querySelector(".buttons"),
    btns = document.querySelectorAll(".box"),
    resetBtn = document.querySelector(".reset"),
    deleteBtn = document.querySelector(".delete"),
    equalsBtn = document.querySelector(".equal"),
    radioInputDiv = document.querySelector(".radio-input"),
    themeOne = document.getElementById("one"),
    themeTwo = document.getElementById("two"),
    themeThree = document.getElementById("three"),
    head = document.querySelector(".head"),
    btn0 = document.getElementById("btn0"),
    btn1 = document.getElementById("btn1"),
    btn2 = document.getElementById("btn2"),
    btn3 = document.getElementById("btn3"),
    btn4 = document.getElementById("btn4"),
    btn5 = document.getElementById("btn5"),
    btn6 = document.getElementById("btn6"),
    btn7 = document.getElementById("btn7"),
    btn8 = document.getElementById("btn8"),
    btn9 = document.getElementById("btn9"),
    btnPlus = document.getElementById("plus"),
    btnMinus = document.getElementById("minus"),
    btnDivision = document.getElementById("divide"),
    btnMultiply = document.getElementById("multiply"),
    btnDot = document.getElementById("dot");


btn0.addEventListener("click", zero );

btn1.addEventListener("click", function(){
    if(inputNumber.value === "0"){
        inputNumber.value = "1";
    }
    else{
        inputNumber.value = (inputNumber.value + "1").substring(0, 15);
    }
});
btn2.addEventListener("click", function(){
    if(inputNumber.value === "0"){
        inputNumber.value = "2";
    }
    else{
        inputNumber.value = (inputNumber.value + "2").substring(0, 15);
    }
});
btn3.addEventListener("click", function(){
    if(inputNumber.value === "0"){
        inputNumber.value = "3";
    }
    else{
        inputNumber.value = (inputNumber.value + "3").substring(0, 15);
    }
});
btn4.addEventListener("click", function(){
    if(inputNumber.value === "0"){
        inputNumber.value = "4";
    }
    else{
        inputNumber.value = (inputNumber.value + "4").substring(0, 15);
    }
});
btn5.addEventListener("click", function(){
    if(inputNumber.value === "0"){
        inputNumber.value = "5";
    }
    else{
        inputNumber.value = (inputNumber.value + "5").substring(0, 15);
    }
});
btn6.addEventListener("click", function(){
    if(inputNumber.value === "0"){
        inputNumber.value = "6";
    }
    else{
        inputNumber.value = (inputNumber.value + "6").substring(0, 15);
    }
});
btn7.addEventListener("click", function(){
    if(inputNumber.value === "0"){
        inputNumber.value = "7";
    }
    else{
        inputNumber.value = (inputNumber.value + "7").substring(0, 15);
    }
});
btn8.addEventListener("click", function(){
    if(inputNumber.value === "0"){
        inputNumber.value = "8";
    }
    else{
        inputNumber.value = (inputNumber.value + "8").substring(0, 15);
    }
});
btn9.addEventListener("click", function(){
    if(inputNumber.value === "0"){
        inputNumber.value = "9";
    }
    else{
        inputNumber.value = (inputNumber.value + "9").substring(0, 15);
    }
});
btnDot.addEventListener("click", function(){
    inputNumber.value = (inputNumber.value + ".").substring(0, 15);
});
deleteBtn.addEventListener("click", function(){
    inputNumber.value = inputNumber.value.slice(0, -1);
});

btnPlus.addEventListener("click", function(){
    inputNumber.value = (inputNumber.value + " + ");
});

btnMinus.addEventListener("click", function(){
    inputNumber.value = (inputNumber.value + " - ");
});

btnMultiply.addEventListener("click", function(){
    inputNumber.value = (inputNumber.value + " * ");
});

btnDivision.addEventListener("click", function(){
    inputNumber.value = (inputNumber.value + " / ");
});

resetBtn.addEventListener("click", function(){
    inputNumber.value = "0"
});

equalsBtn.addEventListener("click", calculate);

function zero(){
    if(inputNumber.value === "" || inputNumber.value === "0"){
        inputNumber.value = "0";
    }
    else{
        inputNumber.value = (inputNumber.value + "0").substring(0, 15);
    }
}

function calculate() {
    var p = inputNumber.value;
    var q = eval(p);
    inputNumber.value = q;
} 

themeOne.addEventListener("click", function(){
    body.style.backgroundColor = "hsl(222, 26%, 31%)";
    head.style.color = "white";
    radioInputDiv.style.backgroundColor = "hsl(223, 31%, 20%";
    buttonsDiv.style.backgroundColor = "hsl(223, 31%, 20%";
    inputNumber.style.backgroundColor = "hsl(224, 36%, 15%)";
    inputNumber.style.borderColor = "hsl(224, 36%, 15%)";
    inputNumber.style.color = "white";
    themeOne.style.backgroundColor = "hsl(6, 63%, 50%)";
    themeOne.style.borderColor = "hsl(6, 63%, 50%)";
    themeTwo.style.backgroundColor = "hsl(223, 31%, 20%)";
    themeTwo.style.borderColor = "hsl(223, 31%, 20%)";
    themeThree.style.backgroundColor = "hsl(223, 31%, 20%)";
    themeThree.style.borderColor = "hsl(223, 31%, 20%)";
    btns.forEach(btn => {
        btn.style.backgroundColor = "hsl(30, 25%, 89%)";
        btn.style.color = "hsl(221, 14%, 31%)";
        btn.style.boxShadow = "0px 4px 0px 0px hsl(28, 16%, 65%)";
        btn.addEventListener("mouseover", function(){
            btn.style.backgroundColor = "white";
        });
        btn.addEventListener("mouseout", function(){
            btn.style.backgroundColor = "hsl(30, 25%, 89%)";
        })
    });
    resetBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
    resetBtn.style.color = "white";
    resetBtn.style.boxShadow = "0px 4px 0px 0px hsl(224, 28%, 35%)";
    deleteBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
    deleteBtn.style.color = "white";
    deleteBtn.style.boxShadow = "0px 4px 0px 0px hsl(224, 28%, 35%)";
    equalsBtn.style.backgroundColor = "hsl(6, 63%, 50%)";
    equalsBtn.style.color = "white";
    equalsBtn.style.boxShadow = "0px 4px 0px 0px hsl(6, 70%, 34%)";
});

themeTwo.addEventListener("click", function(){
    body.style.backgroundColor = "hsl(0, 0%, 90%)";
    head.style.color = "black";
    radioInputDiv.style.backgroundColor = "hsl(0, 5%, 81%)";
    buttonsDiv.style.backgroundColor = "hsl(0, 5%, 81%)";
    inputNumber.style.backgroundColor = "hsl(0, 0%, 93%)";
    inputNumber.style.borderColor = "hsl(0, 0%, 93%)";
    inputNumber.style.color = "black";
    themeOne.style.backgroundColor = "hsl(0, 5%, 81%)";
    themeOne.style.borderColor = "hsl(0, 5%, 81%)";
    themeTwo.style.backgroundColor = "hsl(25, 98%, 40%)";
    themeTwo.style.borderColor = "hsl(25, 98%, 40%)";
    themeThree.style.backgroundColor = "hsl(0, 5%, 81%)";
    themeThree.style.borderColor = "hsl(0, 5%, 81%)";
    btns.forEach(btn => {
        btn.style.backgroundColor = "hsl(45, 7%, 89%)";
        btn.style.color = "hsl(60, 10%, 19%)";
        btn.style.boxShadow = "0px 4px 0px 0px hsl(35, 11%, 61%)";
        btn.addEventListener("mouseover", function(){
            btn.style.backgroundColor = "white";
        });
        btn.addEventListener("mouseout", function(){
            btn.style.backgroundColor = "hsl(45, 7%, 89%)";
        })
    });
    resetBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
    resetBtn.style.color = "white";
    resetBtn.style.boxShadow = "0px 4px 0px 0px hsl(185, 58%, 25%)";
    resetBtn.addEventListener("mouseover", function(){
        resetBtn.style.backgroundColor = "hsl(185, 58%, 25%)";
    });
    resetBtn.addEventListener("mouseout", function(){
        resetBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
    });
    deleteBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
    deleteBtn.style.color = "white";
    deleteBtn.style.boxShadow = "0px 4px 0px 0px hsl(185, 58%, 25%)";
    deleteBtn.addEventListener("mouseover", function(){
        deleteBtn.style.backgroundColor = "hsl(185, 58%, 25%)";
    });
    deleteBtn.addEventListener("mouseout", function(){
        deleteBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
    });
    equalsBtn.style.backgroundColor = "hsl(25, 98%, 40%)";
    equalsBtn.style.color = "white";
    equalsBtn.style.boxShadow = "0px 4px 0px 0px hsl(25, 99%, 27%)";
    equalsBtn.addEventListener("mouseover", function(){
        equalsBtn.style.backgroundColor = "hsl(25, 99%, 27%)";
    });
    equalsBtn.addEventListener("mouseout", function(){
        equalsBtn.style.backgroundColor = "hsl(25, 98%, 40%)";
    });
});

themeThree.addEventListener("click", function(){
    body.style.backgroundColor = "hsl(268, 75%, 9%)";
    head.style.color = "hsl(52, 100%, 62%)";
    radioInputDiv.style.backgroundColor = "hsl(268, 71%, 12%)";
    buttonsDiv.style.backgroundColor = "hsl(268, 71%, 12%)";
    inputNumber.style.backgroundColor = "hsl(268, 71%, 12%)";
    inputNumber.style.borderColor = "hsl(268, 71%, 12%)";
    inputNumber.style.color = "hsl(52, 100%, 62%)";
    themeOne.style.backgroundColor = "hsl(268, 71%, 12%)";
    themeOne.style.borderColor = "hsl(268, 71%, 12%)";
    themeTwo.style.backgroundColor = "hsl(268, 71%, 12%)";
    themeTwo.style.borderColor = "hsl(268, 71%, 12%)";
    themeThree.style.backgroundColor = "hsl(176, 100%, 44%)";
    themeThree.style.borderColor = "hsl(176, 100%, 44%)";
    btns.forEach(btn => {
        btn.style.backgroundColor = "hsl(268, 47%, 21%)";
        btn.style.color = "hsl(52, 100%, 62%)";
        btn.style.boxShadow = "0px 4px 0px 0px hsl(290, 70%, 36%)";
        btn.addEventListener("mouseover", function(){
            btn.style.backgroundColor = "hsl(290, 70%, 36%)";
        });
        btn.addEventListener("mouseout", function(){
            btn.style.backgroundColor = "hsl(268, 47%, 21%)";
        })
    });
    resetBtn.style.backgroundColor = "hsl(281, 89%, 26%)";
    resetBtn.style.color = "white";
    resetBtn.style.boxShadow = "0px 4px 0px 0px hsl(285, 91%, 52%)";
    deleteBtn.style.backgroundColor = "hsl(281, 89%, 26%)";
    deleteBtn.style.color = "white";
    deleteBtn.style.boxShadow = "0px 4px 0px 0px hsl(285, 91%, 52%)";
    equalsBtn.style.backgroundColor = "hsl(176, 100%, 44%)";
    equalsBtn.style.color = "hsl(198, 20%, 13%)";
    equalsBtn.style.boxShadow = "0px 4px 0px 0px hsl(177, 92%, 70%)";
    equalsBtn.addEventListener("mouseover", function(){
        equalsBtn.style.backgroundColor = "hsl(177, 92%, 70%)";
    });
    equalsBtn.addEventListener("mouseout", function(){
        equalsBtn.style.backgroundColor = "hsl(176, 100%, 44%)";
    });
});