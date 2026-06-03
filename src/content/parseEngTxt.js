export const LOCALES = ['en', 'es']

/** Content file paths per locale and platform (mobile | desk). */
export function getContentFilePath(locale, platform) {
  const lang = locale === 'es' ? 'esp' : 'eng'
  const view = platform === 'desk' ? 'desk' : 'mobile'
  return `/${lang}-${view}.txt`
}

/**
 * Resolve active locale: URL ?locale= / ?lang= overrides public/locale.txt.
 */
export async function resolveLocale() {
  const params = new URLSearchParams(window.location.search)
  const fromUrl = (params.get('locale') || params.get('lang') || '').trim().toLowerCase()

  if (fromUrl === 'es' || fromUrl === 'esp') return 'es'
  if (fromUrl === 'en' || fromUrl === 'eng') return 'en'

  try {
    const res = await fetch('/locale.txt')
    if (res.ok) {
      const line = (await res.text()).trim().toLowerCase()
      if (line === 'es' || line === 'esp') return 'es'
      if (line === 'en' || line === 'eng') return 'en'
    }
  } catch {
    /* use default */
  }

  return 'en'
}

/**
 * Parse content txt: key=value lines, # comments ignored.
 */
export function parseEngTxt(text) {
  const data = {}
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq === -1) continue
    const key = trimmed.slice(0, eq).trim()
    const value = trimmed.slice(eq + 1).trim()
    if (key) data[key] = value
  }
  return data
}

/** All keys matching prefix.N (numeric suffix), sorted. */
export function contentList(data, prefix) {
  const re = new RegExp(`^${escapeRegExp(prefix)}\\.(\\d+)$`)
  return Object.keys(data)
    .map((key) => {
      const m = key.match(re)
      return m ? { index: Number(m[1]), value: data[key] } : null
    })
    .filter(Boolean)
    .sort((a, b) => a.index - b.index)
    .map((item) => item.value)
}

/** Objects from prefix.N.field keys, e.g. feature.1.title → [{ title, body }, …]. */
export function contentItems(data, prefix) {
  const re = new RegExp(`^${escapeRegExp(prefix)}\\.(\\d+)\\.(.+)$`)
  const byIndex = new Map()

  for (const [key, value] of Object.entries(data)) {
    const m = key.match(re)
    if (!m) continue
    const index = Number(m[1])
    const field = m[2]
    if (!byIndex.has(index)) byIndex.set(index, {})
    byIndex.get(index)[field] = value
  }

  return [...byIndex.entries()]
    .sort(([a], [b]) => a - b)
    .map(([, item]) => item)
}

/** Nested groups: why.1.point.1 under prefix "why" → [{ title, points: [] }]. */
export function contentWhyItems(data, prefix = 'why') {
  const titleRe = new RegExp(`^${escapeRegExp(prefix)}\\.(\\d+)\\.title$`)
  const pointRe = new RegExp(`^${escapeRegExp(prefix)}\\.(\\d+)\\.point\\.(\\d+)$`)
  const indices = new Set()

  for (const key of Object.keys(data)) {
    if (titleRe.test(key)) indices.add(Number(key.match(titleRe)[1]))
    const pm = key.match(pointRe)
    if (pm) indices.add(Number(pm[1]))
  }

  return [...indices]
    .sort((a, b) => a - b)
    .map((i) => ({
      title: data[`${prefix}.${i}.title`] ?? '',
      points: contentList(data, `${prefix}.${i}.point`),
    }))
}

export function contentSocials(data) {
  const keys = ['tiktok', 'youtube', 'facebook', 'instagram']
  return keys.map((key) => ({
    key,
    name: data[`social.${key}.name`] ?? '',
    href: data[`social.${key}.href`] ?? '#',
    label: data[`social.${key}.label`] ?? key,
  }))
}

export function contentBandStats(data) {
  return contentItems(data, 'band.stat')
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
