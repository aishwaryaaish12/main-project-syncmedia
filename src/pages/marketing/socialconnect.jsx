import { Helmet } from 'react-helmet-async';

import MarketingSocialConnectPage from 'src/sections/_marketing/view/marketing-socialconnect';

// ----------------------------------------------------------------------

export default function MarketingServicesPage() {
  return (
    <>
      <Helmet>
        <title> Marketing: Social Connect</title>
      </Helmet>

      <MarketingSocialConnectPage />
    </>
  );
}
