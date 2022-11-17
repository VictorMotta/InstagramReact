import Profile from "../Profile/Profile";
import Sugestoes from "../Sugestoes/Sugestoes";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className='container-side-bar'>
            <Profile />
            <Sugestoes />
            <div className='rodape'>
                <h1>
                    <a href='#'>Sobre</a> • <a href='#'>Ajuda</a> •<a href='#'>Imprensa</a> •{" "}
                    <a href='#'>API</a> •<a href='#'>Carreiras</a> • <a href='#'>Privacidade</a> •
                    <a href='#'>Termos</a> • <a href='#'>Localizações</a> •
                    <a href='#'>Contas mais relevantes</a> •<a href='#'>Hashtags</a> •{" "}
                    <a href='#'>Idioma</a>
                </h1>
                <h2>© 2021 INSTAGRAM DO FACEBOOK</h2>
            </div>
        </div>
    );
};

export default Sidebar;
