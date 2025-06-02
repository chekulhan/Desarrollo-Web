

const fetchSinSeguridad = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/v1/seguridad');
    
    
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const result = await response.json();
    console.log(result);

  } catch (error) {

      console.error('Error fetching seguridad:', error);
  }
}


const fetchConSeguridad = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/v1/seguridad', {
      method: 'GET',
      headers: {
        'x-api-key': 'abc123',  // Obtender desde .env
        'Content-Type': 'application/json' // Optional for GET
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Success:', result);

  } catch (error) {
    console.error('Error fetching seguridad:', error.message);
  }
}


const fetchConRoles = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/v1/seguridad/rbac', {
      method: 'GET',
      headers: {
        'x-api-key': 'abc123',  // Obtender desde .env
        'Content-Type': 'application/json', // Optional for GET
        'x-user-role': 'user',  // NO es seguro! Demo solo!
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Success:', result);

  } catch (error) {
      console.error('Error fetching seguridad:', error.message);
  }
}


//fetchSinSeguridad();
//fetchConSeguridad();
//fetchConRoles();