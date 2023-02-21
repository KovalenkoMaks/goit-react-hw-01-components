import styled from '@emotion/styled'
// import props from "../../transactions";
// console.log(props);
const Table = styled.table`
 background-color: #ECF1F4;
`
const Head = styled.thead`
tr{
    background-color: #00BED5;
}

`
const Body = styled.tbody`
text-align: center;
`
const Element = styled.tr`
    background-color: ${props => props.index % 2 ? '#EBF2F4' : 'white'}
`
export { Table, Head, Body,Element}

//background-color: #00BED5; #EBF2F4