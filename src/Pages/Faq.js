import { FaVuejs } from "react-icons/fa6";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { displayPortal } from '../store';


function Faq () {
  const dispatch = useDispatch();
  const handleFormClick = () => [
    dispatch(displayPortal()),
    window.scrollTo({ top: 0, behavior: 'instant' }),
    
  ]
    const [showanswere, setshowanswerre] = useState(-1);
    const handleclick = (index) =>{
        if(showanswere === index){
            setshowanswerre(-1) 
        } else {
            setshowanswerre(index);
        }}

    const faqarray = [
  {
    q: "My credit isn't very good, can you still get me approved?",
    a: "Absolutely! That's an honest question, and we'll provide an honest answer. In most cases, we can still get you approved. We specialize in assisting individuals with less-than-perfect credit. Bankruptcy, Consumer Proposal, Repossession, Collections, Unpaid cell phone bills – these challenges don't deter us. We're experts in securing approvals for customers facing any or all of these issues. While we can't guarantee approval without reviewing your application, we can guarantee our relentless effort to secure your approval."
  },
  {
    q: "I was declined at another place. Why can you get me approved if they couldn't?",
    a: "Certainly! Because unlike many others, we don't take shortcuts. We're fueled by knowledge and hard work. Our track record speaks volumes – we get numerous people approved who were turned down elsewhere. Our commitment to you is grounded in dedication and expertise."
  },
  {
    q: "How much can I get approved for?",
    a: "We have great news! We offer loans ranging up to $100000!"
  },
  // Add more questions and answers here...
  {
    q: "Can I trade in my current machine?",
    a: "Absolutely, we offer trade-ins! Our team will work with you to assess the value of your current machine and incorporate it into the financing process."
  },
  {
    q: "What if I have questions after the purchase?",
    a: "We're here for you even after the purchase. Our commitment to customer satisfaction doesn't end with the sale. Reach out to us with any questions or concerns, and we'll be glad to assist you."
  },
  {
    q: "How do I start the application process?",
    a: "Starting your journey with us is simple! You can begin the application process by filling out our online form on our website. Our team will then review your application and guide you through the next steps."
  },
  {
    q:'Where are you located?',
    a:'Our head office is in Edmonton, Alberta. That does not limit us to only dealing with local customers though. We deal with customers from BC to Ontario and are slowly moving all the way out to the east coast! We have staff and programs all across Canada so that we can accommodate any customer.'
  },
  {
    q:'Why should I buy at Ride Motor Company?',
    a:"There are so many reasons, I'll try to keep this simple. We are consumers just like you and our company was founded on the idea that we want to treat people like we want to be treated. I don't just mean our customers either, that goes for our employees too. We believe if we as a company take care of our staff and they are happy, they in turn will take care of our customers to the highest level. We are a no BS kind of place and don't play games, manipulate or waste peoples time. The owners (Matt & Brandon) are very involved in the company and happy to speak with any customers. On top of giving excellent customer service we LOVE to have fun and have an incredible company culture. We encourage you to check out some of our videos to get to know the kind of people we are and see if you want to work with us. If you pick another company to deal with"
  }

];



const renderquestion = faqarray.map((qa,index)=>{
    const isshowans = index === showanswere;
    return <div className="prose"> 
    <div className="border-b-2 border-slate-700 font-serif  font-bold  text-zinc-700 font-thin  text-2xl space-between p-2 " onClick={()=> {handleclick(index)}} ><div className="ml-20  flex flex-row gap-5 "> <div ><FaVuejs className="  text-2xl text-red-500 cursor-pointer"/></div> {qa.q}  </div> </div>
    {isshowans && <div className="prose flex flex-col bg-slate-600 font-serif border-b-8 border-red-500 p-20 text-slate-100 text-xl">{qa.a}  <button onClick={handleFormClick} className="mt-4 p-5 font-serif text-3xl tracking-wide  border-t-4 text-red-500" > GET STARTED NOW </button>   </div> }
     </div>
})

    return <div className="prose ml-10 mr-10 mt-10 border-8 p-6 border-slate-900 rounded-2xl flex-flex-col  "> <div className="prose text-center text-4xl bg-slate-800 rounded-2xl mb-2 text-red-500 border-2 border-slate-900 tracking-wide p-5">FAQ <br/> <span className="text-2xl" >FREQUENTLY ASKED QUESTIONS</span></div> <div className="prose">{renderquestion}</div>
     </div>

}
export default Faq;