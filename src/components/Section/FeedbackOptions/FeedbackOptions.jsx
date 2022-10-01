import PropTypes from 'prop-types';
import styles from "./feedbackOptions.module.css"
const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    const Element = options.map((item, index) => {
        return(<li key={index} className={styles.btnListItem}><button onClick={()=>onLeaveFeedback(item)} type="button">{item}</button></li>)
    })
    return (
        <ul className={styles.btnList}>
            {Element}
        </ul>
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export {FeedbackOptions}