import { NextResponse} from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import  user  from "../../../../models/user";
export async function POST(request){
    const{email,name,contact,Wnumber,events,elist,participants,coaches}= await request.json();
    await connectMongoDB();
    await user.create({email,name,contact,Wnumber,events,elist,participants,coaches});
    return NextResponse.json({message:"User registered"},{status:201})

}

