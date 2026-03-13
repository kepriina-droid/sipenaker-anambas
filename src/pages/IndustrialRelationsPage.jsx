import FeatureList from '../components/FeatureList'
import PageSection from '../components/PageSection'

function IndustrialRelationsPage() {
  return (
    <PageSection
      title="Perselisihan Hubungan Industrial"
      description="Pelaporan, pendataan perkara, dan monitoring proses mediasi antara pekerja dengan perusahaan."
    >
      <FeatureList
        items={[
          'Pengajuan aduan PHI secara online',
          'Jadwal mediasi dan notulen digital',
          'Status penyelesaian perkara per tahap',
        ]}
      />
    </PageSection>
  )
}

export default IndustrialRelationsPage
