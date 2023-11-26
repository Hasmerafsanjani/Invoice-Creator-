import React from 'react'

function Notes({notes}) {
  return (
<>
      <section className="mb-5 mt-10 ">
        {/* text area  */}
        <p>Notes to the client : {notes}</p>
      </section>
</>
  )
}

export default Notes