export interface SeoConfig {
  tags: {
    title?: string
    description?: string
    image?: string
    slug?: string
  }
  schemas?: {
    [k: string]: any
  }
}
