//clear
document.querySelector("#clear").addEventListener("click", ()=>{
    document.querySelector("#display").value = " ";
})

//backspace Function
const backSpace = ()=>{
    const num = document.querySelector("#display").value.slice(0,-1);
    document.querySelector("#display").value = num;
}

//one Function
const one = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "1";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "1";
    }

}
//two Function
const two = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "2";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "2";
    }

}

//three Function
const three = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "3";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "3";
    }

}

//four Function
const four = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "4";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "4";
    }

}

//five Function
const five = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "5";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "5";
    }

}

//six Function
const six = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "6";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "6";
    }

}

//seven Function
const seven = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "7";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "7";
    }

}

//eight Function
const eight = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = document.querySelector("#display").value + "8";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "8";
    }

}
//nine Function
const nine = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = document.querySelector("#display").value + "9";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "9";
    }

}

//zero Function
const zero = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = document.querySelector("#display").value + "0";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "0";
    }

}

//point Function
const point = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = ".";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + ".";
    }

}