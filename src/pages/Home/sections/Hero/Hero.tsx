import { styled } from "@mui/material"

const Hero = () => {

  const StyledHero = styled("div")(() => ({
    backgroundColor: "black"
  }))

  return (
    <>
      <StyledHero>
        Opa
        </StyledHero>
    </>
  )
}

export default Hero
