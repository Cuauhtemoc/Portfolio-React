import React, {Component} from 'react';
import Card from '../Card';
import communityImg from './community.jpg';
import theDipImg from './thedip.jpg'
import reactGameImg from './reactgame.jpg';
import liriImage from './concert-this.png';
import overplannerImage from './googlemap.png';
import bamazonImage from '/bamazonExample.png';

class Projects extends Component{
    render(){
        return(
            <div className='container text-center'>
                <h1 className="text-center">Projects</h1>
                <div className="row">
                    <Card projectDescription="A community building app targeting refugee communities within Chicago and connecting them with local families to help facilitate a smoother transition." projectName="commUnity" herokuLink="https://community-chicago.herokuapp.com/" githubLink="https://github.com/Cuauhtemoc/commUnity" imgPath={communityImg}/>
                    <Card projectDescription="A party planning app. Users can create lists of items to share with their guests. Guests can then swipe right or left on the items indicating if they will be bringing it the the party" projectName="Who's Bringing the Dip" herokuLink="http://thedip.herokuapp.com/" githubLink="https://github.com/Cuauhtemoc/The-dip" imgPath={theDipImg}/>
                    <Card projectDescription="A memory game that keeps track on the images selected by the user. Written using React 16" projectName ="React Game" herokuLink="https://cuauhtemoc.github.io/clicky-game/" githubLink="https://github.com/Cuauhtemoc/clicky-game" imgPath={reactGameImg}/>
                    <Card projectDescription="" projectName="" herokuLink="" githubLink ="" imgPath=""/>
                    <Card projectDescription="" projectName="" herokuLink="" githubLink ="" imgPath=""/>
                    <Card projectDescription="" projectName="OverPlanner" herokuLink="" githubLink ="" imgPath=""/>
                </div>
            </div>
        )
    }
}

export default Projects;