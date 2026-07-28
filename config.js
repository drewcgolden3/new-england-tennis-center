/* =========================================================================
   NEW ENGLAND TENNIS CENTER — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "New England Tennis Center",
    shortName: "NET",
    tagline: "Indoor Tennis in Lancaster",
  },

  contact: {
    venueName: "New England Tennis Center",
    address: "100 Duval Rd, Lancaster, MA 01523",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=New+England+Tennis+Center+Lancaster+MA",
    phone: "(978) 728-4479",
    phoneHref: "tel:+19787284479",
    email: "hello@facebook.com",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.new-england-tennis-center.example/schedule",
      title: "Book a Court",
      subtitle: "Indoor court availability, without the phone call.",
      services: [{"name": "Indoor court", "meta": "60 min \u00b7 singles or doubles"}, {"name": "Permanent time", "meta": "Weekly \u00b7 same slot"}, {"name": "Private lesson", "meta": "60 min \u00b7 with a pro"}],
      fallbackEmail: {
        to: "hello@facebook.com",
        subject: "Book a Court",
        body: "Hi New England Tennis Center,\n\nI'd like to book. Here are my details:\n\n- Name:\n- Adult or junior:\n- Level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    lessons: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.new-england-tennis-center.example/schedule",
      title: "Book a Lesson",
      subtitle: "Indoor court availability, without the phone call.",
      services: [{"name": "Indoor court", "meta": "60 min \u00b7 singles or doubles"}, {"name": "Permanent time", "meta": "Weekly \u00b7 same slot"}, {"name": "Private lesson", "meta": "60 min \u00b7 with a pro"}],
      fallbackEmail: {
        to: "hello@facebook.com",
        subject: "Book a Lesson",
        body: "Hi,\n\nI'd like to register for Book a Lesson.\n\nThank you!",
      },
    },

    leagues: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.new-england-tennis-center.example/schedule",
      title: "Join a League",
      subtitle: "Indoor court availability, without the phone call.",
      services: [{"name": "Indoor court", "meta": "60 min \u00b7 singles or doubles"}, {"name": "Permanent time", "meta": "Weekly \u00b7 same slot"}, {"name": "Private lesson", "meta": "60 min \u00b7 with a pro"}],
      fallbackEmail: {
        to: "hello@facebook.com",
        subject: "Join a League",
        body: "Hi,\n\nI'd like to register for Join a League.\n\nThank you!",
      },
    },

    junior: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.new-england-tennis-center.example/schedule",
      title: "Junior Programs",
      subtitle: "Indoor court availability, without the phone call.",
      services: [{"name": "Indoor court", "meta": "60 min \u00b7 singles or doubles"}, {"name": "Permanent time", "meta": "Weekly \u00b7 same slot"}, {"name": "Private lesson", "meta": "60 min \u00b7 with a pro"}],
      fallbackEmail: {
        to: "hello@facebook.com",
        subject: "Junior Programs",
        body: "Hi,\n\nI'd like to register for Junior Programs.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.new-england-tennis-center.example/schedule",
      title: "New Here?",
      subtitle: "Come hit for an hour and see how it feels. Rates, hours and directions are all right here.",
      services: [{"name": "Indoor court", "meta": "60 min \u00b7 singles or doubles"}, {"name": "Permanent time", "meta": "Weekly \u00b7 same slot"}, {"name": "Private lesson", "meta": "60 min \u00b7 with a pro"}],
      fallbackEmail: {
        to: "hello@facebook.com",
        subject: "New Here?",
        body: "Hi New England Tennis Center,\n\nI'm interested in New Here?.\n\nThank you!",
      },
    },
  },
};
