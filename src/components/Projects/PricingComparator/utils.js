export const PRICING_SOLUTIONS = [
  {
    name: "Free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    unlimitedCollaborators: true,
    unlimitedComponent: false,
    multipleProjectsAndStyleGuides: false,
    unlimitedVersionsPerScreen: false,
    userManagement: false,
  },
  {
    name: "Premium",
    monthlyPrice: 29,
    yearlyPrice: 279,
    unlimitedCollaborators: true,
    unlimitedComponent: true,
    multipleProjectsAndStyleGuides: false,
    unlimitedVersionsPerScreen: true,
    userManagement: false,
  },
  {
    name: "Enterprise",
    monthlyPrice: 59,
    yearlyPrice: 569,
    unlimitedCollaborators: true,
    unlimitedComponent: true,
    multipleProjectsAndStyleGuides: true,
    unlimitedVersionsPerScreen: true,
    userManagement: true,
  },
];

export const SOLUTIONS_ITEMS = [
  "unlimitedCollaborators",
  "unlimitedComponent",
  "multipleProjectsAndStyleGuides",
  "unlimitedVersionsPerScreen",
  "userManagement",
];

export const setBorderRadius = (advantage, solutionName) => {
  if (advantage === "unlimitedCollaborators" && solutionName === "Free") {
    return "6px 0 0 0";
  }
  if (advantage === "unlimitedCollaborators" && solutionName === "Enterprise") {
    return "0 6px 0 0";
  }
  if (advantage === "userManagement" && solutionName === "Free") {
    return "0 0 0 6px";
  }
  if (advantage === "userManagement" && solutionName === "Enterprise") {
    return "0 0 6px 0";
  }
};
