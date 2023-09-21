import {__dirname} from "../utils.js";
import swaggerJsDoc from "swagger-jsdoc";
import path from "path";

 

const swaggerOptions = {
    definition:{
        openapi:"3.0.1",
        info:{
            title:"Documentacion api de Ecommerce",
            version:"1.0.0",
            description:"Definicion de endpoints para la API de comercio"
        }
    },

    apis:[`${path.join(__dirname,"./docs/**/*.yml")}`],//archivos que contienen la documentacion de las rutas

};

//crear una variable que interpreta las opciones para trabajar con swagger
export const swaggerSpecs = swaggerJsDoc(swaggerOptions);