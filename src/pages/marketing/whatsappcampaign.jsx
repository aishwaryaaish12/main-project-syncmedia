import { Helmet } from 'react-helmet-async';

import MarketingWhatsappView from 'src/sections/_marketing/view/marketing-whatsapp-view';

// ----------------------------------------------------------------------

export default function MarketingWhatsappPage() {
  return (
    <>
      <Helmet>
        <title>Whatsappcampaign Form</title>
      </Helmet>

      <MarketingWhatsappView />
    </>
  );
}
