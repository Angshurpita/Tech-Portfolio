import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, FileText, Sparkles, MessageSquare, Loader2, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { sound } from '../utils/audio';

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);
  const [transmissionStatus, setTransmissionStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const targetEmail = "angshuganguly777@gmail.com";

  const handleCopy = (text, type) => {
    sound.playPop();
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleDirectSubmit = async (e) => {
    e.preventDefault();
    sound.playPop();
    setTransmissionStatus('sending');
    setStatusMessage('Establishing secure socket and dispatching direct transmission...');

    try {
      // 1. If an access key exists in .env (e.g. VITE_WEB3FORMS_KEY), use Web3Forms
      const web3Key = import.meta.env.VITE_WEB3FORMS_KEY;

      const endpoint = web3Key
        ? 'https://api.web3forms.com/submit'
        : `https://formsubmit.co/ajax/${targetEmail}`;

      const payload = web3Key
        ? {
            access_key: web3Key,
            name: formData.name,
            email: formData.email,
            subject: formData.subject || `Direct Transmission from ${formData.name}`,
            message: formData.message,
            from_name: formData.name
          }
        : {
            name: formData.name,
            email: formData.email,
            _replyto: formData.email,
            _subject: formData.subject || `Direct Transmission from ${formData.name} [Tech Portfolio]`,
            message: formData.message,
            _template: 'table'
          };

      // 4-second timeout to prevent hanging if FormSubmit activation is pending or blocked
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        sound.playSuccess();
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
        setTransmissionStatus('success');
        setStatusMessage(`Transmission dispatched directly to ${targetEmail} from ${formData.email}.`);
      } else {
        throw new Error('API returned non-200');
      }
    } catch (err) {
      // Fallback: Instantly open Gmail Web or default mail composer pre-filled with all details
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${encodeURIComponent(
        formData.subject || `Direct Transmission from ${formData.name}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name} <${formData.email}>\n\nMessage:\n${formData.message}`
      )}`;

      window.open(gmailUrl, '_blank');

      sound.playSuccess();
      setTransmissionStatus('success');
      setStatusMessage(`Pre-filled Gmail compose tab launched addressed to ${targetEmail} from ${formData.email}.`);
    }
  };

  const openGmailWeb = () => {
    sound.playPop();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Visitor'}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-sky-300 border border-blue-300 dark:border-blue-800 mb-3 shadow-xs">
          <MessageSquare className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
          <span>INITIATE CONTACT</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 dark:text-white">
          Let’s Build Something Exceptional
        </h2>
        <p className="text-slate-800 dark:text-slate-200 max-w-xl mt-2 text-sm sm:text-base font-normal leading-relaxed">
          Available for founding engineer positions, low-latency systems architecture, and generative AI research collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Direct Info Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Email Card */}
          <div className="p-5 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-blue-200/80 dark:border-blue-900/60 shadow-md hover:shadow-lg transition-all flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-sky-300">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-extrabold uppercase text-slate-700 dark:text-slate-300 tracking-wider">
                  Direct Target Inbox
                </div>
                <a
                  href={`mailto:${targetEmail}`}
                  className="text-sm font-extrabold text-slate-950 dark:text-white hover:text-blue-600 font-mono-fact transition-colors"
                >
                  {targetEmail}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(targetEmail, 'email')}
              className="p-2.5 rounded-xl bg-blue-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 border border-blue-200 dark:border-slate-700 transition-colors cursor-pointer"
              title="Copy email to clipboard"
            >
              {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone Card */}
          <div className="p-5 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-blue-200/80 dark:border-blue-900/60 shadow-md hover:shadow-lg transition-all flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-sky-300">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-extrabold uppercase text-slate-700 dark:text-slate-300 tracking-wider">
                  Direct Phone
                </div>
                <div className="text-sm font-extrabold text-slate-950 dark:text-white font-mono-fact">
                  {personalInfo.phone}
                </div>
              </div>
            </div>
            <button
              onClick={() => handleCopy(personalInfo.phone, 'phone')}
              className="p-2.5 rounded-xl bg-blue-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 border border-blue-200 dark:border-slate-700 transition-colors cursor-pointer"
              title="Copy phone to clipboard"
            >
              {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Location & Timezone Card */}
          <div className="p-5 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-blue-200/80 dark:border-blue-900/60 shadow-md flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-sky-300">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-extrabold uppercase text-slate-700 dark:text-slate-300 tracking-wider">
                Base Location
              </div>
              <div className="text-sm font-extrabold text-slate-950 dark:text-white">
                {personalInfo.location}
              </div>
              <div className="text-xs text-blue-700 dark:text-sky-400 font-mono-fact font-bold">
                {personalInfo.timezone}
              </div>
            </div>
          </div>

          {/* Social Profiles Capsule */}
          <div className="p-5 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-blue-200/80 dark:border-blue-900/60 shadow-md flex items-center justify-between">
            <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
              Verified Profiles:
            </div>
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playPop()}
                className="p-3 rounded-xl bg-blue-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-sky-400 border border-blue-200 dark:border-slate-700 transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playPop()}
                className="p-3 rounded-xl bg-blue-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-sky-400 border border-blue-200 dark:border-slate-700 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              {personalInfo.x && (
                <a
                  href={personalInfo.x}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playPop()}
                  className="p-3 rounded-xl bg-blue-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-sky-400 border border-blue-200 dark:border-slate-700 transition-colors"
                  title="X (Twitter)"
                >
                  <XIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Right Column: Direct Mail Transmission Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-white/95 dark:bg-slate-900/95 border border-blue-200/80 dark:border-blue-900/60 shadow-xl">
            
            {/* Header with Destination Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h3 className="text-lg font-black text-slate-950 dark:text-white">
                  Send Direct Transmission
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Direct delivery to <strong className="text-blue-600 dark:text-sky-400 font-mono-fact">{targetEmail}</strong>
                </p>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-mono-fact font-extrabold bg-blue-100 dark:bg-blue-950 text-blue-950 dark:text-sky-300 border border-blue-300 dark:border-blue-800">
                SSL Secured · Direct Inbox
              </span>
            </div>

            {transmissionStatus === 'success' ? (
              <div className="py-8 px-4 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-300 dark:border-emerald-800">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h4 className="text-xl font-black text-slate-950 dark:text-white">
                  Transmission Dispatched Successfully!
                </h4>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                  Your message has been dispatched directly to <strong className="text-blue-600 dark:text-sky-400">{targetEmail}</strong> from <strong className="text-slate-950 dark:text-white">{formData.email}</strong>. Angshurpita will review your brief and respond promptly.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                  <button
                    onClick={() => {
                      sound.playPop();
                      setTransmissionStatus('idle');
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-xl text-xs font-extrabold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25 cursor-pointer"
                  >
                    Send Another Transmission
                  </button>

                  <button
                    onClick={openGmailWeb}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View / Send in Gmail Web</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleDirectSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-900 dark:text-slate-100 mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Elena Rostova"
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/80 border border-blue-200/90 dark:border-slate-700 text-slate-950 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 dark:text-slate-100 mb-1">
                      Your Email (Sender) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/80 border border-blue-200/90 dark:border-slate-700 text-slate-950 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 dark:text-slate-100 mb-1">
                    Subject / Opportunity Title <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Founding AI Engineer / Systems Architecture Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/80 border border-blue-200/90 dark:border-slate-700 text-slate-950 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 dark:text-slate-100 mb-1">
                    Direct Transmission Payload (Message) <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Detail the architectural requirements, problem space, or high-concurrency opportunity..."
                    className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/80 border border-blue-200/90 dark:border-slate-700 text-slate-950 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none shadow-xs"
                  />
                </div>

                <div className="pt-2 space-y-2.5">
                  <button
                    type="submit"
                    disabled={transmissionStatus === 'sending'}
                    className="w-full py-3.5 px-6 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white shadow-lg shadow-blue-500/30 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {transmissionStatus === 'sending' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting to {targetEmail}...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Direct Transmission to {targetEmail}</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400 px-1 pt-1">
                    <span>Replies are routed directly to your entered email.</span>
                    <button
                      type="button"
                      onClick={openGmailWeb}
                      className="text-blue-700 dark:text-sky-400 hover:underline font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <span>Prefer Gmail Web?</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </form>
            )}

          </div>
        </div>

      </div>

    </section>
  );
}
