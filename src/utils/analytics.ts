// Google Analytics Measurement ID
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your Google Analytics ID

// Initialize Google Analytics
export const initGA = () => {
  // Skip GA in development or when no real ID is configured
  const isPlaceholder = GA_TRACKING_ID === 'G-XXXXXXXXXX';
  if (isPlaceholder) return;

  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;

  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}');
  `;

  document.head.appendChild(script1);
  document.head.appendChild(script2);
};

// Track page views
export const pageview = (url: string) => {
  // Avoid errors if GA is not initialized
  if (typeof window.gtag !== 'function') return;
  window.gtag('config', GA_TRACKING_ID, { page_path: url });
};

// Track events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', action, { event_category: category, event_label: label, value: value });
};
