import FeatureList from '../components/FeatureList'
import PageSection from '../components/PageSection'

const services = [
  'Layanan pelaporan ketenagakerjaan terpadu',
  'Pemantauan lowongan dan pelatihan kerja',
  'Pengelolaan aduan Perselisihan Hubungan Industrial',
  'Informasi Posko THR untuk pekerja',
]

function HomePage() {
  return (
    <PageSection
      title="Beranda"
      description="Portal layanan ketenagakerjaan digital untuk perusahaan, pekerja, dan admin dinas di Kabupaten Kepulauan Anambas."
      stats={[
        { label: 'Perusahaan Terdaftar', value: '1.248' },
        { label: 'Lowongan Aktif', value: '184' },
        { label: 'Pelatihan Berjalan', value: '27' },
      ]}
    >
      <FeatureList items={services} />
    </PageSection>
  )
}

export default HomePage
