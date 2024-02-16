
// import React, { useState } from 'react';
// import './SitePage.css';

// const SitePage: React.FC = () => {
//   const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

//   const handleSeatClick = (seat: string) => {
//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(selectedSeats.filter(s => s !== seat));
//     } else if (selectedSeats.length < 5) {
//       setSelectedSeats([...selectedSeats, seat]);
//     } else {
//       const newSelectedSeats = [...selectedSeats.slice(1), seat];
//       setSelectedSeats(newSelectedSeats);
//     }
//   };

//   const isSeatSelected = (seat: string) => selectedSeats.includes(seat);

//   return (
//     <div >
//       <div className="site-page" >
//         <div className="movie-screen">
//         <h2>Movie Screen</h2>
//         </div>
//         <div className="seat-map">
//         {[...Array(8)].map((_, rowIndex) => (
//           <div key={rowIndex} className="seat-row">
//             {[...Array(20)].map((_, colIndex) => {
//               const seat = `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;
//               console.log("seat------",seat)
//               const isSelected = isSeatSelected(seat);
//               return (
//                 <div
//                   key={colIndex}
//                   className={`seat ${isSelected ? 'selected' : ''}`}
//                   onClick={() => handleSeatClick(seat)}
//                 >
//                   {seat}
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//         </div>
//       </div>
//       <div>
            

//       </div>
//     </div>
//   );
// };

// export default SitePage;



// import React, { useState } from 'react';
// import './SitePage.css';

// const SitePage: React.FC = () => {
//   const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
//   const [totalPrice, setTotalPrice] = useState<number>(0); // State to store the total price

//   const handleSeatClick = (seat: string) => {
//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(selectedSeats.filter(s => s !== seat));
//     } else if (selectedSeats.length < 5) {
//       setSelectedSeats([...selectedSeats, seat]);
//     } else {
//       const newSelectedSeats = [...selectedSeats.slice(1), seat];
//       setSelectedSeats(newSelectedSeats);
//     }
//   };

//   const isSeatSelected = (seat: string) => selectedSeats.includes(seat);

//   // Calculate total price based on the number of selected seats and price per seat
//   const calculateTotalPrice = () => {
//     const pricePerSeat = 50; // Price per seat (50 Rp)
//     const totalPrice = selectedSeats.length * pricePerSeat;
//     return totalPrice;
//   };

//   // Update total price whenever selected seats change
//   React.useEffect(() => {
//     const newTotalPrice = calculateTotalPrice();
//     setTotalPrice(newTotalPrice);
//   }, [selectedSeats]);

//   return (
//     <div>
//       <div className="site-page">
//         <div className="movie-screen">
//           <h2>Movie Screen</h2>
//         </div>
//         <div className="seat-map">
//           {[...Array(8)].map((_, rowIndex) => (
//             <div key={rowIndex} className="seat-row">
//               {/* Display seat numbers in a row */}
//               <span className="seat-number">Row {String.fromCharCode(65 + rowIndex)}</span>
//               {[...Array(20)].map((_, colIndex) => {
//                 const seat = `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;
//                 const isSelected = isSeatSelected(seat);
//                 return (
//                   <div
//                     key={colIndex}
//                     className={`seat ${isSelected ? 'selected' : ''}`}
//                     onClick={() => handleSeatClick(seat)}
//                   >
//                     {seat}
//                   </div>
//                 );
//               })}
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className='sitepage-layout-text'>
//              <h2>Layar Bioskop Disini</h2>
//       </div>
//       <div className='totalprice-button-section'>
//         <div>
//               <div>Total </div>
//               <div> {totalPrice}</div>
//         </div>
//         <div>
//               <div>Total Sets </div>
//               <div> {totalPrice}</div>

//         </div>
//         <div>

//         </div>
//         <div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default SitePage;



import React, { useState } from 'react';
import './SitePage.css';
import { NavLink } from 'react-router-dom';

const SitePage: React.FC = () => {

  
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0); // State to store the total price

  const handleSeatClick = (seat: string) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else if (selectedSeats.length < 5) {
      setSelectedSeats([...selectedSeats, seat]);
    } else {
      const newSelectedSeats = [...selectedSeats.slice(1), seat];
      setSelectedSeats(newSelectedSeats);
    }
  };

  const isSeatSelected = (seat: string) => selectedSeats.includes(seat);

  // Calculate total price based on the number of selected seats and price per seat
  const calculateTotalPrice = () => {
    const pricePerSeat = 50; // Price per seat (50 Rp)
    const totalPrice = selectedSeats.length * pricePerSeat;
    return totalPrice;
  };

  // Update total price whenever selected seats change
  React.useEffect(() => {
    const newTotalPrice = calculateTotalPrice();
    setTotalPrice(newTotalPrice);
  }, [selectedSeats]);

  return (
    <div>
      <div >
         <div className='sitepage-heading'>
           <div><h2 className='sitepage-h-h'>PILIH KURSI</h2></div>
           <div><p className='sitepage-h-p'>Pilih kursi yang akan kamu tempati selama pemutaran film</p></div>
          </div>
      </div> 

      <div className="site-page">
        <div className="movie-screen">
          <h2>Movie Screen</h2>
        </div>
        <div className="seat-map">
          {[...Array(8)].map((_, rowIndex) => (
            <div key={rowIndex} className="seat-row">
              {[...Array(20)].map((_, colIndex) => {
                const seat = `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;
                const isSelected = isSeatSelected(seat);
                return (
                  <div
                    key={colIndex}
                    className={`seat ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleSeatClick(seat)}
                  >
                    {seat}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className='sitepage-layout-text'>
             <h2>Layar Bioskop Disini</h2>
     </div>

      <div className='totalprice-button-section'>
        <div className='totalprice-sets'>
            <div className='totalprice'>
                <div className='total'><h4>Total</h4></div>
                <div className='totalprice'><h2>Rp {totalPrice}.000</h2></div>
            </div>
           
        </div>
        <div>
            <div className='total'><h4>Total Sets</h4> </div>
            <div className='totalprice'><h2>{selectedSeats.join(', ')}</h2></div>
        </div>
        <div className='button-book'>
            {/* <div  >Kembali</div> */}
            <NavLink to={"/confirm_payment"} className='but but-1'>Kembali</NavLink>
            <NavLink to={""} className='but but-2'>KONFIRMASI</NavLink>
            {/* <div className='but but-2'>KONFIRMASI</div> */}
        </div>
       

        
      </div>

    </div>
  );
};

export default SitePage;






























// import React, { useState } from 'react';
// import './SitePage.css';

// const SitePage: React.FC = () => {
//   const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

//   const handleSeatClick = (seat: string) => {
//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(selectedSeats.filter(s => s !== seat));
//     } else if (selectedSeats.length < 5) {
//       setSelectedSeats([...selectedSeats, seat]);
//     } else {
//       // User has already selected 5 seats, unselect the first seat and select the new one
//       const newSelectedSeats = [...selectedSeats.slice(1), seat];
//       setSelectedSeats(newSelectedSeats);
//     }
//   };

//   const isSeatSelected = (seat: string) => selectedSeats.includes(seat);

//   return (
//     <div className="seat-map">
//       {[...Array(8)].map((_, rowIndex) => (
//         <div key={rowIndex} className="seat-row">
//           {[...Array(20)].map((_, colIndex) => {
//             const seat = `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;
//             const isSelected = isSeatSelected(seat);
//             return (
//               <div
//                 key={colIndex}
//                 className={`seat ${isSelected ? 'selected' : ''}`}
//                 onClick={() => handleSeatClick(seat)}
//               >
//                 {seat}
//               </div>
//             );
//           })}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SitePage;


// selected sit display react page------------

// import React, { useState } from 'react';
// import './SitePage.css';

// const SitePage: React.FC = () => {
//   const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

//   const handleSeatClick = (seat: string) => {
//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(selectedSeats.filter(s => s !== seat));
//     } else if (selectedSeats.length < 5) {
//       setSelectedSeats([...selectedSeats, seat]);
//     } else {
//       const newSelectedSeats = [...selectedSeats.slice(1), seat];
//       setSelectedSeats(newSelectedSeats);
//     }
//   };

//   const isSeatSelected = (seat: string) => selectedSeats.includes(seat);

//   return (
//     <div>
//       <div className="seat-map">
//         {[...Array(8)].map((_, rowIndex) => (
//           <div key={rowIndex} className="seat-row">
//             {[...Array(10)].map((_, colIndex) => {
//               const seat = `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;
//               const isSelected = isSeatSelected(seat);
//               return (
//                 <div
//                   key={colIndex}
//                   className={`seat ${isSelected ? 'selected' : ''}`}
//                   onClick={() => handleSeatClick(seat)}
//                 >
//                   {seat}
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//         <div className="gap" />
//         {[...Array(8)].map((_, rowIndex) => (
//           <div key={rowIndex} className="seat-row">
//             {[...Array(10)].map((_, colIndex) => {
//               const seatNumber = colIndex + 11;
//               const seat = `${String.fromCharCode(65 + rowIndex)}${seatNumber}`;
//               const isSelected = isSeatSelected(seat);
//               return (
//                 <div
//                   key={colIndex}
//                   className={`seat ${isSelected ? 'selected' : ''}`}
//                   onClick={() => handleSeatClick(seat)}
//                 >
//                   {seat}
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </div>
//       <div >
//         <h2>Selected Seats:</h2>
//         <ul>
//           {selectedSeats.map(seat => (
//             <li key={seat}>{seat}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SitePage;



//selected site display in console ----------------

// import React, { useState } from 'react';
// import './SitePage.css';

// const SitePage: React.FC = () => {
//   const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

//   const handleSeatClick = (seat: string) => {
//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(selectedSeats.filter(s => s !== seat));
//     } else if (selectedSeats.length < 5) {
//       setSelectedSeats([...selectedSeats, seat]);
//     } else {
//       const newSelectedSeats = [...selectedSeats.slice(1), seat];
//       setSelectedSeats(newSelectedSeats);
//     }
//   };

//   const isSeatSelected = (seat: string) => selectedSeats.includes(seat);

//   // Output selected seats to the console
//   console.log('Selected Seats:', selectedSeats);

//   return (
//     <div className="seat-map">
//       {[...Array(8)].map((_, rowIndex) => (
//         <div key={rowIndex} className="seat-row">
//           {[...Array(20)].map((_, colIndex) => {
//             const seat = `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;
//             const isSelected = isSeatSelected(seat);
//             return (
//               <div
//                 key={colIndex}
//                 className={`seat ${isSelected ? 'selected' : ''}`}
//                 onClick={() => handleSeatClick(seat)}
//               >
//                 {seat}
//               </div>
//             );
//           })}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SitePage;

