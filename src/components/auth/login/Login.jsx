import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../../assets/images/login-logo.svg'
import hero from '../../../assets/images/login-hero.svg'
import google from '../../../assets/images/google.svg';
import { connect } from 'react-redux'

import { signInAPI } from '../../../actions/action';

function Login(props) {
    return (
        <div>
            <Container>
                <Nav>
                    <Link to='/'>
                        <img src={logo} alt="" />
                    </Link>

                    <div>
                        <Join>Join now</Join>
                        <SignIn>Sign In</SignIn>
                    </div>
                </Nav>

                <Section>
                    <Hero>
                        <h1>Welcome to your professional community</h1>
                        <img src={hero} alt="" />
                    </Hero>
                    <Form>
                        <Google onClick={() => signInAPI()}>
                            <img src={google} alt="" />
                            Sign in with google
                        </Google>
                    </Form>
                </Section>
            </Container>
        </div>
    )
}


const Container = styled.div`
padding:0px;
`
const Nav = styled.nav`
max-width:1128px;
margin:auto;
padding:12px 0 16px;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: nowrap;
position: relative;
& > a{
   width:135px;
   height: 34px;
   @media(max-width:768px){
    padding: 0 5px;
   }
}
`;

const Join = styled.a`
font-size: 18px;
padding: 10px 12px;
text-decoration: none;
color: rgba(39, 39, 39, 0.863);
margin-right: 12px;
cursor: pointer;
border-radius: 5px;
&:hover{
    background-color: rgba(24, 24, 24, 0.11);
    color: black;
}
`

const SignIn = styled.a`
box-shadow: inset 0 0 0 1px #0a66c2;
color: #0a66c2;
font-weight: 700;
font-size: 16px;
border-radius: 24px;
padding: 10px 24px;
cursor: pointer;
line-height: 40px;
transition-duration: 167ms;
text-align: center;
&:hover{
    background-color: #afd3f767;
}
`

const Section = styled.section`
    display: flex;
    align-content:start;
    min-height: 700px;
    /* padding-bottom: 138px; */
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    margin: auto;
    @media (max-width:768px) {
        
    }
`;

const Hero = styled.div`
  width: 100%;
h1{
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 400;
    line-height: 70px;
    @media(max-width:768px){
        text-align: center;
        font-size: 20px;
        line-height: 2;
        width: 100%;
    }
}
img{
    z-index: -1;
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media(max-width:768px){
        top: 230px;
        width: initial;
        position: initial;
        height: initial;
    }
}
`;

const Form = styled.div`

margin-top: 100px;
width: 408px;
@media(max-width:768px){
    margin-top: 20px;

}

`
const Google = styled.button`
display: flex;
justify-content: center;
align-items: center;
background-color: white;
border: 1px solid dodgerblue;
height: 56px;
width: 100%;
border-radius: 28px;
vertical-align: middle;
transition-duration: 167ms;
z-index: 0;
font-size: 20px;
gap: 5px;
cursor: pointer;
&:hover{
    background-color: rgba(207,207,207,0.25);
    color: #585858;
}
`

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
