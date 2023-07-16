import React from 'react'
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const BigSideBar = () => {
    const {isSideBarOpen} = useSelector((store) => store.user)
  return (
    <Wrapper className={isSideBarOpen ? 'sidebar ' : 'sidebar showSideBar'}>BigSideBar</Wrapper>
  )
}

const Wrapper = styled.div`
    background-color: azure;
    
    @media (max-width:768px){
        display: none;
    }
`

export default BigSideBar