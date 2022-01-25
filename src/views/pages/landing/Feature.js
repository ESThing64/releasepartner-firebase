// material-ui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Typography } from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import Avatar from 'ui-component/extended/Avatar';
import { gridSpacing } from 'store/constant';

// assets



import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// =============================|| LANDING - FEATURE PAGE ||============================= //

const FeaturePage = () => {
    const theme = useTheme();

    return (
        <Container>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} lg={5} md={10}>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item>
                                    <Typography variant="h5" color="primary">
                                        Top Features
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h2" component="div">
                                What does releasePartner bring to you?
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2">
                             
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                        <Grid item md={4} sm={6}>
                            <FadeInWhenVisible>
                                <SubCard>
                                    <Grid container justifyContent="center" spacing={2}>
                                        <Grid item>
                                            <Avatar
                                                size="xl"
                                                variant="rounded"
                                                sx={{
                                                    background:
                                                        theme.palette.mode === 'dark'
                                                            ? theme.palette.dark[900]
                                                            : theme.palette.primary.light,
                                                    color: theme.palette.primary.main
                                                }}
                                            >
                                                <PersonSearchIcon fontSize="large" />
                                            </Avatar>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h3">Finding A Partner is Easy</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2">

                                            Find people who have similar free time as you or do a quick search to see who is free at different times of day.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </SubCard>
                            </FadeInWhenVisible>
                        </Grid>
                        <Grid item md={4} sm={6}>
                            <FadeInWhenVisible>
                                <SubCard>
                                    <Grid container justifyContent="center" spacing={2}>
                                        <Grid item>
                                            <Avatar
                                                size="xl"
                                                variant="rounded"
                                                sx={{
                                                    background:
                                                        theme.palette.mode === 'dark'
                                                            ? theme.palette.dark[900]
                                                            : theme.palette.secondary.light,
                                                    color: theme.palette.secondary.main
                                                }}
                                            >
                                                <EventAvailableIcon fontSize="large" />
                                            </Avatar>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h3">Scheduling</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2">
                                           
                                            Schedule releasing sessions with an easy to use interface.



                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </SubCard>
                            </FadeInWhenVisible>
                        </Grid>
                        <Grid item md={4} sm={6}>
                            <FadeInWhenVisible>
                                <SubCard>
                                    <Grid container justifyContent="center" spacing={2}>
                                        <Grid item>
                                            <Avatar
                                                size="xl"
                                                variant="rounded"
                                                sx={{
                                                    background:
                                                        theme.palette.mode === 'dark'
                                                            ? theme.palette.dark[900]
                                                            : theme.palette.success.light,
                                                    color: theme.palette.success.dark
                                                }}
                                            >
                                                <AccessTimeIcon fontSize="large" />
                                            </Avatar>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h3">Time Zones</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2">
                                            We mange time difference for you! Weather your searching for a partner or setting a schedule with a partner you have already connected with. We got you!
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </SubCard>
                            </FadeInWhenVisible>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default FeaturePage;
