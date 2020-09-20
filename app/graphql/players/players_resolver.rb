module Players
  class PlayersResolver < GraphQL::Schema::Resolver
  
    type [PlayerType], null: false

    def resolve()
      Player.all
    end

  end
end