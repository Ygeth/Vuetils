const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    rotate: {
      "-135": "rotate(-135deg)",
      "-45": "rotate(-45deg)",
      "-90": "rotate(-90deg)",
      "45": "rotate(45deg)",
      "90": "rotate(90deg)",
      "135": "rotate(135deg)",
    },
    translateY: {
      "8": "translateY(2rem)",
      "50p": "translateY(50%)",
    },
    translate: {
      "1/2": "translate(50%, 50%)",
    },
    transitionProperty: {
      none: "none",
      all: "all",
      color: "color",
      bg: "background-color",
      border: "border-color",
      colors: ["color", "background-color", "border-color"],
      opacity: "opacity",
      transform: "transform",
    },
    transitionDuration: {
      default: "250ms",
      "0": "0ms",
      "100": "100ms",
      "250": "250ms",
      "500": "500ms",
      "750": "750ms",
      "1000": "1000ms",
      "5000": "5000ms",
      "1trillon": "626352531ms",
    },
    extend: {
      colors: {
        primary: "#ddddd7",
        lightAccent: "#eeeeed",
        lightShade: "#b2d5ed",
        darkAccent: "#B53100",
        darkAccentHover: "#DE460E",
        darkShade: "#E5E5E5",
        gray: {
          ...colors.gray,
        },
      },
      spacing: {
        "11": "2.75rem",
        "13": "3.25rem",
        "14": "3.5rem",
        "15": "3.75rem",
        "17": "4.25rem",
        "18": "4.5rem",
      },
      inset: {
        "-1": "-0.25rem",
        "-2": "-0.5rem",
        "-4": "-1rem",
        "-5": "-1.25rem",
        "-6": "-1.5rem",
        "-8": "-2rem",
        "-10": "-2.5rem",
        "2": "0.5rem",
        full: "100%",
      },
      borderWidth: {
        "6": "6px",
        "14": "14px",
        "16": "16px",
        "18": "18px",
        "20": "20px",
        "22": "22px",
        "24": "24px",
      },
      zIndex: {
        "100": "100",
      },
      minWidth: {
        "1/3": "33vh",
        "1/2": "50vh",
        "32": "32rem",
        "h-9/10": "90vh",
      },
      maxWidth: {
        "5": "5rem",
      },
      maxHeight: {
        "5000": "5000px",
        "64": "16rem",
        "20": "4.75rem",
        "32": "8rem",
        "1/10": "10vh",
        "1/4": "25vh",
        "1/2": "50vh",
        "3/4": "75vh",
        "9/10": "90vh",
        "1/2Griton": "5000px",
        "1Griton": "10000px",
      },
      fontSize: {
        "2xs": "0.6rem",
      },
      height: {
        "28": "7rem",
        "72": "18rem",
        "80": "20rem",
        "88": "22rem",
        "100": "25rem",
        "101": "25,25rem",
        "102": "25,5rem",
        "1/2": "50%",
        "1/3": "33.33%",
        "2/3": "66.66%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "0.2%",
        "2/5": "0.4%",
        "3/5": "0.6%",
        "4/5": "0.8%",
        "1/8": "12.5%",
        "1/10": "10vh",
        "9/10": "90vh",
        "1/16": "6.25%",
        "screen-1/2": "50vh",
        "screen-2/4": "50vh",
        "screen-1/4": "25vh",
        "screen-1/8": "12.5vh",
        "screen-3/4": "75vh",
        "screen-1/16": "6.25vh",
        "screen-15/16": "93.75vh",
        "screen-6/8": "75vh",
      },
      width: {
        "45": "10.5rem",
        "46": "11rem",
        "88": "22rem",
        "128": "32rem",
        "1/7": "14%",
        "2/7": "29%",
        "3/7": "43%",
        "4/7": "57%",
        "5/7": "71%",
        "6/7": "85%",
        "1/8": "12.5%",
        "3/8": "37.5%",
        grid: {
          "1": "8.33%",
          "2": "16.66%",
          "3": "25%",
          "4": "33.33%",
          "5": "41.66%",
          "6": "50% ",
          "7": "58.33%",
          "8": "66.66%",
          "9": "75%",
          "10": "83.33%",
          "11": "91.66%",
          "12": "100%",
        },
      },
      right: {
        "-3": "-0.75rem",
      },
      top: {
        "1/2": "50%",
      },
      left: {
        "1/2": "50%",
      },
    },
  },
  variants: {
    width: ["responsive", "hover"],
    justifyContent: ["responsive", "group-hover"],
    display: ["responsive", "hover", "group-hover"],
    maxWidth: ["hover"],
    backgroundColor: ["responsive", "hover", "focus", "odd"],
    flexDirection: ["responsive"],
  },
  plugins: [
    function ({ addUtilities, config, e }) {
      const rotations = config("theme.rotate");
      const translationsY = config("theme.translateY");
      const transitionProperties = config("theme.transitionProperty");
      const transitionDurations = config("theme.transitionDuration");

      const generateClasses = (objectName, propertyName, keyName) => {
        return Object.keys(objectName).map((key) => {
          let preString = key.charAt(0) === "-" ? "-" : "";
          let postString = preString ? key.slice(1) : key;
          return {
            [`.${e(`${preString}${keyName}-${postString}`)}`]: {
              [propertyName]: objectName[key],
            },
          };
        });
      };

      const rotateUtilities = generateClasses(rotations, "transform", "rotate");
      const translationsYUtilities = generateClasses(translationsY, "transform", "translate-y");
      const transitionPropertiesUtilities = generateClasses(transitionProperties, "transition-property", "transition-property");
      const transitionDurationsUtilities = generateClasses(transitionDurations, "transition-duration", "transition-duration");

      addUtilities(rotateUtilities);
      addUtilities(translationsYUtilities);
      addUtilities(transitionPropertiesUtilities);
      addUtilities(transitionDurationsUtilities);
    },
  ],
};
