import { SiteLayout } from "@/components/site-layout"
import { Breadcrumb } from "@/components/breadcrumb"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "हाम्रोबारे | दरबार खबर",
  description: "दरबार खबरबारे जान्नुहोस् — हाम्रो उद्देश्य, टिम र सम्पादकीय मूल्यहरू।",
}

export default function AboutPage() {
  return (
    <SiteLayout>
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "होम", href: "/" }, { label: "हाम्रोबारे" }]} />
        <div className="max-w-[760px] mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#141414] mb-2 border-b-2 border-[#B5121B] pb-3 inline-block">
            हाम्रोबारे
          </h1>
          <div className="mt-6 prose prose-sm max-w-none text-[#141414] leading-[1.8]">
            <p>
              <strong>दरबार खबर</strong> नेपालको एक विश्वसनीय अनलाइन समाचार पोर्टल हो। हाम्रो
              लक्ष्य नेपाली नागरिकहरूलाई सटीक, समयमा र निष्पक्ष समाचार प्रदान गर्नु हो।
            </p>
            <p>
              हामी राजनीति, समाज, कूटनीति, विश्व समाचार, विचार र अन्तर्वार्ताहरू समेट्दछौँ।
              हाम्रो सम्पादकीय टिम अनुभवी पत्रकारहरूले मिलेर बनेको छ जो सत्य र तथ्यमा आधारित
              पत्रकारितामा विश्वास गर्छन्।
            </p>
            <h2>हाम्रो मिसन</h2>
            <p>
              नेपाली समाजको हरेक तहका नागरिकलाई सूचित राख्नु र लोकतान्त्रिक मूल्य मान्यताहरूको
              संरक्षण गर्नु हाम्रो प्रमुख उद्देश्य हो।
            </p>
            <h2>प्रकाशक</h2>
            <p>
              हिमचुली मिडिया प्रा. लि.<br />
              काठमाडौँ, नेपाल<br />
              दर्ता नम्बर: ०००/०७९/०८०
            </p>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}
