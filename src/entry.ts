import { BackendAPI } from "./backendAPI";

async function main() {
  const backendAPI = new BackendAPI(3000);
  await backendAPI.listen();
}

main();