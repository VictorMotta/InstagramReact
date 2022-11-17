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
        <div className='profile-principal'>
            <a href='#'>
                <img
                    onClick={changeImage}
                    src={!imageUser ? "./assets/catanacomics.png" : imageUser}
                />
            </a>
            <div className='nome-profile-principal'>
                <h1>catacomics</h1>

                <p>
                    {!nameUser ? "Catana" : nameUser}{" "}
                    <ion-icon onClick={changeName} name='pencil'></ion-icon>
                </p>
            </div>
        </div>
    );
};

export default Profile;
