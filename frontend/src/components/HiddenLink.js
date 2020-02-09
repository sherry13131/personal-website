import React, { useState, memo } from 'react';

export const HiddenLink = memo(({ className, children, href, alt }) => {
  const [shownHref, setHref] = useState('mailto:sherry.hyma@gmail.com');
  const reveal = () => setHref(href);
  return (
    <a
      className="contact-link custom-underline"
      aria-label={ alt }
      onTouchStart={ reveal }
      onMouseOver={ reveal }
      onFocus={ reveal }
      href={ shownHref }
    >
      { children }
    </a>
  );
});