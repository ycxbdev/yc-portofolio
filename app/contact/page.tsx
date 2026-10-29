'use client';

import MatrixRain from '@/components/MatrixRain';

const contactLinks = [
  {
    label: 'Email',
    value: 'vikoyota@gmail.com',
    href: 'mailto:vikoyota@gmail.com',
    command: "$ mail -s 'Hello' YCxBlock",
    description: 'Encrypted & secure',
    icon: '[✉]',
  },
  {
    label: 'GitHub',
    value: 'github.com/####',
    href: '',
    command: '$ git github.com',
    description: 'Source code & projects',
    icon: '[◈]',
  },
  {
    label: 'HackTheBox',
    value: 'hackthebox/########',
    href: '',
    command: '$ htb-cli login --user YC####-#####',
    description: 'CTF profile & rank',
    icon: '[⬡]',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/CevikoYS',
    href: 'https://www.linkedin.com/in/ceviko-ys-114595418/',
    command: '$ curl -X CONNECT linkedin/CevikoYS',
    description: 'Professional network',
    icon: '[▣]',
  },
];

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Matrix rain background */}
      <div className="absolute inset-0 pointer-events-none">
        <MatrixRain />
      </div>
      {/* Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.93) 100%)',
        }}
      />
      {/* Scanline sweep */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="scanline-sweep" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-10">
          <p className="text-[#00ff9f44] text-xs font-mono mb-2">
            $ cat contact.txt
          </p>
          <h1 className="text-3xl font-bold text-[#00ff9f] font-mono animate-glow mb-2">
            Contact
          </h1>
          <p className="text-[#00ff9f66] text-sm font-mono">
            Open to collaborations, lowkey hacker or newbie hacker? Yes,that's me "YComp" &amp; Web Dev Enthusiast. Build by days, attack by night. nahh justkidding, FCK the gOvErnMenT BTW.| Crypto & CFD Trader.
          </p>
        </div>

        {/* Terminal-style contact card */}
        <div className="border border-[#1a2e1a] bg-[#0d0d0dcc] rounded-lg overflow-hidden shadow-[0_0_40px_#00ff9f0a] mb-8">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#111] border-b border-[#1a2e1a]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="flex-1 text-center text-xs text-[#00ff9f44] font-mono">
              YCxBlock101@kali:~ — contact
            </span>
          </div>

          {/* Links */}
          <div className="p-6 space-y-6">
            {contactLinks.map(
              ({ label, value, href, command, description, icon }, idx) => (
                <div
                  key={label}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${idx * 120}ms` }}
                >
                  <p className="text-[#00ff9f55] text-xs font-mono mb-2">
                    {command}
                  </p>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="flex items-start gap-4 p-4 border border-[#1a2e1a] rounded hover:border-[#00ff9f44] hover:bg-[#00ff9f05] transition-all duration-300 group/link"
                  >
                    <span className="text-[#00ff9f66] font-mono text-sm shrink-0 group-hover/link:text-[#00ff9f] transition-colors">
                      {icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <span className="text-[#00ff9f] text-sm font-bold font-mono group-hover/link:text-shadow-glow transition-all">
                          {label}
                        </span>
                        <span className="text-[#00ff9f33] text-xs font-mono">
                          {description}
                        </span>
                      </div>
                      <span className="text-[#00ff9f77] text-xs font-mono truncate block group-hover/link:text-[#00ff9faa] transition-colors">
                        {value}
                      </span>
                    </div>
                    <span className="text-[#00ff9f33] text-sm group-hover/link:text-[#00ff9f] transition-colors shrink-0">
                      →
                    </span>
                  </a>
                </div>
              )
            )}
          </div>
        </div>

        {/* PGP note */}
        <div className="border border-[#1a2e1a] bg-[#0d0d0dcc] rounded-lg p-5">
          <p className="text-[#00ff9f55] text-xs font-mono mb-3">
            $ gpg --fingerprint YCxBlock101101
          </p>
          <div className="font-mono text-xs text-[#00ff9f44] leading-relaxed">
            <p>pub rsa4096 2024-01-01 [SC]</p>
            <p className="ml-6">
              A1B2 C3D4 E5F6 101101101 001101100 0011 010110
            </p>
            <p>uid [ultimate] YCxBlock &lt;vikoyota@gmail.com&gt;</p>
            <p className="mt-2 text-[#00ff9f33]">
              {'// Reach out via encrypted email for sensitive topics.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
