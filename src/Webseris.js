const Webseris = (props) => {
    return (
        <>
            <div className="cards">
                <h2>{props.title}</h2>
                <img src={props.imgsrc} />
                <p>{props.description}</p>
                <a href={props.link}>
                <button>Watch Now</button>
                </a>
                <hr />
            </div>
        </>
    );
}


export default Webseris;