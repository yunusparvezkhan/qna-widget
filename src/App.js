import React from "react";
import Accordion from "./components/accordion";

const App = () => {


  const items = [
    {
      title: "ŚB 1.1.1",
      content: `ॐ नमो भगवते वासुदेवाय
      जन्माद्यस्य यतोऽन्वयादितरतश्चार्थेष्वभिज्ञ: स्वराट्
      तेने ब्रह्म हृदा य आदिकवये मुह्यन्ति यत्सूरय: ।
      तेजोवारिमृदां यथा विनिमयो यत्र त्रिसर्गोऽमृषा
      धाम्ना स्वेन सदा निरस्तकुहकं सत्यं परं धीमहि ॥ १ ॥`
    },
    {
      title: "ŚB 1.1.2",
      content: `धर्म: प्रोज्झितकैतवोऽत्र परमो निर्मत्सराणां सतां
      वेद्यं वास्तवमत्र वस्तु शिवदं तापत्रयोन्मूलनम् ।
      श्रीमद्भागवते महामुनिकृते किं वा परैरीश्वर:
      सद्यो हृद्यवरुध्यतेऽत्र कृतिभि: शुश्रूषुभिस्तत्क्षणात् ॥ २ ॥`
    },
    {
      title: "ŚB 1.1.3",
      content: `निगमकल्पतरोर्गलितं फलं
      शुकमुखादमृतद्रवसंयुतम् ।
      पिबत भागवतं रसमालयं
      मुहुरहो रसिका भुवि भावुका: ॥ ३ ॥`
    }
  ]



  return (
    <div className="App">
      <Accordion items={items} />
    </div>
  );
}

export default App;
