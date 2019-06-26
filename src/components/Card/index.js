import React, {Component} from 'react';


class Card extends Component {
    render() {
        return(
            <div class="card">
                <img class='card-img-top' src={this.props.imgName}></img>
                <div class="card-body">

                </div>
            </div>
        )
    }
}

export default Card;