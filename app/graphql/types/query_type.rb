module Types
  class QueryType < Types::BaseObject
    
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end

    ##################################
    # Players API
    ##################################

    field :player, resolver: Players::PlayerResolver


  end
end
