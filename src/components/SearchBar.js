import * as React from 'react'
import { FaBlackTie, FaSearch } from 'react-icons/fa'
import styled from 'styled-components'
import {
 Typography,
 makeStyles,
 useTheme,
 useMediaQuery,
} from '@material-ui/core'
import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import SendIcon from '@mui/icons-material/Send'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
 List_1: {
  width: '100%',
  height: '100%',
  bgcolor: 'background.black',
  position: 'absolute',
 },
}))

export default function PrimarySearchAppBar() {
 const classes = useStyles()
 const [open, setOpen] = React.useState(false)

 const handleClick = () => {
  setOpen(!open)
 }
 return (
  <Wrapper>
   <List className={classes.List_1} component="nav">
    <ListItemButton onClick={handleClick} sx={{ color: 'white' }}>
     <h3> Areas of Focus </h3>
     {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>

    <Collapse in={open} timeout="auto" unmountOnExit sx={{ color: 'white' }}>
     <List component="div" disablePadding>
      <ListItemButton sx={{ pl: 4 }}>
       <ListItemIcon>
        <StarBorder sx={{ color: 'white' }} />
       </ListItemIcon>
       <ListItemText primary="Motor Vehicle" />
      </ListItemButton>

      <ListItemButton sx={{ pl: 4 }}>
       <ListItemIcon>
        <StarBorder sx={{ color: 'white' }} />
       </ListItemIcon>
       <ListItemText primary="Slip and Fall" />
      </ListItemButton>

      <ListItemButton sx={{ pl: 4 }}>
       <ListItemIcon>
        <StarBorder sx={{ color: 'white' }} />
       </ListItemIcon>
       <ListItemText primary="Fire Loss" />
      </ListItemButton>

      <ListItemButton sx={{ pl: 4 }}>
       <ListItemIcon>
        <StarBorder sx={{ color: 'white' }} />
       </ListItemIcon>
       <ListItemText primary="Emergencies" />
      </ListItemButton>

      <ListItemButton sx={{ pl: 4 }}>
       <ListItemIcon>
        <StarBorder sx={{ color: 'white' }} />
       </ListItemIcon>
       <ListItemText primary="Workplace Accidents" />
      </ListItemButton>

      <ListItemButton sx={{ pl: 4 }}>
       <ListItemIcon>
        <StarBorder sx={{ color: 'white' }} />
       </ListItemIcon>
       <ListItemText primary="Medical Malpractice" />
      </ListItemButton>

      <ListItemButton sx={{ pl: 4 }}>
       <ListItemIcon>
        <StarBorder sx={{ color: 'white' }} />
       </ListItemIcon>
       <ListItemText primary="Wrongful Death Claims" />
      </ListItemButton>
     </List>
    </Collapse>
   </List>
   <div className="items">
    <ul>
     <Link to="/">
      <li>Lawyer Portal</li>
     </Link>
     <Link to="/">
      <li>Client Portal</li>
     </Link>
     <Link to="/">
      <li>Employee Portal</li>
     </Link>
    </ul>
   </div>

   {/* <div className="div-3">
    <form className="search-form">
     <input type="text" placeholder="search" className="form-input" />
     <button type="submit" className="submit-btn">
      <FaSearch />
     </button>
    </form>
   </div> */}
  </Wrapper>
 )
}

const Wrapper = styled.div`
 background-color: var(--clr-black);
 width: 100%;
 display: flex;
 justify-content: center;

 .items {
  width: 50vh;

  display: grid;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  ul {
   color: white;
   display: flex;
   justify-content: space-evenly;
   font-size: 1.3rem;
   li {
    color: white;
   }
  }
 }

 @media only screen and (min-width: 600px) {
 }
`
