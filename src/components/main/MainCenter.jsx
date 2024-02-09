import React from 'react'
import styled from 'styled-components';
import profile from '../../assets/images/profile.jpg'
import { BsCardImage } from "react-icons/bs";
import { ImCalendar } from "react-icons/im";
import { RiArticleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
// import art from '../../assets/images/widget-icon.svg'
import { BsThreeDots } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaRegCommentDots } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { FcIdea } from "react-icons/fc";
import { FaHandsClapping } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";

import { AiOutlineLike } from "react-icons/ai";

const MainCenter = () => {
    return (
        <Container>
            <CommonShare>
                <ShareBox>
                    <div className='post_field'>
                        <img src={profile} alt="" />
                        <button>Start a post</button>
                    </div>
                    <div className='button_widgets'>
                        <button><span><BsCardImage /></span> media </button>
                        <button><span><ImCalendar /></span> event </button>
                        <button><span><RiArticleFill /></span> write article</button>
                    </div>
                </ShareBox>
            </CommonShare>

            <DividerLine></DividerLine>

            <Article>
                <SharedActor>
                    <Link to=''>
                        <img src={profile} alt="" />
                        <div>
                            <span className='title'>Title</span>
                            <span className='info'>Freelance Web developer</span>
                            <span className='date'>3h.</span>
                        </div>
                    </Link>
                    <div className='user_actions'>
                        <button>
                            <BsThreeDots />
                        </button>
                        <button>
                            <IoMdClose />
                        </button>
                    </div>
                </SharedActor>
                <Description>
                    <p>Ha aytgancha, bugun Azizbek bilan Linkedin va GitHub akkauntlarni ko‘rib chiqdik, ba’zi bir kamchiliklarini to‘g‘riladik. Microsoft Outlook da yangi e-mail ham ochdik. </p>
                </Description>
                <ShareData>
                    <img src="https://www.pixground.com/wp-content/uploads/2023/06/Windows-11-Green-Waves-4K-Wallpaper-jpg.webp" alt="" />
                    <Link to=''>
                        {/* <RiSendPlaneFill /> */}
                    </Link>
                </ShareData>

                <SocialCounts>
                    <div className='reactions'>
                        <span><AiFillLike /></span>
                        <span><FcIdea /></span>
                        <span><FaHandsClapping /></span>
                        <p>{34}</p>
                    </div>
                    <div className='counts'>
                        <span>{4} comments • </span>
                        <span> {10} reposts </span>
                    </div>
                </SocialCounts>
                <SocialActions>
                    <button> {false ? <span><AiFillLike /></span> : <span><AiOutlineLike /></span>}  Like</button>
                    <button> <span><FaRegCommentDots /></span>Comment </button>
                    <button> <span><BiRepost /></span> Repost </button>
                    <button> <span><RiSendPlaneFill /></span> Send </button>
                </SocialActions>

            </Article>

        </Container>
    )
}
const Container = styled.div``;

const CommonShare = styled.div`
padding: 13px;
border-radius: 8px;
overflow: hidden;
background-color: white;
position: relative;
border: 1px solid rgba(0,0,0,0.15);
position: relative;
height: 120px;
`
const CommonCard = styled.div`
`
const ShareBox = styled.div`
display: flex;
flex-direction: column;
margin: 0 0 8px;

.post_field{
    display: flex;
    gap: 10px;
    button{
        border: 1px solid rgba(0,0,0,0.5);
        flex: 1;
        border-radius: 35px;
        height: 44px;
        text-align: start;
        padding: 0 25px;
        background-color: transparent;
        color: rgba(0,0,0,0.6);
        font-weight: 600;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        cursor: pointer;
        &:hover{
            background-color: rgba(0,0,0,0.10);
        }
    }
    img{
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    outline: 2px solid white;
    }
}
.button_widgets{
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    padding: 0 12px;
    button{
        min-height: 45px;
        color: rgba(0,0,0,0.5);
        
        font-size: 14px;
        cursor: pointer;
        background-color: transparent;
        border: none;
        padding: 0 15px;
        border-radius: 3px;
        display: flex;
        align-items: center;
        gap:6px;
        font-weight: 500;
        text-transform: capitalize;
        span{
            line-height: 0;
            font-size: 20px;
        }
        
    }
    button:hover{
        background-color: rgba(0,0,0,0.10);
    }
    button:nth-child(1) span{
        color: dodgerblue;
    }
    button:nth-child(2) span{
        color: #ff961e;
    }
    button:nth-child(3) span{
        color: #ce2b02;
    }
}
`

const DividerLine = styled.div`
width: 100%;
height: 1px;
background-color: rgba(0,0,0,0.20);
margin: 15px 0;
`
const Article = styled(CommonShare)`
padding: 0;
height: auto;
`
const SharedActor = styled.div`
display: flex;
flex-wrap: nowrap;
padding: 12px 16px 0;
margin-bottom: 8px;
align-items: center;
a{
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    align-items: center;


    img{
        width: 48px;
        height: 48px;
        object-fit: cover;
        border-radius: 50%;
    }
    div{
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        font-size: 12px;
        line-height: 14px;
        .title{
            font-weight: 600;
            font-size: 14px;
        }
        .info,.date{
            color: rgba(0,0,0,0.6);
        }
    }
};
.user_actions{
    display: flex;
    align-items: center;
    gap: 8px;
    button{
        border: none;
        background: none;
        font-size: 22px;
        color: rgba(0,0,0,0.7);
        cursor: pointer;
        line-height: 0;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        &:hover{
            background-color: rgba(0, 0, 0, 0.075);
        }
    }
}


`
const Description = styled.div`
    padding: 0px 18px 0 16px;
    font-size: 14px;
    color: #000000b5;
`
const ShareData = styled.div`
   position: relative;
   margin-top: 8px;
   width: 100%;
   overflow: hidden;
   max-height: 620px;
   img{
       width: 100%;
       height: 100%;
       object-fit: cover;
       background-size:100%;
       cursor: pointer;
       
   }
    
`

const SocialCounts = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 12px 8px;
    border-bottom: 1px solid rgba(0,0,0,0.20);
    .reactions{
        display: flex;
        align-items: center;
        span{
            width: 18px;
            height: 18px;
            line-height: 0;
            font-size:14px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: -4px;
            &:nth-child(1){
                background-color: dodgerblue;
                color: #b7ddfd;
            }
            &:nth-child(2){
                background-color: #ffe600;
            }   
            &:nth-child(3){
                background-color: #29a703;
                color: #b7ddfd;
            }
        }
        p{
            margin-left: 6px;
            font-size: 14px;
            color: #1f1f1f99;
        }
    }
    .counts{
        margin-left: 6px;
        font-size: 14px;
        color: #1f1f1f99;
        cursor: pointer;
        span:hover{
            text-decoration: underline;
        }
    }

    
`

const SocialActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 5px 12px;
   
    /* min-height: 40px; */
button{
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    gap: 5px;
    border-radius: 5px;
    cursor: pointer;
    flex: 1;
     &:hover{
            background-color: rgba(0,0,0,0.10);
        }
    span{
        line-height: 0;
        font-size: 23px;
        color: gray;
    }
}
`

export default MainCenter