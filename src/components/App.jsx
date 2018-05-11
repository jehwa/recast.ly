
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: window.exampleVideoData,
      playing: window.exampleVideoData[0],
      key: window.YOUTUBE_API_KEY,
      max: 5,
    }
  }
  
  cb(video) {
    console.log(video);
    this.setState({
      playing: video
    });   
  }
  
  searchVideoList(videos) {
    this.setState({
      videoList: videos,
      playing: videos[0]
    })
  }
  
  componentDidMount() {
    this.props.searchYouTube({key: this.state.key, query: 'dog', max: this.state.max}, this.searchVideoList.bind(this))   
  }
  
  fetch(query) {
    this.props.searchYouTube({key: this.state.key, query: query, max: this.state.max}, this.searchVideoList.bind(this))
  }
  
  
  
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search fetch={this.fetch.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.playing}/>
          </div>
        <div className="col-md-5">
            <VideoList videos={this.state.videoList} callback={this.cb.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
