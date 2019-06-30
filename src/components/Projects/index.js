import React, {Component} from 'react';
import Card from '../Card';
import communityImg from './community.jpg';
import theDipImg from './thedip.jpg'
import reactGameImg from './reactgame.jpg';

class Projects extends Component{
    render(){
        return(
            <div className='container text-center'>
                <h1 className="text-center">Projects</h1>
                <div className="row">
                    <Card projectName="commUnity" herokuLink="https://community-chicago.herokuapp.com/" githubLink="https://github.com/Cuauhtemoc/commUnity" imgPath={communityImg}/>
                    <Card projectName="Who's Bringing the Dip" herokuLink="http://thedip.herokuapp.com/" githubLink="https://github.com/Cuauhtemoc/The-dip" imgPath={theDipImg}/>
                    <Card projectName ="React Game" herokuLink="https://cuauhtemoc.github.io/clicky-game/" githubLink="https://github.com/Cuauhtemoc/clicky-game" imgPath={reactGameImg}/>
                </div>
            </div>
        )
    }
}

export default Projects;