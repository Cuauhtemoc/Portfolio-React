import React, {Component} from 'react';


class Card extends Component {
    render() {
        return(
            <div class='row'>
                <div class='col-sm-6'>
                    <div class="card">
                        <img class='card-img-top' src={this.props.imgPath}></img>
                        <div class="card-body">
                            <h5 class='card-title'>{this.props.projectName}</h5>
                            <a href={this.props.herokuLink} class="fas fa-external-link-alt"></a>
                            <a href={this.props.githubLink} class="fab fa-github"></a>
                        </div>
                    </div>
                </div>
           </div> 
        )
    }
}

export default Card;