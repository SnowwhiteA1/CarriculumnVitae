export default function Projects() {
  return (
    <section className="mb-8">
      <ul>
      <h2 className="text-xl font-semibold text-black-500 mb-2 bg-gray-300 px-4 py-2 w-full block">Projects</h2>

      <div className="mb-4">
       <li> <h3 className="font-bold">Civic Alert Original — Android App</h3></li>
        <p>Incident-reporting system using CameraX + Firebase.</p>
      </div>

      <div className="mb-4">
        <a href="https://github.com/SnowwhiteA1/JumpStart-Smart-House"><li><h3 className="font-bold">Smart Irrigation System</h3></li></a>
        <p>IoT and automation using NodeMCU + Flask backend + React dashboard.</p>
      </div>

      <div className="mb-4">
        <a href="https://github.com/SnowwhiteA1/MAISH"><li><h3 className="font-bold">CO₂ Emission Prediction Platform</h3></li></a>
        <p>Machine-learning model + user interface for predictions (HTML + CSS)</p>
      </div>
      
      <div className="mb-4">
       <a href="https://github.com/SnowwhiteA1/Project-and-Beneficiaries-Management-Syatem"> <li><h3 className="font-bold">Projects and Beneficiary Management System  </h3></li></a>
        <p>Software system for tracking beneficiaries and their replacements in a project. + React + Python + PostgressDBS </p>
      </div>
      
       <div className="mb-4">
        <a href="https://github.com/SnowwhiteA1/Encryption"><li><h3 className="font-bold">Cyber Security (Encryption)</h3></li></a>
        <p> Using the AES 256 for Encryption and decryption</p>
      </div>

       <div className="mb-4">
        <a href="https://github.com/SnowwhiteA1/AccessProject_JumpStart"><li><h3 className="font-bold">Facilitator and Programme director</h3></li></a>
        <p>Mentor and programme director for a ICT Learnership(Introduction to programing Node.js + React + Firebase +Hardware) </p>
      </div>
      
      
      
      </ul>
    </section>
  );
}
