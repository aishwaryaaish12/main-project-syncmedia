// ----------------------------------------------------------------------

export const paths = {
  // Marketing
  marketing: {
    root: '/marketing',
    services: '/marketing/services',
    caseStudies: '/marketing/case-studies',
    caseStudy: `/marketing/case-study`,
    posts: '/marketing/posts',
    post: `/marketing/post`,
    about: '/marketing/about',
    contact: '/marketing/contact',
    content: '/marketing/content',
    loghome: '/marketing/loghome',
    business:'/marketing/business',
    contactus:'/marketing/contactus',
    update:'/marketing/update',
    socialconnect:'/marketing/socialconnect',
    subscription:'/marketing/subscription',
    trialended:'/marketing/trialended',
    

    emailcampaign:'/marketing/emailcampaign',
    schedule: '/marketing/schedule',
    whatsappcampaign:'/marketing/whatsappcampaign',
    ecampaign: '/marketing/ecampaign',
    wcampaign: '/marketing/wcampaign',
    upload: '/marketing/upload',
    calendar: '/marketing/calendar',
    emailtemplate: '/marketing/emailtemplate',
    whatsapptemplate: '/marketing/whatsapptemplate',
    draft: '/marketing/draft',
    unsubscribe: '/marketing/unsubscribe',
  },
  // Travel
  travel: {
    root: '/travel',
    tours: '/travel/tours',
    tour: `/travel/tour`,
    checkout: '/travel/checkout',
    orderCompleted: '/travel/order-completed',
    posts: '/travel/posts',
    post: `/travel/post`,
    about: '/travel/about',
    contact: '/travel/contact',
  },
  // Career
  career: {
    root: '/career',
    jobs: '/career/jobs',
    job: `/career/job`,
    posts: '/career/posts',
    post: `/career/post`,
    about: '/career/about',
    contact: '/career/contact',
  },
  // E-learning
  eLearning: {
    root: '/e-learning',
    courses: '/e-learning/courses',
    course: `/e-learning/course`,
    posts: '/e-learning/posts',
    post: `/e-learning/post`,
    about: '/e-learning/about',
    contact: '/e-learning/contact',
  },
  // E-commerce
  eCommerce: {
    root: '/e-commerce',
    products: '/e-commerce/products',
    product: `/e-commerce/product`,
    cart: '/e-commerce/cart',
    checkout: `/e-commerce/checkout`,
    orderCompleted: '/e-commerce/order-completed',
    wishlist: `/e-commerce/wishlist`,
    compare: `/e-commerce/compare`,
    account: {
      root: `/e-commerce/account`,
      personal: `/e-commerce/account/personal`,
      wishlist: `/e-commerce/account/wishlist`,
      vouchers: `/e-commerce/account/vouchers`,
      orders: `/e-commerce/account/orders`,
      payment: `/e-commerce/account/payment`,
    },
  },
  // Auth
  loginCover: '/auth/login-cover',
  loginBackground: '/auth/login-background',
  loginIllustration: '/auth/login-illustration',
  registerCover: '/auth/register-cover',
  registerBackground: '/auth/register-background',
  registerIllustration: '/auth/register-illustration',
  forgotPassword: '/auth/forgot-password',
  verify: '/auth/verify',
  reset: '/auth/reset',
  resetpassword: '/auth/resetpassword',
  // Common
  maintenance: '/maintenance',
  comingsoon: '/coming-soon',
  pricing01: '/pricing-01',
  pricing02: '/pricing-02',
  payment: '/payment',
  support: '/support',
  page404: '/404',
  page500: '/500',
  // Components
  components: {
    root: '/components',
    animate: '/components/animate',
    carousel: '/components/carousel',
    countUp: '/components/count-up',
    form: '/components/form-validation',
    icons: '/components/icons',
    image: '/components/image',
    label: '/components/label',
    lightbox: '/components/lightbox',
    markdown: '/components/markdown',
    megaMenu: '/components/mega-menu',
    navigation: '/components/navigation-bar',
    scroll: '/components/scroll',
    scrollProgress: '/components/scroll-progress',
    player: '/components/player',
    textMaxLine: '/components/text-max-line',
  },
  // Others
  pages: '/pages',
  docs: 'https://zone-docs.vercel.app',
  license: 'https://material-ui.com/store/license/#i-standard-license',
  minimalStore: 'https://material-ui.com/store/items/minimal-dashboard',
  zoneStore: 'https://mui.com/store/items/zone-landing-page/',
  figmaPreview:
    'https://www.figma.com/file/Zam9QBLhV4pZf5xtNs0Lf8/%5BPreview%5D-Zone_Web.v2.3.0?type=design&node-id=59%3A680507&mode=design&t=GCVeJci5zfUu5WCy-1',
};

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD='/dashboard';

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login-cover'),
  register: path(ROOTS_AUTH, '/register'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  verify: path(ROOTS_AUTH, '/verify'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  newPassword: path(ROOTS_AUTH, '/new-password'),
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  calendar: path(ROOTS_DASHBOARD, '/calendar'),
  permissionDenied: path(ROOTS_DASHBOARD, '/permission-denied'),
  blank: path(ROOTS_DASHBOARD, '/blank'),
  general: {
    app: path(ROOTS_DASHBOARD, '/app'),
    analytics: path(ROOTS_DASHBOARD, '/analytics'),
    booking: path(ROOTS_DASHBOARD, '/booking'),
  },

  user: {
    root: path(ROOTS_DASHBOARD, '/user'),
    new: path(ROOTS_DASHBOARD, '/user/new'),
    list: path(ROOTS_DASHBOARD, '/user/list'),
    cards: path(ROOTS_DASHBOARD, '/user/cards'),
    profile: path(ROOTS_DASHBOARD, '/user/profile'),
    account: path(ROOTS_DASHBOARD, '/user/account'),
    edit: (name) => path(ROOTS_DASHBOARD,`/user/${name}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, `/user/reece-chung/edit`),
  },
  socialmedia:{
   root:path(ROOTS_DASHBOARD, '/socialmedia'),
    new:path(ROOTS_DASHBOARD, '/socialmedia/new'),
    list:path(ROOTS_DASHBOARD, '/socialmedia/list'),
  }
  
};
