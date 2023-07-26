import PropTypes from 'prop-types';
import style from './Profile.module.css'

export const Profile = (props) => {
    const {username, tag, location, avatar, stats:{followers, views, likes} } = props;
    return (
      <div className={style.profile}>
        <div className={style.description}>
          <img
            src={avatar}
            alt="User avatar"
            className={style.avatar}
          />
          <p className={style.name}>{username}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className={style.stats}>
          <li className={style.item}>
            <span className={style.label}>Followers</span>
            <span className="quantity">{followers}</span>
          </li>
          <li className={style.item}>
            <span className={style.label}>Views</span>
            <span className="quantity">{views}</span>
          </li>
          <li className={style.item}>
            <span className={style.label}>Likes</span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </div>)
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }), 
};