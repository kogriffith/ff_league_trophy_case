module Players
  class PlayerResolver < GraphQL::Schema::Resolver
  
    type PlayerTyper, null: false

    argument :id, ID, required: true

    def resolve(id:)

    end

  end
end