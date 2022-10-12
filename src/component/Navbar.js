import React from 'react';
import SearchBar from './SearchBar';
import SuggestContainer from './SuggestContainer';

const Navbar = () => {
  return (
    <div className="section py-2 bg-slate-900 flex gap-5 items-center justify-center lg:justify-between border-b border-slate-800">
      <SearchBar />
      <SuggestContainer />
    </div>
  );
};

export default Navbar;
