// import PropTypes from 'prop-types';

export default function BookList({ data }) {
  const {
    label,
    percentage } = data
  console.log(label);
    return <li className="item" >
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>

} 
// BookList.propTypes = PropTypes.arrayOf(PropTypes.shape({
//    data: PropTypes.shape({
//             // label: PropTypes.string.isRequired,
//             // percentage: PropTypes.number.isRequired
//         })
//   // data:
//   // label: PropTypes.string.isRequired
// }))