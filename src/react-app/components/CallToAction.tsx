import { Smartphone, Star } from 'lucide-react';

export default function CallToAction() {
  return (
    <section id="download" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-[3rem] p-12 md:p-16 shadow-2xl overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center">
            {/* Icon */}
            <div className="inline-flex p-6 bg-white/20 rounded-3xl mb-8 backdrop-blur-sm">
              <Smartphone className="w-16 h-16 text-white" />
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Pronto para Transformar Sua Rotina?
            </h2>

            {/* Description */}
            <p className="text-xl text-emerald-50 mb-10 max-w-2xl mx-auto">
              Junte-se a milhares de usuários que já estão alcançando seus objetivos com o Momentus
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                  <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                  <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                  <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                  <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                </div>
                <p className="text-white font-semibold">Avaliação 5.0</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-black text-white mb-2">10k+</p>
                <p className="text-emerald-50">Downloads</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-black text-white mb-2">95%</p>
                <p className="text-emerald-50">Satisfação</p>
              </div>
            </div>

            {/* Download button */}
            <a 
              href="https://play.google.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-6 bg-white text-emerald-600 text-xl font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Disponível no Google Play
            </a>

            <p className="text-emerald-100 mt-6">Versão Android • Gratuito</p>
          </div>
        </div>
      </div>
    </section>
  );
}
