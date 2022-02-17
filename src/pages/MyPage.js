import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//import Library
import {useDispatch, useSelector} from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

//import API
import instance from "../shared/Request"

// impot Component
import Header from "../components/Header";

//import Actions
import user, { actionCreators as userActions } from "../redux/modules/user";

//import components
import Upload from "../shared/Upload"

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
            SpartaTeamTwo
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function MyPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const _user = useSelector(state => state.user);
    const _image = useSelector(state => state.image);

    console.log(_user);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console

        const user_data={
            username : _user.user.user_id,
            nickname : data.get('nickname'),
            user_profile : _image.image_url?_image.image_url:"https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/309/59932b0eb046f9fa3e063b8875032edd_crop.jpeg",
        }

        console.log(user_data);

        instance.defaults.headers.common["X-AUTH-TOKEN"] = "";

            // instance.put(`/api/signup/${_user.user.id}`,user_data)
            // .then((res) => {
            //     window.alert("개인정보 수정이 완료되었습니다.")
            //     console.log(res);
            //     navigate("/");
            // })
            // .catch((err,res) => {
            //     console.log(err)
            // });
    };

    return (
        <ThemeProvider theme={theme}>
            <Header/>
            <Grid margin="200px 0 ">
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
                개인정보 수정
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>

                <Upload/>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="nickname"
                    label="nickname"
                    name="nickname"
                    autoComplete="nickname"
                    />
                </Grid>
                </Grid>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                수정
                </Button>

            </Box>
            </Box>
        </Container>
        </Grid>
        </ThemeProvider>
    );
}