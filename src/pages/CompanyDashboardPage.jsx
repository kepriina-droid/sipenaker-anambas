import PageSection from '../components/PageSection'

function CompanyDashboardPage() {
  return (
    <PageSection
      title="Dashboard Perusahaan"
      description="Ringkasan kepatuhan pelaporan, data tenaga kerja, serta notifikasi dari dinas."
      stats={[
        { label: 'Laporan Bulan Ini', value: '12/12' },
        { label: 'Karyawan Aktif', value: '326' },
        { label: 'Tindakan Perlu Follow-up', value: '2' },
      ]}
    />
  )
}

export default CompanyDashboardPage
