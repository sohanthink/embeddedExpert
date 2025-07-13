import React from 'react';

const steps = [
    {
        number: '01',
        title: 'Submit your short application',
        description: 'Experienced professional eager to contribute skills and grow with your team.'
    },
    {
        number: '02',
        title: 'Schedule a call to discuss your goals',
        description: 'Experienced professional eager to contribute skills and grow with your team.'
    },
    {
        number: '03',
        title: 'If accepted, begin onboarding to the next cohort.',
        description: 'Experienced professional eager to contribute skills and grow with your team.'
    }
];

const Apply = () => {
    return (
        <section className="py-16 bg-[#ECF1F9]">
            <div className="container mx-auto relative">
                <div className="hidden md:block absolute top-[220px] left-[330px] px-10 w-[20%] h-0.5 bg-[#2B4DFF47] z-0"></div>
                <div className="hidden md:block absolute top-[220px] right-[330px] px-10 w-[20%] h-0.5 bg-[#2B4DFF47] z-0"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How To Apply</h2>
                <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
                    {steps.map((step, idx) => (
                        <div key={step.number} className="flex flex-col h-96 items-center flex-1 text-center p-10">
                            <span className="text-gray-500 font-semibold mb-2">Step</span>
                            <div className="mb-4">
                                <span className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#407BFF] text-white text-2xl md:text-3xl font-bold shadow-lg" style={{ borderRadius: '40% 60% 60% 40% / 50% 40% 60% 50%' }}>{step.number}</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 px-6">{step.title}</h3>
                            <p className="text-gray-500 max-w-xs mx-auto">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Apply;