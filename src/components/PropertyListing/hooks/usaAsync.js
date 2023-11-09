import { useEffect, useReducer } from 'react';

function asyncReducer(state, action) {
    switch (action.type) {
        case 'fetch':
            return { status: 'pending', propertiesData: [] };
        case 'resolved':
            return { status: 'resolved', propertiesData: action.data };
    }
}

export function useAsync(filters) {
    const [state, dispatch] = useReducer(asyncReducer, {
        status: 'pending',
    });

    const apiURL = `http://localhost:3000/api/properties?${new URLSearchParams(filters).toString()}`;
    useEffect(() => {
        dispatch({ type: 'fetch' });
        const fetchData = async () => {
            const data = await (await fetch(apiURL)).json();
            dispatch({ type: 'resolved', data: data });
        };
        fetchData().catch(console.error);
    }, [apiURL]);
    return state;
}
