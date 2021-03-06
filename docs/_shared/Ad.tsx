import * as React from 'react';
import { loadScript } from 'utils/helpers';
import { Grid, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  '@global': {
    '#codefund': {
      '& .cf-wrapper': {
        backgroundColor:
          theme.palette.type === 'dark'
            ? theme.palette.background.paper + '! important'
            : 'auto !important',
      },
      '& .cf-text': {
        color: theme.palette.text.primary + '! important',
      },
    },
  },
}));

const Ad: React.FC = () => {
  useStyles();
  React.useEffect(() => {
    const codefundScriptPosition = document.querySelector('#codefund-script-position');

    if (codefundScriptPosition) {
      loadScript(
        'https://codefund.io/properties/197/funder.js?theme=light',
        codefundScriptPosition
      );
    }
  }, []);

  return (
    <Grid container>
      <span id="codefund-script-position" />
      <div id="codefund" />
    </Grid>
  );
};

export default Ad;
