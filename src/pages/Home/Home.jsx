import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LeftSide from '../../components/left/LeftSide'
import RightSide from '../../components/right/RightSide'
import MainCenter from '../../components/main/MainCenter'
export default function Home() {
    return (
        <div>
            <Container>
                <Section>

                    <LeftSide />
                    <MainCenter />
                    <RightSide />

                </Section>
            </Container>
        </div>
    )
}

const Container = styled.div`
max-width: 1128px;
margin: auto;
margin-top: 75px;
@media(max-width:768px){
    margin-top: 70px;
}
`
const Section = styled.div`
width: 100%;
display: grid;
grid-template-columns: 225px auto 300px;
gap: 28px;
row-gap: 20px;
padding: 0 25px;
@media(max-width:992px){
    grid-template-columns: 225px auto;
}
@media(max-width:768px){
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;

}
`