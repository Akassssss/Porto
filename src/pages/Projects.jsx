import React, { useEffect, useState } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Mengambil data dari JSONPlaceholder
    fetch('https://dummyjson.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProjects(data); // Mengatur data proyek
        setLoading(false); // Menghentikan loading
      })
      .catch(err => {
        setError(err); // Mengatur error jika ada
        setLoading(false); // Menghentikan loading
      });
  }, []); // Kosong array dependensi berarti effect ini hanya berjalan sekali setelah komponen mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id} className="mb-4 p-4 border rounded">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p>{project.body}</p>
            {/* Jika ada tautan proyek, tampilkan tautan */}
            <a href="#" className="text-blue-500">View Project</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
