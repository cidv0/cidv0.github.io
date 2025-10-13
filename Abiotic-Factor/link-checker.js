const baseClasses = ['text-slate-300', 'hover:text-slate-100'];
const existsClasses = ['text-emerald-300', 'hover:text-emerald-200'];
const missingClasses = ['text-rose-400', 'hover:text-rose-300'];
const unknownClasses = ['text-amber-300', 'hover:text-amber-200'];

function resetClasses(anchor) {
  anchor.classList.remove(...baseClasses, ...existsClasses, ...missingClasses, ...unknownClasses);
}

function applyVariant(anchor, variant) {
  resetClasses(anchor);
  if (variant === 'exists') {
    anchor.classList.add(...existsClasses);
    anchor.dataset.exists = 'true';
    anchor.dataset.status = 'exists';
  } else if (variant === 'missing') {
    anchor.classList.add(...missingClasses);
    anchor.dataset.exists = 'false';
    anchor.dataset.status = 'missing';
  } else {
    anchor.classList.add(...unknownClasses);
    anchor.dataset.exists = 'unknown';
    anchor.dataset.status = 'unknown';
  }
}

async function probe(url, method) {
  const response = await fetch(url, { method });
  if (response.ok || response.status === 204) {
    return 'exists';
  }
  if (response.status === 404) {
    return 'missing';
  }
  return 'unknown';
}

async function evaluateLink(anchor) {
  const href = anchor.getAttribute('href');
  if (!href || href.startsWith('#') || /^https?:\/\//i.test(href)) {
    return;
  }

  const url = new URL(href, window.location.href);

  try {
    let result = await probe(url, 'HEAD');
    if (result === 'unknown') {
      result = await probe(url, 'GET');
    }
    applyVariant(anchor, result);
  } catch (error) {
    if (window.location.protocol === 'file:') {
      applyVariant(anchor, 'unknown');
    } else {
      applyVariant(anchor, 'missing');
    }
  }
}

export function flagLinks(root = document) {
  const anchors = root.querySelectorAll('a[data-page-check]');
  anchors.forEach((anchor) => {
    baseClasses.forEach((cls) => anchor.classList.add(cls));
    evaluateLink(anchor);
  });
}
