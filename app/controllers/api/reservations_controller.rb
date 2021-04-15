class Api::ReservationsController < ApplicationController

    def index
        @reservations = User.find(params[:user_id])
    end

    def show
        @reservation = Reservation.find(params[:id])
    end

    def create
        @reservation = Reservation.new(reservation_params)

        if @reservation.save
            render :show
        else
            render json: ["Could not be reserved"], status: 422
        end
    end

    def update
        @reservation = Reservation.find(params[:id])

        if @reservation.update(reservation_params)
            render :show
        else
            render json: ["Reservation could not be updated"], status: 422
        end
    end

    def destroy
        @reservation = Reservation.find(params[:id])

        if @reservation
            @reservation.delete
            render :show
        else
            render json: ["Reservation was unable to be deleted"], status: 422
        end
    end

    private

    def reservation_params
        params.require(:reservation).permit(:start_date, :end_date, :number_guests, :spot_id, :guest_id)
    end
end