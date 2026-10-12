// Components bundle — 3 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 1:84 label (2 variants)
const __venc_Label = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Label = p => "property1=" + __venc_Label(p.property1);
function Label(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 32,
      backgroundColor: "rgb(234,234,234)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "11px 26px 11px 26px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Travel"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 32,
      backgroundColor: "rgb(197,197,197)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "11px 26px 11px 26px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Travel"));
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Variant2
    "property1=variant2": __body1
  };
  return (__impls[__vkey_Label(props)] ?? __body0)();
}

// figma node: 1:762 Vector (2 variants)
const __venc_Vector = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Vector = p => "property1=" + __venc_Vector(p.property1);
function Vector(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48.599,
      height: 41.809,
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 48.599,
    height: 41.809,
    viewBox: "0 0 48.599 41.809",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48.599,
      height: 41.809
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 42.565 20.141 C 44.421 18.255 45.452 15.71 45.432 13.064 C 45.411 10.419 44.34 7.89 42.455 6.034 C 41.522 5.115 40.416 4.389 39.202 3.897 C 37.988 3.405 36.689 3.157 35.379 3.167 C 32.733 3.188 30.204 4.259 28.348 6.144 C 27.844 6.648 27.204 7.267 26.427 8 L 24.266 10.034 L 22.106 8 C 21.327 7.265 20.686 6.646 20.182 6.144 C 18.311 4.273 15.774 3.222 13.129 3.222 C 10.483 3.222 7.946 4.273 6.075 6.144 C 2.222 10 2.177 16.235 5.933 20.109 L 24.266 38.442 L 42.565 20.141 Z M 3.847 3.918 C 5.065 2.699 6.512 1.732 8.105 1.072 C 9.698 0.412 11.405 0.073 13.129 0.073 C 14.852 0.073 16.559 0.412 18.152 1.072 C 19.745 1.732 21.192 2.699 22.411 3.918 C 22.888 4.398 23.507 4.994 24.266 5.708 C 25.022 4.994 25.641 4.397 26.122 3.915 C 28.565 1.435 31.893 0.027 35.374 0 C 38.855 -0.026 42.203 1.331 44.684 3.774 C 47.164 6.216 48.572 9.544 48.599 13.025 C 48.625 16.506 47.268 19.855 44.825 22.335 L 26.122 41.041 C 25.63 41.533 24.962 41.809 24.266 41.809 C 23.57 41.809 22.903 41.533 22.411 41.041 L 3.702 22.332 C 1.303 19.858 -0.027 16.539 0 13.093 C 0.027 9.647 1.409 6.349 3.847 3.913 L 3.847 3.918 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48.599,
      height: 41.809,
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 48.599,
    height: 41.809,
    viewBox: "0 0 48.599 41.809",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48.599,
      height: 41.809
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.847 3.918 C 5.065 2.699 6.512 1.732 8.105 1.072 C 9.698 0.412 11.405 0.073 13.129 0.073 C 14.852 0.073 16.559 0.412 18.152 1.072 C 19.745 1.732 21.192 2.699 22.411 3.918 C 22.888 4.398 23.507 4.994 24.266 5.708 C 25.022 4.994 25.641 4.397 26.122 3.915 C 28.565 1.435 31.893 0.027 35.374 0 C 38.855 -0.026 42.203 1.331 44.684 3.774 C 47.164 6.216 48.572 9.544 48.599 13.025 C 48.625 16.506 47.268 19.855 44.825 22.335 L 26.122 41.041 C 25.63 41.533 24.962 41.809 24.266 41.809 C 23.57 41.809 22.903 41.533 22.411 41.041 L 3.702 22.332 C 1.303 19.858 -0.027 16.539 0 13.093 C 0.027 9.647 1.409 6.349 3.847 3.913 L 3.847 3.918 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Variant2
    "property1=variant2": __body1
  };
  return (__impls[__vkey_Vector(props)] ?? __body0)();
}

// figma node: 2283:2813 Explore
function Explore(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1024,
      height: 1366,
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-4f312cdf79101ecc",
    style: {
      position: "absolute",
      left: 38,
      top: -10,
      width: 339,
      height: 212
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 52,
      top: 138,
      width: 922,
      height: 37,
      overflow: "hidden",
      borderRadius: 14,
      backgroundColor: "var(--background-default-default)",
      borderTop: "1px solid rgb(205,205,205)",
      borderRight: "1px solid rgb(205,205,205)",
      borderBottom: "1px solid rgb(205,205,205)",
      borderLeft: "1px solid rgb(205,205,205)",
      display: "flex",
      flexDirection: "row",
      gap: 54,
      padding: "12px 24px 12px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--space-300) * 1px)",
      paddingBottom: "calc(var(--space-300) * 1px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 603,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 1,
      color: "var(--text-default-tertiary)",
      flexShrink: 0
    }
  }, "Search inspiration"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: -1,
      padding: "2px 2px 2px 2px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.750,
    height: 15.750,
    viewBox: "0 0 15.750 15.750",
    fill: "none",
    style: {
      position: "relative",
      width: 15.75,
      height: 15.75,
      flexShrink: 0,
      color: "var(--icon-default-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.184 16.316 C 15.497 16.628 16.003 16.628 16.316 16.316 C 16.628 16.003 16.628 15.497 16.316 15.184 L 15.184 16.316 Z M 12.509 11.378 C 12.197 11.066 11.69 11.066 11.378 11.378 C 11.066 11.69 11.066 12.197 11.378 12.509 L 12.509 11.378 Z M 13.2 7 C 13.2 10.424 10.424 13.2 7 13.2 L 7 14.8 C 11.308 14.8 14.8 11.308 14.8 7 L 13.2 7 Z M 7 13.2 C 3.576 13.2 0.8 10.424 0.8 7 L -0.8 7 C -0.8 11.308 2.692 14.8 7 14.8 L 7 13.2 Z M 0.8 7 C 0.8 3.576 3.576 0.8 7 0.8 L 7 -0.8 C 2.692 -0.8 -0.8 2.692 -0.8 7 L 0.8 7 Z M 7 0.8 C 10.424 0.8 13.2 3.576 13.2 7 L 14.8 7 C 14.8 2.692 11.308 -0.8 7 -0.8 L 7 0.8 Z M 16.316 15.184 L 12.509 11.378 L 11.378 12.509 L 15.184 16.316 L 16.316 15.184 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 943,
      top: 76,
      width: 33,
      height: 33,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 33,
      height: 33,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 1.500px rgb(0,0,0)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 890,
      top: 76,
      width: 33,
      height: 33,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 33,
    height: 33,
    viewBox: "0 0 33 33",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 33,
      height: 33,
      borderRadius: 27,
      display: "flex",
      flexDirection: "row",
      gap: 5,
      padding: "24px 13px 24px 13px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.5 31.5 C 8.216 31.5 1.5 24.784 1.5 16.5 L -1.5 16.5 C -1.5 26.441 6.559 34.5 16.5 34.5 L 16.5 31.5 Z M 31.5 16.5 C 31.5 24.784 24.784 31.5 16.5 31.5 L 16.5 34.5 C 26.441 34.5 34.5 26.441 34.5 16.5 L 31.5 16.5 Z M 16.5 1.5 C 24.784 1.5 31.5 8.216 31.5 16.5 L 34.5 16.5 C 34.5 6.559 26.441 -1.5 16.5 -1.5 L 16.5 1.5 Z M 16.5 -1.5 C 6.559 -1.5 -1.5 6.559 -1.5 16.5 L 1.5 16.5 C 1.5 8.216 8.216 1.5 16.5 1.5 L 16.5 -1.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 24,
      height: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 17.250,
    viewBox: "0 0 10 17.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 4,
      width: 10,
      height: 17.25,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 0 C 3.674 0 2.402 0.527 1.464 1.464 C 0.527 2.402 0 3.674 0 5 C 0 5.265 0.105 5.52 0.293 5.707 C 0.48 5.895 0.735 6 1 6 C 1.265 6 1.52 5.895 1.707 5.707 C 1.895 5.52 2 5.265 2 5 C 2 3.342 3.342 2 5 2 C 6.658 2 8 3.342 8 5 C 8 5.816 7.801 6.294 7.562 6.629 C 7.3 6.994 6.937 7.267 6.434 7.614 L 6.318 7.692 C 5.871 7.998 5.295 8.391 4.849 8.939 C 4.322 9.587 4 10.406 4 11.5 L 4 12 C 4 12.265 4.105 12.52 4.293 12.707 C 4.48 12.895 4.735 13 5 13 C 5.265 13 5.52 12.895 5.707 12.707 C 5.895 12.52 6 12.265 6 12 L 6 11.5 C 6 10.844 6.178 10.476 6.4 10.201 C 6.657 9.887 7.003 9.649 7.514 9.298 L 7.567 9.261 C 8.063 8.921 8.7 8.475 9.187 7.793 C 9.7 7.081 10 6.183 10 5 C 10 3.674 9.473 2.402 8.536 1.464 C 7.598 0.527 6.326 0 5 0 Z M 5 17.25 C 5.332 17.25 5.649 17.118 5.884 16.884 C 6.118 16.649 6.25 16.332 6.25 16 C 6.25 15.668 6.118 15.351 5.884 15.116 C 5.649 14.882 5.332 14.75 5 14.75 C 4.668 14.75 4.351 14.882 4.116 15.116 C 3.882 15.351 3.75 15.668 3.75 16 C 3.75 16.332 3.882 16.649 4.116 16.884 C 4.351 17.118 4.668 17.25 5 17.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 949,
      top: 81,
      width: 22,
      height: 22,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22,
      height: 22,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 22,
    viewBox: "0 0 22 22",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22,
      height: 22
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 22 0 L 22 22 L 0 22 L 0 0 L 22 0 Z M 11.544 21.32 L 11.533 21.322 L 11.468 21.354 L 11.45 21.357 L 11.437 21.354 L 11.372 21.321 C 11.362 21.318 11.355 21.32 11.35 21.326 L 11.347 21.335 L 11.331 21.728 L 11.336 21.746 L 11.345 21.758 L 11.44 21.826 L 11.454 21.829 L 11.465 21.826 L 11.56 21.758 L 11.571 21.743 L 11.575 21.728 L 11.559 21.336 C 11.557 21.327 11.552 21.321 11.544 21.32 Z M 11.786 21.216 L 11.774 21.218 L 11.605 21.303 L 11.596 21.313 L 11.593 21.323 L 11.61 21.717 L 11.614 21.728 L 11.622 21.735 L 11.806 21.819 C 11.817 21.822 11.826 21.82 11.832 21.812 L 11.836 21.799 L 11.805 21.236 C 11.802 21.225 11.796 21.218 11.786 21.216 Z M 11.131 21.218 C 11.127 21.216 11.122 21.215 11.118 21.216 C 11.113 21.217 11.109 21.22 11.106 21.224 L 11.101 21.236 L 11.07 21.799 C 11.07 21.81 11.075 21.818 11.085 21.821 L 11.099 21.819 L 11.283 21.734 L 11.292 21.727 L 11.295 21.717 L 11.312 21.323 L 11.309 21.312 L 11.3 21.302 L 11.131 21.218 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.387,
    height: 17.417,
    viewBox: "0 0 16.387 17.417",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.807,
      top: 1.833,
      width: 16.387,
      height: 17.417,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.193 0 C 6.492 0 4.859 0.676 3.656 1.879 C 2.453 3.083 1.777 4.715 1.777 6.417 L 1.777 9.651 C 1.777 9.793 1.744 9.933 1.68 10.06 L 0.106 13.207 C 0.03 13.361 -0.007 13.532 0.001 13.704 C 0.009 13.875 0.06 14.042 0.151 14.188 C 0.241 14.335 0.367 14.455 0.517 14.539 C 0.668 14.623 0.837 14.667 1.008 14.667 L 15.378 14.667 C 15.55 14.667 15.719 14.623 15.869 14.539 C 16.019 14.455 16.146 14.335 16.236 14.188 C 16.326 14.042 16.378 13.875 16.386 13.704 C 16.393 13.532 16.357 13.361 16.28 13.207 L 14.707 10.06 C 14.643 9.933 14.61 9.793 14.61 9.651 L 14.61 6.417 C 14.61 4.715 13.934 3.083 12.731 1.879 C 11.527 0.676 9.895 0 8.193 0 Z M 8.193 17.417 C 7.624 17.417 7.069 17.241 6.605 16.912 C 6.14 16.584 5.789 16.12 5.599 15.583 L 10.787 15.583 C 10.598 16.12 10.247 16.584 9.782 16.912 C 9.317 17.241 8.762 17.417 8.193 17.417 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 53,
      top: 202,
      width: 865,
      overflow: "hidden",
      borderRadius: 14,
      display: "flex",
      flexDirection: "row",
      gap: 38,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 32,
      backgroundColor: "rgb(175,175,175)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "11px 26px 11px 26px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Popular")), /*#__PURE__*/React.createElement(Label, {
    style: {
      position: "relative",
      width: 125,
      height: 46,
      flexShrink: 0
    },
    text1: "Gaming",
    property1: "default"
  }), /*#__PURE__*/React.createElement(Label, {
    style: {
      position: "relative",
      height: 46,
      flexShrink: 0
    },
    text1: "Fitness",
    property1: "default"
  }), /*#__PURE__*/React.createElement(Label, {
    style: {
      position: "relative",
      width: 156,
      height: 46,
      flexShrink: 0
    },
    text1: "Landscape",
    property1: "default"
  }), /*#__PURE__*/React.createElement(Label, {
    style: {
      position: "relative",
      width: 101,
      height: 46,
      flexShrink: 0
    },
    text1: "Math",
    property1: "default"
  }), /*#__PURE__*/React.createElement(Label, {
    style: {
      position: "relative",
      width: 151,
      height: 46,
      flexShrink: 0
    },
    text1: "Journaling",
    property1: "default"
  }), /*#__PURE__*/React.createElement(Label, {
    style: {
      position: "relative",
      width: 110,
      height: 46,
      flexShrink: 0
    },
    text1: "Travel",
    property1: "default"
  }), /*#__PURE__*/React.createElement(Label, {
    style: {
      position: "relative",
      width: 110,
      height: 46,
      flexShrink: 0
    },
    text1: "Urban",
    property1: "default"
  }), /*#__PURE__*/React.createElement(Label, {
    style: {
      position: "relative",
      width: 135,
      height: 46,
      flexShrink: 0
    },
    text1: "Fantasty",
    property1: "default"
  }), /*#__PURE__*/React.createElement(Label, {
    style: {
      position: "relative",
      width: 130,
      height: 46,
      flexShrink: 0
    },
    text1: "Outdoor  ",
    property1: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 932,
      top: 202,
      width: 46,
      height: 46,
      borderRadius: 32,
      backgroundColor: "rgb(255,102,48)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "11px 26px 11px 26px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 4.998,
      width: 14,
      height: 14,
      color: "rgb(230,230,230)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14 8 L 8 8 L 8 14 L 6 14 L 6 8 L 0 8 L 0 6 L 6 6 L 6 0 L 8 0 L 8 6 L 14 6 L 14 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 1248,
      width: 1024,
      height: 118,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 46,
      top: 16.784,
      height: 79.296,
      display: "flex",
      flexDirection: "row",
      gap: 108,
      alignItems: "flex-end",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 100,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 28.957,
      height: 37,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.006,
      width: 28.957,
      height: 36.994,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28.957,
      height: 36.994,
      borderRadius: 3,
      backgroundColor: "rgb(30,30,30)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.522,
      top: 0,
      width: 1.609,
      height: 37,
      backgroundColor: "rgb(255,255,255)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgba(0,0,0,0.58)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Notebook")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 100,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 37,
    height: 37,
    viewBox: "0 0 37 37",
    fill: "none",
    style: {
      position: "relative",
      width: 37,
      height: 37,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 18.539 C 0 15.974 0.484 13.564 1.452 11.309 C 2.421 9.053 3.733 7.091 5.391 5.423 C 7.049 3.754 8.999 2.434 11.243 1.461 C 13.486 0.488 15.883 0.001 18.431 0 C 22.332 0 25.811 1.081 28.868 3.244 C 31.925 5.407 34.144 8.204 35.526 11.633 C 35.741 12.158 35.749 12.684 35.549 13.209 C 35.35 13.734 34.989 14.09 34.466 14.275 C 33.974 14.43 33.506 14.383 33.061 14.136 C 32.617 13.889 32.301 13.518 32.116 13.024 C 31.379 11.17 30.319 9.532 28.936 8.111 C 27.554 6.689 25.895 5.593 23.96 4.82 L 23.96 5.562 C 23.96 6.581 23.6 7.455 22.878 8.181 C 22.157 8.908 21.289 9.271 20.274 9.269 L 16.588 9.269 L 16.588 12.977 C 16.588 13.503 16.411 13.943 16.057 14.299 C 15.703 14.655 15.266 14.832 14.745 14.831 L 11.059 14.831 L 11.059 18.539 L 12.902 18.539 C 13.424 18.539 13.862 18.717 14.216 19.073 C 14.57 19.429 14.746 19.869 14.745 20.393 L 14.745 24.101 L 12.902 24.101 L 4.055 15.202 C 3.963 15.758 3.878 16.314 3.802 16.87 C 3.726 17.427 3.687 17.983 3.686 18.539 C 3.686 22.309 4.923 25.599 7.396 28.411 C 9.87 31.223 12.98 32.845 16.726 33.277 C 17.218 33.339 17.625 33.548 17.948 33.904 C 18.271 34.26 18.432 34.7 18.431 35.224 C 18.43 35.748 18.253 36.189 17.9 36.546 C 17.547 36.903 17.125 37.05 16.634 36.985 C 11.934 36.522 7.987 34.544 4.792 31.053 C 1.597 27.561 0 23.39 0 18.539 Z M 33.913 34.853 L 29.305 30.219 C 28.66 30.589 27.969 30.898 27.232 31.146 C 26.494 31.393 25.711 31.516 24.882 31.516 C 22.578 31.516 20.62 30.706 19.008 29.084 C 17.396 27.462 16.589 25.492 16.588 23.174 C 16.587 20.855 17.393 18.886 19.008 17.265 C 20.622 15.645 22.58 14.834 24.882 14.831 C 27.183 14.829 29.142 15.64 30.757 17.265 C 32.373 18.891 33.179 20.86 33.176 23.174 C 33.176 24.008 33.053 24.796 32.807 25.537 C 32.561 26.279 32.254 26.974 31.885 27.623 L 36.493 32.258 C 36.831 32.598 37 33.03 37 33.556 C 37 34.081 36.831 34.513 36.493 34.853 C 36.155 35.193 35.725 35.363 35.203 35.363 C 34.681 35.363 34.251 35.193 33.913 34.853 Z M 24.882 27.808 C 26.172 27.808 27.262 27.36 28.153 26.464 C 29.044 25.568 29.489 24.471 29.489 23.174 C 29.489 21.876 29.044 20.779 28.153 19.883 C 27.262 18.987 26.172 18.539 24.882 18.539 C 23.592 18.539 22.501 18.987 21.61 19.883 C 20.719 20.779 20.274 21.876 20.274 23.174 C 20.274 24.471 20.719 25.568 21.61 26.464 C 22.501 27.36 23.592 27.808 24.882 27.808 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgba(255,255,255,0.58)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Explore")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 100,
      display: "flex",
      flexDirection: "column",
      gap: 7,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 45,
      height: 45,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 45,
    height: 45,
    viewBox: "0 0 45 45",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 45,
      height: 45,
      color: "rgb(255,102,48)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 22.5 C 0 10.073 10.073 0 22.5 0 C 34.927 0 45 10.073 45 22.5 C 45 34.927 34.927 45 22.5 45 C 10.073 45 0 34.927 0 22.5 Z M 22.5 4.5 C 17.726 4.5 13.148 6.396 9.772 9.772 C 6.396 13.148 4.5 17.726 4.5 22.5 C 4.5 27.274 6.396 31.852 9.772 35.228 C 13.148 38.604 17.726 40.5 22.5 40.5 C 27.274 40.5 31.852 38.604 35.228 35.228 C 38.604 31.852 40.5 27.274 40.5 22.5 C 40.5 17.726 38.604 13.148 35.228 9.772 C 31.852 6.396 27.274 4.5 22.5 4.5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 27,
    height: 27,
    viewBox: "0 0 27 27",
    fill: "none",
    style: {
      position: "absolute",
      left: 9,
      top: 9,
      width: 27,
      height: 27,
      color: "rgb(255,102,48)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.75 2.25 C 15.75 1.653 15.513 1.081 15.091 0.659 C 14.669 0.237 14.097 0 13.5 0 C 12.903 0 12.331 0.237 11.909 0.659 C 11.487 1.081 11.25 1.653 11.25 2.25 L 11.25 11.25 L 2.25 11.25 C 1.653 11.25 1.081 11.487 0.659 11.909 C 0.237 12.331 0 12.903 0 13.5 C 0 14.097 0.237 14.669 0.659 15.091 C 1.081 15.513 1.653 15.75 2.25 15.75 L 11.25 15.75 L 11.25 24.75 C 11.25 25.347 11.487 25.919 11.909 26.341 C 12.331 26.763 12.903 27 13.5 27 C 14.097 27 14.669 26.763 15.091 26.341 C 15.513 25.919 15.75 25.347 15.75 24.75 L 15.75 15.75 L 24.75 15.75 C 25.347 15.75 25.919 15.513 26.341 15.091 C 26.763 14.669 27 14.097 27 13.5 C 27 12.903 26.763 12.331 26.341 11.909 C 25.919 11.487 25.347 11.25 24.75 11.25 L 15.75 11.25 L 15.75 2.25 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgba(0,0,0,0.58)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Publish")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 100,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 37,
    height: 37,
    viewBox: "0 0 37 37",
    fill: "none",
    style: {
      position: "relative",
      width: 37,
      height: 37,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.021 11.563 C 11.554 11.563 13.025 10.953 14.109 9.869 C 15.193 8.785 15.802 7.315 15.802 5.781 C 15.802 4.248 15.193 2.777 14.109 1.693 C 13.025 0.609 11.554 0 10.021 0 C 8.488 0 7.017 0.609 5.933 1.693 C 4.849 2.777 4.24 4.248 4.24 5.781 C 4.24 7.315 4.849 8.785 5.933 9.869 C 7.017 10.953 8.488 11.563 10.021 11.563 Z M 0 16.931 C 0 15.242 1.367 13.875 3.056 13.875 L 11.689 13.875 C 11.013 15.58 11.002 17.476 11.657 19.188 C 12.311 20.901 13.585 22.306 15.225 23.125 L 11.536 23.125 C 10.625 23.124 9.734 23.395 8.977 23.902 C 8.22 24.409 7.631 25.13 7.284 25.972 C 4.193 25.4 2.34 23.857 1.281 22.134 C 0 20.057 0 17.911 0 17.541 L 0 16.931 Z M 21.773 23.125 L 25.465 23.125 C 27.385 23.125 29.03 24.301 29.717 25.972 C 32.808 25.4 34.661 23.857 35.72 22.134 C 37 20.056 37 17.91 37 17.54 L 37 16.931 C 37 16.529 36.922 16.132 36.768 15.761 C 36.615 15.39 36.39 15.053 36.106 14.769 C 35.822 14.485 35.485 14.26 35.114 14.107 C 34.743 13.953 34.346 13.875 33.944 13.875 L 25.311 13.875 C 25.987 15.58 25.998 17.476 25.343 19.188 C 24.689 20.901 23.415 22.306 21.774 23.125 M 32.76 5.781 C 32.76 7.315 32.151 8.785 31.067 9.869 C 29.983 10.953 28.512 11.563 26.979 11.563 C 25.446 11.563 23.975 10.953 22.891 9.869 C 21.807 8.785 21.198 7.315 21.198 5.781 C 21.198 4.248 21.807 2.777 22.891 1.693 C 23.975 0.609 25.446 0 26.979 0 C 28.512 0 29.983 0.609 31.067 1.693 C 32.151 2.777 32.76 4.248 32.76 5.781 Z M 8.479 27.722 C 8.479 26.034 9.847 24.667 11.535 24.667 L 25.465 24.667 C 27.153 24.667 28.521 26.034 28.521 27.722 L 28.521 28.331 C 28.521 28.701 28.521 30.847 27.241 32.925 C 25.9 35.108 23.288 37 18.5 37 C 13.712 37 11.1 35.107 9.759 32.927 C 8.479 30.847 8.479 28.703 8.479 28.331 L 8.479 27.722 Z M 18.5 22.354 C 20.033 22.354 21.504 21.745 22.588 20.661 C 23.672 19.577 24.281 18.106 24.281 16.573 C 24.281 15.04 23.672 13.569 22.588 12.485 C 21.504 11.401 20.033 10.792 18.5 10.792 C 16.967 10.792 15.496 11.401 14.412 12.485 C 13.328 13.569 12.719 15.04 12.719 16.573 C 12.719 18.106 13.328 19.577 14.412 20.661 C 15.496 21.745 16.967 22.354 18.5 22.354 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgba(0,0,0,0.58)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Community")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 100,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 38,
    height: 37,
    viewBox: "0 0 38 37",
    fill: "none",
    style: {
      position: "relative",
      width: 38,
      height: 37,
      flexShrink: 0,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19 0 C 21.52 0 23.936 0.975 25.718 2.709 C 27.499 4.444 28.5 6.797 28.5 9.25 C 28.5 11.703 27.499 14.056 25.718 15.791 C 23.936 17.525 21.52 18.5 19 18.5 C 16.48 18.5 14.064 17.525 12.282 15.791 C 10.501 14.056 9.5 11.703 9.5 9.25 C 9.5 6.797 10.501 4.444 12.282 2.709 C 14.064 0.975 16.48 0 19 0 Z M 19 23.125 C 29.497 23.125 38 27.264 38 32.375 L 38 37 L 0 37 L 0 32.375 C 0 27.264 8.502 23.125 19 23.125 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgba(0,0,0,0.58)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Profile")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 234,
      top: 68.217,
      width: 48,
      height: 5,
      backgroundColor: "rgb(255,102,48)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1024,
      height: 118,
      borderTop: "1px solid rgb(188,188,188)",
      borderRight: "1px solid rgb(188,188,188)",
      borderBottom: "1px solid rgb(188,188,188)",
      borderLeft: "1px solid rgb(188,188,188)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 48,
      top: 281,
      width: 928,
      height: 967,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: "27px 34px",
      alignItems: "flex-start",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 447,
      height: 700,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 447,
    height: 700,
    viewBox: "0 0 447 700",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      borderRadius: 31,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 31 C 0 13.879 13.879 0 31 0 L 416 0 C 433.121 0 447 13.879 447 31 L 447 669 C 447 686.121 433.121 700 416 700 L 31 700 C 13.879 700 0 686.121 0 669 L 0 31 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 31 1.5 L 416 1.5 L 416 -1.5 L 31 -1.5 L 31 1.5 Z M 445.5 31 L 445.5 669 L 448.5 669 L 448.5 31 L 445.5 31 Z M 416 698.5 L 31 698.5 L 31 701.5 L 416 701.5 L 416 698.5 Z M 1.5 669 L 1.5 31 L -1.5 31 L -1.5 669 L 1.5 669 Z M 31 698.5 C 14.708 698.5 1.5 685.292 1.5 669 L -1.5 669 C -1.5 686.949 13.051 701.5 31 701.5 L 31 698.5 Z M 445.5 669 C 445.5 685.292 432.292 698.5 416 698.5 L 416 701.5 C 433.949 701.5 448.5 686.949 448.5 669 L 445.5 669 Z M 416 1.5 C 432.292 1.5 445.5 14.708 445.5 31 L 448.5 31 C 448.5 13.051 433.949 -1.5 416 -1.5 L 416 1.5 Z M 31 -1.5 C 13.051 -1.5 -1.5 13.051 -1.5 31 L 1.5 31 C 1.5 14.708 14.708 1.5 31 1.5 L 31 -1.5 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 56,
      top: 658.893,
      width: 126,
      height: 15.973,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "Tulio"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27,
      top: 614.966,
      width: 352,
      height: 31.946,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "Urban Sketchers / New Jersey"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 28,
      width: 393.316,
      height: 571.484,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 374,
    height: 543,
    viewBox: "0 0 374 543",
    fill: "none",
    style: {
      position: "absolute",
      left: 38,
      top: 46,
      width: 374,
      height: 543
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 374 0 L 374 543 L 0 543 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.842,
      top: 655.704,
      width: 23.007,
      height: 22.969,
      borderRadius: "50%",
      backgroundColor: "rgb(255,229,163)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 393.316,
      top: 620.156,
      width: 26.622,
      height: 22.865
    }
  }, /*#__PURE__*/React.createElement(Vector, {
    style: {
      transform: "scale(0.548, 0.547)",
      transformOrigin: "0 0"
    },
    property1: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 447,
      height: 700,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 447,
    height: 700,
    viewBox: "0 0 447 700",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      borderRadius: 31,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 31 C 0 13.879 13.879 0 31 0 L 416 0 C 433.121 0 447 13.879 447 31 L 447 669 C 447 686.121 433.121 700 416 700 L 31 700 C 13.879 700 0 686.121 0 669 L 0 31 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 31 1.5 L 416 1.5 L 416 -1.5 L 31 -1.5 L 31 1.5 Z M 445.5 31 L 445.5 669 L 448.5 669 L 448.5 31 L 445.5 31 Z M 416 698.5 L 31 698.5 L 31 701.5 L 416 701.5 L 416 698.5 Z M 1.5 669 L 1.5 31 L -1.5 31 L -1.5 669 L 1.5 669 Z M 31 698.5 C 14.708 698.5 1.5 685.292 1.5 669 L -1.5 669 C -1.5 686.949 13.051 701.5 31 701.5 L 31 698.5 Z M 445.5 669 C 445.5 685.292 432.292 698.5 416 698.5 L 416 701.5 C 433.949 701.5 448.5 686.949 448.5 669 L 445.5 669 Z M 416 1.5 C 432.292 1.5 445.5 14.708 445.5 31 L 448.5 31 C 448.5 13.051 433.949 -1.5 416 -1.5 L 416 1.5 Z M 31 -1.5 C 13.051 -1.5 -1.5 13.051 -1.5 31 L 1.5 31 C 1.5 14.708 14.708 1.5 31 1.5 L 31 -1.5 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 56,
      top: 658.893,
      width: 126,
      height: 15.973,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "MathMatrix"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27,
      top: 614.966,
      width: 352,
      height: 31.946,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "Algebra Alliance / math 101"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 28,
      width: 393.316,
      height: 571.484,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.842,
      top: 655.704,
      width: 23.007,
      height: 22.969,
      borderRadius: "50%",
      backgroundColor: "rgb(200,198,241)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 393.316,
      top: 620.156,
      width: 26.622,
      height: 22.865
    }
  }, /*#__PURE__*/React.createElement(Vector, {
    style: {
      transform: "scale(0.548, 0.547)",
      transformOrigin: "0 0"
    },
    property1: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-0f6e5a9a6ebc65af-615dd779",
    style: {
      position: "absolute",
      left: 38,
      top: 38,
      width: 372,
      height: 552
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 447,
      height: 700,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 447,
    height: 700,
    viewBox: "0 0 447 700",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      borderRadius: 31,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 31 C 0 13.879 13.879 0 31 0 L 416 0 C 433.121 0 447 13.879 447 31 L 447 669 C 447 686.121 433.121 700 416 700 L 31 700 C 13.879 700 0 686.121 0 669 L 0 31 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 31 1.5 L 416 1.5 L 416 -1.5 L 31 -1.5 L 31 1.5 Z M 445.5 31 L 445.5 669 L 448.5 669 L 448.5 31 L 445.5 31 Z M 416 698.5 L 31 698.5 L 31 701.5 L 416 701.5 L 416 698.5 Z M 1.5 669 L 1.5 31 L -1.5 31 L -1.5 669 L 1.5 669 Z M 31 698.5 C 14.708 698.5 1.5 685.292 1.5 669 L -1.5 669 C -1.5 686.949 13.051 701.5 31 701.5 L 31 698.5 Z M 445.5 669 C 445.5 685.292 432.292 698.5 416 698.5 L 416 701.5 C 433.949 701.5 448.5 686.949 448.5 669 L 445.5 669 Z M 416 1.5 C 432.292 1.5 445.5 14.708 445.5 31 L 448.5 31 C 448.5 13.051 433.949 -1.5 416 -1.5 L 416 1.5 Z M 31 -1.5 C 13.051 -1.5 -1.5 13.051 -1.5 31 L 1.5 31 C 1.5 14.708 14.708 1.5 31 1.5 L 31 -1.5 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 56,
      top: 658.893,
      width: 126,
      height: 15.973,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "Jessica"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27,
      top: 614.966,
      width: 352,
      height: 31.946,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "Journaling Junkies / Weekly journal"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 28,
      width: 393.316,
      height: 571.484,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.842,
      top: 655.704,
      width: 23.007,
      height: 22.969,
      borderRadius: "50%",
      backgroundColor: "rgb(208,215,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 393.316,
      top: 620.156,
      width: 26.622,
      height: 22.865
    }
  }, /*#__PURE__*/React.createElement(Vector, {
    style: {
      transform: "scale(0.548, 0.547)",
      transformOrigin: "0 0"
    },
    property1: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-bba3202037b3cf5d-fe6e2665",
    style: {
      position: "absolute",
      left: 38,
      top: 38,
      width: 372,
      height: 552
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 447,
      height: 700,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 447,
    height: 700,
    viewBox: "0 0 447 700",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      borderRadius: 31,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 31 C 0 13.879 13.879 0 31 0 L 416 0 C 433.121 0 447 13.879 447 31 L 447 669 C 447 686.121 433.121 700 416 700 L 31 700 C 13.879 700 0 686.121 0 669 L 0 31 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 31 1.5 L 416 1.5 L 416 -1.5 L 31 -1.5 L 31 1.5 Z M 445.5 31 L 445.5 669 L 448.5 669 L 448.5 31 L 445.5 31 Z M 416 698.5 L 31 698.5 L 31 701.5 L 416 701.5 L 416 698.5 Z M 1.5 669 L 1.5 31 L -1.5 31 L -1.5 669 L 1.5 669 Z M 31 698.5 C 14.708 698.5 1.5 685.292 1.5 669 L -1.5 669 C -1.5 686.949 13.051 701.5 31 701.5 L 31 698.5 Z M 445.5 669 C 445.5 685.292 432.292 698.5 416 698.5 L 416 701.5 C 433.949 701.5 448.5 686.949 448.5 669 L 445.5 669 Z M 416 1.5 C 432.292 1.5 445.5 14.708 445.5 31 L 448.5 31 C 448.5 13.051 433.949 -1.5 416 -1.5 L 416 1.5 Z M 31 -1.5 C 13.051 -1.5 -1.5 13.051 -1.5 31 L 1.5 31 C 1.5 14.708 14.708 1.5 31 1.5 L 31 -1.5 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 56,
      top: 658.893,
      width: 126,
      height: 15.973,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "Jessica"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27,
      top: 614.966,
      width: 352,
      height: 31.946,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "Furry Friends Collective / My Dog"), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-fd15f76e93af7081-3b45bea9",
    style: {
      position: "absolute",
      left: 27,
      top: 28,
      width: 393.316,
      height: 571.484,
      boxShadow: "inset 0 0 0 1.500px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.842,
      top: 655.704,
      width: 23.007,
      height: 22.969,
      borderRadius: "50%",
      backgroundColor: "rgb(208,215,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 393.316,
      top: 620.156,
      width: 26.622,
      height: 22.865
    }
  }, /*#__PURE__*/React.createElement(Vector, {
    style: {
      transform: "scale(0.548, 0.547)",
      transformOrigin: "0 0"
    },
    property1: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 447,
      height: 700,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 447,
    height: 700,
    viewBox: "0 0 447 700",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      borderRadius: 31,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 31 C 0 13.879 13.879 0 31 0 L 416 0 C 433.121 0 447 13.879 447 31 L 447 669 C 447 686.121 433.121 700 416 700 L 31 700 C 13.879 700 0 686.121 0 669 L 0 31 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 31 1.5 L 416 1.5 L 416 -1.5 L 31 -1.5 L 31 1.5 Z M 445.5 31 L 445.5 669 L 448.5 669 L 448.5 31 L 445.5 31 Z M 416 698.5 L 31 698.5 L 31 701.5 L 416 701.5 L 416 698.5 Z M 1.5 669 L 1.5 31 L -1.5 31 L -1.5 669 L 1.5 669 Z M 31 698.5 C 14.708 698.5 1.5 685.292 1.5 669 L -1.5 669 C -1.5 686.949 13.051 701.5 31 701.5 L 31 698.5 Z M 445.5 669 C 445.5 685.292 432.292 698.5 416 698.5 L 416 701.5 C 433.949 701.5 448.5 686.949 448.5 669 L 445.5 669 Z M 416 1.5 C 432.292 1.5 445.5 14.708 445.5 31 L 448.5 31 C 448.5 13.051 433.949 -1.5 416 -1.5 L 416 1.5 Z M 31 -1.5 C 13.051 -1.5 -1.5 13.051 -1.5 31 L 1.5 31 C 1.5 14.708 14.708 1.5 31 1.5 L 31 -1.5 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 56,
      top: 658.893,
      width: 126,
      height: 15.973,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "NebulaDreamer"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27,
      top: 614.966,
      width: 352,
      height: 31.946,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "Castle"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 28,
      width: 393.316,
      height: 571.484,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.842,
      top: 655.704,
      width: 23.007,
      height: 22.969,
      borderRadius: "50%",
      backgroundColor: "rgb(151,177,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 393.316,
      top: 620.156,
      width: 26.622,
      height: 22.865
    }
  }, /*#__PURE__*/React.createElement(Vector, {
    style: {
      transform: "scale(0.548, 0.547)",
      transformOrigin: "0 0"
    },
    property1: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-fbfcf1d162ed5f5c",
    style: {
      position: "absolute",
      left: 39,
      top: 38,
      width: 372,
      height: 552
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 447,
      height: 700,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 447,
    height: 700,
    viewBox: "0 0 447 700",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      borderRadius: 31,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 31 C 0 13.879 13.879 0 31 0 L 416 0 C 433.121 0 447 13.879 447 31 L 447 669 C 447 686.121 433.121 700 416 700 L 31 700 C 13.879 700 0 686.121 0 669 L 0 31 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 31 1.5 L 416 1.5 L 416 -1.5 L 31 -1.5 L 31 1.5 Z M 445.5 31 L 445.5 669 L 448.5 669 L 448.5 31 L 445.5 31 Z M 416 698.5 L 31 698.5 L 31 701.5 L 416 701.5 L 416 698.5 Z M 1.5 669 L 1.5 31 L -1.5 31 L -1.5 669 L 1.5 669 Z M 31 698.5 C 14.708 698.5 1.5 685.292 1.5 669 L -1.5 669 C -1.5 686.949 13.051 701.5 31 701.5 L 31 698.5 Z M 445.5 669 C 445.5 685.292 432.292 698.5 416 698.5 L 416 701.5 C 433.949 701.5 448.5 686.949 448.5 669 L 445.5 669 Z M 416 1.5 C 432.292 1.5 445.5 14.708 445.5 31 L 448.5 31 C 448.5 13.051 433.949 -1.5 416 -1.5 L 416 1.5 Z M 31 -1.5 C 13.051 -1.5 -1.5 13.051 -1.5 31 L 1.5 31 C 1.5 14.708 14.708 1.5 31 1.5 L 31 -1.5 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 56,
      top: 658.893,
      width: 126,
      height: 15.973,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "SkylerBlaze"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27,
      top: 614.966,
      width: 352,
      height: 31.946,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "Bird Sketches"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 28,
      width: 393.316,
      height: 571.484,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.842,
      top: 655.704,
      width: 23.007,
      height: 22.969,
      borderRadius: "50%",
      backgroundColor: "rgb(243,204,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 393.316,
      top: 620.156,
      width: 26.622,
      height: 22.865
    }
  }, /*#__PURE__*/React.createElement(Vector, {
    style: {
      transform: "scale(0.548, 0.547)",
      transformOrigin: "0 0"
    },
    property1: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-c53901f0440c1544",
    style: {
      position: "absolute",
      left: 40,
      top: 38,
      width: 372,
      height: 552
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 447,
      height: 700,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 447,
    height: 700,
    viewBox: "0 0 447 700",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      borderRadius: 31,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 31 C 0 13.879 13.879 0 31 0 L 416 0 C 433.121 0 447 13.879 447 31 L 447 669 C 447 686.121 433.121 700 416 700 L 31 700 C 13.879 700 0 686.121 0 669 L 0 31 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 31 1.5 L 416 1.5 L 416 -1.5 L 31 -1.5 L 31 1.5 Z M 445.5 31 L 445.5 669 L 448.5 669 L 448.5 31 L 445.5 31 Z M 416 698.5 L 31 698.5 L 31 701.5 L 416 701.5 L 416 698.5 Z M 1.5 669 L 1.5 31 L -1.5 31 L -1.5 669 L 1.5 669 Z M 31 698.5 C 14.708 698.5 1.5 685.292 1.5 669 L -1.5 669 C -1.5 686.949 13.051 701.5 31 701.5 L 31 698.5 Z M 445.5 669 C 445.5 685.292 432.292 698.5 416 698.5 L 416 701.5 C 433.949 701.5 448.5 686.949 448.5 669 L 445.5 669 Z M 416 1.5 C 432.292 1.5 445.5 14.708 445.5 31 L 448.5 31 C 448.5 13.051 433.949 -1.5 416 -1.5 L 416 1.5 Z M 31 -1.5 C 13.051 -1.5 -1.5 13.051 -1.5 31 L 1.5 31 C 1.5 14.708 14.708 1.5 31 1.5 L 31 -1.5 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 56,
      top: 658.893,
      width: 126,
      height: 15.973,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "LunarKnight"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27,
      top: 614.966,
      width: 352,
      height: 31.946,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "Silvermoon Coven / Concept Design"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 28,
      width: 393.316,
      height: 571.484,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.842,
      top: 655.704,
      width: 23.007,
      height: 22.969,
      borderRadius: "50%",
      backgroundColor: "rgb(209,209,209)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 393.316,
      top: 620.156,
      width: 26.622,
      height: 22.865
    }
  }, /*#__PURE__*/React.createElement(Vector, {
    style: {
      transform: "scale(0.548, 0.547)",
      transformOrigin: "0 0"
    },
    property1: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-d83847e8e8dec8d1",
    style: {
      position: "absolute",
      left: 38,
      top: 38,
      width: 372,
      height: 552
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 447,
      height: 700,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 447,
    height: 700,
    viewBox: "0 0 447 700",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      borderRadius: 31,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 31 C 0 13.879 13.879 0 31 0 L 416 0 C 433.121 0 447 13.879 447 31 L 447 669 C 447 686.121 433.121 700 416 700 L 31 700 C 13.879 700 0 686.121 0 669 L 0 31 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 31 1.5 L 416 1.5 L 416 -1.5 L 31 -1.5 L 31 1.5 Z M 445.5 31 L 445.5 669 L 448.5 669 L 448.5 31 L 445.5 31 Z M 416 698.5 L 31 698.5 L 31 701.5 L 416 701.5 L 416 698.5 Z M 1.5 669 L 1.5 31 L -1.5 31 L -1.5 669 L 1.5 669 Z M 31 698.5 C 14.708 698.5 1.5 685.292 1.5 669 L -1.5 669 C -1.5 686.949 13.051 701.5 31 701.5 L 31 698.5 Z M 445.5 669 C 445.5 685.292 432.292 698.5 416 698.5 L 416 701.5 C 433.949 701.5 448.5 686.949 448.5 669 L 445.5 669 Z M 416 1.5 C 432.292 1.5 445.5 14.708 445.5 31 L 448.5 31 C 448.5 13.051 433.949 -1.5 416 -1.5 L 416 1.5 Z M 31 -1.5 C 13.051 -1.5 -1.5 13.051 -1.5 31 L 1.5 31 C 1.5 14.708 14.708 1.5 31 1.5 L 31 -1.5 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 56,
      top: 658.893,
      width: 126,
      height: 15.973,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "OceanBreeze"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27,
      top: 614.966,
      width: 352,
      height: 31.946,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "Earth"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 28,
      width: 393.316,
      height: 571.484,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.842,
      top: 655.704,
      width: 23.007,
      height: 22.969,
      borderRadius: "50%",
      backgroundColor: "rgb(200,183,219)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 393.316,
      top: 620.156,
      width: 26.622,
      height: 22.865
    }
  }, /*#__PURE__*/React.createElement(Vector, {
    style: {
      transform: "scale(0.548, 0.547)",
      transformOrigin: "0 0"
    },
    property1: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-0ba88b5c7722858b-12a83529",
    style: {
      position: "absolute",
      left: 38,
      top: 38,
      width: 372,
      height: 552
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 447,
      height: 700,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 447,
    height: 700,
    viewBox: "0 0 447 700",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      borderRadius: 31,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 31 C 0 13.879 13.879 0 31 0 L 416 0 C 433.121 0 447 13.879 447 31 L 447 669 C 447 686.121 433.121 700 416 700 L 31 700 C 13.879 700 0 686.121 0 669 L 0 31 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 31 1.5 L 416 1.5 L 416 -1.5 L 31 -1.5 L 31 1.5 Z M 445.5 31 L 445.5 669 L 448.5 669 L 448.5 31 L 445.5 31 Z M 416 698.5 L 31 698.5 L 31 701.5 L 416 701.5 L 416 698.5 Z M 1.5 669 L 1.5 31 L -1.5 31 L -1.5 669 L 1.5 669 Z M 31 698.5 C 14.708 698.5 1.5 685.292 1.5 669 L -1.5 669 C -1.5 686.949 13.051 701.5 31 701.5 L 31 698.5 Z M 445.5 669 C 445.5 685.292 432.292 698.5 416 698.5 L 416 701.5 C 433.949 701.5 448.5 686.949 448.5 669 L 445.5 669 Z M 416 1.5 C 432.292 1.5 445.5 14.708 445.5 31 L 448.5 31 C 448.5 13.051 433.949 -1.5 416 -1.5 L 416 1.5 Z M 31 -1.5 C 13.051 -1.5 -1.5 13.051 -1.5 31 L 1.5 31 C 1.5 14.708 14.708 1.5 31 1.5 L 31 -1.5 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 56,
      top: 658.893,
      width: 126,
      height: 15.973,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "PixelWanderer"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27,
      top: 614.966,
      width: 352,
      height: 31.946,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "08.2024"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 28,
      width: 393.316,
      height: 571.484,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.842,
      top: 655.704,
      width: 23.007,
      height: 22.969,
      borderRadius: "50%",
      backgroundColor: "rgb(198,182,206)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 393.316,
      top: 620.156,
      width: 26.622,
      height: 22.865
    }
  }, /*#__PURE__*/React.createElement(Vector, {
    style: {
      transform: "scale(0.548, 0.547)",
      transformOrigin: "0 0"
    },
    property1: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-749581fc73eb11b9",
    style: {
      position: "absolute",
      left: 43,
      top: 38,
      width: 372,
      height: 552
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 447,
      height: 700,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 447,
    height: 700,
    viewBox: "0 0 447 700",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      borderRadius: 31,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 31 C 0 13.879 13.879 0 31 0 L 416 0 C 433.121 0 447 13.879 447 31 L 447 669 C 447 686.121 433.121 700 416 700 L 31 700 C 13.879 700 0 686.121 0 669 L 0 31 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 31 1.5 L 416 1.5 L 416 -1.5 L 31 -1.5 L 31 1.5 Z M 445.5 31 L 445.5 669 L 448.5 669 L 448.5 31 L 445.5 31 Z M 416 698.5 L 31 698.5 L 31 701.5 L 416 701.5 L 416 698.5 Z M 1.5 669 L 1.5 31 L -1.5 31 L -1.5 669 L 1.5 669 Z M 31 698.5 C 14.708 698.5 1.5 685.292 1.5 669 L -1.5 669 C -1.5 686.949 13.051 701.5 31 701.5 L 31 698.5 Z M 445.5 669 C 445.5 685.292 432.292 698.5 416 698.5 L 416 701.5 C 433.949 701.5 448.5 686.949 448.5 669 L 445.5 669 Z M 416 1.5 C 432.292 1.5 445.5 14.708 445.5 31 L 448.5 31 C 448.5 13.051 433.949 -1.5 416 -1.5 L 416 1.5 Z M 31 -1.5 C 13.051 -1.5 -1.5 13.051 -1.5 31 L 1.5 31 C 1.5 14.708 14.708 1.5 31 1.5 L 31 -1.5 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 56,
      top: 658.893,
      width: 126,
      height: 15.973,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "LunarKnight"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27,
      top: 614.966,
      width: 352,
      height: 31.946,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "Silvermoon Coven / Concept Design"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 28,
      width: 393.316,
      height: 571.484,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.842,
      top: 655.704,
      width: 23.007,
      height: 22.969,
      borderRadius: "50%",
      backgroundColor: "rgb(209,209,209)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 393.316,
      top: 620.156,
      width: 26.622,
      height: 22.865
    }
  }, /*#__PURE__*/React.createElement(Vector, {
    style: {
      transform: "scale(0.548, 0.547)",
      transformOrigin: "0 0"
    },
    property1: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-1df165776d88ade4",
    style: {
      position: "absolute",
      left: 43,
      top: 38,
      width: 372,
      height: 552
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 447,
      height: 700,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 447,
    height: 700,
    viewBox: "0 0 447 700",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      borderRadius: 31,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 31 C 0 13.879 13.879 0 31 0 L 416 0 C 433.121 0 447 13.879 447 31 L 447 669 C 447 686.121 433.121 700 416 700 L 31 700 C 13.879 700 0 686.121 0 669 L 0 31 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 31 1.5 L 416 1.5 L 416 -1.5 L 31 -1.5 L 31 1.5 Z M 445.5 31 L 445.5 669 L 448.5 669 L 448.5 31 L 445.5 31 Z M 416 698.5 L 31 698.5 L 31 701.5 L 416 701.5 L 416 698.5 Z M 1.5 669 L 1.5 31 L -1.5 31 L -1.5 669 L 1.5 669 Z M 31 698.5 C 14.708 698.5 1.5 685.292 1.5 669 L -1.5 669 C -1.5 686.949 13.051 701.5 31 701.5 L 31 698.5 Z M 445.5 669 C 445.5 685.292 432.292 698.5 416 698.5 L 416 701.5 C 433.949 701.5 448.5 686.949 448.5 669 L 445.5 669 Z M 416 1.5 C 432.292 1.5 445.5 14.708 445.5 31 L 448.5 31 C 448.5 13.051 433.949 -1.5 416 -1.5 L 416 1.5 Z M 31 -1.5 C 13.051 -1.5 -1.5 13.051 -1.5 31 L 1.5 31 C 1.5 14.708 14.708 1.5 31 1.5 L 31 -1.5 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 56,
      top: 658.893,
      width: 126,
      height: 15.973,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "NovaPulse"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27,
      top: 614.966,
      width: 352,
      height: 31.946,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "Urban Sketchers / Train"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 28,
      width: 393.316,
      height: 571.484,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.842,
      top: 655.704,
      width: 23.007,
      height: 22.969,
      borderRadius: "50%",
      backgroundColor: "rgb(113,148,160)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 393.316,
      top: 620.156,
      width: 26.622,
      height: 22.865
    }
  }, /*#__PURE__*/React.createElement(Vector, {
    style: {
      transform: "scale(0.548, 0.547)",
      transformOrigin: "0 0"
    },
    property1: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-f909250206134966-0d75722b",
    style: {
      position: "absolute",
      left: 39,
      top: 38,
      width: 372,
      height: 552
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 447,
      height: 700,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 447,
    height: 700,
    viewBox: "0 0 447 700",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      borderRadius: 31,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 31 C 0 13.879 13.879 0 31 0 L 416 0 C 433.121 0 447 13.879 447 31 L 447 669 C 447 686.121 433.121 700 416 700 L 31 700 C 13.879 700 0 686.121 0 669 L 0 31 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 31 1.5 L 416 1.5 L 416 -1.5 L 31 -1.5 L 31 1.5 Z M 445.5 31 L 445.5 669 L 448.5 669 L 448.5 31 L 445.5 31 Z M 416 698.5 L 31 698.5 L 31 701.5 L 416 701.5 L 416 698.5 Z M 1.5 669 L 1.5 31 L -1.5 31 L -1.5 669 L 1.5 669 Z M 31 698.5 C 14.708 698.5 1.5 685.292 1.5 669 L -1.5 669 C -1.5 686.949 13.051 701.5 31 701.5 L 31 698.5 Z M 445.5 669 C 445.5 685.292 432.292 698.5 416 698.5 L 416 701.5 C 433.949 701.5 448.5 686.949 448.5 669 L 445.5 669 Z M 416 1.5 C 432.292 1.5 445.5 14.708 445.5 31 L 448.5 31 C 448.5 13.051 433.949 -1.5 416 -1.5 L 416 1.5 Z M 31 -1.5 C 13.051 -1.5 -1.5 13.051 -1.5 31 L 1.5 31 C 1.5 14.708 14.708 1.5 31 1.5 L 31 -1.5 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 56,
      top: 658.893,
      width: 126,
      height: 15.973,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "@SampleUser001"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27,
      top: 614.966,
      width: 352,
      height: 31.946,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "Duck"), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-01d5857d0419bb74-74513998",
    style: {
      position: "absolute",
      left: 27,
      top: 28,
      width: 393.316,
      height: 571.484,
      boxShadow: "inset 0 0 0 1.500px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.842,
      top: 655.704,
      width: 23.007,
      height: 22.969,
      borderRadius: "50%",
      backgroundColor: "rgb(208,215,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 393.316,
      top: 620.156,
      width: 26.622,
      height: 22.865
    }
  }, /*#__PURE__*/React.createElement(Vector, {
    style: {
      transform: "scale(0.548, 0.547)",
      transformOrigin: "0 0"
    },
    property1: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 447,
      height: 700,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 447,
    height: 700,
    viewBox: "0 0 447 700",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      borderRadius: 31,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 31 C 0 13.879 13.879 0 31 0 L 416 0 C 433.121 0 447 13.879 447 31 L 447 669 C 447 686.121 433.121 700 416 700 L 31 700 C 13.879 700 0 686.121 0 669 L 0 31 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 31 1.5 L 416 1.5 L 416 -1.5 L 31 -1.5 L 31 1.5 Z M 445.5 31 L 445.5 669 L 448.5 669 L 448.5 31 L 445.5 31 Z M 416 698.5 L 31 698.5 L 31 701.5 L 416 701.5 L 416 698.5 Z M 1.5 669 L 1.5 31 L -1.5 31 L -1.5 669 L 1.5 669 Z M 31 698.5 C 14.708 698.5 1.5 685.292 1.5 669 L -1.5 669 C -1.5 686.949 13.051 701.5 31 701.5 L 31 698.5 Z M 445.5 669 C 445.5 685.292 432.292 698.5 416 698.5 L 416 701.5 C 433.949 701.5 448.5 686.949 448.5 669 L 445.5 669 Z M 416 1.5 C 432.292 1.5 445.5 14.708 445.5 31 L 448.5 31 C 448.5 13.051 433.949 -1.5 416 -1.5 L 416 1.5 Z M 31 -1.5 C 13.051 -1.5 -1.5 13.051 -1.5 31 L 1.5 31 C 1.5 14.708 14.708 1.5 31 1.5 L 31 -1.5 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 56,
      top: 658.893,
      width: 126,
      height: 15.973,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "PiPioneer"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.842,
      top: 655.703,
      width: 23.007,
      height: 22.969,
      borderRadius: "50%",
      backgroundColor: "rgb(255,212,203)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27,
      top: 614.967,
      width: 352,
      height: 31.946,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "Travel Journalers / Travel Items"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 28,
      width: 393.316,
      height: 571.484,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 393.316,
      top: 620.156,
      width: 26.622,
      height: 22.865
    }
  }, /*#__PURE__*/React.createElement(Vector, {
    style: {
      transform: "scale(0.548, 0.547)",
      transformOrigin: "0 0"
    },
    property1: "default"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-01e370acf7227d0c-004efae0",
    style: {
      position: "absolute",
      left: 43,
      top: 38,
      width: 372,
      height: 552
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 447,
      height: 700,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 447,
    height: 700,
    viewBox: "0 0 447 700",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      borderRadius: 31,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 31 C 0 13.879 13.879 0 31 0 L 416 0 C 433.121 0 447 13.879 447 31 L 447 669 C 447 686.121 433.121 700 416 700 L 31 700 C 13.879 700 0 686.121 0 669 L 0 31 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 31 1.5 L 416 1.5 L 416 -1.5 L 31 -1.5 L 31 1.5 Z M 445.5 31 L 445.5 669 L 448.5 669 L 448.5 31 L 445.5 31 Z M 416 698.5 L 31 698.5 L 31 701.5 L 416 701.5 L 416 698.5 Z M 1.5 669 L 1.5 31 L -1.5 31 L -1.5 669 L 1.5 669 Z M 31 698.5 C 14.708 698.5 1.5 685.292 1.5 669 L -1.5 669 C -1.5 686.949 13.051 701.5 31 701.5 L 31 698.5 Z M 445.5 669 C 445.5 685.292 432.292 698.5 416 698.5 L 416 701.5 C 433.949 701.5 448.5 686.949 448.5 669 L 445.5 669 Z M 416 1.5 C 432.292 1.5 445.5 14.708 445.5 31 L 448.5 31 C 448.5 13.051 433.949 -1.5 416 -1.5 L 416 1.5 Z M 31 -1.5 C 13.051 -1.5 -1.5 13.051 -1.5 31 L 1.5 31 C 1.5 14.708 14.708 1.5 31 1.5 L 31 -1.5 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 56,
      top: 658.893,
      width: 126,
      height: 15.973,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "LunaEcho"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27,
      top: 614.967,
      width: 352,
      height: 31.946,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "MathMinds / 2024"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 28,
      width: 393.316,
      height: 571.484,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.842,
      top: 655.703,
      width: 23.007,
      height: 22.969,
      borderRadius: "50%",
      backgroundColor: "rgb(198,241,207)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 393.316,
      top: 620.156,
      width: 26.622,
      height: 22.865
    }
  }, /*#__PURE__*/React.createElement(Vector, {
    style: {
      transform: "scale(0.548, 0.547)",
      transformOrigin: "0 0"
    },
    property1: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-f089619d02e2d546",
    style: {
      position: "absolute",
      left: 38,
      top: 38,
      width: 372,
      height: 552
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 447,
      height: 700,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 447,
    height: 700,
    viewBox: "0 0 447 700",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      borderRadius: 31,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 31 C 0 13.879 13.879 0 31 0 L 416 0 C 433.121 0 447 13.879 447 31 L 447 669 C 447 686.121 433.121 700 416 700 L 31 700 C 13.879 700 0 686.121 0 669 L 0 31 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 31 1.5 L 416 1.5 L 416 -1.5 L 31 -1.5 L 31 1.5 Z M 445.5 31 L 445.5 669 L 448.5 669 L 448.5 31 L 445.5 31 Z M 416 698.5 L 31 698.5 L 31 701.5 L 416 701.5 L 416 698.5 Z M 1.5 669 L 1.5 31 L -1.5 31 L -1.5 669 L 1.5 669 Z M 31 698.5 C 14.708 698.5 1.5 685.292 1.5 669 L -1.5 669 C -1.5 686.949 13.051 701.5 31 701.5 L 31 698.5 Z M 445.5 669 C 445.5 685.292 432.292 698.5 416 698.5 L 416 701.5 C 433.949 701.5 448.5 686.949 448.5 669 L 445.5 669 Z M 416 1.5 C 432.292 1.5 445.5 14.708 445.5 31 L 448.5 31 C 448.5 13.051 433.949 -1.5 416 -1.5 L 416 1.5 Z M 31 -1.5 C 13.051 -1.5 -1.5 13.051 -1.5 31 L 1.5 31 C 1.5 14.708 14.708 1.5 31 1.5 L 31 -1.5 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 56,
      top: 658.893,
      width: 126,
      height: 15.973,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "StarGazer"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27,
      top: 614.966,
      width: 352,
      height: 31.946,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "Celestial Keepers / Dragon"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 28,
      width: 393.316,
      height: 571.484,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.842,
      top: 655.704,
      width: 23.007,
      height: 22.969,
      borderRadius: "50%",
      backgroundColor: "rgb(240,203,146)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 393.316,
      top: 620.156,
      width: 26.622,
      height: 22.865
    }
  }, /*#__PURE__*/React.createElement(Vector, {
    style: {
      transform: "scale(0.548, 0.547)",
      transformOrigin: "0 0"
    },
    property1: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-01aea3c40145c10a-7889d0ac",
    style: {
      position: "absolute",
      left: 38,
      top: 38,
      width: 372,
      height: 552
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 447,
      height: 700,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 447,
    height: 700,
    viewBox: "0 0 447 700",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      borderRadius: 31,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 31 C 0 13.879 13.879 0 31 0 L 416 0 C 433.121 0 447 13.879 447 31 L 447 669 C 447 686.121 433.121 700 416 700 L 31 700 C 13.879 700 0 686.121 0 669 L 0 31 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 31 1.5 L 416 1.5 L 416 -1.5 L 31 -1.5 L 31 1.5 Z M 445.5 31 L 445.5 669 L 448.5 669 L 448.5 31 L 445.5 31 Z M 416 698.5 L 31 698.5 L 31 701.5 L 416 701.5 L 416 698.5 Z M 1.5 669 L 1.5 31 L -1.5 31 L -1.5 669 L 1.5 669 Z M 31 698.5 C 14.708 698.5 1.5 685.292 1.5 669 L -1.5 669 C -1.5 686.949 13.051 701.5 31 701.5 L 31 698.5 Z M 445.5 669 C 445.5 685.292 432.292 698.5 416 698.5 L 416 701.5 C 433.949 701.5 448.5 686.949 448.5 669 L 445.5 669 Z M 416 1.5 C 432.292 1.5 445.5 14.708 445.5 31 L 448.5 31 C 448.5 13.051 433.949 -1.5 416 -1.5 L 416 1.5 Z M 31 -1.5 C 13.051 -1.5 -1.5 13.051 -1.5 31 L 1.5 31 C 1.5 14.708 14.708 1.5 31 1.5 L 31 -1.5 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 56,
      top: 658.893,
      width: 126,
      height: 15.973,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "ShadowCaster"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27,
      top: 614.966,
      width: 352,
      height: 31.946,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "Urban Ink / Street"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 28,
      width: 393.316,
      height: 571.484,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.842,
      top: 655.704,
      width: 23.007,
      height: 22.969,
      borderRadius: "50%",
      backgroundColor: "rgb(118,255,184)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 393.316,
      top: 620.156,
      width: 26.622,
      height: 22.865
    }
  }, /*#__PURE__*/React.createElement(Vector, {
    style: {
      transform: "scale(0.548, 0.547)",
      transformOrigin: "0 0"
    },
    property1: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-774b511cea53f24f",
    style: {
      position: "absolute",
      left: 38,
      top: 38,
      width: 372,
      height: 552
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 447,
      height: 700,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 447,
    height: 700,
    viewBox: "0 0 447 700",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      borderRadius: 31,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 31 C 0 13.879 13.879 0 31 0 L 416 0 C 433.121 0 447 13.879 447 31 L 447 669 C 447 686.121 433.121 700 416 700 L 31 700 C 13.879 700 0 686.121 0 669 L 0 31 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 31 1.5 L 416 1.5 L 416 -1.5 L 31 -1.5 L 31 1.5 Z M 445.5 31 L 445.5 669 L 448.5 669 L 448.5 31 L 445.5 31 Z M 416 698.5 L 31 698.5 L 31 701.5 L 416 701.5 L 416 698.5 Z M 1.5 669 L 1.5 31 L -1.5 31 L -1.5 669 L 1.5 669 Z M 31 698.5 C 14.708 698.5 1.5 685.292 1.5 669 L -1.5 669 C -1.5 686.949 13.051 701.5 31 701.5 L 31 698.5 Z M 445.5 669 C 445.5 685.292 432.292 698.5 416 698.5 L 416 701.5 C 433.949 701.5 448.5 686.949 448.5 669 L 445.5 669 Z M 416 1.5 C 432.292 1.5 445.5 14.708 445.5 31 L 448.5 31 C 448.5 13.051 433.949 -1.5 416 -1.5 L 416 1.5 Z M 31 -1.5 C 13.051 -1.5 -1.5 13.051 -1.5 31 L 1.5 31 C 1.5 14.708 14.708 1.5 31 1.5 L 31 -1.5 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 56,
      top: 658.893,
      width: 126,
      height: 15.973,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "Chloe Dong"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27,
      top: 614.967,
      width: 352,
      height: 31.946,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "Math 111 - Class notes"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.842,
      top: 28.438,
      width: 393.316,
      height: 571.484,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-648cf206edaf2ff5-301a626b",
    style: {
      position: "absolute",
      left: 38,
      top: 40,
      width: 372,
      height: 549
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.842,
      top: 655.703,
      width: 23.007,
      height: 22.969,
      borderRadius: "50%",
      backgroundColor: "rgb(255,209,209)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 393.316,
      top: 620.156,
      width: 26.622,
      height: 22.865
    }
  }, /*#__PURE__*/React.createElement(Vector, {
    style: {
      transform: "scale(0.548, 0.547)",
      transformOrigin: "0 0"
    },
    property1: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 447,
      height: 700,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 447,
    height: 700,
    viewBox: "0 0 447 700",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      borderRadius: 31,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 31 C 0 13.879 13.879 0 31 0 L 416 0 C 433.121 0 447 13.879 447 31 L 447 669 C 447 686.121 433.121 700 416 700 L 31 700 C 13.879 700 0 686.121 0 669 L 0 31 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 31 1.5 L 416 1.5 L 416 -1.5 L 31 -1.5 L 31 1.5 Z M 445.5 31 L 445.5 669 L 448.5 669 L 448.5 31 L 445.5 31 Z M 416 698.5 L 31 698.5 L 31 701.5 L 416 701.5 L 416 698.5 Z M 1.5 669 L 1.5 31 L -1.5 31 L -1.5 669 L 1.5 669 Z M 31 698.5 C 14.708 698.5 1.5 685.292 1.5 669 L -1.5 669 C -1.5 686.949 13.051 701.5 31 701.5 L 31 698.5 Z M 445.5 669 C 445.5 685.292 432.292 698.5 416 698.5 L 416 701.5 C 433.949 701.5 448.5 686.949 448.5 669 L 445.5 669 Z M 416 1.5 C 432.292 1.5 445.5 14.708 445.5 31 L 448.5 31 C 448.5 13.051 433.949 -1.5 416 -1.5 L 416 1.5 Z M 31 -1.5 C 13.051 -1.5 -1.5 13.051 -1.5 31 L 1.5 31 C 1.5 14.708 14.708 1.5 31 1.5 L 31 -1.5 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 56,
      top: 658.893,
      width: 126,
      height: 15.973,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "DriftwoodMage"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27,
      top: 614.966,
      width: 352,
      height: 31.946,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "Sketch"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 28,
      width: 393.316,
      height: 571.484,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.842,
      top: 655.704,
      width: 23.007,
      height: 22.969,
      borderRadius: "50%",
      backgroundColor: "rgb(255,138,191)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 393.316,
      top: 620.156,
      width: 26.622,
      height: 22.865
    }
  }, /*#__PURE__*/React.createElement(Vector, {
    style: {
      transform: "scale(0.548, 0.547)",
      transformOrigin: "0 0"
    },
    property1: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-94f3e812f384e3bc",
    style: {
      position: "absolute",
      left: 43,
      top: 38,
      width: 372,
      height: 552
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 447,
      height: 700,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 447,
    height: 700,
    viewBox: "0 0 447 700",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      borderRadius: 31,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 31 C 0 13.879 13.879 0 31 0 L 416 0 C 433.121 0 447 13.879 447 31 L 447 669 C 447 686.121 433.121 700 416 700 L 31 700 C 13.879 700 0 686.121 0 669 L 0 31 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 31 1.5 L 416 1.5 L 416 -1.5 L 31 -1.5 L 31 1.5 Z M 445.5 31 L 445.5 669 L 448.5 669 L 448.5 31 L 445.5 31 Z M 416 698.5 L 31 698.5 L 31 701.5 L 416 701.5 L 416 698.5 Z M 1.5 669 L 1.5 31 L -1.5 31 L -1.5 669 L 1.5 669 Z M 31 698.5 C 14.708 698.5 1.5 685.292 1.5 669 L -1.5 669 C -1.5 686.949 13.051 701.5 31 701.5 L 31 698.5 Z M 445.5 669 C 445.5 685.292 432.292 698.5 416 698.5 L 416 701.5 C 433.949 701.5 448.5 686.949 448.5 669 L 445.5 669 Z M 416 1.5 C 432.292 1.5 445.5 14.708 445.5 31 L 448.5 31 C 448.5 13.051 433.949 -1.5 416 -1.5 L 416 1.5 Z M 31 -1.5 C 13.051 -1.5 -1.5 13.051 -1.5 31 L 1.5 31 C 1.5 14.708 14.708 1.5 31 1.5 L 31 -1.5 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 56,
      top: 658.893,
      width: 126,
      height: 15.973,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "PixelWanderer"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27,
      top: 614.966,
      width: 352,
      height: 31.946,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "Person"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 28,
      width: 393.316,
      height: 571.484,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.842,
      top: 655.704,
      width: 23.007,
      height: 22.969,
      borderRadius: "50%",
      backgroundColor: "rgb(239,159,159)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 393.316,
      top: 620.156,
      width: 26.622,
      height: 22.865
    }
  }, /*#__PURE__*/React.createElement(Vector, {
    style: {
      transform: "scale(0.548, 0.547)",
      transformOrigin: "0 0"
    },
    property1: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-3704182d31f788ca",
    style: {
      position: "absolute",
      left: 43,
      top: 38,
      width: 372,
      height: 552
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 447,
      height: 700,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 447,
    height: 700,
    viewBox: "0 0 447 700",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      borderRadius: 31,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 31 C 0 13.879 13.879 0 31 0 L 416 0 C 433.121 0 447 13.879 447 31 L 447 669 C 447 686.121 433.121 700 416 700 L 31 700 C 13.879 700 0 686.121 0 669 L 0 31 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 31 1.5 L 416 1.5 L 416 -1.5 L 31 -1.5 L 31 1.5 Z M 445.5 31 L 445.5 669 L 448.5 669 L 448.5 31 L 445.5 31 Z M 416 698.5 L 31 698.5 L 31 701.5 L 416 701.5 L 416 698.5 Z M 1.5 669 L 1.5 31 L -1.5 31 L -1.5 669 L 1.5 669 Z M 31 698.5 C 14.708 698.5 1.5 685.292 1.5 669 L -1.5 669 C -1.5 686.949 13.051 701.5 31 701.5 L 31 698.5 Z M 445.5 669 C 445.5 685.292 432.292 698.5 416 698.5 L 416 701.5 C 433.949 701.5 448.5 686.949 448.5 669 L 445.5 669 Z M 416 1.5 C 432.292 1.5 445.5 14.708 445.5 31 L 448.5 31 C 448.5 13.051 433.949 -1.5 416 -1.5 L 416 1.5 Z M 31 -1.5 C 13.051 -1.5 -1.5 13.051 -1.5 31 L 1.5 31 C 1.5 14.708 14.708 1.5 31 1.5 L 31 -1.5 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 56,
      top: 658.893,
      width: 126,
      height: 15.973,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "MiraVoyager"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27,
      top: 614.966,
      width: 352,
      height: 31.946,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "Calculate"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 28,
      width: 393.316,
      height: 571.484,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.842,
      top: 655.704,
      width: 23.007,
      height: 22.969,
      borderRadius: "50%",
      backgroundColor: "rgb(113,148,160)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 393.316,
      top: 620.156,
      width: 26.622,
      height: 22.865
    }
  }, /*#__PURE__*/React.createElement(Vector, {
    style: {
      transform: "scale(0.548, 0.547)",
      transformOrigin: "0 0"
    },
    property1: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-5da6ad2557a7f1ec",
    style: {
      position: "absolute",
      left: 42,
      top: 38,
      width: 372,
      height: 552
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 447,
      height: 700,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 447,
    height: 700,
    viewBox: "0 0 447 700",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 447,
      height: 700,
      borderRadius: 31,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 31 C 0 13.879 13.879 0 31 0 L 416 0 C 433.121 0 447 13.879 447 31 L 447 669 C 447 686.121 433.121 700 416 700 L 31 700 C 13.879 700 0 686.121 0 669 L 0 31 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 31 1.5 L 416 1.5 L 416 -1.5 L 31 -1.5 L 31 1.5 Z M 445.5 31 L 445.5 669 L 448.5 669 L 448.5 31 L 445.5 31 Z M 416 698.5 L 31 698.5 L 31 701.5 L 416 701.5 L 416 698.5 Z M 1.5 669 L 1.5 31 L -1.5 31 L -1.5 669 L 1.5 669 Z M 31 698.5 C 14.708 698.5 1.5 685.292 1.5 669 L -1.5 669 C -1.5 686.949 13.051 701.5 31 701.5 L 31 698.5 Z M 445.5 669 C 445.5 685.292 432.292 698.5 416 698.5 L 416 701.5 C 433.949 701.5 448.5 686.949 448.5 669 L 445.5 669 Z M 416 1.5 C 432.292 1.5 445.5 14.708 445.5 31 L 448.5 31 C 448.5 13.051 433.949 -1.5 416 -1.5 L 416 1.5 Z M 31 -1.5 C 13.051 -1.5 -1.5 13.051 -1.5 31 L 1.5 31 C 1.5 14.708 14.708 1.5 31 1.5 L 31 -1.5 Z",
    fill: "rgb(0,0,0)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 56,
      top: 658.893,
      width: 126,
      height: 15.973,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "LunaEcho"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 27,
      top: 614.966,
      width: 352,
      height: 31.946,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 20,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "MathMinds / 2024"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27,
      top: 28,
      width: 393.316,
      height: 571.484,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(0,0,0)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.842,
      top: 655.704,
      width: 23.007,
      height: 22.969,
      borderRadius: "50%",
      backgroundColor: "rgb(105,188,122)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 393.316,
      top: 620.156,
      width: 26.622,
      height: 22.865
    }
  }, /*#__PURE__*/React.createElement(Vector, {
    style: {
      transform: "scale(0.548, 0.547)",
      transformOrigin: "0 0"
    },
    property1: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-3b71acf9781fae9f-4cbfeeca",
    style: {
      position: "absolute",
      left: 41,
      top: 38,
      width: 372,
      height: 552
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 3,
      width: 1012,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7,
      top: 4,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1,
      letterSpacing: "-0.010em",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "19:02"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1,
      letterSpacing: "-0.010em",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Friday March 13")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 946,
      top: 4,
      display: "flex",
      flexDirection: "row",
      gap: 1,
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: 1,
      letterSpacing: "-0.010em",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "100%"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26.5,
      height: 11.5,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 26.500,
    height: 11.500,
    viewBox: "0 0 26.500 11.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 26.5,
      height: 11.5,
      opacity: 0.44,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 25 3.5 L 25.46 3.807 C 26.11 4.24 26.5 4.969 26.5 5.75 C 26.5 6.531 26.11 7.26 25.46 7.693 L 25 8 L 25 3.5 Z M 2 0 L 22 0 C 23.105 0 24 0.895 24 2 L 24 9.5 C 24 10.605 23.105 11.5 22 11.5 L 2 11.5 C 0.895 11.5 0 10.605 0 9.5 L 0 2 C 0 0.895 0.895 0 2 0 Z M 2 1 C 1.448 1 1 1.448 1 2 L 1 9.5 C 1 10.052 1.448 10.5 2 10.5 L 22 10.5 C 22.552 10.5 23 10.052 23 9.5 L 23 2 C 23 1.448 22.552 1 22 1 L 2 1 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 7.500,
    viewBox: "0 0 20 7.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 7.5,
      borderRadius: 1,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.25 0 L 19 0 C 19.552 0 20 0.448 20 1 L 20 6.5 C 20 7.052 19.552 7.5 19 7.5 L 1.25 7.5 C 0.56 7.5 0 7.052 0 6.5 L 0 1 C 0 0.448 0.56 0 1.25 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))), /*#__PURE__*/React.createElement("svg", {
    width: 14.538,
    height: 10.500,
    viewBox: "0 0 14.538 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 927,
      top: 5,
      width: 14.538,
      height: 10.5,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.27 2.181 C 9.379 2.181 11.408 2.996 12.937 4.458 C 13.052 4.571 13.236 4.569 13.349 4.455 L 14.45 3.338 C 14.507 3.28 14.539 3.201 14.538 3.119 C 14.538 3.037 14.505 2.958 14.447 2.901 C 10.434 -0.967 4.104 -0.967 0.092 2.901 C 0.034 2.958 0.001 3.037 0 3.119 C -0.001 3.201 0.031 3.279 0.089 3.338 L 1.19 4.455 C 1.303 4.57 1.487 4.571 1.602 4.458 C 3.131 2.996 5.16 2.181 7.27 2.181 Z M 7.27 5.815 C 8.429 5.815 9.546 6.248 10.405 7.031 C 10.522 7.142 10.705 7.14 10.818 7.025 L 11.917 5.908 C 11.975 5.85 12.007 5.77 12.006 5.688 C 12.005 5.605 11.972 5.526 11.913 5.469 C 9.296 3.021 5.245 3.021 2.629 5.469 C 2.57 5.526 2.536 5.605 2.535 5.688 C 2.535 5.77 2.567 5.85 2.625 5.908 L 3.724 7.025 C 3.837 7.14 4.02 7.142 4.136 7.031 C 4.995 6.249 6.111 5.816 7.27 5.815 Z M 9.382 8.481 C 9.441 8.423 9.473 8.343 9.471 8.261 C 9.47 8.178 9.434 8.099 9.373 8.044 C 8.159 7.011 6.38 7.011 5.166 8.044 C 5.105 8.099 5.069 8.178 5.068 8.26 C 5.066 8.343 5.098 8.423 5.157 8.481 L 7.059 10.411 C 7.114 10.468 7.19 10.5 7.27 10.5 C 7.349 10.5 7.425 10.468 7.481 10.411 L 9.382 8.481 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}

// Globals for scripts loaded after this file.
window.Label = Label;
window.Vector = Vector;
window.Explore = Explore;