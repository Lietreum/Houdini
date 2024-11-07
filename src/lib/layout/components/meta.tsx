import { Helmet, HelmetProvider } from 'react-helmet-async';

const APP_NAME = 'Zeke';

export const Meta = () => {
  return (
    <HelmetProvider>

    <Helmet>
      <title>Zeke | Homepage</title>
      <meta name="description" content="Zeke" />

      <meta name="application-name" content={APP_NAME} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={APP_NAME} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#FFFFFF" />

      <link rel="shortcut icon" href="/assets/favicon.png" />
    </Helmet>
    </HelmetProvider>

  );
};
