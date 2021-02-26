import React, { PropsWithChildren } from "react";
import {
  createGenerateClassName,
  StylesProvider,
  MuiThemeProvider,
  Theme,
} from "@material-ui/core";

import { theme } from "@utils/theme";
import { config } from "@utils/config";

export interface ThemeProviderProps {
  containerTheme?: Theme;
}

export const ThemeProvider = ({
  containerTheme,
  children,
}: PropsWithChildren<ThemeProviderProps>) => {
  const render = () => (
    <MuiThemeProvider theme={theme}>
      <StylesProvider
        generateClassName={createGenerateClassName({
          productionPrefix: config.stylesPrefix,
        })}
      >
        {children}
      </StylesProvider>
    </MuiThemeProvider>
  );

  return containerTheme ? (
    <MuiThemeProvider theme={containerTheme}>{render()}</MuiThemeProvider>
  ) : (
    render()
  );
};
