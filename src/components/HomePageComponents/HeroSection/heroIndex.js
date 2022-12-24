import React from 'react'
import { HeroButtonContainer, HeroContainer, HeroH1, HeroP, Button } from './heroSectionElements'


const HeroSection = () => {
    return (
        
        <HeroContainer>

            <HeroH1>
                GET AHEAD OF THE COMPETITION
                <HeroP>
                    Marketyze is committed to preparing the next generation of young adults for the future
                    <HeroButtonContainer>
                        <Button>
                            Learn More
                       </Button>
                    </HeroButtonContainer>
                </HeroP>
            </HeroH1>

        </HeroContainer>
        
    )
}

export default HeroSection