import { library } from "@fortawesome/fontawesome-svg-core";
// import * as fab from "@fortawesome/free-brands-svg-icons";
import * as fas from "@fortawesome/pro-solid-svg-icons";

export const initializeIconList = () => {
  const iconList = [fas.faAcorn, fas.faDog, fas.faCat];

  // Set up icon libraries
  library.add(...iconList);
};
