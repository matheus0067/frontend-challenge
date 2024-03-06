module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules', '/.next'],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.ts(x)?',
        '!src/**/stories.tsx',
        '!src/app/_app.tsx',
        '!src/app/document.tsx',
        '!src/app/_layout.tsx',
        '!src/styles'],
    setupFilesAfterEnv: [ '<rootDir>/.jest/setup.ts',],
    moduleNameMapper: {
        '^utils/tests/helpers$': '<rootDir>/src/utils/tests/helpers.tsx',
        // Adicione outros mapeamentos conforme necessário
      },
    
}