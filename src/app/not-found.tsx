import Link from 'next/link';
import { MapPin, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto">
          <MapPin className="w-12 h-12 text-white" />
        </div>
        
        <div className="space-y-3">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            404 - Location Not Found
          </h1>
          <p className="text-xl text-slate-300 max-w-md mx-auto">
            This threat intelligence doesn't exist in our database.
          </p>
          <p className="text-slate-400">
            The page you're looking for might have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Safety</span>
          </Link>
          
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all"
          >
            <span>Report New Threat</span>
          </Link>
        </div>
      </div>
    </div>
  );
}