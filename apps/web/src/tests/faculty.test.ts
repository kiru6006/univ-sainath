import { describe, it, expect } from 'vitest';
import { facultyData } from '../data/faculty';
import { leadershipData } from '../data/leadership';

describe('Faculty & Leadership Roster Suite', () => {
  it('should verify leadership profiles have valid credentials and bio', () => {
    expect(leadershipData.length).toBeGreaterThanOrEqual(2);

    const chancellor = leadershipData.find((l) => l.role === 'Chancellor');
    const vc = leadershipData.find((l) => l.role === 'Vice-Chancellor');

    expect(chancellor).toBeDefined();
    expect(chancellor?.name).toContain('Agarwal');

    expect(vc).toBeDefined();
    expect(vc?.name).toContain('Agarwal');
  });

  it('should verify all faculty entries have email and academic credentials', () => {
    facultyData.forEach((f) => {
      expect(f.name).toBeDefined();
      expect(f.designation).toBeDefined();
      expect(f.qualification).toBeDefined();
      expect(f.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      expect(f.experienceYears).toBeGreaterThan(0);
    });
  });
});
