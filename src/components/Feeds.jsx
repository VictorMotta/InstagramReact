import Feed from "./Feed";

const Feeds = () => {
    return (
        <div className='container-feed'>
            <Feed
                userLink='#'
                imgUser='./assets/meowed.png'
                userName='meowed'
                imgFeed='./assets/gato-telefone.png'
                imgUserLike='./assets/respondeai-curtida.png'
            />
        </div>
    );
};

export default Feeds;
