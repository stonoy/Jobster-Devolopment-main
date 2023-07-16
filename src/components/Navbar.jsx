import React,{useState} from 'react'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import {toogleSideBar} from '../features/user/userSlice'
import styled from "styled-components";


const Navbar = () => {
    const dispatch = useDispatch()
    const {user} = useSelector((store) => store.user)
    const [openLogOut, setOpenLogOut] = useState(false)
    
  return (
    <Wrapper>
        <button onClick={() => dispatch(toogleSideBar())}>
            <FaAlignLeft/>
        </button>
        <h2>DashBoard</h2>
        <div className='logout'>
            <button onClick={() => setOpenLogOut(!openLogOut)}>
                <FaUserCircle/>
                    {user?.name}
                <FaCaretDown/>
            </button>
            <button style={{display: openLogOut ? 'inline-block' : 'none'}} onClick={() => console.log('logout...')}>
                logout
            </button>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .logout{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

`

export default Navbar