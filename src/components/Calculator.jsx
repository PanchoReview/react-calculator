import { useState } from "react"
import Keypad from "./Keypad"
import Screen from "./Screen"

const initialState = {
    currentInput: "0",
    history: "0",
    a: 0,
    b: 0,
    lastSelection: "number", //number, operator
    previousOperator: "" // +, -, *, /
}


export default function Calculator() {
    const [values, setValues] = useState(initialState)

    const resetCalculator = () => {
        setValues(initialState)
    }

    const operate = operator => {
        //a = b
        //history = "b op"
        //currentInput = b

        let result = 0

        switch (values.previousOperator) {
            case "+": 
                result = values.a + values.b
                break
            case "-": 
                result = values.a - values.b
                break
            case "*": 
                result = values.a * values.b
                break
            case "/": 
                result = values.a / values.b
                break
            default:
                result = values.b
                break
        }

        const newA = result
        const newHistory = `${result} ${operator}`
        const newB = result
        const newLastSelection = 'operator'
        const newCurrentInput = `${result}`
        const newPreviousOperator = operator

        setValues({...values, 
            a: newA, 
            b: newB,
            history: newHistory, 
            currentInput: newCurrentInput,
            lastSelection: newLastSelection,
            previousOperator: newPreviousOperator
        })

    }

    const chooseOperator = operator => {
        switch (operator) {
            case "+":
            case "-":
            case "*":
            case "/":
                operate(operator)
                break
            case "=":
                console.log("pending")
                break
            case "C": 
                resetCalculator()
                break
            default:
                console.log(operator)
                break
        }
    }

    const chooseNumber = number => {        
        const shouldReplaceCurrentValue =
            (values.lastSelection === "number" && values.b === 0) ||
            (values.lastSelection === "operator")

        if (shouldReplaceCurrentValue){
            const newB = number
            const newCurrentInput = `${number}`
    
            setValues({...values, lastSelection: "number", b: newB, currentInput: newCurrentInput})
        }
        else {
            const newCurrentInput = `${values.currentInput}${number}`
            const newB = parseInt(newCurrentInput)

            setValues({...values, lastSelection: "number", b: newB, currentInput: newCurrentInput})
        }
    }

    return (
        <div className="calculator">
            <Screen 
                history={values.history}
                currentInput = {values.currentInput}
            />
            <Keypad 
                chooseNumber={chooseNumber} 
                chooseOperator={chooseOperator} 
                
                />
        </div>
    )
}