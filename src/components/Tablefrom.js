import React, { useEffect, useState } from 'react'
import {v4 as uuidb4} from  'uuid'

function Tablefrom({
    description ,
    setDescription , 
    price ,
    setPrice,
    amount,
    setAmount,
    quantity,
    setQuantity,
    list,
    setList,
    total,
    setTotal
    }) {
        const [isEditiong , setIsEditing] = useState(false)

        // submit button for 

        const handlesubmit = (e)=>{
            e.preventDefault()
                if(!description || !quantity || !price ){
                        alert("please add item correctly ")
                }
                else{
                    const newItems = {
                        id: uuidb4(),
                        description,
                        quantity,
                        price,
                        amount
                    } 
                    setDescription("")
                    setAmount("")
                    setQuantity("")
                    setPrice("")
                    setList([...list, newItems])
                    setIsEditing(false)
                }
        
        }


        // calculate item amount function
       useEffect(()=>{
        const calculateAmount = ()=>{
            setAmount(quantity*price)
        }
        calculateAmount(amount)
       },[amount,price,quantity,setAmount] )

    //    calculate total amount
     useEffect(()=>{
        let rows = document.querySelectorAll(".amount")
        let sum = 0
    
        for ( let i = 0 ; i < rows.length ; i++ ){
            if(rows[i].className === "amount"){
                sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML )
                setTotal(sum)
            }
        }
     })
    
        // edit btn function 
        const editRow = (id) =>{
            const editingRow = list.find((row)=> row.id===id) 
            setList(list.filter((row)=> row.id !== id))
            setIsEditing(true)
            setDescription(editingRow.description)
            setPrice(editingRow.price)
            setQuantity(editingRow.quantity)

        }

        // delete btn function 
        const deleterRow =(id)=> setList(list.filter((row)=> row.id !== id))


        

  return (
    <>
    <form onSubmit={handlesubmit}>
    <div className='flex flex-col mt-10'>
   <label htmlFor="description">Item description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Item description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
     </div>
        <div className='md:grid grid-cols-3 gap-4'>
        <div className='flex flex-col'>
   <label htmlFor="quantity">Quantity</label>
          <input
            type="text"
            name="quantity"
            id="quantity"
            placeholder="Item quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
     </div>
    <div className='flex flex-col'>
   <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Item price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
     </div>
    <div className='flex flex-col'>
   <label htmlFor="amount">Amount</label>
         <p>{amount}</p>
     </div>
        </div>
        <button type='submit' className=" mb-5 bg-green-500 p-2 text-white font-bold rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 hover:font-bold transition-all duration-300" >
            {isEditiong ? "Editing Item" : "Add Table Item" }
         </button>
    </form>

        <table width="100%" className="mb-10">
<thead>
  <tr className="bg-gray-100 p-1">
    <td className="font-bold">Description</td>
    <td className="font-bold">Quantity</td>
    <td className="font-bold">Price</td>
    <td className="font-bold">Amount</td>
  </tr>
</thead>
        {list.map(({ id , description , price , quantity , amount })=>(
<React.Fragment key={id}>
    <tbody>
      <tr className="h-10">
        <td>{description}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td className='amount' >{amount}</td>
        <td><button className='text-xl' onClick={()=>editRow(id)}>✏️</button></td>
        <td><button className='text-xl' onClick={() => deleterRow(id)}>❌</button></td>
      </tr>
    </tbody>
</React.Fragment>
        ))}
        </table>
        <div>
            <h2 className='text-2xl font-bold flex justify-end pr-6'> Rs : {total.toLocaleString()}.00</h2>
        </div>

    </>
  )
}

export default Tablefrom;

