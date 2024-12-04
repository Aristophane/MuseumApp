import styled, { keyframes } from 'styled-components';

// Animation de rotation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled component pour le conteneur
const LoaderContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Prend toute la hauteur de l'écran */
`;

// Styled component pour le loader
const Loader = styled.div`
  border: 8px solid #f3f3f3; 
  border-top: 8px solid #787878; 
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const LoaderComponent = () => {
    return (
        <LoaderContainer>
            <h1>Chargement de votre collection</h1>
            <Loader />
        </LoaderContainer>
    );
}

export default LoaderComponent;
