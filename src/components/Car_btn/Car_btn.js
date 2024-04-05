import Mark from '../Mark/Mark'
import './Car_btn.css'
function Car_btn(props) {
    return (
        <div classNameName="Card">
            <div className="card">
                <h3 className="card_tit">
                    <span className="card_mark">{props.mark ? props.mark : 'mark'}</span>
                    <span className="card_model">{props.model}</span>
                </h3>
                <p className="card_dollar">{props.dollar}</p>
                <p className="card_som">{props.som}</p>
                <p className="card_year">{props.year}</p>
                <p className="card_volume">{props.volume}</p>
                <p className="card_info">{props.info}</p>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

        </div>
    )
}
export default Car_btn;
