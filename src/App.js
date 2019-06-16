import React, { Component } from 'react';
import './App.css';

let textColor = 'white';
let defaultStyle = {
  color: textColor
}
let fakeServerData = {
  user: {
    name: 'Merlin',
    playlists: [
      {
        name: 'my faves',
        songs: [
          {name: 'the sign', duration: 3928},
          {name: 'blue', duration: 38273},
          {name: 'solo', duration: 29387}
        ]
      },
      {
        name: 'sleep',
        songs: [
          {name: 'return to innocence', duration: 29832},
          {name: 'cotton eyed joe', duration: 392987},
          {name: 'freak on a leash', duration: 9832}
        ]
      },
      { 
        name: 'chill',
        songs: [
          {name: 'the sign', duration: 3928},
          {name: 'blue', duration: 38273},
          {name: 'solo', duration: 29387}
        ]
      },
      {
        name: 'hyped',
        songs: [
          {name: 'beat It', duration: 1839},
          {name: 'cannelloni makaroni', duration: 1223},
          {name: 'One Minute Man', duration: 7382},
        ]
      }
    ]
  }
};

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: "40%", display: "inline-block"}}>
        <h2>{this.props.playlists && this.props.playlists.length} Playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div style={{...defaultStyle, width: "40%", display: "inline-block"}}>
        <h2>{Math.round(totalDuration/60)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img />
        <input type="text" />
        
      </div>
    )
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle, display: "inline-block", width: "25%"}}>
        <img />
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {serverData: {}}
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData})
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
          <h1 style={{...defaultStyle, 'font-size': '54px'}}>
            {this.state.serverData.user.name}'s Playlist
          </h1>
          <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
          <HoursCounter playlists={this.state.serverData.user.playlists} />
          <Filter />
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
        </div> : <h1 style={defaultStyle}>loading</h1>
        }
      </div>
    );
  }
}

export default App;
