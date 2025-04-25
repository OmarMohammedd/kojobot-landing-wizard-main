
import React from 'react';
import { Facebook, Instagram, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="gradient-text">تواصل معنا</span>
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg leading-relaxed">
            نحن هنا للإجابة على جميع استفساراتك وتقديم المزيد من المعلومات حول برامجنا. يمكنك التواصل معنا عبر أي من القنوات التالية:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-kojobot-gradient flex items-center justify-center mb-4">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2">واتساب</h3>
            <p className="text-gray-600 mb-4">تواصل معنا عبر الواتساب للرد السريع</p>

            <Button
  variant="outline"
  className="border-2 border-kojobot-purple hover:bg-kojobot-purple/10 hover:text-kojobot-purple transition-colors"
  onClick={() => {
    window.open("https://wa.me/201551257522", "_blank");
  }}
>
  راسلنا الآن
</Button>


          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-kojobot-gradient flex items-center justify-center mb-4">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2">الهاتف</h3>
            <p className="text-gray-600 mb-4">اتصل بنا مباشرة للاستفسار أو الحجز</p>

            <Button
  variant="outline"
  className="border-2 border-kojobot-purple hover:bg-kojobot-purple/10 hover:text-kojobot-purple transition-colors"
  onClick={() => {
    window.location.href = "tel:+201551257522";
  }}
>
  اتصل بنا
</Button>


            
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-kojobot-gradient flex items-center justify-center mb-4">
              <Facebook className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2">فيسبوك</h3>
            <p className="text-gray-600 mb-4">تابعنا على فيسبوك للأخبار والتحديثات</p>
            
            <a href="https://www.facebook.com/atoztechlearn" target='_blank'>
            <Button variant="outline" className="border-2 border-kojobot-purple hover:bg-kojobot-purple/10 hover:text-kojobot-purple transition-colors">
              زيارة الصفحة
            </Button>

            </a>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-kojobot-gradient flex items-center justify-center mb-4">
              <Instagram className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2">انستجرام</h3>
            <p className="text-gray-600 mb-4">تابعنا على انستجرام لمشاهدة نشاطاتنا</p>

<a href="https://www.instagram.com/kojo_bot?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'>
<Button variant="outline" className="border-2 border-kojobot-purple hover:bg-kojobot-purple/10 hover:text-kojobot-purple transition-colors">
              زيارة الصفحة
      </Button>
</a>


          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
