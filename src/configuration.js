const configuration =  {
    pagination: {
        n: 12
    }
    , api: {
        url: "http://localhost:3000"
    }
    , datastore: {
        mode: 'rest'
        , defaultPageSize: 12
        , url: "https://btvc6sgs9a.execute-api.eu-west-1.amazonaws.com/Prod"
    }
};
export default configuration;