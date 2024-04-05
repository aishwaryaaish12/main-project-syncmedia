// @mui
// components
import { Link as RouterLink } from 'react-router-dom';

import Link from '@mui/material/Link';
import { Box, Stack } from '@mui/material';

// import Logo from '../../../components/logo';
//
import navConfig from './config-navigation';
// config
import { NAV } from '../../../config-global';
import NavToggleButton from './NavToggleButton';
import Image from '../../../components/image/image';
// utils
import { hideScrollbarX } from '../../../utils/cssStyles';
import { NavSectionMini } from '../../../components/nav-section';

// ----------------------------------------------------------------------

export default function NavMini() {
  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_DASHBOARD_MINI },
      }}
    >
      <NavToggleButton
        sx={{
          top: 22,
          left: NAV.W_DASHBOARD_MINI - 12,
        }}
      />

      <Stack
        sx={{
          pb: 2,
          height: 1,
          position: 'fixed',
          width: NAV.W_DASHBOARD_MINI,
          borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          ...hideScrollbarX,
        }}
      >
        {/* <Logo sx={{ mx: 'auto', my: 2 }} /> */}
        <Link component={RouterLink} to="/" underline="none" color="inherit">
          <Image src="/assets/logo/logo.png" sx={{ maxWidth: '100px', ml: { lg: '4rem' } }} />
        </Link>

        <NavSectionMini data={navConfig} />
      </Stack>
    </Box>
  );
}
