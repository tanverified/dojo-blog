import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web developer course', body: 'lorem ipsum...', author: 'mario', id: 3 },
        { title: 'React pro tips', body: 'lorem ipsum...', author: 'mario', id: 4 },
        { title: 'Redux tips', body: 'lorem ipsum...', author: 'mario', id: 5 }
      ]);

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2> { blog.title } </h2>
                    <p>written by { blog.author} </p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;