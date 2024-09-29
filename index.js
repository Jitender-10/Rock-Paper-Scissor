let scoreCard = JSON.parse(localStorage.getItem('scoreCard')) || {
    Wins:0,
    Losses:0,
    Tie:0
};

forScore();

function decider(move){
    let result = "";
    const pcmove=compMove();
    if(pcmove === "Rock"){
        if(move === "Rock"){
            result= "Tie";
        }else if(move === "Paper"){
            result= "You Win";
        }else{
            result= "You Lose";
        }

    }else if(pcmove ==="Paper"){
        if(move==="Rock"){
            result= "You Lose";
        }else if(move==="Paper"){
            result= "Tie";
        }else {
            result= "You Win";
        }
    }else if(pcmove ==="Scissor"){
        if(move==="Rock"){
            result= "You Win";
        }else if(move==="Paper"){
            result= "You Lose";
        }else{
            result= "Tie";
        }
    }
    localStorage.setItem('scoreCard', JSON.stringify(scoreCard));
    if(result==="You Win"){
        scoreCard.Wins++ ;
         
        
    }else if(result ==="You Lose"){
        scoreCard.Losses++ ;
    }else{
        scoreCard.Tie++ ;
    }
    document.querySelector(".score-js")
    .innerHTML= result;
    document.querySelector('.bothMove')
    .innerHTML = `Computer <img src="${pcmove}-emoji.png" class="emoji-size"> <img src="${move}-emoji.png" class="emoji-size"> Your Move`;
    document.querySelector('.disScoreCard').innerHTML = `Wins:${scoreCard.Wins}, Losses:${scoreCard.Losses}, Tie:${scoreCard.Tie}`;
  
}

function forScore(){
    document.querySelector('.disScoreCard').innerHTML = `Wins:${scoreCard.Wins}, Losses:${scoreCard.Losses}, Tie:${scoreCard.Tie}`;
}


function compMove(){
    const gen= Math.random();
    let cmove='';
    if(gen < 1/3 && gen >=0){
        cmove = "Rock";
    }else if(gen > 1/3 && gen < 2/3){
        cmove = "Paper";
    }else{
        cmove = "Scissor";
    }
    return cmove;
    
}
let con = false;
let intervalId;

function autoPlay(){
    
    if(!con){
        intervalId = setInterval(() => {
            const autoMove = compMove();
            
            decider(autoMove);
    
        }, 1000);
        con=true;
        

    }else{
        clearInterval(intervalId);
        con=false;
        

    }
    
    
}







