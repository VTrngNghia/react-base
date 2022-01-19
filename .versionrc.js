const versionTracker = {
  filename: "src/versionTracker.json",
  type: "json",
};

module.exports = function () {
  return {
    bumpFiles: [versionTracker],
    packageFiles: [versionTracker],
  };
};
