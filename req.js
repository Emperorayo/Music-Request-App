import React, { useState, useEffect } from 'react';

const RequestForm = () => {
  const [song, setSong] = useState('');
  const [artist, setArtist] = useState('');
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleSongChange = (e) => {
    setSong(e.target.value);
  }

  const handleArtistChange = (e) => {
    setArtist(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Send API request to submit user request
  }

  useEffect(() => {
    //Check local storage for user's last request timestamp
    //Check API for last 30 minutes song list
    //Disable form submit button if needed
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={song} onchange={handleSongChange} />
      <input type="text" value={artist} onchange={handleArtistChange} />
      <button type="submit" disabled={disabled}>Submit</button>
      <p>{message}</p>
    </form>
  )
}

export default RequestForm