var express =require('express');
var express_graphql =require('express-graphql');
var {buildSchema} = require('graphql');

var schema =buildSchema(`
    type Query{
        message :String
    }
`);

var root ={
    message:()=> 'hello'
};

var app =express();
app.use('/graphql',express_graphql({
    schema:schema,
    rootValue:root,
    graphiql:true
}));

app.listen(4000, ()=>console.log('running '))