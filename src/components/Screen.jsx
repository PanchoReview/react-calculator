export default function Screen(props) {
    return (
    <div className="calculator-screen">
        <div className="history">{props.history}</div>
        <div className="current-operation">
            {props.currentInput}
        </div>

    </div>)
}