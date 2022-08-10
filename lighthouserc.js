module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      staticDistDir: './build',
      url: ['http://localhost/portfolio'],
      settings: {
        onlyCategories: [
          'performance',
          'accessibility',
          'best-practices',
          'seo',
        ],
        skipAudits: ['uses-http2'],
        chromeFlags: '--no-sandbox',
      },
    },
    assert: {
      assertions: {
        'categories:performance': [
          'warn',
          { minScore: 0.9, aggregationMethod: 'pessimistic' },
        ],
        'categories:accessibility': [
          'error',
          { minScore: 0.9, aggregationMethod: 'pessimistic' },
        ],
        'categories:best-practices': [
          'error',
          { minScore: 0.9, aggregationMethod: 'pessimistic' },
        ],
        'categories:seo': [
          'error',
          { minScore: 0.9, aggregationMethod: 'pessimistic' },
        ],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
