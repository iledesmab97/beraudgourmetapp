// import { HttpLink } from 'apollo-link-http'
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { parse } from 'cookie'

// import { Context } from '@nuxt/types'

// import config from '../../config'
// import Logger from './Logger'

// export default (ctx: Context) => {
//     const loggerLink = process.env.NODE_ENV !== 'production' ? [new Logger()] : []

//     const httpLink = new HttpLink({
//         uri: process.env.graphiqlUrl,
//         credentials: 'same-origin',
//     })


//     return {
//         link: ApolloLink.from([...loggerLink, authLink, httpLink]),
//         defaultHttpLink: false,
//         cache: new InMemoryCache(),
//     }
// }