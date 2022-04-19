// import

import fs from 'fs';

// vars

const filename = './SteinsFishingTaleBuild/Web Build/index.html';

// export

export default async function api(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.write(await fs.readFileSync(filename, 'utf-8'));
  res.end();
}