export const SITE_URL = "https://eletrocobre-connect.lovable.app";
export const WHATSAPP_NUMBER = "5511999999999";

export type ProductSegment = "residencial" | "industrial" | "solar" | "maquinas";

export type Product = {
  id: string;
  name: string;
  slug: string;
  voltage: string;
  application: ProductSegment;
  type: string;
  gauge: string;
  category: string;
  summary: string;
  benefits: string[];
  specs: string[];
};

export const navItems = [
  { label: "Produtos", to: "/produtos" as const },
  { label: "Segmentos", to: "/segmentos" as const },
  { label: "Como escolher", to: "/como-escolher" as const },
  { label: "Orçamento", to: "/orcamento" as const },
  { label: "Sobre", to: "/sobre" as const },
];

export const trustPillars = [
  {
    title: "Qualidade garantida",
    description: "Cabos e fios para obras, indústrias e instalações que exigem padrão técnico confiável.",
  },
  {
    title: "Entrega rápida",
    description: "Atendimento para todo o Brasil com foco em agilidade comercial e previsibilidade de prazo.",
  },
  {
    title: "Suporte técnico",
    description: "Orientação consultiva para especificar o material certo e evitar compra errada.",
  },
];

export const categoryHighlights = [
  {
    title: "Cabos residenciais",
    description: "Soluções para instalações prediais, reformas e obras com foco em segurança e produtividade.",
    audience: "Construtoras, eletricistas e revendas",
  },
  {
    title: "Cabos industriais",
    description: "Linhas para ambientes de maior exigência, alimentação de painéis e operação contínua.",
    audience: "Indústrias e integradores",
  },
  {
    title: "Energia solar",
    description: "Cabos preparados para projetos fotovoltaicos com resistência, durabilidade e confiabilidade.",
    audience: "Instaladores e EPCs",
  },
  {
    title: "Cabos especiais",
    description: "Opções para máquinas, comandos, automação e demandas específicas de aplicação.",
    audience: "Fabricantes e manutenção",
  },
];

export const differentials = [
  "Atendimento consultivo para indicar o cabo certo antes da compra.",
  "Orçamentos sob medida para volume, recorrência e necessidades técnicas.",
  "Curadoria de portfólio focada em aplicações reais, não só em códigos técnicos.",
  "Suporte comercial ágil para obras, indústria, energia solar e revenda.",
];

export const segmentSummaries = [
  {
    slug: "construcao-civil",
    title: "Construção civil",
    to: "/segmentos/construcao-civil" as const,
    description: "Materiais para cronogramas apertados, padronização de obra e menor risco de retrabalho.",
    painPoints: ["Atraso na entrega", "Especificação incorreta", "Compras fragmentadas"],
    solutions: ["Linhas para instalações prediais", "Suporte na escolha", "Resposta comercial rápida"],
  },
  {
    slug: "industrias",
    title: "Indústrias",
    to: "/segmentos/industrias" as const,
    description: "Cabos para operação contínua, painéis, máquinas e ambientes de maior exigência.",
    painPoints: ["Parada operacional", "Falha de material", "Baixa previsibilidade de abastecimento"],
    solutions: ["Portfólio industrial", "Atendimento técnico", "Condições sob medida"],
  },
  {
    slug: "energia-solar",
    title: "Energia solar",
    to: "/segmentos/energia-solar" as const,
    description: "Soluções para instaladores e integradores que precisam de resistência e confiança no campo.",
    painPoints: ["Exposição ao tempo", "Prazos de implantação", "Compatibilidade do projeto"],
    solutions: ["Cabos para solar", "Apoio comercial ágil", "Indicação por aplicação"],
  },
  {
    slug: "revendedores",
    title: "Revendedores",
    to: "/segmentos/revendedores" as const,
    description: "Mix de produtos para giro comercial, reposição e atendimento mais competitivo ao cliente final.",
    painPoints: ["Ruptura de estoque", "Margem pressionada", "Demanda variada"],
    solutions: ["Mix estratégico", "Negociação por volume", "Apoio comercial recorrente"],
  },
];

export const testimonials = [
  {
    name: "Marcos Vieira",
    role: "Compras · Construtora",
    quote: "A equipe ajudou a especificar o material certo e agilizou a cotação em um momento crítico da obra.",
  },
  {
    name: "Fernanda Siqueira",
    role: "Instaladora solar",
    quote: "Conseguimos resposta rápida e orientação prática para fechar o fornecimento do projeto com segurança.",
  },
  {
    name: "João Batista",
    role: "Revenda regional",
    quote: "O atendimento consultivo faz diferença porque acelera a negociação e reduz erro de compra.",
  },
];

export const products: Product[] = [
  {
    id: "cabo-flex-750v-25",
    name: "Cabo flexível 750V 2,5 mm²",
    slug: "cabo-flex-750v-25",
    voltage: "750V",
    application: "residencial",
    type: "Flexível",
    gauge: "2,5 mm²",
    category: "Cabos residenciais",
    summary: "Ideal para circuitos de tomadas, reformas e instalações prediais com excelente manuseio.",
    benefits: ["Boa flexibilidade para passagem em eletrodutos", "Segurança para instalações internas", "Agilidade na montagem"],
    specs: ["Condutor de cobre", "Isolação antichama", "Uso em circuitos de baixa tensão"],
  },
  {
    id: "cabo-flex-750v-60",
    name: "Cabo flexível 750V 6 mm²",
    slug: "cabo-flex-750v-60",
    voltage: "750V",
    application: "residencial",
    type: "Flexível",
    gauge: "6 mm²",
    category: "Cabos residenciais",
    summary: "Indicado para cargas maiores, chuveiros, quadros e circuitos com maior demanda.",
    benefits: ["Maior capacidade de condução", "Aplicação versátil", "Padronização em obras"],
    specs: ["Condutor de cobre", "Isolação antichama", "Alta confiabilidade em instalações prediais"],
  },
  {
    id: "cabo-controle-1kv-16",
    name: "Cabo de controle 1 kV 16 mm²",
    slug: "cabo-controle-1kv-16",
    voltage: "1 kV",
    application: "industrial",
    type: "Controle",
    gauge: "16 mm²",
    category: "Cabos industriais",
    summary: "Para painéis, máquinas e alimentação industrial com maior robustez operacional.",
    benefits: ["Resistência para ambientes exigentes", "Boa estabilidade elétrica", "Facilita padronização industrial"],
    specs: ["Cobre eletrolítico", "Cobertura reforçada", "Aplicação em comandos e alimentação"],
  },
  {
    id: "cabo-potencia-1kv-35",
    name: "Cabo de potência 1 kV 35 mm²",
    slug: "cabo-potencia-1kv-35",
    voltage: "1 kV",
    application: "industrial",
    type: "Potência",
    gauge: "35 mm²",
    category: "Cabos industriais",
    summary: "Solução para alimentação de cargas industriais com segurança e desempenho contínuo.",
    benefits: ["Desempenho em operação constante", "Alta durabilidade", "Menor risco de falha por subdimensionamento"],
    specs: ["Baixa tensão", "Cobertura resistente", "Uso em painéis e infraestrutura"],
  },
  {
    id: "cabo-solar-18kv-6",
    name: "Cabo solar 1,8 kV 6 mm²",
    slug: "cabo-solar-18kv-6",
    voltage: "1,8 kV",
    application: "solar",
    type: "Solar",
    gauge: "6 mm²",
    category: "Energia solar",
    summary: "Projetado para sistemas fotovoltaicos com resistência a intempéries e longa vida útil.",
    benefits: ["Alta resistência ao ambiente externo", "Confiabilidade na geração", "Aplicação em usinas e telhados"],
    specs: ["Dupla isolação", "Uso fotovoltaico", "Resistente a UV e umidade"],
  },
  {
    id: "cabo-solar-18kv-10",
    name: "Cabo solar 1,8 kV 10 mm²",
    slug: "cabo-solar-18kv-10",
    voltage: "1,8 kV",
    application: "solar",
    type: "Solar",
    gauge: "10 mm²",
    category: "Energia solar",
    summary: "Ideal para projetos que exigem maior seção e confiabilidade em instalações fotovoltaicas.",
    benefits: ["Boa performance elétrica", "Durabilidade em campo", "Facilita padronização da instalação"],
    specs: ["Dupla isolação", "Alta resistência climática", "Projeto solar de baixa manutenção"],
  },
  {
    id: "cabo-automacao-500v-15",
    name: "Cabo para automação 500V 1,5 mm²",
    slug: "cabo-automacao-500v-15",
    voltage: "500V",
    application: "maquinas",
    type: "Automação",
    gauge: "1,5 mm²",
    category: "Cabos especiais",
    summary: "Aplicação em comandos, sensores e integração de máquinas com instalação organizada.",
    benefits: ["Flexibilidade para chicotes", "Boa leitura e organização em painéis", "Versatilidade em máquinas"],
    specs: ["Baixa tensão", "Aplicação em comandos", "Boa acomodação em espaços compactos"],
  },
  {
    id: "cabo-maquina-1kv-25",
    name: "Cabo para máquinas 1 kV 25 mm²",
    slug: "cabo-maquina-1kv-25",
    voltage: "1 kV",
    application: "maquinas",
    type: "Especial",
    gauge: "25 mm²",
    category: "Cabos especiais",
    summary: "Indicado para equipamentos e linhas de produção que exigem alimentação confiável.",
    benefits: ["Robustez em operação", "Suporte a aplicação industrial", "Reduz risco de troca inadequada"],
    specs: ["Cobre eletrolítico", "Cobertura resistente", "Uso em máquinas e equipamentos"],
  },
];

export const guidedSelectorOptions: Array<{ value: ProductSegment; label: string; description: string }> = [
  {
    value: "residencial",
    label: "Residencial",
    description: "Instalações prediais, reformas, obras e circuitos internos.",
  },
  {
    value: "industrial",
    label: "Industrial",
    description: "Painéis, alimentação de cargas, infraestrutura e operação contínua.",
  },
  {
    value: "solar",
    label: "Solar",
    description: "Projetos fotovoltaicos, integradores e instaladores.",
  },
  {
    value: "maquinas",
    label: "Máquinas",
    description: "Automação, comandos e alimentação de equipamentos.",
  },
];

export const howToChooseTopics = [
  {
    title: "Entenda a aplicação antes da bitola",
    description: "O primeiro passo é definir o ambiente, a carga e o tipo de uso. Isso evita comprar um cabo inadequado para a operação real.",
  },
  {
    title: "Observe tensão, isolamento e exposição",
    description: "Projetos residenciais, industriais e solares exigem características diferentes de isolação, resistência e flexibilidade.",
  },
  {
    title: "Evite o erro comum de decidir só por preço",
    description: "Escolher apenas pelo menor valor pode gerar retrabalho, baixa durabilidade e atraso na instalação.",
  },
];
