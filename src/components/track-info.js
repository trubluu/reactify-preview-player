import React from 'react';

const TrackInfo = (props) => {
    let trackInfo = props.getTrackInfo;
    
    // if(!trackInfo) {
    //     return <div>Loading...</div>;
    // }

    let albumUrl = trackInfo.album.images[1].url;
    let trackName = trackInfo.name;
    let artistNameObj = trackInfo.artists.map((artist) => {
        return artist.name;
    });
    let artistName = artistNameObj.length > 1 ? artistNameObj.join(', ') : artistNameObj;

    return (
        <div className="track-info">
            <div className="track-art">
                <img className ="track-image" src={albumUrl} />
            </div>
            <div className="track-details">
                <div className="track-name">{trackName}</div>
                <div className="track-artist">{artistName}</div>
            </div>
        </div>
    );
}

export default TrackInfo;