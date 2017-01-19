import React, {Component} from 'react';
import Sound from 'react-sound';
import TrackInfo from '../components/track-info';
import ProgressBar from '../components/progress-bar';
import Controls from '../components/controls';

class Player extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playStatus: Sound.status.STOPPED,
            elapsed: '00:00',
            total: '00:00',
            position: 0,
            playFromPosition: 0
        }

        this.playPauseOnClick = this.playPauseOnClick.bind(this);
        this.onTrackPlaying = this.onTrackPlaying.bind(this);
        this.onTrackFinished = this.onTrackFinished.bind(this);
        this.onBackwardClick = this.onBackwardClick.bind(this);
        this.onForwardClick = this.onForwardClick.bind(this);
    }

    playPauseOnClick() {
        if(this.state.playStatus === Sound.status.PLAYING) {
            this.setState({
                playStatus: Sound.status.PAUSED
            })
        } else {
            this.setState({
                playStatus: Sound.status.PLAYING
            })
        }
    }

    convertMilliseconds(milliseconds) {
        var hours = Math.floor(milliseconds / 3600000);
        milliseconds = milliseconds % 3600000;
        var minutes = Math.floor(milliseconds / 60000);
        milliseconds = milliseconds % 60000;
        var seconds = Math.floor(milliseconds / 1000);
        milliseconds = Math.floor(milliseconds % 1000);

        return (minutes < 10 ? '0' : '') + minutes + ':' +
                (seconds < 10 ? '0' : '') + seconds; 
    }

    onBackwardClick(){
        this.setState({
            playFromPosition: this.state.playFromPosition-=1000*10
        });
    }

    onForwardClick(){
        this.setState({
            playFromPosition: this.state.playFromPosition+=1000*10
        });
    }

    onTrackPlaying(track){
        this.setState({
            elapsed: this.convertMilliseconds(track.position),
            total: this.convertMilliseconds(track.duration),
            position: track.position / track.duration 
        })
    }

    onTrackFinished () {
        this.setState({
            playStatus: Sound.status.STOPPED
        })
    }

    render() {
        let trackInfo = this.props.trackInfo;
        if(!trackInfo) {
            return null;
        }
        let song = trackInfo.preview_url;
        
        return (
            <div className="player small-2 large-6 columns">
                <Sound 
                    url={song} playStatus={this.state.playStatus} 
                    onPlaying={this.onTrackPlaying} 
                    playFromPosition={this.state.playFromPosition} 
                    onFinishedPlaying={this.onTrackFinished} 
                />
                <TrackInfo getTrackInfo={this.props.trackInfo} />
                <ProgressBar elapsed={this.state.elapsed} total={this.state.total} position={this.state.position} />
                <Controls 
                    playPauseOnClick={this.playPauseOnClick} 
                    playStatus={this.state.playStatus} 
                    onBackwardClick={this.onBackwardClick}
                    onForwardClick={this.onForwardClick}
                />
            </div>
        );
    }
}

export default Player;