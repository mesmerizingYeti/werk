import React, { useContext, useState } from 'react'
import QuickstartContext from '../../utils/QuickstartContext'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import LibraryAddIcon from '@material-ui/icons/LibraryAdd'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}))

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  )
}

const ModalList = () => {
  const classes = useStyles()
  const [dense, setDense] = useState(false)
  const [secondary, setSecondary] = useState(false)
  const { getWorkouts } = useContext(QuickstartContext)
  return(
    <List>
      {generate(
        <ListItem>
          <ListItemText
            primary="Workout"
            secondary={secondary ? 'Secondary text' : null}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <LibraryAddIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>,
      )}
    </List>
  )
}

export default ModalList