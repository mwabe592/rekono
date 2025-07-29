export interface IMenuItem {
  text: string;
  url: string;
}

export interface ISocials {
  facebook?: string;
  github?: string;
  instagram?: string;
  linkedin?: string;
  threads?: string;
  twitter?: string;
  youtube?: string;
  x?: string;
  [key: string]: string | undefined;
}

export const footerDetails: {
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  quickLinks: [
    {
      text: "Features",
      url: "#features",
    },
    // {
    //   text: "Pricing",
    //   url: "#pricing",
    // },
    // {
    //   text: "Testimonials",
    //   url: "#testimonials",
    // },
  ],
  email: "address@yoursite.com",
  telephone: "+1 (123) 456-7890",
  socials: {
    twitter: "https://twitter.com/Twitter",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
  },
};
