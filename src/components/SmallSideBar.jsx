import React from 'react'
import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import {toogleSideBar} from '../features/user/userSlice'


const SmallSideBar = () => {
    const dispatch = useDispatch()
    const {isSideBarOpen} = useSelector((store) => store.user)
  return (
    <Wrapper className={isSideBarOpen ? 'sidebar showSideBar' : 'sidebar'}>
        <button onClick={() => dispatch(toogleSideBar())}>
            <FaTimes/>
        </button>
        SmallSideBar

    </Wrapper>
  )
}

const Wrapper = styled.div`
    background-color: azure;
    position: fixed;
    width: 90%;
    height: 90%;
    top: 0;
    left: 0;
    /* margin: auto; */
    
    @media (min-width:768px){
        display: none;
    }
`

export default SmallSideBar