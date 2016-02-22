module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Mulheres Tech Day",
      description: "Conference description",
      date: "05 de Março de 2016",
      // If your event is free, just comment this line
      price: "entrada franca",
      venue: "Springpoint",
      address: "Rua Bahia, 1096",
      city: "São Paulo",
      state: "SP"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    // callToAction: {
    //     text: "Inscreva-se!",
    //     link: "http://eventick.com.br"
    // },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    forkButton: {
        repository: "https://github.com/MariaLabHackerspace/mulheresTechDay"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://mulherestechday.com.br/",
      googleanalytics: "UA-74153635-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      //'speakers',
      //'schedule',
      'sponsors',
      'partners',
      'by'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Local",
      //speakers: "Palestrantes",
      //schedule: "Agenda",
      sponsors: "Patrocínio",
      partners: "Parceiros",
      by: "Organizado por"
      //contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Check-in / Breakfast",
        time: "9h00"
      },
      {
        name: "Linus Torvalds",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Linux Foundation",
        link: {
          href: "http://twitter.com/linus",
          text: "@linus"
        },
        presentation: {
          title: "Digging into a Linux Kernel",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "10h00"
        }
      },
      {
        name: "Bill Gates",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Microsoft",
        link: {
          href: "http://github.com/billy95",
          text: "@billy95"
        },
        presentation: {
          title: "Introducing Windows 12",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "11h00"
        }
      },
      {
        name: "Lunch",
        time: "12h00"
      },
      {
        name: "Chuck Norris",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Delta Command",
        link: {
          href: "http://twitter.com/littlechuck",
          text: "@littlechuck"
        },
        presentation: {
          title: "How to kill a elephant with one finger",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "13h00"
        }
      },
      {
        name: "Steve Jobs",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Apple, Inc.",
        link: {
          href: "http://github.com/stevie",
          text: "@stevie"
        },
        presentation: {
          title: "Presenting iPad",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "14h00"
        }
      },
      {
        name: "Coffee-break",
        time: "15h00"
      },
      {
        name: "Mark Zuckerberg",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Facebook",
        link: {
          href: "http://twitter.com/zuck",
          text: "@zuck"
        },
        presentation: {
          title: "Revealing Facebook Secrets",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "16h00"
        }
      },
      {
        name: "Steve Wozniak",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Apple, Inc.",
        link: {
          href: "http://twitter.com/woz",
          text: "@woz"
        },
        presentation: {
          title: "Why do I prefer Android over iPhone",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "17h00"
        }
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Prêmio Mulheres Tech em Sampa",
        logo: "themes/yellow-swan/img/tech-sampa.png",
        url: "http://mulherestechemsampa.com.br/"
      },
      {
        name: "Rede Mulher Empreendedora",
        logo: "themes/yellow-swan/img/rede-mulher.png",
        url: "http://www.redemulherempreendedora.com.br/"
      }
      ,
      {
        name: "Google for Entrepreneurs",
        logo: "themes/yellow-swan/img/google.png",
        url: "https://www.googleforentrepreneurs.com/"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "Springpoint",
        logo: "themes/yellow-swan/img/springpoint.png",
        url: "http://www.springpoint.com.br/"
      }
    ],

    // List of organizers
    by: [
      {
        name: "Academia Lovelace",
        logo: "themes/yellow-swan/img/academia-lovelace.png",
        url: "https://www.facebook.com/academialovelace/"
      },
      {
        name: "Marialab Hackerspace",
        logo: "themes/yellow-swan/img/marialab.png",
        url: "http://www.marialab.com.br/"
      },
      {
        name: "Saga Pólen",
        logo: "themes/yellow-swan/img/saga-polen.png",
        url: "http://www.sagapolen.com.br/"
      },
      {
        name: "Programaria",
        logo: "themes/yellow-swan/img/programaria.png",
        url: "http://www.programaria.org/"
      },
      {
        name: "PyLadies",
        logo: "themes/yellow-swan/img/pyladies.png",
        url: "http://www.meetup.com/PyLadiesSP/"
      },
      {
        name: "Secretaria Municipal de Políticas para as Mulheres",
        logo: "themes/yellow-swan/img/prefeitura-sp-politicas-mulheres.png",
        url: "http://www.prefeitura.sp.gov.br/cidade/secretarias/politicas_para_as_mulheres/"
      },
      {
        name: "SP Negócios",
        logo: "themes/yellow-swan/img/sp-negocios.png",
        url: "http://www.spnegocios.com/"
      },
      {
        name: "Women Up Games",
        logo: "themes/yellow-swan/img/wup.png",
        url: "http://www.womenupgames.com/"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};