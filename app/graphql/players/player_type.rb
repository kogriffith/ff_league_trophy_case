module Players
  class PlayerType < GraphQL::Schema::Object

    field :id, ID, null: false
    field :name, String, null: false
    field :win_count, Integer, null: false
    field :current_winner, Boolean, null: false

  end
end
