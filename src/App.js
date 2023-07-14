import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import {Box, Card,CardContent, CardActions, FormControl, FormLabel, FormHelperText, InputLabe } from '@mui/material'
import { LoadingButton,} from '@mui/lab';
import React,{useState} from 'react';
import {handleClick} from '@mui/lab'

function App() {
  const [loading, setLoading]= useState(false);
  const [formData, setFormData] =useState({
    firstname:'',
    lastname:'',
    mail:'',
    password:'',
  });
  const {firstname,lastname, mail, password}=formData;
 
  const handleOnchange = (e) =>{
    console.log([e.target.name], e.target.value)
    setFormData({...formData, [e.target.name] : e.target.value})
  }
  const handleSubmit = (firstname,lastname,mail,password)=>{
    console.log(firstname,lastname,mail,password);
    setLoading(true)
   alert(`datos formularios:::,${firstname},${lastname},${mail},${password}`)
   setTimeout(()=>{
    setLoading(false)
   },3000);
  }
    return (
    <div className="App">
      <header className="App-header">
        <Box my={2}>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Card>
            <CardContent>
            <TextField
            error={false}
            label="Nombre"
           type="text"
           name="firstname"
           value={firstname}
           onChange={handleOnchange}
           margin="dense"
           fullWidth
           variant="standard"
           helperText="Campo obligatorio"
           
           />
           <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            
            <TextField
            error={false}
            label="Apellido"
           type="text"
           name="lastname"
           value={lastname}
           onChange={handleOnchange}
           margin="dense"
           fullWidth
           variant="standard"
           helperText="Campo obligatorio"
           
           />
           </Grid>
           <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            
            <TextField
            error={false}
            label="Correo"
           type="text"
           name="mail"
           value={mail}
           onChange={handleOnchange}
           margin="dense"
           fullWidth
           variant="standard"
           helperText="Campo obligatorio"
           
           />
           </Grid>
           <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            
            <TextField
            error={false}
            label="Contraseña"
           type="text"
           name="password"
           value={password}
           onChange={handleOnchange}
           margin="dense"
           fullWidth
           variant="standard"
           helperText="De 8 a 14 caracteres"
           
           />
           </Grid>
           <Grid item xs={12} sm={12} md={12} lg={12} xl={12}> 
           <Box sx={{ '& > button': { m: 1 } }}>
        <LoadingButton
          size="small"
          onClick={()=>handleSubmit(firstname,lastname,mail,password)}
          loading={loading}
          variant="outlined"
          disabled={!loading ? false : true}
        >
          <span>Enviar</span>
        </LoadingButton>
        </Box>
           </Grid>
  
            </CardContent>
            </Card>
            </Grid>
           
          </Grid>
          
        </Box>
        
      </header>
    </div>
  );
}

export default App;
