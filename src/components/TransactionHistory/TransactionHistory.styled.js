import styled from '@emotion/styled'


const TransactionHistoryTable = styled.table`
display: flex;
flex-direction: column;
width: 900px;
box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
margin: 30px auto;

tr{
    width: 100%;
    display: block;
}

th{
    display: inline-flex;
    padding: 20px 0;
    width: calc(100%/3);
    justify-content: center;
    background-color: #00bcd5;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    

    &:not(:last-child){
        border-right: 1px solid #fff;
    }
}

td{
    display: inline-flex;
    padding: 20px 0;
    width: calc(100%/3);
    justify-content: center;
    color: gray;
    
    &:first-of-type{
        text-transform: capitalize;
    }
    
    &:not(:last-child){
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    }   
}

tbody{
    tr:nth-of-type(even){
        background-color: rgba(0, 0, 0, 0.1);
    }
}

`


export { TransactionHistoryTable}