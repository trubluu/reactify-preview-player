import React from 'react';
import ClassNames from 'classnames';

const Controls = (props) => {  
    let playPauseClass = ClassNames({
        'fa fa-play fa-3x': props.playStatus == 'PLAYING' ? false : true,
        'fa fa-pause fa-3x': props.playStatus == 'PLAYING' ? true : false,
    })

    return (
        <div className="controls">
            <button className="previous" onClick={props.onBackwardClick}><span className="fa fa-fast-backward fa-3x" aria-hidden="true"></span></button>
            <button type="button" className="play-pause" onClick={props.playPauseOnClick}>
                <span className={playPauseClass} aria-hidden="true"></span>
            </button>
            <button className="next" onClick={props.onForwardClick}><span className="fa fa-fast-forward fa-3x" aria-hidden="true"></span></button>
        </div>
    );
}

export default Controls;