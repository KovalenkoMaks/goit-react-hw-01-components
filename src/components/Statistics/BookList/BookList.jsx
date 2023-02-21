import PropTypes from 'prop-types';
import { ListItem } from './Booklist.styled';
import {randomColor} from '../../../Utils/index';
export default function BookList({data}) {
  const {
    label,
    percentage } = data
    return <ListItem style={{backgroundColor: `${randomColor()}`}}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </ListItem>

} 
BookList.propTypes = { 
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  })
} 
