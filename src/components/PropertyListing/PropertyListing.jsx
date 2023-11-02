import React, { useEffect, useState } from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

const PropertyListing = () => {
    // Local state management using hooks
    const [propertyData, setPropertyData] = useState([]);

    // Simple data fetching using hooks can be enhanced with useReducer or data fetching lib
    // and extract as seperate service
    useEffect(() => {
        const fetchData = async () => {
            const data = await (await fetch('http://localhost:3000/api/properties?maxPrice=800000')).json();
            setPropertyData(data);
        };
        fetchData().catch(console.error);
        return () => {
            setPropertyData([]);
        };
    }, []);

    return (
        <>
            {propertyData.length ? (
                <ul className="PropertyListing">
                    {propertyData.map((property) => (
                        <li key={property.id}>
                            <PropertyCard {...property} />
                        </li>
                    ))}
                </ul>
            ) : (
                // Manage empty api data or error scenario here(like wrapping in ErrorBoundary!)
                <></>
            )}
        </>
    );
};

export default PropertyListing;
