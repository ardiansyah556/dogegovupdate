/**
 * DESIGN PHILOSOPHY: Minimalist Bureaucratic Formalism
 * - Official footer with minimal information
 * - Navy and white for institutional authority
 * - Gold accents for emphasis
 * - Document-like appearance
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-12 relative">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>

      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Department Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Department of Government Efficiency</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Established to be removed. Operating under the principle of radical efficiency.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Back to Top
                </button>
              </li>
              <li>
                <a
                  href="#mandate"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Official Mandates
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Join Department
                </a>
              </li>
            </ul>
          </div>

          {/* Official Statement */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Core Principle</h4>
            <p className="text-sm text-white/80 italic">
              "If something is truly efficient, it eventually deletes itself."
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-gold/30 pt-8 space-y-4">
          {/* Footer Copy */}
          <p className="text-sm text-white/70 text-center font-mono tracking-widest">
            Department of Government Efficiency
          </p>
          <p className="text-sm text-white/70 text-center font-mono">
            Established to be removed.
          </p>
          <p className="text-sm text-white/70 text-center font-mono">
            All rights reserved until deletion.
          </p>

          {/* Copyright */}
          <p className="text-xs text-white/50 text-center pt-4">
            DOGEGOV {currentYear}. This is a meme project inspired by DOGE culture and radical efficiency ideology.
          </p>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gold"></div>
    </footer>
  );
}
