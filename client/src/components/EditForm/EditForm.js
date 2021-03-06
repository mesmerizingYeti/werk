import React, 
       { useContext,
         useState,
         useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container,
         TextField,
         FormControl,
         Card,
         CardContent,
         Typography } from '@material-ui/core'
import UserAPI from '../../utils/UserAPI'
import ProfileContext from '../../utils/ProfileContext'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200
    },
  },
  card: {
    position: "",
    minWidth: 275,
    maxWidth: 650
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }
}))

const EditForm = () => {
  const classes = useStyles()
  const { name, age, weight, handleInputChange } = useContext(ProfileContext)

  const [userState, setUserState] = useState({
    username: '',
    name: '',
    age: '',
    weight: ''
  })

  useEffect(() => {
    UserAPI.getMyUser(sessionStorage.getItem('werkToken'))
      .then(({ data: user }) => setUserState({ ...user }))
      .catch(e => console.error(e))
  }, [])

  return (
    <Container maxWidth="sm">
      <Card className={classes.card} variant="outlined">
        <CardContent>

          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {userState.name}, any changes?
          </Typography>

          <Typography variant="h5" component="h2">
            <Container maxWidth="sm">
              <FormControl>
                <div className={classes.root}>
                  <TextField
                    label="name"
                    id="margin-none"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    className={classes.textField}
                  />
                  <TextField
                    type="number"
                    label="age"
                    id="margin-none"
                    name="age"
                    value={age}
                    onChange={handleInputChange}
                    className={classes.textField}
                  />
                  <TextField
                    type="number"
                    label="weight"
                    id="margin-none"
                    name="weight"
                    value={weight}
                    onChange={handleInputChange}
                    className={classes.textField}
                  />
                </div>
              </FormControl>
            </Container>
          </Typography>

        </CardContent>
      </Card>
    </Container>
  )
}

export default EditForm