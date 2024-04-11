import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button"

import NavList from './nav-list';

// ----------------------------------------------------------------------

export default function NavDesktop({ data, sx, ...other }) {
  const handleLogout = () => {
    // Remove the token from localStorage
    console.log('heyy')
    localStorage.removeItem('token');
    // Navigate to home page
    window.location.href = '/';
  };
  return (
    <Stack
      component="nav"
      direction="row"
      spacing={5}
      sx={{
        height: 1,
        ...sx,
      }}
      {...other}
    >
      {data.map((list) => (
        <NavList key={list.title} data={list} />
      ))}
      <Button onClick={()=>handleLogout()}>LOgout</Button>
    </Stack>
  );
}

NavDesktop.propTypes = {
  data: PropTypes.array,
  sx: PropTypes.object,
};
