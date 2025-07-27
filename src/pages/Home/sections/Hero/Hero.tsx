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
          <Container maxWidth="lg">
            <Grid container spacing={2} alignItems="center">
              <Grid size={{ xs: 12, md: 4 }}>
                <StyledImg src={Avatar} />
              </Grid>
              <Grid size={{ xs: 12, md: 8 }}>
                <Typography color="primary" variant="h1" textAlign="center">João Vitor Batista</Typography>
                <Typography color="primary" variant="h2" textAlign="center">Dev FullStack</Typography>
                <Grid container display={"flex"} justifyContent={"center"}>
                  <Grid size={{ xs: 12, md: 3 }} display={"flex"} justifyContent="center">
                    <Button>
                      <CloudDownloadIcon />
                      Download CV
                    </Button>
                  </Grid>
                  <Grid size={{ xs: 12, md: 3 }} display={"flex"} justifyContent="center">
                    <Button>
                      <EmailIcon />
                      Contact me
                    </Button>
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
