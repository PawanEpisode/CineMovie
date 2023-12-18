import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { useGetMoviesQuery } from '../../services/TMDB';

const Movies = () => {
  const { data } = useGetMoviesQuery();

  console.log(data);
  return (
    <div className='ml-[280px]'>
      {/* <img  src='/public/cinemovie1.jpeg' alt='cine' width={200} height={200} /> */}
      Movies
    </div>
  );
};

export default Movies;
