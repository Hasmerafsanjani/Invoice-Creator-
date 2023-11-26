import React from 'react'

function Footer({name, email , website , address , phone , bankName , account }) {
  return (
 <>
 <footer className='footer border-t-2 border-gray-300 pt-5'>
   <ul className="flex flex-wrap items-center justify-center ">
        <li><span className="font-bold" > Your name :</span>{name}</li>
        <li><span  className="font-bold" >Your email :</span> {email}</li>
        <li><span  className="font-bold" >Phone no :</span> {phone} </li>
        <li><span  className="font-bold" >Address :</span> {address} </li>
        <li><span  className="font-bold" >Bank : </span>{bankName}</li>
        <li><span  className="font-bold" >Account Holder : </span>{name}</li>
        <li><span  className="font-bold" >Account no :</span>{account}</li>
        <li><span  className="font-bold" >Website : </span> <a href={website} target='_blank'>{website}</a></li>
      </ul>
      </footer>
 </>
  )
}
Footer.defaultProps = {
    phone: 'Not provided',
    bankName: 'Not provided',
    accountHolder: 'Not provided',
    accountNo: 'Not provided',
  }
export default Footer