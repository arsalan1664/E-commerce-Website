import TextField from '@mui/material/TextField';
import { Alert, Box, Button, Collapse, IconButton, Snackbar } from '@mui/material';
import Layout from '../layout/Layout';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';



export default function Login() {

  const [email,setEmail] = useState('')
  const [passward,setPassward] = useState('')
  const [open,setOpen] = useState(false)
  const navigate = useNavigate()

  
 
 const AlertClick = () => setOpen(true)
   
  const handleSubmit = async(e) => {
      e.preventDefault();
      try {
        const res = await axios.post(`${process.env.REACT_APP_API}api/v1/auth/login`,{email,passward}
        )
        if(res.data.success){
          AlertClick() 
          navigate('/')
        }
      } catch (error) {
        console.log(error)
      }


      
       
  }

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
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
         <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          value={passward}
          onChange={(e)=>setPassward(e.target.value)}
        />
         
         <Button  onClick={handleSubmit} type='submit' variant="contained" >Submit</Button>
        
      </div>
      <Snackbar open={open}> 
        <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Login Successfully
        </Alert>
      </Collapse>
        </Snackbar>
    </Box>
    </div>
    </Layout>
  );
}