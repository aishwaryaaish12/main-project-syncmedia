import { Helmet } from 'react-helmet-async';

import MarketingAdminhomePage from 'src/sections/_marketing/view/marketing-adminhome';

// ----------------------------------------------------------------------

export default function MarketingBusinessPage() {
  return (
    <>
      <Helmet>
        <title> Marketing: Admin Home</title>
      </Helmet>

      <MarketingAdminhomePage/>
    </>
  );
}
