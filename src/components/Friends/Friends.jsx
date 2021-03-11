import React from "react";
import s from './Friends.module.css';


const InfoFriends = (props) => {
    return  <div className={s.item}>
                <div className={s.itemHeader}>
                    <img src="../../images/friend1.jpg" alt="images"/>
                </div>
                <div className={s.itemContent}>
                    <div className={s.itemMore}>
                        <img src="../../images/more.png" alt="images"/>
                    </div>
                    <div className={s.friendAvatar}>
                        <div className={s.authorThumb}>
                            <img src="../../images/avatar1.jpg" alt="images"/>
                        </div>
                        <div className={s.authorContent}>
                            <a href="#" className={s.authorName} >{props.name}</a>
                            <div className={s.country} >{props.country}</div>
                        </div>
                    </div>
                    <div className={s.container}>
                        <a href="#" className={s.friendCount}>
                            <div className={s.number} >{props.numberFriends}</div>
                            <div className={s.title}>Friends</div>
                        </a>
                        <a href="#" className={s.friendCount}>
                            <div className={s.number}>{props.photos}</div>
                            <div className={s.title}>Photos</div>
                        </a>
                        <a href="#" className={s.friendCount}>
                            <div className={s.number}>{props.videos}</div>
                            <div className={s.title}>Videos</div>
                        </a>
                    </div>
                </div>
            </div>
};
const Friends = (props) => {
    let friends = props.store.getState().friendsPage.infoFriend.map(info =>
        <InfoFriends  name={info.name} country={info.country} numberFriends={info.numberFriends} photos={info.photos} videos={info.videos} />
    )

    return(
        <div>
            <div className={s.header}>
                <div className={s.amount}>
                    <p>James’s Friends (<span class="amountFriends">86</span>) </p>
                </div>
                <div className={s.searchField}>
                    <div className={s.input}>
                    <input type="text" placeholder="Search Friends..."/>
                        <button>
                            <img src="../../images/search.png" alt="images"/>
                        </button>
                    </div>
                    <a href="#" className={s.more}>
                        <img src="../../images/more.png" alt="images"/>
                    </a>
                </div>
            </div>
            <div className={s.content}>
                {friends}
            </div>

        </div>
    )
}

export default Friends;