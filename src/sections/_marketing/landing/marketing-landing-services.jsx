import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

// import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'success', 'warning'];

const SERVICES = [
  {
    name: 'Scheduling',
    icon: '/assets/icons/service/akar-icons--schedule.svg',
    content: 'Users can specify the date and time they want the content to be published',
    path: paths.marketing.services,
  },
  {
    name: 'Cross-Platform Posting',
    icon: '/assets/icons/ic_marketing_bullhorn.svg',
    content: 'Support posting on multiple social media platforms simultaneously, saving time for users managing accounts on various channels.',
    path: paths.marketing.services,
  },
  {
    name: 'Content Calendar',
    icon: '/assets/icons/service/icon-park-outline--schedule.svg',
    content: 'Content calendar that provides a visual overview of scheduled posts, making it easier to plan and organize content across different platforms.',
    path: paths.marketing.services,
  },
  {
    name: 'Campaign',
    icon: '/assets/icons/service/tabler--brand-campaignmonitor.svg',
    content: 'Support users in executing comprehensive outreach plans by incorporating features for both email and WhatsApp campaigns on the platform.',
    path: paths.marketing.services,
  },
 
];

// ----------------------------------------------------------------------

export default function MarketingLandingServices() {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          maxWidth: 480,
          mb: { xs: 8, md: 5 },
          mx: { xs: 'auto', md: 'unset' },
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Our Services
        </Typography>

        <Typography variant="h2">We Provide</Typography>

        {/* <Typography sx={{ color: 'text.secondary' }}>
          Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
        </Typography> */}
      </Stack>

      <Box
        sx={{
          gap: 4,
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {SERVICES.map((service, index) => (
          <ServiceItem key={service.name} service={service} index={index} />
        ))}
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

function ServiceItem({ service, index }) {
  const { name, icon, content, path } = service;

  return (
    <Card
      sx={{
        px: 4,
        py: 5,
        textAlign: 'center',
        ...(index === 1 && {
          py: { xs: 5, md: 8 },
        }),
        ...(index === 2 && {
          py: { xs: 5, md: 10 },
          boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
        }),
      }}
    >
      <SvgColor
        src={icon}
        sx={{
          width: 88,
          height: 88,
          mx: 'auto',
          color: (theme) => theme.palette[COLORS[index]].main,
        }}
      />

      <Stack spacing={1} sx={{ my: 5 }}>
        <TextMaxLine variant="h6">{name}</TextMaxLine>
        <TextMaxLine variant="body2" sx={{ color: 'text.secondary' }}>
          {content}
        </TextMaxLine>
      </Stack>

      <IconButton
        component={RouterLink}
        href={path}
        color={
          (index === 0 && 'primary') ||
          (index === 1 && 'secondary') ||
          (index === 2 && 'success') ||
          'warning'
        }
      >
        {/* <Iconify icon="carbon:direction-straight-right" /> */}
      </IconButton>
    </Card>
  );
}

ServiceItem.propTypes = {
  index: PropTypes.number,
  service: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
    content: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }),
};
