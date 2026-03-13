import PageSection from '../components/PageSection'

function CompanyReportFormPage() {
  return (
    <PageSection
      title="Form Pelaporan Perusahaan"
      description="Isi laporan wajib perusahaan secara periodik sebelum batas waktu yang ditentukan."
    >
      <form className="form-grid">
        <label>
          Nama Perusahaan
          <input type="text" placeholder="PT Contoh Anambas" />
        </label>
        <label>
          Jumlah Pekerja
          <input type="number" placeholder="0" />
        </label>
        <label>
          Status Kepesertaan BPJS Ketenagakerjaan
          <select>
            <option>Sudah terdaftar</option>
            <option>Belum terdaftar</option>
          </select>
        </label>
        <label>
          Catatan
          <textarea rows="4" placeholder="Tambahkan keterangan pendukung" />
        </label>
        <button className="primary-btn" type="submit">
          Kirim Laporan
        </button>
      </form>
    </PageSection>
  )
}

export default CompanyReportFormPage
