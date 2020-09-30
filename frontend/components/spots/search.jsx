import React from 'react';

// import FilterForm from './filter_form';
import SpotsPage from './spots_index';
import SpotsMap from './spots_map';

const Search = ({ spots }) => (
  <div className="user-panel">
    <div className="left-half">
      <h5>Click Map to Add Bench!</h5>
      <SpotsMap
        spots={spots}
      />
    </div>
    <div className="right-half">
    {/* //   <FilterForm */}
    {/* //     minSeating={minSeating}
    //     maxSeating={maxSeating}
    //     updateFilter={updateFilter}
    //   /> */}
        <SpotsPage spots={spots} />
    </div>
  </div>
);

export default Search;
