import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import 'fontsource-roboto';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container fixed maxWidth='sm'>
        <Typography variant='h3' component='h2' gutterBottom>
          Hello, this is my new About/Bio page. Stay tooned for more updates!
        </Typography>
      </Container>
    </div>
  );
}
