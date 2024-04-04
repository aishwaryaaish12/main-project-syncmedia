import { Helmet } from 'react-helmet-async';

import MarketingContentView from 'src/sections/_marketing/view/marketing-content-view';

// ----------------------------------------------------------------------

export default function MarketingContentPage() {
  return (
    <>
      <Helmet>
        <title> Content Library</title>
      </Helmet>

      <MarketingContentView />
    </>
  );
}
