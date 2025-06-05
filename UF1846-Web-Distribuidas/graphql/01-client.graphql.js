const GRAPHQL_ENDPOINT = 'http://localhost:5000/graphql';

const query = `
  query {
    hello
  }
`;

async function runQuery() {
  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST', // No es un GET!
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });

    const json = await response.json();
    console.log('GraphQL response:', json);
  } catch (error) {
    console.error('Error:', error);
  }
}

runQuery();