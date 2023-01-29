import PropTypes from 'prop-types'
import { FriendsList, Friend } from './FriendList.styled';

export const FriendList = ({ friends }) => {

    return (
        <FriendsList>
            {friends.map(({avatar, name, isOnline, id}) => {
                return (
                    <Friend key={id} isOnline={isOnline}>
                        <span className="status"></span>
                        <img className="avatar" src={ avatar } alt="User avatar" width="48" />
                        <p className="name">{ name }</p>
                    </Friend>
                )
            })}
        </FriendsList>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }
        )).isRequired,
};