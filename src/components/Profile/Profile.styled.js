import styled from '@emotion/styled'

const ProfileWrapper = styled.div`
display: block;
width: 350px;
min-height: 450px;
box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
margin: 0 auto;
margin-top: 20px;
border-radius: 5px;
overflow: hidden;
`;

const UserDescription = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 40px;

img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px solid #000;
    margin-bottom: 16px;
}

p:not(:last-child){
    margin-bottom: 8px;
}

.tag{
    color: gray;
}

.location{
    color: gray;
}

`

const UserName = styled.p`
    font-size: 24px;
    font-weight: 700;
`

const UserStatsList = styled.ul`
    display: flex;
    justify-content: space-between;
    height: 125px;
`

const UserStats = styled.li`
width: calc(100%/3);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #e7ecf2;
border: 1px solid #e4e9f0;

.label{
    color: gray;
    margin-bottom: 4px;
}

.quantity{
    font-size: 18px;
    font-weight: 700;
}
`

export {ProfileWrapper, UserDescription, UserName, UserStatsList, UserStats}