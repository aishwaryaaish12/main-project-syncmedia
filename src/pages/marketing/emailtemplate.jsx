import { Helmet } from 'react-helmet-async';

import MarketingEmailtemplateView from 'src/sections/_marketing/view/marketing-emailtemplate-view';

// ----------------------------------------------------------------------

export default function MarketingEmailtemplatePage() {
  return (
    <>
      <Helmet>
        <title>Email Template</title>
      </Helmet>

      <MarketingEmailtemplateView />
    </>
  );
}
