import React, { useEffect, useState} from 'react';
import SearchSVG from '../../SearchSVG';
import './NavBar.css';

function handleTile() {
      window.location.replace('/');
}

function searchHandle() {
      window.location.replace('search');
}
function NavBar() {
      // the navbar change color when scroll, so we should use useState
      const [isScrolled, setIsScrolled] = useState(false);

      useEffect(() => {
            const handleScroll = () => {
                  window.scrollY > 20 ? setIsScrolled(true) : setIsScrolled(false);
            }
            window.addEventListener('scroll', handleScroll);

            // clean up function
            return () => {
                  window.removeEventListener('scroll', handleScroll);
            }
      }, []);

      return(
            <nav className={`navbar_container ${isScrolled ? 'scrolled' : ''}`}>
                  <h2 
                  onClick={handleTile}
                  
                  className='navbar_title'>Movie App</h2>
                  <div 
                  onClick={searchHandle}
                  className='setting_search-icon'>
                       <SearchSVG/>
                  </div>
            </nav>
      )
}
export default NavBar;