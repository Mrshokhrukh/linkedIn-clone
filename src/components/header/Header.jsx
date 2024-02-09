import React from 'react'
import styled from 'styled-components';
import logo from '../../assets/images/home-logo.svg'
import iconS from '../../assets/images/search-icon.svg'
import navImg from '../../assets/images/nav-home.svg'
import net from '../../assets/images/nav-network.svg'
import job from '../../assets/images/nav-jobs.svg'
import msg from '../../assets/images/nav-messaging.svg'
import notif from '../../assets/images/nav-notifications.svg'
import user from '../../assets/images/user.svg'
import drop from '../../assets/images/down-icon.svg'
import work from '../../assets/images/nav-work.svg'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <Container>
            <Content>
                <Logo>
                    <Link to='/'>
                        <img src={logo} alt="" />
                    </Link>
                </Logo>

                <Search>
                    <div>
                        <input type="text" placeholder='search...' />
                    </div>
                    <SearchIcon>
                        <img src={iconS} alt="" />
                    </SearchIcon>
                </Search>

                <Nav>
                    <NavListWrap>
                        <NavList >
                            <NavLink to='/'>
                                <img src={navImg} alt="" />
                                <span>Home</span>
                            </NavLink>
                        </NavList>
                        <NavList>
                            <NavLink to='/networks'>
                                <img src={net} alt="" />
                                <span>My Networks</span>
                            </NavLink>
                        </NavList>
                        <NavList>
                            <NavLink to='/jobs'>
                                <img src={job} alt="" />
                                <span>Jobs</span>
                            </NavLink>
                        </NavList>
                        <NavList>
                            <NavLink to='/messaging'>
                                <img src={msg} alt="" />
                                <span>Messaging</span>
                            </NavLink>
                        </NavList>
                        <NavList>
                            <NavLink to='/notifications'>
                                <img src={notif} alt="" />
                                <span>Notifications</span>
                            </NavLink>
                        </NavList>

                        <User>
                            <Link to=''>
                                <img src={user} alt="" />
                                <span>Me
                                    <img src={drop} alt="" />
                                </span>
                            </Link>
                            <SignOut>
                                <Link to=''>Sign Out</Link>
                            </SignOut>
                        </User>

                        <Work>
                            <Link>
                                <img src={work} alt="" />
                                <span>
                                    Work
                                    <img src={drop} alt="" />
                                </span>
                            </Link>
                        </Work>

                    </NavListWrap>
                </Nav>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    background-color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.13);
    left: 0;
    padding: 6px 24px;
    width: 100vw;
    z-index: 100;
    position: fixed;
    top: 0;

`
const Content = styled.div`
 display:flex ;
 align-items: center;
 margin: 0 auto;
 max-width: 1128px;
 min-height: 100%;
`

const Logo = styled.span`
margin-right: 8px;
font-size: 0px;
`
const Search = styled.div`
/* display: flex; */
opacity: 1;
flex-grow: 1;
position: relative;
div{
    max-width: 290px;
    input{
        border: 2px solid white;
        background-color: #eef3f8;
        border-radius: 2px;
        color: #272727;
        width: 230px;
        padding: 0 8px 0 40px;
        line-height: 1.75;
        font-size: 16px;
        font-weight: 500;
        height: 34px;
        vertical-align: text-top;
        border-radius: 5px;
        transition: width 0.2s ease;
        &:focus{
            border: 2px solid black;
            width: 100%;
        }
    }
}
`
const SearchIcon = styled.div`
width: 40px;
position: absolute;
z-index: 1;
top: 9px;
left: 2px;
display: flex;
justify-content: center;
align-items: center;
`

const Nav = styled.div`
    margin-left: auto;
    display: block;
    background-color: white;
    @media(max-width:768px){
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;

    }

`
const NavListWrap = styled.ul`
display: flex;
flex-wrap: nowrap;
list-style: none;
gap: 10px;
.active{
span:after{
    content: '';
    transform: scaleX(1);
    border-bottom: 2px solid black;
    position: absolute;
    width: 100%;
    bottom: -6px;
    left: 0;
    transition: transform 0.2s ease-in-out;
}
}
  
`


const NavList = styled.li`
  display: flex;
  align-items: center;

  a{
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
  @media(max-width:768px){
     min-width: 70px;
   }
    span{
        color: gray;
        display: flex;
        align-items: center;
    }
  }
  &:hover,&:active{
    a span{
        color: black;
    }
  }

`

const SignOut = styled.div`
position: absolute;
top: 45px;
height: 40px;
background-color: white;
border-radius: 5px;
display: none;
a{
color: black;
font-size: 14px;
text-align: center;
}
`


const User = styled(NavList)`
    a > img{
        width: 24px;
        height: 24px;
        border-radius:50%;
    }

    a span{
        display: flex;
        align-items: center;
    }
    &:hover{
        ${SignOut}{
            align-items: center;
            display: flex;
            justify-content: center;
        }
    }
`
const Work = styled(User)`
border-left: 1px solid rgba(0,0,0,0.40);
`



export default Header