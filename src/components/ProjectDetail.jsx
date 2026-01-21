import { ExternalLink, Github, Star } from "lucide-react";

export default function ProjectDetail() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#050510] via-[#0b0620] to-[#12052a] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto space-y-14">

        {/* ===== TOP SECTION ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              OpenHands
            </h1>

            <p className="text-gray-300 leading-relaxed max-w-xl">
             OpenHands adalah platform donasi digital berbasis web yang bertujuan untuk menyalurkan bantuan secara transparan, aman, dan mudah kepada mereka yang membutuhkan. Platform ini menghubungkan donatur dengan pengelola program sosial melalui sistem yang sederhana dan terpercaya.
            </p>

            {/* STATS */}
            <div className="flex gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4">
                <p className="text-xl font-bold">5</p>
                <span className="text-sm text-gray-400">7</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4">
                <p className="text-xl font-bold">2</p>
                <span className="text-sm text-gray-400">2</span>
              </div>
            </div>

            {/* BUTTON */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://github.com/luckysany42-netizen/OpenHands.git"
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition px-5 py-3 rounded-xl font-medium"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>

              <a
                href="https://github.com/luckysany42-netizen/OpenHands.git"
                className="flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 hover:bg-purple-600/30 transition px-5 py-3 rounded-xl font-medium"
              >
                <Github size={18} />
                Github
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/30 to-purple-600/20 blur-2xl rounded-3xl" />
            <img
              src="/project-preview.png"
              alt="Project Preview"
              className="relative rounded-3xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>

        {/* ===== KEY FEATURES ===== */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-3xl">
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
            <Star className="text-yellow-400" size={20} />
            Key Features
          </h2>

          <ul className="space-y-3 text-gray-300 list-disc list-inside">
            <li>Sistem Donasi Online</li>
            <li>Manajemen Campaign Donasi</li>
          </ul>
        </div>

        {/* ===== TECHNOLOGIES ===== */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Technologies Used</h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Laravel",
              "PHP",
              "MySQL",
              "Tailwind CSS",
              "HTML",
              "CSS",
              "JavaScript",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
