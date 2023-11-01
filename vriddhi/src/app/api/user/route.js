import { NextResponse} from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import  user  from "../../../../models/user";
export async function POST(request){
const{email,name,ins,Wnumber,events,elist,participants,coaches/*,url,transactionid*/}= await request.json();
    await connectMongoDB();
    await user.create({email,name,ins,Wnumber,events,elist,participants,coaches/*,url,transactionid*/});
    return NextResponse.json({message:"User registered"},{status:201})

}

