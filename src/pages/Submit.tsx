import React from 'react';
import { FileUp, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Submit() {
  const [submitted, setSubmitted] = React.useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="border-b-2 border-journal-black pb-4 mb-12">
        <h1 className="text-4xl font-serif font-bold uppercase tracking-tight mb-2">
          {t('Submit Your Manuscript', '投稿指南与在线投稿')}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Guidelines */}
        <div className="lg:col-span-7">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-serif font-bold mb-6 flex items-center">
                <Info className="mr-3 text-journal-red" />
                {t('Author Guidelines', '作者指南')}
              </h2>
              <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
                <p>
                  {t('Before submitting, please ensure your manuscript adheres to the following standards:', '在提交之前，请确保您的稿件符合以下标准：')}
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>{t('Originality:', '原创性：')}</strong> {t('The work must be original and not under consideration elsewhere.', '作品必须是原创的，且未在其他地方考虑发表。')}</li>
                  <li><strong>{t('Format:', '格式：')}</strong> {t('Manuscripts should be submitted in Microsoft Word (.doc or .docx) format.', '稿件应以 Microsoft Word（.doc 或 .docx）格式提交。')}</li>
                  <li><strong>{t('Length:', '篇幅：')}</strong> {t('Research articles should typically be between 6,000 and 10,000 words.', '研究论文通常应在 6,000 至 10,000 字之间。')}</li>
                  <li><strong>{t('Abstract:', '摘要：')}</strong> {t('Include a bilingual abstract (English and Chinese) of 200-300 words.', '包括 200-300 字的中英双语摘要。')}</li>
                  <li><strong>{t('Citations:', '引用：')}</strong> {t('Use APA 7th Edition style for all references and in-text citations.', '所有参考文献和文中引用均使用 APA 第 7 版样式。')}</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold mb-6 flex items-center">
                <CheckCircle className="mr-3 text-journal-red" />
                {t('Review Process', '审稿流程')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { step: '01', title: t('Initial Screening', '初步筛选'), desc: t('Editorial check for scope and quality.', '编辑检查范围和质量。') },
                  { step: '02', title: t('Peer Review', '同行评审'), desc: t('Double-blind review by at least two experts.', '由至少两名专家进行双盲评审。') },
                  { step: '03', title: t('Final Decision', '最终决定'), desc: t('Accept, Revise, or Reject by the Editor.', '由编辑做出接受、修改或拒绝的决定。') },
                ].map((item) => (
                  <div key={item.step} className="p-4 bg-journal-grey rounded border border-journal-border">
                    <span className="text-2xl font-serif font-bold text-journal-red/20 block mb-2">{item.step}</span>
                    <h4 className="font-bold text-sm mb-1 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="p-6 bg-amber-50 border border-amber-200 rounded-lg flex items-start">
              <AlertCircle className="text-amber-600 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-amber-900 mb-1">{t('Open Access Fee', '开放获取费用')}</h4>
                <p className="text-sm text-amber-800">
                  {t(
                    'Asian Business Weekly is a hybrid journal. Authors can choose to publish Open Access for an Article Processing Charge (APC) of $1,500 USD.',
                    '《亚洲商业周刊》是一本混合期刊。作者可以选择支付 1,500 美元的文章处理费 (APC) 以开放获取方式发表。'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Submission Form */}
        <div className="lg:col-span-5">
          <div className="bg-white border border-journal-border rounded-xl shadow-sm p-8 sticky top-24">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2">{t('Submission Received!', '投稿已收到！')}</h3>
                <p className="text-gray-600 mb-8">
                  {t(
                    'Thank you for submitting to Asian Business Weekly. A confirmation email has been sent to your address.',
                    '感谢您向《亚洲商业周刊》投稿。确认邮件已发送至您的邮箱。'
                  )}
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-journal-red font-bold uppercase tracking-widest text-xs hover:underline"
                >
                  {t('Submit another manuscript', '提交另一篇稿件')}
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-serif font-bold mb-6 uppercase tracking-tight">{t('Online Submission Form', '在线投稿表单')}</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">{t('Manuscript Title', '稿件标题')}</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-4 py-3 bg-journal-grey border border-journal-border rounded focus:outline-none focus:border-journal-red transition-colors"
                      placeholder={t("Enter full title...", "输入完整标题...")}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">{t('Corresponding Author', '通讯作者')}</label>
                      <input 
                        required
                        type="text" 
                        className="w-full px-4 py-3 bg-journal-grey border border-journal-border rounded focus:outline-none focus:border-journal-red transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">{t('Email Address', '电子邮箱')}</label>
                      <input 
                        required
                        type="email" 
                        className="w-full px-4 py-3 bg-journal-grey border border-journal-border rounded focus:outline-none focus:border-journal-red transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">{t('Category', '类别')}</label>
                    <select className="w-full px-4 py-3 bg-journal-grey border border-journal-border rounded focus:outline-none focus:border-journal-red transition-colors">
                      <option>{t('Research Article', '研究论文')}</option>
                      <option>{t('Review Paper', '综述论文')}</option>
                      <option>{t('Case Study', '案例研究')}</option>
                      <option>{t('Letter to Editor', '致编辑的信')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">{t('Upload Manuscript (PDF/DOCX)', '上传稿件 (PDF/DOCX)')}</label>
                    <div className="border-2 border-dashed border-journal-border rounded-lg p-8 text-center hover:border-journal-red transition-colors cursor-pointer group">
                      <FileUp className="mx-auto text-gray-400 group-hover:text-journal-red mb-2" size={32} />
                      <p className="text-xs text-gray-500">{t('Drag and drop your file here, or click to browse', '将文件拖放到此处，或点击浏览')}</p>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-journal-red text-white py-4 font-bold uppercase tracking-widest text-sm hover:bg-journal-black transition-colors shadow-lg shadow-journal-red/20"
                  >
                    {t('Submit Manuscript', '提交稿件')}
                  </button>
                  
                  <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                    {t(
                      'By submitting, you agree to our Terms of Service and confirm that this work is original and has not been published elsewhere.',
                      '提交即表示您同意我们的服务条款，并确认该作品为原创且未在其他地方发表。'
                    )}
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
