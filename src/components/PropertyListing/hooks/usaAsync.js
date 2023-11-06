import { useEffect, useReducer } from 'react';

function asyncReducer(state, action) {
    switch (action.type) {
        case 'fetch':
            return { status: 'pending', propertiesData: [] };
        case 'resolved':
            return { status: 'resolved', propertiesData: action.data };
    }
}

export function useAsync() {
    const [state, dispatch] = useReducer(asyncReducer, {
        status: 'pending',
    });

    useEffect(() => {
        dispatch({ type: 'fetch' });
        const fetchData = async () => {
            const data = await (await fetch('http://localhost:3000/api/properties?maxPrice=800000')).json();
            dispatch({ type: 'resolved', data: data });
        };
        fetchData().catch(console.error);
    }, []);
    return state;
}
