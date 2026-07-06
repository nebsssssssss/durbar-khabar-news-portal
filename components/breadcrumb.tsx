import Link from "next/link"

interface BreadcrumbItem {
  label: string
  href?: string
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="breadcrumb" className="py-2 mb-4">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-[#757575]">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-[#B5121B] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-[#141414] font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
