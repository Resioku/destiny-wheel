// ---------------------------------------------------------
// SITE CONFIG
// ---------------------------------------------------------
// Central place for on/off toggles and settings, so you don't have to
// dig through the rest of the code to change how something behaves.
// Add more settings here over time as needed.
// ---------------------------------------------------------

const CONFIG = {

  globalSpins: {
    // Set to false to hide the "Global Spins" line entirely and skip
    // all network calls to the counter service.
    enabled: true,

    // Set to true to keep the line visible but always show
    // "unavailable" without ever actually contacting the counter
    // service. Useful if you know the service is down and don't
    // want the page repeatedly trying to reach it.
    forceUnavailable: false,
  },

};
