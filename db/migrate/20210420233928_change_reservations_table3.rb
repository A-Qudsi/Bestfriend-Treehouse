class ChangeReservationsTable3 < ActiveRecord::Migration[5.2]
  def change
    change_column :reservations, :start_date, 'date USING CAST(start_date AS date)'
  end
end