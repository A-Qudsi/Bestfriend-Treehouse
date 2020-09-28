class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.string  :name, null: false
      t.string  :description, null: false
      t.float   :latitude,	null: false
      t.float   :longitude,	null: false
      t.integer	:maxGuests, null: false
      t.float	  :price, null: false
      t.string  :address,	null: false
      t.string  :city,	null: false
      t.integer :host_id,	null: false

      t.timestamps
    end

    add_index :spots, :latitude
    add_index :spots, :longitude
    add_index :spots, :city
    add_index :spots, :host_id
  end
end
