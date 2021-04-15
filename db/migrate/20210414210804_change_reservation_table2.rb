class ChangeReservationTable2 < ActiveRecord::Migration[5.2]
  def change
    change_column :reservations, :start_date, :string
    change_column :reservations, :end_date, :string
  end
end
