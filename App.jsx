import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Settings, Tool, HelpCircle } from "lucide-react";

const Layout = ({ children }) => (
  <div className="min-h-screen bg-zinc-900 text-white flex">
    <aside className="w-64 bg-zinc-800 p-4 space-y-4">
      <h1 className="text-xl font-bold mb-6">Beaming</h1>
      <nav className="flex flex-col gap-4">
        <Link to="/dashboard" className="flex items-center gap-2 hover:text-blue-400">
          <LayoutDashboard size={20} /> Dashboard
        </Link>
        <Link to="/tools" className="flex items-center gap-2 hover:text-blue-400">
          <Tool size={20} /> Tools
        </Link>
        <Link to="/settings" className="flex items-center gap-2 hover:text-blue-400">
          <Settings size={20} /> Settings
        </Link>
        <Link to="/support" className="flex items-center gap-2 hover:text-blue-400">
          <HelpCircle size={20} /> Support
        </Link>
      </nav>
    </aside>
    <main className="flex-1 p-8 overflow-y-auto">
      {children}
    </main>
  </div>
);

const Dashboard = () => (
  <Card className="bg-zinc-800">
    <CardContent className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
      <p>Welcome to your Beaming dashboard. Here’s a quick overview of your account.</p>
    </CardContent>
  </Card>
);

const Tools = () => (
  <Card className="bg-zinc-800">
    <CardContent className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Tools</h2>
      <p>Use various utilities provided by Beaming to enhance your experience.</p>
    </CardContent>
  </Card>
);

const SettingsPage = () => (
  <Card className="bg-zinc-800">
    <CardContent className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <p>Customize your preferences, update your profile, and configure options here.</p>
    </CardContent>
  </Card>
);

const Support = () => (
  <Card className="bg-zinc-800">
    <CardContent className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Support</h2>
      <p>Need help? Contact us or browse the FAQ to get assistance.</p>
    </CardContent>
  </Card>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}
