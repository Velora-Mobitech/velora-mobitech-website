import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  Eye,
  FileText,
  Download,
  Trash2,
  Clock,
  MapPin,
  Monitor,
  RefreshCw,
  Activity,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { analytics } from "@/lib/simple-analytics";

interface AnalyticsStats {
  totalEvents: number;
  uniqueUsers: number;
  totalSessions: number;
  pageViews: { path: string; count: number }[];
  formSubmissions: { formName: string; count: number }[];
  lastWeekEvents: number;
  currentVisitors: number;
  recentActivity: any[];
}

interface LiveVisitor {
  id: string;
  lastSeen: number;
  currentPage: string;
  userAgent: string;
  sessionStart: number;
}

const Analytics = () => {
  const [stats, setStats] = useState<AnalyticsStats | null>(null);
  const [liveVisitors, setLiveVisitors] = useState<LiveVisitor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  // Track current visitor
  useEffect(() => {
    const trackCurrentVisitor = () => {
      const visitorData = {
        id: analytics.getUserId(),
        lastSeen: Date.now(),
        currentPage: window.location.pathname,
        userAgent: navigator.userAgent,
        sessionStart: analytics.getSessionStart(),
      };

      // Store in localStorage for cross-tab tracking
      const existingVisitors = JSON.parse(
        localStorage.getItem("live_visitors") || "[]"
      );
      const updatedVisitors = existingVisitors.filter(
        (v: LiveVisitor) => Date.now() - v.lastSeen < 300000 // Remove visitors inactive for 5+ minutes
      );

      const visitorIndex = updatedVisitors.findIndex(
        (v: LiveVisitor) => v.id === visitorData.id
      );
      if (visitorIndex >= 0) {
        updatedVisitors[visitorIndex] = visitorData;
      } else {
        updatedVisitors.push(visitorData);
      }

      localStorage.setItem("live_visitors", JSON.stringify(updatedVisitors));
      setLiveVisitors(updatedVisitors);
    };

    // Track immediately and then every 30 seconds
    trackCurrentVisitor();
    const visitorInterval = setInterval(trackCurrentVisitor, 30000);

    return () => clearInterval(visitorInterval);
  }, []);

  useEffect(() => {
    const loadStats = () => {
      try {
        const currentStats = analytics.getStats();
        const recentActivity = analytics.getRecentActivity();
        const liveVisitorsData = JSON.parse(
          localStorage.getItem("live_visitors") || "[]"
        );

        // Filter out visitors inactive for more than 5 minutes
        const activeVisitors = liveVisitorsData.filter(
          (v: LiveVisitor) => Date.now() - v.lastSeen < 300000
        );

        setStats({
          ...currentStats,
          currentVisitors: activeVisitors.length,
          recentActivity,
        });
        setLiveVisitors(activeVisitors);
        setLastUpdate(new Date());
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading analytics:", error);
        setIsLoading(false);
      }
    };

    loadStats();
    // Refresh every 10 seconds for live data
    const interval = setInterval(loadStats, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleExportData = () => {
    const data = {
      analytics: analytics.exportData(),
      liveVisitors,
      exportDate: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `velora-analytics-${
      new Date().toISOString().split("T")[0]
    }.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleClearData = () => {
    if (
      confirm(
        "Are you sure you want to clear all analytics data? This cannot be undone."
      )
    ) {
      analytics.clearData();
      localStorage.removeItem("live_visitors");
      setStats(analytics.getStats());
      setLiveVisitors([]);
    }
  };

  const formatTimeAgo = (timestamp: number) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 60) return `${seconds}s ago`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
  };

  const getDeviceType = (userAgent: string) => {
    if (/Mobile|Android|iPhone|iPad/.test(userAgent)) return "Mobile";
    if (/Tablet/.test(userAgent)) return "Tablet";
    return "Desktop";
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container px-4 pt-40 pb-20">
          <div className="flex items-center justify-center">
            <RefreshCw className="w-8 h-8 animate-spin text-primary" />
            <span className="ml-3 text-lg">Loading analytics...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-12"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Website <span className="text-gradient">Analytics</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Real-time insights into your website performance and visitor
                behavior
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className="bg-green-500/10 text-green-600 border-green-500/20"
              >
                <Activity className="w-3 h-3 mr-1" />
                Live
              </Badge>
              <span className="text-sm text-muted-foreground">
                Updated {formatTimeAgo(lastUpdate.getTime())}
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Main Analytics Dashboard */}
      <section className="container px-4 pb-20">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Live Visitors and Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Live Visitors
                    </p>
                    <p className="text-3xl font-bold text-green-600">
                      {stats?.currentVisitors || 0}
                    </p>
                  </div>
                  <div className="relative">
                    <Users className="w-8 h-8 text-green-500" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Total Views
                    </p>
                    <p className="text-3xl font-bold">
                      {stats?.totalEvents || 0}
                    </p>
                  </div>
                  <Eye className="w-8 h-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Unique Users
                    </p>
                    <p className="text-3xl font-bold">
                      {stats?.uniqueUsers || 0}
                    </p>
                  </div>
                  <Users className="w-8 h-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Total Sessions
                    </p>
                    <p className="text-3xl font-bold">
                      {stats?.totalSessions || 0}
                    </p>
                  </div>
                  <FileText className="w-8 h-8 text-orange-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Live Visitors Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-green-500" />
                Live Visitors ({liveVisitors.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {liveVisitors.length > 0 ? (
                <div className="space-y-3">
                  {liveVisitors.map((visitor) => (
                    <div
                      key={visitor.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <div>
                          <p className="font-medium">
                            Visitor {visitor.id.slice(-8)}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {visitor.currentPage}
                            </span>
                            <span className="flex items-center gap-1">
                              <Monitor className="w-3 h-3" />
                              {getDeviceType(visitor.userAgent)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">
                          {formatTimeAgo(visitor.lastSeen)}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Session: {formatTimeAgo(visitor.sessionStart)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Users className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>No active visitors at the moment</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Page Views and Form Submissions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Page Views
                </CardTitle>
              </CardHeader>
              <CardContent>
                {stats?.pageViews && stats.pageViews.length > 0 ? (
                  <div className="space-y-3">
                    {stats.pageViews.map(({ path, count }) => (
                      <div
                        key={path}
                        className="flex justify-between items-center p-3 rounded-lg bg-muted/30"
                      >
                        <span className="font-mono text-sm">{path}</span>
                        <Badge variant="secondary">{count}</Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-8">
                    No page views yet
                  </p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Form Submissions
                </CardTitle>
              </CardHeader>
              <CardContent>
                {stats?.formSubmissions && stats.formSubmissions.length > 0 ? (
                  <div className="space-y-3">
                    {stats.formSubmissions.map(({ formName, count }) => (
                      <div
                        key={formName}
                        className="flex justify-between items-center p-3 rounded-lg bg-muted/30"
                      >
                        <span className="capitalize">
                          {formName.replace("-", " ")}
                        </span>
                        <Badge variant="secondary">{count}</Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-8">
                    No form submissions yet
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              {stats?.recentActivity && stats.recentActivity.length > 0 ? (
                <div className="space-y-3">
                  {stats.recentActivity.slice(0, 10).map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <div>
                          <p className="font-medium capitalize">
                            {activity.type.replace("_", " ")}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {activity.data.path ||
                              activity.data.formName ||
                              "Unknown"}
                          </p>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {formatTimeAgo(activity.timestamp)}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-8">
                  No recent activity
                </p>
              )}
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleExportData} className="button-gradient">
              <Download className="w-4 h-4 mr-2" />
              Export Analytics Data
            </Button>
            <Button
              onClick={handleClearData}
              variant="outline"
              className="text-destructive hover:text-destructive"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear All Data
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Analytics;
