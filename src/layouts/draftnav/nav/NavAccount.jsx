import { Link as RouterLink } from 'react-router-dom';

// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Typography } from '@mui/material';

import { useAuthContext } from '../../../auth/useAuthContext';
// routes
import { paths,
  // PATH_DASHBOARD
 } from '../../../routes/paths';
// auth
// components
import { CustomAvatar } from '../../../components/custom-avatar';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

// ----------------------------------------------------------------------

export default function NavAccount() {
  const { user } = useAuthContext();
  console.log(user)
  return (
    <Link component={RouterLink} to={paths.account} underline="none" color="inherit">
      <StyledRoot>
        <CustomAvatar src={user?.photoURL} alt={user?.name} name={user?.name} />

        <Box sx={{ ml: 3, minWidth: 0 }}>
          <Typography variant="subtitle2" noWrap sx={{fontFamily:'-moz-initial', color:'primary.main', fontSize:'18px'}}>
            {/* {user?.name} */}SyncMedia Hub
          </Typography>

          <Typography variant="body2" noWrap sx={{ color: 'text.secondary' }}>
            {/* {user?.role} */}
          </Typography>
        </Box>
      </StyledRoot>
    </Link>
  );
}
