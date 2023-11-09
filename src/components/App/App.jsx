import React, { useState } from 'react';
import './App.scss';
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';

const App = () => {
    const [filters, setFilters] = useState({ minPrice: '100000', maxPrice: '700000' });
    return (
        <div className="App">
            <Header />
            <main>
                <SortAndFilter filters={filters} setFilters={setFilters} />
                <PropertyListing filters={filters} />
            </main>
        </div>
    );
};

export default App;
