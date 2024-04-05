import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// @mui
import { alpha } from '@mui/material/styles';
// import alpha from '@mui/material/styles';
import { Box, Stack, Divider, MenuItem, Typography } from '@mui/material';

import { paths } from '../../../routes/paths';
import { useSnackbar } from '../../../components/snackbar';
import MenuPopover from '../../../components/menu-popover';
import { useAuthContext } from '../../../auth/useAuthContext';
import { IconButtonAnimate } from '../../../components/animate';

// ----------------------------------------------------------------------

const OPTIONS = [
  {
    label: 'Home',
    linkTo: '/',
  },
  // {
  //   label: 'Profile',
  //   // linkTo: PATH_DASHBOARD.user.profile,
  //   linkTo: paths.profile,
  // },
  {
    label: 'Account',
    linkTo: paths.account,
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const navigate = useNavigate();

  const { user, logout } = useAuthContext();

  const { enqueueSnackbar } = useSnackbar();
  console.log('user', user?.avatar);

  const [openPopover, setOpenPopover] = useState(null);

  const handleOpenPopover = (event) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  const handleLogout = async () => {
    try {
      const response = await logout();
      console.log({ response });
      enqueueSnackbar(response.data.message, { variant: 'success' });
      navigate(paths.loginCover, { replace: true });
      handleClosePopover();
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Unable to logout!', { variant: 'error' });
    }
  };

  const handleClickItem = (path) => {
    handleClosePopover();
    navigate(path);
  };

  return (
    <>
      <IconButtonAnimate
        onClick={handleOpenPopover}
        sx={{
          p: 0,
          ...(openPopover && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        {/* <Avatar src={UPLOAD_URL + user.avatar} alt={user?.name} /> */}
        {/* <CustomAvatar src={UPLOAD_URL + user.avatar} alt={user?.name} name={user?.name} /> */}
      </IconButtonAnimate>

      <MenuPopover open={openPopover} onClose={handleClosePopover} sx={{ width: 200, p: 0 }}>
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.name}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {user?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={() => handleClickItem(option.linkTo)}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
         Logout
        </MenuItem>
      </MenuPopover>
    </>
  );
}
