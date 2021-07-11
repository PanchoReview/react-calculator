export default function Button(props) {
    const handleClick = () => {        
        props.handleOnClick(props.value)
    }

    return(
        <button onClick={() => handleClick()} className={props.className} value={props.value}>
            {props.label}
        </button>
    )
}