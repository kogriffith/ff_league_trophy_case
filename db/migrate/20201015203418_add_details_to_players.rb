class AddDetailsToPlayers < ActiveRecord::Migration[6.0]
  def change
    rename_column :players, :win_count, :championship_win_count
    add_column :players, :nickname, :string, null: true
    add_column :players, :playoff_appearance_count, :integer
    add_column :players, :playoff_win_count, :integer
    add_column :players, :playoff_draw_count, :integer
    add_column :players, :playoff_loss_count, :integer
    add_column :players, :last_place_count, :integer
    add_column :players, :years_in_league, :integer
    add_column :players, :regular_win_count, :integer
    add_column :players, :regular_draw_count, :integer
    add_column :players, :regular_loss_count, :integer
  end
end
