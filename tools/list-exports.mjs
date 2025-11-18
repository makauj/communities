import path from 'path';
const file = path.resolve(process.cwd(), 'src/lib/validation.js'); // adjust to .ts/.js if needed
try {
  const mod = await import(pathToFileURL(file).href);
  console.log('Exports from src/lib/validation:');
  console.log(Object.keys(mod));
} catch (err) {
  console.error('Failed to import validation module:', err);
  process.exit(2);
}