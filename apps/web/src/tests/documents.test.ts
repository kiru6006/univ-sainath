import { describe, it, expect } from 'vitest';
import { documentsData } from '../data/documents';

describe('Statutory Documents & Disclosures Suite', () => {
  it('should include mandatory Jharkhand Act and UGC 2(f) orders', () => {
    const titles = documentsData.map((d) => d.title.toLowerCase());

    expect(titles.some((t) => t.includes('act, 2012'))).toBe(true);
    expect(titles.some((t) => t.includes('2(f)'))).toBe(true);
    expect(titles.some((t) => t.includes('bar council'))).toBe(true);
    expect(titles.some((t) => t.includes('pharmacy council'))).toBe(true);
    expect(titles.some((t) => t.includes('nursing'))).toBe(true);
    expect(titles.some((t) => t.includes('calendar'))).toBe(true);
  });

  it('should verify document metadata structure', () => {
    documentsData.forEach((d) => {
      expect(d.id).toBeDefined();
      expect(d.title.length).toBeGreaterThan(5);
      expect(d.category).toBeDefined();
      expect(d.fileType).toBe('PDF');
      expect(d.publishedDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
  });
});

