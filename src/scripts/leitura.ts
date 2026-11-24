// Comportamentos de rolagem das páginas longas (/empresas/ e as páginas de cada tema em /trabalhista/).

const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

// Chama fn a cada rolagem (no máximo uma vez por quadro) e ao redimensionar.
export function onScroll(fn: () => void) {
  let ticking = false;
  addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { fn(); ticking = false; });
  }, { passive: true });
  addEventListener('resize', fn);
  fn();
}

// Cabeçalho: barra de leitura e o nome da seção atual no lugar do subtítulo da marca (Layout com leitura).
export function initLeitura() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  const bar = document.querySelector<HTMLElement>('[data-progress]');
  const where = document.querySelector<HTMLElement>('[data-where]');
  const sections = [...document.querySelectorAll<HTMLElement>('[data-secao]')];
  let current = '';
  onScroll(() => {
    const max = document.documentElement.scrollHeight - innerHeight;
    if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`;
    const line = innerHeight * 0.35;
    const sec = sections.filter((s) => s.getBoundingClientRect().top <= line).pop();
    const name = sec?.dataset.secao ?? '';
    if (name === current || !where || !header) return;
    current = name;
    header.classList.toggle('has-where', !!name);
    if (name) where.textContent = name;
  });
}

// Como funciona: o eixo se preenche conforme a linha do tempo atravessa a tela; cada marco alcançado acende.
export function initTimeline() {
  const timeline = document.querySelector<HTMLElement>('[data-timeline]');
  const fill = document.querySelector<HTMLElement>('[data-timeline-fill]');
  const steps = [...document.querySelectorAll<HTMLElement>('[data-timeline-step]')];
  if (!timeline || !fill) return;
  onScroll(() => {
    // o eixo vai do centro do primeiro marco ao centro do último (a posição deles depende da altura do texto)
    const box = timeline.getBoundingClientRect();
    const first = steps[0]?.querySelector('.emp-time__node')?.getBoundingClientRect();
    const last = steps[steps.length - 1]?.querySelector('.emp-time__node')?.getBoundingClientRect();
    if (first) timeline.style.setProperty('--rail-top', `${first.top + first.height / 2 - box.top}px`);
    if (last) timeline.style.setProperty('--rail-bottom', `${box.bottom - (last.top + last.height / 2)}px`);
    const rail = fill.parentElement!.getBoundingClientRect();
    const line = innerHeight * 0.6;
    const p = reduce() ? 1 : Math.min(1, Math.max(0, (line - rail.top) / rail.height));
    fill.style.transform = `scaleY(${p})`;
    const reached = rail.top + rail.height * p;
    steps.forEach((step) => {
      const node = step.querySelector('.emp-time__node')!.getBoundingClientRect();
      step.classList.toggle('is-reached', reached >= node.top + node.height / 2);
    });
  });
}
