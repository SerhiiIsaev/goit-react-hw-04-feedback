import PropTypes from 'prop-types';
import styles from "./section.module.css"

const Section = ({ title, children }) => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </section>
    )
}

export { Section }

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}