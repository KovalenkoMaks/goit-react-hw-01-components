import PropTypes from 'prop-types';

export default function BookList({data}) {
  const {
    label,
    percentage } = data
    return <li className="item" >
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>

} 
BookList.propTypes = { 
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  })
} 
