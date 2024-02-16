interface MovieShow {
  id: number;
  type: '2D' | '3D';
  tokisname: string;
  showTimes: string[]; // Change showTime to showTimes and make it an array of strings
}

const movieShows: MovieShow[] = [
  { 
    id: 1, 
    type: '2D', 
    tokisname: 'PVR', 
    showTimes: ['8:00 AM', '10:00 AM', '1:00 PM', '3:00 PM'] 
  },
  { 
    id: 2, 
    type: '3D', 
    tokisname: 'Friday Night Moves', 
    showTimes: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'] 
  },
  { 
    id: 3, 
    type: '2D', 
    tokisname: 'Valentine ', 
    showTimes: ['10:00 AM', '1:00 PM', '4:00 PM', '7:00 PM'] 
  },
  // Add more movie show entries as needed
];

export default movieShows;
