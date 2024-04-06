import { Helmet } from 'react-helmet-async';

import MarketingTravelTourItem from 'src/sections/_marketing/view/marketing-travel-tour-item';

// ----------------------------------------------------------------------

export default function MarketingTravelTourPage() {
  return (
    <>
      <Helmet>
        <title> Marketing: Travel Tour Item</title>
      </Helmet>

      <MarketingTravelTourItem />
    </>
  );
}
