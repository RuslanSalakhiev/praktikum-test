import { Box,Slider } from "@mui/material"
import { DISTRIBUTION } from "../../utils"
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@mui/material";

const theme = createTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: "green"
      },
      track: {
        color: "red"
      },
      rail: {
        color: "black"
      }
    }
  }
});

export const TreeSlider = ({value, handler}) => {
  return <ThemeProvider theme={theme}>
  <Box width={60}>
  <Slider
    size="small"
    min={DISTRIBUTION.min}
    max={DISTRIBUTION.max}
    defaultValue={140}
    onChange= {handler}
    aria-label="Small"
    valueLabelDisplay="auto"
  /> 
</Box>
</ThemeProvider>
}