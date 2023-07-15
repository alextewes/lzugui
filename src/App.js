import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {StyledApp, StyledNav, StyledLink, StyledHeader} from './styledComponents';

import DeployComponent from './components/DeployComponent';
import StartComponent from './components/StartComponent';
import StopComponent from './components/StopComponent';
import StatusComponent from './components/StatusComponent';
import RemoveComponent from './components/RemoveComponent';
import SaveStateComponent from './components/SaveStateComponent';
import LoadStateComponent from './components/LoadStateComponent';

function App() {
    return (
        <StyledApp>
            <StyledHeader>
                Component Assembler
            </StyledHeader>
            <Router>
                <StyledNav>
                    <StyledLink to="/deploy">Deploy</StyledLink>
                    <StyledLink to="/remove">Remove</StyledLink>
                    <StyledLink to="/start">Start</StyledLink>
                    <StyledLink to="/stop">Stop</StyledLink>
                    <StyledLink to="/save-state">Save State</StyledLink>
                    <StyledLink to="/load-state">Load State</StyledLink>
                    <StyledLink to="/status">Status</StyledLink>
                </StyledNav>

                <Routes>
                    <Route path="/deploy" element={<DeployComponent />} />
                    <Route path="/start" element={<StartComponent />} />
                    <Route path="/stop" element={<StopComponent />} />
                    <Route path="/status" element={<StatusComponent />} />
                    <Route path="/remove" element={<RemoveComponent />} />
                    <Route path="/save-state" element={<SaveStateComponent />} />
                    <Route path="/load-state" element={<LoadStateComponent />} />
                </Routes>
            </Router>
        </StyledApp>
    );
}

export default App;
