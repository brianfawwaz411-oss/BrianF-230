Ini adalah tugas uts pemograman berbasis platfrom, pada projek kali ini saya membuat web portofolio dengan mengunakan 3 search code yaitu html, css, js.
1. Pada Html sendiri digunakan sebagai HTML (Struktur dan Konten)

HTML adalah kerangka atau fondasi dari situs Anda. Fungsinya adalah untuk menempatkan semua konten dan memberi tahu browser "ini apa".
<head>: Menyimpan meta-informasi seperti judul tab (<title>Brian Fawwaz...), dan tautan ke file lain (<link>).
<body>: Membungkus semua konten yang terlihat oleh pengunjung.
<header>, <nav>, <footer>: Mendefinisikan bagian-bagian semantik seperti navigasi utama dan footer di bagian bawah.
<div>: Digunakan sebagai "kotak" atau container utama untuk mengatur tata letak (contoh: div.container, div.row, div.col-lg-7).
<section>: Membagi halaman Anda menjadi bagian-bagian yang jelas (contoh: <section id="home">, <section id="about">).
<h1>, <h2>, <p>, <b>: Ini adalah konten teks Anda. <h1> untuk judul utama, <p> untuk paragraf, <b> untuk teks tebal.
<img>: Menampilkan gambar (contoh: foto profil Anda dan logo Unesa).
<a>: Membuat tautan/hyperlink (contoh: menu navigasi Anda ke #about atau tautan ke media sosial Anda).
<ul> dan <li>: Membuat daftar poin-poin (contoh: daftar pengalaman kerja dan organisasi Anda).
Singkatnya: HTML adalah apa kontennya (sebuah judul, sebuah gambar, sebuah paragraf).

2. CSS (Tampilan dan Desain) 
   
CSS adalah penata rias situs Anda. Fungsinya adalah mengambil kerangka HTML dan membuatnya terlihat menarik secara visual.
File Eksternal (<link href=...>): Sebagian besar CSS Anda dimuat dari luar:
bootstrap.css: Ini adalah framework utama yang Anda gunakan. CSS inilah yang mengatur sistem grid (tata letak kolom seperti col-lg-5 dan col-lg-7), membuat tombol, dan mengatur default styling navbar.
style-wpss.css, flexslider.css, dll: Ini adalah stylesheet tema yang memberi Anda skema warna, jenis font, dan gaya untuk komponen spesifik seperti slider.
style.css: Ini adalah file milik Anda. Di sinilah Anda akan menulis kode untuk mengubah warna, ukuran font, atau layout yang tidak sesuai dengan default tema.
Atribut style="": Ini adalah inline CSS. Anda menggunakannya di beberapa tempat (misalnya style="text-align: center;" di footer) untuk memberikan gaya spesifik langsung ke satu elemen.
Singkatnya: CSS adalah bagaimana tampilan kontennya (berwarna biru, di tengah, atau berdampingan).

3. JavaScript (Interaktivitas dan Fungsi) 
   
JS adalah otak yang membuat situs Anda "hidup" dan interaktif. Fungsinya adalah melakukan sesuatu atau merespons tindakan pengguna.
File Eksternal (<script src=...>): Semua fungsionalitas Anda dimuat di bagian bawah:
jquery.js: Pustaka dasar yang mempermudah penulisan kode JS dan banyak digunakan oleh plugin lain.
bootstrap.min.js: Ini adalah JS yang membuat komponen Bootstrap berfungsi. Contoh terpentingnya adalah membuat tombol "hamburger" (menu mobile) bisa diklik untuk membuka dan menutup navigasi.
jquery.prettyPhoto.js: Ini adalah plugin yang Anda panggil di skrip inline. Fungsinya untuk membuat efek lightbox (gambar membesar saat diklik).
custom.js & script.js: File-file ini kemungkinan berisi kode untuk fungsionalitas kecil, seperti membuat tombol "Scroll to Top" (div.dmtop) muncul saat halaman di-scroll ke bawah dan kembali ke atas saat diklik.

Singkatnya: JS adalah apa yang dilakukan kontennya (menu yang terbuka, slider yang bergeser, tombol yang menggulir).

Pada search kode kali ini saya menampilkan halaman utama, perkenalan diri, work experiance, pengalaman organisasi dan volunteer, dan prestasi atau capaian.
disini saya tidak lupa juga menampilkan berbagai link media sosial dan berbagai link lainya

Kesimpulan
Secara keseluruhan, saya telah membangun struktur HTML yang solid untuk portofolio single-page dari awal. saya telah membangun dengan cerdas mengintegrasikan framework CSS (Bootstrap) dan berbagai pustaka JavaScript eksternal dari resource UNESA untuk menambahkan styling dan fungsionalitas yang kaya. Hasilnya adalah halaman yang terstruktur dengan baik, responsif, dan interaktif.

NB : Link Youtube : https://youtu.be/fWl_apjkGXs?si=E3hfP4fn8GUULMB-
