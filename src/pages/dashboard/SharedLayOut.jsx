import React from 'react'
import {BigSideBar, SmallSideBar, Navbar, Logo } from '../../components'
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const SharedLayOut = () => {
    const {isSideBarOpen} = useSelector((store) => store.user)
    console.log(isSideBarOpen)
  return (
    <Wrapper>
        <div >
            <BigSideBar/>
            <SmallSideBar/>
        </div>
        <div>
            <Navbar/>
            <div>
            <Outlet/>
        </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
    display: grid;
    grid-template-columns: 1fr 4fr;

`


export default SharedLayOut