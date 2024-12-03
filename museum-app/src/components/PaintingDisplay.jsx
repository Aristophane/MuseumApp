import style from './PaintingDisplay.module.css'
import PropTypes from 'prop-types';
import styled from 'styled-components';

function PaintingDisplay({ title, painter, url, isPortrait = true, year }) {

    const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: ${isPortrait ? "20%" : "80%"};
    background-color: #e6e6e6;
    border: #e6e6e6;
    padding: 1rem;
    border-radius: 0.5rem;

    @media (max-width: 768px){
            width: ${isPortrait ? "30%" : "80%"}
    }

    p {
    font-size: 1rem;
    margin: 0px;
    text-align: center;
}
 `;

    return (<>
        <Container>
            <img src={url}></img>
            <p>{title} - {year}</p>
            <p className={style.painterName}>{painter}</p>
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