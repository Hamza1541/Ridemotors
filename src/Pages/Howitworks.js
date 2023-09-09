import how from '../assets/how.png'

function Howitworks () {

    return <div className='flex flex-col pl-2 pr-2 ml-20 mr-20  mb-20 rounded-2xl mt-10 border-8 border-slate-900'>
         <p className='mt-10 ml-96 text-center  mr-96 text-red-500 font-serif justify-center pl-20 pr-20 pt-5 pb-5 rounded-2xl bg-slate-800 border-4 border-slate-900
        text-6xl tracking-wide 
        font-bold '>HOW IT WORKS</p>
        <img className='' src={how}  />
        <p className='bg-slate-800 text-xl ml-20 mb-10 mr-20 rounded-2xl text-slate-100 border-2 border-slate-900 font-serif fot-bold p-5'>1: Our approach sets us apart from traditional dealerships. <br/> 2: Leveraging the internet's reach, we've bridged distances, making the world smaller. <br/> 3: We can secure the machine you desire from virtually anywhere in Canada. <br/> 4 : Our commitment is to secure optimal approvals and identify the perfect machine that aligns with both your needs and approval status</p>

    </div>
}

export default Howitworks;