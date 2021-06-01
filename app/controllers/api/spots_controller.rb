class Api::SpotsController < ApplicationController

    def index 
        if params[:bounds]
            @spots = Spot.in_bounds(params[:bounds])
        else 
            @spots = Spot.all
        end
        render :index
    end

    def show 
        @spot = Spot.find(params[:id])
        render :show
    end

    def create
        @spot = Spot.new(spots_params)

        if @spot.save
            render :show 
        else 
            render json: @spot.errors.full_messages, status: 422
        end

    end

    def update
        @spot = Spot.find(params[:id])

        if @spot.update(spots_params)
            render :show 
        else 
            render json: @spot.errors.full_messages, status: 422
        end

    end

    def destroy 
        @spot = Spot.find(params[:id])

        if @spot.destroy
            render :index
        else 
            render json: @spot.errors.full_messages, status: 422
        end
    end

    private
    def spots_params
        params.require(:spots).permit(:name, :description, :latitude, :longitude, :maxGuests, :price, :address, :city, photos: [])
    end

end