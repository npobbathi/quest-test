/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { Dialog, Button } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import ComponentSwap from 'src/components/ComponentSwap/ComponentSwap';

const Dialog2 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `10px`,
  boxSizing: `border-box`,
  height: 'auto',
  width: 'fit-content',
});

const DialogTitle1 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['Text']['Primary'],
  fontStyle: theme.typography['Typography']['Body 1'].fontStyle,
  fontFamily: theme.typography['Typography']['Body 1'].fontFamily,
  fontWeight: theme.typography['Typography']['Body 1'].fontWeight,
  fontSize: theme.typography['Typography']['Body 1'].fontSize,
  letterSpacing: theme.typography['Typography']['Body 1'].letterSpacing,
  lineHeight: theme.typography['Typography']['Body 1'].lineHeight,
  textDecoration: theme.typography['Typography']['Body 1'].textDecoration,
  textTransform: theme.typography['Typography']['Body 1'].textTransform,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const ComponentSwap1 = styled(ComponentSwap)(({ theme }) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const ButtonText = styled(Button)(({ theme }) => ({
  margin: `0px`,
  color: theme.palette['Primary']['Main'],
  fontStyle: theme.typography['Components']['Button Font - Medium'].fontStyle,
  fontFamily: theme.typography['Components']['Button Font - Medium'].fontFamily,
  fontWeight: theme.typography['Components']['Button Font - Medium'].fontWeight,
  fontSize: theme.typography['Components']['Button Font - Medium'].fontSize,
  letterSpacing:
    theme.typography['Components']['Button Font - Medium'].letterSpacing,
  lineHeight: theme.typography['Components']['Button Font - Medium'].lineHeight,
  textDecoration:
    theme.typography['Components']['Button Font - Medium'].textDecoration,
  textTransform:
    theme.typography['Components']['Button Font - Medium'].textTransform,
}));

const ButtonText1 = styled(Button)(({ theme }) => ({
  margin: `0px`,
  color: theme.palette['Primary']['Main'],
  fontStyle: theme.typography['Components']['Button Font - Medium'].fontStyle,
  fontFamily: theme.typography['Components']['Button Font - Medium'].fontFamily,
  fontWeight: theme.typography['Components']['Button Font - Medium'].fontWeight,
  fontSize: theme.typography['Components']['Button Font - Medium'].fontSize,
  letterSpacing:
    theme.typography['Components']['Button Font - Medium'].letterSpacing,
  lineHeight: theme.typography['Components']['Button Font - Medium'].lineHeight,
  textDecoration:
    theme.typography['Components']['Button Font - Medium'].textDecoration,
  textTransform:
    theme.typography['Components']['Button Font - Medium'].textTransform,
}));

const Dialog3 = styled(Dialog)(({ theme }) => ({
  width: `444px`,
  margin: `0px`,
  color: theme.palette['Text']['Primary'],
  fontStyle: theme.typography['Typography']['Body 1'].fontStyle,
  fontFamily: theme.typography['Typography']['Body 1'].fontFamily,
  fontWeight: theme.typography['Typography']['Body 1'].fontWeight,
  fontSize: theme.typography['Typography']['Body 1'].fontSize,
  letterSpacing: theme.typography['Typography']['Body 1'].letterSpacing,
  lineHeight: theme.typography['Typography']['Body 1'].lineHeight,
  textDecoration: theme.typography['Typography']['Body 1'].textDecoration,
  textTransform: theme.typography['Typography']['Body 1'].textTransform,
}));

function Dialog1(props) {
  return (
    <Dialog2 className={props.className}>
      <Dialog3 open={true} fullWidth={true}>
        <DialogTitle>
          <DialogTitle1>{`Dialog Title`}</DialogTitle1>
        </DialogTitle>
        <ComponentSwap1 />
        <ButtonText
          variant="text"
          size={'medium'}
          color={'primary'}
          disabled={false}
        >
          {'ACTION'}
        </ButtonText>
        <ButtonText1
          variant="text"
          size={'medium'}
          color={'primary'}
          disabled={false}
        >
          {'ACTION'}
        </ButtonText1>
      </Dialog3>
    </Dialog2>
  );
}

export default Dialog1;