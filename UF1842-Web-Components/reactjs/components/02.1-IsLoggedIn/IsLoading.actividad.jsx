import React from 'react';

const IsLoading = ({data, isLoading}) => {

  return (
    <div>

      {!IsLoading ? (
        <h1>Please wait...</h1> 
      ) : (
        <h1>{data}</h1>  
      )}

    </div>
  );
};

export default IsLoading;
