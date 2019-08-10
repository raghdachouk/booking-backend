/*
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
   GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} from 'graphql';
*/
var { GraphQLObjectType } = require('graphql');
var { GraphQLString } = require('graphql');
var { GraphQLInt } = require('graphql');
var { GraphQLFloat } = require('graphql');
var { GraphQLList } = require('graphql');
var { GraphQLBoolean } = require('graphql');
var { GraphQLSchema } = require('graphql');
var Sequelize =require('sequelize');
var Db =require ('./db');
const { maskErrors } = require('graphql-errors');
const Hotel2 = new GraphQLObjectType({
    name:'Hotel2',
    description:'Hotel',
    fields (){
        return {
            id: {
            type: GraphQLInt,
            resolve(hotel2){
                return hotel2.id;
                }
            },
            nom: {
                type: GraphQLString,
                resolve(hotel2){
                    return hotel2.nom;
                }
            },
            adresse: {
                type: GraphQLString,
                resolve(hotel2){
                    return hotel2.adresse;
                }
            },
            descp: {
                type: GraphQLString,
                resolve(hotel2){
                    return hotel2.descp;
                }
            },
            prix: {
                type: GraphQLString,
                resolve(hotel2){
                    return hotel2.prix;
                }
            },
            imagePath: {
                type: GraphQLString,
                resolve(hotel2){
                    return hotel2.imagePath            
                    }
            },
            imageChambre: {
                type: GraphQLString,
                resolve(hotel2){
                    return hotel2.imageChambre
                    }
            },
  imageSalon: {
                type: GraphQLString,
                resolve(hotel2){
                    return hotel2.imageSalon
                    }
            },
  imageCuisine: {
                type: GraphQLString,
                resolve(hotel2){
                    return hotel2.imageCuisine
                    }
            },


            lat: {
                type: GraphQLFloat,
                resolve(hotel2){
                    return hotel2.lat;
                }
            },
            log: {
                type: GraphQLFloat,
                resolve(hotel2){
                    return hotel2.lat;
                }
            },
            
            category2: {
                type: Category2,
                resolve(hotel2){
                    return hotel2.getCategory;
                }
            },
            
        }
    }
});
const Category2 =new GraphQLObjectType({
    name:'Category2',
    description:'Category',
    fields (){
        return{
            nom: {
                type: GraphQLString,
                resolve(category2){
                    return category2.nom;
                }
            },
            nbEtoile: {
                type: GraphQLInt,
                resolve(category2){
                    return category2.nbEtoile;
                }
            },
            
            hotels:{
                type:new GraphQLList(Hotel2),
                resolve (category2){
                    return category2.getHotels();
                }
                
            }
            
        }
    }
});


const Category = new GraphQLObjectType({
    name: 'Category',
    description: 'a category',
    fields () {
      return {
        nbreEtoile: {
          type: GraphQLInt,
          resolve (category) {
            return category.nbreEtoile;
          }
        },
        image: {
          type: GraphQLString,
          resolve (category) {
            return category.image;
          }
        }
      };
    }
  });
  
  const Hotel = new GraphQLObjectType({
    name: 'Hotel',
    description: 'hotel',
    fields () {
      return {
        id:{
          type: GraphQLInt,
          resolve(hotel){
            return hotel.id;
          }
    },
        nom: {
          type: GraphQLString,
          resolve (hotel) {
            return hotel.nom;
          }
        },
        adresse: {
          type: GraphQLString,
          resolve (hotel) {
            return hotel.adresse;
          }
        },
        categogy: {
          type: Category,
          resolve (hotel) {
            return hotel.getCategory();
    }
        },
        prix: {
          type: GraphQLFloat,
          resolve (hotel) {
            return hotel.prix;
          }
        },
        verified: {
          type: GraphQLBoolean,
          resolve (hotel) {
            return hotel.verified;
          }
        },
        image: {
          type: GraphQLString,
          resolve (hotel) {
    return hotel.image;
          }
        },
        about:{
        type: GraphQLString,
        resolve(hotel){
          return hotel.about
       }
        },
        longitude:{
        type: GraphQLFloat,
        resolve(hotel){
          return hotel.longitude
       }
        },
        latitude:{
        type: GraphQLFloat,
   resolve(hotel){
          return hotel.latitude
       }
        },
        fullAdresse:{
        type: GraphQLString,
        resolve(hotel){
          return hotel.fullAdresse
       }
        },
        phoneNumber:{
        type: GraphQLInt,
        resolve(hotel){
          return hotel.phoneNumber
       }
        },
        website:{
   type: GraphQLString,
        resolve(hotel){
          return hotel.website
       }
        }
  
  
  
  
  
      };
    }
  });
  
  //////////////////////////////////////////////////////////////////////////$
  

  const Op = Sequelize.Op;
const Query = new GraphQLObjectType({
    name:'Query',
    description :'Root query object',
    fields :()=> {
        return {
            categories2:{
                type :new GraphQLList(Category2),
                args:{
                    id:{
                        type :GraphQLInt
                    },
                    nom:{
                        type :GraphQLString
                    },
                    nbEtoile:{
                        type :GraphQLInt
                    },
                },
                resolve (root ,args){
                    return Db.models.category2.findAll({where :args})
                }
            },
            hotels2 : {
            type: new GraphQLList(Hotel2),
            args:{
                id:{
                    type:GraphQLInt
                },
                nom:{
                    type:GraphQLString
                },
            },
            resolve (root,args){
                return Db.models.hotel2.findAll({where :args})
            }
        },

        categories:{
            type: new GraphQLList(Category),
            args: {
              id: {
                type: GraphQLInt
              },
     nbreEtoile: {
                type: GraphQLInt
              },
              image: {
                type: GraphQLString
              }
            },
            resolve (root, args) {
              return Db.models.category.findAll({ where: args });
            }
          },
                 hotels: {
            type : new GraphQLList(Hotel),
   args: {
              id: {
                type: GraphQLInt
              }
   },
            resolve(root,args){
              return Db.models.hotel.findAll({where: args });
            }
          },
   


        };
    }
});
const Schema = new GraphQLSchema({
    query :Query,
});

maskErrors(Schema);
module.exports = Schema;


