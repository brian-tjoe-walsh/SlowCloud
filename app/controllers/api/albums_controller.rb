class Api::AlbumsController < ApplicationController
   before_action :require_signed_in, only: [:create, :update, :edit, :destroy]

  def index
    @albums = Album.all
    render :index
  end

  def create
    @album = Album.new(album_params)

    if @album.save
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def show
    @albums = Album.find(params[:id])
    render :show
  end


  def update
    @albums = current_user.albums.find(params[:id])

    if @album.update(album_params)
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def destroy
    @album = Album.find(params[:id])
    @album.destroy
    render :show
  end

  private
  def album_params
    params.require(:album).permit(:title)
  end



end
