import "./Feed.css";
import React, { useState } from "react";

const Feed = (props) => {
    const [likes, setLikes] = React.useState(Number(props.amountLikes));
    const [toggleLike, setToggleLike] = React.useState(true);
    const [corLike, setCorLike] = React.useState("#000000");
    const [toggleBookmark, setToggleBookmark] = React.useState(false);

    React.useEffect(() => {
        setCorLike((state) => (!toggleLike ? "#FF0000" : "#000000"));
    }, [toggleLike]);

    function alterarCorValor(e) {
        setToggleLike((state) => !state);

        if (toggleLike === true) {
            setLikes(likes + 1);
        } else {
            setLikes(likes - 1);
        }
    }

    function videoOrImg() {
        if (props.imgFeed.includes(".mp4") || props.imgFeed.includes(".ogv")) {
            return (
                <video
                    width='100%'
                    onClick={toggleLike ? alterarCorValor : null}
                    autoPlay
                    muted
                    loop
                    poster={props.walppaperVideo}
                >
                    <source src={props.imgFeed} type='video/mp4' />
                    <source src={props.imgFeed} type='vide/ogg' />
                </video>
            );
        } else {
            return (
                <img
                    onClick={toggleLike ? alterarCorValor : null}
                    src={props.imgFeed}
                    className='img-feed'
                />
            );
        }
    }

    return (
        <div key={props.idFeed} className='content-feed'>
            <div className='titulo'>
                <a href={props.userLink}>
                    <div className='usuario'>
                        <img src={props.imgUser} alt='' />
                        <h1>{props.userName}</h1>
                    </div>
                </a>

                <ion-icon name='ellipsis-horizontal' class='icones'></ion-icon>
            </div>

            {videoOrImg()}

            <div className='footer-feed'>
                <div className='actions'>
                    <div className='main-actions'>
                        <ion-icon
                            onClick={alterarCorValor}
                            name={toggleLike ? "heart-outline" : "heart"}
                            class='icones like-feed'
                            style={{ color: corLike }}
                        ></ion-icon>
                        <ion-icon name='chatbubble-outline' class='icones'></ion-icon>
                        <ion-icon name='navigate-outline' class='icones'></ion-icon>
                    </div>
                    <ion-icon
                        onClick={(e) => setToggleBookmark((state) => !state)}
                        name={!toggleBookmark ? "bookmark-outline" : "bookmark"}
                        class='icones bookmark'
                    ></ion-icon>
                </div>
                <div className='curtidas'>
                    <img src={props.imgUserLike} />
                    <p>
                        Curtido por <strong>{props.nameUserLike}</strong> e
                        <strong>
                            {likes > 1
                                ? ` outras ${likes.toLocaleString("pt-BR")} pessoas`
                                : ` outra ${likes} pessoa`}
                        </strong>
                    </p>
                </div>
                <div className='descricao-comentarios'>
                    <div className='descricao-publicacao'>
                        <h1>{props.userComentFriend}</h1>
                        <p>{props.aComentFriend}</p>
                    </div>
                    <div className='show-comentarios'>Ver todos os comentários</div>
                    <div className='send-comentarios'>
                        <ion-icon name='happy-outline'></ion-icon>
                        <input type='text' placeholder='Adicione um Comentário...' />
                        <h2>Publicar</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feed;
