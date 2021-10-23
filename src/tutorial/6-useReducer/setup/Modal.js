//1.reducer
// import React, { useEffect } from 'react'

// const Modal = () => {
//   return <div>im modal</div>
// }

// export default Modal

//2.reducer
// import React, { useEffect } from 'react'

// const Modal = ({modalContent}) => {
//   return <div className='modal'>
//     <p>{modalContent}</p>
//       </div>

// export default Modal

import React, { useEffect } from 'react'

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal()
    }, 3000)
  })
  return (
    <div className='modal'>
      <p>{modalContent}</p>
    </div>
  )
}

export default Modal
