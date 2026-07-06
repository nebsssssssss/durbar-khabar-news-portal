import { SiteLayout } from "@/components/site-layout"
import { Breadcrumb } from "@/components/breadcrumb"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "गोपनीयता नीति | दरबार खबर",
}

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "होम", href: "/" }, { label: "गोपनीयता नीति" }]} />
        <div className="max-w-[760px] mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#141414] mb-6 border-b-2 border-[#B5121B] pb-3 inline-block">
            गोपनीयता नीति
          </h1>
          <div className="mt-6 prose prose-sm max-w-none text-[#141414] leading-[1.8]">
            <p>
              दरबार खबर तपाईँको गोपनीयताको सम्मान गर्दछ। यो नीतिले हामी कुन तथ्याङ्क सङ्कलन
              गर्छौँ, कसरी प्रयोग गर्छौँ र कसरी सुरक्षित राख्छौँ भन्ने जानकारी दिन्छ।
            </p>
            <h2>तथ्याङ्क सङ्कलन</h2>
            <p>
              हामी तपाईँले हाम्रो साइट भ्रमण गर्दा स्वचालित रूपमा केही तथ्याङ्क सङ्कलन गर्छौँ,
              जस्तै आईपी ठेगाना, ब्राउजर प्रकार र पृष्ठ भ्रमण ढाँचा।
            </p>
            <h2>तथ्याङ्क प्रयोग</h2>
            <p>
              सङ्कलित तथ्याङ्क साइटको कार्यसम्पादन सुधार गर्न र पाठकहरूको अनुभव बेहतर बनाउन
              प्रयोग गरिन्छ।
            </p>
            <h2>सम्पर्क</h2>
            <p>
              गोपनीयता नीतिसम्बन्धी कुनै प्रश्न भए{" "}
              <a href="mailto:info@durbarkhabar.com" className="text-[#B5121B] hover:underline">
                info@durbarkhabar.com
              </a>{" "}
              मा सम्पर्क गर्नुहोस्।
            </p>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}
