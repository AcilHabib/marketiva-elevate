const MAX_IMAGE_BYTES = 2.5 * 1024 * 1024;

export function readFileAsDataUrl(file: File, options?: { maxBytes?: number }): Promise<string> {
  const maxBytes = options?.maxBytes ?? MAX_IMAGE_BYTES;
  if (file.size > maxBytes) {
    return Promise.reject(
      new Error(
        `File is too large (${Math.round(file.size / 1024)} KB). Max ${Math.round(maxBytes / 1024)} KB for the mock store.`,
      ),
    );
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") resolve(reader.result);
      else reject(new Error("Could not read file."));
    };
    reader.onerror = () => reject(new Error("Could not read file."));
    reader.readAsDataURL(file);
  });
}

export function readVideoAsObjectUrl(file: File): string {
  return URL.createObjectURL(file);
}
