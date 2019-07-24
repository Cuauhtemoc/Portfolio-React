import React, {Component }from 'react';
import selfImage from './IMG_7378.jpeg';

class About extends Component {
    render(){
        let backgroundSyle = {
            backgroundColor: '#f2f2f2'
        }
        return(
            <div style={backgroundSyle}>
                <div className="container">
                    <div classname="row">
                        <h1>About Me</h1>
                        <h4> Full Stack Web Developer</h4>
                    </div>
                    <div className='row'>
                        <p style={{fontSize: '16px'}}className="col-7">Full Stack Web Developer with a passion for teaching and learning.  I have spent the last 9 years in public education.  Now I am taking my passion for collaboration and learning into the world of web development where I can continue to be challenged and learn from those around me. </p>
                        <img src={selfImage} className=" col-5 rounded-circle mx-auto"></img>
                    </div>
                </div>
            </div>
        )
    }

}

export default About;