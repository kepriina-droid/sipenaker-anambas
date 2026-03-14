const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

function getSupabaseHeaders(extraHeaders = {}) {
  return {
    apikey: supabaseAnonKey,
    Authorization: `Bearer ${supabaseAnonKey}`,
    ...extraHeaders,
  }
}

async function parseSupabaseError(response) {
  let payload = null

  try {
    payload = await response.json()
  } catch {
    payload = null
  }

  const message =
    payload?.message || payload?.error_description || payload?.error || 'Terjadi kesalahan saat menghubungi Supabase.'

  throw new Error(message)
}

async function insertRow(table, row) {
  if (!isSupabaseConfigured) {
    throw new Error('Supabase belum dikonfigurasi. Pastikan VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY tersedia.')
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/${table}`, {
    method: 'POST',
    headers: getSupabaseHeaders({
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    }),
    body: JSON.stringify(row),
  })

  if (!response.ok) {
    await parseSupabaseError(response)
  }

  const data = await response.json()
  return data?.[0]
}

async function uploadFile(bucket, objectPath, file) {
  if (!isSupabaseConfigured) {
    throw new Error('Supabase belum dikonfigurasi. Pastikan VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY tersedia.')
  }

  const response = await fetch(`${supabaseUrl}/storage/v1/object/${bucket}/${objectPath}`, {
    method: 'POST',
    headers: getSupabaseHeaders({
      'Content-Type': file.type || 'application/octet-stream',
      'x-upsert': 'false',
    }),
    body: file,
  })

  if (!response.ok) {
    await parseSupabaseError(response)
  }

  return response.json()
}

export { isSupabaseConfigured, insertRow, uploadFile }
