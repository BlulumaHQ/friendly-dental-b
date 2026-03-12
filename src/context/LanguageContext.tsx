import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "zh";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Nav
  "nav.home": { en: "Home", zh: "首頁" },
  "nav.office": { en: "Our Office", zh: "我們的診所" },
  "nav.services": { en: "Services", zh: "服務項目" },
  "nav.contact": { en: "Contact", zh: "聯絡我們" },
  "nav.bookNow": { en: "Book Now", zh: "立即預約" },

  // Hero
  "hero.tag": { en: "Friendly Dental Centre", zh: "友善牙醫中心" },
  "hero.title1": { en: "Richmond's", zh: "列治文" },
  "hero.title2": { en: "Trusted", zh: "值得信賴的" },
  "hero.title3": { en: "Dental Professionals", zh: "牙科專業團隊" },
  "hero.desc": {
    en: "Our friendly team is committed to providing you with the highest level of professional services and personalized care in a warm and welcoming environment.",
    zh: "我們友善的團隊致力於在溫馨的環境中為您提供最高水準的專業服務和個人化護理。",
  },
  "hero.call": { en: "(604) 273-8315", zh: "(604) 273-8315" },
  "hero.ourServices": { en: "Our Services", zh: "我們的服務" },

  // Welcome
  "welcome.title1": { en: "Welcome to", zh: "歡迎來到" },
  "welcome.title2": { en: "Friendly Dental Centre", zh: "友善牙醫中心" },
  "welcome.p1": {
    en: "Our friendly team is committed to providing you with the highest level of professional services and personalized care in a warm and welcoming environment. We believe that building strong relationships with our patients is the key to exceptional dental care, and we look forward to knowing you and your unique needs.",
    zh: "我們友善的團隊致力於在溫馨的環境中為您提供最高水準的專業服務和個人化護理。我們相信與患者建立良好的關係是卓越牙科護理的關鍵，我們期待了解您和您的獨特需求。",
  },
  "welcome.p2": {
    en: "Thank you for choosing Friendly Dental in achieving your optimal oral health.",
    zh: "感謝您選擇友善牙醫，幫助您實現最佳口腔健康。",
  },

  // Trust
  "trust.title1": { en: "Why Trust", zh: "為什麼信賴" },
  "trust.title2": { en: "Friendly Dental?", zh: "友善牙醫？" },
  "trust.subtitle": {
    en: "We understand that visiting the dentist can be stressful. Our highly trained and knowledgeable team is dedicated to providing you with personalized care in a warm and inviting environment.",
    zh: "我們了解看牙醫可能令人緊張。我們訓練有素且知識淵博的團隊致力於在溫馨的環境中為您提供個人化護理。",
  },
  "trust.item1.title": { en: "Experienced Team", zh: "經驗豐富的團隊" },
  "trust.item1.desc": {
    en: "Our doctors bring decades of combined experience and advanced training from top dental schools worldwide.",
    zh: "我們的醫生擁有數十年的綜合經驗，並接受過世界頂級牙科學校的高級培訓。",
  },
  "trust.item2.title": { en: "Patient-Centered Care", zh: "以患者為中心的護理" },
  "trust.item2.desc": {
    en: "We take time learning about your concerns and answering your questions to keep your mind at ease.",
    zh: "我們花時間了解您的顧慮並回答您的問題，讓您安心。",
  },
  "trust.item3.title": { en: "Modern Technology", zh: "現代科技" },
  "trust.item3.desc": {
    en: "We use state-of-the-art dental equipment to ensure the most effective and comfortable treatments.",
    zh: "我們使用最先進的牙科設備，確保最有效和舒適的治療。",
  },

  // Services
  "services.title1": { en: "Our", zh: "我們的" },
  "services.title2": { en: "Friendly Services", zh: "友善服務" },
  "services.subtitle": {
    en: "We have the knowledge and experience to achieve your optimal oral health.",
    zh: "我們擁有幫助您實現最佳口腔健康的知識和經驗。",
  },
  "service.implants": { en: "Implants", zh: "植牙" },
  "service.implants.desc": {
    en: "Stable and secure surgical option for replacing one or more missing teeth using artificial titanium roots.",
    zh: "使用人工鈦金屬根部，穩定且安全的手術選項，用於替換一顆或多顆缺失的牙齒。",
  },
  "service.orthodontics": { en: "Orthodontics", zh: "矯正牙科" },
  "service.orthodontics.desc": {
    en: "Achieve a healthy smile with well-aligned teeth that improve your self-image, speech, and digestion.",
    zh: "通過排列整齊的牙齒獲得健康的笑容，改善您的自我形象、語言和消化。",
  },
  "service.pediatric": { en: "Pediatric", zh: "兒童牙科" },
  "service.pediatric.desc": {
    en: "Children's dentistry services to help your child maintain a healthy smile from an early age.",
    zh: "兒童牙科服務，幫助您的孩子從小保持健康的笑容。",
  },
  "service.maintenance": { en: "Maintenance", zh: "牙齒保健" },
  "service.maintenance.desc": {
    en: "Regular cleanings and comprehensive exams to combat tooth decay and maintain oral health.",
    zh: "定期清潔和全面檢查，以對抗蛀牙並維持口腔健康。",
  },
  "service.restoratives": { en: "Restoratives", zh: "修復牙科" },
  "service.restoratives.desc": {
    en: "Repair damage caused by decay, injury, or other factors and restore teeth to optimal health.",
    zh: "修復因蛀牙、受傷或其他因素造成的損壞，恢復牙齒最佳健康狀態。",
  },
  "service.esthetics": { en: "Esthetics", zh: "美學牙科" },
  "service.esthetics.desc": {
    en: "Veneers, teeth whitening, and cosmetic treatments to enhance the appearance of your smile.",
    zh: "貼面、牙齒美白和美容治療，提升您笑容的外觀。",
  },

  // Services page detailed
  "service.implants.full": {
    en: "Dental implants are a stable and secure surgical option for replacing one or more missing teeth. A dental implant uses an artificial root usually made of titanium. The implant is surgically inserted into the upper or lower jawbone and an artificial tooth is attached to the implant. The implant acts as an anchor to hold the replacement tooth in place.",
    zh: "植牙是一種穩定且安全的手術選項，用於替換一顆或多顆缺失的牙齒。植牙使用通常由鈦製成的人工牙根。植體通過手術植入上顎或下顎骨中，然後在植體上安裝人工牙齒。植體起到固定替換牙齒的錨定作用。",
  },
  "service.orthodontics.full": {
    en: "Whether you are an adult or a teen, a healthy smile with bright, well-aligned teeth can be an important part of your self-image. While well-aligned teeth can make a beautiful and confident smile, the benefits can reach far beyond. Improper alignments can also affect speech, chewing and digestion. In addition, teeth that are not well aligned or overcrowded may be more difficult to clean and cause decay or gum disease.",
    zh: "無論您是成人還是青少年，擁有明亮且排列整齊的牙齒的健康笑容可以成為您自我形象的重要部分。排列整齊的牙齒不僅能帶來美麗自信的笑容，其好處遠不止於此。不正確的排列還會影響說話、咀嚼和消化。此外，排列不整齊或過於擁擠的牙齒可能更難清潔，導致蛀牙或牙齦疾病。",
  },
  "service.pediatric.full": {
    en: "We offer children's dentistry services to help your child maintain a healthy smile from an early age. We are experienced in working with children and will make sure your child feels comfortable and at ease during their dental visit. Our children's dentistry services include regular checkups, cleanings, and preventive care to help keep their teeth and gums healthy.",
    zh: "我們提供兒童牙科服務，幫助您的孩子從小保持健康的笑容。我們擁有與兒童合作的豐富經驗，確保您的孩子在看診期間感到舒適和放鬆。我們的兒童牙科服務包括定期檢查、清潔和預防性護理，以幫助保持牙齒和牙齦健康。",
  },
  "service.maintenance.full": {
    en: "Regular dental maintenance, including professional cleanings and comprehensive exams, is critical for maintaining good oral health. Professional cleaning is the most effective way of tackling tartar build-up and removing plaque, and regular cleanings are essential to combat tooth decay. A comprehensive dental exam is also critical to catching dental problems early and preventing them from becoming more serious and costly to treat.",
    zh: "定期的牙齒保健，包括專業清潔和全面檢查，對維持良好的口腔健康至關重要。專業清潔是去除牙結石和牙菌斑最有效的方法，定期清潔對於對抗蛀牙至關重要。全面的牙科檢查對於及早發現牙齒問題並防止其變得更嚴重和更昂貴也至關重要。",
  },
  "service.restoratives.full": {
    en: "Our restorative dentistry services can help repair damage caused by decay, injury, or other factors and restore your teeth to their optimal health and function. From filling cavities to root canals to repairing broken or missing teeth with dental implants or bridges, we offer a range of restorative dentistry services to help you regain your smile and confidence.",
    zh: "我們的修復牙科服務可以幫助修復因蛀牙、受傷或其他因素造成的損壞，並恢復您牙齒的最佳健康和功能。從填補蛀牙到根管治療，再到使用植牙或牙橋修復斷裂或缺失的牙齒，我們提供一系列修復牙科服務，幫助您重拾笑容和信心。",
  },
  "service.esthetics.full": {
    en: "We believe that a beautiful smile can boost your confidence and improve your overall quality of life. Our esthetic dentistry services, including veneers, teeth whitening, direct composite bonding, and other cosmetic treatments, can help enhance the appearance of your teeth and give you the smile you've always wanted. From covering up chips or cracks in your teeth with veneers to brightening your smile with professional teeth whitening, we offer a range of esthetic dentistry services to help you achieve the perfect smile.",
    zh: "我們相信美麗的笑容可以提升您的信心並改善您的整體生活品質。我們的美學牙科服務，包括貼面、牙齒美白、直接複合黏結和其他美容治療，可以幫助提升牙齒的外觀，給您一直想要的笑容。從使用貼面遮蓋牙齒的缺損或裂縫到通過專業牙齒美白使笑容更明亮，我們提供一系列美學牙科服務，幫助您實現完美笑容。",
  },

  // Stats
  "stats.years": { en: "Years in Business", zh: "年經營歷史" },
  "stats.dentists": { en: "Expert Dentists", zh: "專業牙醫" },
  "stats.services": { en: "Dental Services", zh: "牙科服務" },
  "stats.patients": { en: "Happy Patients", zh: "滿意患者" },

  // Dentists
  "team.title": { en: "Meet Our Dentists", zh: "認識我們的牙醫" },

  // FAQ
  "faq.title": { en: "Frequently Asked Questions", zh: "常見問題" },
  "faq.subtitle": {
    en: "Have a question? Find answers to our most commonly asked questions below.",
    zh: "有問題嗎？在下方找到我們最常被問到的問題的答案。",
  },
  "faq.q1": { en: "What services does Friendly Dental Centre offer?", zh: "友善牙醫中心提供哪些服務？" },
  "faq.a1": {
    en: "We offer a comprehensive range of dental services including implants, orthodontics, pediatric dentistry, regular maintenance and cleanings, restorative dentistry, and esthetic treatments like veneers and teeth whitening.",
    zh: "我們提供全面的牙科服務，包括植牙、矯正牙科、兒童牙科、定期保健和清潔、修復牙科以及美學治療如貼面和牙齒美白。",
  },
  "faq.q2": { en: "What are your office hours?", zh: "您的營業時間是什麼？" },
  "faq.a2": {
    en: "We are open Monday through Friday from 9:00am to 6:00pm, Saturday from 9:00am to 5:00pm, and closed on Sunday.",
    zh: "我們週一至週五上午9:00至下午6:00營業，週六上午9:00至下午5:00，週日休息。",
  },
  "faq.q3": { en: "Do you accept new patients?", zh: "你們接受新患者嗎？" },
  "faq.a3": {
    en: "Yes! We warmly welcome new patients of all ages. Our friendly team is committed to making your first visit comfortable and informative. Please call us at (604) 273-8315 to schedule your appointment.",
    zh: "是的！我們熱烈歡迎各年齡段的新患者。我們友善的團隊致力於使您的第一次就診舒適且富有資訊性。請致電 (604) 273-8315 預約。",
  },
  "faq.q4": { en: "What should I expect during my first visit?", zh: "第一次就診時我應該期待什麼？" },
  "faq.a4": {
    en: "During your first visit, our team will conduct a thorough examination, take any necessary X-rays, and discuss your dental health goals. We take time to learn about your concerns and answer all your questions in a warm and welcoming environment.",
    zh: "在您第一次就診期間，我們的團隊將進行徹底的檢查，拍攝必要的X光片，並討論您的牙齒健康目標。我們會花時間了解您的顧慮，並在溫馨的環境中回答您所有的問題。",
  },
  "faq.q5": { en: "How can I schedule an appointment?", zh: "如何預約？" },
  "faq.a5": {
    en: "You can schedule an appointment by calling us at (604) 273-8315, emailing info@friendlydental.ca, or using the contact form on our website. We look forward to hearing from you!",
    zh: "您可以通過致電 (604) 273-8315、發送電子郵件至 info@friendlydental.ca 或使用我們網站上的聯絡表單來預約。我們期待您的來信！",
  },

  // CTA
  "cta.title": { en: "Ready for Your Best Smile?", zh: "準備好擁有最美的笑容了嗎？" },
  "cta.desc": {
    en: "Our team is happy to help you and your family achieve that perfect smile!",
    zh: "我們的團隊很樂意幫助您和您的家人實現完美的笑容！",
  },
  "cta.callNow": { en: "Call Now", zh: "立即致電" },
  "cta.bookOnline": { en: "Book Online", zh: "線上預約" },

  // Contact Form
  "form.title": { en: "Get in Touch", zh: "聯繫我們" },
  "form.subtitle": {
    en: "Schedule your appointment today",
    zh: "立即預約您的門診",
  },
  "form.firstName": { en: "First Name", zh: "名" },
  "form.lastName": { en: "Last Name", zh: "姓" },
  "form.email": { en: "Email", zh: "電子郵件" },
  "form.emailPlaceholder": { en: "Email Address", zh: "電子郵件地址" },
  "form.phone": { en: "Phone", zh: "電話" },
  "form.phonePlaceholder": { en: "Phone Number", zh: "電話號碼" },
  "form.message": { en: "Message", zh: "留言" },
  "form.messagePlaceholder": { en: "How can we help you?", zh: "我們如何幫助您？" },
  "form.submit": { en: "Request a Call Back", zh: "請求回電" },
  "form.sending": { en: "Sending...", zh: "傳送中..." },
  "form.thankYou": { en: "Thank You!", zh: "謝謝您！" },
  "form.thankYouMsg": { en: "We'll get back to you shortly.", zh: "我們會盡快回覆您。" },

  // Contact page
  "contact.title": { en: "Contact Us", zh: "聯絡我們" },
  "contact.subtitle": {
    en: "Our team is happy to help you and your family achieve that perfect smile",
    zh: "我們的團隊很樂意幫助您和您的家人實現完美的笑容",
  },
  "contact.sendMsg": { en: "Send Us a Message", zh: "發送訊息給我們" },
  "contact.getInTouch": { en: "Get in Touch", zh: "與我們聯繫" },
  "contact.phone": { en: "Phone", zh: "電話" },
  "contact.email": { en: "Email", zh: "電子郵件" },
  "contact.address": { en: "Address", zh: "地址" },
  "contact.hours": { en: "Office Hours", zh: "營業時間" },

  // About page
  "about.title": { en: "Our Office", zh: "我們的診所" },
  "about.subtitle": {
    en: "A warm and welcoming environment designed for your comfort",
    zh: "為您的舒適而設計的溫馨環境",
  },
  "about.welcome.title1": { en: "Welcome to", zh: "歡迎來到" },
  "about.welcome.title2": { en: "Friendly Dental Centre", zh: "友善牙醫中心" },
  "about.welcome.p1": {
    en: "Our friendly team is committed to providing you with the highest level of professional services and personalized care in a warm and welcoming environment. We believe that building strong relationships with our patients is the key to exceptional dental care.",
    zh: "我們友善的團隊致力於在溫馨的環境中為您提供最高水準的專業服務和個人化護理。我們相信與患者建立良好的關係是卓越牙科護理的關鍵。",
  },
  "about.welcome.p2": {
    en: "We understand that visiting the dentist can be stressful. Our highly trained and knowledgeable team is dedicated to providing you with personalized care in a warm and inviting environment. We take time learning about your concerns and answering your questions.",
    zh: "我們了解看牙醫可能令人緊張。我們訓練有素且知識淵博的團隊致力於在溫馨的環境中為您提供個人化護理。我們花時間了解您的顧慮並回答您的問題。",
  },
  "about.welcome.p3": {
    en: "Let us take care of your dental needs while keeping your mind at ease.",
    zh: "讓我們照顧您的牙齒需求，同時讓您安心。",
  },
  "about.team.title1": { en: "Meet Our", zh: "認識我們" },
  "about.team.title2": { en: "Friendly Team", zh: "友善的團隊" },
  "about.team.desc": {
    en: "Our team of highly skilled dentists includes Dr. Patrick Wu, Dr. Mike Pan, Dr. Ivy Lin, and Dr. Jie Chen. Together, they bring decades of combined experience and a shared passion for delivering exceptional dental care.",
    zh: "我們技術精湛的牙醫團隊包括吳醫生、潘醫生、林醫生和陳醫生。他們合力帶來數十年的綜合經驗和對提供卓越牙科護理的共同熱情。",
  },
  "about.visitUs": { en: "Visit Us", zh: "來訪我們" },
  "about.location": { en: "Our Location", zh: "我們的位置" },
  "about.officeHours": { en: "Office Hours", zh: "營業時間" },
  "about.contactUs": { en: "Contact Us", zh: "聯絡我們" },
  "about.getDirections": { en: "Get Directions", zh: "取得路線" },
  "about.callNow": { en: "Call Now", zh: "立即致電" },

  // Services page
  "servicesPage.title": { en: "Our Services", zh: "我們的服務" },
  "servicesPage.subtitle": {
    en: "We have the knowledge and experience to achieve your optimal oral health",
    zh: "我們擁有幫助您實現最佳口腔健康的知識和經驗",
  },
  "servicesPage.cta.title": { en: "Ready to Get Started?", zh: "準備好開始了嗎？" },
  "servicesPage.cta.desc": {
    en: "Contact us today to schedule your appointment and take the first step toward a healthier smile.",
    zh: "今天就聯繫我們預約，踏出走向更健康笑容的第一步。",
  },
  "servicesPage.cta.btn": { en: "Contact Us", zh: "聯絡我們" },

  // Footer
  "footer.desc": {
    en: "Our friendly team is committed to providing you with the highest level of professional services and personalized care.",
    zh: "我們友善的團隊致力於為您提供最高水準的專業服務和個人化護理。",
  },
  "footer.quickLinks": { en: "Quick Links", zh: "快速連結" },
  "footer.services": { en: "Services", zh: "服務項目" },
  "footer.contactInfo": { en: "Contact Info", zh: "聯絡資訊" },
  "footer.officeHours": { en: "Office Hours", zh: "營業時間" },
  "footer.monFri": { en: "Mon – Fri: 9:00am – 6:00pm", zh: "週一至週五：上午9:00 – 下午6:00" },
  "footer.sat": { en: "Saturday: 9:00am – 5:00pm", zh: "週六：上午9:00 – 下午5:00" },
  "footer.sun": { en: "Sunday: Closed", zh: "週日：休息" },
  "footer.visitVancouver": { en: "Visit our Vancouver Office:", zh: "歡迎蒞臨我們的溫哥華診所：" },
  "footer.littleMountain": { en: "Little Mountain Dental Centre", zh: "Little Mountain Dental Centre" },

  // Map section
  "map.title": { en: "Visit Our Office", zh: "蒞臨我們的診所" },
  "map.subtitle": {
    en: "Conveniently located in Richmond, BC",
    zh: "位於列治文，交通便利",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] || entry.en || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
