/** Keep under Vercel serverless body limits (~4.5MB) after base64 expansion. */
const MAX_IMAGE_BYTES = 1.5 * 1024 * 1024;
const MAX_OUTPUT_DIMENSION = 1400;
const JPEG_QUALITY = 0.82;

function canvasToBlob(canvas: HTMLCanvasElement, type: string, quality: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error("Could not compress image."));
      },
      type,
      quality,
    );
  });
}

async function compressImageFile(file: File): Promise<Blob> {
  if (typeof createImageBitmap !== "function") return file;

  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, MAX_OUTPUT_DIMENSION / Math.max(bitmap.width, bitmap.height));
  const width = Math.max(1, Math.round(bitmap.width * scale));
  const height = Math.max(1, Math.round(bitmap.height * scale));

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    bitmap.close();
    return file;
  }

  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();

  const outputType = file.type === "image/png" ? "image/png" : "image/jpeg";
  return canvasToBlob(canvas, outputType, JPEG_QUALITY);
}

function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") resolve(reader.result);
      else reject(new Error("Could not read file."));
    };
    reader.onerror = () => reject(new Error("Could not read file."));
    reader.readAsDataURL(blob);
  });
}

export async function readFileAsDataUrl(
  file: File,
  options?: { maxBytes?: number },
): Promise<string> {
  const maxBytes = options?.maxBytes ?? MAX_IMAGE_BYTES;

  let working: Blob = file;
  if (file.type.startsWith("image/")) {
    try {
      working = await compressImageFile(file);
    } catch {
      working = file;
    }
  }

  if (working.size > maxBytes) {
    throw new Error(
      `File is too large after compression (${Math.round(working.size / 1024)} KB). Max ${Math.round(maxBytes / 1024)} KB for uploads.`,
    );
  }

  return blobToDataUrl(working);
}

export function readVideoAsObjectUrl(file: File): string {
  return URL.createObjectURL(file);
}
