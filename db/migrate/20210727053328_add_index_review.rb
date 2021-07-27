class AddIndexReview < ActiveRecord::Migration[5.2]
  def change
  end

  add_index :reviews, [:spot_id, :user_id], unique: true
end
