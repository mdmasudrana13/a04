let interviewList =[];
let rejectedList =[];
let total=document.getElementById('total')
let interview=document.getElementById('Interview')
let rejected =document.getElementById('Rejected')

const allcard = document.getElementById('allcards')
const mainCont =document.querySelector('main')

function count(){
    total.innerText=allcard.children.length
    interview.innerText=interviewList.length
    rejected.innerText=rejectedList.length

}
count()

// const alllFilterBtn=document.getElementById('all-btn-id')
// const interviewFilterBtn=document.getElementById('Interview-btn-id')
// const rejectedFilterBtn =document.getElementById('Rejected-btn-id')


const alllFilterBtn=document.getElementById('all-btn-id')
const interviewFilterBtn=document.getElementById('Interview-btn-id')
const rejectedFilterBtn =document.getElementById('Rejected-btn-id')

function toggleStyle(id){

   alllFilterBtn.classList.remove('bg-blue-500', 'text-white')
   interviewFilterBtn.classList.remove('bg-blue-500', 'text-white')
   rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white') 

   alllFilterBtn.classList.add('bg-white', 'text-gray-500')
   interviewFilterBtn.classList.add('bg-white', 'text-gray-500')
   rejectedFilterBtn.classList.add('bg-white', 'text-gray-500') 


 const selected =document.getElementById(id) 
 selected.classList.remove('bg-white', 'text-gray-500')
  selected.classList.add('bg-black','text-white')
  
  
   }
mainCont.addEventListener('click',function(event){
   const parenNodes =event.target.parentNode.parentNode;
   const titaleName=parenNodes.querySelector('.titale').innerText ;
   
   

  
    
    
})

