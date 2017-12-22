class TipsController < ApplicationController

  
  def index
  end

  def get_all_tips

    tips = Tip.all

    render :json => tips.to_json

  end

  def get_all_categories

    categories = Category.all

    render :json => categories.to_json

  end
end
