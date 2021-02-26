import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
  },
  main: { flexGrow: 1 },
}));
