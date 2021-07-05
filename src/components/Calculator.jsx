import Keypad from "./Keypad"
import Screen from "./Screen"

export default function Calculator() {
    return (
        <div className="calculator">
            <Screen />
            <Keypad />
        </div>
    )
}