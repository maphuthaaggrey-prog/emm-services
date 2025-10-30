import { Helmet } from "react-helmet";

const SEO = ({ 
  title = "Emily Mahlehu Mlotshywa (Pty) Ltd - Industrial Cleaning & Transportation Services",
  description = "South African company providing quality industrial cleaning, transportation, yellow plant services, water management, and civil construction with sustainable practices.",
  canonical = "https://www.emm-services.co.za/",
  image = "/logo.png"
}) => {
  return (
    <Helmet>
      {/* Page-specific title and description */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
};

export default SEO;