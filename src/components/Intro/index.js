import React, {Component} from 'react';
// import img from './Cuauhtemoc.jpg';
import Background from './background.jpg';

class Intro extends Component{

    render(){
        let backgroundStyle = {
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            height: '100vh',
            display: 'flex',
            alignItems: 'center'
        }
        let fontStyle = {
            fontSize : "1.5em",
            textShadow: `-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000`
        }
        return(
            <div style= {backgroundStyle}>
                <div className='container'>
                    <div className='text-white text-center' style={fontStyle}>
                        {/* <img src={img} className='img-thumbnail rounded-circle mx-auto d-block' /> */}
                        <h1 >Cuauhtemoc Rodriguez</h1>
                        <h4 >Full Stack Web Developer</h4>
                    </div>
                    <div className="text-center mx-auto" style={fontStyle}>
                        <ul>
                            <li>                      
                                <a href="mailto:cuauhtemoc.a.rodriguez@gmail.com">
                                    <i className="text-white"> cuauhtemoc.a.rodriguez@gmail.com</i>
                                </a>
                            </li>
                            <li>
                                <a href="tel:312-282-1808">
                                    <i className="text-white m-2"> 312-282-1808</i>
                                </a>
                            </li>
                            <a href="https://www.linkedin.com/in/cuauhtemoc-rodriguez-210520187/">
                                <i className="text-white m-2 fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/Cuauhtemoc">
                                <i className=" text-white m-2 fab fa-github"></i>
                            </a>
                            
                        </ul>

                    </div>
                    {/* <p className='p-1 text-justify'>Full-Stack Developer with a background in education and leadership. Able to adapt and solve a variety of complex problems. Skilled in HTML5, CSS3, Javascript with a certification in Full Stack Web Development from Northwestern University.</p> */}
                </div>
            </div>
        )
    }
}

export default Intro;