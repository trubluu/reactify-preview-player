import React from 'react';

const ProgressBar = (props) => {
    return (
        <div className="progress-bar" >
            <progress className="progress-ele" value={props.position} max="1"></progress>
            <div className="time-markers">
                <span className="time-elapsed">
                    {props.elapsed}
                </span>
                <span className="time-total">
                    {props.total}
                </span>
            </div>
        </div>
    );
}

export default ProgressBar;