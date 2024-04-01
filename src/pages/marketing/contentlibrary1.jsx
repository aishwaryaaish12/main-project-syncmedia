import { Helmet } from 'react-helmet-async';

import MarketingContent1View from 'src/sections/_marketing/view/marketing-content1-view';

// ----------------------------------------------------------------------

export default function MarketingContent1Page() {
  return (
    <>
      <Helmet>
        <title> Marketing: Content</title>
      </Helmet>

      <MarketingContent1View />
    </>
  );
}
