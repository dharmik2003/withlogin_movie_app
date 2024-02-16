// import React from 'react';
// import { Movie } from '../Data/UpcomingMovies'; // Import the Movie interface
// import UpcomingMovies from '../Data/UpcomingMovies'; // Import the UpcomingMovies array
// import { useNavigate } from 'react-router-dom';
// // import './HomeMovieBlog.css'  apply this css
// import { NavLink } from 'react-router-dom';

// const HomeUpcommingPage = () => {
//   const navigate = useNavigate();
//   const goToBack = () => {
//     navigate(-1);
//   };
//   return (
//     <div className='blog-poster-movie-main-con'>
//       <div onClick={goToBack}>
//         <h1 className="back-but">Back</h1>
//       </div>
//       <div>
//         {UpcomingMovies.map((movie: Movie) => (
//           <NavLink to={`/upcomming/${movie.name}`}  className='blog-one-con'>
        
//           <div className='blog-img'>
//             <img src={movie.image} alt={movie.name} />
//           </div>
          
//           <div className='blog-details'>
//           <span className='blog-tag'>{movie.tag}</span><h2  className='blog-title'>{movie.name}</h2>
//             <p><span className='blog-rele-date'>Description :  </span><span className='blog-desc'>{movie.description}</span></p>
//           <p>Release Date: {movie.releaseDate}</p>
//            <p><span className='blog-date '>{movie.releaseDate}</span></p>
//             <div className="premium-type postions">
//                 <div className="prem-1 pad">{movie.type1}</div>
//                 <div className="prem-2 pad">{movie.type2}</div>
//                 <div className="prem-3 pad">{movie.type3}</div>
//             </div>
//         </div>
        
//         </NavLink>
//       ))}
//       </div>
//     </div>
//   );
// }

// export default HomeUpcommingPage;

import React, { useEffect } from 'react';
import { Movie } from '../Data/UpcomingMovies';
import UpcomingMovies from '../Data/UpcomingMovies';
import { useNavigate } from 'react-router-dom';
//  import './HomeMovieBlog.css'; // Import the CSS file with correct path
import { NavLink } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';

const HomeUpcommingPage = () => {
  const navigate = useNavigate();
  const goToBack = () => {
    navigate(-1);
  };
    useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the window when the component mounts
  }, []);
  return (
   <div>
    <Navbar/>
     <div className='blog-poster-movie-main-con'>
      <div>
        {/* {UpcomingMovies.map((movie: Movie,index) => (
          <NavLink to={`/upcomming/${encodeURIComponent(movie.name)}`} key={movie.id} className='blog-one-con'>
            <div className='blog-img'>
              <img src={movie.image} alt={movie.name} />
            </div>
            <div className='blog-details'>
              <span className='blog-tag'>{movie.tag}</span>
              <h2 className='blog-title'>{movie.name}</h2>
              <p><span className='blog-rele-date'>Description : </span><span className='blog-desc'>{movie.description}</span></p>
              <p>Release Date: {movie.releaseDate}</p>
              <p><span className='blog-date'>{movie.releaseDate}</span></p>
              <div className="premium-type postions">
                <div className="prem-1 pad">{movie.type1}</div>
                <div className="prem-2 pad">{movie.type2}</div>
                <div className="prem-3 pad">{movie.type3}</div>
              </div>
            </div>
          </NavLink>
        ))} */}

        {UpcomingMovies.map((movie, index) => (
  <div key={index} className='blog-one-con'>
    {index % 2 === 0 ? ( // Alternate display pattern based on index
      <NavLink to={`/upcomming/${encodeURIComponent(movie.id)}`} className='left-side'>
        <div className='blog-img'>
          <img src={movie.image} alt={movie.name} />
        </div>
        <div className='blog-details'>
          <span className='blog-tag'>{movie.tag}</span>
          <h2 className='blog-title'>{movie.name}</h2>
          <p><span className='blog-rele-date'>Description :  </span><span className='blog-desc'>{movie.description.slice(0, 398)}...</span></p>
          {/* <p className='blog-like-icon-count'><SlLike className='blog-like-icon' /><span className='blog-like-count'> {movie.like}</span></p> */}
          <p><span className='blog-date'>{movie.releaseDate}</span></p>
          <div className="premium-type postions">
            <div className="prem-1 pad">{movie.type1}</div>
            <div className="prem-2 pad">{movie.type2}</div>
            <div className="prem-3 pad">{movie.type3}</div>
          </div>
        </div>
      </NavLink>
    ) : (
      <>
        <div className='blog-details'>
          <span className='blog-tag'>{movie.tag}</span>
          <h2 className='blog-title'>{movie.name}</h2>
          <p><span className='blog-rele-date'>Description :  </span><span className='blog-desc'>{movie.description.slice(0, 398)}...</span></p>
          {/* <p className='blog-like-icon-count'><SlLike className='blog-like-icon' /><span className='blog-like-count'> {movie.like}</span></p> */}
          <p><span className='blog-date'>{movie.releaseDate}</span></p>
          <div className="premium-type postions">
            <div className="prem-1 pad">{movie.type1}</div>
            <div className="prem-2 pad">{movie.type2}</div>
            <div className="prem-3 pad">{movie.type3}</div>
          </div>
        </div>
        <NavLink to={`/upcomming/${encodeURIComponent(movie.name)}`} className='blog-img'>
          <img src={movie.image} alt={movie.name} />
        </NavLink>
      </>
    )}
  </div>
))}

       


      </div>
    </div>
    <hr/>
    <Footer/>
   </div>
  );
}

export default HomeUpcommingPage;
