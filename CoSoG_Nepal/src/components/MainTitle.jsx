import logo from "./logo.png"

function MainTitle() {
    return(
        <div className="main--title">
            <div>
                <h1 className="main--title--left">National Adolscent Boys Network Nepal</h1>
                <h1 className="main--title--left">NDBN Nepal</h1>
                <p>NDBN Nepal is a non-profit organization working to....</p>
                <button className="main--title--button">Join our community</button>
            </div>
            <img className="main--title--img" src={logo} />
        </div>
    )
}

export default MainTitle