import React from 'react';

const Loader = (props) => {
    if(props.spin === false) {
        return null;
    }

    return(
        <div className="ui segment loader-screen">
            <div className="ui active dimmer">
                <div className="ui text loader">Loading</div>
            </div>
        </div>
    );
}

export default Loader;