import TextField from '@mui/material/TextField';
import { Alert, Box, Button, Collapse, IconButton, Snackbar  } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Layout from '../layout/Layout';
import './Register.css'
import {  useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



export default function Register() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [passward,setPassward] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')
    const [open,setOpen] = useState(false)
    const navigate = useNavigate()

    
   
   const AlertClick = () => setOpen(true)
     
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
          const res = await axios.post(`${process.env.REACT_APP_API}api/v1/auth/register`,{name,email,passward,phone,address}
          )
          if(res.data.success){
            AlertClick() 
            navigate('/login')
          }
        } catch (error) {
          console.log(error)
        }


        console.log(name,email,passward,phone,address)
         
    }
    
  return (
    <Layout>
    <div className='register__form'>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >

      
      <div className='register__formInput'>

      
        <h3>Register Page</h3> 
    
      
        <TextField
          id="standard-password-input"
          label="Name"
          type="text"
          autoComplete="current-password"
          variant="standard"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required

        />
         <TextField
          id="standard-password-input"
          label="Email"
          type="email"
          autoComplete="current-password"
          variant="standard"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}

          required

        />
         <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          value={passward}
          onChange={(e)=>setPassward(e.target.value)}
          required
        

        />
         <TextField
          id="standard-password-input"
          label="Phone"
          type="text"
          autoComplete="current-password"
          variant="standard"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          required
          

        />
         <TextField
          id="standard-password-input"
          label="Address"
          type="text"
          autoComplete="current-password"
          variant="standard"
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
          required

        />
        <Button  onClick={ handleSubmit} type='submit' variant="contained" >Submit</Button>
    
        
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
          Register Successfully
        </Alert>
      </Collapse>
        </Snackbar>
    </Box>


    </div>
    
    </Layout>
  );
}