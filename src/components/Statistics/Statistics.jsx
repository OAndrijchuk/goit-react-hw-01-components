import PropTypes from 'prop-types';
import style from './Statistics.module.css'

export const Statistics = ({ title, stats }) => {
    const statsItems = stats.map(el => {
        const {id, label, percentage} = el;
        return(<li className={style.item} key={id} style={{backgroundColor: getRandomHexColor()}}>
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
            </li>)
    })

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

  return (
    <section className={style.statistics}>
        {title && <h2 className={style.title}>{title}</h2> }
        <ul className={style.statList}>
            {statsItems}
        </ul>
    </section>
    );
};

Statistics.propTypes = {
  title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
        })
    ), 
};