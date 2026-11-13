// Dados centrais do site. Textos aprovados em conteudo.md.

export const site = {
  name: 'Giovanna Cabral',
  fullName: 'Dra. Giovanna Cabral',
  oab: 'OAB/GO 66.313',
  phoneDisplay: '(62) 9 9480-2180',
  phoneShort: '(62) 99480-2180',
  phoneE164: '+5562994802180',
  email: 'adv.GiovannaCabral@gmail.com',
  hours: 'Todos os dias',
  city: 'Goiânia/GO',
  // Trocar por "Especialista em Direito e Processo do Trabalho" se a cliente confirmar o certificado (decisão A5).
  title: 'Pós-graduada em Direito e Processo do Trabalho',
  cna: 'https://cna.oab.org.br/',
  // Código do contêiner do Google Tag Manager (GTM-XXXXXXX). Vazio = nenhuma tag é carregada.
  gtmId: '',
};

// O script de origem troca "Vim pelo site e" por "Vim pelo Google e" quando a visita chega por um anúncio.
const greeting = 'Olá, Dra. Giovanna! Vim pelo site e';

export function whatsappLink(subject = 'gostaria de uma orientação sobre uma questão trabalhista.') {
  return `https://wa.me/${site.phoneE164.replace('+', '')}?text=${encodeURIComponent(`${greeting} ${subject}`)}`;
}

export function whatsappEmpresa(subject = 'Gostaria de falar sobre uma questão trabalhista.') {
  return whatsappLink(`represento uma empresa. ${subject}`);
}

export const telLink = `tel:${site.phoneE164}`;

// O que pedir na primeira mensagem, para a triagem ser rápida.
export const firstMessage = [
  'O que aconteceu',
  'Se você ainda trabalha na empresa ou quando o contrato terminou',
  'A cidade onde trabalhou',
  'Se era com carteira, sem registro ou como PJ',
];

export const firstMessageEmpresa = [
  'O nome da empresa e a cidade',
  'O que a empresa recebeu: notificação, citação ou proposta de acordo',
  'A data da audiência, se já houver',
];

export type AreaIconName =
  | 'receipt-text' | 'clock' | 'door-open' | 'gavel' | 'id-card'
  | 'shield-alert' | 'hard-hat' | 'piggy-bank' | 'triangle-alert' | 'baby';

export const areas: {
  slug: string; title: string; icon: AreaIconName; situation: string; text: string; message: string; href?: string;
}[] = [
  {
    slug: 'rescisao',
    title: 'Rescisão e verbas rescisórias',
    icon: 'receipt-text',
    situation: 'Fui demitido e acho que não recebi tudo.',
    text: 'Conferência de saldo de salário, aviso prévio, férias, 13º, multa do FGTS e prazos de pagamento.',
    href: '/trabalhista/rescisao/',
    message: 'tenho dúvidas sobre a minha rescisão.',
  },
  {
    slug: 'horas-extras',
    title: 'Horas extras',
    icon: 'clock',
    situation: 'Faço hora extra e não recebo.',
    text: 'Jornada além do contrato, intervalo de almoço reduzido, banco de horas e adicional noturno.',
    message: 'tenho dúvidas sobre horas extras.',
  },
  {
    slug: 'rescisao-indireta',
    title: 'Rescisão indireta',
    icon: 'door-open',
    situation: 'A empresa não cumpre o que deve e eu quero sair.',
    text: 'Quando a falta grave é do empregador, o trabalhador pode encerrar o contrato e ter direito às verbas da dispensa sem justa causa.',
    message: 'quero entender a rescisão indireta.',
  },
  {
    slug: 'carteira-nao-assinada',
    title: 'Carteira não assinada ou contrato PJ',
    icon: 'id-card',
    situation: 'Trabalho sem registro ou fui contratado como PJ.',
    text: 'Reconhecimento do vínculo de emprego quando havia rotina, subordinação e pagamento: FGTS, férias, 13º e INSS.',
    message: 'trabalhei sem carteira assinada ou como PJ.',
  },
  {
    slug: 'acidente',
    title: 'Acidente e doença do trabalho',
    icon: 'hard-hat',
    situation: 'Me acidentei ou adoeci por causa do trabalho.',
    text: 'Estabilidade, afastamento, emissão da CAT e responsabilidade do empregador.',
    message: 'sofri um acidente ou adoeci pelo trabalho.',
  },
  {
    slug: 'insalubridade',
    title: 'Insalubridade e periculosidade',
    icon: 'triangle-alert',
    situation: 'Trabalho exposto a risco ou a agentes nocivos.',
    text: 'Adicionais devidos por ambiente insalubre ou atividade perigosa.',
    message: 'tenho dúvidas sobre adicional de insalubridade ou periculosidade.',
  },
  {
    slug: 'gestante',
    title: 'Direitos da gestante',
    icon: 'baby',
    situation: 'Fui demitida grávida.',
    text: 'Estabilidade da gestante, licença-maternidade e garantias durante a gravidez.',
    message: 'fui demitida durante a gravidez.',
  },
  {
    slug: 'justa-causa',
    title: 'Justa causa',
    icon: 'gavel',
    situation: 'Fui demitido por justa causa e não concordo.',
    text: 'Análise do motivo, das provas e da forma como a justa causa foi aplicada.',
    message: 'fui demitido por justa causa.',
  },
  {
    slug: 'assedio',
    title: 'Assédio moral',
    icon: 'shield-alert',
    situation: 'Sou humilhado ou pressionado no trabalho.',
    text: 'Orientação sobre provas, direitos e caminhos diante de cobranças abusivas e humilhações.',
    message: 'preciso de orientação sobre assédio no trabalho.',
  },
  {
    slug: 'fgts',
    title: 'FGTS e seguro-desemprego',
    icon: 'piggy-bank',
    situation: 'Meu FGTS não foi depositado.',
    text: 'Conferência de depósitos, saque e acesso ao seguro-desemprego.',
    message: 'tenho dúvidas sobre FGTS.',
  },
];

export const stats = [
  { value: 'Pós-graduada', label: 'Em Direito do Trabalho' },
  { value: 'Todas', label: 'As fases e instâncias do processo' },
  { value: '100%', label: 'Online, de onde você estiver' },
  { value: 'Brasil', label: 'Atendimento em todo o país' },
];

export const timeline = [
  { year: '2020', text: 'Estágio em Direito do Trabalho' },
  { year: '2022', text: 'Início na advocacia' },
  { year: '2023', text: 'Advogada trabalhista plena, com formação de estagiários e advogados júnior' },
  { year: 'Hoje', text: 'Advocacia trabalhista independente, com atendimento online' },
];

export const education = [
  'Bacharel em Direito, PUC Goiás',
  'Pós-graduação em Direito do Trabalho e Processo do Trabalho',
  'Pós-graduação em Direito Penal e Processo Penal',
  'Pós-graduação em Ciências Jurídicas e Criminais',
];

export const steps = [
  { title: 'Você me chama no WhatsApp', text: 'Conte brevemente a sua situação. Ainda não precisa enviar documentos.' },
  { title: 'Conversamos sobre o caso', text: 'Por mensagem ou videochamada, entendo o que aconteceu e indico os documentos importantes.' },
  { title: 'Você recebe uma orientação clara', text: 'Explico os caminhos possíveis, sem "juridiquês", para você decidir com segurança.' },
  { title: 'Acompanhamento em cada etapa', text: 'Se decidir seguir, formalizamos o contrato digitalmente e eu mantenho você informado sobre o andamento.' },
];

export const differentials = [
  { title: 'Atendimento pessoal', text: 'Você fala diretamente comigo, do primeiro contato ao fim do processo.' },
  { title: 'Experiência em todas as instâncias', text: 'Atuação das audiências à sustentação oral nos tribunais.' },
  { title: 'Comunicação clara', text: 'Explicações simples e retorno sobre o andamento do seu caso.' },
  { title: 'Atendimento online', text: 'WhatsApp, videochamada e assinatura digital. A Justiça do Trabalho também é eletrônica.' },
];

export const faq: { q: string; a: string; link?: { href: string; label: string } }[] = [
  {
    q: 'Qual o prazo para entrar com um processo trabalhista?',
    a: 'Você tem até 2 anos depois do fim do contrato para entrar com a ação. Nela, é possível cobrar direitos dos últimos 5 anos, contados da data em que o processo é aberto. Por isso, quanto antes você buscar orientação, menos direitos correm o risco de prescrever.',
  },
  {
    q: 'Posso entrar com processo ainda trabalhando na empresa?',
    a: 'Sim, a lei permite. Antes de decidir, vale conversar sobre o momento certo e as alternativas para o seu caso.',
  },
  {
    q: 'O que é rescisão indireta?',
    a: 'É quando o empregador comete uma falta grave, como atrasar salários com frequência, deixar de depositar o FGTS ou tratar o empregado com rigor excessivo. Nesses casos, o trabalhador pode pedir o fim do contrato na Justiça e ter direito às mesmas verbas de uma demissão sem justa causa.',
  },
  {
    q: 'Fui demitido por justa causa. Posso contestar?',
    a: 'Sim. A justa causa é a punição mais grave do contrato de trabalho e precisa de motivo previsto em lei, provas e aplicação adequada. Se esses requisitos não foram cumpridos, ela pode ser questionada.',
  },
  {
    q: 'Trabalhei sem carteira assinada. Tenho direitos?',
    a: 'Se havia rotina de trabalho, subordinação e pagamento, é possível pedir o reconhecimento do vínculo de emprego. Com ele vêm direitos como FGTS, férias, 13º salário e contribuição ao INSS.',
  },
  {
    q: 'Quais documentos devo separar?',
    a: 'Os que você tiver: carteira de trabalho (inclusive a digital), contracheques, termo de rescisão, extrato do FGTS, registros de ponto, mensagens e e-mails de trabalho, atestados e contatos de possíveis testemunhas. Se não tiver algum deles, não se preocupe: conversamos sobre isso.',
  },
  {
    q: 'Como funciona o atendimento online?',
    a: 'A conversa acontece por WhatsApp ou videochamada. O contrato e a procuração são assinados digitalmente, e o processo trabalhista tramita de forma eletrônica.',
  },
  {
    q: 'Vou precisar ir a uma audiência presencial?',
    a: 'Depende da vara do trabalho. Muitas audiências acontecem por videoconferência, e outras são presenciais. Em todos os casos, eu explico antes como vai ser e acompanho você.',
  },
  {
    q: 'Como são definidos os honorários?',
    a: 'Os honorários são combinados em contrato depois da análise do seu caso, observando a tabela de honorários da OAB/GO.',
  },
  {
    q: 'Atende em todo o Brasil?',
    a: 'Sim. O atendimento é online e o processo trabalhista é eletrônico, então posso atender pessoas e empresas de qualquer cidade ou estado.',
  },
  {
    q: 'Sou servidor público. Você pode me ajudar?',
    a: 'Depende do vínculo. Servidores estatutários, contratados por concurso em regime próprio, não são atendidos pela Justiça do Trabalho, e eu não atuo nesses casos. Se você trabalha com carteira assinada para um órgão ou empresa pública, ou como terceirizado, posso analisar a sua situação.',
  },
  {
    q: 'Você atende empresas?',
    a: 'Sim. Também atuo na defesa de empresas em reclamações trabalhistas, audiências, acordos e pareceres.',
    link: { href: '/empresas/', label: 'Ver atendimento para empresas' },
  },
];

// Serviços para empresas: confirmar a lista com a cliente.
export const servicesEmpresa = [
  { title: 'Defesa em reclamações trabalhistas', text: 'Análise da reclamação, contestação e acompanhamento do processo em todas as fases.' },
  { title: 'Audiências', text: 'Preparação da empresa e do preposto e atuação na audiência, presencial ou por vídeo.' },
  { title: 'Acordos', text: 'Análise de propostas e negociação de acordos, judiciais ou antes do processo.' },
  { title: 'Pareceres e orientação', text: 'Orientação sobre rotinas trabalhistas, desligamentos e documentos, para decidir com segurança.' },
];
