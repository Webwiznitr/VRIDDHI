
"use client";
import  React from 'react';
import axios from 'axios';
import { useState} from 'react';
import * as XLSX from 'xlsx';


export default function Home() {
    const [file1, setFile1] = useState('');
    const [file2, setFile2] = useState('');

    const [form,setForm]=useState({
        email:"",
        name:"",
        contact:"",
        Wnumber:"",
        events:[],
        elist:[],
        participants:"",
        coaches:"",
        url:[],
        transactionid:""
    })
    const [error,setError]=useState('');
    const [submitdisable,setSubmitdisable]=useState(false);  
    const [success,setSuccess]=useState(true);
    const [show,setShow] = useState('hidden');

    const handle = async (e) => {
        setShow('')
        e.preventDefault();
        const formData1 = new FormData();
        const formData2 = new FormData();
        formData1.append('file', file1);
        formData2.append('file', file2);
        formData1.append('upload_preset','vriddhi');
        formData2.append('upload_preset','vriddhi');
        try {
            const list=[]
            const response1 = await fetch(
              'https://api.cloudinary.com/v1_1/dlt7pwi85/image/upload',
              {
                method:'POST',
                body:formData1
              }
            ).then(r=>r.json())
           
            list.push(response1.secure_url)

            const response2 = await fetch(
                'https://api.cloudinary.com/v1_1/dlt7pwi85/image/upload',
                {
                  method:'POST',
                  body:formData2
                }
              ).then(r=>r.json())
             list.push(response2.secure_url)
             setForm((prev)=>(
                {...prev,url:list}
            ));
            
          } catch (error) {
            console.error(error);
          };
       
         
if ( !form.email || !form.name || form.events.length==0 || form.elist.length==0 || !form.contact || !form.Wnumber  || !form.participants || !form.coaches || !form.transactionid  ){
    setShow('hidden')      
    setError("Fill All Fields Please")
          return ;
      } else if(form.url.length==0){
        setShow('hidden')
        setError("Upload Complete, Click submit Again")
        return ;
      }
     
      setError("");
      setSubmitdisable(true);
      setSuccess(false);
      const data =JSON.stringify({
        email:form.email,
        name:form.name,
        contact:form.contact,
        events:form.events,
        elist:form.elist,
        Wnumber:form.Wnumber,
        participants:form.participants,
        coaches:form.coaches,
        url:form.url,
        transactionid:form.transactionid
        
    })
    

      try{
        await fetch('api/user',{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:data
        })
      } catch(error){
        console.log(error)
      }
    }
      
  return (<div className=' w-[100%] r:h-[100%] h-[100%] bg-[#111A21] pt-[70px]'>
  
       <div className='r:flex grid-flow-col pt-10 gap-10 text-white hidden'>
        <div className='h-[100vh] w-4/12'>
        <div className='text-center sm:text-4xl md:text-5xl lg:text-6xl text-3xl py-8 font-nidus'>
                Register <br/>and<br/>Get Started
            </div>
        </div>
        {success ? <div className='h-[100%] pb-10 block text-white  ' style={{fontFamily:'Roboto, sans-serif'}}  >
            
            <div className='grid grid-cols-2 font-medium'>
            <div className='p-2'>
            <div className='text-md'>
            <div>E-mail</div>
            <input onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,email:event.target.value}
                ));
                
            }}  autoComplete="off" className=' outline-none rounded h-[35px] w-[350px] p-2 mb-4 bg-slate-600' type="email" name="email"/>
            <div>Contact Number (Contingent Leader)</div>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,contact:event.target.value}
                ));
                
            }}  autoComplete="off" className=' outline-none rounded h-[35px] w-[350px] p-2 mb-4 bg-slate-600' type="text" name="number"/>
            <div>
            <div>Confirmed Events</div>
            <div className='grid grid-cols-2 mb-[52px]'>
            <div>
            <input onChange={()=>{
                const index=form.events.indexOf("Cricket(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Cricket(Men)"]}
                ));
                }
                
            }} type="checkbox" id="Cricket(Men)" />
            <label className='p-2' htmlFor="Cricket(Men)">Cricket(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Football(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Football(Men)"]}
                ));
                }
                
            }} type="checkbox" id="Football(Men)"  />
            <label className='p-2' htmlFor="Football(Men)">Football(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Basketball(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Basketball(Men)"]}
                ));
                }
                
                
            }} type="checkbox" id="Basketball(Men)"  />
            <label className='p-2' htmlFor="Basketball(Men)">Basketball(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Volleyball(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Volleyball(Men)"]}
                ));
                }
                
            }} type="checkbox" id="Volleyball(Men)" />
            <label className='p-2' htmlFor="Volleyball(Men)">Volleyball(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Badminton(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Badminton(Men)"]}
                ));
                }
                
            }} type="checkbox" id="Badminton(Men)"  />
            <label className='p-2' htmlFor="Badminton(Men)">Badminton(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Table-Tennis(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Table-Tennis(Men)"]}
                ));
                }
                
            }} type="checkbox" id="Table-Tennis(Men)" />
            <label className='p-2' htmlFor="Table-Tennis(Men)">Table-Tennis(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Kabbadi(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Kabbadi(Men)"]}
                ));
                }
                
            }} type="checkbox" id="Kabbadi(Men)" />
            <label className='p-2' htmlFor="Kabbadi(Men)">Kabbadi(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Chess");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Chess"]}
                ));
                }
                
            }} type="checkbox" id="Chess" />
            <label className='p-2' htmlFor="Chess">Chess</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Badminton(Women)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Badminton(Women)"]}
                ));
                }
                
            }} type="checkbox" id="Badminton(Women)"  />
            <label className='p-2' htmlFor="Badminton(Women)">Badminton(Women)</label></div>

            </div>
            <div>Total Number of Participants</div>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,participants:event.target.value}
                ));
                
            }}  autoComplete="off" className=' outline-none rounded h-[35px] w-[350px] p-2 mb-4 bg-slate-600' type="text" name="participants"/>
            </div>
            
            </div></div>
            
            <div className='p-2'>
            <div className='text-md'>
            
            <div>Name (Contingent Leader)</div>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,name:event.target.value}
                ));
                
            }}  autoComplete="off" className=' outline-none rounded h-[35px] w-[350px] p-2 mb-4 bg-slate-600' type="text" name="name"/>
            <div>WhatsApp Number (Contingent Leader)</div>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,Wnumber:event.target.value}
                ));
                
            }}  autoComplete="off" className='outline-none rounded h-[35px] w-[350px] p-2 mb-4 bg-slate-600' type="text" name="wnumber"/>
            <div className='text-white w-[350px] text-start'><span className='underline underline-offset-4'>Upload Final Registration List</span> <br/>
An Excel sheet containing all the details of the students to their corresponding teams. (The sheet must contain the names of all the participants under their corresponding interested sport. As shown in the Excel sheet) <a href='https://docs.google.com/spreadsheets/d/1GTF69ejITV1VdGLCPXQTcwhm2LmkkRfn/edit#gid=992052622'> <span className='text-[#0071C9]'>Sample</span> </a></div>
<input className=" h-fit mb-4 block w-fit text-white text-sm file:mr-4 file:px-4 file:py-2 file:text-sm file:border-0 file:rounded-full file:font-semibold file:text-[#0071C9] file:bg-white hover:file:bg-blue-100 hover:file:cursor-pointer" 
            type="file"
            onChange={(event)=>{
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.onload = (event) => {
                const workbook = XLSX.read(event.target.result, { type: "binary" });
                const sheetName = workbook.SheetNames[0];
                const xcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
                setForm((prev)=>(
                    {...prev,elist:xcel}
                ));
                };
                reader.readAsBinaryString(file);
                
            }}
            placeholder="Excel"
            accept=".xlsx"
            /> 
            <div>Total Number of Coaches</div>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,coaches:event.target.value}
                ));
                
            }}  autoComplete="off" className=' outline-none rounded h-[35px] w-[350px] p-2 mb-4 bg-slate-600' type="text" name="coach"/>
            </div></div>
            </div>
            <div className='bg-gradient-to-br from-[rgb(0,31,78)] to-[rgb(0,5,13)] rounded-lg w-[750px] pb-4 mb-4'>
            <div className='text-center text-2xl h-[300px] p-2 '>Payment<br/><br/><div className='text-lg text-center '>You will have to pay a registration fee of Rs.1000 per Head to the below provided bank account details. In case of any discrepancies contact <span className=' font-bold'>6370165043 </span> at the earliest.</div><br/><ul className='text-lg font-semibold'><li>Account Number : 37377186107</li><li>Account Holders Name : STUDENT ACTIVITY CENTER - NIT ROURKELA</li><li>IFSC Code : SBIN0002109</li><li>Branch : NIT CAMPUS ROURKELA</li></ul><span className='text-lg font-bold text-red-400'>Note : Any Sort of Misconduct is highly punishable.</span><br/></div>
           
            <div className='m-auto w-fit p-10'>
            <div>Transaction ID/UTR<br/><span className='text-sm'>Transaction Number recieved upon completion of payment.</span></div>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,transactionid:event.target.value}
                ));
                
            }}  autoComplete="off" className=' outline-none rounded h-[35px] w-[400px] p-2 mb-4 bg-slate-600' type="text" name="t-id"/>
            <div>Screenshot of Payment Completion</div>
            <input className=" h-fit mb-4 block w-fit text-white text-sm file:mr-4 file:px-4 file:py-2 file:text-sm file:border-0 file:rounded-full file:font-semibold file:text-[#0071C9] file:bg-white hover:file:bg-blue-100 hover:file:cursor-pointer" 
            type="file"
            onChange={(event)=>{
                setFile1(event.target.files[0])
            }}
            placeholder="jpg"
            accept=".jpg"/>
            <div>Upload Institute ID or ID Proof of Contingent Leader</div>
            <input className=" h-fit mb-4 block w-fit text-white text-sm file:mr-4 file:px-4 file:py-2 file:text-sm file:border-0 file:rounded-full file:font-semibold file:text-[#0071C9] file:bg-white hover:file:bg-blue-100 hover:file:cursor-pointer" 
            type="file"
            onChange={(event)=>{
                setFile2(event.target.files[0])
            }}
            placeholder="jpg"
            accept=".jpg"/>
            </div>
            </div>
            <div className='w-full justify-center m-auto text-center'>
            <div className='block m-auto text-red-500 text-center'>{error}</div>
            <div className='w-fit ml-[350px] text-center '>
            <div className={show} role="status">
    <svg aria-hidden="true" class="ml-4 w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="">Uploading...</span>
</div>  </div>
            <button disabled={submitdisable} onClick={handle} className='border-2 text-center w-[200px] m-auto p-2  mt-8 rounded-xl border-[#0071C9] text-[#0071C9] hover:border-white hover:text-white' type="submit">Submit</button>
            </div>
            
        </div> : <div className='h-[100vh] block text-white ' style={{fontFamily:'Roboto, sans-serif'}} >
        <div className='h-fit pt-[55px] flex font-[600] text-[48px] font-nidus'>
               Your Team has been succesfully Registered
            </div>
          <a href="/"  ><button className='border-2  text-center w-[250px] m-auto p-2  mt-8 rounded-xl border-[#0071C9] text-[#0071C9] hover:border-white hover:text-white' type="submit">Home</button></a>
        </div>}
       </div>
{/*mobile*/}
       <div className='r:hidden text-white font-medium' style={{fontFamily:'Roboto, sans-serif'}}>
       <div className='pt-[8vh]'>
         </div>
         {success ? <div className='-mt-12'><div className=' text-center sm:text-4xl md:text-5xl lg:text-6xl text-3xl py-8 font-nidus '>Register and Get Started</div>
        <div className=' block h-fit mt-4  w-11/12 m-auto bg-[#252b36] rounded p-8'>
        <div> 
        <form className='grid m-auto grid-row-auto gap-6 p-2  '>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,email:event.target.value}
                ));
                
            }}  autoComplete="off" className='text-white placeholder:text-xs   outline-none  rounded h-8 p-2 bg-slate-600' type="email" name="email" placeholder='E-mail' />
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,name:event.target.value}
                ));
                
            }}  autoComplete="off" className=' text-white placeholder:text-xs  outline-none  rounded h-8 p-2 bg-slate-600' type="text" name="name" placeholder='Name (Contingent Leader)' />
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,contact:event.target.value}
                ));
                
            }}  autoComplete="off" className=' text-white placeholder:text-xs  outline-none  rounded h-8 p-2  bg-slate-600' type="text" name="name" placeholder='Contact Number (Contingent Leader)' />
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,Wnumber:event.target.value}
                ));
                
            }}  autoComplete="off" className=' text-white placeholder:text-xs  outline-none  rounded h-8 p-2 bg-slate-600' type="text" name="name" placeholder='Whatsapp Number (Contingent Leader)' />
            <div className='font-bold'>Confirmed Events</div>
            <div className='grid grid-cols-2 text-sm'>
            <div>
            <input onChange={()=>{
                const index=form.events.indexOf("Cricket(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Cricket(Men)"]}
                ));
                }
                
            }} type="checkbox" id="Cricket(Men)" />
            <label className='p-2' htmlFor="Cricket(Men)">Cricket(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Football(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Football(Men)"]}
                ));
                }
                
            }} type="checkbox" id="Football(Men)"  />
            <label className='p-2' htmlFor="Football(Men)">Football(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Basketball(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Basketball(Men)"]}
                ));
                }
            }} type="checkbox" id="Basketball(Men)"  />
            <label className='p-2' htmlFor="Basketball(Men)">Basketball(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Volleyball(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Volleyball(Men)"]}
                ));
                }
                
            }} type="checkbox" id="Volleyball(Men)" />
            <label className='p-2' htmlFor="Volleyball(Men)">Volleyball(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Badminton(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Badminton(Men)"]}
                ));
                }
            }} type="checkbox" id="Badminton(Men)"  />
            <label className='p-2' htmlFor="Badminton(Men)">Badminton(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Table-Tennis(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Table-Tennis(Men)"]}
                ));
                }
            }} type="checkbox" id="Table-Tennis(Men)" />
            <label className='p-2' htmlFor="Table-Tennis(Men)">Table-Tennis(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Kabbadi(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Kabbadi(Men)"]}
                ));
                }
            }} type="checkbox" id="Kabbadi(Men)" />
            <label className='p-2' htmlFor="Kabbadi(Men)">Kabbadi(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Chess");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Chess"]}
                ));
                }
            }} type="checkbox" id="Chess" />
            <label className='p-2' htmlFor="Chess">Chess</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Badminton(Women)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Badminton(Women)"]}
                ));
                }
            }} type="checkbox" id="Badminton(Women)"  />
            <label className='p-2' htmlFor="Badminton(Women)">Badminton(Women)</label></div>

            </div>
            <div className='text-white  text-sm text-start'><span className=' font-bold underline underline-offset-4'>Upload Final Registration List</span> <br/>
An Excel sheet containing all the details of the students to their corresponding teams. (The sheet must contain the names of all the participants under their corresponding interested sport. As shown in the Excel sheet) <a href='https://docs.google.com/spreadsheets/d/1GTF69ejITV1VdGLCPXQTcwhm2LmkkRfn/edit#gid=992052622'> <span className='text-[#0071C9]'>Sample </span> </a><input className="pl-0 pt-2 block w-full text-white text-sm file:mr-4 file:px-4 file:py-2 file:text-sm file:border-0 file:rounded-full file:font-semibold file:text-[#0071C9] file:bg-white hover:file:bg-blue-100 hover:file:cursor-pointer" 
            type="file"
            onChange={(event)=>{
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.onload = (event) => {
                const workbook = XLSX.read(event.target.result, { type: "binary" });
                const sheetName = workbook.SheetNames[0];
                const xcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
                setForm((prev)=>(
                    {...prev,elist:xcel}
                ));
                };
                reader.readAsBinaryString(file);
                
            }}
            placeholder="Excel"
            accept=".xlsx"
            /> </div>
            
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,participants:event.target.value}
                ));
                
            }}  autoComplete="off" className=' text-white placeholder:text-xs  outline-none  rounded h-8 p-2 bg-slate-600' type="text" name="name" placeholder='Total Number of Participants'/>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,coaches:event.target.value}
                ));
                
            }}  autoComplete="off" className=' text-white placeholder:text-xs  outline-none  rounded h-8 p-2 bg-slate-600' type="text" name="name" placeholder='Total Number of Coaches'/>
            <div className='text-white font-bold  text-lg text-center'>Payment</div>
            <div className=' text-center  '>You will have to pay a registration fee of Rs.1000 per Head to the below provided bank account details. In case of any discrepancies contact <span className=' font-bold'>6370165043 </span> at the earliest.</div><ul className='font-semibold text-center'><li>Account Number : 37377186107</li><li>Account Holders Name : STUDENT ACTIVITY CENTER - NIT ROURKELA</li><li>IFSC Code : SBIN0002109</li><li>Branch : NIT CAMPUS ROURKELA</li></ul><span className='text-lg text-center font-bold text-red-400 '>Note : Any Sort of Misconduct is highly punishable.</span>
            <hr/>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,transactionid:event.target.value}
                ));
                
            }}  autoComplete="off" className=' text-white placeholder:text-xs  outline-none  rounded h-8 p-2 bg-slate-600' type="text" name="tid" placeholder='Transaction ID/UTR (Transaction Number)'/>
            <div className='text-white  text-sm text-start font-bold'>Screenshot of payment completion<input className="pl-0 pt-2 block w-full text-white text-sm file:mr-4 file:px-4 file:py-2 file:text-sm file:border-0 file:rounded-full file:font-semibold file:text-[#0071C9] file:bg-white hover:file:bg-blue-100 hover:file:cursor-pointer" 
            type="file"
            onChange={(event)=>{
                setFile1(event.target.files[0])
            }}
            placeholder="jpg"
            accept=".jpg"
            /> </div>
            <div className='text-white  text-sm text-start font-bold'>Upload Institute ID or ID Proof of Contingent Leader<input className="pl-0 pt-2 block w-full text-white text-sm file:mr-4 file:px-4 file:py-2 file:text-sm file:border-0 file:rounded-full file:font-semibold file:text-[#0071C9] file:bg-white hover:file:bg-blue-100 hover:file:cursor-pointer" 
            type="file"
            onChange={(event)=>{
                setFile2(event.target.files[0])
            }}
            placeholder="jpg"
            accept=".jpg"
            /> </div>
            <div className='block m-auto text-red-500 font-bold text-center'>{error}</div>
            <div className='w-fit ml-[195px] text-center '>
            <div className={show} role="status">
    <svg aria-hidden="true" class="ml-4 w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="">Uploading...</span>
</div>  </div>
            <button disabled={submitdisable} onClick={handle} className='text-white  bg-[#0071C9] w-fit block m-auto p-2 rounded-xl hover:text-white' type="submit">Submit</button>
        </form>
       
        </div>
        </div></div> : <div className='h-[fit] text-center p-10  font-[600] text-[20px] font-nidus'>Congratulations,<br/>Your Team has been Succesfully registered<br/><a href="/" ><button className='border-2 text-[15px]  text-center w-[250px] m-auto p-2  mt-8 rounded-xl border-[#0071C9] text-[#0071C9] hover:border-white hover:text-white' type="submit">Home</button></a></div> }
       </div>
   </div>
  )
}
"use client";
import  React from 'react';
import axios from 'axios';
import { useState} from 'react';
import * as XLSX from 'xlsx';



export default function Home() {

    const [file1, setFile1] = useState('');
    const [file2, setFile2] = useState('');

    const [form,setForm]=useState({
        email:"",
        name:"",
        contact:"",
        Wnumber:"",
        events:[],
        elist:[],
        participants:"",
        coaches:"",
        url:[],
        transactionid:""
    })
    const [error,setError]=useState('');
    const [submitdisable,setSubmitdisable]=useState(false);  
    const [success,setSuccess]=useState(true);
    

    const handle = async (e) => {
        
        e.preventDefault();
if ( !form.email || !form.name || form.events.length==0 || form.elist.length==0 || !form.contact || !form.Wnumber  || !form.participants || !form.coaches || !form.transactionid  ){
         
    setError("Fill All Fields Please")
          return ;
      }
        const formData1 = new FormData();
        const formData2 = new FormData();
        formData1.append('file', file1);
        formData2.append('file', file2);
        formData1.append('upload_preset','vriddhi');
        formData2.append('upload_preset','vriddhi');
        
            const list=[]
            const response1 = await fetch(
              'https://api.cloudinary.com/v1_1/dlt7pwi85/image/upload',
              {
                method:'POST',
                body:formData1
              }
            ).then(r=>r.json())
           
            list.push(response1.secure_url)

            const response2 = await fetch(
                'https://api.cloudinary.com/v1_1/dlt7pwi85/image/upload',
                {
                  method:'POST',
                  body:formData2
                }
              ).then(r=>r.json())
             list.push(response2.secure_url)
    
      setError("");
      setSubmitdisable(true);
      setSuccess(false);
      const data =JSON.stringify({
        email:form.email,
        name:form.name,
        contact:form.contact,
        events:form.events,
        elist:form.elist,
        Wnumber:form.Wnumber,
        participants:form.participants,
        coaches:form.coaches,
        url:list,
        transactionid:form.transactionid
        
    })
    console.log(data)
      try{
        await fetch('api/user',{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:data
        })
      } catch(error){
        console.log(error)
      }
    }
      
  return (<div className=' w-[100%] r:h-[100%] h-[100%] bg-[#111A21] pt-[70px]'>
  
       <div className='r:flex grid-flow-col pt-10 gap-10 text-white hidden'>
        <div className='h-[100vh] w-4/12'>
        <div className='text-center sm:text-4xl md:text-5xl lg:text-6xl text-3xl py-8 font-nidus'>
                Register <br/>and<br/>Get Started
            </div>
        </div>
        {success ? <div className='h-[100%] pb-10 block text-white  ' style={{fontFamily:'Roboto, sans-serif'}}  >
            
            <div className='grid grid-cols-2 font-medium'>
            <div className='p-2'>
            <div className='text-md'>
            <div>E-mail</div>
            <input onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,email:event.target.value}
                ));
                
            }}  autoComplete="off" className=' outline-none rounded h-[35px] w-[350px] p-2 mb-4 bg-slate-600' type="email" name="email"/>
            <div>Contact Number (Contingent Leader)</div>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,contact:event.target.value}
                ));
                
            }}  autoComplete="off" className=' outline-none rounded h-[35px] w-[350px] p-2 mb-4 bg-slate-600' type="text" name="number"/>
            <div>
            <div>Confirmed Events</div>
            <div className='grid grid-cols-2 mb-[52px]'>
            <div>
            <input onChange={()=>{
                const index=form.events.indexOf("Cricket(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Cricket(Men)"]}
                ));
                }
                
            }} type="checkbox" id="Cricket(Men)" />
            <label className='p-2' htmlFor="Cricket(Men)">Cricket(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Football(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Football(Men)"]}
                ));
                }
                
            }} type="checkbox" id="Football(Men)"  />
            <label className='p-2' htmlFor="Football(Men)">Football(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Basketball(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Basketball(Men)"]}
                ));
                }
                
                
            }} type="checkbox" id="Basketball(Men)"  />
            <label className='p-2' htmlFor="Basketball(Men)">Basketball(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Volleyball(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Volleyball(Men)"]}
                ));
                }
                
            }} type="checkbox" id="Volleyball(Men)" />
            <label className='p-2' htmlFor="Volleyball(Men)">Volleyball(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Badminton(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Badminton(Men)"]}
                ));
                }
                
            }} type="checkbox" id="Badminton(Men)"  />
            <label className='p-2' htmlFor="Badminton(Men)">Badminton(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Table-Tennis(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Table-Tennis(Men)"]}
                ));
                }
                
            }} type="checkbox" id="Table-Tennis(Men)" />
            <label className='p-2' htmlFor="Table-Tennis(Men)">Table-Tennis(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Kabbadi(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Kabbadi(Men)"]}
                ));
                }
                
            }} type="checkbox" id="Kabbadi(Men)" />
            <label className='p-2' htmlFor="Kabbadi(Men)">Kabbadi(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Chess");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Chess"]}
                ));
                }
                
            }} type="checkbox" id="Chess" />
            <label className='p-2' htmlFor="Chess">Chess</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Badminton(Women)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Badminton(Women)"]}
                ));
                }
                
            }} type="checkbox" id="Badminton(Women)"  />
            <label className='p-2' htmlFor="Badminton(Women)">Badminton(Women)</label></div>

            </div>
            <div>Total Number of Participants</div>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,participants:event.target.value}
                ));
                
            }}  autoComplete="off" className=' outline-none rounded h-[35px] w-[350px] p-2 mb-4 bg-slate-600' type="text" name="participants"/>
            </div>
            
            </div></div>
            
            <div className='p-2'>
            <div className='text-md'>
            
            <div>Name (Contingent Leader)</div>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,name:event.target.value}
                ));
                
            }}  autoComplete="off" className=' outline-none rounded h-[35px] w-[350px] p-2 mb-4 bg-slate-600' type="text" name="name"/>
            <div>WhatsApp Number (Contingent Leader)</div>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,Wnumber:event.target.value}
                ));
                
            }}  autoComplete="off" className='outline-none rounded h-[35px] w-[350px] p-2 mb-4 bg-slate-600' type="text" name="wnumber"/>
            <div className='text-white w-[350px] text-start'><span className='underline underline-offset-4'>Upload Final Registration List</span> <br/>
An Excel sheet containing all the details of the students to their corresponding teams. (The sheet must contain the names of all the participants under their corresponding interested sport. As shown in the Excel sheet) <a href='https://docs.google.com/spreadsheets/d/1GTF69ejITV1VdGLCPXQTcwhm2LmkkRfn/edit#gid=992052622'> <span className='text-[#0071C9]'>Sample</span> </a></div>
<input className=" h-fit mb-4 block w-fit text-white text-sm file:mr-4 file:px-4 file:py-2 file:text-sm file:border-0 file:rounded-full file:font-semibold file:text-[#0071C9] file:bg-white hover:file:bg-blue-100 hover:file:cursor-pointer" 
            type="file"
            onChange={(event)=>{
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.onload = (event) => {
                const workbook = XLSX.read(event.target.result, { type: "binary" });
                const sheetName = workbook.SheetNames[0];
                const xcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
                setForm((prev)=>(
                    {...prev,elist:xcel}
                ));
                };
                reader.readAsBinaryString(file);
                
            }}
            placeholder="Excel"
            accept=".xlsx"
            /> 
            <div>Total Number of Coaches</div>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,coaches:event.target.value}
                ));
                
            }}  autoComplete="off" className=' outline-none rounded h-[35px] w-[350px] p-2 mb-4 bg-slate-600' type="text" name="coach"/>
            </div></div>
            </div>
            <div className='bg-gradient-to-br from-[rgb(0,31,78)] to-[rgb(0,5,13)] rounded-lg w-[750px] pb-4 mb-4'>
            <div className='text-center text-2xl h-[300px] p-2 '>Payment<br/><br/><div className='text-lg text-center '>You will have to pay a registration fee of Rs.1000 per Head to the below provided bank account details. In case of any discrepancies contact <span className=' font-bold'>6370165043 </span> at the earliest.</div><br/><ul className='text-lg font-semibold'><li>Account Number : 37377186107</li><li>Account Holders Name : STUDENT ACTIVITY CENTER - NIT ROURKELA</li><li>IFSC Code : SBIN0002109</li><li>Branch : NIT CAMPUS ROURKELA</li></ul><span className='text-lg font-bold text-red-400'>Note : Any Sort of Misconduct is highly punishable.</span><br/></div>
           
            <div className='m-auto w-fit p-10'>
            <div>Transaction ID/UTR<br/><span className='text-sm'>Transaction Number recieved upon completion of payment.</span></div>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,transactionid:event.target.value}
                ));
                
            }}  autoComplete="off" className=' outline-none rounded h-[35px] w-[400px] p-2 mb-4 bg-slate-600' type="text" name="t-id"/>
            <div>Screenshot of Payment Completion</div>
            <input className=" h-fit mb-4 block w-fit text-white text-sm file:mr-4 file:px-4 file:py-2 file:text-sm file:border-0 file:rounded-full file:font-semibold file:text-[#0071C9] file:bg-white hover:file:bg-blue-100 hover:file:cursor-pointer" 
            type="file"
            onChange={(event)=>{
                setFile1(event.target.files[0])
            }}
            placeholder="jpg"
            accept=".jpg"/>
            <div>Upload Institute ID or ID Proof of Contingent Leader</div>
            <input className=" h-fit mb-4 block w-fit text-white text-sm file:mr-4 file:px-4 file:py-2 file:text-sm file:border-0 file:rounded-full file:font-semibold file:text-[#0071C9] file:bg-white hover:file:bg-blue-100 hover:file:cursor-pointer" 
            type="file"
            onChange={(event)=>{
                setFile2(event.target.files[0])
                
            }}
            placeholder="jpg"
            accept=".jpg"/>
            </div>
            </div>
            <div className='w-full justify-center m-auto text-center'>
            <div className='block m-auto text-red-500 text-center'>{error}</div>
            
            <button disabled={submitdisable} onClick={handle} className='border-2 text-center w-[200px] m-auto p-2  mt-8 rounded-xl border-[#0071C9] text-[#0071C9] hover:border-white hover:text-white' type="submit">Submit</button>
            </div>
            
        </div> : <div className='h-[100vh] block text-white ' style={{fontFamily:'Roboto, sans-serif'}} >
        <div className='h-fit pt-[55px] flex font-[600] text-[48px] font-nidus'>
               Your Team has been succesfully Registered
            </div>
          <a href="/"  ><button className='border-2  text-center w-[250px] m-auto p-2  mt-8 rounded-xl border-[#0071C9] text-[#0071C9] hover:border-white hover:text-white' type="submit">Home</button></a>
        </div>}
       </div>
{/*mobile*/}
       <div className='r:hidden text-white font-medium' style={{fontFamily:'Roboto, sans-serif'}}>
       <div className='pt-[8vh]'>
         </div>
         {success ? <div className='-mt-12'><div className=' text-center sm:text-4xl md:text-5xl lg:text-6xl text-3xl py-8 font-nidus '>Register and Get Started</div>
        <div className=' block h-fit mt-4  w-11/12 m-auto bg-[#252b36] rounded p-8'>
        <div> 
        <form className='grid m-auto grid-row-auto gap-6 p-2  '>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,email:event.target.value}
                ));
                
            }}  autoComplete="off" className='text-white placeholder:text-xs   outline-none  rounded h-8 p-2 bg-slate-600' type="email" name="email" placeholder='E-mail' />
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,name:event.target.value}
                ));
                
            }}  autoComplete="off" className=' text-white placeholder:text-xs  outline-none  rounded h-8 p-2 bg-slate-600' type="text" name="name" placeholder='Name (Contingent Leader)' />
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,contact:event.target.value}
                ));
                
            }}  autoComplete="off" className=' text-white placeholder:text-xs  outline-none  rounded h-8 p-2  bg-slate-600' type="text" name="name" placeholder='Contact Number (Contingent Leader)' />
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,Wnumber:event.target.value}
                ));
                
            }}  autoComplete="off" className=' text-white placeholder:text-xs  outline-none  rounded h-8 p-2 bg-slate-600' type="text" name="name" placeholder='Whatsapp Number (Contingent Leader)' />
            <div className='font-bold'>Confirmed Events</div>
            <div className='grid grid-cols-2 text-sm'>
            <div>
            <input onChange={()=>{
                const index=form.events.indexOf("Cricket(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Cricket(Men)"]}
                ));
                }
                
            }} type="checkbox" id="Cricket(Men)" />
            <label className='p-2' htmlFor="Cricket(Men)">Cricket(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Football(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Football(Men)"]}
                ));
                }
                
            }} type="checkbox" id="Football(Men)"  />
            <label className='p-2' htmlFor="Football(Men)">Football(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Basketball(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Basketball(Men)"]}
                ));
                }
            }} type="checkbox" id="Basketball(Men)"  />
            <label className='p-2' htmlFor="Basketball(Men)">Basketball(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Volleyball(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Volleyball(Men)"]}
                ));
                }
                
            }} type="checkbox" id="Volleyball(Men)" />
            <label className='p-2' htmlFor="Volleyball(Men)">Volleyball(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Badminton(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Badminton(Men)"]}
                ));
                }
            }} type="checkbox" id="Badminton(Men)"  />
            <label className='p-2' htmlFor="Badminton(Men)">Badminton(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Table-Tennis(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Table-Tennis(Men)"]}
                ));
                }
            }} type="checkbox" id="Table-Tennis(Men)" />
            <label className='p-2' htmlFor="Table-Tennis(Men)">Table-Tennis(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Kabbadi(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Kabbadi(Men)"]}
                ));
                }
            }} type="checkbox" id="Kabbadi(Men)" />
            <label className='p-2' htmlFor="Kabbadi(Men)">Kabbadi(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Chess");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Chess"]}
                ));
                }
            }} type="checkbox" id="Chess" />
            <label className='p-2' htmlFor="Chess">Chess</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Badminton(Women)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Badminton(Women)"]}
                ));
                }
            }} type="checkbox" id="Badminton(Women)"  />
            <label className='p-2' htmlFor="Badminton(Women)">Badminton(Women)</label></div>

            </div>
            <div className='text-white  text-sm text-start'><span className=' font-bold underline underline-offset-4'>Upload Final Registration List</span> <br/>
An Excel sheet containing all the details of the students to their corresponding teams. (The sheet must contain the names of all the participants under their corresponding interested sport. As shown in the Excel sheet) <a href='https://docs.google.com/spreadsheets/d/1GTF69ejITV1VdGLCPXQTcwhm2LmkkRfn/edit#gid=992052622'> <span className='text-[#0071C9]'>Sample </span> </a><input className="pl-0 pt-2 block w-full text-white text-sm file:mr-4 file:px-4 file:py-2 file:text-sm file:border-0 file:rounded-full file:font-semibold file:text-[#0071C9] file:bg-white hover:file:bg-blue-100 hover:file:cursor-pointer" 
            type="file"
            onChange={(event)=>{
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.onload = (event) => {
                const workbook = XLSX.read(event.target.result, { type: "binary" });
                const sheetName = workbook.SheetNames[0];
                const xcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
                setForm((prev)=>(
                    {...prev,elist:xcel}
                ));
                };
                reader.readAsBinaryString(file);
                
            }}
            placeholder="Excel"
            accept=".xlsx"
            /> </div>
            
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,participants:event.target.value}
                ));
                
            }}  autoComplete="off" className=' text-white placeholder:text-xs  outline-none  rounded h-8 p-2 bg-slate-600' type="text" name="name" placeholder='Total Number of Participants'/>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,coaches:event.target.value}
                ));
                
            }}  autoComplete="off" className=' text-white placeholder:text-xs  outline-none  rounded h-8 p-2 bg-slate-600' type="text" name="name" placeholder='Total Number of Coaches'/>
            <div className='text-white font-bold  text-lg text-center'>Payment</div>
            <div className=' text-center  '>You will have to pay a registration fee of Rs.1000 per Head to the below provided bank account details. In case of any discrepancies contact <span className=' font-bold'>6370165043 </span> at the earliest.</div><ul className='font-semibold text-center'><li>Account Number : 37377186107</li><li>Account Holders Name : STUDENT ACTIVITY CENTER - NIT ROURKELA</li><li>IFSC Code : SBIN0002109</li><li>Branch : NIT CAMPUS ROURKELA</li></ul><span className='text-lg text-center font-bold text-red-400 '>Note : Any Sort of Misconduct is highly punishable.</span>
            <hr/>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,transactionid:event.target.value}
                ));
                
            }}  autoComplete="off" className=' text-white placeholder:text-xs  outline-none  rounded h-8 p-2 bg-slate-600' type="text" name="tid" placeholder='Transaction ID/UTR (Transaction Number)'/>
            <div className='text-white  text-sm text-start font-bold'>Screenshot of payment completion<input className="pl-0 pt-2 block w-full text-white text-sm file:mr-4 file:px-4 file:py-2 file:text-sm file:border-0 file:rounded-full file:font-semibold file:text-[#0071C9] file:bg-white hover:file:bg-blue-100 hover:file:cursor-pointer" 
            type="file"
            onChange={(event)=>{
                setFile1(event.target.files[0])
            }}
            placeholder="jpg"
            accept=".jpg"
            /> </div>
            <div className='text-white  text-sm text-start font-bold'>Upload Institute ID or ID Proof of Contingent Leader<input className="pl-0 pt-2 block w-full text-white text-sm file:mr-4 file:px-4 file:py-2 file:text-sm file:border-0 file:rounded-full file:font-semibold file:text-[#0071C9] file:bg-white hover:file:bg-blue-100 hover:file:cursor-pointer" 
            type="file"
            onChange={(event)=>{
                setFile2(event.target.files[0])
                
            }}
            placeholder="jpg"
            accept=".jpg"
            /> </div>
            <div className='block m-auto text-red-500 font-bold text-center'>{error}</div>
            
            <button disabled={submitdisable} onClick={handle} className='text-white  bg-[#0071C9] w-fit block m-auto p-2 rounded-xl hover:text-white' type="submit">Submit</button>
        </form>
       
        </div>
        </div></div> : <div className='h-[fit] text-center p-10  font-[600] text-[20px] font-nidus'>Congratulations,<br/>Your Team has been Succesfully registered<br/><a href="/" ><button className='border-2 text-[15px]  text-center w-[250px] m-auto p-2  mt-8 rounded-xl border-[#0071C9] text-[#0071C9] hover:border-white hover:text-white' type="submit">Home</button></a></div> }
       </div>
   </div>
  )
}

"use client";
import  React from 'react';
import axios from 'axios';
import { useState} from 'react';
import * as XLSX from 'xlsx';



export default function Home() {

    const [file1, setFile1] = useState('');
    const [file2, setFile2] = useState('');

    const [form,setForm]=useState({
        email:"",
        name:"",
        contact:"",
        Wnumber:"",
        events:[],
        elist:[],
        participants:"",
        coaches:"",
        url:[],
        transactionid:""
    })
    const [error,setError]=useState('');
    const [submitdisable,setSubmitdisable]=useState(false);  
    const [success,setSuccess]=useState(true);
    

    const handle = async (e) => {
        
        e.preventDefault();
if ( !form.email || !form.name || form.events.length==0 || form.elist.length==0 || !form.contact || !form.Wnumber  || !form.participants || !form.coaches || !form.transactionid  ){
         
    setError("Fill All Fields Please")
          return ;
      }
        const formData1 = new FormData();
        const formData2 = new FormData();
        formData1.append('file', file1);
        formData2.append('file', file2);
        formData1.append('upload_preset','vriddhi');
        formData2.append('upload_preset','vriddhi');
        
            const list=[]
            const response1 = await fetch(
              'https://api.cloudinary.com/v1_1/dlt7pwi85/image/upload',
              {
                method:'POST',
                body:formData1
              }
            ).then(r=>r.json())
           
            list.push(response1.secure_url)

            const response2 = await fetch(
                'https://api.cloudinary.com/v1_1/dlt7pwi85/image/upload',
                {
                  method:'POST',
                  body:formData2
                }
              ).then(r=>r.json())
             list.push(response2.secure_url)
    
      setError("");
      setSubmitdisable(true);
      setSuccess(false);
      const data =JSON.stringify({
        email:form.email,
        name:form.name,
        contact:form.contact,
        events:form.events,
        elist:form.elist,
        Wnumber:form.Wnumber,
        participants:form.participants,
        coaches:form.coaches,
        url:list,
        transactionid:form.transactionid
        
    })
    console.log(data)
      try{
        await fetch('api/user',{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:data
        })
      } catch(error){
        console.log(error)
      }
    }
      
  return (<div className=' w-[100%] r:h-[100%] h-[100%] bg-[#111A21] pt-[70px]'>
  
       <div className='r:flex grid-flow-col pt-10 gap-10 text-white hidden'>
        <div className='h-[100vh] w-4/12'>
        <div className='text-center sm:text-4xl md:text-5xl lg:text-6xl text-3xl py-8 font-nidus'>
                Register <br/>and<br/>Get Started
            </div>
        </div>
        {success ? <div className='h-[100%] pb-10 block text-white  ' style={{fontFamily:'Roboto, sans-serif'}}  >
            
            <div className='grid grid-cols-2 font-medium'>
            <div className='p-2'>
            <div className='text-md'>
            <div>E-mail</div>
            <input onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,email:event.target.value}
                ));
                
            }}  autoComplete="off" className=' outline-none rounded h-[35px] w-[350px] p-2 mb-4 bg-slate-600' type="email" name="email"/>
            <div>Contact Number (Contingent Leader)</div>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,contact:event.target.value}
                ));
                
            }}  autoComplete="off" className=' outline-none rounded h-[35px] w-[350px] p-2 mb-4 bg-slate-600' type="text" name="number"/>
            <div>
            <div>Confirmed Events</div>
            <div className='grid grid-cols-2 mb-[52px]'>
            <div>
            <input onChange={()=>{
                const index=form.events.indexOf("Cricket(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Cricket(Men)"]}
                ));
                }
                
            }} type="checkbox" id="Cricket(Men)" />
            <label className='p-2' htmlFor="Cricket(Men)">Cricket(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Football(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Football(Men)"]}
                ));
                }
                
            }} type="checkbox" id="Football(Men)"  />
            <label className='p-2' htmlFor="Football(Men)">Football(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Basketball(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Basketball(Men)"]}
                ));
                }
                
                
            }} type="checkbox" id="Basketball(Men)"  />
            <label className='p-2' htmlFor="Basketball(Men)">Basketball(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Volleyball(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Volleyball(Men)"]}
                ));
                }
                
            }} type="checkbox" id="Volleyball(Men)" />
            <label className='p-2' htmlFor="Volleyball(Men)">Volleyball(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Badminton(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Badminton(Men)"]}
                ));
                }
                
            }} type="checkbox" id="Badminton(Men)"  />
            <label className='p-2' htmlFor="Badminton(Men)">Badminton(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Table-Tennis(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Table-Tennis(Men)"]}
                ));
                }
                
            }} type="checkbox" id="Table-Tennis(Men)" />
            <label className='p-2' htmlFor="Table-Tennis(Men)">Table-Tennis(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Kabbadi(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Kabbadi(Men)"]}
                ));
                }
                
            }} type="checkbox" id="Kabbadi(Men)" />
            <label className='p-2' htmlFor="Kabbadi(Men)">Kabbadi(Men)</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Chess");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Chess"]}
                ));
                }
                
            }} type="checkbox" id="Chess" />
            <label className='p-2' htmlFor="Chess">Chess</label></div>
            <div><input onChange={()=>{
                const index=form.events.indexOf("Badminton(Women)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Badminton(Women)"]}
                ));
                }
                
            }} type="checkbox" id="Badminton(Women)"  />
            <label className='p-2' htmlFor="Badminton(Women)">Badminton(Women)</label></div>

            </div>
            <div>Total Number of Participants</div>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,participants:event.target.value}
                ));
                
            }}  autoComplete="off" className=' outline-none rounded h-[35px] w-[350px] p-2 mb-4 bg-slate-600' type="text" name="participants"/>
            </div>
            
            </div></div>
            
            <div className='p-2'>
            <div className='text-md'>
            
            <div>Name (Contingent Leader)</div>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,name:event.target.value}
                ));
                
            }}  autoComplete="off" className=' outline-none rounded h-[35px] w-[350px] p-2 mb-4 bg-slate-600' type="text" name="name"/>
            <div>WhatsApp Number (Contingent Leader)</div>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,Wnumber:event.target.value}
                ));
                
            }}  autoComplete="off" className='outline-none rounded h-[35px] w-[350px] p-2 mb-4 bg-slate-600' type="text" name="wnumber"/>
            <div className='text-white w-[350px] text-start'><span className='underline underline-offset-4'>Upload Final Registration List</span> <br/>
An Excel sheet containing all the details of the students to their corresponding teams. (The sheet must contain the names of all the participants under their corresponding interested sport. As shown in the Excel sheet) <a href='https://docs.google.com/spreadsheets/d/1GTF69ejITV1VdGLCPXQTcwhm2LmkkRfn/edit#gid=992052622'> <span className='text-[#0071C9]'>Sample</span> </a></div>
<input className=" h-fit mb-4 block w-fit text-white text-sm file:mr-4 file:px-4 file:py-2 file:text-sm file:border-0 file:rounded-full file:font-semibold file:text-[#0071C9] file:bg-white hover:file:bg-blue-100 hover:file:cursor-pointer" 
            type="file"
            onChange={(event)=>{
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.onload = (event) => {
                const workbook = XLSX.read(event.target.result, { type: "binary" });
                const sheetName = workbook.SheetNames[0];
                const xcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
                setForm((prev)=>(
                    {...prev,elist:xcel}
                ));
                };
                reader.readAsBinaryString(file);
                
            }}
            placeholder="Excel"
            accept=".xlsx"
            /> 
            <div>Total Number of Coaches</div>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,coaches:event.target.value}
                ));
                
            }}  autoComplete="off" className=' outline-none rounded h-[35px] w-[350px] p-2 mb-4 bg-slate-600' type="text" name="coach"/>
            </div></div>
            </div>
            <div className='bg-gradient-to-br from-[rgb(0,31,78)] to-[rgb(0,5,13)] rounded-lg w-[750px] pb-4 mb-4'>
            <div className='text-center text-2xl h-[300px] p-2 '>Payment<br/><br/><div className='text-lg text-center '>You will have to pay a registration fee of Rs.1000 per Head to the below provided bank account details. In case of any discrepancies contact <span className=' font-bold'>6370165043 </span> at the earliest.</div><br/><ul className='text-lg font-semibold'><li>Account Number : 37377186107</li><li>Account Holders Name : STUDENT ACTIVITY CENTER - NIT ROURKELA</li><li>IFSC Code : SBIN0002109</li><li>Branch : NIT CAMPUS ROURKELA</li></ul><span className='text-lg font-bold text-red-400'>Note : Any Sort of Misconduct is highly punishable.</span><br/></div>
           
            <div className='m-auto w-fit p-10'>
            <div>Transaction ID/UTR<br/><span className='text-sm'>Transaction Number recieved upon completion of payment.</span></div>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,transactionid:event.target.value}
                ));
                
            }}  autoComplete="off" className=' outline-none rounded h-[35px] w-[400px] p-2 mb-4 bg-slate-600' type="text" name="t-id"/>
            <div>Screenshot of Payment Completion</div>
            <input className=" h-fit mb-4 block w-fit text-white text-sm file:mr-4 file:px-4 file:py-2 file:text-sm file:border-0 file:rounded-full file:font-semibold file:text-[#0071C9] file:bg-white hover:file:bg-blue-100 hover:file:cursor-pointer" 
            type="file"
            onChange={(event)=>{
                setFile1(event.target.files[0])
            }}
            placeholder="jpg"
            accept=".jpg"/>
            <div>Upload Institute ID or ID Proof of Contingent Leader</div>
            <input className=" h-fit mb-4 block w-fit text-white text-sm file:mr-4 file:px-4 file:py-2 file:text-sm file:border-0 file:rounded-full file:font-semibold file:text-[#0071C9] file:bg-white hover:file:bg-blue-100 hover:file:cursor-pointer" 
            type="file"
            onChange={(event)=>{
                setFile2(event.target.files[0])
                
            }}
            placeholder="jpg"
            accept=".jpg"/>
            </div>
            </div>
            <div className='w-full justify-center m-auto text-center'>
            <div className='block m-auto text-red-500 text-center'>{error}</div>
            
            <button disabled={submitdisable} onClick={handle} className='border-2 text-center w-[200px] m-auto p-2  mt-8 rounded-xl border-[#0071C9] text-[#0071C9] hover:border-white hover:text-white' type="submit">Submit</button>
            </div>
            
        </div> : <div className='h-[100vh] block text-white ' style={{fontFamily:'Roboto, sans-serif'}} >
        <div className='h-fit pt-[55px] flex font-[600] text-[48px] font-nidus'>
               Your Team has been succesfully Registered
            </div>
          <a href="/"  ><button className='border-2  text-center w-[250px] m-auto p-2  mt-8 rounded-xl border-[#0071C9] text-[#0071C9] hover:border-white hover:text-white' type="submit">Home</button></a>
        </div>}
       </div>
{/*mobile*/}
       <div className='r:hidden text-white font-medium' style={{fontFamily:'Roboto, sans-serif'}}>
       <div className='pt-[8vh]'>
         </div>
         {success ? <div className='-mt-12'><div className=' text-center sm:text-4xl md:text-5xl lg:text-6xl text-3xl py-8 font-nidus '>Register and Get Started</div>
        <div className=' block h-fit mt-4  w-11/12 m-auto bg-[#252b36] rounded p-8'>
        <div> 
        <form className='grid m-auto grid-row-auto gap-6 p-2  '>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,email:event.target.value}
                ));
                
            }}  autoComplete="off" className='text-white placeholder:text-xs   outline-none  rounded h-8 p-2 bg-slate-600' type="email" name="email" placeholder='E-mail' />
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,name:event.target.value}
                ));
                
            }}  autoComplete="off" className=' text-white placeholder:text-xs  outline-none  rounded h-8 p-2 bg-slate-600' type="text" name="name" placeholder='Name (Contingent Leader)' />
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,contact:event.target.value}
                ));
                
            }}  autoComplete="off" className=' text-white placeholder:text-xs  outline-none  rounded h-8 p-2  bg-slate-600' type="text" name="name" placeholder='Contact Number (Contingent Leader)' />
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,Wnumber:event.target.value}
                ));
                
            }}  autoComplete="off" className=' text-white placeholder:text-xs  outline-none  rounded h-8 p-2 bg-slate-600' type="text" name="name" placeholder='Whatsapp Number (Contingent Leader)' />
            <div className='font-bold'>Confirmed Events</div>
            <div className='grid grid-cols-2 text-sm'>
            <div>Cricket(Men)   
            <input onChange={()=>{
                const index=form.events.indexOf("Cricket(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Cricket(Men)"]}
                ));
                
                }
            }} type="checkbox" id="Cricket(Men)" />
            <label className='' htmlFor="Cricket(Men)"></label></div>
            <div>Football(Men)<input onChange={()=>{
                const index=form.events.indexOf("Football(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Football(Men)"]}
                ));
                }
                
            }} type="checkbox" id="Football(Men)"  />
            <label className='' htmlFor="Football(Men)"></label></div>
            <div>Basketball(Men)<input onChange={()=>{
                const index=form.events.indexOf("Basketball(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Basketball(Men)"]}
                ));
                }
            }} type="checkbox" id="Basketball(Men)"  />
            <label className='' htmlFor="Basketball(Men)"></label></div>
            <div>Volleyball(Men)<input onChange={()=>{
                const index=form.events.indexOf("Volleyball(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Volleyball(Men)"]}
                ));
                }
                
            }} type="checkbox" id="Volleyball(Men)" />
            <label className='' htmlFor="Volleyball(Men)"></label></div>
            <div>Badminton(Men)<input onChange={()=>{
                const index=form.events.indexOf("Badminton(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Badminton(Men)"]}
                ));
                }
            }} type="checkbox" id="Badminton(Men)"  />
            <label className='' htmlFor="Badminton(Men)"></label></div>
            <div>Table-Tennis(Men)<input onChange={()=>{
                const index=form.events.indexOf("Table-Tennis(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Table-Tennis(Men)"]}
                ));
                }
            }} type="checkbox" id="Table-Tennis(Men)" />
            <label className='' htmlFor="Table-Tennis(Men)"></label></div>
            <div>Kabbadi(Men)<input onChange={()=>{
                const index=form.events.indexOf("Kabbadi(Men)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Kabbadi(Men)"]}
                ));
                }
            }} type="checkbox" id="Kabbadi(Men)" />
            <label className='' htmlFor="Kabbadi(Men)"></label></div>
            <div>Chess<input onChange={()=>{
                const index=form.events.indexOf("Chess");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Chess"]}
                ));
                }
            }} type="checkbox" id="Chess" />
            <label className='' htmlFor="Chess"></label></div>
            <div>Badminton(Women)<input onChange={()=>{
                const index=form.events.indexOf("Badminton(Women)");
                if (index!==-1){
                    form.events.splice(index,1)
                } else {
                    setForm((prev)=>(
                    {...prev,events:[...form.events,"Badminton(Women)"]}
                ));
                }
            }} type="checkbox" id="Badminton(Women)"  />
            <label className='' htmlFor="Badminton(Women)"></label></div>

            </div>
            <div className='text-white  text-sm text-start'><span className=' font-bold underline underline-offset-4'>Upload Final Registration List</span> <br/>
An Excel sheet containing all the details of the students to their corresponding teams. (The sheet must contain the names of all the participants under their corresponding interested sport. As shown in the Excel sheet) <a href='https://docs.google.com/spreadsheets/d/1GTF69ejITV1VdGLCPXQTcwhm2LmkkRfn/edit#gid=992052622'> <span className='text-[#0071C9]'>Sample </span> </a><input className="pl-0 pt-2 block w-full text-white text-sm file:mr-4 file:px-4 file:py-2 file:text-sm file:border-0 file:rounded-full file:font-semibold file:text-[#0071C9] file:bg-white hover:file:bg-blue-100 hover:file:cursor-pointer" 
            type="file"
            onChange={(event)=>{
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.onload = (event) => {
                const workbook = XLSX.read(event.target.result, { type: "binary" });
                const sheetName = workbook.SheetNames[0];
                const xcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
                setForm((prev)=>(
                    {...prev,elist:xcel}
                ));
                };
                reader.readAsBinaryString(file);
                
            }}
            placeholder="Excel"
            accept=".xlsx"
            /> </div>
            
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,participants:event.target.value}
                ));
                
            }}  autoComplete="off" className=' text-white placeholder:text-xs  outline-none  rounded h-8 p-2 bg-slate-600' type="text" name="name" placeholder='Total Number of Participants'/>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,coaches:event.target.value}
                ));
                
            }}  autoComplete="off" className=' text-white placeholder:text-xs  outline-none  rounded h-8 p-2 bg-slate-600' type="text" name="name" placeholder='Total Number of Coaches'/>
            <div className='text-white font-bold  text-lg text-center'>Payment</div>
            <div className=' text-center  '>You will have to pay a registration fee of Rs.1000 per Head to the below provided bank account details. In case of any discrepancies contact <span className=' font-bold'>6370165043 </span> at the earliest.</div><ul className='font-semibold text-center'><li>Account Number : 37377186107</li><li>Account Holders Name : STUDENT ACTIVITY CENTER - NIT ROURKELA</li><li>IFSC Code : SBIN0002109</li><li>Branch : NIT CAMPUS ROURKELA</li></ul><span className='text-lg text-center font-bold text-red-400 '>Note : Any Sort of Misconduct is highly punishable.</span>
            <hr/>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,transactionid:event.target.value}
                ));
                
            }}  autoComplete="off" className=' text-white placeholder:text-xs  outline-none  rounded h-8 p-2 bg-slate-600' type="text" name="tid" placeholder='Transaction ID/UTR (Transaction Number)'/>
            <div className='text-white  text-sm text-start font-bold'>Screenshot of payment completion<input className="pl-0 pt-2 block w-full text-white text-sm file:mr-4 file:px-4 file:py-2 file:text-sm file:border-0 file:rounded-full file:font-semibold file:text-[#0071C9] file:bg-white hover:file:bg-blue-100 hover:file:cursor-pointer" 
            type="file"
            onChange={(event)=>{
                setFile1(event.target.files[0])
            }}
            placeholder="jpg"
            accept=".jpg"
            /> </div>
            <div className='text-white  text-sm text-start font-bold'>Upload Institute ID or ID Proof of Contingent Leader<input className="pl-0 pt-2 block w-full text-white text-sm file:mr-4 file:px-4 file:py-2 file:text-sm file:border-0 file:rounded-full file:font-semibold file:text-[#0071C9] file:bg-white hover:file:bg-blue-100 hover:file:cursor-pointer" 
            type="file"
            onChange={(event)=>{
                setFile2(event.target.files[0])
                
            }}
            placeholder="jpg"
            accept=".jpg"
            /> </div>
            <div className='block m-auto text-red-500 font-bold text-center'>{error}</div>
            
            <button disabled={submitdisable} onClick={handle} className='text-white  bg-[#0071C9] w-fit block m-auto p-2 rounded-xl hover:text-white' type="submit">Submit</button>
        </form>
       
        </div>
        </div></div> : <div className='h-[fit] text-center p-10  font-[600] text-[20px] font-nidus'>Congratulations,<br/>Your Team has been Succesfully registered<br/><a href="/" ><button className='border-2 text-[15px]  text-center w-[250px] m-auto p-2  mt-8 rounded-xl border-[#0071C9] text-[#0071C9] hover:border-white hover:text-white' type="submit">Home</button></a></div> }
       </div>
   </div>
  )
}

