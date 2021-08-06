import React from 'react';
import ReactDOM from 'react-dom';
import ErrorComponent from './Components/ErrorComponent';
class App extends React.Component {
    // Just a JS method, not specific to React.
    // It's going to be automatically called with the props object.
    constructor(props) {
        // REQUIRED when using constructor
        super(props);
        // This is our state object
        /* This will eventually contain some different 
            properties that are relevant to our app. 
        */
        this.state = { latitude: null, longitude: null, error: null };
        window.navigator.geolocation.getCurrentPosition(
            (position)  => {
                // to update our state object, we call setState
                this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude });
            },
            (err)       => {
                this.setState({ error:err.message })
            }
        );
    }
    // A required React method when using class-based component.
    render() {
        return (
            <div>
                <ErrorComponent error={this.state.error} latitude={this.state.latitude}  longitude={this.state.longitude} />
            </div>
        );
    };
};
ReactDOM.render(<App />, document.querySelector('#root'));
