import React from "react";
import s from './Friends.module.css';
import StoreContext from "../../StoreContext";


const InfoFriends = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().friendsPage.infoFriend;

                return <div className={s.item}>
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
                                <a href="#" className={s.authorName}>{state.name}</a>
                                <div className={s.country}>{state.country}</div>
                            </div>
                        </div>
                        <div className={s.container}>
                            <a href="#" className={s.friendCount}>
                                <div className={s.number}>{state.numberFriends}</div>
                                <div className={s.title}>Friends</div>
                            </a>
                            <a href="#" className={s.friendCount}>
                                <div className={s.number}>{state.photos}</div>
                                <div className={s.title}>Photos</div>
                            </a>
                            <a href="#" className={s.friendCount}>
                                <div className={s.number}>{state.videos}</div>
                                <div className={s.title}>Videos</div>
                            </a>
                        </div>
                    </div>
                </div>
            }}
        </StoreContext.Consumer>
    )
};
const Friends = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().friendsPage.infoFriend;
                let friends = state.map(info =>
                    <InfoFriends name={info.name} country={info.country} numberFriends={info.numberFriends}
                                 photos={info.photos}
                                 videos={info.videos}/>
                )
                return (<div>
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

                </div>)
            }}

        </StoreContext.Consumer>
    )
}

export default Friends;