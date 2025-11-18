import { defineConfig } from 'vitest/config';
import { describe, it, expect } from 'vitest';
export default defineConfig({
    test: { globals: true },
});

async function safeImport() {
    try {
        return await import('../src/lib/validation');
    } catch (err) {
        // fail the test early if module can't be imported
        throw new Error(`Failed to import ../src/lib/validation: ${(err as Error).message}`);
    }
}

describe('validation exports sanity checks', () => {
    it('validation module can be imported and contains usable Zod-like schemas', async () => {
        const mod = await safeImport();
        // require at least one exported symbol
        const names = Object.keys(mod).filter(Boolean);
        expect(names.length).toBeGreaterThan(0);

        // For each export that looks like a Zod schema (has .parse), run a basic check
        const schemaNames = names.filter((n) => {
            const v = (mod as any)[n];
            return v && typeof v.parse === 'function';
        });

        // if you expect specific schemas, add assertions here; otherwise at least one Zod-like export exists
        expect(schemaNames.length).toBeGreaterThan(0);

        // Try parsing a minimal value for each Zod-like export if a fallback example exists on the export
        for (const name of schemaNames) {
            const schema = (mod as any)[name];
            const example = schema.__example ?? schema.example ?? schema._example ?? null;
            if (example) {
                // If the schema exposes a small example object, ensure parse doesn't throw
                expect(() => schema.parse(example)).not.toThrow();
            } else {
                // Otherwise just assert parse is a function (sanity)
                expect(typeof schema.parse).toBe('function');
            }
        }
    });
});