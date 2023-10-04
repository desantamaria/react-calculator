import React, { useState } from 'react'
import './App.css'

import Button from './components/Button'
import ButtonRow from './components/ButtonRow'
import ButtonWrapper from './components/ButtonWrapper'
import OutputScreen from './components/OutputScreen'
import Wrapper from './components/Wrapper'

function App() {
    return (
        <>
            <h1>CALCULATOR</h1>
            <Wrapper>
                <OutputScreen value="0"/>
                <ButtonWrapper>
                    <ButtonRow>
                        <Button value="C"></Button>
                        <Button value="+-"></Button>
                        <Button value="%"></Button>
                        <Button value="/"></Button>
                    </ButtonRow>
                    <ButtonRow>
                        <Button value="7"></Button>
                        <Button value="8"></Button>
                        <Button value="9"></Button>
                        <Button value="X"></Button>
                    </ButtonRow>
                    <ButtonRow>
                        <Button value="4"></Button>
                        <Button value="5"></Button>
                        <Button value="6"></Button>
                        <Button value="-"></Button>
                    </ButtonRow>
                    <ButtonRow>
                        <Button value="1"></Button>
                        <Button value="2"></Button>
                        <Button value="3"></Button>
                        <Button value="+"></Button>
                    </ButtonRow>
                    <ButtonRow>
                    <Button value="0"></Button>
                    <Button value="."></Button>
                    <Button id="equal" value="="></Button>
                    </ButtonRow>
                </ButtonWrapper>
            </Wrapper>
        </>
    )
}

export default App
