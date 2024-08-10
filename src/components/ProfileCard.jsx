import React from 'react';
import profileImg from '../assets/profile.jpg'; 
import { useTheme } from '../context/ThemeContext';


function ProfileCard({ name, idNumber, photo, hobbies }) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="object-cover object-center" src={photo} alt="Profile" />
      <div className="p-4">
        <h2 className="text-black font-bold">{name}</h2>
        <p className="text-gray-600">ID: {idNumber}</p>
        <p className="mt-2 text-gray-600">Hobbies: {hobbies.join(', ')}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
