module Players
  class ChampionType < GraphQL::Schema::Object

    field :champion, Types::PlayerType, null: false

  end
end
