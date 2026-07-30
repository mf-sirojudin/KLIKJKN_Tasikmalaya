import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { initGA, pageView } from "../../utils/analytics";

function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    pageView(location.pathname + location.search);
  }, [location]);

  return null;
}

export default GoogleAnalytics;