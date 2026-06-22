const p = new URLSearchParams(location.search);
const i = parseInt(p.get('id') || 0);
const g = guruData[i];

nama.textContent = g.nama;

// Mengatur output teks HTML agar mendukung font besar dan ikon kalender
tugas.innerHTML = g.tugas.map(t => `
<div class='card'>
<b>${t.nama}</b>
<div class="tanggal-tugas">🗓️ ${t.tanggal}</div>
</div>
`).join('');

// --- LOGIKA NAVIGASI PRESENTASI (AMAN & ESTETIS) ---

// 1. Pengaturan tombol Previous (Halaman Pertama Guru)
if (i === 0) {
    // Menghilangkan total tombol Previous di halaman pertama agar tidak bisa diklik
    prev.style.display = 'none';
} else {
    prev.style.display = 'inline-block'; // Memastikan tampil di halaman selain halaman pertama
    prev.href = 'guru.html?id=' + (i - 1);
}

// 2. Pengaturan tombol Next / End (Halaman Terakhir Guru)
if (i === guruData.length - 1) {
    // Jika sudah di akhir, tombol berubah menjadi "End" dan kembali ke menu utama jika diklik
    next.textContent = 'End ⏹️';
    next.href = 'index.html';
} else {
    next.textContent = 'Next ▶';
    next.href = 'guru.html?id=' + (i + 1);
}
