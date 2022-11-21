import Sugestao from "../Sugestao/Sugestao";
import "./Sugestoes.css";

const Sugestoes = () => {
    const friendsSuggest = [
        {
            nameUser: "catanacomics",
            imageUser: "./assets/catanacomics.png",
            unusualUser: "Segue você",
        },
        {
            nameUser: "chibirdart",
            imageUser: "./assets/chibirdart.png",
            unusualUser: "Segue você",
        },
        {
            nameUser: "razoesparaacreditar",
            imageUser: "./assets/razoesparaacreditar.png",
            unusualUser: "Novo no Instagram",
        },
        {
            nameUser: "adorable_animals",
            imageUser: "./assets/adorableanimals.png",
            unusualUser: "Segue você",
        },
        {
            nameUser: "smallcutecats",
            imageUser: "./assets/smallcutecats.png",
            unusualUser: "Segue você",
        },
    ];
    return (
        <div>
            <div className='sugestoes-indice'>
                <h1>Sujestões para você</h1>
                <p>Ver tudo</p>
            </div>
            <div className='sugestoes-perfis'>
                {friendsSuggest.map((friendSuggest) => (
                    <Sugestao
                        key={friendSuggest.nameUser}
                        imageUserSuggest={friendSuggest.imageUser}
                        nameUserSuggest={friendSuggest.nameUser}
                        unusualSuggest={friendSuggest.unusualUser}
                    />
                ))}
            </div>
        </div>
    );
};

export default Sugestoes;
