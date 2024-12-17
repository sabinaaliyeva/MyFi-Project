import React from 'react';
import './Home.css'; // Import the CSS file

// Importing images from the src folder
import fuadImage from './images/fuadImage.jpeg';
import sabinaImage from './images/sabinaImage.jpeg';
import ranaImage from './images/ranaImage.jpeg';
import gunayImage from './images/gunayImage.jpeg';
import elnurImage from './images/elnurImage.jpeg';
import bakhtiyarImage from './images/bakhtiyarImage.jpeg';
/*import backgroundImage from './360_F_504230989_OW6jMnT58tv0V8x8ZpizlnbmZhkDwAdg.jpg'*/

function Home() {
  // Array of team members
  const teamMembers = [
    { name: 'Fuad Aghayev', role: 'Team Leader', imageUrl: fuadImage },
    { name: 'Sabina Aliyeva', role: 'Developer', imageUrl: sabinaImage },
    { name: 'Rana Mammadova', role: 'Penetration Tester', imageUrl: ranaImage },
    { name: 'Gunay Mehdizada', role: 'Developer', imageUrl: gunayImage },
    { name: 'Elnur Rahmanov', role: 'Network Administrator', imageUrl: elnurImage },
    { name: 'Bakhtiyar Gadimov', role: 'Penetration Tester', imageUrl: bakhtiyarImage }
  ];

  return (
    <div className="home-container">
      {/* Header Section */}
      <div className="home-header">
        <h1>Welcome to MyFi</h1>
        <p>Your reliable solution for 24/7 network logging  and scanning. </p>
      </div>

      {/* Video Placeholder */}
      <div className="video-placeholder">
        <video controls poster="/video-placeholder.jpg">
          <source src="/your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Team Information */}
      <div className="team-info">
        <h2>About Our Team</h2>
        <p>
          We are a dedicated team of cyber security students committed to providing the best solutions for your enterprise needs. Each of us brings unique skills to the table, from network administration, penetration testing, and development.
        </p>

        {/* Team Members Grid */}
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.imageUrl} alt={member.name} />
              <div className="member-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;