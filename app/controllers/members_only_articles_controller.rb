class MembersOnlyArticlesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  # before_action :authorize

  def show
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    article = Article.find(params[:id])
    render json: article
  end

  def index        
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    articles = Article.all
    
    # render json: articles
    # articles = Article.all.includes(:user)
    puts json: articles.to_a
    render json: articles.to_a
  end

  

  # def create
  #   article = Article.create(author_id: session[:user_id])
  #   render json: document, status: :created
  # end

  # def show
  #   article = Article.find(params[:id])
  #   render json: article
  # end

  private

  def authorize
    puts session[:user_id]
    puts "SESSION HITTING HERWs"
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

  def record_not_found
    render json: { error: "Article not found" }, status: :not_found
  end

end
