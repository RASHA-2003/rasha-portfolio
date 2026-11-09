import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ExternalLink, Calendar, KeyRound } from 'lucide-react';
import { PortfolioData } from '../../types/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { getFadeInUp, getStaggerContainer } from '../../utils/motion';
import { Section } from '../layout/Section';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export interface CertificationsProps {
  certifications: PortfolioData['certifications'];
}

export const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  const reducedMotion = useReducedMotion();

  return (
    <Section
      id="certifications"
      badge="Continuous Learning"
      title="Certificates & Credentials"
      subtitle="Industry-standard certifications validating hands-on cloud, web development, and systems expertise."
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={getStaggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div key={cert.id} variants={getFadeInUp(reducedMotion)} className="flex">
              <Card className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-2.5 rounded-xl bg-[#03142F] border border-sky-500/30 text-sky-400 shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    {cert.issueDate && (
                      <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-sky-400" />
                        {cert.issueDate}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white line-clamp-2">
                      {cert.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-sky-300 mt-1">
                      {cert.issuer}
                    </p>
                  </div>

                  {cert.credentialId && (
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-[#03142F]/60 p-2 rounded border border-[#103774]/40">
                      <KeyRound className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span className="truncate">ID: {cert.credentialId}</span>
                    </div>
                  )}

                  {/* Skills tagged */}
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="navy" size="sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {/* Verification Link */}
                {cert.credentialUrl && (
                  <div className="pt-3 border-t border-[#103774]/40">
                    <Button
                      href={cert.credentialUrl}
                      target="_blank"
                      variant="outline"
                      size="sm"
                      className="w-full justify-center"
                      icon={ExternalLink}
                      iconPosition="right"
                    >
                      Verify Credential
                    </Button>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

