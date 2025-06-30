import React from "react";
import Draggable from "react-draggable";
import "./index.css";

const apps = [
  { id: 1, name: "Projects", icon: "📁" },
  { id: 2, name: "Resume", icon: "📄" },
  { id: 3, name: "Contact", icon: "✉️" },
  { id: 4, name: "Terminal", icon: "💻" },
];

function AppWindow({ app, onClose, children }) {
  return (
    <Draggable handle=".window-title">
      <div className="fixed top-24 left-24 w-96 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50">
        <div className="window-title flex justify-between items-center bg-gray-800 px-4 py-2 rounded-t-lg cursor-move">
          <span className="font-bold">{app.name}</span>
          <button onClick={onClose} className="text-red-400 hover:text-red-600">✕</button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </Draggable>
  );
}

export default function Desktop() {
  const [openApp, setOpenApp] = React.useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 text-white font-mono relative">
      {/* Desktop Icons */}
      <div className="p-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
        {apps.map((app) => (
          <div
            key={app.id}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition"
            onClick={() => setOpenApp(app)}
          >
            <div className="w-16 h-16 flex items-center justify-center text-3xl bg-gray-800 rounded-lg mb-2">
              {app.icon}
            </div>
            <span>{app.name}</span>
          </div>
        ))}
      </div>

      {/* App Window */}
      {openApp && (
        <AppWindow app={openApp} onClose={() => setOpenApp(null)}>
          <div className="text-center text-lg">{openApp.name} App Content</div>
        </AppWindow>
      )}

      {/* Taskbar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-950 bg-opacity-80 border-t border-gray-700 flex items-center px-4 py-2">
        <span className="font-bold text-blue-400">NileOS</span>
        <span className="ml-auto text-sm">{new Date().toLocaleTimeString()}</span>
      </div>
    </div>
  );
}
