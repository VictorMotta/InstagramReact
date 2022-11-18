import "./Profile.css";
import React, { useState } from "react";

const Profile = () => {
    let [nameUser, setNameUser] = React.useState("");
    let [imageUser, setImageUser] = React.useState("");
    function changeName() {
        setNameUser(prompt("Digite seu nome: "));
    }

    function changeImage() {
        setImageUser(prompt("Digite o URL da Imagem: "));
    }

    return (
        <div data-test='user' className='profile-principal'>
            <a href='#'>
                <img
                    data-test='profile-image'
                    onClick={changeImage}
                    src={!imageUser ? "./assets/catanacomics.png" : imageUser}
                />
            </a>
            <div className='nome-profile-principal'>
                <h1>catacomics</h1>

                <p data-test='name'>
                    {!nameUser ? "Catana" : nameUser}{" "}
                    <ion-icon data-test='edit-name' onClick={changeName} name='pencil'></ion-icon>
                </p>
            </div>
        </div>
    );
};

export default Profile;
