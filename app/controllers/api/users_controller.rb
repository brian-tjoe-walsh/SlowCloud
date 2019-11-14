class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end 

  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find(params[:id])
    render :show
  end
  
  def create
    debugger
    @user = User.new(user_params)
    
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  def delete
    @user = User.find(params[:id])
    @user.destroy
    render :index
  end


  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
