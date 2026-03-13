import PageSection from '../components/PageSection'

function ThrPostPage() {
  return (
    <PageSection
      title="Posko THR"
      description="Kanal pengaduan dan konsultasi THR untuk memastikan hak pekerja terpenuhi tepat waktu."
      stats={[
        { label: 'Aduan THR Masuk', value: '14' },
        { label: 'Aduan Selesai', value: '9' },
      ]}
    />
  )
}

export default ThrPostPage
