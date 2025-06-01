'use client';

import React, { useState } from 'react';
import { Search, MapPin, Shield, AlertTriangle, Eye, Zap, Menu, X } from 'lucide-react';

export default function ThreatPulseApp() {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('search');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentThreats, setCurrentThreats] = useState([]);

  const mockThreats = [
    {
      id: '1',
      location: 'Roma Norte, Mexico City',
      threatType: 'scam',
      severity: 'medium',
      title: 'Fake Uber drivers at metro stations',
      description: 'Reports of unmarked cars posing as Uber rides near Insurgentes metro.',
      timestamp: new Date('2024-12-15'),
      confidence: 85,
      category: 'street-smart'
    },
    {
      id: '2', 
      location: 'Tulum, Mexico',
      threatType: 'digital-risk',
      severity: 'high',
      title: 'Compromised WiFi at popular coworking spaces',
      description: 'Several nomads reported suspicious network activity at Dworks.',
      timestamp: new Date('2024-12-14'),
      confidence: 92,
      category: 'digital-risks'
    },
    {
      id: '3',
      location: 'Medellín, Colombia',
      threatType: 'theft',
      severity: 'high',
      title: 'Motorbike phone snatching in El Poblado',
      description: 'Increased incidents targeting tourists near Parque Lleras.',
      timestamp: new Date('2024-12-13'),
      confidence: 78,
      category: 'street-smart'
    }
  ];

  const handleSearch = async (query: string) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const filtered = mockThreats.filter(threat => 
      threat.location.toLowerCase().includes(query.toLowerCase()) ||
      threat.threatType.toLowerCase().includes(query.toLowerCase())
    );
    
    setCurrentThreats(filtered);
    setLoading(false);
  };

  const getSeverityColor = (severity: string) => {
    switch(severity) {
      case 'low': return 'text-green-500';
      case 'medium': return 'text-yellow-500';
      case 'high': return 'text-red-500';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-500';
    }
  };

  const getSeverityBg = (severity: string) => {
    switch(severity) {
      case 'low': return 'bg-green-50 border-green-200';
      case 'medium': return 'bg-yellow-50 border-yellow-200';
      case 'high': return 'bg-red-50 border-red-200';
      case 'critical': return 'bg-red-100 border-red-300';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'street-smart': return <Shield className="w-4 h-4" />;
      case 'digital-risks': return <Eye className="w-4 h-4" />;
      case 'local-intel': return <Zap className="w-4 h-4" />;
      default: return <AlertTriangle className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700/50 backdrop-blur-sm bg-slate-900/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ThreatPulse
              </h1>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setActiveTab('search')}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  activeTab === 'search' 
                    ? 'bg-purple-500/20 text-purple-300' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Search
              </button>
              <button
                onClick={() => setActiveTab('map')}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  activeTab === 'map' 
                    ? 'bg-purple-500/20 text-purple-300' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Live Map
              </button>
              <button
                onClick={() => setActiveTab('reports')}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  activeTab === 'reports' 
                    ? 'bg-purple-500/20 text-purple-300' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Submit Report
              </button>
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-700/50 bg-slate-900/95 backdrop-blur-sm">
            <nav className="px-4 py-4 space-y-2">
              <button
                onClick={() => {setActiveTab('search'); setMobileMenuOpen(false);}}
                className="block w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50"
              >
                Search
              </button>
              <button
                onClick={() => {setActiveTab('map'); setMobileMenuOpen(false);}}
                className="block w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50"
              >
                Live Map
              </button>
              <button
                onClick={() => {setActiveTab('reports'); setMobileMenuOpen(false);}}
                className="block w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50"
              >
                Submit Report
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'search' && (
          <div className="space-y-8">
            <div className="text-center space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Stay Safe. Travel Smart.
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                AI-powered travel intelligence revealing hidden risks, scams, and safety insights that locals wish tourists knew.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Ask anything: 'Is Roma Norte safe at night?' or 'Scams in Bangkok'"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 backdrop-blur-sm"
                />
                <button
                  onClick={() => handleSearch(searchQuery)}
                  disabled={loading}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Analyzing...' : 'Search'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <button
                onClick={() => handleSearch('Mexico City safety')}
                className="p-4 bg-slate-800/30 border border-slate-600/30 rounded-xl hover:bg-slate-700/40 transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
                  <span className="text-slate-300 group-hover:text-white">Mexico City</span>
                </div>
              </button>
              <button
                onClick={() => handleSearch('digital nomad scams')}
                className="p-4 bg-slate-800/30 border border-slate-600/30 rounded-xl hover:bg-slate-700/40 transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-pink-400 group-hover:text-pink-300" />
                  <span className="text-slate-300 group-hover:text-white">Digital Risks</span>
                </div>
              </button>
              <button
                onClick={() => handleSearch('Bangkok surveillance')}
                className="p-4 bg-slate-800/30 border border-slate-600/30 rounded-xl hover:bg-slate-700/40 transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-red-400 group-hover:text-red-300" />
                  <span className="text-slate-300 group-hover:text-white">Bangkok</span>
                </div>
              </button>
            </div>

            {loading && (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
                <span className="ml-3 text-slate-300">AI analyzing threats...</span>
              </div>
            )}

            {currentThreats.length > 0 && !loading && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Current Threats</h3>
                <div className="grid gap-6">
                  {currentThreats.map((threat: any) => (
                    <div
                      key={threat.id}
                      className={`p-6 rounded-xl border backdrop-blur-sm ${getSeverityBg(threat.severity)} hover:scale-[1.02] transition-transform`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            {getCategoryIcon(threat.category)}
                            <span className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                              {threat.category.replace('-', ' ')}
                            </span>
                            <span className={`text-sm font-bold ${getSeverityColor(threat.severity)} uppercase`}>
                              {threat.severity}
                            </span>
                          </div>
                          <h4 className="text-lg font-semibold text-slate-900 mb-2">{threat.title}</h4>
                          <p className="text-slate-700 mb-3">{threat.description}</p>
                          <div className="flex items-center justify-between text-sm text-slate-500">
                            <span className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{threat.location}</span>
                            </span>
                            <span>Confidence: {threat.confidence}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'map' && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-4">Interactive Threat Map</h3>
            <div className="bg-slate-800/30 border border-slate-600/30 rounded-xl p-12">
              <MapPin className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <p className="text-slate-300">Interactive map coming soon...</p>
              <p className="text-sm text-slate-500 mt-2">
                Will integrate Mapbox with real-time threat overlays
              </p>
            </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Submit a Threat Report</h3>
            <div className="bg-slate-800/30 border border-slate-600/30 rounded-xl p-6">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Location (e.g. Roma Norte, Mexico City)"
                  className="w-full p-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
                <select className="w-full p-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50">
                  <option>Select threat type</option>
                  <option>Scam</option>
                  <option>Theft</option>
                  <option>Digital Risk</option>
                  <option>Surveillance</option>
                  <option>Other</option>
                </select>
                <textarea
                  placeholder="Describe what happened..."
                  rows={4}
                  className="w-full p-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
                <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all">
                  Submit Report
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}