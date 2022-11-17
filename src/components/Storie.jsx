const Storie = (props) => {
    return (
        <div className={`storie ${props.classStorie}`}>
            <a href={props.hrefStorie}>
                <div className='img-profile'>
                    <img src={props.imageStorie} alt='' />
                </div>
            </a>
            <div className='nome-usuario-storie'>
                <p>{props.userNameStorie}</p>
            </div>
        </div>
    );
};

export default Storie;
