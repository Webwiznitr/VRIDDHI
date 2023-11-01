import mongoose,{Schema} from "mongoose";

const userSchema = new Schema(
    {
        email:{type:String ,required :true},
        name:{type:String ,required :true},
        contact:{type:Number ,required :true},
        Wnumber:{type:Number ,required :true},
        events:{type:Array,default:[],required:true},
        elist:{type:Array,default:[],required:true},
        participants:{type:Number,required:true},
        coaches:{type:Number,required:true},
        url:{type:Array,default:[],required:true},
        transactionid:{type:String,required:true},
        

    }
);

 const User = mongoose.models.User || mongoose.model("User",userSchema);
 export default User;