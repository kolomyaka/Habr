import { Project } from 'ts-morph';

const project = new Project();

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const isFeatureImport = (value: string) => {
    const layers = ['@/feature'];

    return layers.some((layer) => value.startsWith(layer));
};

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();

        if (isFeatureImport(value)) {
            const finalValue = value.replace('feature', 'features');
            importDeclaration.setModuleSpecifier(finalValue);
        }
    });
});

project.save();
