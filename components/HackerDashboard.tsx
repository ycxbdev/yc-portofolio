'use client';

import { useEffect, useRef, useState } from 'react';

const SCAN_HOSTS = [
  { ip: '192.168.1.1', ports: '22,80,443', os: 'Linux', status: 'up' },
  { ip: '192.168.1.42', ports: '3306,8080', os: 'Ubuntu', status: 'up' },
  { ip: '192.168.1.105', ports: '21,22,80', os: 'Debian', status: 'up' },
  { ip: '192.168.1.200', ports: '445,3389', os: 'Windows', status: 'up' },
];

// Panel: Network scan en vivo
function NetworkScanPanel() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setVisible((v) => Math.min(v + 1, SCAN_HOSTS.length)),
      900
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="hacker-panel">
      <div className="hacker-panel-bar">
        <span className="text-[#00ff9f]">⬡</span>
        <span>NETWORK SCAN — 192.168.1.0/24</span>
        <div className="flex items-center gap-1 ml-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9f] animate-pulse" />
          <span className="text-[#00ff9f66]">LIVE</span>
        </div>
      </div>
      <div className="p-3 space-y-1">
        <div className="grid grid-cols-4 text-[10px] text-[#00ff9f44] mb-2 px-1">
          <span>HOST</span>
          <span>PORTS</span>
          <span>OS</span>
          <span>STATE</span>
        </div>
        {SCAN_HOSTS.slice(0, visible).map((h) => (
          <div
            key={h.ip}
            className="grid grid-cols-4 text-[11px] font-mono px-1 py-0.5 hover:bg-[#00ff9f08] rounded"
          >
            <span className="text-[#00ff9f]">{h.ip}</span>
            <span className="text-[#00ff9faa]">{h.ports}</span>
            <span className="text-[#00ff9f77]">{h.os}</span>
            <span className="text-[#28c840]">{h.status}</span>
          </div>
        ))}
        {visible < SCAN_HOSTS.length && (
          <div className="text-[11px] text-[#00ff9f55] px-1 flex items-center gap-1">
            <span className="animate-blink">█</span>
            <span>scanning...</span>
          </div>
        )}
      </div>
    </div>
  );
}

// Panel: Live log de ataques
const LOG_ENTRIES = [
  { time: '03:21:44', type: 'INFO', msg: 'SQLi detected — param: id' },
  { time: '03:21:45', type: 'WARN', msg: 'WAF bypass attempt' },
  { time: '03:21:47', type: 'CRIT', msg: 'Root shell obtained' },
  { time: '03:21:48', type: 'INFO', msg: 'Pivoting 10.0.0.1 → 10.0.0.5' },
  { time: '03:21:51', type: 'WARN', msg: 'AV evasion — msfvenom payload' },
  { time: '03:21:53', type: 'INFO', msg: 'Exfil 3.2MB → /tmp/.loot' },
  { time: '03:21:55', type: 'CRIT', msg: 'Persistence — cron backdoor set' },
];

function LiveLogPanel() {
  const [shown, setShown] = useState(2);

  useEffect(() => {
    const t = setInterval(
      () => setShown((v) => (v >= LOG_ENTRIES.length ? 2 : v + 1)),
      1400
    );
    return () => clearInterval(t);
  }, []);

  const typeColor = (t: string) =>
    t === 'CRIT'
      ? 'text-[#ff5f57]'
      : t === 'WARN'
        ? 'text-[#febc2e]'
        : 'text-[#00ff9f88]';

  return (
    <div className="hacker-panel">
      <div className="hacker-panel-bar">
        <span className="text-[#ff5f57]">⬡</span>
        <span>ATTACK LOG</span>
        <span className="ml-auto text-[#ff5f5766] text-[10px]">
          UNAUTH ACCESS
        </span>
      </div>
      <div className="p-3 space-y-1 font-mono text-[11px]">
        {LOG_ENTRIES.slice(0, shown).map((e, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="text-[#00ff9f33] shrink-0">{e.time}</span>
            <span className={`shrink-0 w-8 ${typeColor(e.type)}`}>
              {e.type}
            </span>
            <span className="text-[#00ff9fbb]">{e.msg}</span>
          </div>
        ))}
        <div className="flex items-center gap-1 text-[#00ff9f44]">
          <span className="animate-blink">█</span>
        </div>
      </div>
    </div>
  );
}

const BRUTE_WORDS = [
  'root:toor',
  'admin:123456',
  'user:letmein',
  'admin:qwerty',
  'root:alpine',
  'admin:hunter2',
];

// Panel: Brute-force progress
function BruteForcePanel() {
  const [progress, setProgress] = useState(12);
  const [attempt, setAttempt] = useState(BRUTE_WORDS[0]);
  const wIdxRef = useRef(0);

  useEffect(() => {
    const t = setInterval(() => {
      setProgress((p) =>
        p >= 100 ? 8 : p + Math.floor(Math.random() * 7) + 3
      );
      wIdxRef.current = (wIdxRef.current + 1) % BRUTE_WORDS.length;
      setAttempt(BRUTE_WORDS[wIdxRef.current]);
    }, 600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="hacker-panel">
      <div className="hacker-panel-bar">
        <span className="text-[#febc2e]">⬡</span>
        <span>BRUTEFORCE — SSH:22</span>
      </div>
      <div className="p-3 space-y-3 font-mono text-[11px]">
        <div className="flex justify-between text-[#00ff9f88]">
          <span>
            target: <span className="text-[#00ff9f]">192.168.1.105</span>
          </span>
          <span>
            mode: <span className="text-[#febc2e]">dictionary</span>
          </span>
        </div>
        <div className="flex justify-between text-[#00ff9f55]">
          <span>
            trying: <span className="text-[#00ff9faa]">{attempt}</span>
          </span>
        </div>
        <div>
          <div className="flex justify-between text-[10px] text-[#00ff9f55] mb-1">
            <span>progress</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1.5 rounded bg-[#0d1a0d] overflow-hidden">
            <div
              className="h-full rounded bg-[#00ff9f] transition-all duration-500 shadow-[0_0_8px_#00ff9f]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className="flex justify-between text-[10px] text-[#00ff9f33]">
          <span>
            {Math.floor((progress / 100) * 10000).toLocaleString()} / 10,000
            attempts
          </span>
          <span className="text-[#28c840] animate-pulse">running</span>
        </div>
      </div>
    </div>
  );
}

// Panel: Hex dump estilo memoria
const HEX_ROWS = [
  '4D 5A 90 00 03 00 00 00  04 00 00 00 FF FF 00 00  MZ..............',
  'B8 00 00 00 00 00 00 00  40 00 00 00 00 00 00 00  ........@.......',
  '00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  ................',
  'E8 00 00 00 0E 1F BA 0E  00 B4 09 CD 21 B8 01 4C  ............!..L',
  '54 68 69 73 20 70 72 6F  67 72 61 6D 20 63 61 6E  This program can',
  '6E 6F 74 20 62 65 20 72  75 6E 20 69 6E 20 44 4F  not be run in DO',
];

function HexDumpPanel() {
  const [highlight, setHighlight] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setHighlight((h) => (h + 1) % HEX_ROWS.length),
      800
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="hacker-panel">
      <div className="hacker-panel-bar">
        <span className="text-[#00ff9f]">⬡</span>
        <span>MEMORY DUMP — PID 1337</span>
      </div>
      <div className="p-3 font-mono text-[10px] space-y-0.5">
        {HEX_ROWS.map((row, i) => (
          <div
            key={i}
            className={`px-1 py-0.5 rounded transition-colors duration-300 ${i === highlight ? 'bg-[#00ff9f15] text-[#00ff9f]' : 'text-[#00ff9f55]'}`}
          >
            <span className="text-[#00ff9f33] mr-2">
              {(i * 16).toString(16).padStart(8, '0')}:
            </span>
            {row}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HackerDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
      <NetworkScanPanel />
      <LiveLogPanel />
      <BruteForcePanel />
      <HexDumpPanel />
    </div>
  );
}
