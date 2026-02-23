let InterviewList =[];
let RejectedList =[];
let total=document.getElementById('total')
let Interview=document.getElementById('Interview')
let Rejected =document.getElementById('Rejected')

const allcard = document.getElementById('allcards')
const mainCCont =document.querySelector('main')

function count(){
    total.innerText=allcard.children.length
    Interview.innerText=InterviewList.length
    Rejected.innerText=RejectedList.length

}
count()
function toggleStyle(){
    console.log('click');
    
}