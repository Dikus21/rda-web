export type CompanyInfo = {
  name: string;
  tagline: string;
};

export type ContactInfo = {
  email: string;
  phone: string;
  phoneDisplay: string;
  address: string;
};

export type SocialLinks = {
  twitter?: string;
  linkedin?: string;
  instagram?: string;
};

export type SiteData = {
  company: CompanyInfo;
  contact: ContactInfo;
  social: SocialLinks;
};

export const data: SiteData = {
  company: {
    name: "PT Rimbun Daur Alam",
    tagline: "Tumbuh dalam Harmoni, Menghidupkan Kembali Alam",
  },
  contact: {
    email: "rimbundauralam@gmail.com",
    phone: "6285285849886",
    phoneDisplay: "+62 852-8584-9886",
    address:
      "Jalan Raya Perancis, Pergudangan 9 No. 9 AE, Dadap, Kab. Tangerang",
  },
  social: {
    twitter: "https://twitter.com/yourcompany",
    linkedin: "https://linkedin.com/company/yourcompany",
    instagram: "https://instagram.com/yourcompany",
  },
};
