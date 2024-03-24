import { Helmet } from 'react-helmet-async';

import MarketingUpdatePage from 'src/sections/_marketing/view/marketing-update';

// ----------------------------------------------------------------------

export default function MarketingServicesPage() {
  return (
    <>
      <Helmet>
        <title> Marketing: Update</title>
      </Helmet>

      <MarketingUpdatePage />
    </>
  );
}
