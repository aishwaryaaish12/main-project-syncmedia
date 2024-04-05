import { memo } from 'react';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import { Box, AppBar, Toolbar } from '@mui/material';

//
import navConfig from './config-navigation';
// config
import { HEADER } from '../../../config-global';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// components
import { NavSectionHorizontal } from '../../../components/nav-section';

// ----------------------------------------------------------------------

function NavHorizontal() {
  const theme = useTheme();

  return (
    <AppBar
      component="nav"
      color="transparent"
      sx={{
        boxShadow: 0,
        top: HEADER.H_DASHBOARD_DESKTOP_OFFSET,
      }}
    >
      <Toolbar
        sx={{
          ...bgBlur({
            color: theme.palette.background.default,
          }),
        }}
      >
        <NavSectionHorizontal data={navConfig} />
      </Toolbar>

      <Shadow />
    </AppBar>
  );
}

export default memo(NavHorizontal);

// ----------------------------------------------------------------------

Shadow.propTypes = {
  sx: PropTypes.object,
};

function Shadow({ sx, ...other }) {
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        zIndex: -1,
        width: 1,
        m: 'auto',
        borderRadius: '50%',
        position: 'absolute',
        boxShadow: (theme) => theme.customShadows.z8,
        ...sx,
      }}
      {...other}
    />
  );
}
