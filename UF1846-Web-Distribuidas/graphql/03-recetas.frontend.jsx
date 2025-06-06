import React, { useEffect, useState } from 'react';

export default function RecetasList() {
  const [recetas, setRecetas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRecetas() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:4000/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `
              query {
                ??????????????
              }
            `
          }),
        });
        const json = await response.json();
        if (json.errors) {
          setError(json.errors[0].message);
        } else {
          setRecetas(json.data.recetas);
        }
      } catch (err) {
        setError('Error fetching data');
      }
      setLoading(false);
    }

    fetchRecetas();
  }, []);

  if (loading) return <p>Loading recetas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Recetas List</h2>
      
        Mostrar la lista de recetas aqui ...
    </div>
  );
}
