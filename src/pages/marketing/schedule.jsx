import { Helmet } from 'react-helmet-async';

import MarketingScheduleView from 'src/sections/_marketing/view/marketing-schedule-view';

// ----------------------------------------------------------------------

export default function MarketingSchedulePage() {
  return (
    <>
      <Helmet>
        <title>Schedule</title>
      </Helmet>

      <MarketingScheduleView />
    </>
  );
}
