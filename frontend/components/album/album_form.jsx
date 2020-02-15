import React from 'react';
import { Link } from 'react-router-dom';

class AlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoFile: null,
      title: "",
      photoPreview: null,
      error: null
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
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({photoFile: file, photoPreview: fileReader.result});
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.title || !this.props.currentUserId || !this.state.photoFile) {
      this.setState({ error: "You must provide a title & photo" });
    } else {
      const formData = new FormData();
      formData.append(`album[title]`, this.state.title);
      formData.append(`album[user_id]`, this.props.currentUserId);
      formData.append(`album[photo]`, this.state.photoFile);

      this.props.createNewAlbum(formData);
      this.props.openModal();
      this.setState({error: null});
    }

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
        <div className="album-errors">
          {(this.state.error) ? (
            <div>
              <i class="fas fa-exclamation-circle"></i>
              {this.state.error}
            </div>) 
          : null}
        </div>
        <div className="album-create-pic">
          {(this.state.photoPreview) ? <img className="album-preview" src={this.state.photoPreview} /> : <div className="album-preview"></div>}
          <div className="uploadPicButton">
            <input type="file" accept=".jpeg,.jpg,.tiff,.png" onChange={this.handleFile.bind(this)} className="choosePicFile" />
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