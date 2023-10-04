import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/QuestDsSystemLightTheme';
import ProductList1 from 'src/components/ProductList1/ProductList1';
import Alert1 from 'src/components/Alert1/Alert1';
import CardFlexWQuestKit from 'src/components/CardFlexWQuestKit/CardFlexWQuestKit';
import Authentication4 from 'src/components/Authentication4/Authentication4';

function App() {
  return (
    <HelmetProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={questTheme}>
          <Routes>
            <Route path="/" element={<ProductList1 />} />
            <Route path="Alert" element={<Alert1 />} />
            <Route path="card1" element={<CardFlexWQuestKit />} />
            <Route path="Authentication4" element={<Authentication4 />} />
          </Routes>
        </ThemeProvider>
      </StyledEngineProvider>
    </HelmetProvider>
  );
}

export default App;
