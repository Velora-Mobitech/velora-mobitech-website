// Simple built-in analytics for local tracking
interface AnalyticsEvent {
  id: string;
  type: 'page_view' | 'form_submit' | 'button_click' | 'demo_request' | 'pricing_selection';
  data: Record<string, any>;
  timestamp: number;
  userAgent: string;
  url: string;
}

class SimpleAnalytics {
  private events: AnalyticsEvent[] = [];
  private sessionId: string;
  private userId: string;

  constructor() {
    this.sessionId = this.generateId();
    this.userId = this.getUserId();
    this.loadEvents();
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  public getUserId(): string {
    let userId = localStorage.getItem('analytics_user_id');
    if (!userId) {
      userId = this.generateId();
      localStorage.setItem('analytics_user_id', userId);
    }
    return userId;
  }

  public getSessionStart(): number {
    let sessionStart = localStorage.getItem('analytics_session_start');
    if (!sessionStart) {
      sessionStart = Date.now().toString();
      localStorage.setItem('analytics_session_start', sessionStart);
    }
    return parseInt(sessionStart);
  }

  private loadEvents(): void {
    const stored = localStorage.getItem('analytics_events');
    if (stored) {
      try {
        this.events = JSON.parse(stored);
      } catch (e) {
        this.events = [];
      }
    }
  }

  private saveEvents(): void {
    // Keep only last 1000 events to prevent storage bloat
    if (this.events.length > 1000) {
      this.events = this.events.slice(-1000);
    }
    localStorage.setItem('analytics_events', JSON.stringify(this.events));
  }

  public track(type: AnalyticsEvent['type'], data: Record<string, any> = {}): void {
    const event: AnalyticsEvent = {
      id: this.generateId(),
      type,
      data: {
        ...data,
        sessionId: this.sessionId,
        userId: this.userId,
      },
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    this.events.push(event);
    this.saveEvents();
    
    // Log to console for debugging
    console.log('Analytics Event:', event);
  }

  public trackPageView(path?: string): void {
    this.track('page_view', {
      path: path || window.location.pathname,
      referrer: document.referrer,
      title: document.title,
    });
  }

  public trackFormSubmit(formName: string, formData?: Record<string, any>): void {
    this.track('form_submit', {
      formName,
      formData,
    });
  }

  public trackButtonClick(buttonName: string, section?: string): void {
    this.track('button_click', {
      buttonName,
      section,
    });
  }

  public trackDemoRequest(companyName: string, companySize: string): void {
    this.track('demo_request', {
      companyName,
      companySize,
    });
  }

  public trackPricingSelection(plan: string): void {
    this.track('pricing_selection', {
      plan,
    });
  }

  // Analytics reporting methods
  public getEvents(type?: AnalyticsEvent['type']): AnalyticsEvent[] {
    if (type) {
      return this.events.filter(event => event.type === type);
    }
    return this.events;
  }

  public getRecentActivity(): AnalyticsEvent[] {
    return this.events
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 20);
  }

  public getPageViews(): { path: string; count: number }[] {
    const pageViews = this.getEvents('page_view');
    const pathCounts: Record<string, number> = {};
    
    pageViews.forEach(event => {
      const path = event.data.path;
      pathCounts[path] = (pathCounts[path] || 0) + 1;
    });

    return Object.entries(pathCounts).map(([path, count]) => ({ path, count }));
  }

  public getFormSubmissions(): { formName: string; count: number }[] {
    const submissions = this.getEvents('form_submit');
    const formCounts: Record<string, number> = {};
    
    submissions.forEach(event => {
      const formName = event.data.formName;
      formCounts[formName] = (formCounts[formName] || 0) + 1;
    });

    return Object.entries(formCounts).map(([formName, count]) => ({ formName, count }));
  }

  public getStats(): {
    totalEvents: number;
    uniqueUsers: number;
    totalSessions: number;
    pageViews: { path: string; count: number }[];
    formSubmissions: { formName: string; count: number }[];
    lastWeekEvents: number;
  } {
    const uniqueUsers = new Set(this.events.map(e => e.data.userId)).size;
    const totalSessions = new Set(this.events.map(e => e.data.sessionId)).size;
    
    const oneWeekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
    const lastWeekEvents = this.events.filter(e => e.timestamp > oneWeekAgo).length;

    return {
      totalEvents: this.events.length,
      uniqueUsers,
      totalSessions,
      pageViews: this.getPageViews(),
      formSubmissions: this.getFormSubmissions(),
      lastWeekEvents,
    };
  }

  public exportData(): string {
    return JSON.stringify(this.events, null, 2);
  }

  public clearData(): void {
    this.events = [];
    localStorage.removeItem('analytics_events');
    localStorage.removeItem('analytics_user_id');
    localStorage.removeItem('analytics_session_start');
  }
}

// Create global instance
export const analytics = new SimpleAnalytics();

// Track initial page view
if (typeof window !== 'undefined') {
  analytics.trackPageView();
}