import React from "react";
import ContentLoader from "react-content-loader";

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={1400}
    height={1000}
    viewBox="0 0 1400 1000"
    backgroundColor="#fafafa"
    foregroundColor="#e4e2e2"
    {...props}
  >
    <rect x="34" y="116" rx="0" ry="0" width="1400" height="440" />
    <rect x="32" y="57" rx="0" ry="0" width="1400" height="45" />
  </ContentLoader>
);

export default Loader;
