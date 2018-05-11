class Search  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  handleChange(serchVal) {
    this.setState({value: serchVal});
    // this.props.fetch(this.state.value);
    // console.log(this.state.value);
  }
  
  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={(e) => this.handleChange(e.target.value)}/>
        <button className="btn hidden-sm-down" onClick={() => this.props.fetch(this.state.value)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
      )
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
