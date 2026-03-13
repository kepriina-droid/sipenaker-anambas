import PageSection from '../components/PageSection'

function JobTrainingPage() {
  return (
    <PageSection
      title="Pelatihan Kerja"
      description="Informasi jadwal pelatihan, kuota peserta, serta sertifikasi kompetensi kerja."
      stats={[
        { label: 'Pelatihan Aktif', value: '7' },
        { label: 'Peserta Terdaftar', value: '214' },
      ]}
    />
  )
}

export default JobTrainingPage
