import { Button, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/foto_jv.png"
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {

  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",
  }))

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%"
  }))

  return (
    <>
      <StyledHero>
          <Container>
            <Grid container spacing={2} alignItems="center">
              <Grid size={4}>
                <StyledImg src={Avatar} />
              </Grid>
              <Grid size  ={8}>
                <Typography color="primary" variant="h1">João Vitor Batista</Typography>
                <Typography color="primary" variant="h2">Dev FullStack</Typography>
                <Button>
                  <CloudDownloadIcon />
                  Download CV</Button>
                <Button>
                  <EmailIcon />
                  Contact me</Button>
              </Grid>
            </Grid>
          </Container>
              
      </StyledHero>
    </>
  )
}

export default Hero
