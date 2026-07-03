/**
 * Generates a complete domain module based on the Tachys-Next architecture.
 *
 * This script scaffolds the following files for a given module name:
 * 1. A Zod schema model in `server/models/[name].model.ts`
 * 2. A service containing business logic in `server/services/[name].service.ts`
 * 3. A tRPC router controller in `server/routers/[name].router.ts`
 * 4. A React hook for querying the router in `hooks/use-[name]-query.ts`
 *
 * Usage:
 * pnpm generate:module [module-name]
 */

import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const [moduleName] = args;

if (!moduleName) {
  console.error(
    "Please provide a module name. Example: pnpm generate:module user"
  );
  process.exit(1);
}

const toCamelCase = (str: string) => {
  const parts = str.split("-");
  const [firstPart, ...restParts] = parts;
  let result = firstPart || "";
  for (const part of restParts) {
    if (part) {
      result += part.charAt(0).toUpperCase() + part.slice(1);
    }
  }
  return result;
};

const toPascalCase = (str: string) => {
  const camel = toCamelCase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
};

const camelName = toCamelCase(moduleName);
const pascalName = toPascalCase(moduleName);

const dirs = {
  hook: path.join(process.cwd(), "hooks"),
  model: path.join(process.cwd(), "server/models"),
  router: path.join(process.cwd(), "server/routers"),
  service: path.join(process.cwd(), "server/services"),
};

const files = {
  hook: path.join(dirs.hook, `use-${moduleName}-query.ts`),
  model: path.join(dirs.model, `${moduleName}.model.ts`),
  router: path.join(dirs.router, `${moduleName}.router.ts`),
  service: path.join(dirs.service, `${moduleName}.service.ts`),
};

const templates = {
  hook: `import { trpc } from '@/lib/trpc';\n\nexport const use${pascalName}Query = (input: { id?: string }) => {\n  return trpc.${camelName}.get.useQuery(input);\n};\n`,
  model: `import { z } from 'zod';\n\nexport const ${camelName}InputSchema = z.object({\n  id: z.string().optional(),\n});\n\nexport type ${pascalName}Input = z.infer<typeof ${camelName}InputSchema>;\n`,
  router: `import { router, publicProcedure } from '../trpc';\nimport { ${camelName}InputSchema } from '../models/${moduleName}.model';\nimport { get${pascalName} } from '../services/${moduleName}.service';\n\nexport const ${camelName}Router = router({\n  get: publicProcedure.input(${camelName}InputSchema).query(async ({ input }) => {\n    return await get${pascalName}(input);\n  }),\n});\n`,
  service: `import type { ${pascalName}Input } from '../models/${moduleName}.model';\n\nexport const get${pascalName} = async (input: ${pascalName}Input) => {\n  return { success: true, data: input };\n};\n`,
};

for (const dir of Object.values(dirs)) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

const createdFiles: string[] = [];

for (const [type, filePath] of Object.entries(files)) {
  if (fs.existsSync(filePath)) {
    console.warn(`[WARN] ${type} file already exists: ${filePath}`);
  } else {
    fs.writeFileSync(filePath, templates[type as keyof typeof templates]);
    console.log(`[OK] Created ${type}: ${filePath}`);
    createdFiles.push(filePath);
  }
}

console.log(`\nModule '${moduleName}' generated successfully!`);
console.log("The following files were added:");
for (const file of createdFiles) {
  console.log(`- ${file}`);
}
console.log(
  `\nDon't forget to register ${camelName}Router in server/routers/_app.ts`
);
