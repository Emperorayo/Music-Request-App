import React, { useState, useEffect } from 'react';

const RequestList = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        // Use web sockets to update requests array in real-time
    }, []);

    const handlePlay =(id) => {
        // Send API request to mark song as played
    }

    const handleFlag = (id) => {
        // send API request to flag song as unavailable
    }

    return(
        <ul>
            {requests.map((request) => (
                <li key={request.id}>
                    <p>{request.song} by {request.artist}</p>
                    <p>{request.timestamp}</p>
                    <button onClick={() => handlePlay(request.id)}>Play</button>
                    <button onClick={() => handleFlag(request.id)}>Flag</button>
                </li>
            ))}
        </ul>
    )
}

export default RequestList;