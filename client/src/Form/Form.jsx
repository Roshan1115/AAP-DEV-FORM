import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  textAlign:'center',
  fontSize:'1.5rem'
}));

export default function Form() {

  const [user, setUser] = React.useState({
    name: "", course: "", semester: "", school: "",
    objective: "", benefit_to_society: "", methodology: "",
    outcome: ""
  })


  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUser({...user, [name]: value});

    // console.log(user);
  }


  const handleSubmit = async () => {
    
    const {
      name, course, semester, school,
      objective, benefit_to_society, methodology,
      outcome
    } = user;

    console.log(user);
  }


  return (
    <Box
      component="form"
      method='POST'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '60vw' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{textAlign:'center',marginBottom:'7vh'}}>
        <TextField
          required
          id="outlined-required"
          name="name"
          onChange={handleInput}
          label="Name"
        />
        <div style={{display:'inline-block', width:'60vw'}}> 
          <div style={{display:'flex', alignContent:'center', padding:"10px 0px",justifyContent:"space-between"}}>
        <TextField
          required
          id="outlined-required"
          name="course"
          onChange={handleInput}
          label="Course"
          style={{margin:'0px', width:"49%"}}
        />
        <TextField
          required
          id="outlined-number"
          label="Semester"
          type="number"
          name="semester"
          style={{margin:'0px',width:"49%"}}
          onChange={handleInput}
          InputLabelProps={{
            shrink: true,
          }}
        />
          </div>
        </div>
        <TextField
          required
          id="outlined-required"
          name="school"
          onChange={handleInput}
          label="School"
        />
      </div>

      <div style={{margin:'0 auto', width:'60vw'}}>

      <Div>{"PAPER DETAILSS"}</Div>

      <Typography variant="h6" component="div">
        OBJECTIVE
      </Typography>
      <TextField
          required
          id="standard-multiline-flexible"
          multiline
          maxRows={4}
          variant="standard"
          name="objective"
          onChange={handleInput}
          width='100%'
          style={{marginBottom:'4vh',marginTop:'0'}}
        />

      <Typography variant="h6" component="div">
        BENEFIT TO SOCIETY
      </Typography>
      <TextField
          required
          id="standard-multiline-flexible"
          multiline
          maxRows={4}
          variant="standard"
          name="benefit_to_society"
          onChange={handleInput}
          width='100%'
          style={{marginBottom:'4vh',marginTop:'0'}}
        />
        
      <Typography variant="h6" component="div">
        METHODOLOGY
      </Typography>
      <TextField
          required
          id="standard-multiline-flexible"
          multiline
          maxRows={4}
          variant="standard"
          name="methodology"
          onChange={handleInput}
          width='100%'
          style={{marginBottom:'4vh',marginTop:'0'}}
        />
        
      <Typography variant="h6" component="div">
        OUTCOME
      </Typography>
      <TextField
          required
          id="standard-multiline-flexible"
          multiline
          maxRows={4}
          variant="standard"
          name="outcome"
          onChange={handleInput}
          width='100%'
          style={{marginBottom:'4vh',marginTop:'0'}}
        />
        
      </div>
      
      <div style={{textAlign:'center', marginTop:'2vh'}}>
      <Button type="submit" onClick={handleSubmit} variant="contained">Submit</Button>
      </div>
      
    </Box>
  );
}

