import React from 'react';
import { Link } from 'react-router-dom';

class AlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoFile: null,
      title: "",
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();

    let background = document.getElementsByClassName("preModal");
    return ($(background).addClass("modal"));
  }

  handleFile(e) {
    e.preventDefault();

    let file = e.currentTarget.files[0];

    if (file) {
      this.setState({ photoFile: file });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append(`album[title]`, this.state.title);
    formData.append(`album[user_id]`, this.props.currentUserId);
    formData.append(`album[photo]`, this.state.photoFile);
    $.ajax({
      url: 'api/albums',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    });
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render() {
    let errors;
    if (this.props.errors.length) {
      errors = this.props.errors.map((err, idx) => <li key={idx}>{err}</li>)
    } else {
      errors = [""]
    }

    return (
      <div className="album-form">
              {/* <div className="uploadTitleBox"> */}
                <p className="create-album-title">Create An Album</p>
                <input type="text" 
                  className="titleInput" 
                  value={this.state.album}
                  onChange={this.update('title')}
                  placeholder="Name your album" />
              {/* </div> */}
            <div className="album-create-pic">
              {(this.state.picture) ? <img src={this.state.picture} /> : null}
              <div className="uploadPicButton">
                <input type="file" onChange={this.handleFile.bind(this)} className="choosePicFile" />
                <button className="fakePicButton">Upload Image</button>
              </div>
            </div>
            <div className="album-form-lower">
              <input type="submit" className="album-create-submit" value="Create" onClick={this.handleSubmit.bind(this)}/>  
            </div>
      </div>
    );
  }
}

export default AlbumForm;