import { describe, it, expect } from 'vitest';
// Update import path and schema names to match your codebase
import {
    updateUserProfileSchema,
    createPostSchema,
} from '../src/lib/validation';

describe('Zod schemas - basic skeleton tests', () => {
    it('updateUserProfileSchema accepts valid input', () => {
        const valid = {
            username: 'alice',
            displayName: 'Alice',
            bio: 'hello',
        };
        expect(() => updateUserProfileSchema.parse(valid)).not.toThrow();
    });

    it('updateUserProfileSchema rejects invalid input', () => {
        const invalid = {
            // e.g. missing username
            displayName: 'NoUser',
        };
        expect(() => updateUserProfileSchema.parse(invalid)).toThrow();
    });

    it('createPostSchema accepts minimal valid post', () => {
        const validPost = {
            title: 'Test',
            content: 'body',
        };
        expect(() => createPostSchema.parse(validPost)).not.toThrow();
    });
});