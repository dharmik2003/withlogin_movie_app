import React, { useState } from 'react'
import Dates from '../Data/Dates'
import DateItems from './Date/DateItems'
import './MovieDetails.css'
import Area_search from './Location/Area_search'
import { GrLocation   } from "react-icons/gr";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import DropdownMenu from './Location/DropdownMenu'
import MovieShowList from './MovieShow/MovieShowList'
import { NavLink } from 'react-router-dom'
import movies from './../Data/poster_movie'


function MovieDetails() {

 const [scrollPosition, setScrollPosition] = useState<number>(0);


//   const datesArray: number[] = Array.from({ length: 30 }, (_, i) => (i % 30) + 1);

//   const handleScroll = (direction: 'left' | 'right'): void => {
//     if (direction === 'left') {
//       setScrollPosition((prevPos) => Math.max(prevPos - 1, 0));
//     } else if (direction === 'right') {
//       setScrollPosition((prevPos) => Math.min(prevPos + 1, datesArray.length - 5));
//     }
//   };

//   const getDayOfWeek = (date: number): string => {
//     const dayOfWeek: string = new Date(2024, 0, date).toLocaleDateString('en-US', { weekday: 'short' }) || '';
//     return dayOfWeek;
//   };

//   const visibleDates: number[] = datesArray.slice(scrollPosition, scrollPosition + 5);


  return (
    <div>
        <div className='main-con-movie'>
            <div className='main-con-movie-left'>
                {/* hrading */}
                <div>
                    <h2 className='heading-h2'>TIMETABLE</h2>
                    <p className='heading-p'>Select the schedule of the cinema you want to watch</p>
                </div>

                {/* date */}
                <div className='Date'>
                    <div className='side-scroll'><FaChevronLeft /></div>
                    {
                        Dates.length>0 &&  Dates.map((date, index)=>{
                            return <DateItems date={date} key={index}/>
                        })
                    }
                    <div className='side-scroll'><FaChevronRight /></div>
                </div>
                   {/* <div className='Date'>
                        <div className='side-scroll' onClick={() => handleScroll('left')}><FaChevronLeft /></div>
                        {Dates.length > 0 && Dates.map((date, index) => (
                            <div key={index}>
                            <div>{date} {Months[index]}</div>
                            <div>{Days[index]}</div>
                            </div>
                        ))}
                        <div className='side-scroll' onClick={() => handleScroll('right')}><FaChevronRight /></div>
                    </div> */}

                  {/* <div className='Date'>
      <div className='side-scroll' onClick={() => handleScroll('left')}><FaChevronLeft /></div>
      {visibleDates.map((date: number) => (
        <div key={date}>
          <div>{date} Jan</div>
          <div>{getDayOfWeek(date)}</div>
        </div>
      ))}
      <div className='side-scroll' onClick={() => handleScroll('right')}><FaChevronRight /></div>
    </div> */}
                {/* location droup down menu */}
                <div className='location-city'>

                    <GrLocation  className='location-icon' />
                    <DropdownMenu/>                   
                </div>


                {/* search area  */}
                <div>
                     <Area_search/>

                </div>

                {/* movieshows */}
                <div>
                    <MovieShowList/>
                </div>
                
            </div>




            <div  className='main-con-movie-right'>

                <div className='main-con-image-des'>
                    <div className='spider-img'>
                        <img src='./img/haft-spiderman.png'/>
                    </div>
                    <div className='description-h'>
                        <h3>SPIDERMAN : NO WAY HOME</h3>
                        <div className="movie-details">
                            <div className="category">
                                <ul>
                                    <li>Genre</li>
                                    <li>Durasi</li>
                                    <li>Sutradara</li>
                                    <li>Rating Usia</li>
                                </ul>
                            </div>
                            <div className="info">
                                <ul>
                                    <li>Action</li>
                                    <li>2 jam 28 menit</li>
                                    <li>Jon Watts</li>
                                    <li>SU</li>
                                </ul>
                            </div>
                        </div>


                    </div>

                </div>

                <div className='right-bottom'>
                <div className='main-book-button'>
                    <div className='book-h'>
                        GRAND INDONESIA CGV
                    </div>
                    <div className='book-date'>
                        Kamis, 16 Desember 2021
                    </div>
                    <div className='book-type-time'>
                        <div className='book-type'>
                            REGULAR 2D 
                        </div>
                        <div className='book-type book-time'>
                            14:40 
                        </div>
                    </div>
                    <div className='book-des'>
                        <small>* Pemilihan kursi dapat dilakukan setelah ini</small>
                    </div>
                    <div className='book-button'>
                        <NavLink to="/sitepage"><h3 className='book-but-text'>BELI SEKARANG</h3></NavLink>

                    </div>

                </div>
                </div>


            </div>

        </div>
    </div>
  )
}

export default MovieDetails