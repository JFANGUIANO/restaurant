import { ApolloClient, createHttpLink, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from 'apollo-link-context';
//import fetch from 'node-fetch';
//'http://localhost:4000/' local
//'https://crmgraphqlapi.herokuapp.com/'
//https://pizza-caliente.ola.click/products
 const httpLink = createHttpLink({
    uri: 'http://localhost:4000/',
        //fetch 
});

const authLink = setContext((_, { headers }) => {

    //leer el Storage almacenado
    const token = localStorage.getItem('token');

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    };
});


const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: authLink.concat( httpLink )
});

export default client;