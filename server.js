
/* run this server for app by commande: node server.js
you see the result in : http://localhost:3000/graphql
*/
var Schema =require( './schema');
var express =require('express');
var graphqlHTTP =require('express-graphql');


const app =express();
app.use('/graphql',graphqlHTTP({
    schema:Schema,
    pretty:true,
    graphiql:true

}));

app.listen(5000, ()=> {
    console.log('app runing on port 3000')
})
