import { watch } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { compile } from "sass";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import path from "node:path";

const SCSS_DIR = "./scss";
const OUTPUT_DIR = "./src";
const MAIN_SCSS = "./scss/global.scss";

async function compileSass() {
  try {
    console.log('🔄 Compiling...');

    await mkdir(OUTPUT_DIR, { recursive: true });

    const result = compile(MAIN_SCSS, {
      style: "expanded",
      sourceMap: true,
      loadPaths: [SCSS_DIR]
    });

    const cssPath = path.join(OUTPUT_DIR, "global.css");
    const postcssResult = await postcss([autoprefixer]).process(result.css, {
      from: MAIN_SCSS,
      to: cssPath,
      map: { inline: false }
    });

    await writeFile(cssPath, postcssResult.css);
    if (postcssResult.map) {
      await writeFile(`${cssPath}.map`, postcssResult.map.toString());
    }

    console.log('✨ Compilation successful');
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

if (process.argv.includes('--watch')) {
  console.log('👀 Watching SCSS files...');
  
  const watcher = watch(SCSS_DIR, { 
    recursive: true,
    persistent: true,
  }, (eventType, filename) => {
    if (!filename) return;
    
    if (path.extname(filename) === '.scss') {
      console.log(`\n📄 Changed: ${filename}`);
      compileSass();
      console.log('👁️  Still watching...\n');
    }
  });

  // Handle errors
  watcher.on('error', (error) => {
    console.error('Watch error:', error);
  });

  // Initial compilation
  compileSass();

  // Handle process termination
  process.on('SIGINT', () => {
    console.log('\n🛑 Stopping watch mode...');
    watcher.close();
    process.exit(0);
  });
} else {
  compileSass();
}