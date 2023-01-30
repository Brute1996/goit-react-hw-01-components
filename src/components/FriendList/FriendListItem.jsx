import { Friend } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => (
    <Friend key={id} isOnline={isOnline}>
        <span className="status"></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </Friend>
);