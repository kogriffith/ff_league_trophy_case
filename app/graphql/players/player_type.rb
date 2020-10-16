module Players
  class PlayerType < GraphQL::Schema::Object

    field :id, ID, null: false
    field :name, String, null: false
    field :championship_win_count, Integer, null: false
    field :current_winner, Boolean, null: false
    field :nickname, String, null: false
    field :playoff_appearance_count, Integer, null: false
    field :playoff_win_count, Integer, null: false
    field :playoff_loss_count, Integer, null: false
    field :playoff_draw_count, Integer, null: false
    field :last_place_count, Integer, null: false
    field :years_in_league, Integer, null: false
    field :regular_win_count, Integer, null: false
    field :regular_draw_count, Integer, null: false
    field :regular_loss_count, Integer, null: false

  end
end
