document.addEventListener('DOMContentLoaded', () => {
    const jobs = document.querySelectorAll('.job-typing');
    
    // Setelah seluruh animasi selesai, ulangi atau reset animasi
    jobs.forEach((job, index) => {
        job.addEventListener('animationend', () => {
            setTimeout(() => {
                job.style.animation = 'none';  // Hapus animasi
                setTimeout(() => {
                    job.style.animation = '';  // Tambahkan animasi kembali untuk mengulang
                }, 100);
            }, 1000); // Tunggu 1 detik sebelum animasi ulang
        });
    });
});
