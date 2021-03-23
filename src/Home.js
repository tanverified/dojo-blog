const Home = () => {
    let name = "Mario";

    const handleClick = () => {
        name = "yoshi";
        console.log(name);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p> { name } </p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;