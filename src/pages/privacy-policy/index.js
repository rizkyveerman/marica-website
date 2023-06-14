import React from "react";
import Image from "next/image";
import backgroundHuge from "../../../public/images/background-huge.png";

const index = () => {
  return (
    <article className="relative">
      <div className="min-h-[200px] bg-cyan-700 flex justify-center items-center flex-col mb-8">
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
        <p className="text-slate-500">
          Informasi yang Kami Kumpulkan: Kami dapat mengumpulkan informasi
          pribadi Anda atau anak Anda yang berusia di bawah 13 tahun, seperti
          nama, alamat email, usia, dan informasi yang diperlukan untuk
          keperluan pendaftaran. Kami juga dapat mengumpulkan informasi
          non-pribadi, seperti data penggunaan, preferensi, dan statistik yang
          terkait dengan penggunaan aplikasi. Penggunaan Informasi: Informasi
          yang kami kumpulkan dapat digunakan untuk tujuan berikut: Menyediakan
          layanan dan konten yang sesuai dengan kebutuhan dan minat Anda atau
          anak Anda. Memahami dan meningkatkan pengalaman pengguna dalam
          menggunakan aplikasi. Mengirimkan pembaruan, pemberitahuan, atau
          informasi terkait dengan aplikasi. Melakukan penelitian, analisis, dan
          pengembangan untuk meningkatkan layanan kami. Mematuhi persyaratan
          hukum yang berlaku dan melindungi hak-hak kami. Bagikan Informasi:
          Kami tidak akan membagikan informasi pribadi Anda atau anak Anda yang
          berusia di bawah 13 tahun kepada pihak ketiga tanpa izin Anda atau
          izin orang tua atau wali. Namun, kami dapat membagikan informasi
          anonim atau tidak dapat diidentifikasi secara pribadi untuk tujuan
          analisis, pemasaran, atau pengembangan aplikasi. Keamanan: Kami
          mengambil langkah-langkah yang wajar untuk melindungi informasi
          pribadi Anda atau anak Anda yang berusia di bawah 13 tahun dari akses,
          penggunaan, atau pengungkapan yang tidak sah. Namun, perlu diingat
          bahwa tidak ada metode transmisi atau penyimpanan data yang sepenuhnya
          aman. Oleh karena itu, kami tidak dapat menjamin keamanan mutlak
          informasi yang Anda berikan. Pengendalian Orang Tua: Kami mengerti
          pentingnya peran orang tua atau wali dalam privasi anak di bawah 13
          tahun. Jika Anda adalah orang tua atau wali dan mengetahui bahwa anak
          Anda yang berusia di bawah 13 tahun memberikan informasi pribadi
          kepada kami tanpa persetujuan Anda, harap hubungi kami segera. Kami
          akan mengambil langkah-langkah untuk menghapus informasi tersebut dari
          catatan kami. Penyimpanan Data: Informasi pribadi Anda atau anak Anda
          yang berusia di bawah 13 tahun akan disimpan selama diperlukan untuk
          tujuan yang dijelaskan dalam Kebijakan Privasi ini, kecuali jika
          diperlukan atau diizinkan oleh hukum untuk periode yang lebih lama.
          Kontak: Jika Anda memiliki pertanyaan, komentar, atau masalah terkait
          Kebijakan Privasi ini, silakan hubungi kami melalui informasi berikut:
          [Alamat Kontak Anda] [Alamat Email Anda] [Nomor Telepon Anda]
        </p>
        <p className="text-slate-500">
          Kami berharap Anda menikmati penggunaan aplikasi Literasi Marica.
          Dengan menggunakan aplikasi ini, Anda menyetujui Kebijakan Privasi
          ini. Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu, dan
          versi terbaru akan diunggah di situs web kami. Kebijakan Privasi
          terakhir diperbarui pada [Tanggal Pembaruan Terakhir].
        </p>
      </div>
    </article>
  );
};

export default index;
