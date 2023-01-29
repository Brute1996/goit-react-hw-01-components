import PropTypes from 'prop-types'
import { ProfileWrapper, UserDescription, UserName, UserStatsList, UserStats } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats: {followers, views, likes} }) => {
    return (
        <ProfileWrapper>
            <UserDescription>
                <img
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                />
                <UserName>{username}</UserName>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </UserDescription>

            <UserStatsList>
                <UserStats>
                    <span className="label">Followers</span>
                    <span className="quantity">{followers}</span>
                </UserStats>
                <UserStats>
                    <span className="label">Views</span>
                    <span className="quantity">{views}</span>
                </UserStats>
                <UserStats>
                    <span className="label">Likes</span>
                    <span className="quantity">{likes}</span>
                </UserStats>
            </UserStatsList>
        </ProfileWrapper>
    )
};



Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes:PropTypes.number.isRequired,
    })
}
