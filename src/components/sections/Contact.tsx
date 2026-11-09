import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Copy, Check, Send, Github, Linkedin, MessageSquare } from 'lucide-react';
import { PortfolioData } from '../../types/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { getFadeInUp, getStaggerContainer } from '../../utils/motion';
import { Section } from '../layout/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export interface ContactProps {
  profile: PortfolioData['profile'];
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const reducedMotion = useReducedMotion();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${encodeURIComponent(profile.email)}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <Section
      id="contact"
      badge="Let's Connect"
      title="Get In Touch"
      subtitle="Open to discussions, project opportunities, and technology collaborations across web development, database management, and data."
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Side */}
        <motion.div
          variants={getStaggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Email Card with 1-click Copy */}
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#EAE5EF] text-[#8C79A8] border border-[#C9B9D9]/70">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#655E75]">Direct Email</h3>
                <p className="text-base font-bold text-[#282433] break-all">{profile.email}</p>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleCopyEmail}
              icon={copied ? Check : Copy}
              iconPosition="left"
              className="w-full justify-center"
            >
              {copied ? 'Email Copied to Clipboard!' : 'Copy Email Address'}
            </Button>
          </Card>

          {/* Location Card */}
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#EAE5EF] text-[#8C79A8] border border-[#C9B9D9]/70">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#655E75]">Location</h3>
                <p className="text-base font-bold text-[#282433]">{profile.location}</p>
                <p className="text-xs text-[#655E75] mt-0.5">Saudi Arabia</p>
              </div>
            </div>
          </Card>

          {/* Connect on Socials Card */}
          <Card className="p-6 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#655E75] font-mono">
              Professional Profiles
            </h3>
            <div className="space-y-2">
              <a
                href={profile.githubUrl || 'https://github.com/RASHA-2003'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-[#F7F5F8] border border-[#E2DCea] text-[#282433] hover:text-[#8C79A8] hover:border-[#8C79A8]/45 hover:bg-white shadow-sm transition-all group"
              >
                <span className="flex items-center gap-2.5 text-sm font-medium">
                  <Github className="w-4 h-4 text-[#8C79A8] group-hover:scale-110 transition-transform" />
                  <span>GitHub Profile</span>
                </span>
                <span className="text-xs text-[#655E75] font-mono">View Repos →</span>
              </a>

              <a
                href={profile.linkedinUrl || 'https://www.linkedin.com/in/rasha-althubyani-214759326'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-[#F7F5F8] border border-[#E2DCea] text-[#282433] hover:text-[#8C79A8] hover:border-[#8C79A8]/45 hover:bg-white shadow-sm transition-all group"
              >
                <span className="flex items-center gap-2.5 text-sm font-medium">
                  <Linkedin className="w-4 h-4 text-[#8C79A8] group-hover:scale-110 transition-transform" />
                  <span>LinkedIn Profile</span>
                </span>
                <span className="text-xs text-[#655E75] font-mono">Connect →</span>
              </a>
            </div>
          </Card>
        </motion.div>

        {/* Contact Form Side */}
        <motion.div
          variants={getFadeInUp(reducedMotion)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="lg:col-span-7"
        >
          <Card className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2 text-[#282433] font-bold text-lg border-b border-[#E2DCea] pb-3">
              <MessageSquare className="w-5 h-5 text-[#8C79A8]" />
              <h3>Send a Message</h3>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <Check className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-emerald-900">Opening Email Client...</h4>
                <p className="text-xs sm:text-sm text-emerald-700">
                  Your mail app is launching with your message pre-filled. You can also write directly to{' '}
                  <span className="font-semibold text-emerald-900">{profile.email}</span>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-[#655E75]">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F5F8] border border-[#E2DCea] text-[#282433] text-sm placeholder-[#A49EAE] focus:outline-none focus:bg-white focus:border-[#8C79A8] focus:ring-1 focus:ring-[#8C79A8] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-[#655E75]">
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F5F8] border border-[#E2DCea] text-[#282433] text-sm placeholder-[#A49EAE] focus:outline-none focus:bg-white focus:border-[#8C79A8] focus:ring-1 focus:ring-[#8C79A8] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-[#655E75]">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Technology Opportunity"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F5F8] border border-[#E2DCea] text-[#282433] text-sm placeholder-[#A49EAE] focus:outline-none focus:bg-white focus:border-[#8C79A8] focus:ring-1 focus:ring-[#8C79A8] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-[#655E75]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Rasha, I would like to discuss..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F5F8] border border-[#E2DCea] text-[#282433] text-sm placeholder-[#A49EAE] focus:outline-none focus:bg-white focus:border-[#8C79A8] focus:ring-1 focus:ring-[#8C79A8] transition-colors resize-y"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  icon={Send}
                  iconPosition="right"
                  className="w-full justify-center"
                >
                  Send Message
                </Button>
              </form>
            )}
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};
