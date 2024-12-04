import SearchBar from "./SearchBar";
import ImageContainer from "./ImageContainer";
import styled from "styled-components";

const MainContentContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:center;
`;

function MainContent({ imagesData, handleSearch }) {
    return (<>
        <MainContentContainer>
            <SearchBar handleSearch={handleSearch}></SearchBar>
            <ImageContainer imagesData={imagesData} />
        </MainContentContainer>
    </>)
}

export default MainContent;