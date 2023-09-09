import Banner from '../assets/Banner.jpg'
import bike from '../assets/bike.png';
import car from '../assets/car.png';
import rv from '../assets/rv.png';
import snowbike from '../assets/snowbike.png';
import yacht from '../assets/yacht.png';
import Slideshow from '../components/Slideshow';
import { useDispatch, useSelector } from 'react-redux';
import { displayPortal } from '../store';

function HomePage () {
        const showPortal = useSelector((state)=>{
                return state.portal;
            })
        const  dispatch = useDispatch();
        const handleFormClick = () => {
                dispatch(displayPortal());
                window.scrollTo({ top: 0, behavior: 'instant' });
                if (showPortal) {
                        document.body.classList.remove('no-scroll'); // Remove the class to allow scrolling
                      } else {
                        document.body.classList.add('no-scroll'); // Apply the class to prevent scrolling
                      }

        }

    const banners = [Banner,bike,snowbike,car,yacht,rv,];

    return <div className=" flex flex-col border-8 rounded-2xl  border-slate-700 p-8 mr-10 ml-10"> 
    <p className=" border-2 mb-10 border-slate-300 p-7 bg-slate-800 font-bold text-3xl ml-10 mr-10 rounded-2xl text-slate-100  font-serif "><span className='text-6xl  p-5 pr-2 tracking-wide '>Welcome,</span> to <span class="text-5xl text-red-500 font-bold">RideMotors</span> Your gateway to affordable dreams. <br/>
     <br/>   Discover a world of financing options for <span class="text-5xl text-red-500 font-bold">Cars</span>, <span class="text-5xl text-red-500 font-bold">Bikes</span>, <span class="text-5xl text-red-500 font-bold">Yacht</span>, and <span class="text-5xl text-red-500 font-bold">SnowBikes</span>. <br/>

<br/>Turn your aspirations into reality with <span class="text-5xl text-red-500 font-bold">RideMotors</span> flexible financing solutions. Explore our range of products and start your journey towards ownership today.

Ready to take the first step? Explore our financing options now. <br/>
<button onClick={handleFormClick}  className="mt-10 p-5 pl-5 pr-5 font-xl justify-self-center rounded-2xl text-6xl tracking-tighter hover:bg-slate-900 font-bold bg-slate-900 blinking-button">Secure the Best Deal Now</button> 
</p>

        
    <Slideshow banners = {banners} />
    
    
</div>
}

export default HomePage;