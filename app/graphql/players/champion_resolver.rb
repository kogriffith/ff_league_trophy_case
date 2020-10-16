module Players
  class ChampionResolver < GraphQL::Schema::Resolver

    type PlayerType, null: false

    def resolve()
      Player.where(current_winner: true).take
    end

  end
end