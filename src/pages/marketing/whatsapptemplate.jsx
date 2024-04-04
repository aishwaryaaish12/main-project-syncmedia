import { Helmet } from 'react-helmet-async';

import MarketingWhatsapptemplateView from 'src/sections/_marketing/view/marketing-whatsapptemplate-view';

// ----------------------------------------------------------------------

export default function MarketingWhatsapptemplatePage() {
  return (
    <>
      <Helmet>
        <title>Whatsapp Template</title>
      </Helmet>

      <MarketingWhatsapptemplateView />
    </>
  );
}
