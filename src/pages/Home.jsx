import React, { useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import profileImg from '../assets/profile.jpg';

function Home() {
  const [profile] = useState({
    name: 'Farhan Badru Tamam',
    idNumber: '1234567890',
    photo: profileImg, // Gunakan foto yang diimpor
    hobbies: ['Coding', 'Traveling', 'Coding']
  });

  return (
    <main className="p-4">
      <ProfileCard 
        name={profile.name}
        idNumber={profile.idNumber}
        photo={profile.photo}
        hobbies={profile.hobbies}
      />
      
    </main>
  );
}

export default Home;
