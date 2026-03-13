import PageSection from '../components/PageSection'

function LoginPage() {
  return (
    <PageSection
      title="Login"
      description="Masuk ke sistem menggunakan akun perusahaan, petugas admin, atau operator dinas."
    >
      <form className="form-grid">
        <label>
          Email
          <input type="email" placeholder="nama@perusahaan.id" />
        </label>
        <label>
          Kata Sandi
          <input type="password" placeholder="••••••••" />
        </label>
        <button className="primary-btn" type="submit">
          Masuk
        </button>
      </form>
    </PageSection>
  )
}

export default LoginPage
