let userscore = 0;
let compscore = 0;


const choices = document.querySelectorAll(".choices");

const gencomputerchoice = () => {
  const options = ["rock", "paper","scissors"];
  const randIdx =Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawGame = ()=> {
  console.log("game was draw.");

};





const playGame = (userchoice) => {
  console.log("user choice =", userchoice);
  //Generate computer choice
  const compchoice = gencompchoice();
  console.log("comp choice = ",userchoice);

  if (userchoice === compchoice){
  //draw gamem
  drawGame();
  }else
  let userWin = true;
  if (userchoice === "rock"){
    // scissors,paper
    compchoice ==="paper" ? false : true;
  } else if (userchoice === "paper") {
   //rock,scissors
    userWin = compchoice === "scissors" ? false : true;
   } else 
   //rock,paper
   userWin = compchoice === "rock" ? false : true;
  
  } 
    showwinner(userwinner);
  }


};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () =>  {
  const choiceID = choice.getAttribute("id");
      console.log( "choice was clicked",choiceID);
    });
});