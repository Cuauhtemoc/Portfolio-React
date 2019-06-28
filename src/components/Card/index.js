import React, {Component} from 'react';


class Card extends Component {
    render() {
         
        let iconStyle = {
            fontSize : "3em",
        }
    
        return(
            <div class='row'>
                <div className='col-sm-6'>
                    <div className="card">
                        <img className='card-img-top' src={this.props.imgPath}></img>
                        <div className="card-body">
                            <h5 className='card-title'>{this.props.projectName}</h5>
                            <a className="float-left" href={this.props.herokuLink}>
                                <i style={iconStyle} className="fas fa-external-link-alt"></i>
                            </a>
                            <a className="float-right" href={this.props.githubLink}>
                                <i style={iconStyle} className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
           </div> 
        )
    }
}

export default Card;