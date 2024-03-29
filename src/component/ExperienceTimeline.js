import React from 'react';
import shopee from '../Utils/shopee-logo.png'
import ninjavan from '../Utils/ninjavan-logo.png'
import alphalab from '../Utils/alphalab-logo.png'
import nus from '../Utils/nus-crest.png'
import { Box, ButtonBase, } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({ 
    logo: { 
        height: "50px",
        filter: "saturate(0.1)"
    },
    chosenLogo: {
        height: "50px"
    },
    hoverover: {
        justifyContent: "center",
        "&:hover": {
            "& $logo": {
                filter: "saturate(1)"
            }
        }
    }
});

export default function ExperienceTimeline(props) {
    const classes = useStyle()
    const { jobIndex, setJobIndex } = props
    return (
        <Box display="flex" xs={12} m={3}>
            <Box className={classes.hoverover}>
                <ButtonBase onClick={() => setJobIndex(0)}>
                    <img src={ninjavan} className={jobIndex == 0 ? classes.chosenLogo : classes.logo}/>
                </ButtonBase>
            </Box>
            <Box flexGrow={1} paddingX={2} paddingY="18px">
                <hr />
            </Box>
            <Box className={classes.hoverover}>
                <ButtonBase onClick={() => setJobIndex(1)}>
                    <img src={nus} className={ jobIndex == 1 ? classes.chosenLogo : classes.logo}/>
                </ButtonBase>
            </Box>
            <Box flexGrow={1} paddingX={2} paddingY="18px">
                <hr />
            </Box>
            <Box className={classes.hoverover}>
                <ButtonBase onClick={() => setJobIndex(2)}>
                    <img src={shopee} className={jobIndex == 2 ? classes.chosenLogo : classes.logo} 
                    style={jobIndex == 2 ? {filter: "saturate(100%)"} : {}}/>
                </ButtonBase>
            </Box>
            <Box flexGrow={1} padding={2} paddingY="18px"><hr/></Box>
            <Box className={jobIndex == 3 ? classes.chosenLogo : classes.hoverover}>
                <ButtonBase onClick={() => setJobIndex(3)}>
                    <img src={alphalab} className={classes.logo} 
                    style={jobIndex == 3 ? {filter: "saturate(180%)"} : {}}/>
                </ButtonBase>
            </Box>
        </Box>
  );
}