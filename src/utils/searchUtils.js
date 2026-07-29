import servicesData from "../data/servicesData";

import pandawaVideos from "../data/pandawaVideos";
import pandawaBrochures from "../data/pandawaBrochures";

import mobileJknVideos from "../data/mobileJknVideos";
import mobileJknBrochures from "../data/mobileJknBrochures";

import bpjsVideos from "../data/bpjsVideos";
import bpjsBrochures from "../data/bpjsBrochures";

import bpjsSatuData from "../data/bpjsSatuData";

/* =====================================================
   Mapping seluruh kategori
===================================================== */

const resourceMap = {
  "video-pandawa": pandawaVideos,
  "brosur-pandawa": pandawaBrochures,

  "video-mobile-jkn": mobileJknVideos,
  "brosur-mobile-jkn": mobileJknBrochures,

  "video-informasi-bpjs": bpjsVideos,
  "brosur-informasi-bpjs": bpjsBrochures,

  "bpjs-satu": bpjsSatuData,
};

/* =====================================================
   Menggabungkan seluruh resource
===================================================== */

export function getAllResources() {
  const results = [];

  servicesData.forEach((service) => {
    const items = resourceMap[service.slug] || [];

    items.forEach((item) => {
      results.push({
        ...item,

        category: service.title,
        categorySlug: service.slug,
        categoryDescription: service.description,
        resourceType: service.type,

        // menentukan komponen card
        cardType:
          item.cardType || "resource",
      });
    });
  });

  return results;
}

/* =====================================================
   Search Global
===================================================== */

export function searchResources(keyword = "") {
  const query = keyword.trim().toLowerCase();

  if (!query) return [];

  return getAllResources().filter((item) => {
    const searchableText = [
      item.title,
      item.name,
      item.description,
      item.category,
      item.categoryDescription,
      item.phone,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableText.includes(query);
  });
}

/* =====================================================
   Search Resource per Kategori
===================================================== */

export function searchCategoryResources(
  slug,
  keyword = ""
) {
  const service = servicesData.find(
    (item) => item.slug === slug
  );

  const resources = getResourcesByCategory(slug).map(
    (item) => ({
      ...item,

      category: service?.title,
      categorySlug: slug,
      categoryDescription:
        service?.description,

      cardType:
        item.cardType || "resource",
    })
  );

  if (!keyword.trim()) {
    return resources;
  }

  const query = keyword.trim().toLowerCase();

  return resources.filter((item) => {
    const searchableText = [
      item.title,
      item.name,
      item.description,
      item.phone,
      item.whatsapp,
      item.category,
      item.categoryDescription,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableText.includes(query);
  });
}

export function getResourcesByCategory(slug) {
  return resourceMap[slug] || [];
}