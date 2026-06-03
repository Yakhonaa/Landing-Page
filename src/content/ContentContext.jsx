import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import {
  contentBandStats,
  contentItems,
  contentList,
  contentSocials,
  contentWhyItems,
  getContentFilePath,
  parseEngTxt,
  resolveLocale,
} from './parseEngTxt'

const ContentContext = createContext(null)

async function loadContentFile(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to load ${url} (${res.status})`)
  return parseEngTxt(await res.text())
}

export function ContentProvider({ children, platform }) {
  const [raw, setRaw] = useState(null)
  const [locale, setLocale] = useState('en')
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const activeLocale = await resolveLocale()
        if (cancelled) return

        setLocale(activeLocale)
        document.documentElement.lang = activeLocale === 'es' ? 'es' : 'en'

        const url = getContentFilePath(activeLocale, platform)
        const data = await loadContentFile(url)
        if (!cancelled) setRaw(data)
      } catch (err) {
        if (!cancelled) setError(err)
      }
    }

    load()

    return () => {
      cancelled = true
    }
  }, [platform])

  const api = useMemo(() => {
    const data = raw ?? {}
    const t = (key, fallback = '') => data[key] ?? fallback

    return {
      ready: raw !== null,
      locale,
      platform,
      error,
      t,
      list: (prefix) => contentList(data, prefix),
      items: (prefix) => contentItems(data, prefix),
      why: () => contentWhyItems(data),
      socials: () => contentSocials(data),
      bandStats: () => contentBandStats(data),
      popularJobs: () => contentList(data, 'popular_job'),
      features: () =>
        contentItems(data, 'feature').map((f) => ({
          title: f.title ?? '',
          body: f.body ?? '',
        })),
    }
  }, [raw, error, platform, locale])

  return (
    <ContentContext.Provider value={api}>{children}</ContentContext.Provider>
  )
}

export function useContent() {
  const ctx = useContext(ContentContext)
  if (!ctx) {
    throw new Error('useContent must be used within ContentProvider')
  }
  return ctx
}
