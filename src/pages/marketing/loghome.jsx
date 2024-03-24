import { Helmet } from 'react-helmet-async';

import MarketingLoghome from 'src/sections/_marketing/view/marketing-loghome';

// ----------------------------------------------------------------------

export default function MarketingLogin() {
  return (
    <>
      <Helmet>
        <title> Marketing:Log Home</title>
      </Helmet>

      <MarketingLoghome />
    </>
  );
}
