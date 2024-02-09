import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import myImg from '../../assets/images/myImg.jpg'
import profile from '../../assets/images/profile.jpg'
import items from '../../assets/images/item-icon.svg'
const LeftSide = () => {
    const [showMore, setShowMore] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);
    // useEffect(() => {
    //     window.addEventListener('resize', () => {
    //         setWidth(window.innerWidth);
    //     })
    //     if (width < 768 && showMore) {
    //         setShowMore(false)
    //     }else{
    //         setShowMore(true)
    //     }
    // }, [window.innerWidth])
    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <TopBackPhoto>
                        {/* <img src={'https://media.istockphoto.com/id/925507874/photo/creative-outdoor-background.jpg?s=170667a&w=0&k=20&c=SFxlOpqdya-YZO3-Nb6LkcTuCSOWMJD60A5K7dOR_nk='} alt="" /> */}
                    </TopBackPhoto>
                    <ProfileImg>
                        <Link to=''>
                            <img src={profile} alt="" />
                        </Link>
                    </ProfileImg>

                    <UserLink>
                        <Link to=''> <h2>shokhrukh abduvokhidov</h2></Link>
                        <span>web developer</span>
                    </UserLink>
                    <Interactions>
                        <Link to='/'>Profile viewers <span>9</span></Link>
                        <Link to='/'>Post impressions <span>21</span></Link>
                    </Interactions>

                    <MyItems>
                        <Link to='/'>
                            <img src={items} alt="" />
                            <p>My Items</p>
                        </Link>

                    </MyItems>

                </UserInfo>
            </ArtCard>
        </Container>
    )
}

const Container = styled.div``;

const ArtCard = styled.div`
border-radius: 12px;
overflow: hidden;
background-color: white;
position: relative;
border: 1px solid rgba(0,0,0,0.15);
`

const UserInfo = styled.div`

position: relative;

`
const TopBackPhoto = styled.div`
width: 100%;
height: 56px;
background: url('https://img.freepik.com/premium-photo/abstract-dark-futuristic-background-blue-neon-light-rays-reflect-off-water_129911-1614.jpg');
background-position: center;
background-clip:content-box;
background-size:100%;
background-repeat:no-repeat;
`
const ProfileImg = styled.div`
width: 72px;
height: 72px;
border-radius: 50%;
overflow: hidden;
outline: 2px solid white;
margin: -38px auto 12px;
/* outline-offset: 2px; */
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}
`
const UserLink = styled.div`
    text-align: center;
    margin-top: 15px;
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(0,0,0,0.15);
    h2{
        font-size: 16px;
        font-weight: 500;
        line-height: 18px;
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
    }
    span{
        font-size: 14px;
        color: #616161;
    }

`
const Interactions = styled.div`
border-bottom: 1px solid rgba(0,0,0,0.15);
padding: 12px 0;
display: grid;
    a{
        color: rgba(0,0,0,0.50);
        font-size: 12px;
        padding: 4px 12px;
        display: flex;
        justify-content: space-between;
        font-weight: 600;
        span{
            color: #0266ca;
        }
        &:hover{
            background-color: rgba(0,0,0,0.15);
        }
    }
    @media(max-width:768px){
        a{
            justify-content: flex-start;
            gap: 10px;
        }
    }
`

const MyItems = styled.div`
    padding: 12px 0;
   a{ 
    display: flex;
    gap: 10px;
    padding: 0 12px;
    } 
    &:hover{
            background-color: rgba(0,0,0,0.15);
        }

`

export default LeftSide