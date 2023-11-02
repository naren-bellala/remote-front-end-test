import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { within } from '@testing-library/dom';
import PropertyListing from '../PropertyListing';

const mockCount = 5;
const mockData = Array(mockCount).fill({
    id: 73864112,
    bedrooms: 3,
    summary: 'Property 1 Situated moments from the River Thames in Old Chelsea...',
    displayAddress: '1 CHEYNE WALK, CHELSEA, SW3',
    propertyType: 'Flat',
    price: 1950000,
    branchName: 'M2 Property, London',
    propertyUrl: '/property-for-sale/property-73864112.html',
    contactUrl: '/property-for-sale/contactBranch.html?propertyId=73864112',
    propertyTitle: '3 bedroom flat for sale',
    mainImage:
        'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg',
});

beforeEach(
    () =>
        (global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockData),
            })
        ))
);

afterEach(() => global.fetch.mockRestore());
describe('PropertyListing', () => {
    it(`should render ${mockCount} property cards`, async () => {
        render(<PropertyListing />);
        waitFor(async () => {
            const propertiesList = screen.getByRole('list');
            const propertyCards = await within(propertiesList).findAllByRole('listitem');
            expect(propertyCards).toHaveLength(mockCount);
        });
    });
});
