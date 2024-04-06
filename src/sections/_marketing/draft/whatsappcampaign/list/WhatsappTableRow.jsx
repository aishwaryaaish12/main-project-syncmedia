import { useState } from 'react';
import PropTypes from 'prop-types';

// @mui
import {
  Stack,
  // Avatar,
  Button,
  // Checkbox,
  TableRow,
  MenuItem,
  TableCell,
  IconButton,
  Typography,
} from '@mui/material';

// components
import Label from 'src/components/label/label';
import Iconify from 'src/components/iconify/iconify';
import MenuPopover from 'src/components/menu-popover/MenuPopover';
import ConfirmDialog from 'src/components/confirm-dialog/ConfirmDialog';

// import { UPLOAD_URL } from '../../../../assets/data/constants';

// ----------------------------------------------------------------------

WhatsappTableRow.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  onEditRow: PropTypes.func,
  onDeleteRow: PropTypes.func, 
  onSelectRow: PropTypes.func,
  onToggleActiveRow: PropTypes.func,
};
export default function WhatsappTableRow({
  row,
  selected,
  onEditRow,
  onSelectRow,
  onDeleteRow,
  onToggleActiveRow,
}) {
  const { name, email, phone, role, status } = row;
  const [openConfirm, setOpenConfirm] = useState(false);

  const [openPopover, setOpenPopover] = useState(null);

  const [OpenToggleConfirm, setOpenToggleConfirm] = useState(false);

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    console.log('confirm button is clicked');
    setOpenConfirm(false);
  };

  const handleOpenPopover = (event) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  const handleOpenToggleConfirm = () => {
    setOpenToggleConfirm(true);
  };

  const handleCloseToggleConfirm = () => {
    console.log('Toggle button clicked');
    setOpenToggleConfirm(false);
  };
  return (
    <>
      <TableRow hover selected={selected}>
        {/* <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell> */}

        <TableCell>
          <Stack direction="row" alignItems="center" spacing={2}>
            {/* <Avatar alt={name} src={UPLOAD_URL + image} /> */}

            <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {role}
        </TableCell>
        <TableCell align="left">{email}</TableCell>

        <TableCell align="left">{phone}</TableCell>
        {/* <TableCell align="center">
          <Iconify
            icon={isVerified ? 'eva:checkmark-circle-fill' : 'eva:clock-outline'}
            sx={{
              width: 20,
              height: 20,
              color: 'success.main',
              ...(!isVerified && { color: 'warning.main' }),
            }}
          />
        </TableCell> */}

        <TableCell align="left">
          <Label
            variant="soft"
            color={(status === 'banned' && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {status}
          </Label>
        </TableCell>

        <TableCell align="right">
          <IconButton color={openPopover ? 'inherit' : 'default'} onClick={handleOpenPopover}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <MenuPopover
        open={openPopover}
        onClose={handleClosePopover}
        arrow="right-top"
        sx={{ width: 140 }}
      >
        <MenuItem
          onClick={() => {
            handleOpenConfirm();
            handleClosePopover();
          }}
          sx={{ color: 'error.main' }}
        >
          <Iconify icon="eva:trash-2-outline" />
          Delete
        </MenuItem>

        {/* <MenuItem
          onClick={() => {
            onEditRow();
            handleClosePopover();
          }}
        >
          <Iconify icon="eva:edit-fill" />
          Edit
        </MenuItem> */}

        <MenuItem
          onClick={() => {
            handleOpenToggleConfirm();
            handleClosePopover();
          }}
        >
          <Iconify icon={status === 'active' ? 'mdi:ban' : 'tabler:user-check'} />
          {status === 'active' ? 'Deactivate' : 'Activate'}
        </MenuItem>
      </MenuPopover>
      
      <ConfirmDialog
        open={openConfirm}
        onClose={handleCloseConfirm}
        title="Delete"
        content="Are you sure want to delete?"
        action={
          <Button variant="contained" color="error" onClick={onDeleteRow}>
            Delete
          </Button>
        }
      />
      <ConfirmDialog
        open={OpenToggleConfirm}
        onClose={handleCloseToggleConfirm}
        title={status === 'active' ? 'deactivate' : 'activate'}
        content={`Are you sure want to ${status === 'active' ? 'deactivate' : 'activate'}`}
        action={
          <Button
            variant="contained"
            color={status === 'active' ? 'error' : 'success'}
            onClick={() => {
              handleCloseToggleConfirm();
              onToggleActiveRow();
              
            }}
          >
            {status === 'active' ? 'deactivate' : 'activate'}
          </Button>
        }
      />
</>
);
}
