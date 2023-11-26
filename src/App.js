import { useState , useRef } from "react";
import ClintsDetails from "./components/ClintsDetails";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Notes from "./components/Notes";
import Table from "./components/Table";
import MainDetails from "./components/MainDetails";
import Tablefrom from "./components/Tablefrom";
import ReactToPrint from "react-to-print";


function App() {
  const [showInvoice , setSowninvoice] = useState(false)
  const [ name ,setname] = useState("")
  const [ address ,setaddress] = useState("")
  const [phone ,setPhone] = useState("")
  const [email ,setemail] = useState("")
  const [website ,setwebsite] = useState("")
  const [bank  ,setbank] = useState("")
  const [account  ,setaccount] = useState("")
  const [clintName,setclintName] = useState("")
  const [clientAddress ,setclientAddress] = useState("")
  const [InvoiceNumber ,setInvoiceNumber] = useState("") 
  const [invoiceDate ,setinvoiceDate] = useState("")
  const [dueDate ,setdueDate] = useState("")
  const [notes ,setnotes ] = useState("")
  const [description , setDescription ] = useState("")
  const [quantity , setQuantity ] = useState("")
  const [price , setPrice ] = useState("")
  const [amount  , setAmount ] = useState("")
  const [list ,setList ] = useState([])
  const [total , setTotal] = useState(0)

  const componentRef = useRef()


  return (
    <>

    <main className=" m-4 p-4 md:max-w-xl xl:max-w-4xl lg:max-w-2xl  md:mx-auto  bg-white rounded shadow">
     
      {showInvoice ? (
       <>
            <ReactToPrint trigger={() => <button className="bg-blue-500 mt-5 ml-5 py-2 px-2 text-white rounded shadow border-2 font-bold border-blue-500 hover:bg-transparent hover:text-blue-500 hover:font-bold transition-all duration-300" >Print / Download</button>}
      content={() => componentRef.current}
      />
      <div ref={componentRef} className="p-5" >

    <Header/>

    <MainDetails name={name} address={address} />

    <ClintsDetails clintName={clintName} clientAddress={clientAddress} />

      <Dates InvoiceNumber={InvoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />

      <Table 
description={description} 
 quantity={quantity}
 price={price}
 amount={amount} 
 list={list}
 setList={setList}
 total={total}
 setTotal={setTotal}
 />

    <Notes notes={notes}/>

    <Footer
 name={name}
 address={address} 
 website={website} 
 email={email}
 bankName={bank}
 phone={phone}
 account={account}
 />
  </div> 
<button className="bg-blue-500 mt-5 py-2 px-2 rounded shadow border-2 font-bold text-white border-blue-500 hover:bg-transparent hover:text-blue-500 hover:font-bold transition-all duration-300" onClick={()=> setSowninvoice(false)}> Edit Information </button>

      </>
      ) : (

          // after this  invoice  input will be taken  means this is defoult  

          
          // if( name == "" || address == "" || phone  == "" ||  bank == "" ||account == "" || clintName == "" || clientAddress == "" || InvoiceNumber == "" ||   invoiceDate == "" ){
    //  alert("fill the from")
          // }
          // else{


       <>
           <div className="flex flex-col justify-centeri">
          <article className="md:grid grid-cols-2 gap-2">
            <div className="flex flex-col">
            <label htmlFor="name">Enter Your Name</label>
           <input className="" 
          type="text" 
          name="text" 
          id="name" 
          value={name}
          placeholder="Enter your Name"
          autoComplete="off"
          onChange={(e)=>setname(e.target.value)}
          />
            </div>
           <div className="flex flex-col" >
             <label htmlFor="name">Enter Your Address</label>
           <input className="" 
          type="text" 
          name="address" 
          id="address" 
          value={address}
          placeholder="Enter your address"
          autoComplete="off"
          onChange={(e)=>setaddress(e.target.value)}
          />
           </div>
           </article>

           <article className="md:grid grid-cols-3 gap-10">
            <div className="flex flex-col">
            <label htmlFor="name">Enter Your Email</label>
           <input className="" 
          type="email" 
          name="email" 
          id="email" 
          value={email}
          placeholder="Enter your email"
          autoComplete="off"
          onChange={(e)=>setemail(e.target.value)}
          />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name">Enter Your Phone No</label>
           <input className="" 
          type="number" 
          name="phone" 
          id="phone" 
          value={phone}
          placeholder="Enter your phone"
          autoComplete="off"
          onChange={(e)=>setPhone(e.target.value)}
          /></div>
            <div className="flex flex-col">
            <label htmlFor="website">Enter Your Website</label>
           <input className="" 
          type="url" 
          name="website" 
          id="website" 
          value={website}
          placeholder="Enter your website"
          autoComplete="off"
          onChange={(e)=>setwebsite(e.target.value)}
          />
            </div>
           </article>
         
           <article className="md:grid grid-cols-2 gap-10">
            <div className="flex flex-col">
            <label htmlFor="website">Enter Your Bank Name</label>
           <input className="" 
          type="text" 
          name="bank" 
          id="website" 
          value={bank}
          placeholder="Bank Name"
          autoComplete="off"
          onChange={(e)=>setbank(e.target.value)}
          />
            </div>
           <div className="flex flex-col" >
           <label htmlFor="website">Enter Your Account No</label>
           <input className="" 
          type="text" 
          name="account" 
          id="website" 
          value={account}
          placeholder="Account Number"
          autoComplete="off"
          onChange={(e)=>setaccount(e.target.value)}
          />
           </div>
           </article>
        
        {/* client details  */}
        
           <article className="md:grid grid-cols-2 gap-10 md:mt-16">
            <div className="flex flex-col">
            <label htmlFor="website">Enter Client Name</label>
           <input className="" 
          type="text" 
          name="clintName" 
          id="website" 
          value={clintName}
          placeholder="Client Name"
          autoComplete="off"
          onChange={(e)=>setclintName(e.target.value)}
          />
            </div>
           <div className="flex flex-col" >
           <label htmlFor="website">Enter Client Address</label>
           <input className="" 
          type="text" 
          name="clientAddress" 
          id="website" 
          value={clientAddress}
          placeholder="Client Address"
          autoComplete="off"
          onChange={(e)=>setclientAddress(e.target.value)}
          />
           </div>
           </article>

           <article className="md:grid grid-cols-3 gap-10">
            <div className="flex flex-col">
            <label htmlFor="website">Enter Invoice Number</label>
           <input className="" 
          type="text" 
          name="InvoiceNumber" 
          id="website" 
          value={InvoiceNumber}
          placeholder="Invoice Number"
          autoComplete="off"
          onChange={(e)=>setInvoiceNumber(e.target.value)}
          />
            </div>
           <div className="flex flex-col" >
           <label htmlFor="invoiceDate">Enter Invoice Date</label>
           <input className="" 
          type="date" 
          name="invoiceDate" 
          id="invoiceDate" 
          value={invoiceDate}
          onChange={(e)=>setinvoiceDate(e.target.value)}
          />
           </div>
           <div className="flex flex-col" >
           
           <label htmlFor="website">Enter Due Date</label>
           <input className="" 
          type="date" 
          name="dueDate" 
          id="website" 
          value={dueDate}
          autoComplete="off"
          onChange={(e)=>setdueDate(e.target.value)}
          />
           </div>
           </article>

          <Tablefrom 
          description={description} 
          setDescription = {setDescription} 
          price={price} 
          setPrice={setPrice}
          amount={amount} 
          setAmount={setAmount}
          quantity={quantity}
          setQuantity={setQuantity}
          list={list} 
          setList={setList}
          total={total}
          setTotal={setTotal}
          />

            <label htmlFor="website">Write Additional notes for Client</label>
           <textarea 
          type="text" 
          name="notes" 
          id="notes" 
          rows={5}
          cols={30}
          value={notes}
          placeholder="Additional notes for client"
          autoComplete="off"
          onChange={(e)=>setnotes(e.target.value)}
          />
          <button onClick={()=>setSowninvoice(true)} className=" mt-5 bg-green-500 py-2 px-0 rounded shadow border-2 border-blue-500 font-bold text-white hover:bg-transparent hover:text-blue-500 hover:font-bold transition-all duration-300" >Create Invoice</button>
           </div>
       </> 
                 // }
      ) }

    </main>
    </> 
  );
}

export default App;

