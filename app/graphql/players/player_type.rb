module Players
  class PlayerType < Types::BaseObject

    field :name, ID, null: false
    field :win_count, Integer, null: false
    field :current_winner, Boolean, null: false

  end
end
