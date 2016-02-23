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
    callToAction: {
        text: "Inscreva-se!",
        link: "https://www.eventbrite.com.br/e/mulheres-tech-day-tickets-22072708064"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    forkButton: {
        repository: "https://github.com/MariaLabHackerspace/mulheresTechDay"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://mulherestechday.com.br",
      googleanalytics: "UA-74153635-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      'partners',
      'by'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Agenda",
      sponsors: "Patrocínio",
      partners: "Parceiros",
      by: "Organizado por"
      //contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Credenciamento",
        time: "9h00"
      },
      {
        name: "Denise Motta Dau",
        photo: "themes/yellow-swan/img/denise.jpg",
        bio: "Secretaria Denise Motta Dau e representantes dos grupos vencedores do Prêmio Mulheres Tech em Sampa",
        company: "Secretaria de Políticas para Mulheres",
        // link: {
        //   href: "http://twitter.com/linus",
        //   text: "@linus"
        // },
        presentation: {
          title: "Palestra de abertura",
          description: "[Jardim] Apresentação dos projetos vencedores do Prêmio.",
          time: "09h30"
        }
      },
      {
        name: "Gedeane Kenshima",
        //photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "",
        company: "",
        // link: {
        //   href: "http://github.com/billy95",
        //   text: "@billy95"
        // },
        presentation: {
          title: "Arduíno para meninas",
          description: "[Sala 3T] Workshop de arduíno. Duração: 1h 30m.",
          time: "10h30"
        }
      },
      {
        name: "Priscila Zillo",
        photo: "themes/yellow-swan/img/priscila.jpg",
        bio: "",
        company: "",
        // link: {
        //   href: "http://github.com/billy95",
        //   text: "@billy95"
        // },
        presentation: {
          title: "Tecnologia e mudanças na organização do trabalho",
          description: "[Sala 1A] Duração: 1h.",
          time: "10h30"
        }
      },
      {
        name: "Amanda Pinheiro",
        photo: "themes/yellow-swan/img/amanda.jpg",
        bio: "",
        company: "",
        // link: {
        //   href: "http://github.com/billy95",
        //   text: "@billy95"
        // },
        presentation: {
          title: "Tecnologia e empreendedorismo",
          description: "[Sala 1T] Como unir as duas coisas para ter sucesso? Duração: 1h.",
          time: "11h30"
        }
      },
      {
        name: "Malu Andrade",
        //photo: "themes/yellow-swan/img/amanda.jpg",
        bio: "",
        company: "SP Cine (WUG)",
        // link: {
        //   href: "http://github.com/billy95",
        //   text: "@billy95"
        // },
        presentation: {
          title: "Políticas públicas e gênero feminino nos games",
          description: "[Sala 1A] Como unir as duas coisas para ter sucesso? Duração: 30m.",
          time: "11h00"
        }
      },
      {
        name: "Almoço",
        time: "12h00"
      },
      {
        name: "Ariane Parra",
        //photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "",
        company: "Women Up Games",
        // link: {
        //   href: "http://twitter.com/littlechuck",
        //   text: "@littlechuck"
        // },
        presentation: {
          title: "Competição de Games (WUP)",
          description: "[Sala 2T] Duração: 1h.",
          time: "13h30"
        }
      },
      {
        name: "",
        //photo: "themes/yellow-swan/img/speaker.jpg",
        //bio: "",
        company: "Women Up Games",
        // link: {
        //   href: "http://github.com/stevie",
        //   text: "@stevie"
        // },
        presentation: {
          title: "Ilustração de Games",
          description: "[Sala 1T] Duração: 1h 30m.",
          time: "15h00"
        }
      },
      {
        name: "Vanessa Tonini",
        //photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Agile Coach na Lambda3. Voluntária na Marialab",
        company: "Marialab",
        // link: {
        //   href: "http://github.com/stevie",
        //   text: "@stevie"
        // },
        presentation: {
          title: "Workshop de Web design",
          description: "[Sala 3T] O que é? E como ingressar na carreira. Duração: 2hs.",
          time: "15h00"
        }
      },
      {
        name: "Tatiana Barros",
        photo: "themes/yellow-swan/img/taty-barros.jpg",
        //bio: "",
        company: "Saga Pólen",
        // link: {
        //   href: "http://github.com/stevie",
        //   text: "@stevie"
        // },
        presentation: {
          title: "Workshop de Web design",
          description: "[Sala 1A] Tatiana Barros. Duração: 30m.",
          time: "15h00"
        }
      },
      {
        name: "Programaria",
        //photo: "themes/yellow-swan/img/taty-barros.jpg",
        //bio: "",
        company: "Programaria",
        // link: {
        //   href: "http://github.com/stevie",
        //   text: "@stevie"
        // },
        presentation: {
          title: "Programaria",
          description: "[Sala 1A] Duração: 1h.",
          time: "15h30"
        }
      },
      {
        name: "Coffee-break",
        time: "16h00"
      },
      {
        name: "Encerramento",
        //photo: "themes/yellow-swan/img/speaker.jpg",
        // bio: "",
        // company: "Facebook",
        // link: {
        //   href: "http://twitter.com/zuck",
        //   text: "@zuck"
        // },
        presentation: {
          title: "Encerramento",
          description: "[Jardim] Roda de conversa: empreendedorismo e tecnologia (visão do ponto de vista da empreendedora vs. visão da executiva do mundo corporativo)",
          time: "17h00"
        }
      },
      {
        name: "Show no jardim!",
        time: "18h30"
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Prêmio Mulheres Tech em Sampa",
        logo: "themes/yellow-swan/img/premio-tech-sampa.png",
        url: "http://mulherestechemsampa.com.br/"
      },
      {
        name: "Tech Sampa",
        logo: "themes/yellow-swan/img/tech-sampa.png",
        url: "https://www.facebook.com/techsampa"
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