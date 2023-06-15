import React from "react";
import Image from "next/image";
import backgroundHuge from "../../../public/images/background-huge.png";

const index = () => {
  return (
    <article className="relative">
      <div className="my-0 mx-auto min-h-[200px] max-w-2xl bg-cyan-700 bg-gradient-to-t from-cyan-500 to-cyan-300 flex justify-center items-center flex-col m-2 rounded-2xl">
        <h1 className="text-white">Privacy Policy</h1>
        <div className="w-1/5 h-[1px] my-2"></div>
        <p className="text-white">Kebijakan Privasi</p>
      </div>
      <div className="max-w-2xl text-justify p-4 my-0 mx-auto z-50">
        <p className="text-slate-500">
          Terima kasih telah menggunakan aplikasi Literasi Marica. Kami sangat
          menghargai privasi Anda, terutama ketika Anda atau anak Anda yang
          berusia di bawah 13 tahun menggunakan aplikasi ini. Dalam Kebijakan
          Privasi ini, kami menjelaskan bagaimana kami mengumpulkan,
          menggunakan, dan melindungi informasi pribadi Anda dan anak Anda yang
          berusia di bawah 13 tahun.
        </p>
        <h4 className="mt-4">Informasi yang Kami Kumpulkan: </h4>
        <p className="text-slate-500">
          Kami dapat mengumpulkan informasi pribadi Anda atau anak Anda yang
          berusia di bawah 13 tahun, seperti nama, alamat email, usia, dan
          informasi yang diperlukan untuk keperluan pendaftaran. Kami juga dapat
          mengumpulkan informasi non-pribadi, seperti data penggunaan,
          preferensi, dan statistik yang terkait dengan penggunaan aplikasi.
          Penggunaan Informasi: Informasi yang kami kumpulkan dapat digunakan
          untuk tujuan berikut: Menyediakan layanan dan konten yang sesuai
          dengan kebutuhan dan minat Anda atau anak Anda. Memahami dan
          meningkatkan pengalaman pengguna dalam menggunakan aplikasi.
          Mengirimkan pembaruan, pemberitahuan, atau informasi terkait dengan
          aplikasi. Melakukan penelitian, analisis, dan pengembangan untuk
          meningkatkan layanan kami. Mematuhi persyaratan hukum yang berlaku dan
          melindungi hak-hak kami. Bagikan Informasi: Kami tidak akan membagikan
          informasi pribadi Anda atau anak Anda yang berusia di bawah 13 tahun
          kepada pihak ketiga tanpa izin Anda atau izin orang tua atau wali.
          Namun, kami dapat membagikan informasi anonim atau tidak dapat
          diidentifikasi secara pribadi untuk tujuan analisis, pemasaran, atau
          pengembangan aplikasi.
        </p>
        <h4 className="mt-4">Keamanan: </h4>
        <p className="text-slate-500">
          Kami mengambil langkah-langkah yang wajar untuk melindungi informasi
          pribadi Anda atau anak Anda yang berusia di bawah 13 tahun dari akses,
          penggunaan, atau pengungkapan yang tidak sah. Namun, perlu diingat
          bahwa tidak ada metode transmisi atau penyimpanan data yang sepenuhnya
          aman. Oleh karena itu, kami tidak dapat menjamin keamanan mutlak
          informasi yang Anda berikan.
        </p>
        <h4 className="mt-4">Pengendalian Orang Tua:</h4>
        <p className="text-slate-500">
          Kami mengerti pentingnya peran orang tua atau wali dalam privasi anak
          di bawah 13 tahun. Jika Anda adalah orang tua atau wali dan mengetahui
          bahwa anak Anda yang berusia di bawah 13 tahun memberikan informasi
          pribadi kepada kami tanpa persetujuan Anda, harap hubungi kami segera.
          Kami akan mengambil langkah-langkah untuk menghapus informasi tersebut
          dari catatan kami. Penyimpanan Data: Informasi pribadi Anda atau anak
          Anda yang berusia di bawah 13 tahun akan disimpan selama diperlukan
          untuk tujuan yang dijelaskan dalam Kebijakan Privasi ini, kecuali jika
          diperlukan atau diizinkan oleh hukum untuk periode yang lebih lama.
        </p>
        <div className="p-4 bg-blue-100 border-blue-400 border-2 rounded-xl my-4">
          <p className="font-bold">Kontak:</p>
          <p className="text-slate-600 text-sm">
            Jika Anda memiliki pertanyaan, komentar, atau masalah terkait
            Kebijakan Privasi ini, silakan hubungi kami melalui informasi
            berikut:
          </p>
          <div>
            <div>
              <p className="w-20 text-slate-600 font-bold">Alamat</p>
              <p className="text-slate-500 text-sm">
                Jl. Munggur No.114 B, Sanggrahan, Condongcatur, Kec. Depok,
                Kabupaten Sleman, Daerah Istimewa Yogyakarta 55283
              </p>
            </div>
            <div>
              <p className="w-20 text-slate-600 font-bold">Telepon</p>
              <p className="text-slate-500 text-sm">+62 822-2149-1429</p>
            </div>
            <div>
              <p className="w-20 text-slate-600 font-bold">Email</p>
              <p className="text-slate-500 text-sm">sebangku.games@gmail.com</p>
            </div>
          </div>
        </div>

        <p className="text-slate-500">
          Kami berharap Anda menikmati penggunaan aplikasi Literasi Marica.
          Dengan menggunakan aplikasi ini, Anda menyetujui Kebijakan Privasi
          ini. Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu, dan
          versi terbaru akan diunggah di situs web kami. Kebijakan Privasi
          terakhir diperbarui pada 14 Juni 2023.
        </p>
      </div>
    </article>
  );
};

export default index;
