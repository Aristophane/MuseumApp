import { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #ccc;
  border-radius: 25px;
  padding: 5px 15px;
  background-color: #fff;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 25px;
  background-color: #f5f5f5;
`;

const SearchButton = styled.button`
  background-color: #454545;
  color: white;
  border: none;
  padding: 10px 15px;
  margin-left: 10px;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #000000;
  }
`;

// Composant principal
const SearchBar = ({handleSearch}) => {
  const [searchTerm, setSearchTerm] = useState('');

    const handleButtonClick = ()=>{
        handleSearch(searchTerm);
    }

  return (
    <SearchContainer>
      <SearchBox>
        <Input 
          type="text" 
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton onClick={handleButtonClick}>Rechercher</SearchButton>
      </SearchBox>
    </SearchContainer>
  );
};

export default SearchBar;
