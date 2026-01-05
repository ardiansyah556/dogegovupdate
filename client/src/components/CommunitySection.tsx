import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

/**
 * DESIGN PHILOSOPHY: Minimalist Bureaucratic Formalism
 * - Community links presented as official channels
 * - Navy and white for institutional authority
 * - Gold accents for emphasis
 * - Dry, official language
 */

export default function CommunitySection() {
  const channels = [
    {
      name: "Telegram",
      description: "Join the official DOGEGOV Telegram channel for updates, discussions, and official announcements.",
      url: "https://t.me/dogegov",
      icon: "T"
    },
    {
      name: "X (Twitter)",
      description: "Follow DOGEGOV on X for real-time updates, official statements, and community engagement.",
      url: "https://x.com/dogegov_meme",
      icon: "X"
    }
  ];

  return (
    <section id="community" className="bg-white py-24 relative">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>

      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Join the Department
          </h2>
          <p className="text-lg text-navy leading-relaxed italic">
            Participation is optional. Efficiency is inevitable.
          </p>
        </div>

        {/* Community Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {channels.map((channel, index) => (
            <div
              key={index}
              className="border-4 border-navy p-8 space-y-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Channel Icon */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 border-4 border-gold flex items-center justify-center">
                  <span className="text-2xl font-bold text-gold">{channel.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-navy">{channel.name}</h3>
              </div>

              {/* Description */}
              <p className="text-navy leading-relaxed">{channel.description}</p>

              {/* Join Button */}
              <Button
                className="w-full bg-navy text-white hover:bg-navy/90 py-6 text-lg font-semibold"
                onClick={() => window.open(channel.url, "_blank")}
              >
                Join {channel.name}
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* Community Statement */}
        <div className="bg-light-gray border-4 border-navy p-8 max-w-3xl">
          <p className="text-sm font-mono tracking-widest text-navy mb-4">COMMUNITY PRINCIPLE</p>
          <p className="text-lg text-navy leading-relaxed">
            DOGEGOV is not a closed community. We welcome discussion, debate, and participation. However, all participation must align with our core principle: radical efficiency through systematic simplification. Those who wish to join us should understand that this is not a traditional project. This is a countdown.
          </p>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-navy"></div>
    </section>
  );
}
