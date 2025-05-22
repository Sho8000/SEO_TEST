// components/SeoHead.tsx
import Head from 'next/head';

interface SeoHeadProps {
  title: string;
  description: string;
  ogImage?: string;
  url?: string;
  googleVerification?: string;
}

const SeoHead: React.FC<SeoHeadProps> = ({ title, description, ogImage, url, googleVerification }) => {
  return (
    <Head>
      <title>{title}</title>      
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="robots" content="index, follow" />
      {googleVerification && (
        <meta name="google-site-verification" content={googleVerification} />
      )}
    </Head>
  );
};

export default SeoHead;
