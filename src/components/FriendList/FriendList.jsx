import PropTypes from 'prop-types'
import { FriendsList } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {

    return (
        <FriendsList>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <FriendListItem
                        key={id}
                        isOnline={isOnline}
                        avatar={avatar}
                        name={name} />
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