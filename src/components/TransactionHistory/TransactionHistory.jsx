import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
    
    const transactions = items.map(({ type, amount, currency, id }) => {
        return (
            <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
        )
    });
  return (
    <table className={style.blueTable}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transactions}
  </tbody>
</table>
  );
};

TransactionHistory.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.number,
            currency: PropTypes.number,
        })
    ), 
};