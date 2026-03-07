import { useState } from 'react';

const budgetOptions = [
  'Under $1,000',
  '$1,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000+',
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', website: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 pb-36 bg-white">
      <div className="max-w-3xl mx-auto px-8">
      <p className="section-label text-black mb-4">Contact</p>
      <h2 className="font-serif text-4xl text-black md:text-5xl mb-12 max-w-lg leading-snug">
        Reach out and let's bring your vision to life
      </h2>

      {submitted ? (
        <div className="portfolio-card p-10 max-w-xl text-center">
          <div className="w-12 h-12 rounded-full bg-green-dot mx-auto mb-4 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <h3 className="font-serif text-2xl mb-2">Message Sent!</h3>
          <p className="font-sans text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
            Thanks for reaching out. I'll get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="portfolio-card p-8 max-w-xl space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-sans font-medium mb-1.5" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Full Name
              </label>
              <input
                type="text"
                placeholder="Ikta Sollork"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl text-sm font-sans outline-none transition-all"
                style={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', color: 'hsl(var(--foreground))' }}
              />
            </div>
            <div>
              <label className="block text-xs font-sans font-medium mb-1.5" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Email Address
              </label>
              <input
                type="email"
                placeholder="portal@support.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl text-sm font-sans outline-none transition-all"
                style={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', color: 'hsl(var(--foreground))' }}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-sans font-medium mb-1.5" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Website (optional)
            </label>
            <input
              type="url"
              placeholder="Company Website"
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
              className="w-full px-4 py-3 rounded-xl text-sm font-sans outline-none transition-all"
              style={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', color: 'hsl(var(--foreground))' }}
            />
          </div>

          <div>
            <label className="block text-xs font-sans font-medium mb-1.5" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Select Budget
            </label>
            <select
              value={form.budget}
              onChange={(e) => setForm({ ...form, budget: e.target.value })}
              className="w-full px-4 py-3 rounded-xl text-sm font-sans outline-none transition-all appearance-none"
              style={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', color: form.budget ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))' }}
            >
              <option value="">Select...</option>
              {budgetOptions.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-sans font-medium mb-1.5" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Message
            </label>
            <textarea
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              required
              className="w-full px-4 py-3 rounded-xl text-sm font-sans outline-none transition-all resize-none"
              style={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', color: 'hsl(var(--foreground))' }}
            />
          </div>

          <button type="submit" className="btn-primary bg-black rounded-full text-white w-full justify-center py-4">
            Send Message
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </button>
        </form>
      )}
      </div>
    </section>
  );
};

export default ContactSection;
