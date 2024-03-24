import { Helmet } from 'react-helmet-async';

import MarketingBusinessForm from 'src/sections/_marketing/view/marketing-business';

// ----------------------------------------------------------------------

export default function MarketingBusinessPage() {
  return (
    <>
      <Helmet>
        <title> Marketing: Business</title>
      </Helmet>

      <MarketingBusinessForm />
    </>
  );
}
