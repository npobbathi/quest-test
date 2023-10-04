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
import { Alert, AlertTitle, Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';

const Alert2 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `20px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  height: 'auto',
  width: 'fit-content',
});

const ButtonText = styled(Button)(({ theme }) => ({
  margin: `0px`,
  color: theme.palette['Common']['White']['100p'],
  fontStyle: theme.typography['Components']['Button Font - Small'].fontStyle,
  fontFamily: theme.typography['Components']['Button Font - Small'].fontFamily,
  fontWeight: theme.typography['Components']['Button Font - Small'].fontWeight,
  fontSize: theme.typography['Components']['Button Font - Small'].fontSize,
  letterSpacing:
    theme.typography['Components']['Button Font - Small'].letterSpacing,
  lineHeight: theme.typography['Components']['Button Font - Small'].lineHeight,
  textDecoration:
    theme.typography['Components']['Button Font - Small'].textDecoration,
  textTransform:
    theme.typography['Components']['Button Font - Small'].textTransform,
}));

const AlertFilled = styled(Alert)(({ theme }) => ({
  alignSelf: `stretch`,
  margin: `0px`,
  color: theme.palette['Common']['White']['100p'],
  fontStyle: theme.typography['Components']['Alert Title'].fontStyle,
  fontFamily: theme.typography['Components']['Alert Title'].fontFamily,
  fontWeight: theme.typography['Components']['Alert Title'].fontWeight,
  fontSize: theme.typography['Components']['Alert Title'].fontSize,
  letterSpacing: theme.typography['Components']['Alert Title'].letterSpacing,
  lineHeight: theme.typography['Components']['Alert Title'].lineHeight,
  textDecoration: theme.typography['Components']['Alert Title'].textDecoration,
  textTransform: theme.typography['Components']['Alert Title'].textTransform,
}));

const ButtonText1 = styled(Button)(({ theme }) => ({
  margin: `0px`,
  color: theme.palette['Common']['White']['100p'],
  fontStyle: theme.typography['Components']['Button Font - Small'].fontStyle,
  fontFamily: theme.typography['Components']['Button Font - Small'].fontFamily,
  fontWeight: theme.typography['Components']['Button Font - Small'].fontWeight,
  fontSize: theme.typography['Components']['Button Font - Small'].fontSize,
  letterSpacing:
    theme.typography['Components']['Button Font - Small'].letterSpacing,
  lineHeight: theme.typography['Components']['Button Font - Small'].lineHeight,
  textDecoration:
    theme.typography['Components']['Button Font - Small'].textDecoration,
  textTransform:
    theme.typography['Components']['Button Font - Small'].textTransform,
}));

const AlertFilled1 = styled(Alert)(({ theme }) => ({
  alignSelf: `stretch`,
  margin: `20px 0px 0px 0px`,
  color: theme.palette['Common']['White']['100p'],
  fontStyle: theme.typography['Components']['Alert Title'].fontStyle,
  fontFamily: theme.typography['Components']['Alert Title'].fontFamily,
  fontWeight: theme.typography['Components']['Alert Title'].fontWeight,
  fontSize: theme.typography['Components']['Alert Title'].fontSize,
  letterSpacing: theme.typography['Components']['Alert Title'].letterSpacing,
  lineHeight: theme.typography['Components']['Alert Title'].lineHeight,
  textDecoration: theme.typography['Components']['Alert Title'].textDecoration,
  textTransform: theme.typography['Components']['Alert Title'].textTransform,
}));

const ButtonText2 = styled(Button)(({ theme }) => ({
  margin: `0px`,
  color: theme.palette['Common']['White']['100p'],
  fontStyle: theme.typography['Components']['Button Font - Small'].fontStyle,
  fontFamily: theme.typography['Components']['Button Font - Small'].fontFamily,
  fontWeight: theme.typography['Components']['Button Font - Small'].fontWeight,
  fontSize: theme.typography['Components']['Button Font - Small'].fontSize,
  letterSpacing:
    theme.typography['Components']['Button Font - Small'].letterSpacing,
  lineHeight: theme.typography['Components']['Button Font - Small'].lineHeight,
  textDecoration:
    theme.typography['Components']['Button Font - Small'].textDecoration,
  textTransform:
    theme.typography['Components']['Button Font - Small'].textTransform,
}));

const AlertFilled2 = styled(Alert)(({ theme }) => ({
  alignSelf: `stretch`,
  margin: `20px 0px 0px 0px`,
  color: theme.palette['Common']['White']['100p'],
  fontStyle: theme.typography['Components']['Alert Title'].fontStyle,
  fontFamily: theme.typography['Components']['Alert Title'].fontFamily,
  fontWeight: theme.typography['Components']['Alert Title'].fontWeight,
  fontSize: theme.typography['Components']['Alert Title'].fontSize,
  letterSpacing: theme.typography['Components']['Alert Title'].letterSpacing,
  lineHeight: theme.typography['Components']['Alert Title'].lineHeight,
  textDecoration: theme.typography['Components']['Alert Title'].textDecoration,
  textTransform: theme.typography['Components']['Alert Title'].textTransform,
}));

const ButtonText3 = styled(Button)(({ theme }) => ({
  margin: `0px`,
  color: theme.palette['Common']['White']['100p'],
  fontStyle: theme.typography['Components']['Button Font - Small'].fontStyle,
  fontFamily: theme.typography['Components']['Button Font - Small'].fontFamily,
  fontWeight: theme.typography['Components']['Button Font - Small'].fontWeight,
  fontSize: theme.typography['Components']['Button Font - Small'].fontSize,
  letterSpacing:
    theme.typography['Components']['Button Font - Small'].letterSpacing,
  lineHeight: theme.typography['Components']['Button Font - Small'].lineHeight,
  textDecoration:
    theme.typography['Components']['Button Font - Small'].textDecoration,
  textTransform:
    theme.typography['Components']['Button Font - Small'].textTransform,
}));

const AlertFilled3 = styled(Alert)(({ theme }) => ({
  alignSelf: `stretch`,
  margin: `20px 0px 0px 0px`,
  color: theme.palette['Common']['White']['100p'],
  fontStyle: theme.typography['Components']['Alert Title'].fontStyle,
  fontFamily: theme.typography['Components']['Alert Title'].fontFamily,
  fontWeight: theme.typography['Components']['Alert Title'].fontWeight,
  fontSize: theme.typography['Components']['Alert Title'].fontSize,
  letterSpacing: theme.typography['Components']['Alert Title'].letterSpacing,
  lineHeight: theme.typography['Components']['Alert Title'].lineHeight,
  textDecoration: theme.typography['Components']['Alert Title'].textDecoration,
  textTransform: theme.typography['Components']['Alert Title'].textTransform,
}));

const ButtonText4 = styled(Button)(({ theme }) => ({
  margin: `0px`,
  color: theme.palette['Common']['Black']['100p'],
  fontStyle: theme.typography['Components']['Button Font - Small'].fontStyle,
  fontFamily: theme.typography['Components']['Button Font - Small'].fontFamily,
  fontWeight: theme.typography['Components']['Button Font - Small'].fontWeight,
  fontSize: theme.typography['Components']['Button Font - Small'].fontSize,
  letterSpacing:
    theme.typography['Components']['Button Font - Small'].letterSpacing,
  lineHeight: theme.typography['Components']['Button Font - Small'].lineHeight,
  textDecoration:
    theme.typography['Components']['Button Font - Small'].textDecoration,
  textTransform:
    theme.typography['Components']['Button Font - Small'].textTransform,
}));

const AlertOutlined = styled(Alert)(({ theme }) => ({
  width: `600px`,
  margin: `20px 0px 0px 0px`,
  color: theme.palette['Error']['Dark'],
  fontStyle: theme.typography['Components']['Alert Title'].fontStyle,
  fontFamily: theme.typography['Components']['Alert Title'].fontFamily,
  fontWeight: theme.typography['Components']['Alert Title'].fontWeight,
  fontSize: theme.typography['Components']['Alert Title'].fontSize,
  letterSpacing: theme.typography['Components']['Alert Title'].letterSpacing,
  lineHeight: theme.typography['Components']['Alert Title'].lineHeight,
  textDecoration: theme.typography['Components']['Alert Title'].textDecoration,
  textTransform: theme.typography['Components']['Alert Title'].textTransform,
}));

const ButtonText5 = styled(Button)(({ theme }) => ({
  margin: `0px`,
  color: theme.palette['Common']['Black']['100p'],
  fontStyle: theme.typography['Components']['Button Font - Small'].fontStyle,
  fontFamily: theme.typography['Components']['Button Font - Small'].fontFamily,
  fontWeight: theme.typography['Components']['Button Font - Small'].fontWeight,
  fontSize: theme.typography['Components']['Button Font - Small'].fontSize,
  letterSpacing:
    theme.typography['Components']['Button Font - Small'].letterSpacing,
  lineHeight: theme.typography['Components']['Button Font - Small'].lineHeight,
  textDecoration:
    theme.typography['Components']['Button Font - Small'].textDecoration,
  textTransform:
    theme.typography['Components']['Button Font - Small'].textTransform,
}));

const AlertOutlined1 = styled(Alert)(({ theme }) => ({
  width: `600px`,
  margin: `20px 0px 0px 0px`,
  color: theme.palette['Warning']['Main'],
  fontStyle: theme.typography['Components']['Alert Title'].fontStyle,
  fontFamily: theme.typography['Components']['Alert Title'].fontFamily,
  fontWeight: theme.typography['Components']['Alert Title'].fontWeight,
  fontSize: theme.typography['Components']['Alert Title'].fontSize,
  letterSpacing: theme.typography['Components']['Alert Title'].letterSpacing,
  lineHeight: theme.typography['Components']['Alert Title'].lineHeight,
  textDecoration: theme.typography['Components']['Alert Title'].textDecoration,
  textTransform: theme.typography['Components']['Alert Title'].textTransform,
}));

const ButtonText6 = styled(Button)(({ theme }) => ({
  margin: `0px`,
  color: theme.palette['Common']['Black']['100p'],
  fontStyle: theme.typography['Components']['Button Font - Small'].fontStyle,
  fontFamily: theme.typography['Components']['Button Font - Small'].fontFamily,
  fontWeight: theme.typography['Components']['Button Font - Small'].fontWeight,
  fontSize: theme.typography['Components']['Button Font - Small'].fontSize,
  letterSpacing:
    theme.typography['Components']['Button Font - Small'].letterSpacing,
  lineHeight: theme.typography['Components']['Button Font - Small'].lineHeight,
  textDecoration:
    theme.typography['Components']['Button Font - Small'].textDecoration,
  textTransform:
    theme.typography['Components']['Button Font - Small'].textTransform,
}));

const AlertOutlined2 = styled(Alert)(({ theme }) => ({
  width: `600px`,
  margin: `20px 0px 0px 0px`,
  color: theme.palette['Info']['Main'],
  fontStyle: theme.typography['Components']['Alert Title'].fontStyle,
  fontFamily: theme.typography['Components']['Alert Title'].fontFamily,
  fontWeight: theme.typography['Components']['Alert Title'].fontWeight,
  fontSize: theme.typography['Components']['Alert Title'].fontSize,
  letterSpacing: theme.typography['Components']['Alert Title'].letterSpacing,
  lineHeight: theme.typography['Components']['Alert Title'].lineHeight,
  textDecoration: theme.typography['Components']['Alert Title'].textDecoration,
  textTransform: theme.typography['Components']['Alert Title'].textTransform,
}));

const ButtonText7 = styled(Button)(({ theme }) => ({
  margin: `0px`,
  color: theme.palette['Common']['Black']['100p'],
  fontStyle: theme.typography['Components']['Button Font - Small'].fontStyle,
  fontFamily: theme.typography['Components']['Button Font - Small'].fontFamily,
  fontWeight: theme.typography['Components']['Button Font - Small'].fontWeight,
  fontSize: theme.typography['Components']['Button Font - Small'].fontSize,
  letterSpacing:
    theme.typography['Components']['Button Font - Small'].letterSpacing,
  lineHeight: theme.typography['Components']['Button Font - Small'].lineHeight,
  textDecoration:
    theme.typography['Components']['Button Font - Small'].textDecoration,
  textTransform:
    theme.typography['Components']['Button Font - Small'].textTransform,
}));

const AlertOutlined3 = styled(Alert)(({ theme }) => ({
  width: `600px`,
  margin: `20px 0px 0px 0px`,
  color: theme.palette['Success']['Main'],
  fontStyle: theme.typography['Components']['Alert Title'].fontStyle,
  fontFamily: theme.typography['Components']['Alert Title'].fontFamily,
  fontWeight: theme.typography['Components']['Alert Title'].fontWeight,
  fontSize: theme.typography['Components']['Alert Title'].fontSize,
  letterSpacing: theme.typography['Components']['Alert Title'].letterSpacing,
  lineHeight: theme.typography['Components']['Alert Title'].lineHeight,
  textDecoration: theme.typography['Components']['Alert Title'].textDecoration,
  textTransform: theme.typography['Components']['Alert Title'].textTransform,
}));

function Alert1(props) {
  return (
    <Alert2 className={props.className}>
      <Helmet>
        <title>Alert</title>
      </Helmet>
      <AlertFilled
        variant="filled"
        action={
          <ButtonText
            variant="text"
            size={'small'}
            color={'primary'}
            disabled={false}
          >
            {'Small'}
          </ButtonText>
        }
        onClose={() => {}}
        severity={'error'}
      >
        <AlertTitle>{'Title'}</AlertTitle>
        {'sure what'}
      </AlertFilled>
      <AlertFilled1
        variant="filled"
        action={
          <ButtonText1
            variant="text"
            size={'small'}
            color={'primary'}
            disabled={false}
          >
            {'Small'}
          </ButtonText1>
        }
        onClose={() => {}}
        severity={'warning'}
      >
        <AlertTitle>{'Title'}</AlertTitle>
        {'Description'}
      </AlertFilled1>
      <AlertFilled2
        variant="filled"
        action={
          <ButtonText2
            variant="text"
            size={'small'}
            color={'primary'}
            disabled={false}
          >
            {'Small'}
          </ButtonText2>
        }
        onClose={() => {}}
        severity={'info'}
      >
        <AlertTitle>{'Title'}</AlertTitle>
        {'Description'}
      </AlertFilled2>
      <AlertFilled3
        variant="filled"
        action={
          <ButtonText3
            variant="text"
            size={'small'}
            color={'primary'}
            disabled={false}
          >
            {'Small'}
          </ButtonText3>
        }
        onClose={() => {}}
        severity={'success'}
      >
        <AlertTitle>{'Title'}</AlertTitle>
        {'Description'}
      </AlertFilled3>
      <AlertOutlined
        variant="outlined"
        action={
          <ButtonText4
            variant="text"
            size={'small'}
            color={'primary'}
            disabled={false}
          >
            {'Small'}
          </ButtonText4>
        }
        onClose={() => {}}
        severity={'error'}
      >
        <AlertTitle>{'Title'}</AlertTitle>
        {'Description'}
      </AlertOutlined>
      <AlertOutlined1
        variant="outlined"
        action={
          <ButtonText5
            variant="text"
            size={'small'}
            color={'primary'}
            disabled={false}
          >
            {'Small'}
          </ButtonText5>
        }
        onClose={() => {}}
        severity={'warning'}
      >
        <AlertTitle>{'Title'}</AlertTitle>
        {'Description'}
      </AlertOutlined1>
      <AlertOutlined2
        variant="outlined"
        action={
          <ButtonText6
            variant="text"
            size={'small'}
            color={'primary'}
            disabled={false}
          >
            {'Small'}
          </ButtonText6>
        }
        onClose={() => {}}
        severity={'info'}
      >
        <AlertTitle>{'Title'}</AlertTitle>
        {'Description'}
      </AlertOutlined2>
      <AlertOutlined3
        variant="outlined"
        action={
          <ButtonText7
            variant="text"
            size={'small'}
            color={'primary'}
            disabled={false}
          >
            {'Small'}
          </ButtonText7>
        }
        onClose={() => {}}
        severity={'success'}
      >
        <AlertTitle>{'Title'}</AlertTitle>
        {'Description'}
      </AlertOutlined3>
    </Alert2>
  );
}

export default Alert1;
