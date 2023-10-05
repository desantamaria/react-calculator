import React, { useState, useEffect } from 'react'
import './App.css'

import Button from './components/Button'
import ButtonRow from './components/ButtonRow'
import ButtonWrapper from './components/ButtonWrapper'
import OutputScreen from './components/OutputScreen'
import Wrapper from './components/Wrapper'



function App() {

    const [state, setState] = useState({
        screenValue: '',
        answer: '0'
    });

    const [prevScreenValue, setPrevScreenValue] = useState('0');


    const handleLabelData = (data) => {

        const value = data;
        
        switch (value) {
            case "=": {
                if (state.screenValue !== "") {
                    var ans = "";
                    
                    try {
                        ans = eval(state.screenValue);
                    } catch (err) {
                        setPrevScreenValue(state.screenValue);
                        setState({
                            screenValue: "",
                            answer: "Error"
                        });
                    }
                    
                    if (ans === undefined || ans == ''){
                        setPrevScreenValue(state.screenValue);
                        setState({
                            screenValue: "",
                            answer: "Invalid Input"
                        });
                    }
                    else {
                        setPrevScreenValue(state.screenValue);
                        setState({
                            screenValue: "",
                            answer: ans
                        });
                    }
                    break;
                }
            }
            case "+-": {                
                const negatedString = ((state.screenValue[0] == '-') ? (state.screenValue.substring(1)) : ('-' + state.screenValue));
                setState({
                    ...state,
                    screenValue: negatedString
                });
                break;  
            }

            case "C": {
                setState({
                    screenValue: "",
                    answer: ""
                });
                break;
            }
      
            case "<-": {
                const deletedOne = state.screenValue.slice(0, -1);
                setState({
                    ...state,
                    screenValue: deletedOne
                });
                break;
            }
      
            default: {
                const addedString = state.screenValue += ((value == "ANS") ? state.answer: value);
                state.screenValue = addedString;

                setState({
                    ...state, 
                    screenValue: addedString
                });
            
                break;
            }
        }
      }
    
    return (
        <>
            <h1>CALCULATOR</h1>
            <Wrapper>
                <OutputScreen result={`${prevScreenValue} = ${state.answer}`}/>
                <OutputScreen result={state.screenValue}/>
                <ButtonWrapper>
                    <ButtonRow>
                        <Button id="clear" label="C" handleClick = {handleLabelData}></Button>
                        <Button id="delete" label="<-" handleClick = {handleLabelData}></Button>
                        <Button label="%" handleClick = {handleLabelData}></Button>
                        <Button label="^" handleClick = {handleLabelData}></Button>
                    </ButtonRow>
                    <ButtonRow>
                        <Button label="(" handleClick = {handleLabelData}></Button>
                        <Button label=")" handleClick = {handleLabelData}></Button>
                        <Button label="+-" handleClick = {handleLabelData}></Button>
                        <Button label="/" handleClick = {handleLabelData}></Button>
                    </ButtonRow>
                    <ButtonRow>
                        <Button label="7" handleClick = {handleLabelData}></Button>
                        <Button label="8" handleClick = {handleLabelData}></Button>
                        <Button label="9" handleClick = {handleLabelData}></Button>
                        <Button label="x" handleClick = {handleLabelData}></Button>
                    </ButtonRow>
                    <ButtonRow>
                        <Button label="4" handleClick = {handleLabelData}></Button>
                        <Button label="5" handleClick = {handleLabelData}></Button>
                        <Button label="6" handleClick = {handleLabelData}></Button>
                        <Button label="-" handleClick = {handleLabelData}></Button>
                    </ButtonRow>
                    <ButtonRow>
                        <Button label="1" handleClick = {handleLabelData}></Button>
                        <Button label="2" handleClick = {handleLabelData}></Button>
                        <Button label="3" handleClick = {handleLabelData}></Button>
                        <Button label="+" handleClick = {handleLabelData}></Button>
                    </ButtonRow>
                    <ButtonRow>
                    <Button label="0" handleClick = {handleLabelData}></Button>
                    <Button label="." handleClick = {handleLabelData}></Button>
                    <Button id="ans" label="ANS" handleClick = {handleLabelData}></Button>
                    <Button id="equal" label="=" handleClick = {handleLabelData}></Button>
                    </ButtonRow>
                </ButtonWrapper>
            </Wrapper>
        </>
    )
}

export default App
