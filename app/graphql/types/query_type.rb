module Types
  class QueryType < GraphQL::Schema::Object
    
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end

    ##################################
    # Players API
    ##################################

    field :player, resolver: Players::PlayerResolver
    field :players, resolver: Players::PlayersResolver

  end
end
