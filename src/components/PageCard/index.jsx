import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";

export default function PageCard({title, image, link}) {

    return (
        <Card
            component={Link} to={link}
            // onClick={() => window.location.href = '/services'}
            sx={{
                padding: 0,
                maxWidth: 425,
                maxHeight: 425,
                '@media (max-width:900px)': {
                    maxWidth: 250,
                    maxHeight: 250,
                },
                display: 'flex', flexDirection: 'column', height: '100%',
                textDecoration: 'none',
            }}>
            <CardActionArea sx={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                <CardMedia
                    component="img"
                    image={image}
                    alt={`${title} image`}
                />
                <Box sx={{flex: 1, overflow: 'auto'}}>
                    <CardContent sx={{padding: 0, '&:last-child': {paddingBottom: 0}}}>
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            sx={{
                                marginTop: '1rem',
                                marginBottom: '1rem',
                                marginLeft: '2rem',
                                marginRight: '2rem',
                                '@media (max-width:600px)': {
                                    fontSize: '0.6rem',
                                },
                                '@media (min-width:600px)': {
                                    fontSize: '0.6rem',
                                },
                                '@media (min-width:960px)': {
                                    fontSize: '0.75rem',
                                },
                                '@media (min-width:1280px)': {
                                    fontSize: '1rem',
                                },
                            }}
                        >
                            {title}
                        </Typography>

                    </CardContent>
                </Box>
            </CardActionArea>
        </Card>
    );
}