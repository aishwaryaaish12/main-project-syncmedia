import { Helmet } from 'react-helmet-async';

import MarketingDraftView from 'src/sections/_marketing/view/marketing-draft-view';

// ----------------------------------------------------------------------

export default function MarketingDraftPage() {
  return (
    <>
      <Helmet>
        <title>Draft</title>
      </Helmet>

      <MarketingDraftView />
    </>
  );
}
