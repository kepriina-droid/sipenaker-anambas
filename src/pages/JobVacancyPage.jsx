import PageSection from '../components/PageSection'

function JobVacancyPage() {
  return (
    <PageSection
      title="Lowongan Kerja"
      description="Publikasi lowongan kerja resmi dari perusahaan yang telah diverifikasi dinas."
      stats={[
        { label: 'Lowongan Baru Minggu Ini', value: '53' },
        { label: 'Posisi Paling Dicari', value: 'Operator Produksi' },
      ]}
    />
  )
}

export default JobVacancyPage
