import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';

// import Iconify from 'src/components/iconify';
import Image from 'src/components/image';


function AdminHomePage() {
  // State variables to hold user statistics and feedback count
  const [userStats, setUserStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    inactiveUsers: 0,
    subscribedUsers: 0,
    unsubscribedUsers: 0,
    blockedUsers: 0,
    feedbackCount:0,
  });
  const [feedbackCount, setFeedbackCount] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Function to toggle drawer
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Function to fetch user statistics and feedback count
  useEffect(() => {
    // This is a placeholder for fetching actual data
    // You need to replace it with your actual data fetching logic

    // Example fetch call (replace with actual fetch call)
    fetch('your_api_endpoint_here')
      .then(response => response.json())
      .then(data => {
        setUserStats({
          totalUsers: data.totalUsers,
          activeUsers: data.activeUsers,
          inactiveUsers: data.inactiveUsers,
          subscribedUsers: data.subscribedUsers,
          unsubscribedUsers: data.unsubscribedUsers,
          blockedUsers: data.blockedUsers,
          feedbackCount:data.feedbackCount
        });
        setFeedbackCount(data.feedbackCount);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures the effect runs only once after component mounts

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {/* Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        {/* Content of the drawer */}
        <Box width="250px">
          {/* Add your drawer content here */}
          <Typography variant="h6" style={{ margin: '10px 0' }}>Drawer Content Goes Here</Typography>
        </Box>
      </Drawer>

      {/* Drawer toggle button */}
      <IconButton onClick={toggleDrawer} style={{ position: 'absolute', left: '10px', top: '10px' }}>
        <MenuIcon />
      </IconButton>

      {/* Cards */}
      <Box display="flex" justifyContent="center" flexWrap="wrap" width="100%">
        {/* First row */}
        <Box display="flex" justifyContent="space-around" marginBottom="20px" width="100%" textAlign='center' sx={{cursor:'pointer'}}>
          {/* Card for Total Users */}
          <Card className="card" style={{ width: '300px',height:'250px',marginLeft:'50px' }}>
            <CardContent>
           
            <Image src='/assets/icons/ic_popularity.svg' sx={{pt:'2px',width:'50px' ,                
                    position: 'relative', 
                    overflow: 'hidden', // Ensure the circle stays within the image boundaries
                    '&:hover::before': { 
                      content: '""', 
                      position: 'absolute', 
                      top: '0', 
                      left: '0', 
                      width: '100%', // Set width to cover the entire image
                      height: '100%', // Set height to cover the entire image
                      borderRadius: '50%', // Make it a circle
                      backgroundColor: 'rgb(250, 84, 28)', 
                      zIndex: -1 
                    } 
                }}  
  />

              <Typography variant="h5"sx={{pt:'60px'}}>Total Users</Typography>
              <Typography variant="body1">{userStats.totalUsers}</Typography>
            </CardContent>
          </Card>

          {/* Card for Active Users */}
          <Card className="card" style={{ width: '300px',height:'250px'}}>
            <CardContent>
            <Image src='/assets/icons/ic_customer_service.svg' sx={{pt:'3px' ,position: 'relative', 
                    overflow: 'hidden', // Ensure the circle stays within the image boundaries
                    '&:hover::before': { 
                      content: '""', 
                      position: 'absolute', 
                      top: '0', 
                      left: '0', 
                      width: '100%', // Set width to cover the entire image
                      height: '100%', // Set height to cover the entire image
                      borderRadius: '85%', // Make it a circle
                      backgroundColor: 'rgb(250, 84, 28)', 
                      zIndex: -1 
                    } 
}}/>

              <Typography variant="h5" sx={{pt:'60px'}}>Active Users</Typography>
              <Typography variant="body1">{userStats.activeUsers}</Typography>
            </CardContent>
          </Card>
          <Card className="card" style={{width: '300px',height:'250px' }}>
            <CardContent>
            <Image src='/assets/icons/ic_money.svg' sx={{pt:'2px' ,                    position: 'relative', 
                    overflow: 'hidden', // Ensure the circle stays within the image boundaries
                    '&:hover::before': { 
                      content: '""', 
                      position: 'absolute', 
                      top: '0', 
                      left: '0', 
                      width: '100%', // Set width to cover the entire image
                      height: '100%', // Set height to cover the entire image
                      borderRadius: '50%', // Make it a circle
                      backgroundColor: 'rgb(250, 84, 28)', 
                      zIndex: -1 
                    } 
}}/>

              <Typography variant="h5" sx={{pt:'60px'}}>Inactive Users</Typography>
              <Typography variant="body1">{userStats.inactiveUsers}</Typography>
            </CardContent>
          </Card>

        </Box>

        {/* Second row */}
        <Box display="flex" justifyContent="space-around" marginBottom="20px" width="100%" textAlign='center' sx={{cursor:'pointer'}}>
          {/* Card for Inactive Users */}

          {/* Card for Subscribed Users */}
          <Card className="card" style={{width: '300px',height:'250px',marginLeft:'50px'}}>
            <CardContent>
            <Image src='/assets/icons/ic_agreement.svg' sx={{pt:'2px',width:'50px',                    position: 'relative', 
                    overflow: 'hidden', // Ensure the circle stays within the image boundaries
                    '&:hover::before': { 
                      content: '""', 
                      position: 'absolute', 
                      top: '0', 
                      left: '0', 
                      width: '100%', // Set width to cover the entire image
                      height: '100%', // Set height to cover the entire image
                      borderRadius: '50%', // Make it a circle
                      backgroundColor: 'rgb(250, 84, 28)', 
                      zIndex: -1 
                    } 
}}/>

              <Typography variant="h5" sx={{pt:'60px'}}>Subscribed Users</Typography>
              <Typography variant="body1">{userStats.subscribedUsers}</Typography>
            </CardContent>
          </Card>
          <Card className="card" style={{ width: '300px',height:'250px' }}>
            <CardContent>
            <Image src='/assets/icons/ic_statistics.svg' sx={{pt:'2px',width:'50px',                    position: 'relative', 
                    overflow: 'hidden', // Ensure the circle stays within the image boundaries
                    '&:hover::before': { 
                      content: '""', 
                      position: 'absolute', 
                      top: '0', 
                      left: '0', 
                      width: '100%', // Set width to cover the entire image
                      height: '100%', // Set height to cover the entire image
                      borderRadius: '50%', // Make it a circle
                      backgroundColor: 'rgb(250, 84, 28)', 
                      zIndex: -1 
                    } 
}}/>

              <Typography variant="h5" sx={{pt:'60px'}}>Blocked Users</Typography>
              <Typography variant="body1">{userStats.inactiveUsers}</Typography>
            </CardContent>
          </Card>

          {/* Card for Subscribed Users */}
          <Card className="card" style={{width: '300px',height:'250px' }}>
            <CardContent>
            <Image src='/assets/icons/ic_social_media.svg' sx={{pt:'3px',width:'50px',                    position: 'relative', 
                    overflow: 'hidden', // Ensure the circle stays within the image boundaries
                    '&:hover::before': { 
                      content: '""', 
                      position: 'absolute', 
                      top: '0', 
                      left: '0', 
                      width: '100%', // Set width to cover the entire image
                      height: '100%', // Set height to cover the entire image
                      borderRadius: '50%', // Make it a circle
                      backgroundColor: 'rgb(250, 84, 28)', 
                      zIndex: -1 
                    } 
}}/>

              <Typography variant="h5" sx={{pt:'60px'}}>Feedback</Typography>
              <Typography variant="body1">{userStats.subscribedUsers}</Typography>
            </CardContent>
          </Card>
        </Box>

      </Box>
    </Box>
  );
}

export default AdminHomePage;
