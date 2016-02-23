module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Mulheres Tech Day",
      description: " Mulheres Tech Day é um evento de tecnologia voltado para o público feminino de todas as idades.",
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
        photo: "themes/yellow-swan/img/gedeane.jpg",
        bio: "Gedeane Kenshima é engenheira de controle e automação, técnica em automação industria, ambos pelo IFSP. Trabalha como montadora na Tudela Indústria. Hobbista e maker, vem desenvolvendo projetos com arduíno em 2013 e wearables desde 2015. Os eletrônicos desenvolvidos são voltados para a área de moda e entretenimento.",
        company: "",
        // link: {
        //   href: "http://github.com/billy95",
        //   text: "@billy95"
        // },
        presentation: {
          title: "Arduíno para meninas",
          description: "[Sala 3T] Nesse workshop serão apresentados conceitos básicos de programação voltado à experimentações em arduíno. A atividade é voltada para meninas e adolescentes a partir de 9 anos (8 vagas). Duração: 1h 30m.",
          time: "10h30"
        }
      },
      {
        name: "Priscila Zillo",
        photo: "themes/yellow-swan/img/priscila.jpg",
        bio: "Priscila Amaral Zillo é CEO do Curso Sapientia, empresa de e-learning que prepara diplomatas para concurso público. O Sapientia tem investido em tecnologia e soluções criativas para crescer em um mercado em crise.",
        company: "Sapientia",
        // link: {
        //   href: "http://github.com/billy95",
        //   text: "@billy95"
        // },
        presentation: {
          title: "Tecnologia e mudanças na organização do trabalho",
          description: "[Sala 1A] A Revolução Industrial foi uma revolução lenta e, de certa maneira, silenciosa, mas com profundos impactos sociais e na organização do trabalho. Alguns especialistas identificam a nossa época com a Quarta Revolução Industrial, muito mais rápida comparada às outras 3 em termos do ritmo de mudanças. A CEO do Curso Sapientia fala sobre inovação na área de e-learning tendo como mercado um público-alvo conservador (ou seja, resistente à tecnologia), de projetos de tecnologia na empresa e do uso das redes sociais para promoção do trabalho. O trabalho à frente do Sapientia é um caso de estudo para falar de mudanças mais amplas na organização do trabalho. Duração: 1h.",
          time: "10h30"
        }
      },
      {
        name: "Amanda Pinheiro",
        photo: "themes/yellow-swan/img/amanda.jpg",
        bio: "Amanda Gomes Pinheiro é fundadora da AMG Inovação, Comunicação e Desenvolvimento, empresa que atua no desenvolvimento de empreendedores e líderes em todo o Brasil.Formada em Administração de Empresas, com pós-graduacão em Varejo pela Fia USP e MBA em Estratégia Empresarial, é tambeem especialista em comportamento humano e coach. Abriu sua primeira empresa aos 21 anos e liderou funções estratégicas ao longo de 18 anos em grandes empresas de segmentos como tecnologia da informação, telecom, indústria, finanças e varejo.",
        company: "",
        // link: {
        //   href: "http://github.com/billy95",
        //   text: "@billy95"
        // },
        presentation: {
          title: "Tecnologia e empreendedorismo",
          description: "[Sala 1T] Orientação a mulheres que querem assumir os desafios de empreender e liderar com mais assertividade, segurança e êxito. Duração: 1h.",
          time: "11h30"
        }
      },
      {
        name: "Malu Andrade",
        photo: "themes/yellow-swan/img/malu.jpg",
        bio: "Malu Andrade é coordenadora de Inovação da Spcine. Mestranda em arquivos audiovisuais em plataformas digitais pela USP e especialização em Estéticas Tecnológicas pela PUC. Trabalha com gestão cultural há 10 anos, tendo se dedicado desde 2010 a cultura digital.",
        company: "SP Cine (WUG)",
        // link: {
        //   href: "http://github.com/billy95",
        //   text: "@billy95"
        // },
        presentation: {
          title: "Políticas públicas e gênero feminino nos games",
          description: "[Sala 1A] A palestra abordará os seguintes temas: Política de inovação da SPcine - LEIA e política para games. Políticas públicas para games no Brasil. Participação da mulher no audiovisual no país. Duração: 30m.",
          time: "11h00"
        }
      },
      {
        name: "Almoço",
        time: "12h00"
      },
      {
        name: "Ariane Parra",
        photo: "themes/yellow-swan/img/ariane.jpg",
        bio: "Ariane Parra da Women Up Games e Guz Forster da Experimentoria",
        company: "Women Up Games",
        // link: {
        //   href: "http://twitter.com/littlechuck",
        //   text: "@littlechuck"
        // },
        presentation: {
          title: "Competição de Games (WUP)",
          description: "[Sala 2T] Quer se juntar a um monte de mulheres e jogar aquele game da infância e adolescência no fliperama? Então participe da competição de Street Fighter só para elas. Venha conhecer nosso arcade inteiramente montado por nós e saber das nossas Oficinas. Duração: 1h.",
          time: "13h30"
        }
      },
      {
        name: "Bi Aguilart",
        photo: "themes/yellow-swan/img/bi-aguilart.jpg",
        bio: "Ilustradora em parceria com a Women Up Games.",
        company: "Women Up Games",
        // link: {
        //   href: "http://github.com/stevie",
        //   text: "@stevie"
        // },
        presentation: {
          title: "Ilustração para Games",
          description: "[Sala 1T] #Empoderadas é o nome desse workshop. Personagens femininas de games que foram criadas de forma sexualizada ou como \"donzelas\" serão desenhadas e transformadas, pela artista e ilustradora Bi Aguilart, em figuras humanizadas e empoderadas. Duração: 1h 30m.",
          time: "15h00"
        }
      },
      {
        name: "Vanessa Tonini",
        photo: "themes/yellow-swan/img/vanessa.jpg",
        bio: "Agile Coach na Lambda 3, trabalhou como desenvolvedora frontend nos últimos 7 anos. Formada em Sistemas para Internet pela UNIVALI, Especialista em Desenvolvimento Web pela UTFPR e Engenheira de Software pela FIAP, atuou em diferentes segmentos dentro do desenvolvimento frontend, como: ecommerce, acessibilidade e web design responsivo. Também faz parte da organização da Marialab Hackerspace, onde trabalha para a causa das mulheres na tecnologia e inclusão digital.",
        company: "Marialab",
        link: {
          href: "http://github.com/vanessametonini",
          text: "@vanessametonini"
        },
        presentation: {
          title: "Workshop de Web design",
          description: "[Sala 3T] O que é? Como ingressar na carreira? Como montar meu site? Duração: 2hs.",
          time: "15h00"
        }
      },
      {
        name: "Tatiana Barros",
        photo: "themes/yellow-swan/img/taty-barros.jpg",
        bio: "Tatiana Barros, mãe e empreendedora. Criadora da Saga Pólen, iniciativa de temática ambiental que promove o desenvolvimento de habilidades multidisciplinares em crianças do ensino fundamental.",
        company: "Saga Pólen",
        // link: {
        //   href: "http://github.com/stevie",
        //   text: "@stevie"
        // },
        presentation: {
          title: "O que você vai ser quando você crescer?",
          description: "[Sala 1A] Apresentação focada nas escolhas profissionais com base no sistema de ensino atual. Sobre a raiz dos problemas do porque as mulheres não estão escolhendo a área de tecnologia. Como as meninas são preparadas e inspiradas e qual a disruptura no mercado quando ela cresce serão tópicos abordados. Duração: 30m.",
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