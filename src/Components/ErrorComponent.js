import React from 'react';

class ErrorComponent extends React.Component{
    render(){
        return(
            <>
                {/* Conditional Rendering */}
                { this.props.error !== null &&  <h1>Error Handling { this.props.error }</h1>}
                <p>Latitude: { this.props.latitude }</p>
                <p>Longitude: { this.props.longitude }</p>
            </>
        );
    }
}

export default ErrorComponent;