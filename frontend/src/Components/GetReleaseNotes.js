import React, {useEffect} from 'react';
import {useQuery, gql} from '@apollo/client';
import {LOAD_RELEASE_NOTES} from '../GraphQL/Queries'

function GetReleaseNotes() {
    const {error, loading, data} = useQuery(LOAD_RELEASE_NOTES);
    
    useEffect(() => {
        console.log(data);
        console.log('we made it');
    }, [data]);

    return (
        <div>
            
        </div>
    )
}

export default GetReleaseNotes