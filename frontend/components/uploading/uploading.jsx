import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import {Link} from 'react-router-dom';

class Uploading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      audioFile: null,
      album: "",
      picture: null,
      picName: null,
      title: "",
      description: ""
    };

  }

  createAlbum() {

  }

  handleFile(e) {
    // debugger
    this.setState({
      name: e.currentTarget.files[0].name,
      audioFile: e.currentTarget.files[0]
    });

    // debugger
    let midPage =document.getElementsByClassName("uploadForm");
    $(midPage).addClass("uploadFormAfterClick");


    let slideForm = document.getElementsByClassName("uploadInputFields");
    $(slideForm).addClass("afterClicked");

    let title = document.getElementsByClassName("uploadTitle");
    $(title).addClass("uploadTitleAfterClick");

    let uploadFinePrint = document.getElementsByClassName("uploadFinePrint");
    $(uploadFinePrint).addClass("uploadFinePrintAfterClick");

  }

  handlePic(e) {
    // debugger
    this.setState({
      picture: e.currentTarget.files[0],
      picName: e.currentTarget.files[0].name
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append('song[name]', this.state.name);
    formData.append('song[audioFile]', this.state.audioFile);
    formData.append('song[picture]', this.state.picture);
    formData.append('song[picName]', this.state.picName);
    formData.append('song[title]', this.state.title);
    formData.append('song[description]', this.state.description);
  } 

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }


  render() {
    let loc = {url: "/upload"}
    // debugger
    return(
      <div className="flexing">
        <NavBarContainer loc={loc} history={this.props.history}/>
        <div className="uploadMidPage">
          <div className="uploadForm">
            <div className="uploadTitle">
              <p>Don't wait around, start uploading now!</p>
            </div>

            <div className="uploadButton">
              <input type="file" onChange={this.handleFile.bind(this)} className="chooseFile" />
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
                  {(this.state.picture) ? <img src={this.state.picture}/>: null}
                  <div className="uploadPicButton">
                    <input type="file" onChange={this.handlePic.bind(this)} className="choosePicFile" />
                    <button className="fakePicButton">Upload Image</button>
                  </div>
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
                    <input type="text" className="titleInput" placeholder="Name your album"/>
                    {/* <div className="uploadAlbumList">
                      <div value=""></div>
                      <div value=""></div>
                      <div value="New Album">New Album</div>
                    </div> */}
                  </div>

                  <div className="uploadDescriptionBox">
                    <p>Description</p>
                    <textarea className="textArea" 
                      cols="30" 
                      rows="10" 
                      value={this.state.description} 
                      onChange={this.update('description')}
                      placeholder="Describe your song" />
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