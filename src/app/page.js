'use client'
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaUserTie, FaBookOpen, FaHeart, FaUsers, FaStar, FaCalendarAlt, FaArrowUp } from "react-icons/fa";

export default function IsraMiraj() {
  return (
    <div className="min-h-screen bg-purple-50 relative">
      <Head>
        <title>Undangan Kajian Isra' Mi'raj - Menyibak Rahsia Perjalanan Agung</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </Head>

      {/* Header Section */}
      <header className="relative flex flex-col justify-center items-center h-screen text-center bg-[url('/images/mosque-silhouette.png')] bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-purple-300 opacity-75"></div>

        {/* Efek Bintang */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0 }}
            style={{ top: '10%', left: '20%' }}
            className="absolute"
          >
            <FaStar className="text-yellow-400 text-2xl rounded-full border-2 border-yellow-400 p-1" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            style={{ top: '15%', left: '80%' }}
            className="absolute"
          >
            <FaStar className="text-yellow-400 text-xl " />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            style={{ top: '30%', left: '50%' }}
            className="absolute"
          >
            <FaStar className="text-yellow-400 text-3xl " />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
            transition={{ duration: 3.2, repeat: Infinity, delay: 0.8 }}
            style={{ top: '40%', left: '30%' }}
            className="absolute"
          >
            <FaStar className="text-yellow-400 text-xl" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
            transition={{ duration: 3.8, repeat: Infinity, delay: 1.2 }}
            style={{ top: '25%', left: '60%' }}
            className="absolute"
          >
            <FaStar className="text-yellow-400 text-2xl" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
            transition={{ duration: 4.2, repeat: Infinity, delay: 0.3 }}
            style={{ top: '50%', left: '15%' }}
            className="absolute"
          >
            <FaStar className="text-yellow-400 text-xl " />
          </motion.div>
        </div>

        {/* Konten Header */}
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          {/* Animasi Teks Bismillah */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6"
          >
            <div className="text-4xl md:text-6xl font-bold text-purple-800">
              بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
            </div>
          </motion.div>
          {/* Animasi Judul */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-purple-900 mb-4"
          >
            UNDANGAN KAJIAN ISRA' MI'RAJ
          </motion.h1>
          {/* Animasi Kutipan */}
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="text-xl text-purple-700 font-arabic"
          >
            "سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى"
          </motion.p>
        </div>

        {/* Elemen Dekoratif SVG Wave */}
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#E9D8FD"
            fillOpacity="1"
            d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,122.7C672,107,768,117,864,138.7C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </motion.svg>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Detail Acara & Pemateri */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Detail Acara */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-purple-100 p-8 rounded-2xl hover:bg-purple-200 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">Detail Acara</h2>
            <div className="space-y-4 text-purple-800">
              <div className="flex items-center">
                <i className="fas fa-calendar-alt text-yellow-400 mr-4 text-xl rounded-full border-2 border-yellow-400 p-1"></i>
                <div>
                  <p className="font-bold">Hari/Tanggal</p>
                  <p>Sabtu, 8 Februari 2024</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-clock text-yellow-400 mr-4 text-xl rounded-full border-2 border-yellow-400 p-1"></i>
                <div>
                  <p className="font-bold">Waktu</p>
                  <p>Ba'da Maghrib - Selesai</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-yellow-400 mr-4 text-xl rounded-full border-2 border-yellow-400 p-1"></i>
                <div>
                  <p className="font-bold">Tempat</p>
                  <p>SMK INFOKOM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pemateri */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-purple-100 p-8 rounded-2xl hover:bg-purple-200 transition-all duration-300"
          >

            <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">Pemateri</h2>
            <div className="flex items-center mb-4">
              <FaUserTie className="text-yellow-400 text-5xl rounded-full border-2 border-yellow-400 p-2" />
              <div className="ml-4">
                <h3 className="text-xl font-bold text-purple-800">Siti robiatul adawiyah</h3>
                <p className="text-purple-700">Siswi XII RPL 1</p>
              </div>
            </div>
            <p className="text-purple-800">
              Kajian spesial menyambut peringatan Isra' Mi'raj dengan tema{" "}
              <em>"Hikmah dan Makna di Balik Perjalanan Agung Nabi Muhammad SAW"</em>.
            </p>
          </motion.div>
        </div>

        {/* Tentang Kajian */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-purple-100 p-8 rounded-2xl hover:bg-purple-200 transition-all duration-300 mb-12"
        >
          <div className="flex justify-center mb-4">
            <FaBookOpen className="text-4xl text-yellow-400 rounded-full border-2 border-yellow-400 p-2" />
          </div>
          <h2 className="text-3xl font-bold text-purple-700 mb-4 text-center">Tentang Kajian</h2>
          <p className="text-center text-purple-800">
            Kajian ini adalah kesempatan untuk menyelami sejarah dan makna spiritual di balik peristiwa Isra' Mi'raj.
            Bersama Ustadz Abdullah Al-Faruq, kita akan mengeksplorasi perjalanan agung Nabi Muhammad SAW dan menemukan
            pelajaran berharga untuk kehidupan sehari-hari.
          </p>
        </motion.section>

        {/* Ayat Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-purple-100 p-8 rounded-2xl hover:bg-purple-200 transition-all duration-300 mb-12 text-center"
        >
          <div className="flex justify-center mb-4">
            <FaStar className="text-4xl text-yellow-400 rounded-full border-2 border-yellow-400 p-2" />
          </div>
          <p className="text-3xl leading-relaxed text-purple-700 font-arabic">
            وَمَا جَعَلْنَا الرُّؤْيَا الَّتِي أَرَيْنَاكَ إِلَّا فِتْنَةً لِّلنَّاسِ
          </p>
          <p className="mt-4 text-purple-800">(QS. Al-Isra': 60)</p>
        </motion.div>

        {/* Jadwal Acara */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-purple-100 p-8 rounded-2xl hover:bg-purple-200 transition-all duration-300 mb-12"
        >
          <section className="relative mb-16">
            <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">
              Jadwal Acara
            </h2>

            <div className="max-w-3xl mx-auto">
              <ol className="relative border-l border-purple-300">
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-yellow-400 rounded-full mt-1.5 -left-1.5"></div>
                  <time className="text-lg font-semibold text-yellow-400">08.00 - 08.30</time>
                  <h3 className="text-xl font-semibold mt-1 text-purple-800">
                    Registrasi Peserta
                  </h3>
                </li>
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-yellow-400 rounded-full mt-1.5 -left-1.5"></div>
                  <time className="text-lg font-semibold text-yellow-400">08.30 - 09.00</time>
                  <h3 className="text-xl font-semibold mt-1 text-purple-800">
                    Pembukaan dan Tilawah
                  </h3>
                </li>
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-yellow-400 rounded-full mt-1.5 -left-1.5"></div>
                  <time className="text-lg font-semibold text-yellow-400">09.00 - 11.30</time>
                  <h3 className="text-xl font-semibold mt-1 text-purple-800">
                    Materi Inti: Keutamaan Kejujuran
                  </h3>
                  <p className="mt-2 text-purple-800">
                    - Peristiwa Isra Miraj dalam Islam<br />
                    - Hikmah dan pelajaran dari Isra Miraj<br />
                    - Kejadian luar biasa dalam perjalanan Isra Miraj
                  </p>

                </li>
              </ol>
            </div>
          </section>
        </motion.div>

        {/* Mengapa Hadir? Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-purple-100 p-8 rounded-2xl hover:bg-purple-200 transition-all duration-300 mb-12"
        >
          <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">
            Mengapa Hadir?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center transition transform duration-300 hover:scale-105">
              <FaBookOpen className="text-4xl text-yellow-400 rounded-full border-2 border-yellow-400 p-2 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-purple-800">
                Ilmu Mendalam
              </h3>
              <p className="text-purple-800">
                Pelajari makna dan hikmah di balik perjalanan agung Isra' Mi'raj dengan pendekatan yang mendalam dan menyentuh hati.
              </p>
            </div>
            <div className="flex flex-col items-center text-center transition transform duration-300 hover:scale-105">
              <FaHeart className="text-4xl text-yellow-400 rounded-full border-2 border-yellow-400 p-2 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-purple-800">
                Pengalaman Spiritual
              </h3>
              <p className="text-purple-800">
                Rasakan kedamaian dan inspirasi melalui tilawah, doa, dan renungan yang menyemarakkan jiwa.
              </p>
            </div>
            <div className="flex flex-col items-center text-center transition transform duration-300 hover:scale-105">
              <FaUsers className="text-4xl text-yellow-400 rounded-full border-2 border-yellow-400 p-2 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-purple-800">
                Komunitas Bersatu
              </h3>
              <p className="text-purple-800">
                Bergabung dengan para pencari ilmu dan peraih inspirasi dalam suasana keimanan yang harmonis.
              </p>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <FaHeart className="text-4xl text-yellow-400 rounded-full border-2 border-yellow-400 p-2" />
          </div>
          <h2 className="text-3xl font-bold text-purple-700 mb-4">
            Bergabunglah Bersama Kami!
          </h2>
          <p className="text-purple-800 mb-8">
            Jangan lewatkan kesempatan untuk meraih ilmu dan pengalaman spiritual yang mendalam. Tempat terbatas!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg"
            onClick={() => window.open('https://wa.me/6283878732395', '_blank')}
          >
            Daftar via WhatsApp
          </motion.button>

        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-200 mt-12 py-8 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-purple-800">
            "Barangsiapa menempuh jalan untuk mencari ilmu, maka Allah akan mudahkan baginya jalan menuju surga" (HR. Muslim)
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <i className="fab fa-whatsapp text-2xl text-yellow-400 hover:text-yellow-500 rounded-full border-2 border-yellow-400 p-2 cursor-pointer transition-all"></i>
            <i className="fab fa-telegram text-2xl text-yellow-400 hover:text-yellow-500 rounded-full border-2 border-yellow-400 p-2 cursor-pointer transition-all"></i>
            <i className="fas fa-envelope text-2xl text-yellow-400 hover:text-yellow-500 rounded-full border-2 border-yellow-400 p-2 cursor-pointer transition-all"></i>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-4 right-4 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg z-50"
      >
        <FaArrowUp className="text-yellow-400 text-xl" />
      </motion.button>
    </div>
  );
}
