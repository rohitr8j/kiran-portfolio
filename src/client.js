import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

// sanity client
export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET,
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
});

// sanity img url builder
const builder = createImageUrlBuilder(client);

// export image — safely handles broken/partial refs from failed Sanity uploads
export const urlFor = (source) => {
  try {
    if (!source || !source.asset || !source.asset._ref) return null;
    return builder.image(source).url();
  } catch (err) {
    console.warn("urlFor failed for source:", source, err);
    return null;
  }
};
