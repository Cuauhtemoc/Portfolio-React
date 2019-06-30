import React, {Component} from 'react';
import img from './IMG_7378.jpeg';

class About extends Component{

    render(){
        let iconStyle = {
            fontSize : "2em"
        }
        return(
            <div>
                <div className='container text-center'>
                    <h1 >Cuauhtemoc Rodriguez</h1>
                    <img src={img} className='rounded-circle mx-auto d-block' height='250x'  />
                    <div className="mx-auto" style={iconStyle}>
                        <a href="https://www.linkedin.com/in/cuauhtemoc-rodriguez-210520187/">
                            <i className="m-2 fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Cuauhtemoc">
                            <i className="m-2 fab fa-github"></i>
                        </a>
                        <a href="mailto:cuauhtemoc.a.rodriguez@gmail.com">
                            <i className="m-2 fas fa-envelope-square"></i>
                        </a>
                        <a href="tel:312-282-1808">
                            <i className="m-2 fas fa-phone"></i>
                        </a>
                    </div>
                    <h4 >Full Stack Web Developer</h4>
                    <p className='p-1 text-justify'>Full-Stack Developer with a background in education and leadership. Able to adapt and solve a variety of complex problems. Skilled in HTML5, CSS3, Javascript with a certification in Full Stack Web Development from Northwestern University.</p>
                </div>
            </div>
        )
    }
}

export default About;