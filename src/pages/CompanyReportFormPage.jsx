import { useState } from 'react'
import PageSection from '../components/PageSection'
import { insertRow, uploadFile } from '../lib/supabase'

const initialForm = {
  companyName: '',
  workerCount: '',
  bpjsStatus: 'Sudah terdaftar',
  notes: '',
}

function CompanyReportFormPage() {
  const [formData, setFormData] = useState(initialForm)
  const [supportingDocument, setSupportingDocument] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleFileChange = (event) => {
    const file = event.target.files?.[0] ?? null
    setSupportingDocument(file)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSuccessMessage('')
    setErrorMessage('')

    try {
      const company = await insertRow('companies', {
        name: formData.companyName,
      })

      const report = await insertRow('company_reports', {
        company_id: company.id,
        worker_count: Number(formData.workerCount),
        bpjs_status: formData.bpjsStatus,
        notes: formData.notes,
      })

      if (supportingDocument) {
        const fileExtension = supportingDocument.name.split('.').pop()
        const safeCompanyName = formData.companyName.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-')
        const uniqueFileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExtension}`
        const objectPath = `${safeCompanyName || 'company'}/${uniqueFileName}`

        await uploadFile('company-documents', objectPath, supportingDocument)

        await insertRow('uploaded_documents', {
          company_report_id: report.id,
          bucket_name: 'company-documents',
          file_name: supportingDocument.name,
          file_path: objectPath,
          mime_type: supportingDocument.type || 'application/octet-stream',
          file_size: supportingDocument.size,
        })
      }

      setSuccessMessage('Laporan berhasil dikirim. Data perusahaan dan dokumen pendukung sudah tersimpan.')
      setFormData(initialForm)
      setSupportingDocument(null)
      event.target.reset()
    } catch (error) {
      setErrorMessage(`Laporan belum berhasil dikirim. ${error.message}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageSection
      title="Form Pelaporan Perusahaan"
      description="Isi laporan wajib perusahaan secara periodik sebelum batas waktu yang ditentukan."
    >
      <form className="form-grid" onSubmit={handleSubmit}>
        {successMessage ? <p className="form-feedback form-feedback-success">{successMessage}</p> : null}
        {errorMessage ? <p className="form-feedback form-feedback-error">{errorMessage}</p> : null}

        <label>
          Nama Perusahaan
          <input
            name="companyName"
            type="text"
            placeholder="PT Contoh Anambas"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Jumlah Pekerja
          <input
            name="workerCount"
            type="number"
            min="0"
            placeholder="0"
            value={formData.workerCount}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Status Kepesertaan BPJS Ketenagakerjaan
          <select name="bpjsStatus" value={formData.bpjsStatus} onChange={handleChange}>
            <option>Sudah terdaftar</option>
            <option>Belum terdaftar</option>
          </select>
        </label>
        <label>
          Catatan
          <textarea
            name="notes"
            rows="4"
            placeholder="Tambahkan keterangan pendukung"
            value={formData.notes}
            onChange={handleChange}
          />
        </label>
        <label>
          Dokumen Pendukung (Opsional)
          <input
            name="supportingDocument"
            type="file"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          />
        </label>
        <button className="primary-btn" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Mengirim...' : 'Kirim Laporan'}
        </button>
      </form>
    </PageSection>
  )
}

export default CompanyReportFormPage
