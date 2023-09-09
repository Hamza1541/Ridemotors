import { useDispatch } from "react-redux"
import { displayPortal } from "../store"



function FinanceOptions() {
  const dispatch = useDispatch();
  
  const handleclick = () => {
    dispatch(displayPortal());
  };
  
  const foarray = [
    {
      label: 'RECREATIONAL VEHICLE FINANCING',
      desc: 'We finance ATV’s & Side by Sides, Boats and PWC’s, Travel Trailers & RV’s, Motorcycles, Snowmobiles, Golf Carts, Lawn Tractors, Farm Machinery etc'
    },
    {
      label: 'BAD CREDIT?  NO PROBLEM',
      desc: 'We are one of the very few companies to finance powersports (New or Used) with GOOD or BAD credit. No Down Payment options available.'
    },
    {
      label: 'GET PRIVATE SALE OR DEALER',
      desc: 'We are one of the very few companies to finance powersports (New or Used) with GOOD or BAD credit. No Down Payment options available.'
    }
  ];
  
  const renderoptions = foarray.map((fo) => (
    <div className="flex flex-col border-red-500 border bg-slate-800 items-center rounded-lg p-4 m-2" key={fo.label}>
      <div className="flex flex-col font-serif">
        <p className="text-4xl text-red-500 font-bold">{fo.label}</p>
        <p className="mt-3 text-slate-100 text-xl">{fo.desc}</p>
      </div>
      <button onClick={handleclick} className="mt-3 p-4 border-2 w-auto rounded-lg   hover:text-slate-100 font-bold tracking-widest bg-slate-200 text-red-500">
        <p className="text-2xl text-red-500">YES, I WANT THIS PROGRAM<br /><span className="text-xs">FASTEST APPROVAL RESPONSE IN THIS BUSINESS</span></p>
      </button>
    </div>
  ));
  
  return (
    <div className="border-8 border-slate-700 mt-5 mr-10 ml-10 rounded-2xl flex flex-col">
      <p className="text-6xl text-red-500 text-center font-serif font-bold tracking-widest border-red-500 border-b-4 p-10">FinanceOptions</p>
      <div className="flex overflow-x-auto">{renderoptions}</div>
    </div>
  );
}

export default FinanceOptions;
