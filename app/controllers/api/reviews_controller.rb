class Api::ReviewsController < ApplicationController 
    before_action :ensure_logged_in, only: [:create, :destroy, :update]

    def index 
        @reviews = Review.all
        render :index
    end

    def create
        @review = current_user.reviews.new(review_params)
        if (@review.save)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def show
        @review = Review.find(params[:id])
        render :show
    end

    def destroy
        @review = Review.find(params[:id])
        @review.destroy
        render :show
    end

    def update
        @review = Review.find_by(id: params[:review][:id])
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    private
    
    def review_params
        params.require(:review).permit(:body, :rating, :user_id, :spot_id)
    end

    # def reviews_validations
    #     spot = {spot_id: params[:spot_id]}
    #     return (current_user.reservations.exists?(spot) && !current_user.reviews.exists?(spot))
    # end
end