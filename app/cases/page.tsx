import { redirect } from 'next/navigation';

// Redirect /cases → /allcases permanently
export default function CasesRedirectPage() {
  redirect('/allcases');
}
