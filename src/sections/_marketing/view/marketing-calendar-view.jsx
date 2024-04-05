import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';

// import Stack from '@mui/system/Stack';
// import { Stack } from '@mui/system/Stack';
import { Typography } from '@mui/material';
import Container  from '@mui/system/Container';
// import { Typography } from '@mui/material/Typography';
// import { _offices } from 'src/_mock';

// import ContactMap from 'src/components/map';

// import CareerNewsletter from '../career-newsletter';
// import CareerContactInfo from '../contact/career-contact-info';

// ----------------------------------------------------------------------

export default function MarketingCalendarView() {
  const localizer = momentLocalizer(moment);

  

  // const events = [
  //   {
  //     title: 'Event 1',
  //     start: new Date(2024, 3, 1),
  //     end: new Date(2024, 3, 2),
  //   },
  //   {
  //     title: 'Event 2',
  //     start: new Date(2024, 3, 3),
  //     end: new Date(2024, 3, 4),
  //   },
  //   // Add more events as needed
  // ];

  return (
    <Container direction='column' justifycontent='center'style={{ minHeight: '100vh' }}>
    <Typography variant='h3' color='primary.darker' sx={{ mb: '3rem', textAlign:'center'}}>Content Calendar</Typography>
    <Calendar
      localizer={localizer}
      // events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 600 }}
    />
    </Container>
  );
}