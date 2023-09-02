import { NavigationProgress, nprogress } from '@mantine/nprogress';
import React, { useEffect, useState } from 'react'

const AutoLoadingAnim = () => {
    const [displayProgress, setDisplayProgress] = useState(true)
    useEffect(() => {
        // Start the loading progress when the component mounts
        nprogress.start();
    
        // Listen for the "window.onload" event to know when the page is fully loaded
        window.addEventListener('load', () => {
          // Stop the loading progress when the page is fully loaded
          nprogress.stop();
        });
        
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('load', () => {
                nprogress.stop();
                setDisplayProgress(false)
          });
        };
      }, []);
  return (
    <>
    {displayProgress && <NavigationProgress />}
    </>
    )
}

export default AutoLoadingAnim