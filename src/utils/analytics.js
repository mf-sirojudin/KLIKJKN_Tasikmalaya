import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-M9BSSXS162";

export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

export const pageView = (path) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};