import './Mark.css'
function Mark(props) {
    return (
        <div classNameName="Mark">
            <span className="card_mark">{props.mark}</span>
        </div>
    )
}
export default Mark;
