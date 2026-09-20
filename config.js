const config = {
    files: [
        {
            name: 'تنزيل ملف ترخيص الشركة ',
            file: 'globxpaypres.pdf',
            steps: []
        },
        {
            name: 'تنزيل ملف Charge Back',
            file: 'Chargeback form.pdf',
            steps: [
                'Verify the customer identity',
                'Check the transaction that the customer is talking about',
                'Ask the customer to fill the Charge back form : Mention to the customer that the result might take up to 45 days',
                'Once the customer send the form, send the email to operations team',
                'يرجى العلم أنه في حال رغبة العميل بتقديم نموذج اعتراض، يتم استيفاء رسوم بقيمة 5 JOD أو 7 USD تكون الرسوم مستردة في حال ثبت وجود خطأ بالحركة وكان الاعتراض صحيح، أما إذا تبين أن الحركة سليمة ولا يوجد فيها أي خطأ، فتكون الرسوم غير مستردة'
                     ]
        },
        {
            name: 'تنزيل ملف Globx Agent Networks',
            file: 'GlobXpay Networks.xlsx',
            steps: []
        },
          {
            name: 'GlobXpay-Aramex Delivery Charges',
            file: 'GlobXpay-Aramex Delivery Charges.xlsx',
            steps: []
        },
        {
            name: 'أسعار إصدار البطاقات وأسعار التوصيل',
            file: 'Card Items Price.xlsx',
            steps: [
                'يحتوي الملف على أسعار إصدار البطاقات لكل جهة: Globx، Valetax، Trading Road، Gabbi Digital',
                'كل صفحة تُبيّن اسم البطاقة بالعربي والإنجليزي، السعر، والعملة (دينار أو دولار)',
                'صفحة "Card deliveries" تحتوي على أسعار التوصيل لجميع الدول',
                'تأكد من اختيار الصفحة الصحيحة حسب الجهة التي يتبع لها العميل قبل إخباره بالسعر'
            ]
        }
    ]
};
