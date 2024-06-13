let us=0
let cs=0

const choices=document.querySelectorAll(".box")

const msg=document.querySelector("#msg")

const Compu =document.querySelector("#com")
const your=document.querySelector("#your")


const comp=()=>{
    let opt=["stone","paper","scizor"]
    const ran=Math.floor(Math.random()*3)
    const idg=opt[ran];
    return idg;
}

const playGame=(choiceId)=>{
        const compChoice=comp();
        if(compChoice==choiceId){
            console.log("Draw");
            msg.innerText="Draw"
        }
        else if(choiceId=="stone"&& compChoice=="paper"){
            console.log("comp")
            msg.innerText="Computer Win"
            cs++;
        }
        else if(choiceId=="paper"&& compChoice=="stone"){
            console.log("you")
            msg.innerText="You Win"
            us++;
        }
        else if(choiceId=="scizor"&& compChoice=="paper"){
            console.log("you")
            msg.innerText="You Win"
            us++;
        } else if(choiceId=="stone"&& compChoice=="scizor"){
            console.log("you")
            msg.innerText="You Win"
            us++;
        } else if(choiceId=="paper"&& compChoice=="scizor"){
            console.log("comp")
            msg.innerText="Computer Win"
            cs++;
        }
        else if(choiceId=="scizor"&& compChoice=="rock"){
            console.log("comp")
            msg.innerText="Computer Win"
            cs++;
        }
        Compu.innerText=cs
        your.innerText=us
}

choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id");
        console.log("clicked",choiceId)
        playGame(choiceId);
    })
})