import React from 'react';
import LeftContainer from '../../components/LeftContainer';
import RightContainer from '../../components/RightContainer';
import { HomeContainer, HomeWrapper } from './HomeElements';

const Home = () => {
    return (
        <HomeWrapper>
        <HomeContainer>
            <LeftContainer/>
            <RightContainer/>
            </HomeContainer>
            </HomeWrapper>
    );
};

export default Home;