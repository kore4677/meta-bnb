import { OrderedList, ListItem, Image } from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import style from './navbar.module.scss';

const Links = ({ isMobile }) => {
const navigate = useNavigate()
const [token, setToken] = useState(()=>
JSON.parse(localStorage.getItem('token')) || null);


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
  return (
    <OrderedList
      display={{ base: isMobile ? `flex` : `none`, xl: `flex` }}
      flexDir={isMobile ? `column` : `row`}
      color={isMobile ? `white` : `blackText`}
      alignItems={{ xl: `center` }}
      m={0}
      gap={{ base: 10, xl: 10 }}
      ml={{ xl: 20 }}
    >
      <NavLink
        to={`/`}
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
      >
        <ListItem
          fontWeight={{ base: `thin`, xl: 400 }}
          py={2}
          fontSize={`xl`}
        >
          <Image
            display={{ base: `inline`, xl: `none` }}
            mr={2}
            w="1rem"
            src="https://img.icons8.com/material-outlined/24/FFFFFF/home-page.png"
            alt="home"
          />
          Home
        </ListItem>
      </NavLink>
      <NavLink
        to={`/place-to-stay`}
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
      >
        <ListItem
          fontWeight={{ base: `thin`, xl: 400 }}
          py={2}
          fontSize={`xl`}
        >
          <Image
            display={{ base: `inline`, xl: `none` }}
            mr={2}
            w="1rem"
            src="https://img.icons8.com/metro/26/FFFFFF/place-marker.png"
            alt="home"
          />
          Place to stay
        </ListItem>
      </NavLink>
      <NavLink
        to={`/nfts`}
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
      >
        <ListItem
          fontWeight={{ base: `thin`, xl: 400 }}
          py={2}
          fontSize={`xl`}
        >
          <Image
            display={{ base: `inline`, xl: `none` }}
            mr={2}
            w="1rem"
            src="https://img.icons8.com/external-glyph-wichaiwi/64/FFFFFF/external-nft-non-fungible-token-glyph-wichaiwi-8.png"
            alt="nft"
          />
          NFTs
        </ListItem>
      </NavLink>
      <NavLink
        to={`/community`}
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
      >
        <ListItem
          fontWeight={{ base: `thin`, xl: 400 }}
          py={2}
          fontSize={`xl`}
        >
          <Image
            display={{ base: `inline`, xl: `none` }}
            mr={2}
            w="1rem"
            src="https://img.icons8.com/metro/26/FFFFFF/conference-call.png"
            alt="community"
          />
          Community
        </ListItem>

      </NavLink>

      
      {token == null ? <NavLink
        to={`/login`}
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
      >
        <ListItem
          fontWeight={{ base: `thin`, xl: 400 }}
          py={2}
          fontSize={`xl`}
        >
          <Image
            display={{ base: `inline`, xl: `none` }}
            mr={2}
            w="1rem"
            src="https://img.icons8.com/metro/26/FFFFFF/conference-call.png"
            alt="community"
          />
          Sign in
        </ListItem>

      </NavLink>:  <NavLink onClick={()=>{
        logoutUser()
      }}
        to={`/`}
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
      >
        <ListItem
          fontWeight={{ base: `thin`, xl: 400 }}
          py={2}
          fontSize={`xl`}
        >
          <Image
            display={{ base: `inline`, xl: `none` }}
            mr={2}
            w="1rem"
            src="https://img.icons8.com/metro/26/FFFFFF/conference-call.png"
            alt="community"
          />
          log out
        </ListItem>

      </NavLink>}
    </OrderedList>
  );
};

export default Links;
