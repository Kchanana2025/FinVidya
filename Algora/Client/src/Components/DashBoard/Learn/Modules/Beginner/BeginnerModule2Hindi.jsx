import React from 'react';
import VideoEmbed from '../../VideoEmbed';
import { NavLink } from 'react-router-dom';

const BeginnerModule2Hindi = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">अध्याय 2: बैंकिंग और बचत</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">बैंक खातों के प्रकार</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-1">बचत खाता</h3>
          <p className="mb-2">
            बचत खाते पैसे बचाने के लिए जमा खाते होते हैं। इसे खोलने के लिए आधार कार्ड और पैन कार्ड की आवश्यकता होती है। बचत की राशि पर कोई सीमा नहीं है; हालांकि, एक मिनिमम शेष राशि की आवश्यकता होती है, लेकिन पीएमजेडीवाई योजना के अंतर्गत खातों के लिए शून्य शेष भी अनुमति दी जाती है।
          </p>
          <p className="mb-2">
            <strong>ब्याज:</strong> बैंक के अनुसार भिन्न होता है। उदाहरण: एसबीआई ₹1 लाख तक 2.70% प्रदान करता है, एचडीएफसी ₹50 लाख से कम 3% प्रदान करता है।
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-1">चालू खाता</h3>
          <p className="mb-2">
            चालू खाते यात्राओं के लिए होते हैं, व्यावसायिक के लिए उपयुक्त होते हैं। चालू खातों में कोई लेन-देन सीमा नहीं होती, अधिकतम शेष राशि की आवश्यकता होती है, और कोई ब्याज नहीं मिलता है। ओवरड्राफ्ट सुविधा उपलब्ध होती है।
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-1">वेतन खाता</h3>
          <p className="mb-2">
            वेतन खाते को नियोक्ता द्वारा कर्मचारियों के वेतन प्राप्त करने के लिए खोला जाता है। शून्य शेष राशि की आवश्यकता होती है, कोई ब्याज नहीं मिलता है। अगर तीन महीने से अधिक समय तक निष्क्रिय रहे तो वे बचत खातों में बदल जा सकते हैं।
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-1">एनआरआई खाते</h3>
          <p className="mb-2">
            एनआरओ: भारत में कमाई के लिए, करयोग्य ब्याज।
          </p>
          <p className="mb-2">
            एनआरई: विदेश में कमाई के लिए, कर मुक्त ब्याज।
          </p>
          <p className="mb-2">
            एफसीएनआर: विदेशी मुद्रा में निश्चित जमा, कर मुक्त ब्याज।
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-1">आवर्ती जमा (आरडी) खाता</h3>
          <p className="mb-2">
            आरडी मासिक जमा के लिए अनुमोदन देता है जिसमें बचत खातों से अधिक ब्याज दर होती है। 6 महीने से 10 वर्ष तक की लचीली कालावधि। बिना ब्याज नुकसान के पहले छोड़ा जा सकता है।
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-1">निश्चित जमा (एफडी) खाता</h3>
          <p className="mb-2">
            एफडी बड़ी राशि की जमा के लिए होता है जिसमें निश्चित कालावधि होती है। बचत खातों और आरडी की तुलना में अधिक ब्याज दर होती है। पहले निकासी ब्याज खोने का खतरा हो सकता है।
          </p>
        </div>

        <VideoEmbed videoId="Vl4PUQwHHNg" />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">ब्याज काम कैसे करता है</h2>
        <p className="mb-4">
          ब्याज पैसे का उपयोग करने का लागत है। बचत पर ब्याज कमाएं, ऋण पर ब्याज चुकाएं।
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-1">साधारण ब्याज</h3>
          <p className="mb-2">
            मूल राशि पर गणना की गई: <strong>ब्याज = मूल राशि x दर x समय</strong>।
          </p>
          <p className="mb-2">
            <strong>उदाहरण:</strong> ₹10,000 पर 5% वार्षिक ब्याज में एक वर्ष में ₹500 कमाएं।
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-1">संयुक्त ब्याज</h3>
          <p className="mb-2">
            मूल राशि और एकत्रित ब्याज पर गणना की गई: <strong>A = P(1 + r/n)^(nt)</strong>।
          </p>
          <p className="mb-2">
            <strong>उदाहरण:</strong> ₹10,000 पर 5% वार्षिक ब्याज में एक वर्ष में ₹10,500, दो वर्षों में ₹11,025 कमाएं।
          </p>
        </div>

        <VideoEmbed videoId="0F7pYIGdr5U" />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">एक आपातकालीन निधि बनाना</h2>
        <p className="mb-4">
          एक आपातकालीन निधि अनपेक्षित खर्चों को आवरित करती है। तीन से छह महीने के जीवन व्यय के लिए लाखों की मान्यता के लिए लक्ष्य बनाएं।
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-1">एक आपातकालीन निधि बनाने के लिए कदम</h3>
          <ol className="list-decimal pl-5">
            <li className="mb-2"><strong>लक्ष्य निर्धारित करें:</strong> अपने मासिक व्यय की गणना करें और एक लक्ष्य राशि निर्धारित करें।</li>
            <li className="mb-2"><strong>बजट बनाएं:</strong> खर्च को कम करें और निधि को बचत में निर्दिष्ट करें।</li>
            <li className="mb-2"><strong>स्वचालित बचत करें:</strong> अपने बचत खाते में स्वचालित हस्तांतरण सेट करें।</li>
            <li className="mb-2"><strong>आकस्मिक आय का उपयोग करें:</strong> अप्रत्याशित आय को निधि में निर्दिष्ट करें।</li>
          </ol>
          <p className="mt-2">
            <strong>उदाहरण:</strong> यदि आपके मासिक व्यय ₹30,000 हैं, तो ₹90,000 से ₹1,80,000 तक बचत करने का लक्ष्य रखें।
          </p>
        </div>

        <VideoEmbed videoId="g-hir-4WzfU" />
      </section>

      <section className="mb-2">
        <h2 className="text-2xl font-semibold mb-2">निष्कर्ष और आगामी कदम</h2>
        <p className="mb-4">
          विभिन्न प्रकार के बैंक खातों, ब्याज काम कैसे करता है, और आपातकालीन निधि की महत्वपूर्णता समझना वित्तीय स्थिरता की ओर महत्वपूर्ण कदम हैं।
        </p>
        <p className="mb-4">
          <strong>आगामी कदम:</strong>
          <ul className="list-disc pl-5">
            <li className="mb-2">यदि आपके पास नहीं है, तो बचत और चेकिंग खाते खोलें।</li>
            <li className="mb-2">अपनी आमदनी का एक हिस्सा बचत करना शुरू करें अपनी आपातकालीन निधि बनाने के लिए।</li>
            <li className="mb-2">अपने खातों पर ब्याज दरों का निगरानी करें ताकि अपनी कमाई को अधिकतम कर सकें।</li>
          </ul>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">अतिरिक्त संसाधन</h2>
        <ul className="list-disc pl-5">
          <li className="mb-2"><a href="https://www.investopedia.com/articles/basics/06/interestprimer.asp" target="_blank" className="text-blue-500 underline">Investopedia: ब्याज को समझना</a></li>
          <li className="mb-2"><a href="https://www.thebalance.com/emergency-fund-what-it-is-and-why-it-matters-2385693" target="_blank" className="text-blue-500 underline">The Balance: आपातकालीन निधि बनाना</a></li>
        </ul>
      </section>
      <div className="bg-white w-44 mt-9 shadow py-4 px-2 rounded text-xl hover:scale-105 hover:cursor-pointer hover:transition hover:duration-300 hover:text-theme-green hover:bg-theme-dark border-2 border-slate-500">
      <NavLink to={`/dashboard/beginner/3`} className="flex justify-center items-center gap-4">
        अगला मॉड्यूल
      </NavLink>
    </div>
    </div>
  );
};

export default BeginnerModule2Hindi;
