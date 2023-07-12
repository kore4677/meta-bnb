import { Flex, Image, Center, Link } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import ConnectWallet from '../modal/ConnectWallet';
import Links from './NavigationLinks';
import Sidenav from './SideNavigationbar';
// import axios from 'axios'

const Navbar = () => {
  const navigate = useNavigate()
  const [token, setToken] = useState(()=>
  JSON.parse(localStorage.getItem('token')) || null);
  
  // const [login, setLogin]= useState(true)
  // const isLogin = login ? '' : ''

  const logoutUser = async ()=>{
    const res = await fetch('http://127.0.0.1:8000/api/auth/token/logout', {
      method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  })
  setToken(null)
  localStorage.removeItem('token')
  navigate('/')
  }
  
//  const logoutUser = async()=>{
//     const res = axios.post('http://127.0.0.1:8000/api/auth/token/logout' )
//     setToken(null)
//     localStorage.removeItem('token')
//     navigate('/')
//   } 
<style>

</style>

// const logoutActive = {
//   display: 'none',
// }
// const [display, setDisplay]= useState(false)
// const active = display ? ' ' : ' '


// }
  // const ref = useRef();

  useEffect(() => {
    // const div = ref.current;
    // document.addEventListener('DOMContentLoaded', () => {
    //   window.addEventListener('scroll', () => {
    //     let { clientHeight } = this.$refs.nav.$el;
    //     window.scrollY > clientHeight
    //       ? (this.fixed = true)
    //       : (this.fixed = false);
    //     window.scrollY > 1000
    //       ? this.$refs.topButton.$el.classList.remove('d-none')
    //       : this.$refs.topButton.$el.classList.add('d-none');
    //   });
    // });
  });

  return (
    <Flex
      className="page_alignment cc-container"
      justifyContent={`space-between`}
      alignItems={`center`}
      height={`3rem`}
    >
      <Center>
        <Link as={RouterLink} to={`/`}>
          <Image
            w={{ base: `70%`, sm: `100%` }}
            alt="logo"
            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668186165/hng/Metabnb/images-and-icons/Group-1_ytb0ig.png`}
          />
        </Link>
      </Center>
      <Links />
      <Sidenav />
      <ConnectWallet />
      
    </Flex>
  );
};

export default Navbar;
