import React, { PropsWithChildren } from "react";
import {
  createGenerateClassName,
  StylesProvider,
  MuiThemeProvider,
  Theme,
} from "@material-ui/core";

import { config } from "@utils/config";

export interface ThemeProviderProps {
  theme: Theme;
}

export const ThemeProvider = ({
  theme,
  children,
}: PropsWithChildren<ThemeProviderProps>) => {
  return (
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
};
