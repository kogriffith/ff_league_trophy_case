module Players
  class PlayersResolver < GraphQL::Schema::Resolver
  
    type [PlayerType], null: false

    def resolve()
      Player.order(regular_win_count: :desc)
    end

  end
end