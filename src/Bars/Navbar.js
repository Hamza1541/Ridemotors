import logo from '../assets/logo.png';
import { FaRegCheckSquare } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { displayPortal } from '../store';
import { Link } from 'react-scroll';

function Navbar() {
  const navarray = [
    { label: 'Home', value: 'home' },
    { label: 'HowitWorks', value: 'howitworks' },
    { label: 'FinanceOptions', value: 'foptions' },
    { label: 'FAQs', value: 'faq' },
    { label: 'Products', value: 'products' },
  ];

  const dispatch = useDispatch();

  const handleFormClick = () => {
    dispatch(displayPortal());
  };

  const rendernav = navarray.map((navitems) => {
    return (
      <div
        className='p-3 pl-5 pr-5 font-l justify-self-center border-2 border-slate-100 hover:border-4 hover:border-red-50 rounded-2xl bg-slate-800 text-2xl tracking-tighter hover:bg-slate-600 text-slate-100 font-serif font-bold cursor-pointer'
        key={navitems.value}
      >
        <Link
          activeClass='active'
          to={navitems.value}
          spy={true}
          smooth={true}
          offset={-70}
          duration={300}
        >
          {navitems.label}
        </Link>
      </div>
    );
  });

  return (
    <div className='flex flex-row'>
      <img className='rounded-2xl' src={logo} alt='logo' />
      <div className='flex flex-col'>
        <div className='flex flex-row gap-4 h-16 mt-5 cursor-pointer ml-5'>
          {rendernav}
        </div>
        <p className='ml-10 text-xl text-slate-800 font-serif mt-5 font-bold'>
          #430, 8170 50 Street Edmonton, Alberta T6B 1E6
          info@ridemotorcompany.com
        </p>
      </div>
      <div onClick={handleFormClick} className='ml-20 '>
        <button className='border-4 border-slate-100 text-2xl tracking-wide hover:bg-slate-600 text-slate-100 font-serif font-bold p-5 bg-slate-800 rounded-2xl mt-5'>
          <FaRegCheckSquare
            className='text-slate-100'
            style={{ fontSize: '2rem' }}
          />
          Secure Approval Today
        </button>
      </div>
    </div>
  );
}

export default Navbar;
