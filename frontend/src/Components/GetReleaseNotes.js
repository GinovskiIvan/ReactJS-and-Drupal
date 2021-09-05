import React, {useEffect, useState} from 'react';
import {useQuery, gql} from '@apollo/client';
import {LOAD_RELEASE_NOTES} from '../GraphQL/Queries'

function GetReleaseNotes() {
    const {error, loading, data} = useQuery(LOAD_RELEASE_NOTES);
    const [releaseNotes, setReleaseNotes] = useState([]);
    
    useEffect(() => {
        if (data) {
            setReleaseNotes(data.release_notes.items);
        }        
    }, [data]);

    return (
        <div>
            {releaseNotes.map((val) => {
                return (<div> <h1> Title: {val.title}</h1> <h2> Version: {val.version}</h2> <h2>Release: {val.release_date}</h2></div>)
            })}
        </div>
    )
}

export default GetReleaseNotes