import "./Sugestao.css";

const Sugestao = (props) => {
    return (
        <div className='perfil-seguir'>
            <div className='perfil-foto-e-nome'>
                <img src={props.imageUserSuggest} />
                <div>
                    <h1>{props.nameUserSuggest}</h1>
                    <p>{props.unusualSuggest}</p>
                </div>
            </div>
            <h1 className='button-seguir'>Seguir</h1>
        </div>
    );
};
export default Sugestao;
