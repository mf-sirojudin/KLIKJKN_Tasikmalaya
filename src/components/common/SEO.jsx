import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  image = "https://klikjkntasik.vercel.app/images/hero/hero-building.jpeg",
  url = "https://klikjkntasik.vercel.app/",
}) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <link
        rel="canonical"
        href={url}
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:image"
        content={image}
      />

      <meta
        property="og:url"
        content={url}
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={image}
      />

      <meta property="og:site_name" content="KLIK JKN Tasik" />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

export default SEO;