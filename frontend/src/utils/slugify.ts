export function slugify(text: string) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  }

  export function slugifyCategory(text: string) {
    return text
      .replace(/%20/g, " ")
      .replace(/%/g, "")
      .replace(/26/g, "&");
  }
  