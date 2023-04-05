const COLORS = {
  primary: "#390420",
  secondary: "#b2001e",
  tertiary: "#f54516",
  quaternary: "#003049",
  quinary: "#669bbc",
};

const SIZES = {
  padding: 15,
  borderRadius: 15,
  textBoxRadius: 25,
  h1: 30,
  h2: 23,
};

const FONTS = {
  h1_semiBold: { fontSize: SIZES.h1, fontFamily: "Poppins_Medium" },
  h2_semiBold: { fontSize: SIZES.h2, fontFamily: "Poppins_Regular" },
};

const SHADOW = {
  elevation: 12,
  shadowColor: COLORS.secondary,
  shadowOffset: { width: 2, height: 12 },
  shadowRadius: 12,
};

export { COLORS, SIZES, FONTS, SHADOW };
