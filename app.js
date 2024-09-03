let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg =document.querySelector("#msg");
let turnO=true;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turnO=true;
    enableboxes();
    msgContainer.classList.add("hide");
}
const newGame=()=>{
    turnO=true;
    enableboxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    }); 
});
const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const shoWinner=(winner)=>{
    msg.innerText=`congratulations,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    document.body.style.background = "#ffffff" ;
    disabledboxes();
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}
const checkWinner=()=>{
    for(let pattern of winpattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("Winner",pos1Val);
                shoWinner(pos1Val);
            }
        }
    }
}
// let a=alert("Let's Play");
// let b=prompt("Enter X or O..");
newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",newGame);
// document.getElementById("msg").style.animation = "mynewmove 4s 2";