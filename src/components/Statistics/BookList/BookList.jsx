export default function BookList({data}) {

    return <li className="item" >
      <span className="label">{data.label}</span>
      <span className="percentage">{data.percentage}%</span>
    </li>

} 