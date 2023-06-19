import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import Layout from '../layout/Layout';
import './Login.css'

export default function Login() {
  return (
    <Layout>
    <div className='login__form'>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

      
      <div className='login__formInput'>

      
        <h3>Login Page</h3> 
    

         <TextField
          id="standard-password-input"
          label="Email"
          type="email"
          autoComplete="current-password"
          variant="standard"
        />
         <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
         
        <Button type='Submit' variant="contained">Submit</Button>
        
      </div>
    </Box>
    </div>
    </Layout>
  );
}