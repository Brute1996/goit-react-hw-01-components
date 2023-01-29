import styled from '@emotion/styled'

const FriendsList = styled.ul`
    width: 300px;
    margin: 0 auto;
`

const Friend = styled.li`
    display: flex;
    align-items: center;
    padding: 16px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    
    &:not(:last-child){
        margin-bottom: 8px;
    }

    .status{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        margin-right: 8px;
        background-color: ${({ isOnline }) => {
        return isOnline ? "green" : "red"
        }};
    }

    img{

        border-radius: 5px;
        margin-right: 8px;
    }

    .name{
        font-size: 24px;
        font-weight: 500;
    }
`
export {FriendsList, Friend}