"use client";
import  React from 'react';
import Image from 'next/image';
import { useState} from 'react';
import * as XLSX from 'xlsx';


export default function Home() {

    const [form,setForm]=useState({
        email:"",
        name:"",
        contact:"",
        Wnumber:"",
        events:[],
        elist:[],
        participants:"",
        coaches:""
    })
    const [error,setError]=useState('');
    const [submitdisable,setSubmitdisable]=useState(false);  
    const [success,setSuccess]=useState(true);

    const handle = async (e) => {
        
        e.preventDefault();
        if ( !form.email || !form.name || form.events.length==0 || form.elist.length==0 || !form.contact || !form.Wnumber  || !form.participants || !form.coaches ){
          setError("Fill All Fields Please")
          return ;
      }
      console.log(form)
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
        coaches:form.coaches
    })
      try{
        await fetch('http://localhost:3000/api/user',{
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
      
  return (<div className=' w-[100%] mdz:h-[100vh] h-[100%] bg-[#111A21]'>
       <div className='mdz:flex grid-flow-col gap-10 text-white hidden'>
        <div className='h-[100vh] w-4/12'>
        <Image className='block m-auto pt-[45vh]'
        src='/images/VRIDDHI.png'
        alt='logo'
        height={300}
        width={300}
         />
        </div>
        {success ? <div className='h-[100vh] block text-white ' style={{fontFamily:'Roboto, sans-serif'}}  >
            <div className='h-fit pt-[55px] flex font-[600] text-[48px]'>
                Registrations
            </div>
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
            <div className='grid grid-cols-2 mb-4'>
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
            <div>Total Number of Coaches</div>
            <input  onChange={(event)=>{
                setForm((prev)=>(
                    {...prev,coaches:event.target.value}
                ));
                
            }}  autoComplete="off" className=' outline-none rounded h-[35px] w-[350px] p-2 mb-4 bg-slate-600' type="text" name="coach"/>
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
                
            }}  autoComplete="off" className=' outline-none rounded h-[35px] w-[350px] p-2 mb-4 bg-slate-600' type="text" name="wnumber"/>
            <div className='text-white w-[350px] text-start'><span className='underline underline-offset-4'>Upload Final Registration List</span> <br/>
An Excel sheet containing all the details of the students to their corresponding teams. (The sheet must contain the names of all the participants under their corresponding interested sport. As shown in the Excel sheet) <a href='https://docs.google.com/spreadsheets/d/1GTF69ejITV1VdGLCPXQTcwhm2LmkkRfn/edit#gid=992052622'> <span className='text-[#0071C9]'>Sample</span> </a></div>
<input className="pl-0 pt-10 block w-full text-white text-sm file:mr-4 file:px-4 file:py-2 file:text-sm file:border-0 file:rounded-full file:font-semibold file:text-[#0071C9] file:bg-white hover:file:bg-blue-100 hover:file:cursor-pointer" 
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
            
            </div><button disabled={submitdisable} onClick={handle} className='border-2 text-center w-[350px] m-auto p-2  mt-8 rounded-xl border-[#0071C9] text-[#0071C9] hover:border-white hover:text-white' type="submit">Submit</button></div>
            </div>
            <div className='block m-auto text-red-500 text-center'>{error}</div>
        </div> : <div className='h-[100vh] block text-white ' style={{fontFamily:'Roboto, sans-serif'}} >
        <div className='h-fit pt-[35vh] flex font-[600] text-[48px]'>
               Your Team has been succesfully Registered
            </div>
        </div>}
       </div>

       <div className='mdz:hidden text-white font-medium' style={{fontFamily:'Roboto, sans-serif'}}>
       <div className='pt-[8vh]'>
        <Image className='block m-auto'
        src='/images/VRIDDHI.png'
        alt='logo'
        height={300}
        width={300}
         />
         </div>
         {success ? <div><div className=' text-[35px] m-2 font-[600] text-center'>Registrations</div>
        <div className=' block h-fit mt-4  w-11/12 m-auto bg-[#252b36] rounded p-10'>
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
            <div>Confirmed Events</div>
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
            <div className='text-white  text-sm text-start'><span className='underline underline-offset-4'>Upload Final Registration List</span> <br/>
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
            <button disabled={submitdisable} onClick={handle} className='text-white  bg-[#0071C9] w-fit block m-auto p-2 rounded-xl hover:text-white' type="submit">Submit</button>
        </form>
       
        </div>
        </div></div> : <div className='h-screen text-center p-10  font-[600] text-[20px]'>Your Team has been Succesfully registered</div> }
       </div>
   </div>
  )
}
