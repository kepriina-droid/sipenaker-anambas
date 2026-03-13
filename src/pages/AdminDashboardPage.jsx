import PageSection from '../components/PageSection'

function AdminDashboardPage() {
  return (
    <PageSection
      title="Dashboard Admin"
      description="Pantau statistik layanan, verifikasi pelaporan, dan kelola tindak lanjut aduan ketenagakerjaan."
      stats={[
        { label: 'Laporan Masuk Hari Ini', value: '45' },
        { label: 'Aduan Menunggu Verifikasi', value: '8' },
        { label: 'Perusahaan Belum Lapor', value: '31' },
      ]}
    />
  )
}

export default AdminDashboardPage
