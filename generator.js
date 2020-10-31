const workboxBuild = require('workbox-build');

// NOTE: This should be run *AFTER* all your assets are built
const buildSW = () => {
  // This will return a Promise
  return workboxBuild.injectManifest({
    swSrc: "sw2.js",
    swDest: 'sw4.js',
    globDirectory: './',
    globPatterns: [
        "**/*.{css,eot,svg,ttf,woff,woff2,html,png,js,json}",
    ]
  }).then(({count, size, warnings}) => {
    // Optionally, log any warnings and details.
    warnings.forEach(console.warn);
    console.log(`${count} files will be precached, totaling ${size} bytes.`);
  });
}

buildSW();