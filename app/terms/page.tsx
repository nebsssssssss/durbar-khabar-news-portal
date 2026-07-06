import { SiteLayout } from "@/components/site-layout"
import { Breadcrumb } from "@/components/breadcrumb"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "सेवाका सर्तहरू | दरबार खबर",
}

export default function TermsPage() {
  return (
    <SiteLayout>
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "होम", href: "/" }, { label: "सेवाका सर्तहरू" }]} />
        <div className="max-w-[760px] mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#141414] mb-6 border-b-2 border-[#B5121B] pb-3 inline-block">
            सेवाका सर्तहरू
          </h1>
          <div className="mt-6 prose prose-sm max-w-none text-[#141414] leading-[1.8]">
            <p>
              दरबार खबर प्रयोग गरेर तपाईँ यी सर्तहरूमा सहमति जनाउनुहुन्छ। कृपया ध्यानपूर्वक
              पढ्नुहोस्।
            </p>
            <h2>सामग्रीको प्रयोग</h2>
            <p>
              दरबार खबरमा प्रकाशित सबै सामग्री कपीराइट अन्तर्गत संरक्षित छ। प्रकाशकको अनुमतिबिना
              पुनः प्रकाशन गर्न निषेध छ।
            </p>
            <h2>उत्तरदायित्व सीमा</h2>
            <p>
              हामी सामग्रीको सटीकताका लागि प्रयास गर्छौँ, तर कुनै पनि त्रुटिका लागि उत्तरदायी
              हुँदैनौँ। पाठकहरूले महत्त्वपूर्ण निर्णय लिनुअघि अन्य स्रोतहरूसँग पुष्टि गर्नुहोस्।
            </p>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}
