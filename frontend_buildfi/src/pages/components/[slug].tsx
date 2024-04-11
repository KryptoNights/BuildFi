import React from 'react';
import { useRouter } from 'next/router';
import data from './../../../constant/constant'; // Import your data file

const YourComponent = () => {
    const router = useRouter();
    const { slug } = router.query;
  
    // Find the item from data using slug
    const item = data.find((item:any) => item.slug === slug);
  
    if (!item) {
      return <div>Page not found</div>;
    }

  return (
    <div>
      <h1>Your Component</h1>
       <div>
        {item.name}
       </div>
    </div>
  );
};

export default YourComponent;