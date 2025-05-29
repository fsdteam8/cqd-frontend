import Link from "next/link";

export function Logo() {
  return (
    <Link href="/admin/dashboard/bookings" className="flex justify-center py-6">
      <div className="text-white text-3xl font-bold">CQD</div>
    </Link>
  );
}
