import React, {useEffect, useState} from 'react';
import {useQuery, gql} from '@apollo/client';
import {LOAD_RELEASE_NOTES} from '../GraphQL/Queries'

function GetReleaseNotes() {
    const {error, loading, data} = useQuery(LOAD_RELEASE_NOTES);
    const [releaseNotes, setReleaseNotes] = useState([]);
    useEffect(() => {
        if (data) {
            console.log(data.release_notes.items);
            setReleaseNotes(data.release_notes.items[0])
        }        
    }, [data]);

    return (
        <div>
            {
            release_notes.map((val) => {
                <h1>title</h1>
            })
            }

        </div>
    )
}

export default GetReleaseNotes