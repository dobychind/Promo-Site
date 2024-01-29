import React, {useEffect} from 'react'

const Feedback = () => {
    useEffect(() => {
        // Create a script element
        const script = document.createElement('script');
        script.src = 'https://res.smartwidgets.ru/app.js';
        script.defer = true;
    
        // Append the script to the document body
        document.body.appendChild(script);
    
        // Clean up the script when the component is unmounted
        return () => {
          document.body.removeChild(script);
        };
      }, []);
  return (
    <div className="sw-app" data-app="2001eddd100ce06e415d1599d99fba26"></div>
  )
}

export default Feedback