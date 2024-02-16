// import React from 'react'

// const ConfirmPayment = () => {
//   return (
//     <div>
//         <div className="pay-heading">
//             <div>KONFIRMASI PEMBAYARAN</div>
//             <div>Konfirmasi pembayaran dari kursi yang anda pesan</div>
//         </div>
//         <div className='pay-details'>
//             <div className="pay-left-part">

//         </div>
//         <div className="pay-right-part">
            
//         </div>
//         </div>
//     </div>
//   )
// }

// export default ConfirmPayment


import React from 'react';
import Navbar from '../../components/Home/Navbar';
import { useLocation } from 'react-router-dom';

const Con_Pay_HomePage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const totalPrice = searchParams.get('totalPrice');
  const selectedSeats = searchParams.get('selectedSeats');

  return (
    <div>
      <Navbar />
      <div>
        <h2>Total Price: {totalPrice}</h2>
        <h2>Selected Seats: {selectedSeats}</h2>
      </div>
    </div>
  );
};

export default Con_Pay_HomePage;
