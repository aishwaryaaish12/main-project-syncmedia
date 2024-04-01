import { Helmet } from 'react-helmet-async';

import MarketingContent2View from 'src/sections/_marketing/view/marketing-content2-view';

// ----------------------------------------------------------------------

export default function MarketingContent2Page() {
  return (
    <>
      <Helmet>
        <title> Marketing: Content</title>
      </Helmet>

      <MarketingContent2View />
    </>
  );
}
