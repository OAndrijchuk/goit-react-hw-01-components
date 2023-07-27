import PropTypes from 'prop-types';
import style from './FriendList.module.css'


export const FriendList = ({ friends }) => {
    const friendsCard = friends.map(el => {
        const {avatar, name, isOnline, id } = el;
        return (<li className={style.item} key={id}>
                    <span className={style.status} width="20" height="20" style={{backgroundColor: isOnline ? 'green' : 'red'}}></span>
                    <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
        </li>)
    })
    
    return (
        <ul className={style.friendList}>
            {friendsCard}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline:PropTypes.bool,
            id: PropTypes.number,
        })
    ), 
};