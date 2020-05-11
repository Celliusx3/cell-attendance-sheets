import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  base: {
    position: 'absolute', 
    left: '50%', 
    top: '50%',
    transform: 'translate(-50%, -50%)',
    display: "flex",  
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"column"
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 300,
  },
  name: {
    minWidth: 300
  },
  paper: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"column",
    color: theme.palette.primary.main,
  },
  message: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    minWidth: 300,
    maxWidth: 300,
    display: "flex",
    flexDirection:"column",
  },
  messageSuccess: {
    color: theme.palette.primary.main,
    backgroundColor: "#c2cff1",
  },
  messageError: {
    color: "#dd2114",
    backgroundColor: "#fbd1ce",
  },
  messageText: {
    padding: theme.spacing(2)
  }, 
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default function HomeScreen() {

  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [signInType, setSignInType] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({success: true, message: ""});


  const onSubmitClicked = event => {

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const foo = params.get('query');

    if (foo == null ||foo == "" ) {
      setMessage({success:false, message: "Something went wrong. Please try again!"})
      return
    }

    setLoading(true);
    const data = { name: username, type: signInType };
    const t= `${foo}`
    fetch(t, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    .then(response => response.json())
    .then(
      (result) => {
        setLoading(false);
        setMessage({success:true, message: "Successfully recorded."})
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        setLoading(false);
        setMessage({success:false, message: "Something went wrong. Please try again!"})
      }
    )
  }

  const onUsernameChanged = event => {
    const { value } = event.target;
    setUsername(value)
  }

  const onSignInTypeChanged = event => {
    const { value } = event.target;
    setSignInType(value)
  }

  return (
    <div className= {classes.base}>
      <Paper variant="outlined" className={`${classes.paper}`}>
        <Typography variant="h6">
          Welcome!
        </Typography>

        {(message.message != "" && message.message != null) &&
          <Paper elevation={0} className={`${classes.message} ${message.success ? classes.messageSuccess: classes.messageError}`}>
            <Typography variant="body1" className={classes.messageText}>
              {message.message}
            </Typography>
          </Paper>
        }
        
        <form className={classes.form} noValidate autoComplete="off">
          <TextField id="name" label="Name" variant="outlined"  className={classes.name} onChange={onUsernameChanged}/>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="type-input-label">Sign In Type</InputLabel>
            <Select
              labelId="type-selector"
              id="type-selector"
              value={signInType}
              onChange={onSignInTypeChanged}
              label="Sign In Type">
              <MenuItem value={"SIGN_IN"}>Sign In</MenuItem>
              <MenuItem value={"SIGN_OUT"}>Sign Out</MenuItem>
            </Select>
          </FormControl>
          <div className={classes.wrapper}>
            <Button variant="contained" color="primary" disableElevation onClick={onSubmitClicked} disabled={username == null || username== "" || signInType == null || signInType== "" || loading }>
              Submit
            </Button>
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          </div>  
        </form>
      </Paper>
    </div>
  );
}