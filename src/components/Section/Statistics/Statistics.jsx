import PropTypes from 'prop-types';
import styles from "./statistics.module.css"
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        
        <ul className={styles.statisticsList}>
            <li><p>Good: {good}</p></li>
            <li><p>Neutral: {neutral}</p></li>
            <li><p>Bad: {bad}</p></li>
            <li><p>Total: {total}</p></li>
            <li><p>Positive feedback: {positivePercentage}%</p></li>
        </ul>
       
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export {Statistics}