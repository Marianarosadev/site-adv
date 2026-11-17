// Conteúdo das páginas de cada caso (/trabalhista/<slug>/), uma por card de "Como posso ajudar".
// Rescisão tem página própria (destino dos anúncios), em src/pages/trabalhista/rescisao.astro.
// Tom informativo, sem promessa de resultado: explico, confiro, entenda. Fotos da Unsplash (licença de uso livre).

import type { ImageMetadata } from 'astro';
import horasExtras from '../assets/casos/horas-extras.jpg';
import rescisaoIndireta from '../assets/casos/rescisao-indireta.jpg';
import carteira from '../assets/casos/carteira-nao-assinada.jpg';
import acidente from '../assets/casos/acidente-de-trabalho.jpg';
import insalubridade from '../assets/casos/insalubridade-e-periculosidade.jpg';
import gestante from '../assets/casos/direitos-da-gestante.jpg';
import justaCausa from '../assets/casos/justa-causa.jpg';
import assedio from '../assets/casos/assedio-moral.jpg';
import fgts from '../assets/casos/fgts-e-seguro-desemprego.jpg';

export interface Caso {
  slug: string;
  title: string;
  // Título da aba e do Google: tema e cidade na frente, até cerca de 60 caracteres.
  seoTitle: string;
  h1: [string, string];
  description: string;
  quote: string;
  intro: string;
  photo: { src: ImageMetadata; alt: string; credit: string };
  what: string[];
  when: string[];
  rights: { title: string; text: string }[];
  rightsTitle?: [string, string];
  proof: string[];
  deadlines: { value: string; text: string }[];
  faq: { q: string; a: string }[];
  message: string;
}

const prazoGeral = {
  value: '2 anos',
  text: 'É o prazo para entrar com a ação depois do fim do contrato. Nela, é possível cobrar os direitos dos últimos 5 anos (Constituição, art. 7º, XXIX).',
};

export const casos: Caso[] = [
  {
    slug: 'horas-extras',
    title: 'Horas extras',
    seoTitle: 'Advogada de Horas Extras em Goiânia',
    h1: ['Horas extras:', 'quando a jornada deve ser paga a mais.'],
    description: 'Entenda quando você tem direito a horas extras, intervalo e adicional noturno, como funciona o banco de horas e como comprovar a jornada. Atendimento online.',
    quote: 'Faço hora extra e não recebo.',
    intro: 'Explico como a sua jornada deveria ser paga, confiro o que aparece nos contracheques e mostro o que pode ser cobrado.',
    photo: { src: horasExtras, alt: 'Homem trabalhando até tarde em um escritório pouco iluminado', credit: 'Vitaly Gariev' },
    what: [
      'A jornada padrão é de até 8 horas por dia e 44 horas por semana (Constituição, art. 7º, XIII). O que passa desse limite, ou do limite menor previsto no seu contrato ou na convenção da sua categoria, é hora extra.',
      'A hora extra deve ser paga com um adicional de, no mínimo, 50% sobre a hora normal. Quem faz horas extras com frequência também tem reflexos dessas horas em férias, 13º salário, FGTS e descanso semanal remunerado.',
    ],
    when: [
      'Você chega antes ou sai depois do horário e esse tempo não é pago',
      'O intervalo de almoço é menor que 1 hora em jornadas acima de 6 horas',
      'Você trabalha em domingos ou feriados sem folga compensatória',
      'Trabalha entre 22h e 5h sem receber adicional noturno',
      'O banco de horas não é compensado no prazo',
      'Recebe mensagens e tarefas de trabalho fora do expediente',
    ],
    rights: [
      { title: 'Adicional de 50%', text: 'No mínimo, sobre cada hora além da jornada. A convenção da categoria pode prever percentual maior.' },
      { title: 'Intervalo suprimido', text: 'O tempo de almoço não concedido é pago com adicional de 50% (CLT, art. 71, §4º).' },
      { title: 'Adicional noturno', text: '20% entre 22h e 5h, com a hora noturna contada como 52 minutos e 30 segundos (CLT, art. 73).' },
      { title: 'Domingos e feriados', text: 'Trabalhados sem folga compensatória são pagos em dobro.' },
      { title: 'Intervalo entre jornadas', text: 'São 11 horas de descanso entre um dia e outro (CLT, art. 66). O tempo que faltar é pago como extra.' },
      { title: 'Reflexos', text: 'As horas extras habituais refletem em férias, 13º, FGTS, aviso prévio e descanso semanal.' },
    ],
    proof: [
      'Cartões ou registros de ponto (empresas com mais de 20 empregados devem manter controle)',
      'Mensagens, e-mails e registros de acesso a sistemas fora do horário',
      'Escalas de trabalho e relatórios de atividades',
      'Testemunhas que trabalharam com você',
    ],
    deadlines: [
      prazoGeral,
      { value: '6 meses', text: 'É o prazo máximo para compensar o banco de horas feito por acordo individual. Por acordo coletivo, pode chegar a 1 ano. O que não for compensado deve ser pago como extra.' },
    ],
    faq: [
      { q: 'Cargo de confiança tem direito a hora extra?', a: 'Quem exerce cargo de gestão com poderes reais e recebe gratificação de pelo menos 40% sobre o salário pode ficar fora do controle de jornada (CLT, art. 62). Se o cargo é só no nome, sem esses requisitos, as horas extras podem ser devidas.' },
      { q: 'Trabalho em home office. Tenho direito?', a: 'Depende de como o trabalho é organizado. Se a jornada é controlada, com horário, login ou metas por período, as horas extras podem ser cobradas.' },
      { q: 'A empresa pode me obrigar a fazer hora extra?', a: 'Em regra, as horas extras dependem de acordo e são limitadas a 2 por dia. Exigir mais do que isso de forma habitual pode ser questionado.' },
    ],
    message: 'tenho dúvidas sobre horas extras.',
  },
  {
    slug: 'rescisao-indireta',
    title: 'Rescisão indireta',
    seoTitle: 'Advogada de Rescisão Indireta em Goiânia',
    h1: ['Rescisão indireta:', 'quando a falta grave é da empresa.'],
    description: 'Entenda quando o trabalhador pode encerrar o contrato por falta grave do empregador e receber como em uma dispensa sem justa causa. Atendimento online.',
    quote: 'A empresa não cumpre o que deve e eu quero sair.',
    intro: 'Analiso se a situação que você vive se encaixa na lei, quais provas reunir e qual é o momento certo para pedir o fim do contrato.',
    photo: { src: rescisaoIndireta, alt: 'Homem frustrado com a mão na cabeça diante do notebook', credit: 'Vitaly Gariev' },
    what: [
      'A rescisão indireta é a "justa causa do empregador" (CLT, art. 483). Quando a empresa comete uma falta grave, o trabalhador pode pedir o fim do contrato na Justiça do Trabalho.',
      'Reconhecida a rescisão indireta, o trabalhador recebe as mesmas verbas de uma dispensa sem justa causa, em vez de sair como se tivesse pedido demissão.',
    ],
    when: [
      'Salários atrasados com frequência',
      'FGTS sem depósito por vários meses',
      'Humilhações, xingamentos ou tratamento com rigor excessivo',
      'Exigência de tarefas proibidas por lei ou fora do contrato',
      'Redução de salário ou de função sem amparo legal',
      'Exposição a perigo sem os equipamentos de proteção',
    ],
    rights: [
      { title: 'Aviso prévio', text: 'Indenizado, com 30 dias mais 3 dias por ano completo de empresa.' },
      { title: 'Férias + 1/3', text: 'Vencidas e proporcionais, com o adicional de um terço.' },
      { title: '13º proporcional', text: 'Pelos meses trabalhados no ano.' },
      { title: 'Multa de 40% do FGTS', text: 'Sobre todos os depósitos do contrato, além do saque do saldo.' },
      { title: 'Seguro-desemprego', text: 'Se você cumprir os requisitos de tempo de trabalho.' },
      { title: 'Outras diferenças', text: 'O que ficou para trás no contrato, como salários atrasados e depósitos de FGTS.' },
    ],
    proof: [
      'Extrato do FGTS mostrando os meses sem depósito',
      'Comprovantes de pagamento com atraso',
      'Mensagens, e-mails e áudios sobre a situação',
      'Testemunhas que presenciaram os fatos',
    ],
    deadlines: [
      { value: 'Agora', text: 'Demorar muito para reagir pode enfraquecer o pedido: a falta precisa ser atual. Em atraso de salários e falta de FGTS, você pode continuar trabalhando enquanto o processo corre (CLT, art. 483, §3º).' },
      prazoGeral,
    ],
    faq: [
      { q: 'Preciso sair da empresa antes de entrar com a ação?', a: 'Depende da falta. Em alguns casos, como atraso de salários e falta de depósito do FGTS, é possível continuar trabalhando durante o processo. Em outros, a permanência pode ser inviável. Essa decisão deve ser tomada com orientação.' },
      { q: 'E se a Justiça não reconhecer a rescisão indireta?', a: 'O fim do contrato pode ser tratado como pedido de demissão. Por isso, é importante reunir provas antes e avaliar os riscos de cada caminho.' },
      { q: 'Posso pedir rescisão indireta por assédio moral?', a: 'Sim. Tratamento humilhante ou com rigor excessivo está entre as faltas graves do empregador previstas na lei.' },
    ],
    message: 'quero entender a rescisão indireta.',
  },
  {
    slug: 'carteira-nao-assinada',
    title: 'Carteira não assinada ou contrato PJ',
    seoTitle: 'Carteira Não Assinada e PJ em Goiânia',
    h1: ['Carteira não assinada ou PJ:', 'quando existe vínculo de emprego.'],
    description: 'Trabalha sem registro ou foi contratado como PJ, mas tem chefe e horário? Entenda os requisitos do vínculo de emprego e os direitos que vêm com ele.',
    quote: 'Trabalho sem registro ou fui contratado como PJ.',
    intro: 'Analiso como era a sua rotina de trabalho e explico se ela caracteriza um emprego, com os direitos de quem tem carteira assinada.',
    photo: { src: carteira, alt: 'Entregador em uma scooter circulando pela cidade à noite', credit: 'Rowan Freeman' },
    what: [
      'Na Justiça do Trabalho vale o que acontece na prática, e não o nome do contrato. Se a sua rotina é de empregado, o vínculo pode ser reconhecido mesmo sem carteira assinada ou com contrato de prestação de serviços como PJ.',
      'Com o reconhecimento, a carteira é anotada e você passa a ter os direitos de todo o período trabalhado.',
    ],
    when: [
      'Você trabalha pessoalmente, sem poder mandar outra pessoa no seu lugar',
      'O trabalho é contínuo, não eventual',
      'Recebe pagamento fixo ou regular pelo serviço',
      'Cumpre horário, recebe ordens e presta contas a um chefe',
      'Emite notas fiscais sempre para a mesma empresa',
      'Usa crachá, e-mail corporativo ou uniforme da empresa',
    ],
    rights: [
      { title: 'Anotação na carteira', text: 'Registro do contrato com a data real de início e o salário pago.' },
      { title: 'FGTS', text: 'Depósitos de 8% do salário por todo o período.' },
      { title: 'Férias + 1/3', text: 'Os períodos não usufruídos ou não pagos.' },
      { title: '13º salário', text: 'De todos os anos trabalhados.' },
      { title: 'INSS', text: 'Recolhimento das contribuições, que contam para a sua aposentadoria.' },
      { title: 'Verbas da rescisão', text: 'Se o contrato terminou, as verbas de acordo com a forma da saída.' },
    ],
    proof: [
      'Mensagens com ordens, cobranças e controle de horário',
      'Escalas, crachás, e-mail corporativo e acesso a sistemas',
      'Comprovantes de pagamento ou notas fiscais emitidas para a empresa',
      'Testemunhas que trabalharam com você',
    ],
    deadlines: [
      prazoGeral,
      { value: '5 anos', text: 'É o período anterior à ação que pode ser cobrado. Quanto mais tempo passa depois do fim do contrato, mais meses ficam para trás.' },
    ],
    faq: [
      { q: 'Abri um MEI a pedido da empresa. Ainda posso ter vínculo?', a: 'Sim. Ter MEI ou CNPJ não impede o reconhecimento do vínculo quando a rotina tinha pessoalidade, habitualidade, pagamento e subordinação.' },
      { q: 'Trabalho por aplicativo. Tenho vínculo?', a: 'É um tema ainda em discussão nos tribunais, e cada caso depende de como o trabalho era controlado. Vale analisar a sua situação concreta.' },
      { q: 'Ainda trabalho na empresa. Posso pedir o registro?', a: 'Sim, a ação pode ser proposta durante o contrato. Antes, vale conversar sobre o momento e as consequências.' },
    ],
    message: 'trabalhei sem carteira assinada ou como PJ.',
  },
  {
    slug: 'acidente-de-trabalho',
    title: 'Acidente e doença do trabalho',
    seoTitle: 'Advogada de Acidente de Trabalho em Goiânia',
    h1: ['Acidente e doença do trabalho:', 'estabilidade e indenização.'],
    description: 'Sofreu um acidente ou adoeceu por causa do trabalho? Entenda a CAT, o afastamento, a estabilidade de 12 meses e quando há indenização. Atendimento online.',
    quote: 'Me acidentei ou adoeci por causa do trabalho.',
    intro: 'Explico os seus direitos no trabalho e no INSS, confiro se a empresa cumpriu as obrigações e analiso se cabe indenização.',
    photo: { src: acidente, alt: 'Trabalhadores com capacetes de segurança em uma obra', credit: 'Mufid Majnun' },
    what: [
      'Acidente de trabalho é o que acontece durante o serviço ou por causa dele (Lei 8.213/91, art. 19). A lei equipara a ele as doenças causadas ou agravadas pelo trabalho, como LER/DORT, problemas de coluna e transtornos ligados ao ambiente de trabalho (art. 20).',
      'Além dos benefícios do INSS, o trabalhador pode ter direito à estabilidade no emprego e, quando a empresa tem responsabilidade, a indenização.',
    ],
    when: [
      'Você se machucou durante o trabalho ou a serviço da empresa',
      'Desenvolveu uma doença ligada às tarefas ou ao ambiente de trabalho',
      'A empresa não emitiu a CAT (Comunicação de Acidente de Trabalho)',
      'Ficou afastado por mais de 15 dias',
      'Foi demitido logo depois de voltar do afastamento',
      'Ficou com sequela ou redução da capacidade de trabalho',
    ],
    rights: [
      { title: 'Emissão da CAT', text: 'A empresa deve comunicar o acidente. Se não fizer, o próprio trabalhador, a família, o sindicato ou o médico podem emitir.' },
      { title: 'Auxílio do INSS', text: 'Afastamentos acima de 15 dias são pagos pelo INSS, com benefício acidentário quando há relação com o trabalho.' },
      { title: 'Estabilidade de 12 meses', text: 'Depois do fim do auxílio acidentário, o emprego é garantido por 12 meses (Lei 8.213/91, art. 118).' },
      { title: 'FGTS no afastamento', text: 'No afastamento por acidente, a empresa continua depositando o FGTS.' },
      { title: 'Indenizações', text: 'Danos morais, materiais e estéticos quando a empresa tem culpa ou a atividade é de risco.' },
      { title: 'Pensão', text: 'Quando há redução permanente da capacidade de trabalho.' },
    ],
    proof: [
      'CAT, atestados, laudos e exames médicos',
      'Documentos do INSS sobre o afastamento',
      'Fotos do local e dos equipamentos, se houver',
      'Testemunhas do acidente ou das condições de trabalho',
    ],
    deadlines: [
      { value: '12 meses', text: 'É a estabilidade depois do fim do auxílio acidentário. Se você foi demitido nesse período, pode ter direito à reintegração ou a uma indenização equivalente.' },
      prazoGeral,
    ],
    faq: [
      { q: 'Acidente no caminho para o trabalho conta?', a: 'Para o INSS, o acidente no trajeto entre casa e trabalho é equiparado a acidente de trabalho. Os efeitos na relação com a empresa dependem do caso.' },
      { q: 'Descobri a doença depois de ser demitido. Ainda tenho direito?', a: 'Pode ter. Se a doença tem relação com o trabalho que você fazia, a estabilidade e a indenização podem ser reconhecidas mesmo depois da dispensa.' },
      { q: 'Você também cuida da parte do INSS?', a: 'Sim. Oriento sobre o benefício e o caminho no INSS junto com a parte trabalhista.' },
    ],
    message: 'sofri um acidente ou adoeci pelo trabalho.',
  },
  {
    slug: 'insalubridade-e-periculosidade',
    title: 'Insalubridade e periculosidade',
    seoTitle: 'Insalubridade e Periculosidade em Goiânia',
    h1: ['Insalubridade e periculosidade:', 'adicionais pelo risco do trabalho.'],
    description: 'Trabalha exposto a ruído, produtos químicos, calor, eletricidade ou inflamáveis? Entenda os adicionais de insalubridade e periculosidade e como são calculados.',
    quote: 'Trabalho exposto a risco ou a agentes nocivos.',
    intro: 'Explico qual adicional se aplica à sua atividade, como ele é calculado e como funciona a perícia que comprova a exposição.',
    photo: { src: insalubridade, alt: 'Trabalhador com capacete e luvas operando uma ferramenta que solta faíscas', credit: 'mostafa mahmoudi' },
    what: [
      'A insalubridade é o trabalho exposto a agentes que prejudicam a saúde, como ruído, calor, poeira, produtos químicos e agentes biológicos, acima dos limites da Norma Regulamentadora 15.',
      'A periculosidade é o trabalho com risco acentuado de vida: inflamáveis, explosivos, energia elétrica, segurança patrimonial e atividade com motocicleta (CLT, art. 193).',
    ],
    when: [
      'Você trabalha com ruído alto, calor intenso ou poeira',
      'Manipula produtos químicos, combustíveis ou agentes biológicos',
      'Trabalha em hospitais, clínicas ou coleta de lixo',
      'Atua com eletricidade ou em áreas com inflamáveis',
      'Trabalha como vigilante ou com motocicleta',
      'Os equipamentos de proteção não são fornecidos ou não eliminam o risco',
    ],
    rightsTitle: ['Os adicionais', 'previstos na lei.'],
    rights: [
      { title: 'Insalubridade grau mínimo', text: '10%, calculados, em regra, sobre o salário mínimo.' },
      { title: 'Insalubridade grau médio', text: '20%, conforme o agente e o nível de exposição.' },
      { title: 'Insalubridade grau máximo', text: '40%, nos casos de exposição mais grave.' },
      { title: 'Periculosidade', text: '30% sobre o salário-base, sem os acréscimos de gratificações e prêmios.' },
      { title: 'Reflexos', text: 'O adicional pago com habitualidade reflete em férias, 13º, FGTS e horas extras.' },
      { title: 'Um ou outro', text: 'Quando há os dois riscos, o trabalhador escolhe o adicional mais vantajoso.' },
    ],
    proof: [
      'Perícia técnica, feita por engenheiro ou médico do trabalho no processo (CLT, art. 195)',
      'Fichas de entrega de equipamentos de proteção (EPI)',
      'Laudos da empresa, como PPRA/PGR e LTCAT, e o PPP',
      'Fotos do ambiente e descrição das tarefas',
    ],
    deadlines: [
      prazoGeral,
      { value: 'Perícia', text: 'No processo, a exposição é comprovada por perícia no local de trabalho. Se a empresa fechou ou o ambiente mudou, outros meios de prova podem ser usados.' },
    ],
    faq: [
      { q: 'Recebi EPI. Perco o adicional?', a: 'Só se o equipamento eliminar o risco de fato. Fornecer o EPI não basta: ele precisa ser adequado, trocado e usado. Isso é verificado na perícia.' },
      { q: 'O adicional entra na aposentadoria?', a: 'A exposição a agentes nocivos pode contar para a aposentadoria especial no INSS, com regras próprias. O PPP é o documento principal para isso.' },
      { q: 'Trabalhei com moto. Tenho periculosidade?', a: 'A atividade com motocicleta está prevista como perigosa (CLT, art. 193, §4º), com as exceções da regulamentação. Vale analisar como era o seu trabalho.' },
    ],
    message: 'tenho dúvidas sobre adicional de insalubridade ou periculosidade.',
  },
  {
    slug: 'direitos-da-gestante',
    title: 'Direitos da gestante',
    seoTitle: 'Gestante Demitida: Advogada em Goiânia',
    h1: ['Direitos da gestante:', 'estabilidade e licença-maternidade.'],
    description: 'Foi demitida grávida? Entenda a estabilidade da gestante, a licença-maternidade e as garantias durante a gravidez. Atendimento online e pessoal.',
    quote: 'Fui demitida grávida.',
    intro: 'Explico as garantias que a lei dá à gestante, confiro se foram respeitadas e mostro os caminhos se você foi dispensada.',
    photo: { src: gestante, alt: 'Mulher grávida com as mãos sobre a barriga', credit: 'freestocks' },
    what: [
      'A gestante tem estabilidade no emprego desde a confirmação da gravidez até 5 meses depois do parto (ADCT, art. 10, II, "b"). Nesse período, ela não pode ser dispensada sem justa causa.',
      'A garantia vale mesmo que a empresa não soubesse da gravidez no momento da dispensa, e também quando a gravidez é confirmada durante o aviso prévio (CLT, art. 391-A).',
    ],
    when: [
      'Você foi demitida grávida, sem justa causa',
      'Descobriu a gravidez depois da dispensa, mas ela já existia antes',
      'A gravidez foi confirmada durante o aviso prévio',
      'Foi pressionada a pedir demissão durante a gravidez',
      'A empresa negou dispensas para consultas e exames',
      'Não teve a licença-maternidade respeitada',
    ],
    rights: [
      { title: 'Estabilidade', text: 'Da confirmação da gravidez até 5 meses após o parto.' },
      { title: 'Reintegração ou indenização', text: 'Se foi dispensada, a volta ao emprego ou o pagamento dos salários e direitos do período.' },
      { title: 'Licença-maternidade', text: '120 dias, sem prejuízo do salário. Em empresas do Programa Empresa Cidadã, 180 dias.' },
      { title: 'Consultas e exames', text: 'Dispensa do trabalho para, no mínimo, 6 consultas e exames (CLT, art. 392, §4º).' },
      { title: 'Mudança de função', text: 'Quando a saúde exigir, com retorno à função anterior depois.' },
      { title: 'Amamentação', text: 'Dois descansos de meia hora por dia até o bebê completar 6 meses (CLT, art. 396).' },
    ],
    proof: [
      'Exames e ultrassons com a data da gravidez',
      'Termo de rescisão e comunicado de dispensa',
      'Mensagens com a empresa sobre a gravidez ou a dispensa',
      'Atestados de consultas e pré-natal',
    ],
    deadlines: [
      { value: '5 meses', text: 'Depois do parto termina a estabilidade. Buscar orientação ainda durante a gravidez aumenta as chances de reintegração, em vez de apenas indenização.' },
      prazoGeral,
    ],
    faq: [
      { q: 'A empresa não sabia que eu estava grávida. Ainda tenho estabilidade?', a: 'Sim. O que importa é que a gravidez já existisse na data da dispensa, mesmo que nem você soubesse.' },
      { q: 'Pedi demissão grávida. Posso voltar atrás?', a: 'O pedido de demissão da gestante pode ser questionado, principalmente se houve pressão. Cada caso precisa ser analisado.' },
      { q: 'Prefiro não voltar para a empresa. Tenho direito a quê?', a: 'Nesses casos, costuma-se discutir a indenização do período de estabilidade, com salários, férias, 13º e FGTS correspondentes.' },
    ],
    message: 'fui demitida durante a gravidez.',
  },
  {
    slug: 'justa-causa',
    title: 'Justa causa',
    seoTitle: 'Reverter Justa Causa: Advogada em Goiânia',
    h1: ['Justa causa:', 'quando ela pode ser questionada.'],
    description: 'Foi demitido por justa causa e não concorda? Entenda os motivos previstos na lei, os requisitos para aplicar a justa causa e o que muda se ela for revertida.',
    quote: 'Fui demitido por justa causa e não concordo.',
    intro: 'Analiso o motivo alegado, as provas e a forma como a punição foi aplicada, e explico se a justa causa pode ser questionada.',
    photo: { src: justaCausa, alt: 'Duas mulheres em uma conversa séria em uma mesa de escritório', credit: 'Amy Hirschi' },
    what: [
      'A justa causa é a punição mais grave do contrato de trabalho. Ela só pode ser aplicada pelos motivos listados na lei (CLT, art. 482), como desídia, insubordinação, abandono de emprego e improbidade.',
      'Além do motivo, a empresa precisa provar o fato e aplicar a punição de forma imediata e proporcional. Sem esses requisitos, a justa causa pode ser revertida.',
    ],
    when: [
      'O motivo alegado não aconteceu ou não foi provado',
      'A punição foi desproporcional ao que aconteceu',
      'A empresa demorou para punir depois de saber do fato',
      'Você foi punido duas vezes pelo mesmo fato',
      'Outros colegas fizeram o mesmo e não foram punidos',
      'Faltas por doença foram tratadas como abandono',
    ],
    rightsTitle: ['O que muda', 'se ela for revertida.'],
    rights: [
      { title: 'Aviso prévio', text: 'Indenizado, que não é pago na justa causa.' },
      { title: 'Férias proporcionais + 1/3', text: 'Perdidas na justa causa e devidas na dispensa sem justa causa.' },
      { title: '13º proporcional', text: 'Pelos meses trabalhados no ano.' },
      { title: 'Multa de 40% do FGTS', text: 'E a liberação do saque do saldo.' },
      { title: 'Seguro-desemprego', text: 'Se você cumprir os requisitos de tempo de trabalho.' },
      { title: 'Danos morais', text: 'Em alguns casos, como acusações graves sem prova, pode haver indenização.' },
    ],
    proof: [
      'Carta ou comunicado de dispensa com o motivo',
      'Advertências e suspensões anteriores, se houver',
      'Atestados médicos e justificativas de faltas',
      'Mensagens e testemunhas sobre o que aconteceu',
    ],
    deadlines: [
      prazoGeral,
      { value: 'Na saída', text: 'Na justa causa você recebe apenas saldo de salário e férias vencidas com 1/3. Por isso vale conferir logo o motivo e as provas.' },
    ],
    faq: [
      { q: 'A empresa precisa me advertir antes da justa causa?', a: 'Nem sempre. Faltas muito graves podem levar à justa causa direta. Mas, para faltas menores, a ausência de advertências e suspensões anteriores pesa contra a proporcionalidade da punição.' },
      { q: 'O que é abandono de emprego?', a: 'São faltas injustificadas por um período longo, em geral 30 dias, com a intenção de não voltar. Faltas por doença ou com justificativa não configuram abandono.' },
      { q: 'Assinei a carta de justa causa. Isso me impede de questionar?', a: 'Não. A assinatura indica que você recebeu o comunicado, não que concorda com o motivo.' },
    ],
    message: 'fui demitido por justa causa.',
  },
  {
    slug: 'assedio-moral',
    title: 'Assédio moral',
    seoTitle: 'Advogada de Assédio Moral em Goiânia',
    h1: ['Assédio moral no trabalho:', 'como reconhecer e agir.'],
    description: 'É humilhado, isolado ou pressionado de forma abusiva no trabalho? Entenda o que é assédio moral, como reunir provas e quais caminhos a lei oferece.',
    quote: 'Sou humilhado ou pressionado no trabalho.',
    intro: 'Escuto o que está acontecendo, explico se configura assédio e oriento sobre como reunir provas com segurança.',
    photo: { src: assedio, alt: 'Mulher abatida com a cabeça apoiada na mão, sentada à mesa de trabalho', credit: 'Vitaly Gariev' },
    what: [
      'Assédio moral é a exposição repetida a situações humilhantes e constrangedoras no trabalho, que atingem a dignidade e a saúde do trabalhador. Pode vir de chefes, colegas ou da própria organização do trabalho.',
      'Além do dano à pessoa, o assédio pode justificar a rescisão indireta do contrato e o pedido de indenização por danos morais (CLT, arts. 223-A a 223-G).',
    ],
    when: [
      'Xingamentos, gritos ou humilhações na frente de colegas',
      'Isolamento, exclusão de reuniões ou retirada de tarefas',
      'Cobranças de metas com exposição ou ameaças',
      'Piadas e comentários ofensivos repetidos',
      'Controle abusivo, como restrição a idas ao banheiro',
      'Adoecimento emocional ligado ao ambiente de trabalho',
    ],
    rights: [
      { title: 'Indenização por danos morais', text: 'Fixada conforme a gravidade da ofensa e as circunstâncias do caso.' },
      { title: 'Rescisão indireta', text: 'O assédio é falta grave do empregador e permite pedir o fim do contrato com as verbas da dispensa sem justa causa.' },
      { title: 'Afastamento e INSS', text: 'Se o assédio causou adoecimento, o caso pode ser tratado como doença do trabalho.' },
      { title: 'Canal de denúncia', text: 'Empresas com CIPA devem ter regras e canais de denúncia de assédio (Lei 14.457/2022).' },
    ],
    proof: [
      'Mensagens, e-mails e prints de conversas',
      'Gravações de conversas das quais você participou',
      'Testemunhas que presenciaram os episódios',
      'Atestados e relatórios médicos ou psicológicos',
    ],
    deadlines: [
      prazoGeral,
      { value: 'Registre', text: 'Anote datas, horários, o que foi dito e quem estava presente. Registros feitos na época dão mais força às provas.' },
    ],
    faq: [
      { q: 'Uma única discussão já é assédio moral?', a: 'Em geral, o assédio se caracteriza pela repetição. Um episódio isolado e grave pode gerar dano moral, mas é analisado de forma diferente.' },
      { q: 'Posso gravar o meu chefe?', a: 'A gravação de uma conversa da qual você participa costuma ser aceita como prova na Justiça do Trabalho. Divulgar a gravação fora do processo é outra questão e deve ser evitado.' },
      { q: 'Preciso sair da empresa para agir?', a: 'Não necessariamente. É possível buscar orientação, usar canais internos e, se for o caso, pedir a rescisão indireta. Cada caminho tem riscos que vale avaliar.' },
    ],
    message: 'preciso de orientação sobre assédio no trabalho.',
  },
  {
    slug: 'fgts-e-seguro-desemprego',
    title: 'FGTS e seguro-desemprego',
    seoTitle: 'FGTS e Seguro-Desemprego em Goiânia',
    h1: ['FGTS e seguro-desemprego:', 'como conferir e cobrar.'],
    description: 'Seu FGTS não foi depositado ou o seguro-desemprego foi negado? Entenda como conferir os depósitos, a multa de 40% e os requisitos do seguro-desemprego.',
    quote: 'Meu FGTS não foi depositado.',
    intro: 'Confiro o seu extrato mês a mês, explico o que a empresa deveria ter depositado e quais são os caminhos para cobrar.',
    photo: { src: fgts, alt: 'Calculadora, caneta e notas de dinheiro sobre uma mesa', credit: 'Sasun Bughdaryan' },
    what: [
      'Todo mês, a empresa deve depositar na conta do FGTS o valor de 8% do salário do empregado (Lei 8.036/90, art. 15). Esse dinheiro é do trabalhador e pode ser sacado em situações como a dispensa sem justa causa.',
      'O seguro-desemprego é um benefício pago a quem é dispensado sem justa causa e cumpre os requisitos de tempo de trabalho.',
    ],
    when: [
      'O extrato do FGTS tem meses sem depósito',
      'Os depósitos são menores do que 8% do salário',
      'Você foi dispensado e não recebeu a multa de 40%',
      'A empresa não liberou o saque do FGTS',
      'Não recebeu as guias do seguro-desemprego',
      'O seguro-desemprego foi negado por erro da empresa',
    ],
    rights: [
      { title: 'Depósitos de 8%', text: 'Sobre o salário e também sobre horas extras, adicionais, férias e 13º.' },
      { title: 'Multa de 40%', text: 'Na dispensa sem justa causa e na rescisão indireta, sobre todos os depósitos do contrato.' },
      { title: 'Multa de 20%', text: 'No acordo de demissão (CLT, art. 484-A), com saque de até 80% do saldo.' },
      { title: 'Seguro-desemprego', text: 'De 3 a 5 parcelas, conforme o tempo trabalhado e o número de pedidos anteriores.' },
      { title: 'Indenização do seguro', text: 'Se você perdeu o benefício por falha da empresa, o valor pode ser cobrado dela.' },
    ],
    proof: [
      'Extrato do FGTS (app FGTS ou agência da Caixa)',
      'Contracheques do período',
      'Termo de rescisão e comunicado de dispensa',
      'Protocolo ou negativa do seguro-desemprego',
    ],
    deadlines: [
      { value: '7 a 120 dias', text: 'É o prazo para pedir o seguro-desemprego, contado da data da dispensa. Para o primeiro pedido, é preciso ter trabalhado pelo menos 12 meses nos últimos 18.' },
      { value: '5 anos', text: 'É o período de depósitos de FGTS que pode ser cobrado, desde que a ação seja proposta em até 2 anos depois do fim do contrato.' },
    ],
    faq: [
      { q: 'Como consulto o meu FGTS?', a: 'Pelo aplicativo FGTS, da Caixa, com login gov.br. O extrato mostra cada depósito mês a mês, e você pode comparar com os seus contracheques.' },
      { q: 'A empresa não deposita o FGTS. Posso fazer algo ainda trabalhando lá?', a: 'Sim. É possível cobrar os depósitos e, se a falta for repetida, pedir a rescisão indireta do contrato.' },
      { q: 'Pedi demissão. Tenho direito ao seguro-desemprego?', a: 'Não. O seguro-desemprego é para quem foi dispensado sem justa causa, inclusive por rescisão indireta.' },
    ],
    message: 'tenho dúvidas sobre FGTS.',
  },
];

export const casoUrl = (slug: string) => `/trabalhista/${slug}/`;
