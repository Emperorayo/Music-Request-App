// src/components/RequestForm.js

import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';


const RequestForm = () => {}
    const [name, setName] = useState('');
    const [song, setSong] = useState('');
    const [error, setError] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();
        const blockedSongRef = firebase.firestore().collection('blockedSongs');
        const blockedSongsSnapshot = await blockedSongRef.where('song', '==', song).get();
        const blockedSong = blockedSongsSnapshot.docs[0];

        if (blockedSong){
            const blockedSongData = blockedSong.data();
            const minutesAgo = Math.floor((Date.now() - blockedSongData.timestamp.toDate().getTime()) / 60000);

            if (minutesAgo < 30) {
                setError('Alaye I just play this song recently o!');
                return;
            }
        }
        const requestsRef = firebase.firestore().collection('requests');
    await requestsRef.add({
      name,
      email,
      phone,
      song,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    await blockedSongsRef.doc().set({
      song,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setName('');
    setEmail('');
    setPhone('');
    setSong('');
  };

  return (
    <div>
      <h2>Request a Song</h2>
      <form onSubmit={handleSubmit}></form>
    </div>
     )