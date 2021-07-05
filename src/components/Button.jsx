export default function Button(props) {
    return(
        <button className={props.className} value={props.value}>
            {props.label}
        </button>
    )
}