let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#New-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // PlayerX PlayerO 
const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];

const resetGame = () =>{
  turnO = true;
  enaabledBoxes();
  msgContainer.classList.add("hide"); // hide msgcontainer after reset game

};


 // set the value of each boxes---->
boxes.forEach((box) =>{
  // add eventListener and to perform some task
  box.addEventListener('click',()=>{
    console.log("box was clicked");
    if(turnO){
      box.innerHTML = "O";
      turnO = false;
    }
    else{
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});



 // after one person win the game next not allow any input
const disabledBoxes = () =>{
  for(let box of boxes){
    box.disabled = true;
  }
}

// new game  start all boxes are newly start---->
const enaabledBoxes = () =>{
  for(let box of boxes){
    box.disabled = false;
    // text will all empty 
    box.innerHTML = "";
  }
}


// function to show a msg or winner and identify the winner
const showWinner = (winner)=>{
 msg.innerHTML = `Congratulations bro , Winner is ${winner}`;
 msgContainer.classList.remove("hide");
 disabledBoxes();
}

// identify who is winner of this game...-->
const checkWinner = ()=>{
  for(let pattern of winPatterns){
    // find individual index of every position
    // console.log(pattern[0],pattern[1],pattern[2]);

    // position of every element index by index...>

    // console.log(
    //   boxes[pattern[0]].innerHTML, 
    //   boxes[pattern[1]].innerHTML,
    //   boxes[pattern[2]].innerHTML
    // );
 

   
   
   
    // find the position of every elemennt---->

    let pos1Val = boxes[pattern[0]].innerHTML;
    let pos2Val = boxes[pattern[1]].innerHTML;
    let pos3Val = boxes[pattern[2]].innerHTML;
    if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
      if(pos1Val===pos2Val && pos2Val===pos3Val){
        console.log("winner",pos1Val); // show who is winner
        showWinner(pos1Val); // pass the winner as a parameter

      }
    }
  }
};

// to add the reset button
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
