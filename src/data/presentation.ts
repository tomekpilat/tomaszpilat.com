type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "tomekpilat@gmail.com",
  title: "Hi, I’m Tomasz 👋",
  // profile: "/profile.webp",
  description: `My passion lies in crafting innovative software solutions that go beyond just writing code. As a seasoned professional, I thrive on building high-performing teams, adeptly managing projects, and designing the entire software development lifecycle with a relentless focus on problem-solving.`,
  socials: [
    {
      label: "Github",
      link: "https://github.com/MaeWolff",
    },
  ],
};

export default presentation;
