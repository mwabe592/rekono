"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

interface IFAQ {
  question: string;
  answer: string;
}
const FAQ: React.FC = () => {
  const faqs: IFAQ[] = [
    {
      question: "Is Rekono secure?",
      answer: "Absolutely, none of your bank data is stored on our servers.",
    },
    {
      question: "Can I use Rekono on multiple devices?",
      answer:
        "Absolutely! Your Rekono account syncs seamlessly across all your devices - smartphone, tablet, and computer.",
    },
    {
      question: "Can I upload different file formats?",
      answer:
        "Rekono currently supports CSV files from most financial institutions and accounting software. We are working on supporting more file formats and integrations. Simply upload your files through our secure portal to start matching.",
    },
    {
      question:
        "Do I need any financial expertise to use the matching features?",
      answer:
        "Not at all! Our smart matching algorithm and educational resources make transaction reconciliation accessible to everyone, regardless of experience level.",
    },
    {
      question: "What if I need help using the app?",
      answer:
        "Our team is available via email to help you make the most of Rekono.",
    },
  ];

  return (
    <section id="faq" className="py-10 lg:py-20">
      <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="">
            <p className="text-waterloo dark:text-manatee hidden lg:block">
              FAQ&apos;S
            </p>
            <span className="font-medium text-black uppercase dark:text-white">
              OUR FAQS
            </span>
            <h2 className="xl:text-hero relative mb-6 text-3xl font-bold text-black dark:text-white">
              Frequently Asked
              <span className="before:bg-titlebg2 dark:before:bg-titlebgdark relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full">
                Questions
              </span>
            </h2>
            <p className="text-waterloo dark:text-manatee text-center lg:mt-10 lg:text-left">
              Ask us anything!
            </p>
            <a
              href="mailto:help@o.app"
              className="text-primary mt-3 block text-center text-xl font-semibold hover:underline lg:text-left lg:text-4xl"
            >
              help@rekono.app
            </a>
          </div>

          <div className="mx-auto w-full border-b lg:max-w-2xl">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-7">
                <Disclosure>
                  {({ open }) => (
                    <div>
                      <DisclosureButton className="border-stroke dark:border-strokedark flex w-full items-center justify-between border-t px-4 pt-7 text-left text-lg">
                        <span className="text-2xl font-semibold text-black dark:text-white">
                          {faq.question}
                        </span>
                        {open ? (
                          <BiMinus className="text-primary h-5 w-5" />
                        ) : (
                          <BiPlus className="text-primary h-5 w-5" />
                        )}
                      </DisclosureButton>
                      <DisclosurePanel className="text-waterloo dark:text-manatee px-4 pt-4 pb-2">
                        {faq.answer}
                      </DisclosurePanel>
                    </div>
                  )}
                </Disclosure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
