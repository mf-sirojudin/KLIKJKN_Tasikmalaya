import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  image = "https://klikjkntasik.vercel.app/og-image.png",
  url = "https://klikjkntasik.vercel.app/",
}) {
  return (
    <Helmet>

      {/* Title */}
      <title>{title}</title>

      {/* SEO */}
      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content="index, follow"
      />

      {/* Canonical */}
      <link
        rel="canonical"
        href={url}
      />

      {/* Open Graph */}
      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:site_name"
        content="KLIK JKN Tasik"
      />

      <meta
        property="og:locale"
        content="id_ID"
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
        property="og:image:width"
        content="1200"
      />

      <meta
        property="og:image:height"
        content="630"
      />

      <meta
        property="og:image:type"
        content="image/png"
      />

      <meta
        property="og:image:alt"
        content="KLIK JKN BPJS Kesehatan Kantor Cabang Tasikmalaya"
      />

      <meta
        property="og:url"
        content={url}
      />

      {/* Twitter Card */}
      <meta
        name="twitter:card"
        content="summary_large_image"
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

      <meta
        name="twitter:site"
        content="@bpjskesehatanRI"
      />

      <meta
        name="twitter:creator"
        content="@bpjskesehatanRI"
      />

    </Helmet>
  );
}

export default SEO;