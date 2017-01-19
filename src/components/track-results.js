import React from 'react';
import TrackItem from '../components/track-item';

const TrackResults = (props) => {
    const trackObjects = props.getTrackArr.map((trackObj) => {
        return <TrackItem onTrackSelect={props.onTrackSelect} key={trackObj.external_ids.isrc} trackObj={trackObj} />
    });

    return (
        <ul className="tracks no-bullet">
            {trackObjects}
        </ul>
    );
}

TrackResults.propTypes = {
    trackArr: React.PropTypes.array
}

export default TrackResults;