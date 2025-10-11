export interface AffiliateHost {
  name: string
  url: string
  logo: string
  description?: string
}

export const affiliateHosts: Record<string, AffiliateHost> = {
  bluehost: {
    name: 'Bluehost',
    url: 'https://www.bluehost.com/track/hostinghub/',
    logo: '/images/logos/bluehost.png',
    description: 'Official WordPress recommended hosting provider'
  },
  hostinger: {
    name: 'Hostinger',
    url: 'https://www.hostinger.com/?REFERRALCODE=1HOSTINGHUB',
    logo: '/images/logos/hostinger.png',
    description: 'Affordable hosting with premium features'
  },
  siteground: {
    name: 'SiteGround',
    url: 'https://www.siteground.com/go/hostinghub',
    logo: '/images/logos/siteground.png',
    description: 'Premium managed WordPress hosting'
  },
  dreamhost: {
    name: 'DreamHost',
    url: 'https://www.dreamhost.com/r.cgi?287326',
    logo: '/images/logos/dreamhost.png',
    description: 'Independent hosting with 100% uptime guarantee'
  },
  'a2hosting': {
    name: 'A2 Hosting',
    url: 'https://www.a2hosting.com?aid=hostinghub',
    logo: '/images/logos/a2hosting.png',
    description: 'Turbo servers for 20x faster hosting'
  }
}

export function getAffiliateHost(hostId: string): AffiliateHost | null {
  return affiliateHosts[hostId] || null
}

export function getAllAffiliateHosts(): AffiliateHost[] {
  return Object.values(affiliateHosts)
}
