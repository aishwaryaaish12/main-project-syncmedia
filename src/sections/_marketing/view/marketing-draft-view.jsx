import * as React from 'react';

import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import { DataGrid } from '@mui/x-data-grid';
import ListItem from '@mui/material/ListItem';
import Collapse from '@mui/material/Collapse';
import ListItemText from '@mui/material/ListItemText';

export default function AdminDashboard() {
  const [openContent, setOpenContent] = React.useState(false);
  const [openEmailCampaign, setOpenEmailCampaign] = React.useState(false);
  const [openWhatsAppCampaign, setOpenWhatsAppCampaign] = React.useState(false);

  const toggleContent = () => {
    setOpenContent(!openContent);
  };

  const toggleEmailCampaign = () => {
    setOpenEmailCampaign(!openEmailCampaign);
  };

  const toggleWhatsAppCampaign = () => {
    setOpenWhatsAppCampaign(!openWhatsAppCampaign);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'firstName', headerName: 'First name', width: 150, editable: true },
    { field: 'lastName', headerName: 'Last name', width: 150, editable: true },
    { field: 'age', headerName: 'Age', type: 'number', width: 110, editable: true },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    <>
      <Drawer variant="permanent" anchor="left" sx={{ width: '500px', flexShrink: 0 }}>
        <List sx={{ marginTop: '10px' }}>
          <ListItem button onClick={toggleContent}>
            <ListItemText primary="Content " sx={{borderRadius:1}} />
          </ListItem>
          <Collapse in={openContent} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemText primary="All Content" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Scheduled Content" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={toggleEmailCampaign}>
            <ListItemText primary="Email Campaigns" />
          </ListItem>
          <Collapse in={openEmailCampaign} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemText primary="Allcampaign" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Scheduled campaign" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={toggleWhatsAppCampaign}>
            <ListItemText primary="WhatsApp Campaigns" />
          </ListItem>
          <Collapse in={openWhatsAppCampaign} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemText primary="All campaign" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Scheduled campaign" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
      <Grid container spacing={2} justifyContent="center" >
        <Grid item xs={12} sm={6} md={8}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            sx={{ height: 'calc(100vh - 54px)', width: '100%' }} // Adjust the height as per your layout
          />
        </Grid>
      </Grid>
    </>
  );
}
