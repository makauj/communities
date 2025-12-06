import { useState, useEffect } from 'react'

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("App rendering");
  useEffect(() => {
    console.log("Fetching users...");
    fetch('http://localhost:5000/api/users')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navbar */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Communities
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors">Home</a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors">Explore</a>
                <a href="#" className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-indigo-500/20">Sign In</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Connect with <span className="text-indigo-500">Kindred Spirits</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-8">
            Join thousands of communities tailored to your interests. Share ideas, foster discussions, and grow together.
          </p>
          <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-indigo-50 transition-colors shadow-xl">
            Get Started
          </button>
        </div>

        {/* Users Section (API Proof) */}
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-2 h-8 bg-indigo-500 rounded-full mr-3"></span>
            Active Members
          </h2>

          {loading ? (
            <div className="flex justify-center p-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
            </div>
          ) : error ? (
            <div className="text-red-400 text-center py-8 bg-red-900/20 rounded-xl border border-red-500/50">
              <h3 className="text-lg font-bold mb-2">Connection Error</h3>
              <p>{error}</p>
              <p className="text-sm mt-2 text-slate-400">Make sure the server and MongoDB are running.</p>
            </div>
          ) : users.length === 0 ? (
            <div className="text-slate-400 text-center py-8">
              No users found. Start the server and create a user via API!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {users.map(user => (
                <div key={user._id} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-lg">
                      {user.username[0].toUpperCase()}
                    </div>
                    <div className="ml-4">
                      <div className="font-bold">{user.username}</div>
                      <div className="text-sm text-slate-400">{user.email}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
