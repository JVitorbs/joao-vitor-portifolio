import {  Box, Container, styled, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import Avatar from "../../../../assets/images/foto_jv.png"
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import EmailIcon from '@mui/icons-material/Email';
import theme from "../../../../theme";
import StyledButton from "../../../../components/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

  const StyledHero = styled("div")(() => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }))

  const StyledImg = styled("img")(() => ({
    width: "80%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  }))

  return (
    <>
      <StyledHero>
          <Container maxWidth="lg">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={5} display="flex" justifyContent="center">
                <Box position="relative">
                  <Box position="absolute" width="100%" top="-100" right="0">
                    <AnimatedBackground />
                  </Box>
                </Box>
                <StyledImg src={Avatar} />
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography color="primary.contrastText" variant="h1" textAlign="center">João Vitor Batista</Typography>
                <Typography color="primary.contrastText" variant="h2" textAlign="center">Dev FullStack</Typography>
                <Grid container justifyContent="center" spacing={3}>
                  <Grid item xs={12} md={3} display="flex" justifyContent="center">
                    <StyledButton>
                      <CloudDownloadIcon />
                      <Typography color="primary.contrastText">Download CV</Typography>
                    </StyledButton>
                  </Grid>
                  <Grid item xs={12} md={3} display="flex" justifyContent="center">
                    <StyledButton>
                      <EmailIcon />
                      <Typography color="primary.contrastText">Contact me</Typography>
                    </StyledButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
              
      </StyledHero>
    </>
  )
}

export default Hero
