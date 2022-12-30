import mongoose from "mongoose";
import Joi from "joi";




const medicalHistorySchema=new mongoose.Schema(
    {
        pastIllness:{
            type:[String],
            required: true,
        },

        email:{
            type:String,
            required:true,
            ref:"User"
        },
        // existingFrom: {

        // },
         /////////////////////////////////////

        //  operations:{
        //     type:a
        //  }
        operations:[
            {
            type:new mongoose.Schema({
            operationName:{
                type:String,
                

            },
            operationDate:{
                type:Array,
                default:Date

            },
            hospitalName:{
                type:String,
            }
            })
        }
        ],

   ///////////////////////////////////////
       
    // familyHistory:{
    //  type:new mongoose.Schema({
    //   name:{
    //     type:String,

    //   },
    //   relation:{
    //     type:String,

    // },
    // disease:{
    //     type:[String]
    // }
   


    //  })


    // }
  

        
    }
)

const Medicalhistory = mongoose.model('Medicalhistory', medicalHistorySchema);

function validateUser(user) {
    const schema = Joi.object( {
        pastIllness:Joi.array().required(),
        operations:Joi.object().required(),
        familyHistory:Joi.object().required()
    });
    
    return schema.validate(user)
}


export { Medicalhistory, validateUser}
