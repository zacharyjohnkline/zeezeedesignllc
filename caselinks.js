
'use strict';
function caseLinks(event) {
  try { removeScrollInputs(); } catch(e) { window.removeEventListener("wheel", listening); }
  const el = event.target;
  const slug = (el && el.alt) ? el.alt.toLowerCase() : '';
  if (!slug) return;
  renderCase(slug);
}
