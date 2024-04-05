import './Button.css'
 function Button(props) {
    return (
        <button type="button" className="btn">{props.btn_text}</button>
    )
 }
 export default Button;