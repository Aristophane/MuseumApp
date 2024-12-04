import style from './PaintingDisplay.module.css'
import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';

function PaintingDisplay({ title, painter, url, isPortrait = true, year }) {


    const Container = styled.div`
        position: relative;
    display: flex;
    flex-direction: column;
    width: ${isPortrait ? "20%" : "80%"};
    gap:1rem;
    border-radius: 0.5rem;

    @media (max-width: 768px){
        width: ${isPortrait ? "30%" : "80%"}
    }

    p {
    font-size: 1rem;
    margin: 0px;
    text-align: left;
    color: white;
    }`;

    const LibelleContainer = styled.div`
        position: absolute;
        bottom: 0rem;
        width: 100%;
        left: 0rem;
        padding-bottom: 1rem;
        padding-left: 1rem;
        padding-top: 3rem;
        background: linear-gradient(to top, black, transparent);
;
    `;
    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    return (<>
        <Container>
            {!isLoaded && <div>Loading...</div>}
            <img onLoad={handleImageLoad} src={url} style={{ display: isLoaded ? 'block' : 'none' }}></img>
            <LibelleContainer>
                <p>{title} - {year}</p>
                <p className={style.painterName}>{painter}</p>
            </LibelleContainer>
        </Container>
    </>)
}

PaintingDisplay.propTypes = {
    title: PropTypes.string.isRequired,
    painter: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isPortrait: PropTypes.bool,
    year: PropTypes.string
};

export default PaintingDisplay;