interface Project {
  name: string;
  description: string;
  link: string;
}
export const projects: Project[] = [
  {
    name: "Phoenix",
    description:
      "A beautiful macOS game launcher  Completely open source, built with SwiftUI, and optimized for macOS. (I'm just a translator lol)",
    link: "https://www.phoenixlauncher.app",
  },
  {
    name: "Dotfiles",
    description:
      "This repository is a collection of all the dotfiles for my macOS rice. If you encounter any errors, please create a issue on github.",
    link: "https://github.com/NotAriRay/dotfiles",
  },
  {
    name: "More coming soon!",
    description:
      "I will update this page with every new project I make!",
    link: " ",
  },
];
