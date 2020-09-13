module Players
  class PlayerResolver < GraphQL::Schema::Resolver
  
    type PlayerType, null: false

    argument :id, ID, required: true

    def resolve(id:)
      Player.find(id)
    end

  end
end