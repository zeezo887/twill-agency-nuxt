import { MediaResource } from '@area17/twill-api-client'


export const generateSrcSet = (url: string): string =>
  [200, 400, 600, 800, 1200, 1600, 2000]
    .map((size) => `${url}&w=${size} ${size}w`)
    .join(',')

export const hasMediaRole = (media: any, role: string) => role in media
export const extractCropFromMediaRole = (
  media: any,
  {
    role,
    crop = 'default',
    index = 0
  }: { role: string; crop?: string; index?: number }
) => {
  if (!hasMediaRole(media, role)) return undefined
  const _media = Array.isArray(media[role])
    ? (media[role][index] as Record<string, MediaResource>)
    : (media[role] as unknown as Record<string, MediaResource>)
  return (
    (_media[crop] as MediaResource) && {
      src: _media[crop].src,
      srcset: generateSrcSet(_media[crop].src),
      alt: _media[crop].alt,
      width: _media[crop].width,
      height: _media[crop].height,
      caption: _media[crop].caption
    }
  )
}

