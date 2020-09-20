module Players
  class PlayersType < GraphQL::Schema::Object

    field :players, [Types::PlayerType], null: false
    
  end
end