import  ReactDOM  from "react-dom";
import { GoArrowLeft  } from "react-icons/go";
import { useDispatch } from "react-redux";
import { displayPortal } from "../store";
import logo from '../assets/logo.png'
function Portal () {
    const dispatch = useDispatch();
    const handlformclick = () => {
        dispatch(displayPortal());
        
    }
    return ReactDOM.createPortal(
        

        <div className="fixed overflow-y-auto inset-0 bg-stone-50 z-50 flex flex-col bg-gradient-to-r from-stone-200 via-zinc-200 to-slate-200">
            <div className=" flex flex-row mt-5 ml-10" >
                <button className="font-thin text-zinc-500 text-2xl curesor-pointer " onClick={handlformclick} ><GoArrowLeft style={{color:'red' , fontSize: '4rem'}} /> Back</button>
                <p className="ml-20 text-4xl text-zinc-500 font-bold font-serif trackiing-wide  border-2 border-zinc-500 pl-20 rounded-2xl p-5"> Get Approved Now <br/> <span className="text-xl text-zinc-500 font-thin tracking-tight">The greater precision you provide in your responses, the faster we can secure the optimal approval for you.</span></p>
                <img className=" rounded-2xl border-2 mr-10 ml-10" src={logo} />
                
            </div>
            <div className="text-neutral-700">
            <form className="grid grid-cols-2 gap-4 p-10 mt-5 ml-10 mr-10 rounded-2xl border-4 border-red-500">
  <div className="border-2 border-zinc-500 p-5 rounded-2xl shadow">
    <label htmlFor="name">Name :</label>
    <input
      type="text"
      id="name"
      className="w-full border-b  bg-gradient-to-r from-stone-100 via-zinc-100 to-slate-100  rounded-2xl p-2"
      placeholder="John Doe"
      

    />
  </div>

  <div className="border-2 border-zinc-500 p-5 rounded-2xl shadow">
    <label htmlFor="phone">Phone Number :</label>
    <input
      type="tel"
      id="phone"
      className="w-full border bg-gradient-to-r from-stone-100 via-zinc-100 to-slate-100  rounded-2xl p-2"
      placeholder="123-456-7890"
    />
  </div>

  <div className="border-2 border-zinc-500 p-5 rounded-2xl shadow">
    <label htmlFor="email">Email Address :</label>
    <input
      type="email"
      id="email"
      className="w-full border bg-gradient-to-r from-stone-100 via-zinc-100 to-slate-100  rounded-2xl p-2"
      placeholder="cshamza2018@gmail.com"
    />
  </div>

  <div className="col-span-2 border-2 border-zinc-500 p-5 rounded-2xl shadow">
    <label htmlFor="insuranceIssue">Is there anything in the way of you being able to insure and register your purchase with the province you reside in?</label>
    <input
      type="text"
      id="insuranceIssue"
      className="w-full border bg-gradient-to-r from-stone-100 via-zinc-100 to-slate-100  rounded-2xl p-2"
      placeholder="Your answer"
    />
  </div>

  <div className="col-span-2 border-2 border-zinc-500 p-5 rounded-2xl shadow">
    <label htmlFor="driversLicense">Do you currently have a class 5 driver's license?</label>
    <input
      type="text"
      id="driversLicense"
      className="w-full border bg-gradient-to-r from-stone-100 via-zinc-100 to-slate-100  rounded-2xl p-2"
      placeholder="Your answer"
    />
  </div>

  <div className="border-2 border-zinc-500 p-5 rounded-2xl shadow">
    <label htmlFor="dob">Date of Birth (xx-xx-xxxx) :</label>
    <input
      type="text"
      id="dob"
      className="w-full border bg-gradient-to-r from-stone-100 via-zinc-100 to-slate-100  rounded-2xl p-2"
      placeholder="01-01-2000"
    />
  </div>

  <div className="border-2 border-zinc-500 p-5 rounded-2xl shadow">
    <label htmlFor="sin">Social Insurance Number (xxx xxx xxx):</label>
    <input
      type="text"
      id="sin"
      className="w-full border bg-gradient-to-r from-stone-100 via-zinc-100 to-slate-100  rounded-2xl p-2"
      placeholder="123 456 789"
    />
  </div>

  <div className="col-span-2 border-2 border-zinc-500 p-5 rounded-2xl shadow">
    <label htmlFor="address">Address Including Postal Code:</label>
    <input
      type="text"
      id="address"
      className="w-full border bg-gradient-to-r from-stone-100 via-zinc-100 to-slate-100  rounded-2xl p-2"
      placeholder="Your address"
    />
  </div>

  <div className="border-2 border-zinc-500 p-5 rounded-2xl shadow">
    <label htmlFor="city">City Name:</label>
    <input
      type="text"
      id="city"
      className="w-full border  bg-gradient-to-r from-stone-100 via-zinc-100 to-slate-100  rounded-2xl p-2"
      placeholder="Your city"
    />
  </div>

  <div className="col-span-2 border-2 border-zinc-500 p-5 rounded-2xl shadow">
    <label htmlFor="addressDuration">Have you been at the same address for more than 2 years or under 2 years?</label>
    <input
      type="text"
      id="addressDuration"
      className="w-full border bg-gradient-to-r from-stone-100 via-zinc-100 to-slate-100  rounded-2xl p-2"
      placeholder="Your answer"
    />
  </div>

  <div className="col-span-2 border-2 border-zinc-500 p-5 rounded-2xl shadow">
    <label htmlFor="previousAddress">What is your previous address? (if less than 2 yrs):</label>
    <input
      type="text"
      id="previousAddress"
      className="w-full border bg-gradient-to-r from-stone-100 via-zinc-100 to-slate-100  rounded-2xl p-2"
      placeholder="Your previous address"
    />
  </div>

  <div className="col-span-2 border-2 border-zinc-500 p-5 rounded-2xl shadow">
    <label htmlFor="employer">Employer Business Name:</label>
    <input
      type="text"
      id="employer"
      className="w-full border bg-gradient-to-r from-stone-100 via-zinc-100 to-slate-100  rounded-2xl p-2"
      placeholder="Your employer's name"
    />
  </div>
</form>

            </div>
            <div className="mt-10 ml-80 mr-80 mb-10 hover:bg-zinc-700 hover:text-red-500 text-center cursor-pointer p-10 text-5xl text-zinc-7000 bg-red-500 border-8 border-zinc-500 rounded-2xl "> LETS RIDE!</div>
            
            
        </div>,

document.querySelector('.portal-container')

    )
}
export default Portal;