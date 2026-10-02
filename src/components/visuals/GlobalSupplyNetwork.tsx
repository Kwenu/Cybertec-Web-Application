import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const manufacturers = [
{ x: 120, y: 70, label: 'Manufacturer' },
{ x: 250, y: 45, label: 'Manufacturer' },
{ x: 400, y: 62, label: 'Manufacturer' },
{ x: 540, y: 48, label: 'Manufacturer' },
{ x: 665, y: 82, label: 'Manufacturer' }];


const destinations = [
{ x: 250, y: 300, label: 'Telecom operators' },
{ x: 400, y: 320, label: 'Broadcasters' },
{ x: 550, y: 300, label: 'Enterprise & government' }];


const HUB = { x: 400, y: 190 };

export function GlobalSupplyNetwork() {
  const reduce = useReducedMotion();

  return (
    <div className="relative overflow-hidden border border-white/10 bg-navy-900">
      <svg
        viewBox="0 0 800 380"
        className="h-auto w-full"
        role="img"
        aria-label="Diagram: international manufacturers supply technology through Cybertec to local telecom, broadcast, enterprise and government organisations in Sri Lanka.">
        
        <defs>
          <pattern id="grid-dots" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.1" fill="rgba(255,255,255,0.08)" />
          </pattern>
        </defs>
        <rect width="800" height="380" fill="url(#grid-dots)" />

        {/* global arc band */}
        <path
          d="M40 120 Q400 -30 760 120"
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1" />
        
        <path
          d="M40 150 Q400 10 760 150"
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="1" />
        

        {/* manufacturer → hub */}
        {manufacturers.map((node, index) =>
        <g key={`m-${index}`}>
            <motion.path
            d={`M${node.x} ${node.y} C ${node.x} ${node.y + 70}, ${HUB.x} ${HUB.y - 80}, ${HUB.x} ${HUB.y - 22}`}
            fill="none"
            stroke="rgba(126,176,235,0.5)"
            strokeWidth="1.25"
            className={reduce ? undefined : 'dash-flow'}
            initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
            whileInView={reduce ? undefined : { pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: index * 0.08 }} />
          
            <circle cx={node.x} cy={node.y} r="5" fill="#7FB0EB" />
            <circle cx={node.x} cy={node.y} r="11" fill="none" stroke="rgba(127,176,235,0.3)" />
            <text
            x={node.x}
            y={node.y - 20}
            textAnchor="middle"
            fill="rgba(255,255,255,0.45)"
            style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            
              {node.label}
            </text>
          </g>
        )}

        {/* hub → destinations */}
        {destinations.map((node, index) =>
        <g key={`d-${index}`}>
            <motion.path
            d={`M${HUB.x} ${HUB.y + 24} C ${HUB.x} ${HUB.y + 80}, ${node.x} ${node.y - 70}, ${node.x} ${node.y - 14}`}
            fill="none"
            stroke="rgba(30,111,217,0.7)"
            strokeWidth="1.5"
            className={reduce ? undefined : 'dash-flow'}
            initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
            whileInView={reduce ? undefined : { pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.4 + index * 0.08 }} />
          
            <circle cx={node.x} cy={node.y} r="5" fill="#ffffff" />
            <text
            x={node.x}
            y={node.y + 24}
            textAnchor="middle"
            fill="rgba(255,255,255,0.6)"
            style={{ fontSize: 11 }}>
            
              {node.label}
            </text>
          </g>
        )}

        {/* hub */}
        <rect x="316" y="168" width="168" height="44" rx="2" fill="#1E6FD9" />
        <text
          x="400"
          y="196"
          textAnchor="middle"
          fill="#ffffff"
          style={{ fontSize: 14, fontWeight: 600, letterSpacing: '0.04em' }}>
          
          CYBERTEC
        </text>
      </svg>

      <div className="grid gap-px border-t border-white/10 bg-white/10 sm:grid-cols-3">
        {[
        { k: 'Upstream', v: 'International manufacturers' },
        { k: 'Cybertec', v: 'Sourcing, supply & coordination' },
        { k: 'Downstream', v: 'Local enterprise & infrastructure' }].
        map((item) =>
        <div key={item.k} className="bg-navy-900 px-6 py-5">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-brand-300">
              {item.k}
            </p>
            <p className="mt-2 text-sm text-white/70">{item.v}</p>
          </div>
        )}
      </div>
    </div>);

}