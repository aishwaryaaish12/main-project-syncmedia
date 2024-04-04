import { Helmet } from 'react-helmet-async';

import MarketingUnsubscribeView from 'src/sections/_marketing/view/marketing-unsubscribe-view';

// ----------------------------------------------------------------------

export default function MarketingEmailtemplatePage() {
  return (
    <>
      <Helmet>
        <title>Unsubscribe</title>
      </Helmet>

      <MarketingUnsubscribeView />
    </>
  );
}
