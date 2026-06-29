import { contactServiceOptions } from "./about";

export { contactServiceOptions };

export const contactHero = {
  headline: "Let's build what you dreamt of, Together!",
  subheadline: "Drop us a call!",
  description:
    "Whether you need a website, mobile app, CRM, or a full digital strategy — our team is ready to listen, plan, and deliver.",
};

export const contactPhones = {
  mobile: "+91-8448158188",
  mobileTel: "tel:+918448158188",
  landline: "01244084508",
  landlineTel: "tel:01244084508",
  email: "contact-us@razobyte.com",
  emailHref: "mailto:contact-us@razobyte.com",
};

export const contactOffices = [
  {
    id: "gurugram",
    city: "Gurugram",
    country: "India",
    address:
      "Unit no 243, Tower A, Spaze I-Tech Park, Sector 49, Road, Gurugram 122018, Haryana",
    phone: contactPhones.mobile,
    phoneTel: contactPhones.mobileTel,
    email: contactPhones.email,
    emailHref: contactPhones.emailHref,
    mapEmbed:
      "https://maps.google.com/maps?q=Spaze+I-Tech+Park+Sector+49+Gurugram&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Spaze+I-Tech+Park+Sector+49+Gurugram",
  },
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    country: "India",
    address:
      "C Siddhi Vinayak Tower, Sarkhej Gandhinagar Hwy, Near DCP Office, Ahmedabad, Gujarat 380051",
    phone: contactPhones.mobile,
    phoneTel: contactPhones.mobileTel,
    email: contactPhones.email,
    emailHref: contactPhones.emailHref,
    mapEmbed:
      "https://maps.google.com/maps?q=Siddhi+Vinayak+Tower+Sarkhej+Gandhinagar+Highway+Ahmedabad&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Siddhi+Vinayak+Tower+Sarkhej+Gandhinagar+Highway+Ahmedabad",
  },
] as const;

export const contactQuickFacts = [
  { label: "Response time", value: "Within 24 hrs" },
  { label: "Consultation", value: "Free & no obligation" },
  { label: "Offices", value: "2 cities in India" },
] as const;

export const contactCta = {
  title: "Interested in a little more detail?",
  description: "Let us know how we can assist you — we're one message away.",
  button: "Contact Us",
};
