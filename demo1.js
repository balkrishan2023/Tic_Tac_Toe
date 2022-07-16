console.log("welcome to tic-tac-toe")
let music = new Audio("music.mp3")
let audioturn = new Audio("turn.mp3")
let isgameover = new Audio("gameover.mp3")

let turn = "x"
let gameover = false ;

//function to change turn
const changeturn=()=> {
 return turn ==="x" ?"0":"x";
}

//function to check win
const checkwin= ()=>{
    
    let text = document.getElementsByClassName('text');
    let win =[
        [0,1,2,34,56,0],
        [3,4,5,34,178,0],
        [6,7,8,34,297,0],
        [0,3,6,-85,179,90],
        [1,4,7,33,179,90],
        [2,5,8,155,179,90],
        [0,4,8,36,179,45],
        [2,4,6,36,179,135]
    ]
    win.forEach(e=> {
if((text[e[0]].innerText === text[e[1]].innerText) && (text[e[1]].innerText === text[e[2]].innerText) && (text[e[0]].innerText !== ""))
   {document.querySelector('.info').innerText = text[e[0]].innerText + " won"
    
   gameover = true;
   document.querySelector('.image').getElementsByTagName('img')[0].style.width="150px";
   document.querySelector(".line").style.transform = `translate(${e[3]}px, ${e[4]}px) rotate(${e[5]}deg)`
   document.querySelector(".line").style.width ="292px";  
    music.play()
}
   
})
}

//game logicS
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>
     {
    let text = element.querySelector('.text');
    element.addEventListener ('click',()=>
    {
        if (text.innerText = " ") 
          { text.innerText = turn;
            turn = changeturn();
            audioturn.play();
           
            checkwin();
           if(gameover != true){
            document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
             }
         }
    })
})


//add reset option 
reset.addEventListener('click', ()=>{
    let text = document.getElementsByClassName("text");
    Array.from(text).forEach(element =>{
             element.innerText=""
    });
   turn = "x"
   gameover = false
    document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
    document.querySelector('.image').getElementsByTagName('img')[0].style.width="0px";
    document.querySelector(".line").style.width ="0px"; 
   music.pause()
})