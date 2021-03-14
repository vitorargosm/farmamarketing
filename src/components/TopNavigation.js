import { useState } from 'react'
import Overlay from './layout/Overlay'
import TopNavigationListItem from './TopNavigationListItem'


function TopNavigation() {

  const [isMenuOpen, setMenuOpen] = useState(0);

  const handleMenuChange = () => {
    setMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  }

  return (
    <header className=''>
      <nav className='flex justify-between bg-gray-900 text-gray-300 p-5'>
        <div className='font-bold font-sans'>Farma Marketing</div>
        <button className="rounded-full flex z-30" onClick={handleMenuChange}>
          <svg className={`${ !isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg className={`${ isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className={`${ isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} z-30 transition w-3/4 ease-in-out duration-200 text-gray-900 h-screen absolute origin-top-right right-0 mt-11 shadow-lg bg-white ring-opacity-5`}>
          <TopNavigationListItem onClick={() => setMenuOpen(false)} />
        </ul>
      </nav>
      <Overlay onClick={() => setMenuOpen(false)} data={isMenuOpen} />
    </header>
  )
}

export default TopNavigation;