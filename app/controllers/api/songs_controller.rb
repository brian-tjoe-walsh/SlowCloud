class Api::SongsController < ApplicationController

  before_action :require_signed_in, only: [:create, :update, :edit, :destroy]

  def index
    @songs = Song.all
    render :index
  end

  def create
    @song = Song.new(song_params)

    if @song.save
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def show
    @song = Song.find(params[:id])
    render :show
  end


  def update
    @song = current_user.songs.find(params[:id])

    if @song.update(song_params)
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def destroy
    @song = Song.find(params[:id])
    @song.destroy
    render :show
  end

  private
  def song_params
    params.require(:song).permit(:id, :title, :album, :album_id, :user_id, :genre, :audio_file)
  end

end
