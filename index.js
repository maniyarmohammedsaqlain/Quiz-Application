const quizq=[
    {
        question:"Q1: Capital of India",
        a:"Delhi",
        b:"Bangalore",
        c:"Mumbai",
        d:"Karnataka",
        ans:"option1"
    },
    {
        question:"Q2: Capital of AP",
        a:"Amaravati",
        b:"Kurnool",
        c:"Anantapur",
        d:"Kadapa",
        ans:"option2"
    },
    {
        question:"Q3: Capital of maharashtra",
        a:"Lonavala",
        b:"Pune",
        c:"Marine drive",
        d:"Mumbai",
        ans:"option4"
    },
    {
        question:"Q4: Capital of telengana",
        a:"Warangal",
        b:"Nagar kurnool",
        c:"Hyderabad",
        d:"Alampur",
        ans:"option3"
    }
]
const mdiv=document.getElementsByClassName("maindiv")
const text=document.getElementById("remv")
const ebutton=document.getElementById("entrybutton")
const qlist=document.getElementById("qlist")
function onnext(){
    text.classList.remove("ruleslist")
    text.classList.add("ruleslistvis")
    ebutton.classList.add("ruleslistvis")
    qlist.classList.add("qdivvi")
    const question=document.querySelector("#question");
    const opt1=document.getElementById("opt1");
    const opt2=document.getElementById("opt2");
    const opt3=document.getElementById("opt3");
    const opt4=document.getElementById("opt4");
    const submit=document.getElementById("btn")
    const answers=document.querySelectorAll('.answer')
    const finalscore=document.querySelector(".score")
    let score=0; 
    let count=0;
    const change1=()=>{
        const arraynumber=quizq[count];
        question.innerHTML=arraynumber.question;
        opt1.innerHTML=arraynumber.a;
        opt2.innerHTML=arraynumber.b;
        opt3.innerHTML=arraynumber.c;
        opt4.innerHTML=arraynumber.d;
    }
    change1();
    const getselectedAnswer=()=>{
        let answer
        answers.forEach((curSel)=>{
            if(curSel.checked){
                answer=curSel.id
            }
        })
        return answer;
    }
    submit.addEventListener('click',()=>{
        const selectedanswer=getselectedAnswer();
        if (selectedanswer===quizq[count].ans){
            score++;
        };
        count++;
        if (count<quizq.length) {
            change1();
        }else{
            if(score===4){
                finalscore.innerHTML=`<h1>Congratulations! You scored ${score}/${quizq.length} ✌✌</h1><button onclick="location.reload()">PLAY AGAIN</button>`
            }
            if(score<=1){
                finalscore.innerHTML=`<h1> You scored ${score}/${quizq.length}! Better Luck next time ! Be motivated</h1><button onclick="location.reload()">PLAY AGAIN</button>`
            }
            else{
                finalscore.innerHTML=`<h1> You scored ${score}/${quizq.length}! Be motivated</h1><button onclick="location.reload()">PLAY AGAIN</button>`                
            }
        }
    })
}
