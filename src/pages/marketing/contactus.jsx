import { Helmet } from 'react-helmet-async';

import MarketingContactUs from 'src/sections/_marketing/view/marketing-contactus';

// ----------------------------------------------------------------------

export default function MarketingContactUsPage() {
  return (
    <>
      <Helmet>
        <title> Marketing: Contact Us</title>
      </Helmet>

      <MarketingContactUs />
    </>
  );
}
