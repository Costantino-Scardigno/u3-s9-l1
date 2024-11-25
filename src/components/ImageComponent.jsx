import React from "react";


class ImageComponent extends React.Component {
    render() {
        return (
            <div><img style={this.props.style} src={this.props.src} alt = {this.props.alt} /></div>
        )
    }

   
}
 export default ImageComponent