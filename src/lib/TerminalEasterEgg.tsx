import { useState, useEffect } from 'react';
import { Terminal, X } from 'lucide-react';

export default function TerminalEasterEgg() {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('');
  
  const fullText = `> Initiating Zero-Trust handshake...
> Analyzing incoming requests...
> WARNING: Unauthorized access protocol detected.
> DEPLOYING COUNTERMEASURES...
> Just kidding. But seriously, this infrastructure is bulletproof.
> Access Denied. Have a great day!`;

  useEffect(() => {
    if (isOpen) {
      setText('');
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  return (
    <div className="text-center mt-5 position-relative z-3">
      <button 
        onClick={() => setIsOpen(true)}
        className="btn btn-link text-secondary text-decoration-none small opacity-50 hover-opacity-100 d-inline-flex align-items-center gap-1"
        style={{ fontSize: '0.75rem' }}
        title="Check Security Status"
      >
        <Terminal size={14} /> [ sys_audit ]
      </button>

      {isOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 bg-black bg-opacity-75 d-flex align-items-center justify-content-center p-4"
          style={{ zIndex: 9999 }}
        >
          <div className="bg-dark border border-success rounded-3 w-100 overflow-hidden shadow-lg text-start" style={{ maxWidth: '600px' }}>
            <div className="bg-black bg-opacity-50 p-2 d-flex justify-content-between align-items-center border-bottom border-success border-opacity-25">
              <span className="text-success small fw-bold font-monospace d-flex align-items-center gap-2">
                <Terminal size={14} /> root@obeeoma-secure-node:~
              </span>
              <button className="btn btn-sm text-secondary hover-text-white p-0" onClick={() => setIsOpen(false)}>
                <X size={18} />
              </button>
            </div>
            <div className="p-4 font-monospace text-success position-relative" style={{ minHeight: '200px', whiteSpace: 'pre-wrap', backgroundColor: '#020502' }}>
              <div dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br/>') }} className="d-inline" />
              <span className="opacity-75" style={{ animation: 'blink 1s step-start infinite' }}>_</span>
            </div>
          </div>
          <style>{`
            @keyframes blink { 50% { opacity: 0; } }
          `}</style>
        </div>
      )}
    </div>
  );
}
