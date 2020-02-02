import React from 'react';

class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="loaderContainer loading-page">
        <p className="uploading-loader">Your song is currently uploading!</p>
        <div className="loader"></div>
      </div>
    );
  }
}

export default Loading;