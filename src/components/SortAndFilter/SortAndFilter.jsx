import React from 'react';
import './SortAndFilter.scss';
import { priceOptions } from '../../constants';
import Dropdown from './Dropdown/Dropdown';

const SortAndFilter = ({ filters, setFilters }) => {
    function onChange({ label, value }) {
        console.log(label, value);
        setFilters({ ...filters, [label]: value });
    }
    return (
        <div className="SortAndFilter">
            <Dropdown options={[...priceOptions]} onChange={onChange} label={'minPrice'} />
            <Dropdown options={[...priceOptions]} onChange={onChange} label={'maxPrice'} />
        </div>
    );
};

export default SortAndFilter;
