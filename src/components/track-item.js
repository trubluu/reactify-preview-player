import React from 'react';

const TrackItem = (props) => {
    let track = props.trackObj;
    let albumUrl = track.album.images[2].url;
    let trackName = track.name
    let artistarr = track.artists.map((artist) => {
        return artist.name;
    });
    let artistObject = artistarr.length > 1 ? artistarr.join(', ') : artistarr;
    let onTrackSelect = props.onTrackSelect;

    const onTrackClick = () => {
        return onTrackSelect(track);
    }

    return (
        <li className="track-item" onClick={onTrackClick}>
            <div className ="track-item-info media-object stack-for-small">
                <div className ="album-info media-object-section">
                    <img className ="album-image" src={albumUrl} />
                </div>

                <div className ="track-info media-object-section">
                    <div className ="artist-name">{artistObject}</div>
                    <div className ="track-name">{trackName}</div>
                </div>
            </div>
        </li>
    )
}

export default TrackItem;