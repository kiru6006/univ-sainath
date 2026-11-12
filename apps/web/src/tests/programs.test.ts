import { describe, it, expect } from 'vitest';
import { programsData } from '../data/programs';
import { schoolsData } from '../data/schools';

describe('Academic Programs Integrity Suite', () => {
  it('should have all programs with valid unique IDs and codes', () => {
    const ids = new Set();
    const codes = new Set();

    programsData.forEach((p) => {
      expect(p.id).toBeDefined();
      expect(p.name.length).toBeGreaterThan(3);
      expect(p.durationYears).toBeGreaterThan(0);
      expect(p.approvedBy.length).toBeGreaterThan(0);

      expect(ids.has(p.id)).toBe(false);
      expect(codes.has(p.code)).toBe(false);

      ids.add(p.id);
      codes.add(p.code);
    });
  });

  it('should link every program to an existing constituent school', () => {
    const schoolIds = new Set(schoolsData.map((s) => s.id));

    programsData.forEach((p) => {
      expect(schoolIds.has(p.schoolId)).toBe(true);
    });
  });

  it('should verify essential professional disciplines exist', () => {
    const degreeNames = programsData.map((p) => p.name.toLowerCase());

    expect(degreeNames.some((n) => n.includes('mining'))).toBe(true);
    expect(degreeNames.some((n) => n.includes('laws') || n.includes('ll.b'))).toBe(true);
    expect(degreeNames.some((n) => n.includes('pharmacy'))).toBe(true);
    expect(degreeNames.some((n) => n.includes('nursing'))).toBe(true);
    expect(degreeNames.some((n) => n.includes('agriculture'))).toBe(true);
  });
});
