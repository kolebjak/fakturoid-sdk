export const getEnvVar = (constant: string): string => {
  const value = process.env[constant];
  if (!value) {
    throw new Error(`${constant} not set`);
  }
  return value;
};
