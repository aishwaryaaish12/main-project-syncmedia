import { Helmet } from 'react-helmet-async';

import MarketingUploadView from 'src/sections/_marketing/view/marketing-upload-view';

// ----------------------------------------------------------------------

export default function MarketingUploadPage() {
  return (
    <>
      <Helmet>
        <title>Upload</title>
      </Helmet>

      <MarketingUploadView />
    </>
  );
}
