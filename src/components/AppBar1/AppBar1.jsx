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
import {
  AppBar,
  Toolbar,
  IconButton,
  TextField,
  Button,
  SvgIcon,
} from '@mui/material';
import { IconMenu2, IconStar } from 'lib';
import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';

const AppBar2 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `24px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  height: 'auto',
});

const LeftSide = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const IconMenu21 = styled(SvgIcon)({
  width: `24px`,
  height: `24px`,
});

const IconButton1 = styled(IconButton)(({ theme }) => ({
  margin: `0px`,
}));

const Title = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['Primary']['Contrast'],
  fontStyle: theme.typography['Typography']['Body 1'].fontStyle,
  fontFamily: theme.typography['Typography']['Body 1'].fontFamily,
  fontWeight: theme.typography['Typography']['Body 1'].fontWeight,
  fontSize: theme.typography['Typography']['Body 1'].fontSize,
  letterSpacing: theme.typography['Typography']['Body 1'].letterSpacing,
  lineHeight: theme.typography['Typography']['Body 1'].lineHeight,
  textDecoration: theme.typography['Typography']['Body 1'].textDecoration,
  textTransform: theme.typography['Typography']['Body 1'].textTransform,
  margin: `0px 0px 0px 16px`,
}));

const TextFieldOutlined = styled(TextField)(({ theme }) => ({
  width: `220px`,
  margin: `0px`,
  color: theme.palette['Text']['Primary'],
  fontStyle: theme.typography['Components']['Input Text'].fontStyle,
  fontFamily: theme.typography['Components']['Input Text'].fontFamily,
  fontWeight: theme.typography['Components']['Input Text'].fontWeight,
  fontSize: theme.typography['Components']['Input Text'].fontSize,
  letterSpacing: theme.typography['Components']['Input Text'].letterSpacing,
  lineHeight: theme.typography['Components']['Input Text'].lineHeight,
  textDecoration: theme.typography['Components']['Input Text'].textDecoration,
  textTransform: theme.typography['Components']['Input Text'].textTransform,
}));

const ButtonText = styled(Button)(({ theme }) => ({
  margin: `0px`,
  color: theme.palette['Primary']['Contrast'],
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

const IconStar1 = styled(SvgIcon)({
  width: `24px`,
  height: `24px`,
});

const IconButton2 = styled(IconButton)(({ theme }) => ({
  margin: `0px`,
}));

const IconStar2 = styled(SvgIcon)({
  width: `24px`,
  height: `24px`,
});

const IconButton3 = styled(IconButton)(({ theme }) => ({
  margin: `0px`,
}));

const IconStar3 = styled(SvgIcon)({
  width: `24px`,
  height: `24px`,
});

const IconButton4 = styled(IconButton)(({ theme }) => ({
  margin: `0px`,
}));

const MinHeight = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  width: `0px`,
  height: `64px`,
  margin: `0px`,
});

const AppBar3 = styled(AppBar)(({ theme }) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const LeftSide1 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const IconMenu22 = styled(SvgIcon)({
  width: `24px`,
  height: `24px`,
});

const IconButton5 = styled(IconButton)(({ theme }) => ({
  margin: `0px`,
}));

const Title1 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['Primary']['Contrast'],
  fontStyle: theme.typography['Typography']['Body 1'].fontStyle,
  fontFamily: theme.typography['Typography']['Body 1'].fontFamily,
  fontWeight: theme.typography['Typography']['Body 1'].fontWeight,
  fontSize: theme.typography['Typography']['Body 1'].fontSize,
  letterSpacing: theme.typography['Typography']['Body 1'].letterSpacing,
  lineHeight: theme.typography['Typography']['Body 1'].lineHeight,
  textDecoration: theme.typography['Typography']['Body 1'].textDecoration,
  textTransform: theme.typography['Typography']['Body 1'].textTransform,
  margin: `0px 0px 0px 16px`,
}));

const TextFieldOutlined1 = styled(TextField)(({ theme }) => ({
  width: `220px`,
  margin: `0px`,
  color: theme.palette['Text']['Primary'],
  fontStyle: theme.typography['Components']['Input Text'].fontStyle,
  fontFamily: theme.typography['Components']['Input Text'].fontFamily,
  fontWeight: theme.typography['Components']['Input Text'].fontWeight,
  fontSize: theme.typography['Components']['Input Text'].fontSize,
  letterSpacing: theme.typography['Components']['Input Text'].letterSpacing,
  lineHeight: theme.typography['Components']['Input Text'].lineHeight,
  textDecoration: theme.typography['Components']['Input Text'].textDecoration,
  textTransform: theme.typography['Components']['Input Text'].textTransform,
}));

const ButtonText1 = styled(Button)(({ theme }) => ({
  margin: `0px`,
  color: theme.palette['Primary']['Contrast'],
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

const IconStar4 = styled(SvgIcon)({
  width: `24px`,
  height: `24px`,
});

const IconButton6 = styled(IconButton)(({ theme }) => ({
  margin: `0px`,
}));

const IconStar5 = styled(SvgIcon)({
  width: `24px`,
  height: `24px`,
});

const IconButton7 = styled(IconButton)(({ theme }) => ({
  margin: `0px`,
}));

const IconStar6 = styled(SvgIcon)({
  width: `24px`,
  height: `24px`,
});

const IconButton8 = styled(IconButton)(({ theme }) => ({
  margin: `0px`,
}));

const MinHeight1 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  width: `0px`,
  height: `48px`,
  margin: `0px`,
});

const AppBar4 = styled(AppBar)(({ theme }) => ({
  alignSelf: `stretch`,
  margin: `24px 0px 0px 0px`,
}));

const LeftSide2 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const IconMenu23 = styled(SvgIcon)({
  width: `24px`,
  height: `24px`,
});

const IconButton9 = styled(IconButton)(({ theme }) => ({
  margin: `0px`,
}));

const Title2 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['Primary']['Contrast'],
  fontStyle: theme.typography['Typography']['Body 1'].fontStyle,
  fontFamily: theme.typography['Typography']['Body 1'].fontFamily,
  fontWeight: theme.typography['Typography']['Body 1'].fontWeight,
  fontSize: theme.typography['Typography']['Body 1'].fontSize,
  letterSpacing: theme.typography['Typography']['Body 1'].letterSpacing,
  lineHeight: theme.typography['Typography']['Body 1'].lineHeight,
  textDecoration: theme.typography['Typography']['Body 1'].textDecoration,
  textTransform: theme.typography['Typography']['Body 1'].textTransform,
  margin: `0px 0px 0px 24px`,
}));

const TextFieldOutlined2 = styled(TextField)(({ theme }) => ({
  flex: `1`,
  margin: `0px 0px 0px 24px`,
  color: theme.palette['Text']['Primary'],
  fontStyle: theme.typography['Components']['Input Text'].fontStyle,
  fontFamily: theme.typography['Components']['Input Text'].fontFamily,
  fontWeight: theme.typography['Components']['Input Text'].fontWeight,
  fontSize: theme.typography['Components']['Input Text'].fontSize,
  letterSpacing: theme.typography['Components']['Input Text'].letterSpacing,
  lineHeight: theme.typography['Components']['Input Text'].lineHeight,
  textDecoration: theme.typography['Components']['Input Text'].textDecoration,
  textTransform: theme.typography['Components']['Input Text'].textTransform,
}));

const ButtonText2 = styled(Button)(({ theme }) => ({
  margin: `0px`,
  color: theme.palette['Primary']['Contrast'],
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

const IconStar7 = styled(SvgIcon)({
  width: `24px`,
  height: `24px`,
});

const IconButton10 = styled(IconButton)(({ theme }) => ({
  margin: `0px`,
}));

const IconStar8 = styled(SvgIcon)({
  width: `24px`,
  height: `24px`,
});

const IconButton11 = styled(IconButton)(({ theme }) => ({
  margin: `0px`,
}));

const IconStar9 = styled(SvgIcon)({
  width: `24px`,
  height: `24px`,
});

const IconButton12 = styled(IconButton)(({ theme }) => ({
  margin: `0px`,
}));

const MinHeight2 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  width: `0px`,
  height: `56px`,
  margin: `0px`,
});

const AppBar5 = styled(AppBar)(({ theme }) => ({
  alignSelf: `stretch`,
  margin: `24px 0px 0px 0px`,
}));

function AppBar1(props) {
  return (
    <AppBar2 className={props.className}>
      <Helmet>
        <title>AppBar</title>
      </Helmet>
      <AppBar3 position="static">
        <Toolbar variant={'regular'}>
          <LeftSide>
            <IconButton1 size={'medium'} color={'default'} disabled={false}>
              <IconMenu21 fontSize={'inherit'} component={IconMenu2} />
            </IconButton1>
            <Title>{`Title`}</Title>
          </LeftSide>
          <TextFieldOutlined
            size={'small'}
            disabled={false}
            multiline={false}
            label={'Label'}
          />
          <ButtonText
            variant="text"
            size={'small'}
            color={'primary'}
            disabled={false}
          >
            {'Small'}
          </ButtonText>
          <IconButton2 size={'medium'} color={'default'} disabled={false}>
            <IconStar1 fontSize={'inherit'} component={IconStar} />
          </IconButton2>
          <IconButton3 size={'medium'} color={'default'} disabled={false}>
            <IconStar2 fontSize={'inherit'} component={IconStar} />
          </IconButton3>
          <IconButton4 size={'medium'} color={'default'} disabled={false}>
            <IconStar3 fontSize={'inherit'} component={IconStar} />
          </IconButton4>
          <MinHeight></MinHeight>
        </Toolbar>
      </AppBar3>
      <AppBar4 position="static">
        <Toolbar variant={'dense'}>
          <LeftSide1>
            <IconButton5 size={'medium'} color={'default'} disabled={false}>
              <IconMenu22 fontSize={'inherit'} component={IconMenu2} />
            </IconButton5>
            <Title1>{`Title`}</Title1>
          </LeftSide1>
          <TextFieldOutlined1
            size={'small'}
            disabled={false}
            multiline={false}
            label={'Label'}
          />
          <ButtonText1
            variant="text"
            size={'small'}
            color={'primary'}
            disabled={false}
          >
            {'Small'}
          </ButtonText1>
          <IconButton6 size={'medium'} color={'default'} disabled={false}>
            <IconStar4 fontSize={'inherit'} component={IconStar} />
          </IconButton6>
          <IconButton7 size={'medium'} color={'default'} disabled={false}>
            <IconStar5 fontSize={'inherit'} component={IconStar} />
          </IconButton7>
          <IconButton8 size={'medium'} color={'default'} disabled={false}>
            <IconStar6 fontSize={'inherit'} component={IconStar} />
          </IconButton8>
          <MinHeight1></MinHeight1>
        </Toolbar>
      </AppBar4>
      <AppBar5 position="static">
        <Toolbar variant={'regular'}>
          <LeftSide2>
            <IconButton9 size={'medium'} color={'default'} disabled={false}>
              <IconMenu23 fontSize={'inherit'} component={IconMenu2} />
            </IconButton9>
            <Title2>{`Title`}</Title2>
            <TextFieldOutlined2
              size={'small'}
              disabled={false}
              multiline={false}
              label={'Label'}
            />
          </LeftSide2>
          <ButtonText2
            variant="text"
            size={'small'}
            color={'primary'}
            disabled={false}
          >
            {'Small'}
          </ButtonText2>
          <IconButton10 size={'medium'} color={'default'} disabled={false}>
            <IconStar7 fontSize={'inherit'} component={IconStar} />
          </IconButton10>
          <IconButton11 size={'medium'} color={'default'} disabled={false}>
            <IconStar8 fontSize={'inherit'} component={IconStar} />
          </IconButton11>
          <IconButton12 size={'medium'} color={'default'} disabled={false}>
            <IconStar9 fontSize={'inherit'} component={IconStar} />
          </IconButton12>
          <MinHeight2></MinHeight2>
        </Toolbar>
      </AppBar5>
    </AppBar2>
  );
}

export default AppBar1;