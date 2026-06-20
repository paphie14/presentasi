const p = new URLSearchParams(location.search);
const i = parseInt(p.get('id') || 0);
const g = guruData[i];

nama.textContent = g.nama;

// Mengubah penataan output HTML untuk mendukung mode presentasi rata tengah
tugas.innerHTML = g.tugas.map(t => `
<div class='card'>
<b>${t.nama}</b>
<div class="tanggal-tugas">🗓️ ${t.tanggal}</div>
</div>
`).join('');

prev.href = 'guru.html?id=' + ((i - 1 + guruData.length) % guruData.length);
next.href = 'guru.html?id=' + ((i + 1) % guruData.length);
