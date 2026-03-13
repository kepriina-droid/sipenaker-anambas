import FeatureList from '../components/FeatureList'
import PageSection from '../components/PageSection'

function LaborUnionPage() {
  return (
    <PageSection
      title="Serikat/Federasi Buruh"
      description="Data organisasi buruh terdaftar, masa kepengurusan, dan area pendampingan pekerja."
    >
      <FeatureList
        items={[
          'Daftar serikat aktif per sektor industri',
          'Jadwal forum dialog tripartit',
          'Kontak pengurus untuk mediasi cepat',
        ]}
      />
    </PageSection>
  )
}

export default LaborUnionPage
