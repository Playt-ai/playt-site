'use client';

import Header from '../components/Header';
import Link from 'next/link';

export default function EULA() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-playt-purple/5 to-white">
      <Header />

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-2">End User License Agreement</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Acceptance of Terms</h2>
              <p>
                By accessing or using Playt (the “Service”), you agree to be bound by this End User License
                Agreement (this “EULA”). If you do not agree, do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">2. License Grant</h2>
              <p>
                Subject to your compliance with this EULA, Playt grants you a limited, non-exclusive,
                non-transferable, non-sublicensable license to access and use the Service for your internal
                business purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Use Restrictions</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>No reverse engineering, decompiling, or disassembly of the Service.</li>
                <li>No circumventing security or access controls.</li>
                <li>No reselling, leasing, or sublicensing the Service to third parties.</li>
                <li>No use that violates applicable laws or infringes third-party rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Accounts and Security</h2>
              <p>
                You are responsible for maintaining the confidentiality of your credentials and for all activity under
                your account. Notify us immediately of any unauthorized use or security incident.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Data and Privacy</h2>
              <p>
                Your use of the Service is also governed by our Privacy Policy. We process data to provide and improve
                the Service, and to support features such as analytics and integrations.
              </p>
              <p className="mt-2">
                Please review our <Link href="/privacy" className="text-playt-purple hover:underline">Privacy Policy</Link> for details.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Third-Party Services</h2>
              <p>
                The Service may integrate with third-party platforms (e.g., POS providers). Your use of such
                integrations may be subject to those third parties’ terms and policies. Playt is not responsible for
                third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Intellectual Property</h2>
              <p>
                Playt and its licensors retain all right, title, and interest in and to the Service, including all
                related intellectual property rights. Except for the license granted herein, no rights are transferred.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">8. Termination</h2>
              <p>
                We may suspend or terminate your access to the Service for any violation of this EULA. Upon
                termination, your license to use the Service will cease immediately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">9. Disclaimers</h2>
              <p>
                The Service is provided “as is” and “as available” without warranties of any kind, whether express,
                implied, or statutory. To the maximum extent permitted by law, Playt disclaims all warranties,
                including merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">10. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Playt shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, or any loss of profits, revenues, data, or goodwill,
                arising out of or related to your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">11. Changes to this EULA</h2>
              <p>
                We may update this EULA from time to time. Changes are effective upon posting. Your continued use of
                the Service constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">12. Contact</h2>
              <p>
                Questions about this EULA? Contact us at <a href="mailto:support@playt.ai" className="text-playt-purple hover:underline">support@playt.ai</a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}


