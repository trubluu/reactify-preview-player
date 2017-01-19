import React, {Component} from 'react';
import _ from 'lodash';
import SpotifyWebApi from 'spotify-web-api-js';
import Search from '../components/search';
import Player from '../components/player';
import Header from '../components/header';
import Footer from '../components/footer';
import '../../styles/style.css'

class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tracks: [],
            selectedVideo: null,
            background: null
        };

        this.musicSearch('United Pursuit');

        this.musicSearch = this.musicSearch.bind(this);
        this.onTrackSelect = this.onTrackSelect.bind(this);
    }

    musicSearch(searchTerm) {
        const spotifyApi = new SpotifyWebApi();
        spotifyApi.searchTracks('artist:' + searchTerm, {limit: 7})
            .then((tracks) => {
                console.log(tracks.tracks.items);
                this.setState({
                    tracks: tracks.tracks.items,
                    selectedTrack: tracks.tracks.items[0]
                });
            }, (err) => {
                console.error(err);
            });
    }

    onTrackSelect(selectedTrack) {
        this.setState({
            selectedTrack
        })
    }

    render() {
        let tracks = this.state.tracks;
        let selectedTrack = this.state.selectedTrack;
        
        if(!selectedTrack) {
            return <div>Loading...</div>;
        }
        else {
            const musicSearch = _.debounce((searchTerm) => {this.musicSearch(searchTerm)}, 600);
            return (
                <div>
                    <div className="header">
                        <Header />
                    </div>
                    <div className="background">
                        <div className="row">
                            <Search spotifyTracks={musicSearch} trackArr={this.state.tracks} onTrackSelect={this.onTrackSelect} />
                            <Player trackInfo={this.state.selectedTrack} position={this.state.position}/>
                        </div>
                    </div>
                    <div className="footer">
                        <Footer />
                    </div>
                </div>
            );
        }
    }
}

export default AppContainer;