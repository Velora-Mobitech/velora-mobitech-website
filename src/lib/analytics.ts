// Google Analytics types
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Google Analytics configuration
export const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || 'G-XXXXXXXXXX';

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID && GA_TRACKING_ID !== 'G-XXXXXXXXXX') {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    console.log('✅ Google Analytics is working with a valid tracking ID');
  } else {
    console.log('📊 Google Analytics not configured. Built-in analytics is active. Set VITE_GA_TRACKING_ID in .env file for Google Analytics.');
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID !== 'G-XXXXXXXXXX') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: title || document.title,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID !== 'G-XXXXXXXXXX') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', 'engagement', formName);
};

// Track demo requests
export const trackDemoRequest = (companyName: string, companySize: string) => {
  trackEvent('demo_request', 'conversion', `${companyName} - ${companySize}`);
};

// Track pricing card selection
export const trackPricingSelection = (plan: string) => {
  trackEvent('pricing_selection', 'engagement', plan);
};