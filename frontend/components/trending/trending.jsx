import React from 'react';

class Trending extends React.Component {  

  render() {
    return(
      <div className="discPics">
        < Albums max={this.props.max} />
      </div>
    );
  }

}

export default Trending;