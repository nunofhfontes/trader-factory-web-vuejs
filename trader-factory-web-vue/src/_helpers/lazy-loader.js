const lazyLoaderFunction = (configObjects) => {
  for (let eachConfigObj of configObjects) {
    let domElem = window.document.createElement("script");
    domElem.src = eachConfigObj.url;
    domElem.onload = function () {
      console.log("Web Component " + eachConfigObj.name + "loaded");
    };
    window.document
      .getElementsByTagName(eachConfigObj.loadOnTargetElem)[0]
      .appendChild(domElem);
  }
};

export { lazyLoaderFunction as lazyLoader };
