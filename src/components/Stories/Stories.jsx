import "./Stories.css";
import Storie from "../Storie/Storie";

const Stories = () => {
    const users = [
        {
            name: "9gag",
            href: "#",
            image: "./assets/9gag.png",
            storieClass: "",
        },
        {
            name: "meowed",
            href: "#",
            image: "./assets/meowed-stories.png",
            storieClass: "",
        },
        {
            name: "barked",
            href: "#",
            image: "./assets/barked-stories.png",
            storieClass: "",
        },
        {
            name: "nathanwpylestrangeplanet",
            href: "#",
            image: "./assets/nathanwpylestrangeplanet-stories.png",
            storieClass: "",
        },
        {
            name: "wawawiwacomicsa",
            href: "#",
            image: "./assets/wawawiwacomicsa-stories.png",
            storieClass: "",
        },
        {
            name: "respondeai",
            href: "#",
            image: "./assets/respondeai-stories.png",
            storieClass: "",
        },
        {
            name: "filomoderna",
            href: "#",
            image: "./assets/filomoderna-stories.png",
            storieClass: "",
        },

        {
            name: "memeriagourmet",
            href: "#",
            image: "./assets/memeriagourmet.png",
            storieClass: "opacity",
        },
    ];

    return (
        <div className='container-stories'>
            <div className='content-stories'>
                {users.map((user) => (
                    <Storie
                        key={user.name}
                        hrefStorie={user.href}
                        imageStorie={user.image}
                        userNameStorie={user.name}
                        classStorie={user.storieClass}
                    />
                ))}
                <ion-icon name='chevron-forward-circle' class='icone-arrow'></ion-icon>
            </div>
        </div>
    );
};

export default Stories;
