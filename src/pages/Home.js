import { Instagram } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Container } from '@mui/system';
import { Facebook } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import '../styles/Home.css'
import React from 'react';

function Home() {
    return (
        <Container>
            <Box className="about">
                <Typography variant='h2'>Hi, my name is Daniel.</Typography>
                <Box>
                    <Typography variant='h4'>I am a Software Engineering Student at McGill University</Typography>
                    <LinkedIn />
                    <Instagram />
                    <Facebook />
                </Box>
            </Box>
            <Box className="skills">
                <Typography variant='h1'>Skills</Typography>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    className="list"
                >
                    <Typography align="center" variant="h3">
                        Frontend
                    </Typography>
                    <Typography align="center" variant="body1">
                        ReactJS, Angular, Redux, HTML, CSS,
                    </Typography>
                    <Typography align="center" variant="h3">
                        Backend
                    </Typography>
                    <Typography align="center" variant="body1">
                        NodeJS, Java Spring, .NET, ExpressJS, GraphQL,
                    </Typography>
                    <Typography align="center" variant="h3">
                        Languages
                    </Typography>
                    <Typography align="center" variant="body1">
                        JavaScript, Java, Python, C#, C, C++, TypeScript, Go
                    </Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default Home;