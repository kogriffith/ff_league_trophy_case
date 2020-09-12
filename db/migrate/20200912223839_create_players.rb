class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :win_count
      t.boolean :current_winner

      t.timestamps
    end
  end
end
