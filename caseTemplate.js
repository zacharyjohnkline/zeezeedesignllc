
'use strict';

function renderCase(slug) {
  const data = (typeof CASE_DATA !== 'undefined') ? CASE_DATA[slug] : null;
  if (!data) {
    console.warn('Case data not found for slug:', slug);
    return;
  }
  const parts = [];
  parts.push(`<div class="client-title">
      <p class="exit" onclick="goBack()">back</p>
      <p class="client-title-text">Case Study</p>
    </div>`);

  // Hero: banner + overlay description
  if (data.banner || data.description) {
    const bannerHtml = data.banner ? `<img src="${data.banner}" alt="${data.title}" class="client-banner" />` : '';
    const descHtml = data.description ? `<p class="client-description">${data.description}</p>` : '';
    parts.push(`<div class="case-hero">${bannerHtml}${descHtml}</div>`);
  }

  // Render sections
  if (Array.isArray(data.sections)) {
    for (const s of data.sections) {
      switch (s.type) {
        case 'heading':
          parts.push(`<p class="primary-titles">${s.text}</p>`);
          break;
        case 'heading2':
          parts.push(`<p class="primary-titles2">${s.text}</p>`);
          break;
        case 'paragraph':
          parts.push(`<p class="case-paragraph">${s.text}</p>`);
          break;
        case 'image':
          parts.push(`<img src="${s.src}" alt="${s.alt || ''}" class="${s.className || 'case-image'}" />`);
          break;
        case 'imageText':
          parts.push(`<div class="image-text">
              <img src="${s.image}" alt="${s.imageAlt || ''}" class="${s.imageClass || 'half-image'}" />
              <div class="paragraph-container">
                <p class="case-paragraph">${s.text}</p>
              </div>
            </div>`);
          break;
        case 'textImage':
          parts.push(`<div class="text-image">
            <div class="paragraph-container">
              <p class="case-paragraph">${s.text}</p>
            </div>
              <img src="${s.image}" alt="${s.imageAlt || ''}" class="${s.imageClass || 'half-image'}" />
            </div>`);
          break;
        default:
          break;
      }
    }
  }

  container.style.gridTemplateRows = "";
  container.style.display = "block";
  container.innerHTML = parts.join('\n');
  if (typeof setScrollEnabled === 'function') setScrollEnabled(true);
  const paragraphBG = document.querySelector(".client-description");
  paragraphBG.style.backgroundColor = `${data.color}`;
}
