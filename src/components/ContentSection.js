const ContentSection = (props) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p>{props.name}</p>
                        <p>{props.description}</p>
                        <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="weather" title="weather" />
                    </div>
                </div>
            </div>
        </>
    )
};

export default ContentSection;