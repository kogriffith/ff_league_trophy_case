module Players
  class PlayerType < GraphQL::Schema::Object

    field :name, ID, null: false
    field :win_count, Integer, null: false
    field :current_winner, Boolean, null: false

  end
end
