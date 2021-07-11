import Button from "./Button";

export default function Keypad(props) {
    const numberClicked = number => {        
        props.chooseNumber(number)
    }

    const operatorClicked = operator => {        
        props.chooseOperator(operator)
    } 
    

    
    return(
    <div className="calculator-keypad">
        <Button handleOnClick={operatorClicked} className="operation-btn" label="C" value="C" />
        <Button handleOnClick={operatorClicked} className="operation-btn" label="/" value="/" />
        <Button handleOnClick={operatorClicked} className="operation-btn" label="*" value="*" />
        <Button handleOnClick={operatorClicked} className="operation-btn" label="-" value="-" />
        <Button handleOnClick={numberClicked} className="number-btn" label="1" value={1}/>
        <Button handleOnClick={numberClicked} className="number-btn" label="2" value={2}/>
        <Button handleOnClick={numberClicked} className="number-btn" label="3" value={3}/>
        <Button handleOnClick={operatorClicked} className="operation-btn" label="+" value="+" />
        <Button handleOnClick={numberClicked} className="number-btn" label="4" value={4}/>
        <Button handleOnClick={numberClicked} className="number-btn" label="5" value={5}/>
        <Button handleOnClick={numberClicked} className="number-btn" label="6" value={6}/>        
        <Button handleOnClick={numberClicked} className="number-btn" label="7" value={7}/>
        <Button handleOnClick={numberClicked} className="number-btn" label="8" value={8}/>
        <Button handleOnClick={numberClicked} className="number-btn" label="9" value={9}/>
        <Button handleOnClick={operatorClicked} className="operation-btn" label="=" value="=" />
        <Button handleOnClick={numberClicked} className="number-btn" label="0" value={0}/>
        <Button className="operation-btn" label="." value="." />
        
    </div>)
}