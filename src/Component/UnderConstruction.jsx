import React from 'react';
import kitty from "../Component/kitty.jpeg"

const UnderConstructionPage = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f4f4f4',
    },
    header: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#333',
    },
    message: {
      fontSize: '18px',
      color: '#555',
      textAlign: 'center',
      marginBottom: '40px',
    },
    constructionImage: {
      width: '50%',
      maxWidth: '300px',
      marginBottom: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <div>
        <img
          src={kitty} // replace with your construction image
          alt="Under Construction"
          style={styles.constructionImage}
        />
      </div>
      <div>
        <h1 style={styles.header}>Website Under Construction</h1>
        <p style={styles.message}>
          We are currently working on something awesome. Please check back later!
        </p>
      </div>
    </div>
  );
};

export default UnderConstructionPage;
