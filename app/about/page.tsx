import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About BostonHacks Hackathon',
  description: 'Learn about the BostonHacks Hackathon, our mission, history, and the team behind this annual innovation challenge.',
}

const AboutPage = () => {
  return (
    <div className="container mx-auto px-8 py-12">
      <section className="mb-16">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">About BostonHacks Hackathon</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            Where innovation meets collaboration to solve real-world challenges
          </p>
        </div>
        
        <div className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden">
          <Image
            src="/images/hackathon-hero.jpg"
            alt="Participants collaborating at BostonHacks Hackathon"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Fostering Innovation Since 2022</h2>
              <p className="text-lg">Bringing together the brightest minds to create, build, and innovate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              BostonHacks Hackathon aims to cultivate innovation, foster collaboration, and empower the next generation of tech leaders to address pressing challenges facing our world today.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Through our annual event, we bring together diverse talents from across the globe, providing them with a platform to transform their ideas into tangible solutions that can make a real impact.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We believe that by combining creativity, technical expertise, and purpose-driven thinking, we can accelerate positive change and inspire a culture of innovation that extends far beyond the hackathon itself.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Our Core Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-blue-600 dark:text-blue-400 text-sm">✓</span>
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Innovation</h4>
                  <p className="text-gray-600 dark:text-gray-400">Encouraging creative solutions and forward-thinking ideas</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-blue-600 dark:text-blue-400 text-sm">✓</span>
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Collaboration</h4>
                  <p className="text-gray-600 dark:text-gray-400">Fostering teamwork and diverse perspectives</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-blue-600 dark:text-blue-400 text-sm">✓</span>
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Impact</h4>
                  <p className="text-gray-600 dark:text-gray-400">Building solutions that address real-world problems</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-blue-600 dark:text-blue-400 text-sm">✓</span>
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Inclusivity</h4>
                  <p className="text-gray-600 dark:text-gray-400">Creating a welcoming space for participants from all backgrounds</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-blue-600 dark:text-blue-400 text-sm">✓</span>
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Growth</h4>
                  <p className="text-gray-600 dark:text-gray-400">Providing learning opportunities and mentorship</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Our Story</h2>
        <div className="relative border-l-4 border-blue-500 dark:border-blue-400 pl-8 ml-6">
          <div className="mb-12">
            <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-white dark:border-gray-900 bg-blue-500"></div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2022: The Beginning</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              BostonHacks began as a small, local hackathon organized by a group of tech enthusiasts who were passionate about fostering innovation in their community. With just 50 participants, the first event focused on solutions for local businesses.
            </p>
            <p className="text-gray-600 dark:text-gray-400 italic">
              "We never imagined how quickly our little hackathon would grow. The energy and creativity from that first event showed us we had tapped into something special." — Alex Chen, Co-founder
            </p>
          </div>
          
          <div className="mb-12">
            <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-white dark:border-gray-900 bg-blue-500"></div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2023: National Recognition</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              By our second year, BostonHacks had gained national attention. The event expanded to 200 participants from across the country, with a focus on sustainability challenges. Our winning project—an AI-powered waste sorting system—went on to secure venture funding.
            </p>
            <p className="text-gray-600 dark:text-gray-400 italic">
              "Seeing our participants' projects make real-world impact validated everything we were working toward." — Maya Rodriguez, Event Director
            </p>
          </div>
          
          <div className="mb-12">
            <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-white dark:border-gray-900 bg-blue-500"></div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2024: Global Expansion</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              BostonHacks went international, hosting participants from 15 countries. Our focus expanded to include healthcare innovation, with remote participation options and increased access to mentorship from industry leaders. Corporate partnerships helped provide over $50,000 in prizes.
            </p>
            <p className="text-gray-600 dark:text-gray-400 italic">
              "The diversity of perspectives that came with our global expansion led to some truly groundbreaking solutions." — Jamal Washington, Community Manager
            </p>
          </div>
          
          <div>
            <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-white dark:border-gray-900 bg-blue-500"></div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2025: BostonHacks Today</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Now in our fourth year, BostonHacks has evolved into a premier innovation event, attracting over 500 participants worldwide. We've expanded our tracks to include sustainability, healthcare, education, accessibility, and emerging technologies, with year-round community events and workshops.
            </p>
            <p className="text-gray-600 dark:text-gray-400 italic">
              "What makes BostonHacks special isn't just the technology—it's the community and connections that last well beyond the event itself." — Sarah Kim, CEO
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Team members */}
          {[
            {
              name: "Sarah Kim",
              role: "Chief Executive Officer",
              image: "/images/team/sarah.jpg",
              bio: "Former startup founder with a passion for bringing tech talent together"
            },
            {
              name: "Alex Chen",
              role: "Co-founder & CTO",
              image: "/images/team/alex.jpg",
              bio: "Software architect who believes in technology's power to solve complex problems"
            },
            {
              name: "Maya Rodriguez",
              role: "Event Director",
              image: "/images/team/maya.jpg",
              bio: "Experienced event planner with a background in community building"
            },
            {
              name: "Jamal Washington",
              role: "Community Manager",
              image: "/images/team/jamal.jpg",
              bio: "Developer advocate focused on creating inclusive tech spaces"
            }
          ].map((member, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="h-60 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 animate-gradient-xy"></div>
                {/* Uncomment when you have actual images */}
                {/* <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                /> */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl text-white font-bold">
                    {member.name.split(' ').map(part => part[0]).join('')}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1 text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3 font-medium">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Sponsors & Partners</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          BostonHacks Hackathon is made possible through the generous support of our sponsors and partners, who share our commitment to fostering innovation and empowering tech talent.
        </p>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Platinum Sponsors</h3>
            <div className="flex flex-wrap gap-6 justify-center">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-24 w-44 bg-white dark:bg-gray-700 rounded-lg shadow flex items-center justify-center">
                  <div className="text-gray-400 dark:text-gray-500 text-xl font-medium">Sponsor Logo</div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Gold Sponsors</h3>
            <div className="flex flex-wrap gap-6 justify-center">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-20 w-40 bg-white dark:bg-gray-700 rounded-lg shadow flex items-center justify-center">
                  <div className="text-gray-400 dark:text-gray-500 text-xl font-medium">Sponsor Logo</div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Community Partners</h3>
            <div className="flex flex-wrap gap-6 justify-center">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-16 w-32 bg-white dark:bg-gray-700 rounded-lg shadow flex items-center justify-center">
                  <div className="text-gray-400 dark:text-gray-500 text-sm font-medium">Partner Logo</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-blue-600 dark:bg-blue-800 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the BostonHacks Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're a coder, designer, entrepreneur, or creative thinker, there's a place for you in our community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/participate" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Participate in Hackathon
            </Link>
            <Link 
              href="/volunteer" 
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-blue-500"
            >
              Become a Volunteer
            </Link>
            <Link 
              href="/sponsor" 
              className="bg-transparent hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-white"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage;