import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Haven Crest Hotel & Suites, Enugu | Luxury Five-Star Experience',
  description = 'Experience premier luxury in Enugu, Nigeria. Haven Crest Hotel & Suites in Independence Layout offers bespoke rooms, fine dining, spa, and seamless Coal City hospitality.',
  canonicalPath = '',
  ogImage = 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
  ogType = 'website',
}) => {
  const siteUrl = 'https://havencrest.ng';
  const canonicalUrl = `${siteUrl}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

  // Ensure brand name is in title if not already present
  const fullTitle = title.includes('Haven Crest') 
    ? title 
    : `${title} | Haven Crest Hotel & Suites, Enugu`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};
