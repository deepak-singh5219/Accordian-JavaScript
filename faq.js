const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];
const parent = document.querySelector('.accordian_body');

faqData.map((faq) => {
  const heading = document.createElement('h3');
  const ques = document.createTextNode(faq.question);
  heading.appendChild(ques);
  const element = document.createElement('div');
  element.setAttribute('class','faq');
  const innerElement = document.createElement('div');
  innerElement.setAttribute('class','faq_header');
  const show_btn = document.createElement('div');
  show_btn.innerHTML="+";
  show_btn.setAttribute('class','show_btn center');
  innerElement.appendChild(heading);
  innerElement.appendChild(show_btn);
  element.appendChild(innerElement);
  parent.appendChild(element);
  const ans = document.createElement('p');
  ans.setAttribute('class','hidden');
  const ansdata = document.createTextNode(faq.answer);
  ans.appendChild(ansdata);
  element.appendChild(ans);
  show_btn.addEventListener('click',() => showFaq(faq.id));
})
let flag=false;
let accordianBody;
const faqs = document.querySelectorAll('.faq');

function showFaq(id) {
  
 for(let i=0;i<faqs.length;i++)
 {
  console.log(id)
  if(i+1==id)
  {
    if(!flag)
     faqs[i].getElementsByTagName('p')[0].classList.remove('hidden');
     else faqs[i].getElementsByTagName('p')[0].classList.add('hidden'); 
     flag=!flag;
     break;
  }
 }
  
}

function createFaq() {
  
}

function btnStatusUpdate() {
  
}


