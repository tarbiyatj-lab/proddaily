import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ProdDaily Error Boundary Caught:', error, errorInfo);
  }

  handleReset = () => {
    localStorage.clear();
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#fafbfc] flex items-center justify-center p-6 text-slate-800">
          <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto text-xl font-bold">
              !
            </div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              Refresh Needed
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              A background update was just synced. Click below to refresh your daily studio session.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => window.location.reload()}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
              >
                Reload Studio
              </button>
              <button
                onClick={this.handleReset}
                className="w-full py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold text-xs transition-all cursor-pointer"
              >
                Reset Local Cache & Reload
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
