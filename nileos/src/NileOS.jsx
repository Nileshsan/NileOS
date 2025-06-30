import React, { useState } from "react";

// Example Projects Data
const projects = [
  { title: "Portfolio Website", description: "A personal portfolio built with React and Tailwind CSS." },
  { title: "Chat App", description: "A real-time chat application using Socket.io and Node.js." },
];

// Projects Component
function ProjectsApp() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">My Projects</h2>
      <div className="grid gap-4">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-gray-800 p-4 rounded shadow">
            <div className="font-bold">{project.title}</div>
            <div className="text-sm text-gray-300">{project.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Resume Component
function ResumeApp() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">My Resume</h2>
      <a
        href="resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline"
      >
        View PDF Resume
      </a>
      {/* Or embed PDF: */}
      {/* <iframe src="resume.pdf" className="w-full h-96 mt-4" title="Resume"></iframe> */}
    </div>
  );
}

// Terminal Component
function TerminalApp() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const handleCommand = (e) => {
    e.preventDefault();
    setOutput([...output, `> ${input}`]);
    setInput("");
  };

  return (
    <div>
      <p className="text-green-400 mb-2">AI Terminal &gt;_</p>
      <div className="bg-black p-2 rounded h-40 overflow-y-auto mb-2 text-sm">
        {output.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>
      <form onSubmit={handleCommand} className="flex">
        <input
          className="flex-1 bg-gray-800 text-white p-1 rounded-l outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a command..."
        />
        <button
          type="submit"
          className="bg-green-600 px-3 rounded-r text-white"
        >
          Run
        </button>
      </form>
    </div>
  );
}

export default function NileOS() {
  const [activeApp, setActiveApp] = useState("none");

  const openApp = (appName) => {
    setActiveApp(appName);
  };

  const closeApp = () => {
    setActiveApp("none");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-mono">
      {/* Top bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-gray-950 border-b border-gray-700">
        <div className="text-lg font-bold">NileOS</div>
        <div className="text-sm">{new Date().toLocaleTimeString()}</div>
      </div>

      {/* Desktop icons */}
      <div className="p-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div
          onClick={() => openApp("projects")}
          className="cursor-pointer flex flex-col items-center hover:scale-105 transition"
        >
          <div className="w-16 h-16 bg-blue-500 rounded-md flex items-center justify-center">📁</div>
          <span className="mt-2">Projects</span>
        </div>

        <div
          onClick={() => openApp("resume")}
          className="cursor-pointer flex flex-col items-center hover:scale-105 transition"
        >
          <div className="w-16 h-16 bg-green-500 rounded-md flex items-center justify-center">📄</div>
          <span className="mt-2">Resume</span>
        </div>

        <div
          onClick={() => openApp("terminal")}
          className="cursor-pointer flex flex-col items-center hover:scale-105 transition"
        >
          <div className="w-16 h-16 bg-gray-700 rounded-md flex items-center justify-center">💻</div>
          <span className="mt-2">AI Terminal</span>
        </div>
      </div>

      {/* App Window */}
      {activeApp !== "none" && (
        <div className="absolute top-20 left-10 right-10 bottom-10 bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-bold">{activeApp.toUpperCase()}</div>
            <button
              onClick={closeApp}
              className="text-red-400 hover:text-red-600 text-lg"
            >
              ✕
            </button>
          </div>

          {/* Dynamic content */}
          {activeApp === "projects" && <ProjectsApp />}
          {activeApp === "resume" && <ResumeApp />}
          {activeApp === "terminal" && <TerminalApp />}
        </div>
      )}
    </div>
  );
}