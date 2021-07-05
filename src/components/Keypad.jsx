import Button from "./Button";

export default function Keypad() {
    return(
    <div className="calculator-keypad">
        <Button className="operation-btn" label="C" value="C" />
        <Button className="operation-btn" label="/" value="/" />
        <Button className="operation-btn" label="*" value="*" />
        <Button className="operation-btn" label="-" value="-" />
        <Button className="number-btn" label="1" value={1}/>
        <Button className="number-btn" label="2" value={2}/>
        <Button className="number-btn" label="3" value={3}/>
        <Button className="operation-btn" label="+" value="+" />
        <Button className="number-btn" label="4" value={4}/>
        <Button className="number-btn" label="5" value={5}/>
        <Button className="number-btn" label="6" value={6}/>        
        <Button className="number-btn" label="7" value={7}/>
        <Button className="number-btn" label="8" value={8}/>
        <Button className="number-btn" label="9" value={9}/>
        <Button className="operation-btn" label="=" value="=" />
        <Button className="number-btn" label="0" value={0}/>
        <Button className="operation-btn" label="." value="." />
        
    </div>)
}