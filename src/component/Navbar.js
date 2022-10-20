import React from 'react';
import SearchBar from './SearchBar';
import SuggestContainer from './SuggestContainer';

const Navbar = () => {
  return (
    <>
      <div className="section py-2 bg-slate-900  ">
        <h1 className="text-3xl font-thin py-2">Weather Index</h1>
      </div>
      <div className="section py-0 bg-slate-900 flex sm:gap-5 items-start sm:items-center justify-between border-y border-slate-800">
        <SearchBar />
        <SuggestContainer />
      </div>
    </>
  );
};

export default Navbar;
