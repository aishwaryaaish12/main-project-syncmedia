import { Helmet } from 'react-helmet-async';

import MarketingCalendarView from 'src/sections/_marketing/view/marketing-calendar-view';

// ----------------------------------------------------------------------

export default function MarketingCalendarPage() {
  return (
    <>
      <Helmet>
        <title>Content Calendar</title>
      </Helmet>

      <MarketingCalendarView />
    </>
  );
}
