import "server-only";

import { cookies } from "next/headers";

const sessionCookie = "klickfunden_admin_session";

export function hasAdminSession() {
  return cookies().get(sessionCookie)?.value === "authenticated";
}

export function assertAdminSession() {
  if (!hasAdminSession()) {
    throw new Error("Nicht autorisiert. Bitte melde dich erneut im Adminbereich an.");
  }
}
