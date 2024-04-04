import { Helmet } from 'react-helmet-async';

import SocialMediaForm from '../../sections/dashboard/socialmedia/SocialMediaForm'

export default function NewSocialMediaPage() {
  return (
    <>
      <Helmet>
        <title> Marketing: Admin Users</title>
      </Helmet>

      <SocialMediaForm/>
    </>
  );
}
