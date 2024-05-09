// export const BIDDING__MAIN__BACKENDURL="http://localhost:5000/api"
// export const BIDDING__MAIN__BACKENDURL= process.env.REACT_APP_API_PROXY
import React, { useState, useEffect } from 'react';

const BIDDING__MAIN__BACKENDURL = () => {
  const [backendUrl, setBackendUrl] = useState('');

  useEffect(() => {
    // Fetch the published backend URL from an API endpoint or any other source
    const fetchBackendUrl = async () => {
      try {
        const response = await fetch('your-endpoint-for-backend-url');
        if (!response.ok) {
          throw new Error('Failed to fetch backend URL');
        }
        const data = await response.json();
        setBackendUrl(data.backendUrl); // Assuming the response has a property 'backendUrl' with the URL
      } catch (error) {
        console.error('Error fetching backend URL:', error);
      }
    };

    fetchBackendUrl();

    // Clean up function
    return () => {
      // Cleanup code if needed
    };
  }, []);

  return (
    <div>
      {/* Use the dynamically fetched backend URL */}
      <p>{process.env.REACT_APP_API_PROXY}</p>
    </div>
  );
};

export default BIDDING__MAIN__BACKENDURL;

