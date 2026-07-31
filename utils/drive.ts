export function formatDriveUrl(url: string): string {
  if (!url) return url;

  // Match Google Drive file ID pattern from /file/d/{ID} or ?id={ID}
  const fileIdMatch =
    url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) ||
    url.match(/[?&]id=([a-zA-Z0-9_-]+)/);

  if (fileIdMatch && fileIdMatch[1]) {
    const fileId = fileIdMatch[1];
    // Return direct Google CDN image URL
    return `https://lh3.googleusercontent.com/d/${fileId}`;
  }

  return url;
}
