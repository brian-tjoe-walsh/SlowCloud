import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import {Link} from 'react-router-dom';
import AlbumModal from '../album/album_modal_container';

class Uploading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      audioFile: null,
      album: null,
      genre: "",
      photoPreview: null
    };

    this.changePhoto = this.changePhoto.bind(this);
  }

  createAlbum() {

  }

  handleFile(e) {
    e.preventDefault();
    this.setState({
      name: e.currentTarget.files[0].name,
      audioFile: e.currentTarget.files[0]
    });

    let midPage =document.getElementsByClassName("uploadForm");
    $(midPage).addClass("uploadFormAfterClick");


    let slideForm = document.getElementsByClassName("uploadInputFields");
    $(slideForm).addClass("afterClicked");

    let title = document.getElementsByClassName("uploadTitle");
    $(title).addClass("uploadTitleAfterClick");

    let uploadFinePrint = document.getElementsByClassName("uploadFinePrint");
    $(uploadFinePrint).addClass("uploadFinePrintAfterClick");

  }

  changePhoto(e) {
    debugger
    let currentUserId = this.props.state.session.id;
    let albumId= e.currentTarget.options[e.currentTarget.selectedIndex].value
    if (!this.state.photoPreview || this.state.photoPreview.id !== albumId) {
      let user = this.props.state.entities.users[currentUserId];
      let album = user.albums[albumId];
      this.setState({photoPreview: album.albumUrl, album: album});
    }

  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append('song[title]', this.state.title);
    formData.append('song[album_id]', this.state.album.id);
    formData.append('song[user_id]', this.state.album.user_id);
    formData.append('song[genre]', this.state.genre);
    formData.append('song[audio_file]', this.state.audioFile);


    $.ajax({
      url: 'api/songs',
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
    debugger
    let albums = this.props.state.entities.users[this.props.state.session.id].albums;
    let keys = Object.keys(albums);
    let albumsArr = [];
    for (let i = 0; i < keys.length; i++) {
      albumsArr.push(albums[keys[i]]);
    }

    let loc = {url: "/upload"}
    return(
      <div className="flexing">
        <NavBarContainer loc={loc} history={this.props.history}/>
        <div className="uploadMidPage">
          <div className="uploadForm">
            <div className="uploadTitle">
              <p>Don't wait around, start uploading now!</p>
            </div>

            <div className="uploadButton">
              <input type="file" accept=".flac,.mp3,.mp4,.m4a,.aac,.wav,.alac,.aiff" onChange={this.handleFile.bind(this)} className="chooseFile" />
              <button className="fakeButton">Choose file to upload </button>
            </div>

            <div className="uploadFinePrint">
              <p>Provide FLAC, WAV, ALAC or AIFF for best audio quality.</p>
            </div>
          </div>

          <div className="uploadInputFields">
            <div className="uploadFilename">
              <p>{this.state.name}</p>
            </div>
            <div className="uploadSubBox">
              <div className="uploadSubTop">
                <div className="uploadPic">
                  {(this.state.photoPreview) ? <img  className="uploadPic noMargin" src={this.state.photoPreview}/>: null}
                  {/* <div className="uploadPicButton">
                    <input type="file" onChange={this.handlePic.bind(this)} className="choosePicFile" />
                    <button className="fakePicButton">Upload Image</button>
                  </div> */}
                </div>
                <div className="uploadDescription">
                  
                  <div className="uploadTitleBox">
                    <p>Title</p>
                    <input className="titleInput" 
                      type="text" 
                      value={this.state.title}
                      onChange={this.update('title')}
                      placeholder="Name your song" 
                    />
                  </div>

                  <div className="uploadTitleBox">
                    <p>Album</p>
                    {(albums) ? 
                      <select className="titleInput" onChange={this.changePhoto}>
                        <option value="option" selected disabled>Choose an Album</option>
                        {(albumsArr.map( ele => {
                         return (<option value={ele.id}>{ele.title}</option>);
                        }))}
                      </select>
                    : 
                    (<div>
                      <AlbumModal currentUserId={this.props.state.session.id} />
                    </div>
                    )}    
                  </div>
                  <div className="uploadTitleBox">
                    <p>Genre</p>
                    <input className="titleInput"
                      type="genre"
                      value={this.state.genre}
                      onChange={this.update('genre')}
                      placeholder="Choose your genre"
                    />
                  </div>
                  <div className="uploadDescriptionBox">
                    <AlbumModal currentUserId={this.props.state.session.id} />
                  </div>
                </div>
              </div>
              <div className="uploadSubBottom">
                <Link to="/discover" className="uploadCancel">Cancel</Link>
                <Link to="/library" className="uploadUpload">Upload</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Uploading;