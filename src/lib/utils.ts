export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatPhone(phone: string) {
  return phone.replace(/(\+420)(\s?)(\d{3})(\s?)(\d{3})(\s?)(\d{3})/, "$1 $3 $5 $7");
}
