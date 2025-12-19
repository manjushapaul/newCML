import React from 'react'
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer'
import { CaseStudyData } from '@/lib/case-studies/nexspot'

// Register fonts (using system fonts for now - can be customized later)
// For custom fonts, you'd need to load them and register with Font.register()

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    backgroundColor: '#FFFFFF',
  },
  coverPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  coverTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1F2937',
    textAlign: 'center',
  },
  coverSubtitle: {
    fontSize: 18,
    color: '#6B7280',
    marginBottom: 40,
    textAlign: 'center',
  },
  coverMeta: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1F2937',
    borderBottom: '2px solid #E5E7EB',
    paddingBottom: 10,
  },
  subsectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: '#374151',
  },
  paragraph: {
    fontSize: 11,
    lineHeight: 1.6,
    color: '#4B5563',
    marginBottom: 10,
  },
  bulletList: {
    marginLeft: 20,
    marginBottom: 10,
  },
  bulletItem: {
    fontSize: 11,
    lineHeight: 1.6,
    color: '#4B5563',
    marginBottom: 8,
  },
  statsCard: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    border: '1px solid #E5E7EB',
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-start',
    minHeight: 15,
  },
  statsLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#374151',
    width: 80,
    flexShrink: 0,
  },
  statsValue: {
    fontSize: 10,
    color: '#6B7280',
    flex: 1,
    minWidth: 0,
  },
  tag: {
    backgroundColor: '#F3F4F6',
    padding: '4px 8px',
    borderRadius: 4,
    fontSize: 9,
    color: '#374151',
    marginRight: 6,
    marginBottom: 6,
  },
  imageContainer: {
    marginVertical: 15,
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%',
    maxHeight: 300,
    marginBottom: 8,
  },
  imageCaption: {
    fontSize: 9,
    color: '#6B7280',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  processCard: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #E5E7EB',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  processNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#1F2937',
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 30,
    marginRight: 15,
  },
  processHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  processTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1F2937',
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 9,
    color: '#9CA3AF',
    borderTop: '1px solid #E5E7EB',
    paddingTop: 10,
  },
})

interface CaseStudyPDFProps {
  data: CaseStudyData
}

export const CaseStudyPDF = ({ data }: CaseStudyPDFProps) => {
  return (
    <Document>
      {/* Cover Page */}
      <Page size="A4" style={styles.page}>
        <View style={styles.coverPage}>
          <Text style={styles.coverTitle}>{data.hero.title}</Text>
          <Text style={styles.coverSubtitle}>{data.hero.summary}</Text>
          
          <View style={{ marginTop: 40, alignItems: 'center' , width: '100%' }}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 30 }}>
              {data.hero.tags.map((tag, index) => (
                <Text key={index} style={styles.tag}>
                  {tag}
                </Text>
              ))}
            </View>
            
            <View style={styles.statsCard}>
              <View style={styles.statsRow}>
                <Text style={styles.statsLabel}>Timeline:</Text>
                <Text style={styles.statsValue}>{data.overview.stats.timeline}</Text>
              </View>
              <View style={[styles.statsRow, { flexWrap: 'wrap', alignItems: 'flex-start' }]}>
                <Text style={styles.statsLabel}>Role:</Text>
                <View style={{ flex: 1, minWidth: 0, paddingLeft: 5 }}>
                  <Text style={[styles.statsValue, { lineHeight: 1.4 }]}>{data.overview.stats.role}</Text>
                </View>
              </View>
            </View>
          </View>
          
          <Text style={styles.coverMeta}>
            Code Meld Labs Case Study
          </Text>
        </View>
      </Page>

      {/* Overview Page 1 */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Project Overview</Text>
        
        <View style={styles.section}>
          <Text style={styles.subsectionTitle}>Client</Text>
          <Text style={styles.paragraph}>{data.overview.client}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subsectionTitle}>Problem</Text>
          <Text style={styles.paragraph}>{data.overview.problem}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subsectionTitle}>Goals</Text>
          <View style={styles.bulletList}>
            {data.overview.goals.map((goal, index) => (
              <Text key={index} style={styles.bulletItem}>
                • {goal}
              </Text>
            ))}
          </View>
        </View>
      </Page>

      {/* Overview Page 2 */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Project Overview (continued)</Text>
        
        <View style={styles.section}>
          <Text style={styles.subsectionTitle}>Tech Stack</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, gap: 6 }}>
            {data.overview.stats.stack.map((tech, index) => (
              <Text key={index} style={styles.tag}>
                {tech}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.subsectionTitle}>Key Outcomes</Text>
          <View style={styles.bulletList}>
            {data.overview.stats.outcomes.map((outcome, index) => (
              <Text key={index} style={styles.bulletItem}>
                • {outcome}
              </Text>
            ))}
          </View>
        </View>
      </Page>

      {/* Process Page */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Process & Decisions</Text>
        
        {data.process.map((step, index) => (
          <View key={index} style={styles.processCard}>
            <View style={styles.processHeader}>
              <View style={styles.processNumber}>
                <Text>{index + 1}</Text>
              </View>
              <Text style={styles.processTitle}>{step.title}</Text>
            </View>
            <Text style={styles.paragraph}>{step.description}</Text>
          </View>
        ))}
      </Page>

      {/* Features Page (if exists) */}
      {(data as any).features && (data as any).features.length > 0 && (
        <Page size="A4" style={styles.page}>
          <Text style={styles.sectionTitle}>Features</Text>
          
          <View style={styles.section}>
            <View style={styles.bulletList}>
              {(data as any).features.map((feature: string, index: number) => (
                <Text key={index} style={styles.bulletItem}>
                  ✓ {feature}
                </Text>
              ))}
            </View>
          </View>
        </Page>
      )}

      {/* Results Page */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Results & Learnings</Text>
        
        <View style={styles.section}>
          <Text style={styles.subsectionTitle}>{data.results.title}</Text>
          <View style={styles.bulletList}>
            {data.results.bullets.map((bullet, index) => (
              <Text key={index} style={styles.bulletItem}>
                • {bullet}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.footer}>
          <Text>Generated by Code Meld Labs • {String(new Date().getFullYear())}</Text>
        </View>
      </Page>
    </Document>
  )
}

