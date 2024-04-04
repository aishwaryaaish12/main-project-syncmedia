import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation,Link as RouterLink } from 'react-router-dom';

import Link from '@mui/material/Link';
// @mui
import { Box, Stack, Drawer } from '@mui/material';

import { useResponsive } from 'src/hooks/use-responsive';

import NavAccount from './NavAccount';
// import NavDocs from './NavDocs';
// import { paths } from '../../../routes/paths';
// components
// import Logo from '../../../components/logo';

//
import navConfig from './config-navigation';
// config
import { NAV } from '../../../config-global';
import NavToggleButton from './NavToggleButton';
import Image from '../../../components/image/image';
import Scrollbar from '../../../components/scrollbar';
// hooks
import { NavSectionVertical } from '../../../components/nav-section';

// ----------------------------------------------------------------------

NavVertical.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function NavVertical({ openNav, onCloseNav }) {
  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          pt: 3,
          pb: 2,
          px: 2.5,
          flexShrink: 0,
        }}
      >
        {/* <Logo /> */}
        <Link component={RouterLink} to='/' underline="none" color="inherit">
        <Image src="/assets/logo/logo.png"  sx={{maxWidth:'100px',marginLeft: '4rem',}} />
        </Link>

        <NavAccount />
      </Stack>

      <NavSectionVertical data={navConfig} />

      <Box sx={{ flexGrow: 1 }} />

      {/* <NavDocs /> */}
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_DASHBOARD },
      }}
    >
      <NavToggleButton />

      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              zIndex: 0,
              width: NAV.W_DASHBOARD,
              bgcolor: 'transparent',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              width: NAV.W_DASHBOARD,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
