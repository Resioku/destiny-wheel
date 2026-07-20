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

  pvpDisclaimer: {
    // Set to false to skip showing any popup when someone turns on
    // "Include PvP-only" in Filters.
    enabled: true,

    // The message shown in that popup. Edit freely.
    message: "Disclaimer: Some exotics tagged PvP-only may not be fully verified yet, since not every exotic has been tagged. Take the PvP/PvE filtering with a grain of salt for now. Please feel free to join the Discord and debate the picks.",
  },

};
