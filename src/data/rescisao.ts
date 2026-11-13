// Conteúdo da página /trabalhista/rescisao/ (destino do Grupo 2 dos anúncios).
// Cada bloco repete o que os anúncios 2A e 2B prometem. Tom informativo: confiro, explico, entenda.

export const situations = [
  'Recebi menos do que esperava',
  'A empresa atrasou o pagamento',
  'Não recebi a multa do FGTS',
  'Não sei se o cálculo está certo',
];

export const checks = [
  { title: 'Saldo de salário', text: 'Os dias trabalhados no mês da saída.' },
  { title: 'Aviso prévio', text: 'Trabalhado ou indenizado, com 3 dias a mais por ano completo de empresa.' },
  { title: 'Férias + 1/3', text: 'Férias vencidas e proporcionais, sempre com o adicional de um terço.' },
  { title: '13º proporcional', text: 'Os meses trabalhados no ano da saída.' },
  { title: 'Multa de 40% do FGTS', text: 'Na dispensa sem justa causa, e a conferência dos depósitos do contrato.' },
  { title: 'Guias e documentos', text: 'Seguro-desemprego, saque do FGTS e baixa na carteira.' },
];

export const documents = [
  'Termo de rescisão (TRCT)',
  'Extrato do FGTS',
  'Contracheques',
  'Carteira de trabalho, inclusive a digital',
];

export const rescisaoFaq = [
  {
    q: 'O que entra na rescisão?',
    a: 'Depende do tipo de saída. Na dispensa sem justa causa entram o saldo de salário, o aviso prévio, as férias vencidas e proporcionais com 1/3, o 13º proporcional, a multa de 40% sobre o FGTS, o saque do FGTS e as guias do seguro-desemprego, se você tiver direito.',
  },
  {
    q: 'Qual o prazo para a empresa pagar a rescisão?',
    a: 'Até 10 dias depois do fim do contrato, para pagar os valores e entregar os documentos da rescisão (CLT, art. 477, §6º). Se o pagamento atrasar, a lei prevê multa no valor de um salário a favor do trabalhador (art. 477, §8º).',
  },
  {
    q: 'Pedi demissão. Tenho direito a quê?',
    a: 'Ao saldo de salário, às férias vencidas e proporcionais com 1/3 e ao 13º proporcional. No pedido de demissão não há multa de 40% do FGTS, saque do FGTS nem seguro-desemprego, e o aviso prévio deve ser cumprido ou pode ser descontado.',
  },
  {
    q: 'O que é o acordo de demissão?',
    a: 'É a saída combinada entre empregado e empresa (CLT, art. 484-A). O aviso prévio indenizado e a multa do FGTS são pagos pela metade, é possível sacar até 80% do FGTS e não há seguro-desemprego. As demais verbas são pagas integralmente.',
  },
  {
    q: 'Até quando posso questionar a minha rescisão?',
    a: 'Você tem até 2 anos depois do fim do contrato para entrar com a ação trabalhista e pode cobrar os direitos dos últimos 5 anos (Constituição, art. 7º, XXIX).',
  },
];
