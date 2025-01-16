let CurrMoleTile;
let CurrPlantTile;
let score=0;
let gameOver=false;



window.onload = function () {
    setGame();
}



function setGame() {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click",selectTile)
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000);
    setInterval(setPlant,1000)
}




function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}




function setMole() {

    if(gameOver){
        return;
    }
if (CurrMoleTile){
    CurrMoleTile.innerHTML ="";
}

    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";


    let num = getRandomTile();
    if(CurrPlantTile && CurrPlantTile.id==num){
        return;
    }
    CurrMoleTile = document.getElementById(num);
    CurrMoleTile.appendChild(mole);
}




function setPlant(){
    if(gameOver){
        return;
    }
    if(CurrPlantTile){
        CurrPlantTile.innerHTML="";
    }
    let plant=document.createElement("img")
    plant.src="./piranha-plant.png"
    let num= getRandomTile()
    if(CurrMoleTile &&CurrMoleTile.id==num){
        return;
    }
    CurrPlantTile=document.getElementById(num)
    CurrPlantTile.appendChild(plant)
}


function selectTile(){
    if(gameOver){
        return;
    }
    if(this==CurrMoleTile){
        score+=10;
        document.getElementById("score").innerText=score.toString();
    }
    else if(this==CurrPlantTile){
        document.getElementById("score").innerText="GAME OVER:"+score.toString()   
        gameOver=true;
     }
}