const Feed = (props) => {
    return (
        <div className='content-feed'>
            <div className='titulo'>
                <a href={props.userLink}>
                    <div className='usuario'>
                        <img src={props.imgUser} alt='' />
                        <h1>{props.userName}</h1>
                    </div>
                </a>

                <ion-icon name='ellipsis-horizontal' class='icones'></ion-icon>
            </div>

            <img src={props.imgFeed} className='img-feed' />

            <div className='footer-feed'>
                <div className='actions'>
                    <div className='main-actions'>
                        <ion-icon name='heart-outline' class='icones'></ion-icon>
                        <ion-icon name='chatbubble-outline' class='icones'></ion-icon>
                        <ion-icon name='navigate-outline' class='icones'></ion-icon>
                    </div>
                    <ion-icon name='bookmark-outline' class='icones bookmark'></ion-icon>
                </div>
                <div className='curtidas'>
                    <img src={props.imgUserLike} />
                    <p>
                        Curtido por <strong>{props.nameUserLike}</strong> e
                        <strong> outras {props.amountLikes} pessoas</strong>
                    </p>
                </div>
                <div className='descricao-comentarios'>
                    <div className='descricao-publicacao'>
                        <h1>meowed</h1>
                        <p>Um gatinho lindo mexendo no celular!! </p>
                    </div>
                    <div className='show-comentarios'>Ver todos os comentários</div>
                    <div className='comentarios-container'>
                        <div className='comentario'>
                            <img src='./assets/adorableanimals.png' />

                            <div className='comentario-curtida'>
                                <div className='nome-comentario'>
                                    <h1>adorableanimals</h1>
                                    <p>Nossa que gatinho lindo!! S2</p>
                                </div>
                                <div className='tempo-curtida-responder'>
                                    <p>1h</p>
                                    <h1>81 curtidas</h1>
                                    <h1>Responder</h1>
                                    <h1>Ver Tradução</h1>
                                </div>
                            </div>

                            <ion-icon name='heart-outline'></ion-icon>
                        </div>
                        <div className='comentario'>
                            <img src='./img/badvibesmemes.png' />

                            <div className='comentario-curtida'>
                                <div className='nome-comentario'>
                                    <h1>bad.vibes.memes</h1>
                                    <p>Nossa que gatinho fofo!! S2</p>
                                </div>
                                <div className='tempo-curtida-responder'>
                                    <p>1h</p>
                                    <h1>10 curtidas</h1>
                                    <h1>Responder</h1>
                                    <h1>Ver Tradução</h1>
                                </div>
                            </div>

                            <ion-icon name='heart-outline'></ion-icon>
                        </div>
                        <div className='comentario'>
                            <img src='./img/barked-stories.png' />

                            <div className='comentario-curtida'>
                                <div className='nome-comentario'>
                                    <h1>barked</h1>
                                    <p>Nossa que gato mais lindo!! S2</p>
                                </div>
                                <div className='tempo-curtida-responder'>
                                    <p>1h</p>
                                    <h1>20 curtidas</h1>
                                    <h1>Responder</h1>
                                    <h1>Ver Tradução</h1>
                                </div>
                            </div>

                            <ion-icon name='heart-outline'></ion-icon>
                        </div>

                        <div className='comentario'>
                            <img src='./img/chibirdart.png' />

                            <div className='comentario-curtida'>
                                <div className='nome-comentario'>
                                    <h1>chibirdart</h1>
                                    <p>Nossa que gatinho gostoso! S2</p>
                                </div>
                                <div className='tempo-curtida-responder'>
                                    <p>1h</p>
                                    <h1>40 curtidas</h1>
                                    <h1>Responder</h1>
                                    <h1>Ver Tradução</h1>
                                </div>
                            </div>

                            <ion-icon name='heart-outline'></ion-icon>
                        </div>
                    </div>
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
