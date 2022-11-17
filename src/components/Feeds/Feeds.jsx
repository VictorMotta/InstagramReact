import "./Feeds.css";
import Feed from "../Feed/Feed";

const Feeds = () => {
    const posts = [
        {
            id: "1",
            userLinkPost: "#",
            imgUserPost: "./assets/meowed.png",
            userNamePost: "meowed",
            imgFeedPost: "./assets/gato-telefone.png",
            imgUserLikePost: "./assets/respondeai-curtida.png",
            nameUserLikePost: "respondeai",
            amountLikesPost: "100010",
            userComentFriendPost: "meowed",
            aComentFriendPost: "Um gatinho lindo mexendo no celular!!",
            wlpVideo: false,
        },
        {
            id: "2",
            userLinkPost: "#",
            imgUserPost: "./assets/barked-stories.png",
            userNamePost: "barked",
            imgFeedPost: "./assets/dog.png",
            imgUserLikePost: "./assets/adorableanimals.png",
            nameUserLikePost: "adorable_animals",
            amountLikesPost: "99.159",
            userComentFriendPost: "respondeai",
            aComentFriendPost: "Um Cachorro lindo dormindo s2!!",
            wlpVideo: false,
        },
        {
            id: "3",
            userLinkPost: "#",
            imgUserPost: "./assets/meowed.png",
            userNamePost: "meowed",
            imgFeedPost: "./assets/video.mp4",
            imgUserLikePost: "./assets/barked-stories.png",
            nameUserLikePost: "barked",
            amountLikesPost: "101523",
            userComentFriendPost: "9gag",
            aComentFriendPost: "Urso fofo atravessando o rio :) !!",
            wlpVideo: "./assets/capa.png",
        },
    ];

    return (
        <div className='container-feed'>
            {posts.map((post) => (
                <Feed
                    idFeed={post.id}
                    userLink={post.userLinkPost}
                    imgUser={post.imgUserPost}
                    userName={post.userNamePost}
                    imgFeed={post.imgFeedPost}
                    imgUserLike={post.imgUserLikePost}
                    nameUserLike={post.nameUserLikePost}
                    amountLikes={post.amountLikesPost}
                    userComentFriend={post.userComentFriendPost}
                    aComentFriend={post.aComentFriendPost}
                    walppaperVideo={post.wlpVideo}
                />
            ))}
        </div>
    );
};

export default Feeds;
