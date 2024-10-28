import React from 'react';
import VideoEmbed from '../../VideoEmbed';
import { NavLink } from 'react-router-dom';

const BeginnerModule4Hindi = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white mt-1">
      <h1 className="text-3xl font-bold mb-6">अध्याय 4: निवेश का परिचय</h1>

      <h2 className="text-2xl font-semibold mb-4">बचत और निवेश के बीच अंतर</h2>
      <p className="mb-4">
        बचत का अर्थ होता है भविष्य के उपयोग के लिए पैसे संजोना, सामान्यत: एक सुरक्षित स्थान पर जैसे बचत खाते में। वहीं, निवेश का अर्थ होता है अपने पैसे का उपयोग इस आशा के साथ करना होता है कि उनका मूल्य समय के साथ बढ़ेगा, संभावित रूप से अधिक रिटर्न प्राप्त करने की।
      </p>
      <p className="mb-4">
        <strong>बचत:</strong> कम जोखिम, कम रिटर्न, आसानी से पहुंचने वाला।
      </p>
      <p className="mb-4">
        <strong>निवेश:</strong> अधिक जोखिम, संभावित अधिक रिटर्न, कम पहुंचने वाला।
      </p>

      <h2 className="text-2xl font-semibold mb-4">मूल निवेश विकल्प</h2>

      <h3 className="text-xl font-semibold mb-2">स्टॉक्स</h3>
      <p className="mb-4">
        स्टॉक्स कंपनी में स्वामित्व को प्रतिनिधित्व करते हैं। जब आप एक स्टॉक खरीदते हैं, तो आप एक शेयरधारक बन जाते हैं और कंपनी का एक हिस्सा उपाधीकृत होते हैं। स्टॉक्स उच्च रिटर्न प्रदान कर सकते हैं, लेकिन वे अधिक जोखिम के साथ आते हैं।
      </p>

      <h3 className="text-xl font-semibold mb-2">बॉन्ड्स</h3>
      <p className="mb-4">
        बॉन्ड्स कंपनियों या सरकारों को दिए गए ऋण होते हैं जिनके विपरीत नियमित ब्याज भुगतान और बॉन्ड के मैच्योर होने पर मौद्रिक मूल्य की वापसी होती है। बॉन्ड्स सामान्यत: स्टॉक्स से सुरक्षित माने जाते हैं, लेकिन वे कम रिटर्न प्रदान करते हैं।
      </p>

      <h3 className="text-xl font-semibold mb-2">म्यूच्यूअल फंड्स</h3>
      <p className="mb-4">
        म्यूच्यूअल फंड्स बहुत से निवेशकों से पैसे एकत्र करते हैं ताकि वे अंतर्विशिष्ट पोर्टफोलियो जैसे स्टॉक्स, बॉन्ड्स या अन्य प्रतिभागियों के लिए खरीदी कर सकें। वे विविधीकरण और पेशेवर प्रबंधन प्रदान करते हैं, जिसे व्यक्तिगत निवेशकों के लिए एक लोकप्रिय विकल्प माना जाता है।
      </p>

      {/* YouTube वीडियो मूल निवेश विकल्पों के बारे में */}
      <VideoEmbed videoId="qIw-yFC-HNU" className="mb-6"/> {/* अपने YouTube वीडियो ID के साथ बदलें */}

      <h2 className="text-2xl font-semibold mb-4">जोखिम और रिटर्न</h2>
      <p className="mb-4">
        निवेश में जोखिम और रिटर्न सीधे रूप से संबंधित होते हैं। उच्च संभावित रिटर्न आमतौर पर अधिक जोखिम के साथ आते हैं। अपनी जोखिम सहनशीलता और निवेश लक्ष्यों को समझना सही निवेश का चयन करने के लिए महत्वपूर्ण है।
      </p>
      <p className="mb-4">
        <strong>कम जोखिम:</strong> बचत खाते, सरकारी बॉन्ड्स।
      </p>
      <p className="mb-4">
        <strong>मध्यम जोखिम:</strong> कॉर्पोरेट बॉन्ड्स, म्यूच्यूअल फंड्स।
      </p>
      <p className="mb-4">
        <strong>उच्च जोखिम:</strong> स्टॉक्स, क्रिप्टोकरेंसी।
      </p>

      {/* YouTube वीडियो जोखिम और रिटर्न के बारे में */}
      <VideoEmbed videoId="4KGvoy_Ke9Y" className="mb-6"/> {/* अपने YouTube वीडियो ID के साथ बदलें */}

      <h2 className="text-2xl font-semibold mb-4">निष्कर्ष और अगले कदम</h2>
      <p className="mb-4">
        बचत और निवेश के बीच अंतर समझना, मूल निवेश विकल्पों को जानना, और जोखिम और रिटर्न के संबंध को पहचानना वित्तीय निर्णय लेने के लिए महत्वपूर्ण है।
      </p>
      <p className="mb-4">
        <strong>अगले कदम:</strong>
        <ul className="list-disc list-inside">
          <li>अपने वित्तीय लक्ष्यों और जोखिम सहनशीलता का मूल्यांकन करें।</li>
          <li>विभिन्न निवेश विकल्पों का शोध करें और अपने पोर्टफोलियो का विविधीकरण करने का विचार करें।</li>
          <li>एक छोटे निवेश के साथ शुरुआत करें और समय के साथ अधिक आरामप्राप्त होने पर धीरे-धीरे बढ़ाएं।</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mb-4">अतिरिक्त संसाधन</h2>
      <ul className="list-disc list-inside">
        <li><a href="https://www.investopedia.com/articles/basics/06/invest1000.asp" target="_blank" className="text-blue-500">Investopedia: निवेश कैसे करें</a></li>
        <li><a href="https://www.thebalance.com/investing-101-357508" target="_blank" className="text-blue-500">The Balance: निवेश 101</a></li>
      </ul>

      <div className="bg-white w-44 mt-9 shadow py-4 px-2 rounded text-xl hover:scale-105 hover:cursor-pointer hover:transition hover:duration-300 hover:text-theme-green hover:bg-theme-dark border-2 border-slate-500">
        <NavLink to={`/dashboard/beginner/5`} className="flex justify-center items-center gap-4">
          अगला मॉड्यूल
        </NavLink>
      </div>

    </div>
  );
};

export default BeginnerModule4Hindi;
