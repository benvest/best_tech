class TipsController < ApplicationController
  def index
  end

  def get_all_tips

    puts "in controller"

    tips = Tip.all

    render :json => tips.to_json

  end
end
