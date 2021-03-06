import React from "react";
import { Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/globalStyle";
import StoryPage from "pages/StoryPage";
import ParticipatePage from "pages/ParticipatePage";
import LandingPage from "pages/LandingPage";
import LinkPage from "pages/LinkPage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Route path="/" component={LandingPage} exact={true} />
      <Route path="/storyPage/:pageIdx" component={StoryPage} exact={true} />
      <Route
        path="/participate/:pageIdx"
        component={ParticipatePage}
        exact={true}
      />
      <Route path="/linkPage" component={LinkPage} exact={true} />
    </ThemeProvider>
  );
};

export default App;
