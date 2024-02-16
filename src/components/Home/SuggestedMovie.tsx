//static data------------------------------------

// import React from 'react'
// import './SuggestedMovie.css'

// const SuggestedMovie = () => {
//   return (
//     <div>
//          <div className="text-after-add1">
//             <div className="lefttext-after">
//                 <h3 className="textheader">Akan Datang</h3>
//                 <p>Tunggu kehadirannya di bioskop kesayangan kamu!</p>
//             </div>
//             <div className="righttext-after"><a>Lihat Semua</a></div>
//         </div>

//         {/* <!-- movie suggest --> */}

//         <div className="main-container">

//             {/* <!-- First Img --> */}
//             <div className="first-container">
//                 <div className="first-con-img">
//                     <img src="./img/The Matrix Resurrections.png"/>
//                 </div>
//                 <div className="first-con-info">
//                     <div className="first-con-head"><h3>The Matrix: Resurrections</h3></div>
//                     <div className="premium-group">
//                         <div className="insidediv">
//                             <div className="premium1">XXI</div>
//                             <div className="premium2">CGV</div>
//                             <div className="premium3">CINEPOLIS</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* <!-- Second Img --> */}
//             <div className="first-container">
//                 <div className="first-con-img">
//                     <img src="./img/Picture.png"/>
//                 </div>
//                 <div className="first-con-info">
//                     <div className="first-con-head">
//                         <h3>Resident Evil: Welcome to Raccoon City</h3>
//                     </div>
//                     <div className="premium-group">
//                         <div className="insidediv">
//                             <div className="premium1">XXI</div>
//                             <div className="premium2">CGV</div>
//                             <div className="premium3">CINEPOLIS</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* <!-- Third Img --> */}
//             <div className="first-container">
//                 <div className="first-con-img">
//                     <img src="./img/Picture (1).png"/>
//                 </div>
//                 <div className="first-con-info">
//                     <div className="first-con-head">
//                         <h3>Sword Art Online: Progressive - Aria of a Starless Night</h3>
//                     </div>
//                     <div className="premium-group">
//                         <div className="insidediv">
//                             <div className="premium1">XXI</div>
//                             <div className="premium2">CGV</div>
//                             <div className="premium3">CINEPOLIS</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         {/* <!-- </div> -->      */}
        

//     </div>
//     <hr className="hr"></hr>
//     </div>
//   )
// }

// export default SuggestedMovie






//dynamic data ----------------------------------------------------
import React from 'react';
import { Movie } from '../Data/UpcomingMovies'; // Import the Movie interface
import UpcomingMovies from '../Data/UpcomingMovies'; // Import the UpcomingMovies array
import { NavLink } from 'react-router-dom';
import './SuggestedMovie.css';
import { useNavigate } from 'react-router-dom'; 

const SuggestedMovie = () => {
  // Slice the UpcomingMovies array to get only the first three movies
  // const suggestedMovies: Movie[] = UpcomingMovies.slice(0, 3);
  const suggestedMovies: Movie[] = UpcomingMovies
  const navigate = useNavigate(); 

  const handleClick = (movieid: string) => {
    navigate(`/upcomming/${movieid}`);
    console.log(movieid) // Navigate to the movie details page
  };

  return (
    <div>
      <div className="text-before-add">
        <div className="lefttext">
          <div>
            <h3 className="textheader">TIX ID News</h3>
          </div>
          <div>
            <p>Berita tentang dunia perfilman terbaru untuk anda!</p>
          </div>
        </div>
        <div className="righttext">
          <NavLink to="/upcomming">Lihat Semua</NavLink> 
        </div>
      </div>

      <div className="suggested-container">
        {suggestedMovies.map((movie: Movie) => (
          <div
            className="suggested-card"
            key={movie.id}
            onClick={() => handleClick(movie.id)} // Pass movie name to handleClick
          >
           <div className="suggested-image-container">
              <img src={movie.image} className="suggested-image" alt="Description"/>
            </div>

            <div className="suggested-details">
              <div className='suggested-details-part'>
                <div className="suggested-tag">
                  <div className='suggested-border'>{movie.tag}</div>
                </div>
                <h2 className="suggested-title">{movie.name}</h2>
                <div className="suggested-releasedate">{movie.releaseDate}</div>
              </div>
              <div className="sug-premium-type">
                <div className="prem-1 pad">{movie.type1}</div>
                <div className="prem-2 pad">{movie.type2}</div>
                <div className="prem-3 pad">{movie.type3}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr/>
    </div>
  );
};

export default SuggestedMovie;
