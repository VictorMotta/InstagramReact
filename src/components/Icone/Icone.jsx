const Icone = (props) => {
    return (
        <a href={props.hrefIcon}>
            <ion-icon name={props.nameIcon} className={props.classIcon}></ion-icon>
        </a>
    );
};

export default Icone;
