import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { Actors, MovieInformation, Movies, Profile, NavBar } from '.';

const App = () => {

  return (
    <div className='flex h-full flex-col'>
      <CssBaseline />
      <NavBar />
      <main className='h-[70px]'>
        <div className='p-10 flex-grow' />
        <Routes>
          <Route index path="/" element={<Movies />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
