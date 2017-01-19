import React, {Component} from 'react';
import TrackResults from '../components/track-results';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        }
    }

    onInputChange(searchTerm) {
        this.setState({
            search: searchTerm
        });
        this.props.spotifyTracks(searchTerm);
    }

    render() {
        return (
            <div className="search small-2 large-6 columns">
                <form role="search" className="search-bar">
                    <label>
                        <input 
                            type="search" placeholder="Search Artist" 
                            value={this.state.search} onChange={event => this.onInputChange(event.target.value)} 
                        />
                    </label>
                </form>
                <TrackResults getTrackArr={this.props.trackArr} onTrackSelect={this.props.onTrackSelect} />
            </div>
        );
    }
}

Search.propTypes = {
    trackArr: React.PropTypes.array
}

export default Search;