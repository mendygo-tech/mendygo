"use client"

import React, { useState } from 'react';
import { MapPin, Briefcase, Clock, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CareerPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = ['All', 'AI/ML', 'Web Development', 'Mobile App', 'HR', 'Design', 'DevOps'];

    const jobs = [
        {
            id: 1,
            title: 'Senior Machine Learning Engineer',
            location: 'San Francisco, CA',
            type: 'Full-time',
            category: 'AI/ML',
            requirements: ['Python', 'TensorFlow', 'PyTorch', '5+ years experience'],
            description: 'Build and deploy ML models at scale for our AI-powered products.',
            salary: '$140k - $180k'
        },
        {
            id: 2,
            title: 'Full Stack Developer',
            location: 'New York, NY',
            type: 'Full-time',
            category: 'Web Development',
            requirements: ['React', 'Node.js', 'TypeScript', '3+ years experience'],
            description: 'Develop modern web applications using cutting-edge technologies.',
            salary: '$90k - $130k'
        },
        {
            id: 3,
            title: 'Data Scientist',
            location: 'Austin, TX',
            type: 'Full-time',
            category: 'AI/ML',
            requirements: ['Python', 'R', 'SQL', 'Statistics', '4+ years experience'],
            description: 'Analyze complex datasets to drive business insights and decisions.',
            salary: '$110k - $150k'
        },
        {
            id: 4,
            title: 'React Native Developer',
            location: 'Seattle, WA',
            type: 'Contract',
            category: 'Mobile App',
            requirements: ['React Native', 'JavaScript', 'iOS/Android', '2+ years experience'],
            description: 'Create seamless mobile experiences for iOS and Android platforms.',
            salary: '$70k - $100k'
        },
        {
            id: 5,
            title: 'HR Business Partner',
            location: 'Chicago, IL',
            type: 'Full-time',
            category: 'HR',
            requirements: ['HR Management', 'Employee Relations', 'SHRM Certification', '5+ years experience'],
            description: 'Partner with leadership to develop HR strategies and support employee growth.',
            salary: '$80k - $110k'
        },
        {
            id: 6,
            title: 'UI/UX Designer',
            location: 'Los Angeles, CA',
            type: 'Full-time',
            category: 'Design',
            requirements: ['Figma', 'Adobe Creative Suite', 'User Research', '3+ years experience'],
            description: 'Design intuitive and beautiful user experiences for web and mobile.',
            salary: '$85k - $120k'
        },
        {
            id: 7,
            title: 'DevOps Engineer',
            location: 'Boston, MA',
            type: 'Full-time',
            category: 'DevOps',
            requirements: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', '4+ years experience'],
            description: 'Build and maintain scalable infrastructure and deployment pipelines.',
            salary: '$120k - $160k'
        },
        {
            id: 8,
            title: 'Frontend Developer',
            location: 'Remote',
            type: 'Full-time',
            category: 'Web Development',
            requirements: ['Vue.js', 'CSS3', 'JavaScript', 'Responsive Design', '2+ years experience'],
            description: 'Create stunning frontend experiences with modern web technologies.',
            salary: '$75k - $105k'
        }
    ];

    const filteredJobs = jobs.filter(job => {
        const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.location.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">

            <div className="text-center py-16 px-4">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Join Our Team
                </h1>
                <p className="text-gray-600 dark:text-neutral-300 max-w-2xl mx-auto">
                    We are looking for interns to join our dynamic team and help shape the future of technology.
                </p>
            </div>

            <div className="max-w-md mx-auto mb-8 px-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search jobs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white focus:ring-2 focus:ring-[#abff02] focus:border-transparent"
                    />
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 mb-8">
                <div className="flex flex-wrap gap-3 justify-center">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm cursor-pointer font-medium transition-all ${selectedCategory === category
                                ? 'bg-[#abff02] text-black'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-30">
                    {filteredJobs.map((job) => (
                        <div
                            key={job.id}
                            className="bg-white dark:bg-black rounded-lg p-6 shadow-sm border border-gray-200 dark:border-white/10 hover:shadow-md transition-shadow"
                        >
                            <div className="mb-3">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    {job.title}
                                </h3>
                                <div className="flex items-center text-sm text-gray-600 dark:text-neutral-400 mb-1">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    {job.location}
                                </div>
                                <div className="flex items-center text-sm text-gray-600 dark:text-neutral-400 mb-1">
                                    <Briefcase className="w-4 h-4 mr-1" />
                                    {job.salary}
                                </div>
                                <div className="flex items-center text-sm text-gray-600 dark:text-neutral-400">
                                    <Clock className="w-4 h-4 mr-1" />
                                    {job.type}
                                </div>
                            </div>

                            <p className="text-sm text-gray-600 dark:text-neutral-300 mb-4">
                                {job.description}
                            </p>

                            <div className="flex flex-wrap gap-1 mb-4">
                                {job.requirements.slice(0, 3).map((req, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-400 rounded text-xs"
                                    >
                                        {req}
                                    </span>
                                ))}
                            </div>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScmSHb8b243Kv_y-k3pjH4i7g6wC-O-UkSYt8OZ5ZDT7SzN8A/viewform?pli=1" target="_blank">
                                <Button className="w-full bg-gray-900 dark:bg-white text-white dark:text-black py-2 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-neutral-200 transition-colors">
                                    Apply Now
                                </Button>
                            </a>
                        </div>

                    ))}
                </div>

                {filteredJobs.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-600 dark:text-gray-400">
                            No jobs found. Try adjusting your search.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CareerPage;