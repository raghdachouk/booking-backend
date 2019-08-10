var Sequelize =require('sequelize');
/*
import _ from 'lodash';
import Faker from 'faker'
import { connect } from 'net';
*/
const Conn = new Sequelize ( 
    'postgres', //nom
    'postgres',// login
    'tgbyhn@pm',//mdp
    { 
        dialect: 'postgres', 
        
        host: '10.10.20.42',
       
        operatorsAliases:false,
       
       
    }
);

const Hotel2 =Conn.define('hotel2',{
   
    nom: {
        type: Sequelize.STRING,
        allowNull:false
    },
    adresse: {
        type: Sequelize.STRING,
        allowNull:false
    },
    lat: {
        type: Sequelize.FLOAT,
        allowNull:false
    },
    log: {
        type: Sequelize.FLOAT,
        allowNull:false
    },
    descp: {
        type: Sequelize.STRING,
        allowNull:false
    },
    prix: {
        type: Sequelize.STRING,
        allowNull:false
    },
    imagePath: {
        type: Sequelize.STRING,
        allowNull:false
    },
    imageChambre: {
        type: Sequelize.STRING,
        allowNull:false
    },
 imageSalon: {
        type: Sequelize.STRING,
        allowNull:false
    },
 imageCuisine: {
        type: Sequelize.STRING,
        allowNull:false
    },

});

const Category2 =Conn.define('category2',{
   
    nom: {
        type: Sequelize.STRING,
        allowNull:false
    },
    nbEtoile: {
        type: Sequelize.INTEGER,
        allowNull:false
    },
    
});

Category2.hasMany(Hotel2);
Hotel2.belongsTo(Category2);

/*
Conn.sync({force:true}).then(()=> {
    Category.create({
        nom:'Apartment hotel',
        nbEtoile:4
    }).then(Category=>{
        return Category.createHotel({
            nom:'khayem',
            adresse:'Hammemet',
            descp:'belle vue',
            lat:37.953,
            log:10.366,
            prix:'50dt',
            imagePath:'https://www.atlantehotels.com/immagini/atlante-garden.jpg'
        })
    });
});
*/

const Hotel = Conn.define('hotel', {
    nom: {
      type: Sequelize.STRING,
      allowNull: false
    },
    adresse: {
      type: Sequelize.STRING,
      allowNull: false
    },
    prix: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      verified: {
          type: Sequelize.BOOLEAN,
          allowNull: false
        },
      image: {
          type: Sequelize.STRING,
          allowNull: false
        },
      about:{
          type: Sequelize.STRING,
           allowNull: true
        },
      longitude:{
          type: Sequelize.FLOAT,
           allowNull: true
        },
      latitude:{
          type: Sequelize.FLOAT,
           allowNull: true
        },
      fullAdresse:{
          type: Sequelize.STRING,
           allowNull: true
  
        },
        phoneNumber:{
            type: Sequelize.INTEGER,
             allowNull: true
          },
        website:{
            type: Sequelize.STRING,
             allowNull: true
          }
    
    });
    
    const Category = Conn.define('category', {
      nbreEtoile: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false
      },
});

Category.hasMany(Hotel);
Hotel.belongsTo(Category);


    


module.exports = Conn;

