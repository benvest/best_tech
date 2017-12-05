class PagesController < ApplicationController
protect_from_forgery with: :null_session

  def index
  end

  def create

    if params[:description] && params[:description].to_s.length > 0
      tip = Tip.new
      tip.description = params[:description]
      tip.save
    end

    render :json => {"name": "John", "age": 45}
  end
end
