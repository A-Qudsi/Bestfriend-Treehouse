class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.datetime  :start_date, null: false
      t.datetime  :end_date, null: false
      t.integer   :number_guests, null: false
      t.integer   :spot_id,	null: false
      t.integer   :guest_id,	null: false

      t.timestamps
    end

    add_index :reservations, :spot_id
    add_index :reservations, :guest_id
  end
end
