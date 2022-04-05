import React from 'react';
import './Blog.css'

const Blogs = () => {
    return (
        <div className='blog-container'>
            <h1>Blogs</h1>

            <div>
                <h3>What is Context API</h3>

                <p>
                    Context API is a way in react to produce global variable that can pass data to any component. 
                    Prop drilling is a process in react js to pass data as props from one component to another but its not necessary for that component the data.

                    Context API is the best way to pass data 4-5 layers down or from any location to share data with multiple components. Using context API data can be reached from any location in the application without more complexity.
                    Provider provides a state where React.createContext() a state is hold the context. It will hold the data for all the components that might need the data.
                </p>
            </div>
            <div>
                <h3>Symantic Tag</h3>
                <p>
                    Semantic is a feature of HTML5. Semantic describe their meaning in humarn and machine readable way. To work with html in more specific way semantic tags are good for Developer. And also it is browser supported.
                </p>
            </div>
            <div>
                <h3>Inline, Block and Inline-Block Element</h3>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;