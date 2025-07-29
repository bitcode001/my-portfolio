
const EducationSection: React.FC = () => {
    const eduStyleBorder = "1px solid rgba(0, 0, 0, 0.07)";
    return (
        <section className="container py-20 max-w-5xl mx-auto" id='education-section'>
            <h2 className="font-bold text-4xl mb-12">Education & Certifications 🎓</h2>

            <div className="space-y-10">
                {/* MSc */}
                <div className="bg-white dark:bg-gray-800 rounded-md p-6" style={{border: eduStyleBorder}}>
                    <h3 className="text-lg font-semibold mb-1">MSc in Software Engineering</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                        University of West London, United Kingdom
                    </p>
                    <p className="text-xs text-gray-500 mt-2">SEP 2022 – SEP 2023</p>
                </div>

                {/* BSc */}
                <div className="bg-white dark:bg-gray-800 rounded-md p-6" style={{border: eduStyleBorder}}>
                    <h3 className="text-lg font-semibold mb-1">
                        BSc (Hons) in Information Technology
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Sunway International Business School, Kathmandu, Nepal
                    </p>
                    <p className="text-xs text-gray-500 mt-2">DEC 2017 - APR 2021</p>
                </div>
            </div>
        </section>
    )
}

export default EducationSection;