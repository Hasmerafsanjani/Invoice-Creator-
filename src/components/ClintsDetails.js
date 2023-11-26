import React from 'react'

function ClintsDetails({clintName , clientAddress}) {
  return (
    <section className="mt-5 ">
    <h2 className=" text-2xl uppercase"> {clintName} </h2>
    <p > {clientAddress}</p>
    </section>
  )
}

export default ClintsDetails