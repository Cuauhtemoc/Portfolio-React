import React, {Component} from 'react';
import img from './IMG_7378.jpeg';

class About extends Component{

    render(){

    
        return(
            <div>
                <div class='container text-center'>
                    <h1 >Cuauhtemoc Rodriguez</h1>
                    <p >Full Stack Web Developer</p>
                    <img src={img} class='rounded-circle mx-auto d-block' height='250x'  />
                    <p class='p-1 text-justify'>Full-Stack Developer with a background in education and leadership. Able to adapt and solve a variety of complex problems. Skilled in HTML5, CSS3, Javascript with a certification in Full Stack Web Development from Northwestern University.</p>
                </div>
            </div>
        )
    }
}

export default About;