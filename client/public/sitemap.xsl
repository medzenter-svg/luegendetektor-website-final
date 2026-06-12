<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Sitemap – luegendetektor-test-muenchen.de</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0f172a; color: #e2e8f0; padding: 2rem; }
          h1 { font-size: 1.5rem; font-weight: 700; color: #f97316; margin-bottom: 0.5rem; }
          p.subtitle { color: #94a3b8; font-size: 0.9rem; margin-bottom: 2rem; }
          table { width: 100%; border-collapse: collapse; background: #1e293b; border-radius: 8px; overflow: hidden; }
          thead { background: #1e3a5f; }
          th { padding: 0.75rem 1rem; text-align: left; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8; }
          td { padding: 0.65rem 1rem; border-bottom: 1px solid #334155; font-size: 0.875rem; }
          tr:last-child td { border-bottom: none; }
          tr:hover td { background: #263548; }
          a { color: #f97316; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .badge { display: inline-block; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600; }
          .high { background: #14532d; color: #86efac; }
          .med { background: #1e3a5f; color: #93c5fd; }
          .low { background: #3b1f1f; color: #fca5a5; }
          .count { color: #64748b; font-size: 0.8rem; margin-bottom: 1.5rem; }
        </style>
      </head>
      <body>
        <h1>🗺 XML Sitemap</h1>
        <p class="subtitle">luegendetektor-test-muenchen.de</p>
        <p class="count"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs insgesamt</p>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>URL</th>
              <th>Zuletzt geändert</th>
              <th>Häufigkeit</th>
              <th>Priorität</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <td><xsl:value-of select="position()"/></td>
                <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
                <td><xsl:value-of select="sitemap:lastmod"/></td>
                <td><xsl:value-of select="sitemap:changefreq"/></td>
                <td>
                  <xsl:choose>
                    <xsl:when test="sitemap:priority >= 0.9">
                      <span class="badge high"><xsl:value-of select="sitemap:priority"/></span>
                    </xsl:when>
                    <xsl:when test="sitemap:priority >= 0.7">
                      <span class="badge med"><xsl:value-of select="sitemap:priority"/></span>
                    </xsl:when>
                    <xsl:otherwise>
                      <span class="badge low"><xsl:value-of select="sitemap:priority"/></span>
                    </xsl:otherwise>
                  </xsl:choose>
                </td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
