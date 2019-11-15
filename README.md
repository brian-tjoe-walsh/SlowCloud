# SlowCloud

[Slowcloud site](https://slowcloud.herokuapp.com/#/)

`SlowCloud` is a Shoegaze themed clone of SoundCloud, a music sharing application. Shoegaze is a genre of music defined in the 80's & early 90's, which juxtaposes extreme distortion and noise with beautiful pop melodies. Users can upload, listen to, and share music for free. Users can also view each others' profiles to see their uploads.

This application was built in a two week timeframe.

## Technology used:
* React/Redux for frontend rendering
* Ruby on Rails for backend MVC framework
* PostgresQL and AWS S3 for database

## Features
The account creation and authentication uses BCrypt, and session processing with URLSafe Base64.
The Media Player plays when redirecting from different pages on the website.
Users can upload, delete, and listen to music.
Users have a profile that shows their uploaded songs, as well as many of the artists and songs that birthed the genre.

## Login & Sign Up
SoundCloud's login and signup use a modal, in order to layer multiple components without allowing the user to interact with components in the background. Also, the process of animating a login/signup form similar to SoundCloud can be implemented using a number of methods, with this example using the @keyframes HTML rule. 

```
@keyframes slideDown {
  from {
    transform: translate3d(0%, -150%, 0);
    visibility: visibility;
    }
  to {
    transform: translate3d(0%, 0%, 0)}
}
```

## Media Player
In order to emulate the original SoundCloud website, the media player is implemented in a way that will continually play while users switch from different pages. The music player uses the same functionality as soundcloud, with a play/pause button, a scroll bar, displaying the current time of the song's progress, as well as the added option of downloading the audio file directly. React was used in order to create a seamless music player. Although the player will re-render on website refreshing, the component only has to render once upon the site's initial loading. 

```
<div>
  <ProtectedRoute exact path="/albums/:albumId" component={AlbumShowContainer} />
  <ProtectedRoute exact path="/albums" component={AlbumsIndexContainer} />
  <ProtectedRoute exact path="/artists/:artistId" component={UserShowContainer} />  
  <ProtectedRoute exact path="/artists" component={UsersIndexContainer} />  
  <ProtectedRoute path="/discover" component={DiscoverContainer} />
  <ProtectedRoute path="/library" component={LibraryContainer} />
  <ProtectedRoute path="/upload" component={UploadingContainer} />
  <AuthRoute path="/" component={SplashContainer} />
  <AuthRoute exact path="/login" component={LoginFormContainer} />
  <AuthRoute exact path="/signup" component={SignupFormContainer} />
  <Redirect to="/discover" />
  <MediaPlayerContainer />
</div>
```

### Albums
An engineering decision made for SlowCloud is the incorporation of specific albums, in order to bridge the gap between SoundCloud's flexible song-uploading and a conventional streaming platform. While songs on Soundcloud can be arranged and sorted into playlists--which can operate similarly to albums--SlowCloud operates under the assumption that the content being uploaded is intended for professional consumption, and will be classified under an Album tag by default. This constituted a separate MVP to categorize albums, which are not only connected to users, but also songs. 

### Uploading Songs
Uploading a song can be done at any page in the Navbar. The form, similarly to SoundCloud's website, has two main parts-- uploading a specific file, and adding titles/pictures/descriptions to the file. Switching from these parts uses animation, as well as jQuery calls in order to add and remove class's from the React components modularly, depending on the user's actions. 

```
let midPage = document.getElementsByClassName("uploadForm");
    $(midPage).addClass("uploadFormAfterClick");
```

### Planned future features
* Comments
* Playlists
* Likes