import React from 'react';
import {Drawer, List, Divider, IconButton, Typography, Container, ListItem}  from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useStyles } from './DrawerStyles';
import { useHistory } from 'react-router-dom';

export default function CustomDrawer(props) {
  const classes = useStyles();
  const history = useHistory();

  return (

    <div>
    <Drawer
      anchor='right'
      open={props.isOpen}
      classes={{
       paper: classes.drawerPaper,
      }}
      >
      <div className={classes.drawerHeader}>
        <IconButton onClick={props.closer}>
          <ChevronRightIcon style = {{color:"#D66496"}}/>
        </IconButton>
      </div>
        
        
      <List>
        {['HOME', 'EVENTS', 'SCHEDULE', 'SPONSORS', 'TEAM', 'FAQ'].map((text, index) => (

          <ListItem 
            button  
            key = {'itemtext'+index}
            onClick = {()=> {
              props.closer();
              text === 'HOME' ? history.push(`/`) : history.push(`/${text.toLowerCase()}`)
            }}
            className = {classes.itemButton}
          >

            <Typography  className = {classes.itemText}>
              {text}
            </Typography>
                
          </ListItem>
        ))}
      </List>

    </Drawer>
    </div>
  );
}
