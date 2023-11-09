import React from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import { useAsync } from './hooks/usaAsync';

const PropertyListing = ({ filters }) => {
    // Local state management using hooks
    const { status, propertiesData } = useAsync(filters);
    // Simple data fetching using hooks can be enhanced with useReducer or data fetching lib
    // and extract as seperate service
    if (status === 'pending') {
        return <p>loading...</p>;
    }
    return (
        <>
            {status === 'resolved' && propertiesData.length ? (
                <ul className="PropertyListing">
                    {propertiesData.map((property) => (
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
